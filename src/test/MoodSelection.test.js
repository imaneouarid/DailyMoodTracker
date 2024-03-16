import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MoodSelection from '../components/MoodSelector';
import '@testing-library/jest-dom';


test('renders mood buttons correctly', () => {
  const { getByText } = render(<MoodSelection onSelect={() => {}} />);
  
  const happyButton = getByText('😊 Happy');
  const sadButton = getByText('😢 Sad');
  const angryButton = getByText('😠 Angry');
  const excitedButton = getByText('😃 Excited');
  const relaxedButton = getByText('😌 Relaxed');
  
  expect(happyButton).toBeInTheDocument();
  expect(sadButton).toBeInTheDocument();
  expect(angryButton).toBeInTheDocument();
  expect(excitedButton).toBeInTheDocument();
  expect(relaxedButton).toBeInTheDocument();
});

test('calls onSelect with correct mood when a button is clicked', () => {
  const mockOnSelect = jest.fn();
  const { getByText } = render(<MoodSelection onSelect={mockOnSelect} />);
  
  const happyButton = getByText('😊 Happy');
  fireEvent.click(happyButton);
  expect(mockOnSelect).toHaveBeenCalledWith('happy');
  
  const sadButton = getByText('😢 Sad');
  fireEvent.click(sadButton);
  expect(mockOnSelect).toHaveBeenCalledWith('sad');
  
  const angryButton = getByText('😠 Angry');
  fireEvent.click(angryButton);
  expect(mockOnSelect).toHaveBeenCalledWith('angry');
  
  const excitedButton = getByText('😃 Excited');
  fireEvent.click(excitedButton);
  expect(mockOnSelect).toHaveBeenCalledWith('excited');
  
  const relaxedButton = getByText('😌 Relaxed');
  fireEvent.click(relaxedButton);
  expect(mockOnSelect).toHaveBeenCalledWith('relaxed');
});
