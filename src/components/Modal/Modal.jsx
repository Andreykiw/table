import { useState, useEffect } from 'react';
import './Modal.css';

export const Modal = ({ onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: '',
    surname: '',
    age: '',
    info: '',
    email: '',
    city: '',
  });

  // Если есть начальные данные (редактирование), заполняем форму этими данными
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Проверка возраста
    if (name === 'age') {
      // Проверка на отрицательные значения и возраст более 120
      if (value < 0 || value > 120) {
        alert('Некорректые данные');
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Вызов onSubmit с текущими данными формы
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{initialData ? 'Редактировать пользователя' : 'Добавить нового пользователя'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Имя:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Фамилия:
            <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
          </label>
          <label>
            Возраст:
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </label>
          <label>
            Должность:
            <input type="text" name="info" value={formData.info} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Город:
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </label>
          <div className="modal-actions">
            <button type="submit">{initialData ? 'Сохранить изменения' : 'Добавить'}</button>
            <button type="button" onClick={onClose}>Отмена</button>
          </div>
        </form>
      </div>
    </div>
  );
};
