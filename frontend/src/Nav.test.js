import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Nav from './Nav';


// smoke test
it("renders without crashing", function() {
  render(<MemoryRouter><Nav /></MemoryRouter>);
});

// snapshot test
it("matches snapshot", function() {
  const { asFragment } = render(<MemoryRouter><Nav /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});
