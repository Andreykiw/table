import React, { useState } from 'react';
import { TableRow } from '../TableRow/TableRow'; 
import './Table.css';

export const Table = ({ data }) => {
    const [expandedRows, setExpandedRows] = useState({});

    const handleRowClick = (id) => {
        setExpandedRows((prevExpandedRows) => ({
            ...prevExpandedRows,
            [id]: !prevExpandedRows[id],
        }));
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Возраст</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <TableRow
                        key={row.id}
                        row={row}
                        isExpanded={!!expandedRows[row.id]}
                        onToggle={() => handleRowClick(row.id)}
                    />
                ))}
            </tbody>
        </table>
    );
};
