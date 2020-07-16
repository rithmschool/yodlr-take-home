import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from './Home';


// smoke test
it("renders without crashing", function() {
  render(<MemoryRouter><Home /></MemoryRouter>);
});

// snapshot test
it("matches snapshot", function() {
  const { asFragment } = render(<MemoryRouter><Home /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});
