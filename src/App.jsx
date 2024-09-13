import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header'; 
import { Table } from './components/Table/Table'; 
import { Modal } from './components/Modal/Modal'; 
import { fetchData } from './data/dataService'; 

export const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 


  const handleLoadData = () => {
    setLoading(true);
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddRow = (newRow) => {
    setData((prevData) => [...prevData, newRow]); 
    handleCloseModal(); 
  };

  return (
    <div>
      <Header onAddClick={handleLoadData} onAddRowClick={handleOpenModal} />

      {loading ? (
        <div className="loader">Загрузка...</div>
      ) : (
        <Table data={data} />
      )}

      {isModalOpen && (
        <Modal 
          onClose={handleCloseModal} 
          onSubmit={handleAddRow} 
        />
      )}
    </div>
  );
};
