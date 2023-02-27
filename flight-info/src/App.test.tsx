import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render an input", () => {
    render(<App />);
    const searchInputElement = screen.getAllByLabelText("Search an Airport");
    expect(searchInputElement).toBeTruthy();
});
