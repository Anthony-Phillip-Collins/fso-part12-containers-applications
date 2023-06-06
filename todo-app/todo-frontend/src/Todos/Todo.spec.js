import { render, screen } from '@testing-library/react';
import Todo from './Todo';

describe('Todo', () => {
  let wrapper = () => (
    <Todo
      todo={todo}
      onClickDelete={onClickDelete}
      onClickComplete={onClickComplete}
    />
  );
  let todo;
  let onClickDelete;
  let onClickComplete;

  beforeEach(() => {
    todo = {
      _id: '1',
      text: 'Something to do',
      done: false,
    };
    onClickDelete = jest.fn();
    onClickComplete = jest.fn();
  });

  it('should render correctly', () => {
    render(wrapper());

    expect(screen.getByText(todo.text)).toBeInTheDocument();
  });
});
