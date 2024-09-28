import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Table } from './components/Table/Table';
import { Modal } from './components/Modal/Modal';
import { fetchData } from './data/dataService';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      isModalOpen: false
    };
  }

  
  componentDidMount() {
    this.setState({ loading: true });
    fetchData().then((result) => {
      this.setState({
        data: result,
        loading: false
      });
    });
  }

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleAddRow = (newRow) => {
    this.setState((prevState) => ({
      data: [...prevState.data, newRow]
    }));
    this.handleCloseModal();
  };

  render() {
    const { data, loading, isModalOpen } = this.state;

    return (
      <div>
        <Header
          onAddClick={this.handleLoadData}
          onAddRowClick={this.handleOpenModal}
        />

        {loading ? (
          <div className="loader">Загрузка...</div>
        ) : (
          <Table data={data} />
        )}

        {isModalOpen && (
          <Modal
            onClose={this.handleCloseModal}
            onSubmit={this.handleAddRow}
          />
        )}
      </div>
    );
  }
}
