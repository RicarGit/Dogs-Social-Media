import * as S from './FeedPhotosItem.styled'
import { PhotoInfo } from 'types/photoInfo'
import { SetModalProps } from 'types/setModal'
import { ImageSkeleton } from 'Components/ImageSkeleton'

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
