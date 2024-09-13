import React, { useState } from 'react';
import './TableRow.css'

export const TableRow = ({ row, isExpanded, onToggle }) => {
    return (
        <>
            <tr>
                <td>
                    <div className="name__cell">
                        {row.name} {row.surname}
                        <button
                            className={`expand__button ${isExpanded ? 'expanded' : ''}`}
                            onClick={onToggle}
                        >
                            {isExpanded ? '∧' : '∨'}
                        </button>
                    </div>
                </td>
                <td>{row.age}</td>
            </tr>
            {isExpanded && (
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
        </>
    );
};
