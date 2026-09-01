// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherNodeMax title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherNodeMax/i);
    expect(titleElement).toBeInTheDocument();
});
