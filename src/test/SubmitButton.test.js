// SubmitButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SubmitButton from '../components/SubmitButton';

test('clicking on submit button calls onSubmit function', () => {
  const mockOnSubmit = jest.fn();
  const { getByText } = render(<SubmitButton onSubmit={mockOnSubmit} />);
  
  const submitButton = getByText('Submit');
  fireEvent.click(submitButton);

  expect(mockOnSubmit).toHaveBeenCalledTimes(1);
});
