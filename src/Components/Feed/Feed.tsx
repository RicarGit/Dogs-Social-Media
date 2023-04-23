import { useEffect, useState, useCallback } from "react"
import { PhotoInfo, SetModal } from "types"

import { FeedModal, FeedPhotos } from "./"

interface UserId {
  user: string
}

export const Feed = ({ user }: UserId) => {
  const [modalPhoto, setModalPhoto] = useState<PhotoInfo | null>(null)
  const [pages, setPages] = useState<number[]>([1])
  const [hasMorePages, setHasMorePages] = useState(true)

  const finalPage = useCallback(() => {
    setHasMorePages(false)
  }, [])

  useEffect(() => {
    let wait = false

    const infiniteScroll = () => {
      if (hasMorePages) {
        const scrollPosition = window.scrollY
        const screenHeight = document.body.offsetHeight - window.innerHeight

        if ((scrollPosition > screenHeight * 0.75) && wait === false) {
          setPages(pages => [...pages, pages.length + 1])
          wait = true

          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)
    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [hasMorePages])

  const setModal: SetModal = (photo) => {
    setModalPhoto(photo)
  }

  return (
    <>
      {modalPhoto && <FeedModal photo={modalPhoto} setModal={setModal} />}
      {pages.map(page =>
        <FeedPhotos key={page} setModal={setModal} user={user} page={page} finalPage={finalPage} />
      )}
    </>
  )
}
