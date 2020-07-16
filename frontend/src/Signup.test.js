import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getByLabelText, getByText, render, fireEvent } from '@testing-library/react';
import { addUser } from './reducer/users/action'
import Signup from './Signup';


jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

jest.mock('./reducer/users/action', () => ({
  addUser: jest.fn(),
}))

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
});

// smoke test
it("renders without crashing", function() {
  render(<MemoryRouter><Signup /></MemoryRouter>);
});

// snapshot test
it("matches snapshot", function() {
  const { asFragment } = render(<MemoryRouter><Signup /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});

describe("form values can be update", function() {
  it("first name input", function() {
    const { getByLabelText } = render(<MemoryRouter><Signup /></MemoryRouter>);
    const firstNameInput = getByLabelText("First Name");

    fireEvent.change(firstNameInput, { target: { value: 'test first name' } });
    expect(firstNameInput.value).toBe("test first name");
  });

  it("last name input", function() {
    const { getByLabelText } = render(<MemoryRouter><Signup /></MemoryRouter>);
    const lastNameInput = getByLabelText("Last Name");

    fireEvent.change(lastNameInput, { target: { value: 'test last name' } });
    expect(lastNameInput.value).toBe("test last name");
  });

  it("email input", function() {
    const { getByLabelText } = render(<MemoryRouter><Signup /></MemoryRouter>);
    const emailInput = getByLabelText("Email");

    fireEvent.change(emailInput, { target: { value: 'test email' } });
    expect(emailInput.value).toBe("test email");
  });
});

it("Dispatches addUser() on submit", function() {
  const mockedDispatch = jest.fn();
  useDispatch.mockReturnValue(mockedDispatch);
  const { getByLabelText, getByText } = render(<MemoryRouter><Signup /></MemoryRouter>);

  const firstNameInput = getByLabelText("First Name");
  const lastNameInput = getByLabelText("Last Name");
  const emailInput = getByLabelText("Email");
  fireEvent.change(firstNameInput, { target: { value: 'test first name' } });
  fireEvent.change(lastNameInput, { target: { value: 'test last name' } });
  fireEvent.change(emailInput, { target: { value: 'test email' } });

  const submitBtn = getByText("Sign up");
  fireEvent.click(submitBtn);

  expect(mockedDispatch).toHaveBeenCalledWith(addUser({
    firstName: "test first name",
    lastName: "test last name",
    email: "test email"
  }));
});