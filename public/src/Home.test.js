import React from "react";
import { render } from "@testing-library/react";
import Home from './Home';

it("renders without crashing", function() {
  render(<Home />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});