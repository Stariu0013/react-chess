import {Figure, FigureNames} from "./Figure";
import {FigureColors} from "../FigureColors";
import {Cell} from "../Cell";
import whiteQueen from "../../assets/white-queen.png";
import blackQueen from "../../assets/black-queen.png";

export class Queen extends Figure {
    constructor(color: FigureColors, cell: Cell) {
        super(color, cell);

        this.name = FigureNames.QUEEN;
        this.logo = color === FigureColors.WHITE ? whiteQueen : blackQueen;
    }
}