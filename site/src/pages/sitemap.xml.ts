import fs from 'fs'
import flatten from 'lodash.flatten'
import { GetServerSideProps } from 'next'
import { getAllPath } from 'src/strapi'
import { CollectionType } from 'src/strapi/types/CollectionType'
import { Blog } from '../../../admin/src/api/blog/content-types/blog/blog'

const fileExtensionsRegexp = /\.(js|jsx|ts|tsx)$/gi

const pagesArr = [
  { type: 'blogs', url: '/blog/post', params: {} },
  {
    type: 'tags',
    url: '/blog/tag',
    params: {
      filters: {
        blogs: {
          id: {
            $notNull: true,
          },
        },
      },
    },
  },
  {
    type: 'tags',
    url: '/research/tag',
    params: {
      filters: {
        research: {
          id: {
            $notNull: true,
          },
        },
      },
    },
  },
  { type: 'categories', url: '/blog/category', params: {} },
]

const Sitemap = () => {}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const staticPages = fs
    .readdirSync('src/pages')
    .map((x) => x.replace(fileExtensionsRegexp, '')) // removing all file extensions
    .filter((x) => isNaN(parseFloat(x))) // removing all numeric names
    .filter((staticPage) => {
      return !['.DS_Store', '_app', '_document', 'sitemap.xml', 'robots.txt', 'index', 'api'].includes(staticPage)
    }) // removing all blacklisted names
    .map((staticPagePath) => {
      return `${process.env.NEXT_PUBLIC_BASE_URL}/${staticPagePath}`
    }) // adding base url

  const dynamicPages = await Promise.all([
    ...pagesArr.map(async (item) => {
      return getAllPath<Blog>(`${item.type}` as CollectionType, item.params).then((re) =>
        re.map((slug) => `${item.url}/${slug}`),
      )
    }),
  ])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
            `
        })
        .join('')}

        ${flatten(dynamicPages)
          .map((el) => {
            return `
              <url>
                <loc>${process.env.NEXT_PUBLIC_BASE_URL}${el}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.7</priority>
              </url>
              `
          })
          .join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
