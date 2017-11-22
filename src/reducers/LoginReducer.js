import LoginEnum from '../enums/LoginEnum';

export function loginReducer (state, action) {
  switch(action.type) {
    case LoginEnum.LOGIN_SUCCESS:
    return {
      "email": state.email,
      "password": state.password,
      "emailValidation": state.emailValidation,
      "loginStatus": action.payload
    }

    case LoginEnum.LOGIN_FAILURE:
    return {
      "email": state.email,
      "password": state.password,
      "emailValidation": state.emailValidation,
      "loginStatus": action.payload
    }

    case LoginEnum.LOGIN_REQUESTED:
    return {
      "email": state.email,
      "password": state.password,
      "emailValidation": state.emailValidation,
      "loginStatus": action.payload
    }


    case LoginEnum.EMAIL_INPUT:
    return {
      "email": action.payload,
      "password": state.password,
      "emailValidation": state.emailValidation,
      "loginStatus": state.loginStatus
    }

    case LoginEnum.PASSWORD_INPUT:
    return {
      "email": state.email,
      "password": action.payload,
      "emailValidation": state.emailValidation,
      "loginStatus": state.loginStatus
    }

    case LoginEnum.EMAIL_VALIDATION_CHANGE: {
      return {
        "email": state.email,
        "password": state.password,
        "emailValidation": action.payload,
        "loginStatus": state.loginStatus
      }
    }
    default:
    return {
      "email": '',
      "password": '',
      "emailValidation": LoginEnum.NOT_SET,
      "loginStatus": LoginEnum.LOGIN_FAILURE
    }
  }
}
