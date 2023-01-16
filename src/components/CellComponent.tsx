import React from 'react';
import {Cell} from "../models/Cell";

interface CellProps {
    cell: Cell;
    selected: boolean;

    handleClick: (cell: Cell) => void;
}

const CellComponent: React.FC<CellProps> = ({cell, selected, handleClick}) => {
    return (
        <div
            className={['cell', cell.color, selected ? "selected" : ""].join(' ')}
            onClick={() => handleClick(cell)}
            style={{background: cell.available && cell.figure ? 'green' : ''}}
        >
            {cell.available && !cell.figure ? <div className="available"/> : null}
            {cell.figure?.logo ? <img src={cell.figure?.logo} alt={cell.figure.name}/> : null}
        </div>
    );
};

export default CellComponent;