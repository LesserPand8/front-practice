interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
}

async function getProducts(): Promise<Product[]> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-lg border border-gray-200 p-4 shadow-sm">
      <h2 className="mb-2 text-lg font-semibold">{product.name}</h2>
      <p className="mb-4 text-sm text-gray-600">{product.description}</p>
      <p className="text-base font-bold">¥{product.price.toLocaleString()}</p>
    </article>
  );
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-2xl font-bold">商品一覧</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
