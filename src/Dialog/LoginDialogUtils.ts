export interface ValidationMessage {
  message: string;
  //TODO: добавить тип "success" и переименовать в alert message.
  type: 'error' | 'warning' | 'success';
}

export function validateEmail(email: string): ValidationMessage[] {
  const validations: ValidationMessage[] = [];

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(String(email).toLowerCase())) {
    validations.push({
      message: 'Введённый email имеет некорректный формат.',
      type: 'error',
    })
  } else if (email === "cherkalexander@gmail.com") {
    validations.push({
      message: "✗ Данный email занят.",
      type: 'error'
    })
  } else {
    validations.push({
      message: 'Введённый email свободен',
      type: 'success'
    })
  }

  return validations;
}

export function validatePassword(password: string): ValidationMessage[] {
  const validations: ValidationMessage[] = [];

  if (password.length < 8) {
    validations.push({
      message: "Короткий пароль. Пароль должен состоять минимум из 8 символов.",
      type: "error",
    })
  }

  return validations;
}
