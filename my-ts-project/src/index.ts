// 基準となるTodoインターフェース
interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

// 1. `Pick` を使って一覧表示用の型を作成
type TodoPreview = Pick<Todo, 'id' | 'title' | 'completed'>;

// 動作確認
const todoPreview: TodoPreview = {
  id: 1,
  title: 'TypeScriptを学ぶ',
  completed: false,
  // description: 'Utility Typesは便利' // エラー: Object literal may only specify known properties
};
console.log('TodoPreview:', todoPreview);

// 2. `Omit` を使って新規作成用の型を作成
type TodoCreation = Omit<Todo, 'id' | 'createdAt'>;

// 動作確認
const newTodo: TodoCreation = {
  title: 'ハンズオンを完了する',
  description: 'Utility Typesの課題を解く',
  completed: false,
  // id: 2 // エラー: 'id' は TodoCreation 型に存在しない
};
console.log('\nTodoCreation:', newTodo);

// 3. `Partial` と `Omit` を組み合わせて更新用の型を作成
type TodoUpdate = Partial<Omit<Todo, 'id' | 'createdAt'>>;

// 動作確認
const updatePayload: TodoUpdate = {
  description: 'より詳細な説明を追記',
  completed: true,
};
console.log('\nTodoUpdate:', updatePayload);

// 4. `Record` を使ってグループ化されたTodoの型を作成
type TodoStatus = 'done' | 'pending';
type GroupedTodos = Record<TodoStatus, TodoPreview[]>;

// 動作確認
const groupedTodos: GroupedTodos = {
  done: [{ id: 2, title: 'Reactの学習', completed: true }],
  pending: [
    { id: 1, title: 'TypeScriptを学ぶ', completed: false },
    { id: 3, title: 'GitHubにプッシュする', completed: false },
  ],
  // in_progress: [] // エラー: 'in_progress' は TodoStatus 型にない
};
console.log('\nGroupedTodos:', groupedTodos);

/*
--- 期待される出力 ---

TodoPreview: { id: 1, title: 'TypeScriptを学ぶ', completed: false }

TodoCreation: { title: 'ハンズオンを完了する', description: 'Utility Typesの課題を解く', completed: false }

TodoUpdate: { description: 'より詳細な説明を追記', completed: true }

GroupedTodos: {
  done: [ { id: 2, title: 'Reactの学習', completed: true } ],
  pending: [
    { id: 1, title: 'TypeScriptを学ぶ', completed: false },
    { id: 3, title: 'GitHubにプッシュする', completed: false }
  ]
}
*/
