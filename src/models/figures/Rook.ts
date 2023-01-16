import {Figure, FigureNames} from "./Figure";
import {FigureColors} from "../FigureColors";
import {Cell} from "../Cell";
import whiteRook from "../../assets/white-rook.png";
import blackRook from "../../assets/black-rook.png";

export class Rook extends Figure {
    constructor(color: FigureColors, cell: Cell) {
        super(color, cell);

        this.name = FigureNames.ROOK;
        this.logo = color === FigureColors.WHITE ? whiteRook : blackRook;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        if (this.cell.isEmptyHorizontal(target)) {
            return true;
        }
        if (this.cell.isEmptyVertical(target)) {
            return true;
        }

        return false;
    }
}