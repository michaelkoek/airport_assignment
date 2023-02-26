import React from "react";
import { render } from "@testing-library/react";

import { Input } from "./Input";

describe("Input", () => {
    it("renders correctly as text input", () => {
        const { container } = render(
            <Input
                name="test"
                type="text"
                onChange={jest.fn()}
                placeholder="test"
            />
        );
        expect(container).toMatchSnapshot();
        expect(container).toBeVisible();
    });

    it("renders correctly with properties provided", () => {
        const { getByTestId } = render(
            <Input
                label="test label"
                name="text-input"
                type="text"
                disabled={true}
                onChange={jest.fn()}
                placeholder="text"
            />
        );
        const labelElement = getByTestId("labelname");
        const inputElement = getByTestId("input");

        expect(labelElement).toHaveTextContent("test label");
        expect(inputElement).toContainHTML("input");
        expect(inputElement).toHaveProperty("type");
        expect(inputElement).toHaveProperty("placeholder");
        expect(inputElement).toHaveProperty("value");
        expect(inputElement).toBeDisabled();
    });
});
