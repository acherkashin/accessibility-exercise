import classNames from 'classnames';
import { ChangeEventHandler, useCallback, useReducer } from 'react';
import { Dialog } from './Dialog';
import './LoginDialog.css';
import { loginReducer } from './loginReducer';
import { ValidationList } from '../ValidationList/ValidationList';
import { isValid } from './LoginDialogUtils';

export interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

export function LoginDialog({ open, onClose }: LoginDialogProps) {
  const [{
    email,
    emailValidation,
    password,
    passwordValidation
  }, dispatch] = useReducer(loginReducer, { email: '', password: '', emailValidation: [], passwordValidation: [] });

  const handleLoginChanged: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    dispatch({ type: 'set-email', text: e.target.value })
  }, []);

  const handlePasswordChanged: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    dispatch({ type: 'set-password', text: e.target.value });
  }, []);

  const isEmailValid = isValid(emailValidation);
  const isPasswordValid = isValid(passwordValidation);

  return <Dialog className="login-dialog" open={open} title="Вход в личный кабинет" width={700} height={550} onClose={onClose}>
    <div className="login-dialog__content">
      <div className="login-dialog__field">
        <label htmlFor="login" className="login-dialog__label">Логин</label>
        <input id="login" className={classNames("login-dialog__input", {
          "login-dialog__input--invalid": !isEmailValid,
        })}
          type="text"
          aria-describedby="login-validation"
          aria-invalid={!isEmailValid}
          onChange={handleLoginChanged}
          value={email}
          required
        ></input>
        <ValidationList id='login-validation' validations={emailValidation} />
      </div>

      <div className="login-dialog__field">
        <label htmlFor="password" className="login-dialog__label">Пароль</label>
        <input
          id="password"
          className={classNames("login-dialog__input", {
            "login-dialog__input--invalid": !isPasswordValid
          })}
          type="text"
          aria-describedby="password-validation"
          aria-invalid={!isPasswordValid}
          onChange={handlePasswordChanged}
          value={password}
          required
        ></input>
        <ValidationList id='password-validation' validations={passwordValidation} />
      </div>

      <button className="login-dialog__login">Войти</button>
    </div>
  </Dialog>;
}
