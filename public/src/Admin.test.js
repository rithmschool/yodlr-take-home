import React from "react";
import { render } from "@testing-library/react";
import Admin from './Admin';

it("renders without crashing", function() {
  render(<Admin />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Admin />);
  expect(asFragment()).toMatchSnapshot();
});