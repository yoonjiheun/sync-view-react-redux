import LoginEnum from '../enums/LoginEnum';


export function emailChange(email) {
  return {
    type: LoginEnum.EMAIL_INPUT,
    payload: email
  };
}


export function passwordChange(password) {
  return {
    type: LoginEnum.PASSWORD_INPUT,
    payload: password
  };
}

export function emailValidationChange(validation) {
  return {
    type: LoginEnum.EMAIL_VALIDATION_CHANGE,
    payload: validation
  };
}

export function loginRequest() {
  return {
    type: LoginEnum.LOGIN_REQUESTED,
    payload: LoginEnum.LOGIN_REQUESTED
  };
}

export function loginSuccess() {
  return {
    type: LoginEnum.LOGIN_SUCCESS,
    payload: LoginEnum.LOGIN_SUCCESS
  };
}

export function loginFailure() {
  return {
    type: LoginEnum.LOGIN_FAILURE,
    payload: LoginEnum.LOGIN_FAILURE
  };
}
