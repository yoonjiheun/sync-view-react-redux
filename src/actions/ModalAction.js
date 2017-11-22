import ModalEnum from '../enums/ModalEnum';

export function closeModal() {
  return {
    type: ModalEnum.MODAL_CLOSE,
    payload: false
  };
}

export function openModal() {
  return {
    type: ModalEnum.MODAL_OPEN,
    payload: true
  }
}
