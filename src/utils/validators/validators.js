
export const required = value => value ? undefined : 'Обязательное поле!'
export const maxLength = max => value =>
    (value && value.length > max) ? `Должно быть ${max} символов или меньше` : undefined
