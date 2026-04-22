// 足し算
const add = (a, b) => a + b;

// 引き算
const subtract = (a, b) => a - b;

// 掛け算
const multiply = (a, b) => a * b;

// 割り算（0除算チェック付き）
const divide = (a, b) => {
  if (b === 0) {
    return "エラー: 0で割ることはできません";
  }
  return a / b;
};

const calculate = (a, operator, b) => {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return "エラー: 不正な演算子です";
  }
};

// テスト
console.log("足し算: 10 + 5 =", calculate(10, "+", 5)); // 15
console.log("引き算: 10 - 5 =", calculate(10, "-", 5)); // 5
console.log("掛け算: 10 * 5 =", calculate(10, "*", 5)); // 50
console.log("割り算: 10 / 5 =", calculate(10, "/", 5)); // 2
console.log("割り算: 10 / 0 =", calculate(10, "/", 0)); // エラーメッセージ

const calculations = [
  { a: 100, operator: "+", b: 50 },
  { a: 100, operator: "-", b: 30 },
  { a: 25, operator: "*", b: 4 },
  { a: 100, operator: "/", b: 5 },
  { a: 10, operator: "/", b: 0 },
];

console.log("=== 計算結果 ===");

for (const calc of calculations) {
  const result = calculate(calc.a, calc.operator, calc.b);
  console.log(`${calc.a} ${calc.operator} ${calc.b} = ${result}`);
}

// 計算履歴を保存する配列
const history = [];

// 履歴付き計算関数
const calculateWithHistory = (a, operator, b) => {
  const result = calculate(a, operator, b);
  const record = {
    expression: `${a} ${operator} ${b}`,
    result: result,
    timestamp: new Date().toLocaleString("ja-JP"),
  };
  history.push(record);
  return result;
};

// 履歴を表示する関数
const showHistory = () => {
  console.log("=== 計算履歴 ===");
  if (history.length === 0) {
    console.log("履歴がありません");
    return;
  }
  for (let i = 0; i < history.length; i++) {
    const record = history[i];
    console.log(
      `${i + 1}. ${record.expression} = ${record.result} (${record.timestamp})`,
    );
  }
};

// テスト
calculateWithHistory(100, "+", 200);
calculateWithHistory(50, "*", 3);
calculateWithHistory(100, "/", 4);

showHistory();
