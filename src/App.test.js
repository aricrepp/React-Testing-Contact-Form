import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';
import {
  getByPlaceholderText,
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  waitFor,
  fireEvent,
} from '@testing-library/dom'
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom/extend-expect'

test("renders App without crashing", () => {
  render(<App />);
});

test("checking first name", () => {
  const { getByTestId } = render(<ContactForm />);

  const fName = getByTestId(/firstname/i)

  fireEvent.change(fName, {target: {value: 'Aric'}});
  expect(fName.value).toBe('Aric');

}); 

test("checking last name", () => {
  const { getByTestId } = render(<ContactForm />);

  const lName = getByTestId(/lastname/i);

  fireEvent.change(lName, {target: {value: 'Repp'}});
  expect(lName.value).toBe('Repp');

}); 

test("checking email", () => {
  const { getByTestId } = render(<ContactForm />);

  const email = getByTestId(/email/i);

  fireEvent.change(email, {target: {value: 'fakeemail@gmail.com'}});
  expect(email.value).toBe('fakeemail@gmail.com');

}); 