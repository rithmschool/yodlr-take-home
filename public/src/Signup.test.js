import React from "react";
import { render } from "@testing-library/react";
import Signup from './Signup';

it("renders without crashing", function() {
  render(<Signup />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Signup />);
  expect(asFragment()).toMatchSnapshot();
});