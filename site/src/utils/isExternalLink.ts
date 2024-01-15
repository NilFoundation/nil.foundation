import { UrlObject } from 'url'

type Url = string | UrlObject

const isExternalLink = (link: Url) => {
  if (typeof link === 'string') {
    return /^https?:\/\//.test(link) || link.startsWith('mailto:')
  }

  return false
}

export default isExternalLink
