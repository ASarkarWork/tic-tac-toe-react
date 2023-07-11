import { render, fireEvent } from '@testing-library/react';
import Board from './Board';


describe("Tic-Tac-Toe Board tests", () => {
    it("Should render three rows of squares", () => {
        const board = render(<Board/>);
        const rows = board.getAllByTestId("board-row");

        expect(rows.length).toEqual(3);
    })
    it("Should render 9 squares for whole board", () => {
        const board = render(<Board/>);
        const squares = board.getAllByTestId("square");
        
        expect(squares.length).toEqual(9);
    })
    it("Should write X when clicking square", () => {
        const board = render(<Board/>);

        const square = board.getAllByTestId("square")[0];

        fireEvent.click(square);

        expect(square).toHaveTextContent("X");
    })
    it("Should render next player status correctly", () => {
        const board = render(<Board/>);

        const status = board.getByTestId("status");
        const square = board.getAllByTestId("square")[0];

        expect(status).toHaveTextContent("Next player: X");

        fireEvent.click(square);

        expect(status).toHaveTextContent("Next player: O");
    })
    it("Should not allow overwriting square after move", () => {
        const board = render(<Board/>);

        const square = board.getAllByTestId("square")[0];
        
        fireEvent.click(square);

        expect(square).toHaveTextContent("X");

        fireEvent.click(square);
        
        expect(square).toHaveTextContent("X");

    })
    it("Should declare winner correctly if a line matches fully for X", () => {
        const board = render(<Board/>);

        const squares = board.getAllByTestId("square");
        const status = board.getByTestId("status");

        const clickIndices = [0, 3, 4, 2, 8];

        for(let index of clickIndices) {
            fireEvent.click(squares[index]);
        }

        expect(status).toHaveTextContent("Winner: X");
    })
    it("Should declare winner correctly if a line matches fully for O", () => {
        const board = render(<Board/>);

        const squares = board.getAllByTestId("square");
        const status = board.getByTestId("status");

        const clickIndices = [0, 1, 3, 6, 8, 4, 2, 7];

        for(let index of clickIndices) {
            fireEvent.click(squares[index]);
        }

        expect(status).toHaveTextContent("Winner: O");
    })
});