// App.js
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header'; // Шапка с кнопкой загрузки данных
import { Table } from './components/Table'; // Таблица с раскрывающимися строками
import { fetchData } from './data/dataService'; // Имитация API

export const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLoadData = () => {
    setLoading(true); // Включаем состояние загрузки
    fetchData().then((result) => {
      setData(result);
      setLoading(false); // Отключаем состояние загрузки
    });
  };

  return (
    <div>
      <Header onAddClick={handleLoadData} />

      {loading ? (
        <div className="loader">Загрузка...</div>
      ) : (
        <Table data={data} />
      )}
    </div>
  );
};

