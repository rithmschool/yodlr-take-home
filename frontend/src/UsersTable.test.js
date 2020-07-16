import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getByTestId, render, fireEvent } from '@testing-library/react';
import UsersTable from './UsersTable';
import { removeUser, updateUser } from './reducer/users/action';


jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

jest.mock('./reducer/users/action', () => ({
  removeUser: jest.fn(),
  updateUser: jest.fn(),
}))

beforeEach(function() {
  useSelector.mockImplementation((selectorFn) =>
    selectorFn({
      users: {
        0: {
          id: 0, firstName: "test0", lastName: "user", state: "active"
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
  render(<MemoryRouter><UsersTable /></MemoryRouter>);
});

// snapshot test
it("matches snapshot", function() {
  const { asFragment } = render(<MemoryRouter><UsersTable /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});

it("Dispatches removeUser() when clicking x icon", function() {
  const mockedDispatch = jest.fn();
  useDispatch.mockReturnValue(mockedDispatch);
  const { getByTestId } = render(<MemoryRouter><UsersTable /></MemoryRouter>);

  const removeBtn = getByTestId("removeBtn-0");
  fireEvent.click(removeBtn);

  expect(mockedDispatch).toHaveBeenCalledWith(removeUser(0));
});

it("Dispatches updateUser() when click on activate button", function() {
  const mockedDispatch = jest.fn();
  useDispatch.mockReturnValue(mockedDispatch);
  const { getByTestId } = render(<MemoryRouter><UsersTable /></MemoryRouter>);

  const activateBtn = getByTestId("activateBtn-1");
  fireEvent.click(activateBtn);

  expect(mockedDispatch).toHaveBeenCalledWith(updateUser({}));
});