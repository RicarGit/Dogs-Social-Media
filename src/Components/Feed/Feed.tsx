import { useState } from "react"
import { PhotoInfo } from "types/photoInfo"
import { SetModal } from "types/setModal"

import { FeedModal } from "./FeedModal"
import { FeedPhotos } from "./FeedPhotos"

interface UserId {
  user: string
}

export const Feed = ({ user }: UserId) => {
  const [modalPhoto, setModalPhoto] = useState<PhotoInfo | null>(null)

  const setModal: SetModal = (photo) => {
    setModalPhoto(photo)
  }

  return (
    <>
      {modalPhoto && <FeedModal photo={modalPhoto} setModal={setModal} />}
        <FeedPhotos key={page} setModal={setModal} user={user} page={page} finalPage={finalPage} />
    </>
  )
}
