import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import NavBar from './NavBar';

it("renders without crashing", function() {
  render(<MemoryRouter><NavBar /></MemoryRouter>);
});

it("matches snapshot", function() {
  const {asFragment} = render(<MemoryRouter><NavBar /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});