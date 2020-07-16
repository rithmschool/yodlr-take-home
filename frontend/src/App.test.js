import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import App from './App';
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
  render(<MemoryRouter><App /></MemoryRouter>);
});

// snapshot test
it("matches snapshot", function() {
  const { asFragment } = render(<MemoryRouter><App /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});


describe("NavBar links test", function() {
  it("goes to /signup", async function() {
    const { getByText, findByText } = render(<MemoryRouter><App /></MemoryRouter>);
    const signupLink = await findByText("Sign Up");

    fireEvent.click(signupLink);
    expect(getByText("First Name")).toBeInTheDocument();
    expect(getByText("Last Name")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Sign up")).toBeInTheDocument();
  });

  it("goes to /admin", async function() {
    const { getByText, findByText } = render(<MemoryRouter><App /></MemoryRouter>);
    const adminLink = await findByText("Admin");

    fireEvent.click(adminLink);
    expect(getByText("First Name")).toBeInTheDocument();
    expect(getByText("Last Name")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("State")).toBeInTheDocument();
  });

  it("goes to /", async function() {
    const { getByText, findByText } = render(<MemoryRouter><App /></MemoryRouter>);
    const adminLink = await findByText("Admin");
    fireEvent.click(adminLink);
    expect(getByText("First Name")).toBeInTheDocument();
    expect(getByText("Last Name")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("State")).toBeInTheDocument();

    const homeLink = await findByText("Home");
    fireEvent.click(homeLink);
    expect(getByText("Welcome to Yodlr"));
  });
});