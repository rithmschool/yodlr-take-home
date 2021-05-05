import React from "react";
import { render } from "@testing-library/react";
import Routes from './Routes';

it("renders without crashing", function() {
  render(<Routes />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Routes />);
  expect(asFragment()).toMatchSnapshot();
});