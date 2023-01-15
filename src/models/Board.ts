import {Cell} from "./Cell";
import {FigureColors} from "./FigureColors";
import {Pawn} from "./figures/Pawn";
import {Queen} from "./figures/Queen";
import {King} from "./figures/King";
import {Bishop} from "./figures/Bishop";
import {Knight} from "./figures/Knight";
import {Rook} from "./figures/Rook";

export class Board {
    cells: Cell[][] = [];

    initCells() {
        for(let i = 0 ; i < 8 ; i++) {
            const row: Cell[] = [];

            for(let j = 0 ; j < 8 ; j++) {
                if ((i + j) % 2 === 0) {
                    row.push(new Cell(this, j, i, FigureColors.BLACK, null)); // black
                } else {
                    row.push(new Cell(this, j, i, FigureColors.WHITE, null)); // white
                }
            }
            this.cells.push(row);
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    public addFigures() {
        this.addPawns();
        this.addQueens();
        this.addBishops();
        this.addKnights();
        this.addKings();
        this.addRooks();
    }

    private addPawns() {
        for (let i = 0 ; i < 8 ; i++) {
            new Pawn(FigureColors.BLACK, this.getCell(i, 1));
            new Pawn(FigureColors.WHITE, this.getCell(i, 6));
        }
    }
    private addQueens() {
        new Queen(FigureColors.WHITE, this.getCell(3, 7));
        new Queen(FigureColors.BLACK, this.getCell(3, 0));
    }
    private addBishops() {
        new Bishop(FigureColors.BLACK, this.getCell(2, 0));
        new Bishop(FigureColors.BLACK, this.getCell(5, 0));
        new Bishop(FigureColors.WHITE, this.getCell(2, 7));
        new Bishop(FigureColors.WHITE, this.getCell(5, 7));
    }
    private addKnights() {
        new Knight(FigureColors.BLACK, this.getCell(1, 0));
        new Knight(FigureColors.BLACK, this.getCell(6, 0));
        new Knight(FigureColors.WHITE, this.getCell(1, 7));
        new Knight(FigureColors.WHITE, this.getCell(6, 7));
    }
    private addRooks() {
        new Rook(FigureColors.BLACK, this.getCell(0, 0));
        new Rook(FigureColors.BLACK, this.getCell(7, 0));
        new Rook(FigureColors.WHITE, this.getCell(0, 7));
        new Rook(FigureColors.WHITE, this.getCell(7, 7));
    }
    private addKings() {
        new King(FigureColors.WHITE, this.getCell(4, 7));
        new King(FigureColors.BLACK, this.getCell(4, 0));
    }
}