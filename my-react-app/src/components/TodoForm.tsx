import { useState } from "react";

type TodoFormProps = {
  onAdd: (text: string) => void;
};

function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" style={{ marginLeft: "8px" }}>
        追加
      </button>
    </form>
  );
}

export default TodoForm;
