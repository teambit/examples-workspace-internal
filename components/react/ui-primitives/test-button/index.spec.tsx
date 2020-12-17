// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import "@testing-library/jest-dom";

import * as React from "react";
import { render, screen } from "@testing-library/react";
import TestButton from "./index";

test("shows the children when the checkbox is checked", () => {
    const label = "Test Button";
    expect(true).toBe(true);
    render(<TestButton label={label} />);

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(screen.getByText(label)).toBeDefined();
});
