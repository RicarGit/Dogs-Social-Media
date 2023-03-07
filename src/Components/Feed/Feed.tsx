import { useState } from "react"
import { FeedModal } from "./FeedModal"
import { FeedPhotos } from "./FeedPhotos"
import { PhotoInfo } from "types/photoInfo"

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState<PhotoInfo | null>(null)

  return (
    <>
      {modalPhoto && <FeedModal photo={modalPhoto.photo} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </>
  )
}
