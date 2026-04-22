import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: {
    id: number;
    text: string;
  }[];
  onDelete: (id: number) => void;
};

function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoList;
