import { PhotoInfo } from "./photoInfo"

export type SetModal = (photo: PhotoInfo) => void

export interface SetModalProps {
  setModal: SetModal
}