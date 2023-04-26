import { useState, useEffect } from "react"

export const useMedia = (media: string) => {
  const [match, setMatch] = useState(false)

  useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media)
      setMatch(matches)
    }

    changeMatch()
    window.addEventListener('resize', changeMatch)

    return () => window.removeEventListener('resize', changeMatch)
  }, [media])

  return match
}
