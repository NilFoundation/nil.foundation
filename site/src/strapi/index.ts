import qs from 'qs'
import Req from './request'
import { serializeSingle } from './serializers'
import { rebuildBlog } from './rebuildCollection'
import config from './config'
import { Collection, CollectionType } from './types/CollectionType'
import { Blog, Blog_Plain } from '../../../admin/src/api/blog/content-types/blog/blog'
import { client, queryList } from './client'
import { Tag } from '../../../admin/src/api/tag/content-types/tag/tag'
import { StrapiParamters } from './types/parameters'
import { mapBlogItem, mapBlogItemExtend, mapCategory, mapGlossary, mapResearch, mapTag } from './mapping'
import { Researches } from '../../../admin/src/api/researches/content-types/researches/researches'
import { Category } from '../../../admin/src/api/category/content-types/category/category'
import { Glossary, Glossary_Plain } from '../../../admin/src/api/glossary/content-types/glossary/glossary'
import { MappedGlossary } from './types/entities'
import { Page } from '../../../admin/src/api/page/content-types/page/page'
import { title } from 'process'
import { processHtml } from './utils'

export const getBlogPosts = async (params: StrapiParamters = {}) => {
  if (config.USE_MOCK) {
    return []
  }

  const blogs = await queryList<Blog>('blogs', params)

  return blogs.map((blog) => mapBlogItem(blog))
}

export const getBlogPostBySlug = async (slug: string) => {
  if (config.USE_MOCK) {
    return null
  }

  const blog = await queryList<Blog>(`blogs`, {
    filters: {
      slug: {
        $eq: slug,
      },
    },
  })

  if (!blog[0]) return null

  return mapBlogItemExtend(blog[0])
}

export const getCommonPageBySlug = async (slug: string) => {
  if (config.USE_MOCK) {
    return null
  }

  const page = await queryList<Page>(`pages`, {
    filters: {
      slug: {
        $eq: slug,
      },
    },
  })

  if (!page[0]) return null

  return {
    title: page[0].attributes.title || '',
    content: processHtml(page[0].attributes.content) || '',
    slug: page[0].attributes.slug,
  }
}

export const getTags = async (params: StrapiParamters = {}) => {
  if (config.USE_MOCK) {
    return []
  }

  const collection = await queryList<Tag>('tags', params)

  return collection.map((tag) => mapTag(tag))
}

export const getResearches = async (params: StrapiParamters = {}) => {
  if (config.USE_MOCK) {
    return []
  }

  const collection = await queryList<Researches>('research', params)

  return collection.map((research) => mapResearch(research))
}

export const getCategories = async (params: StrapiParamters = {}) => {
  if (config.USE_MOCK) {
    return []
  }

  const collection = await queryList<Category>('categories', params)

  return collection.map((category) => mapCategory(category))
}

export const getGlossary = async (params: StrapiParamters = {}): Promise<MappedGlossary[]> => {
  if (config.USE_MOCK) {
    return []
  }

  const collection = await queryList<Glossary>('glossaries', params)

  return collection.map((x) => mapGlossary(x))
}

export const getSingle = async <T>(type: CollectionType, params = {}): Promise<T | null> => {
  if (config.USE_MOCK) {
    return null
  }
  const document = await Req.GET({
    url: `/${type}/`,
    params: {
      ...params,
    },
    paramsSerializer: qs.stringify,
    withToken: true,
  })

  return serializeSingle(document.data.data, type)
}

export const getSingleBySlug = async <T>(type: CollectionType, slug: string, populate: any): Promise<T | null> => {
  if (config.USE_MOCK) {
    return null
  }
  const document = await Req.GET({
    url: `/${type}/`,
    params: {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate,
    },
    paramsSerializer: qs.stringify,
    withToken: true,
  })

  if (!document.data.data[0]) return null

  return serializeSingle(document.data.data[0], type)
}

export const getAllPath = async <T extends { attributes: { slug?: string } }>(
  type: CollectionType,
  params: StrapiParamters = {},
): Promise<string[]> => {
  if (config.USE_MOCK) {
    return []
  }
  const collection = await queryList<T>(type, params)

  return collection.map((x) => x.attributes.slug || '')
}

export { getSiteConfig } from './getSiteConfig'
