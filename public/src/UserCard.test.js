import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import UserCard from './UserCard';

it("renders without crashing", function() {
  render(<MemoryRouter><UserCard /></MemoryRouter>);
});

it("matches snapshot", function() {
  const {asFragment} = render(<MemoryRouter><UserCard /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});