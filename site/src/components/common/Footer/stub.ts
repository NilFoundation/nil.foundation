import { socialLinks } from 'constants/socials'

export const stub = {
  list: [
    // {
    //   title: 'Products',
    //   links: [
    //     { name: '=nil;', link: '/' },
    //     { name: 'Proof Market ', link: '/proof-market' },
    //     { name: 'zkLLVM Compiler', link: '/zkLLVM' },
    //   ],
    // },
    {
      title: 'Navigation',
      links: [
        { name: 'Blog', link: '/blog' },
        { name: 'Careers', link: '/careers' },
        // { name: 'Research', link: '/research' },
        {
          name: 'Documentation',
          link: 'https://docs.nil.foundation/',
        },
        { name: 'About', link: '/about' },
        { name: 'Conference Game General T&C', link: '/pages/devcon_game_tc' },
        { name: 'Privacy policy', link: '/pages/privacy-policy' },
        // TODO: return after create this page
        // { name: 'Glossary', link: '/glossary' },
      ],
    },
  ],
  socials: [
    {
      title: 'Community',
      icons: [
        { icon: 'github', link: socialLinks.github },
        { icon: 'telegram', link: socialLinks.telegram },
      ],
    },
    // {
    //   title: 'Corporate',
    //   icons: [
    //     {
    //       icon: 'linkedin',
    //       link: socialLinks.linkedin,
    //     },
    //     { icon: 'twitter', link: socialLinks.twitter },
    //   ],
    // },
  ],

  corporate: [
    {
      title: 'Follow us',
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
        name: 'nil (Cyprus) Ltd.: Vasileiou\xa0Makedonos, 59,\xa03040, Limassol, Cyprus',
        link: '',
      },
    ],
  },
  creators: [],
}
