export type JoinNilBaseData = {
  title: string
  social: string
  content: {
    left: string
    right:
      | {
          isDesktop: string
          isMobile: string
        }
      | string
  }
}
