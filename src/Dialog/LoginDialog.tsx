import { ChangeEventHandler, useCallback, useState } from 'react';
import { Dialog } from './Dialog';
import './LoginDialog.css';

export interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

export function LoginDialog({ open, onClose }: LoginDialogProps) {
  const [login, setLogin] = useState('');
  const handleLoginChanged: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setLogin(e.target.value);
  }, []);

  const [password, setPassword] = useState('');
  const handlePasswordChanged: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return <Dialog className="login-dialog" open={open} title="Вход в личный кабинет" width={700} height={550} onClose={onClose}>
    <div className="login-dialog__content">
      <label className="login-dialog__label">Логин</label>
      <input className="login-dialog__input" type="text" onChange={handleLoginChanged} value={login}></input>

      <label className="login-dialog__label">Пароль</label>
      <input className="login-dialog__input" type="text" onChange={handlePasswordChanged} value={password}></input>

      <button className="login-dialog__login">Войти</button>
    </div>
  </Dialog>;
}
