import { useState } from 'react';
import './Modal.css'; 
export const Modal = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        id: Date.now(),
        name: '',
        surname: '',
        age: '',
        info: '',
        email: '',
        city: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); 
    };


    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Добавить нового пользователя</h2>
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
                        <button type="submit">Добавить</button>
                        <button type="button" onClick={onClose}>Отмена</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
