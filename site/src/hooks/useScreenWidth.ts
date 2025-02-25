'use client'

import { useEffect, useState } from 'react'
import { getScreenWidth } from 'utils/getScreenSize'

export const useScreenWidth = () => {
  const [width, setWidth] = useState(getScreenWidth())
  useEffect(() => {
    let localWidth = getScreenWidth();
    const onResize = () => {
      const newWidth = getScreenWidth()
      if (localWidth !== newWidth) {
        localWidth = newWidth
        setWidth(getScreenWidth())
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return width
}
