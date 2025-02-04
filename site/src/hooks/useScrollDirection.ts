import { useState, useEffect } from 'react'

type ScrollDirection = 'up' | 'down' | null

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null)
  const [prevOffset, setPrevOffset] = useState(0)
  const threshold = 10

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset

      if (Math.abs(currentOffset - prevOffset) < threshold) {
        return
      }

      const direction = currentOffset > prevOffset ? 'down' : 'up'
      setScrollDirection(direction)
      setPrevOffset(currentOffset)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevOffset])

  return scrollDirection
}