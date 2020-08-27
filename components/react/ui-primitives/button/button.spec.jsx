import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./button";

test("button renders", () => {
  const { getByText } = render(<Button>test button</Button>);
  const testButton = getByText(/test button/i);
  expect(testButton).toBeInTheDocument();
});
