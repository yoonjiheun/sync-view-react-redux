import initialModalStore from '../stores/ModalStore';
import ModalEnum from '../enums/ModalEnum';

export function modalReducer(state = initialModalStore, action) {
  switch(action.type) {
    case ModalEnum.MODAL_OPEN:
    return {
      modalActivated: action.payload
    };
    case ModalEnum.MODAL_CLOSE:
    return {
      modalActivated: action.payload
    };
    default:
    return state;
  }
}
