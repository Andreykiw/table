const data = [
    { id: 1, name: 'Иван', surname: 'Иванов', age: 28, info: 'инженер', email: 'ivan@example.com', city: 'Санкт-Петербург' },
    { id: 2, name: 'Анна', surname: 'Петрова', age: 22, info: 'дизайнер', email: 'anna@example.com', city: 'Москва' },
    { id: 3, name: 'Алексей', surname: 'Сидоров', age: 35, info: 'менеджер', email: 'alex@example.com', city: 'Саранск' },
    { id: 4, name: 'Екатерина', surname: 'Федорова', age: 29, info: 'бухгалтер', email: 'ekaterina@example.com', city: 'Москва' },
    { id: 5, name: 'Дмитрий', surname: 'Никонов', age: 32, info: 'программист', email: 'dmitry@example.com', city: 'Санкт-Петербург' },
    { id: 6, name: 'Ольга', surname: 'Белова', age: 27, info: 'маркетолог', email: 'olga@example.com', city: 'Москва' },
    { id: 7, name: 'Сергей', surname: 'Щенников', age: 31, info: 'директор', email: 'sergey@example.com', city: 'Санкт-Петербург' },
    { id: 8, name: 'Наталья', surname: 'Тюрина', age: 24, info: 'HR-менеджер', email: 'natalia@example.com', city: 'Москва' },
    { id: 9, name: 'Павел', surname: 'Артюхин', age: 33, info: 'директор по развитию', email: 'pavel@example.com', city: 'Санкт-Петербург' },
    { id: 10, name: 'Елена', surname: 'Александрова', age: 26, info: 'менеджер по продажам', email: 'elena@example.com', city: 'Москва' },
];

// Функция для сохранения данных в localStorage
export const saveDataToLocalStorage = (data) => {
    localStorage.setItem('userData', JSON.stringify(data));
};

// Функция для получения данных из localStorage
export const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : null;
};

// Функция, имитирующая запрос на сервер с задержкой
export const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Проверка наличия данных в localstorages
            const storedData = getDataFromLocalStorage();

            if (storedData) {
                resolve(storedData); // Если данные есть, возвращаем их
            } else {
                // Если данных нет, сохраняем их в localStorage и возвращаем
                saveDataToLocalStorage(data);
                resolve(data);
            }
        }, 1000); // Имитация задержки сервера
    });
};
