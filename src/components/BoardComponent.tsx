import React, {useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    useEffect(() => {
        highlightCells();
    }, [selectedCell]);

    function handleClick(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(cell);
        } else {
            setSelectedCell(cell);
        }
    }

    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div className="board">
            {
                board.cells.map((cells, index) => {
                    return <React.Fragment key={index}>
                        {
                            cells.map(cell => {
                                return <CellComponent
                                    cell={cell}
                                    handleClick={handleClick}
                                    selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                    key={cell.id}
                                />
                            })
                        }
                    </React.Fragment>
                })
            }
        </div>
    );
};

export default BoardComponent;