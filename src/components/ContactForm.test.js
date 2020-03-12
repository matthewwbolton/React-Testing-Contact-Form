import React from 'react';
import { render, fireEvent, getByRole, getAllByRole, getByDisplayValue, getAllByPlaceholderText, getByTestId, findByTestId } from "@testing-library/react";
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test('form renders correctly', () => {
   const { getByLabelText, getByText, getByRole, getByPlaceholderText, getByTestId } = render(<ContactForm />);

   const firstNameInput = getByLabelText(/first name/i);
   const lastNameInput = getByLabelText(/last name/i);
   const emailInput = getByLabelText(/email/i);
   const messageInput = getByLabelText(/message/i);

   fireEvent.change(firstNameInput, { target: { name: 'firstName', value: 'Matthew' }});
   fireEvent.change(lastNameInput, { target: { name: 'lastName', value: 'Bolton' }});
   fireEvent.change(emailInput, { target: { name: 'email', value: 'matthew.bolton.lambda@gmail.com' }});
   fireEvent.change(messageInput, { target: { name: 'message', value: 'This is a test message!' }});

   const submitButton = getByRole('button');
   
//    act(() => {
//        fireEvent.click(submitButton);
//    }); 

// fireEvent.click(submitButton);

const firstNamePlaceholderText = getByPlaceholderText(/first name/i);
const lastNamePlaceholderText = getByPlaceholderText(/last name/i);
const emailPlaceholderText = getByPlaceholderText(/email/i);
const messagePlaceholderText = getByPlaceholderText(/Type Your Message Here/i);






});

