export interface Validation {
  message: string;
  //TODO: добавить тип "success" и переименовать в alert message.
  type: 'error' | 'warning';
}

export function validateEmail(email: string): Validation[] {
  const validations: Validation[] = [];

  if (email === "cherkalexander@gmail.com") {
    validations.push({
      message: "✗ Данный email занят.",
      type: 'error'
    })
  }

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!emailRegex.test(String(email).toLowerCase())){
    validations.push({
      message: 'Введённый email имеет некорректный формат.',
      type: 'error',
    })
  }

  return validations;
}

export function validatePassword(password: string): Validation[] {
  const validations: Validation[] = [];

  return validations;
}
