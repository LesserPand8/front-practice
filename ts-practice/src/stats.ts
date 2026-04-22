interface Stats {
  sum: number;
  average: number;
  max: number;
  min: number;
}

function calculateStats(numbers: number[]): Stats {
  if (numbers.length === 0) {
    return {
      sum: 0,
      average: 0,
      max: 0,
      min: 0,
    };
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return {
    sum,
    average,
    max,
    min,
  };
}

const scores: number[] = [10, 20, 30, 40, 50];
const stats = calculateStats(scores);

console.log(`合計: ${stats.sum}`);
console.log(`平均: ${stats.average}`);
console.log(`最大: ${stats.max}`);
console.log(`最小: ${stats.min}`);
