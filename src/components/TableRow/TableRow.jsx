import React from 'react';
import './TableRow.css';

export const TableRow = ({ row, isExpanded, onToggle }) => {
    return (
        <>
            <div className="table-row">
                <div className="table-cell name__cell">
                    {row.name}
                    <button
                        className={`expand__button ${isExpanded ? 'expanded' : ''}`}
                        onClick={onToggle}
                    >
                        {isExpanded ? '∧' : '∨'}
                    </button>
                </div>
                <div className="table-cell">
                    {row.surname} 
                </div>
            </div>
            {isExpanded && (
                <div className="expanded-row">
                    <div className="expanded-content" colSpan="2">
                        <p className="expanded__content-info">
                            Информация о {row.name}:
                        </p>
                        <p>
                            {row.age} лет, {row.info}, email: {row.email}, город проживания: {row.city}.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};
