import React, {useEffect, useState} from 'react';

import {Board} from "./models/Board";

import './App.css';
import BoardComponent from "./components/BoardComponent";

const App = () => {
    const [board, setBoard] = useState(new Board());

    useEffect(() => {
        restart();
    }, []);

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }
    return (
        <div className="app">
            <BoardComponent board={board} setBoard={() => {}} />
        </div>
    );
};

export default App;
