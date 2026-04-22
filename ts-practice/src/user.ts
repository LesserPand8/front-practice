interface User {
  name: string;
  age: number;
  email?: string;
}

function formatUser(user: User): string {
  let result = `名前: ${user.name}, 年齢: ${user.age}歳`;
  if (user.email) {
    result += `, メール: ${user.email}`;
  }
  return result;
}
const user1: User = {
  name: "太郎",
  age: 30,
};
const user2: User = {
  name: "花子",
  age: 25,
  email: "hanako@example.com",
};

console.log(formatUser(user1)); // 名前: 太郎, 年齢: 30歳
console.log(formatUser(user2)); // 名前: 花子, 年齢: 25歳, メール:
