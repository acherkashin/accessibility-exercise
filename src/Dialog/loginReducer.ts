import { validateEmail, validatePassword, AlertMessage } from './LoginDialogUtils';

export interface LoginReducerState {
  email: string;
  emailValidation: AlertMessage[];
  password: string;
  passwordValidation: AlertMessage[];
}

export interface LoginReducerAction {
  type: "set-password" | "set-email";
  text: string;
}


export function loginReducer(state: LoginReducerState, action: LoginReducerAction): LoginReducerState {
  switch (action.type) {
    case 'set-email': {
      return {
        ...state,
        email: action.text,
        emailValidation: validateEmail(action.text)
      };
    }
    case 'set-password': {
      return {
        ...state,
        password: action.text,
        passwordValidation: validatePassword(action.text)
      };
    }
  }
}
