import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    screen.debug();
  });
});
