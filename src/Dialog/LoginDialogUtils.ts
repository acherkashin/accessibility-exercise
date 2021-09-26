export interface AlertMessage {
  message: string;
  type: 'error' | 'warning' | 'success';
}

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateEmail(email: string): AlertMessage[] {
  const validations: AlertMessage[] = [];

  if (!email) {
    return validations;
  } else if (!emailRegex.test(String(email).toLowerCase())) {
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

export function validatePassword(password: string): AlertMessage[] {
  const validations: AlertMessage[] = [];

  if (!password) {
    return validations;
  } else if (password.length < 8) {
    validations.push({
      message: "Короткий пароль. Пароль должен состоять минимум из 8 символов.",
      type: "error",
    })
  } else {
    validations.push({
      message: "Хороший пароль",
      type: "success",
    })
  }

  return validations;
}

export function isValid(messages: AlertMessage[]) {
  const issues = messages.filter(item => item.type !== 'success');

  return issues.length === 0;
}
