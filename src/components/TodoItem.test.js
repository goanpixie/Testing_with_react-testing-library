import React from 'react';
import { render, screen, fireEvent, cleanup} from '@testing-library/react';
import TodoItem from './TodoList';

afterEach(cleanup);

describe('TodoItem', () => {
  test('changes style of TodoItem is checked/unchecked', () => {
    const testMessage = 'Test Message'
    const { queryAllByText, getByLabelText, getByText } = render(
      <TodoItem>{testMessage}</TodoItem>
    )
    expect(queryAllByText(testMessage)).toBe([])
    fireEvent.click(getByLabelText(/show/i))
    expect(getByText(testMessage)).toBeInTheDocument()
    screen.debug();
  });
});