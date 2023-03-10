import * as S from './FeedPhotosItem.styled'
import { PhotoInfo } from 'types/photoInfo'
import { SetModalProps } from 'types/setModal'

interface SetModalPhotoData extends SetModalProps {
  photo: PhotoInfo
}

export const FeedPhotosItem = ({ photo, setModal }: SetModalPhotoData) => {
  const handleModalPhoto = () => {
    setModal(photo)
  }

  return (
    <S.FeedPhotosItem onClick={handleModalPhoto}>
      <S.PhotoItem src={photo.src} alt={photo.title} />
      <S.PhotoViews>{photo.acessos}</S.PhotoViews>
    </S.FeedPhotosItem>
  )
}
