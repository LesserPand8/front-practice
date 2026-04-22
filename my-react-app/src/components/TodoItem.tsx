type TodoItemProps = {
  todo: {
    id: number;
    text: string;
  };
  onDelete: (id: number) => void;
};

function TodoItem({ todo, onDelete }: TodoItemProps) {
  return (
    <li>
      {todo.text}
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: "8px" }}>
        削除
      </button>
    </li>
  );
}

export default TodoItem;
