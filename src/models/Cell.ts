import {FigureColors} from "./FigureColors";
import {Figure} from "./figures/Figure";
import {Board} from "./Board";

export class Cell {
    readonly x;
    readonly y;
    readonly color: FigureColors;

    figure: Figure | null;
    board: Board;
    available: boolean;
    id: number;

    constructor(board: Board, x: number, y: number, color: FigureColors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.board = board;
        this.color = color;
        this.figure = figure;
        this.available = false;
        this.id = Math.random();
    }
}