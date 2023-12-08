export type JoinNilBaseData = {
  title: string
  social: string
  content: {
    left: string
    newRight:
      | {
          isDesktop: string
          isMobile: string
        }
      | string
    right:
      | {
          isDesktop: string
          isMobile: string
        }
      | string
  }
}
