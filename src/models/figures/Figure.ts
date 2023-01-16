import logo from '../../assets/black-bishop.png'

import {FigureColors} from "../FigureColors";
import {Cell} from "../Cell";

export enum FigureNames {
    FIGURE = 'FIGURE',
    KING = 'KING',
    KNIGHT = 'KNIGHT',
    PAWN = 'PAWN',
    QUEEN = 'QUEEN',
    ROOK = 'ROOK',
    BISHOP = 'BISHOP',
}

export class Figure {
    color: FigureColors;
    cell: Cell;
    logo: typeof logo | null;
    id: number;
    name: FigureNames;


    constructor(color: FigureColors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        if (target.figure?.color === this.color) {
            return false;
        }
        if (target.figure?.name === FigureNames.KING) {
            return false;
        }

        return true;
    }

    moveFigure(target: Cell) {}
}