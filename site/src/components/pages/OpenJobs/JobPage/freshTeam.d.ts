declare global {
  interface Window {
    freshTeam: {
      JobWidget: {
        init: () => void
      } & any
    }
  }
}

export {}
