import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Table } from './components/Table/Table';
import { Modal } from './components/Modal/Modal';
import { fetchData, saveDataToLocalStorage } from './data/dataService';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // данные таблицы
      loading: false, // индикатор загрузки
      error: null, // состояние для ошибки
      isModalOpen: false, // состояние для модального окна
      editingRow: null, // строка, которую редактируем
      currentPage: 1, // текущая страница
      itemsPerPage: 5, // количество элементов на странице
      totalItems: 0 // общее количество элементов
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    this.setState({ loading: true, error: null });
    fetchData()
      .then((result) => {
        this.setState({
          data: result,
          totalItems: result.length, // Обновляем общее количество элементов
          loading: false
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: 'Ошибка при загрузке данных'
        });
      });
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true, editingRow: null });
  };

  handleOpenEditModal = (row) => {
    this.setState({
      isModalOpen: true,    
      editingRow: row       // Передача данные строки для редактирования
    });
  };
  

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleAddRow = (newRow) => {
    this.setState((prevState) => {
      const updatedData = [...prevState.data, newRow];
      saveDataToLocalStorage(updatedData);
      return { data: updatedData, totalItems: updatedData.length };
    });
    this.handleCloseModal();
  };

  handleEditRow = (updatedRow) => {
    this.setState((prevState) => {
      const updatedData = prevState.data.map((row) =>
        row.id === updatedRow.id ? updatedRow : row
      );
      saveDataToLocalStorage(updatedData);
      return { data: updatedData };
    });
    this.handleCloseModal();
    alert("Данные изменены");
  };

  render() {
    const { data, loading, error, isModalOpen, editingRow, currentPage, itemsPerPage } = this.state;

    // Расчет индексов для пагинации
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <div>
        <Header
          onAddClick={this.loadData}
          onAddRowClick={this.handleOpenModal}
        />

        {loading && <div className="loader">Загрузка...</div>}
        {error && <div className="error">{error}</div>}

        {!loading && !error && (
          <Table
            data={currentData}
            onEditRowClick={this.handleOpenEditModal}
          />
        )}

        {isModalOpen && (
          <Modal
            onClose={this.handleCloseModal}
            onSubmit={editingRow ? this.handleEditRow : this.handleAddRow}
            initialData={editingRow}
          />
        )}

        {/* Пагинация */}
        <div className="pagination">
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
            <button key={i} onClick={() => this.setState({ currentPage: i + 1 })}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
