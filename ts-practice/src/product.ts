interface Product {
  name: string;
  price: number;
  quantity: number;
}

function calculateTotal(products: Product[], taxRate: number = 0.1): number {
  const subtotal = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  const total = subtotal * (1 + taxRate);
  return Math.floor(total);
}

const cart: Product[] = [
  { name: "ノートパソコン", price: 100000, quantity: 1 },
  { name: "スマートフォン", price: 50000, quantity: 2 },
  { name: "ヘッドフォン", price: 20000, quantity: 1 },
];

console.log(`合計金額（税込み）: ${calculateTotal(cart)}円`);
console.log(`合計金額（税率8％）: ${calculateTotal(cart, 0.08)}円`);
