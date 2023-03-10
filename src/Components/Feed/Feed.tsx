import { useState } from "react"
import { PhotoInfo } from "types/photoInfo"
import { SetModal } from "types/setModal"

import { FeedModal } from "./FeedModal"
import { FeedPhotos } from "./FeedPhotos"

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState<PhotoInfo | null>(null)

  const setModal: SetModal = (photo) => {
    setModalPhoto(photo)
  }

  return (
    <>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos setModal={setModal} />
    </>
  )
}
