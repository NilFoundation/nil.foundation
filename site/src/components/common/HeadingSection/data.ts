import { socialLinks } from 'constants/socials'

export const headingIcons = {
  community: [
    { icon: 'discord', link: socialLinks.discord },
    { icon: 'github', link: socialLinks.github },
    { icon: 'telegram', link: socialLinks.telegram },
    { icon: 'dev-portal', link: socialLinks.devPortal },
  ],
  corporate: [
    {
      icon: 'linkedin',
      link: socialLinks.linkedin,
    },
    { icon: 'twitter', link: socialLinks.twitter },
  ],
} as const
