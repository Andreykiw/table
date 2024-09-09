// Header.js

export const Header = ({ onAddClick }) => {
    return (
        <header className="app-header">
            <button className="add__row-plus" onClick={onAddClick} ></button>
        </header>
    );
};

