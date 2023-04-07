import { useEffect } from 'react'

interface HeadProps {
  title: string
  description?: string
}

export const Head = ({ title, description }: HeadProps) => {
  useEffect(() => {
    document.title = `${title} | Dogs`
    document
      .querySelector("meta[name='description']")
      ?.setAttribute('content', description || '')
  }, [title, description])

  return (
    <></>
  )
}
