import React, { useState } from 'react';


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
                    <React.Fragment key={row.id}>
                        <tr>
                            <td>
                                <div className="name__cell">
                                    {row.name} {row.surname}
                                    <button
                                        className={`expand__button ${expandedRows[row.id] ? 'expanded' : ''}`}
                                        onClick={() => handleRowClick(row.id)}
                                    >
                                        {expandedRows[row.id] ? '∧' : '∨'}
                                    </button>
                                </div>
                            </td>
                            <td>{row.age}</td>
                        </tr>
                        {expandedRows[row.id] && (
                            <tr>
                                <td colSpan="2">
                                    <div className="expanded__content">
                                        <p className="expanded__content-info">
                                            Информация о {row.name}:
                                        </p>
                                        <p> {row.age} лет, {row.info}, email: {row.email}, город проживания: {row.city}.</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
};
