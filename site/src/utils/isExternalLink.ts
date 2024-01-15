const isExternalLink = (link: string) => /^https?:\/\//.test(link) || link.startsWith('mailto:')

export default isExternalLink
