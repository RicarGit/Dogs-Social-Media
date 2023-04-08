import * as S from './FeedPhotosItem.styled'
import { PhotoInfo, SetModalProps } from 'types'
import { ImageSkeleton } from 'Components'

interface SetModalPhotoData extends SetModalProps {
  photo: PhotoInfo
}

export const FeedPhotosItem = ({ photo, setModal }: SetModalPhotoData) => {
  const handleModalPhoto = () => {
    setModal(photo)
  }

  return (
    <S.FeedPhotosItem onClick={handleModalPhoto}>
      <ImageSkeleton src={photo.src} alt={photo.title} />
      <S.PhotoViews>{photo.acessos}</S.PhotoViews>
    </S.FeedPhotosItem>
  )
}
