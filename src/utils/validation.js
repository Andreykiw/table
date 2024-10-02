// validation.js
export const validateForm = (formData) => {
    const errors = {};

    if (!formData.name.trim()) {
        errors.name = 'Имя обязательно для заполнения';
    }

    if (!formData.surname.trim()) {
        errors.surname = 'Фамилия обязательна для заполнения';
    }

    if (!formData.age) {
        errors.age = 'Возраст обязателен для заполнения';
    } else if (formData.age < 0 || formData.age > 120) {
        errors.age = 'Возраст должен быть в пределах от 0 до 120 лет';
    }

    if (!formData.info.trim()) {
        errors.info = 'Должность обязательна для заполнения';
    }

    if (!formData.email.trim()) {
        errors.email = 'Email обязателен для заполнения';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Некорректный формат email';
    }

    return errors;
};
