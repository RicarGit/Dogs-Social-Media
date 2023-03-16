import { PhotoInfo } from "./photoInfo"

export type SetModal = (photo: PhotoInfo | null) => void

export interface SetModalProps {
  setModal: SetModal
}