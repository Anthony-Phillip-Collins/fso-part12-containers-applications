import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('should call onClickDelete when delete button is clicked', async () => {
    const user = userEvent.setup();

    render(wrapper());

    user.click(screen.getByText('Delete'));

    await waitFor(() => expect(onClickDelete).toBeCalledTimes(1));
  });
});
