import { render, fireEvent } from '@testing-library/react';
import Square from './Square';


describe("Tic-Tac-Toe Square tests", () => {
    it("Should render square with X", () => {
        const square = render(<Square value="X"/>);

        expect(square.getByTestId("square")).toHaveTextContent("X");
    })

    it("Should render square with O", () => {
        const square = render(<Square value="O"/>);

        expect(square.getByTestId("square")).toHaveTextContent("O");
    })

    it("Should fire onClick", () => {
        let flag = false;

        const testClick = () => {
            flag = true;
        };
        const square = render(<Square value="X" squareClick={testClick}/>);

        const squareElement = square.getByTestId("square");
        fireEvent.click(squareElement);

        expect(flag).toBeTruthy();
    })
});