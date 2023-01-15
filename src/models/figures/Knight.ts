import {Figure, FigureNames} from "./Figure";
import {FigureColors} from "../FigureColors";
import {Cell} from "../Cell";
import whiteKnight from "../../assets/white-knight.png";
import blackKnight from "../../assets/black-knight.png";

export class Knight extends Figure {
    constructor(color: FigureColors, cell: Cell) {
        super(color, cell);

        this.name = FigureNames.KNIGHT;
        this.logo = color === FigureColors.WHITE ? whiteKnight : blackKnight;
    }
}