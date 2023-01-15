import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";
import {FigureColors} from "../FigureColors";

import blackBishop from '../../assets/black-bishop.png';
import whiteBishop from '../../assets/white-bishop.png';

export class Bishop extends Figure {
    constructor(color: FigureColors, cell: Cell) {
        super(color, cell);

        this.name = FigureNames.BISHOP;
        this.logo = color === FigureColors.WHITE ? whiteBishop : blackBishop;
    }
}