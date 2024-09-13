import './Header.css';

export const Header = ({ onAddClick, onAddRowClick }) => {
    return (
        <header className="app-header">
            <button className="load__data-button" onClick={onAddClick}>
                Загрузить данные
            </button>
            <button className="add__row-plus" onClick={onAddRowClick}/>
            
        </header>
    );
};


