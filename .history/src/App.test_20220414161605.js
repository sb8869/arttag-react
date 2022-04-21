import { render, screen } from '@testing-library/react';
import App from './App';
//import{BrowserRouter as Router} from 'react-router-dom';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learnreact/i);
  expect(linkElement).toBeInTheDocument();
});

