import {Figure, FigureNames} from "./Figure";
import {FigureColors} from "../FigureColors";
import {Cell} from "../Cell";
import whitePawn from "../../assets/white-pawn.png";
import blackPawn from "../../assets/black-pawn.png";

export class Pawn extends Figure {
    constructor(color: FigureColors, cell: Cell) {
        super(color, cell);

        this.name = FigureNames.PAWN;
        this.logo = color === FigureColors.WHITE ? whitePawn : blackPawn;
    }
}