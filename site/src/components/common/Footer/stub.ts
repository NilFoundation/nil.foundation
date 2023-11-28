import { socialLinks } from 'constants/socials'

export const stub = {
  list: [
    {
      title: 'Products',
      links: [
        { name: '=nil;', link: '/' },
        { name: 'Proof Market ', link: '/proof-market' },
        { name: 'zkLLVM Compiler', link: '/zkLLVM' },
      ],
    },
    {
      title: 'Navigation',
      links: [
        { name: 'Blog', link: '/blog' },
        { name: 'Careers', link: '/careers' },
        { name: 'Research', link: '/research' },
        {
          name: 'Documentation',
          link: 'https://docs.nil.foundation/',
        },
        { name: 'About', link: '/about' },
        // TODO: return after create this page
        // { name: 'Glossary', link: '/glossary' },
      ],
    },
  ],
  socials: [
    {
      title: 'Community',
      icons: [
        { icon: 'discord', link: socialLinks.discord },
        { icon: 'github', link: socialLinks.github },
        { icon: 'telegram', link: socialLinks.telegram },
        { icon: 'dev-portal', link: socialLinks.devPortal },
      ],
    },
    {
      title: 'Corporate',
      icons: [
        {
          icon: 'linkedin',
          link: socialLinks.linkedin,
        },
        { icon: 'twitter', link: socialLinks.twitter },
      ],
    },
  ],

  address: {
    title: 'Address',
    places: [
      {
        name: 'nil: P.O. box 2775, Artemis House, 67 Fort Street, Grand Cayman, KY1-1111, Cayman Islands',
        link: '',
      },
      {
        name: 'nil (Cyprus) Ltd.: Vasileiou Makedonos, 59, 3040, Limassol, Cyprus',
        link: '',
      },
    ],
  },

  creators: [{ name: 'Designed by Redis', link: 'https://www.redis.agency/' }],
}
