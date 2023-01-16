import {Figure, FigureNames} from "./Figure";
import {FigureColors} from "../FigureColors";
import {Cell} from "../Cell";
import whiteKing from "../../assets/white-king.png";
import blackKing from "../../assets/black-king.png";

export class King extends Figure {
    constructor(color: FigureColors, cell: Cell) {
        super(color, cell);

        this.name = FigureNames.KING;
        this.logo = color === FigureColors.WHITE ? whiteKing : blackKing;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        return true;
    }
}