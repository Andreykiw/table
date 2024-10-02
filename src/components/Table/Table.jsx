import React, { useState } from 'react';
import { TableRow } from '../TableRow/TableRow';
import './Table.css';

export const Table = ({ data, onEditRowClick }) => {
    if (!data || !Array.isArray(data)) {
        return <div>Нет данных для отображения</div>;
    }
    const [expandedRows, setExpandedRows] = useState({});

    // Функция для управления раскрытием строк
    const handleRowClick = (id) => {
        setExpandedRows((prevExpandedRows) => ({
            ...prevExpandedRows,
            [id]: !prevExpandedRows[id],
        }));
    };

    return (
        <div className="table">
            <div className="table-header">
                <div className="table-cell">Имя</div>
                <div className="table-cell">Фамилия</div>
            </div>
            <div className="table-body">
                {data.map((row) => (
                    <TableRow
                        key={row.id}
                        row={row}
                        isExpanded={!!expandedRows[row.id]}
                        onToggle={() => handleRowClick(row.id)}
                        onEdit={() => onEditRowClick(row)} //  Функция редактирования с текущей строкой
                    />
                ))}
            </div>
        </div>
    );
};
