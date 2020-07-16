import React from 'react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import Routes from './Routes';
import { useSelector, useDispatch } from 'react-redux';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

beforeEach(function() {
  useSelector.mockImplementation((selectorFn) =>
    selectorFn({
      users: {
        0: {
          id: 0, firstName: "test", lastName: "user", state: "active"
        },
        1: {
          id: 1, firstName: "test1", lastName: "user", state: "pending"
        }
      }
    })
  );
})

// smoke test
it("renders without crashing", function() {
  render(<MemoryRouter><Routes /></MemoryRouter>);
});

// snapshot test
it("matches snapshot", function() {
  const { asFragment } = render(<MemoryRouter><Routes /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});

describe("Route setup tests", function() {
  it("/", function() {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}><Routes /></MemoryRouter>
    );
    expect(getByText("Welcome to Yodlr")).toBeInTheDocument();
  })

  it("/admin", function() {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/admin']}>
        <Routes />
      </MemoryRouter>
    );
    expect(getByText("First Name")).toBeInTheDocument();
    expect(getByText("Last Name")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("State")).toBeInTheDocument();
  })

  it("/signup", function() {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/signup']}>
        <Routes />
      </MemoryRouter>
    );
    expect(getByText("First Name")).toBeInTheDocument();
    expect(getByText("Last Name")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Sign up")).toBeInTheDocument();
  })

  it("/(not-found)", function() {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/not-found']}>
        <Routes />
      </MemoryRouter>
    );

    expect(getByText("Welcome to Yodlr")).toBeInTheDocument();
    expect(window.location.pathname).toBe('/');
  })
});