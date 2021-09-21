import { ChangeEventHandler, useCallback, useState } from 'react';
import { Dialog } from './Dialog';
import './LoginDialog.css';
import { validateEmail, Validation } from './LoginDialogUtils';
import { ValidationList } from './ValidationList';

export interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

export function LoginDialog({ open, onClose }: LoginDialogProps) {
  const [login, setLogin] = useState('');
  //TODO: use useReducer instead of useState for loginValidations and email and update validations when login is updated
  const [loginValidations, setLoginValidations] = useState<Validation[]>([]);

  const handleLoginChanged: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const email = e.target.value;
    setLogin(email);
    setLoginValidations(validateEmail(email));
  }, []);

  const [password, setPassword] = useState('');
  const handlePasswordChanged: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return <Dialog className="login-dialog" open={open} title="Вход в личный кабинет" width={700} height={550} onClose={onClose}>
    <div className="login-dialog__content">
      <div className="login-dialog__field">
        <label htmlFor="login" className="login-dialog__label">Логин</label>
        <input id="login" className="login-dialog__input" type="text" onChange={handleLoginChanged} value={login} required aria-required={true}></input>
        <ValidationList validations={loginValidations}/>
      </div>

      <div className="login-dialog__field">
        <label htmlFor="password" className="login-dialog__label">Пароль</label>
        <input id="password" className="login-dialog__input" type="text" onChange={handlePasswordChanged} value={password} required aria-required={true}></input>
      </div>

      <button className="login-dialog__login">Войти</button>
    </div>
  </Dialog>;
}
