import { SyntheticEvent, useState } from 'react'
import * as S from './ImageSkeleton.styled'

interface SkeletonProps {
  [key: string]: string
}

export const ImageSkeleton = (props: SkeletonProps) => {
  const [skeleton, setSkeleton] = useState(true)

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    setSkeleton(false)
    event.currentTarget.style.opacity = "1"
  }

  return (
    <S.ImageSkeletonWrapper>
      {skeleton && <S.Skeleton />}
      <S.LoadedImage onLoad={handleLoad} {...props} />
    </S.ImageSkeletonWrapper>
  )
}
