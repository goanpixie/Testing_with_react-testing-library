import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText('My Awesome List')).toBeInTheDocument();
    screen.debug();
  });
});



// test('renders learn react link', () => {
//   render(<App />);
//   expect(screen.queryByText('My awesome list').innerHTML).toBe(
//     'My awesome list'
//   );
// });
