import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";

test("Selecting checkbox should change value to true", () => {
    render(<Checkbox />);
    const checkbox = screen.getByLabelText(/not checked/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});