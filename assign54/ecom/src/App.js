import ProductCard from "./components/Card";
import {products} from "../src/components/items"
export default function ProductGrid() {
return (
<div className="min-h-screen bg-gray-100 py-8">
<header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
<div className="py-4">
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="logo" className="h-8" />
</div>
</header>


<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white border border-gray-200 p-6 sm:p-8">

<div className="flex items-center justify-end mb-6">
<select className="text-sm border border-gray-200 rounded px-3 py-2">
<option>Default sorting</option>
<option>Price: Low to High</option>
</select>
</div>


<div className="flex flex-wrap gap-6">
{products.map((p) => (
<ProductCard key={p.id} product={p} />
))}
</div>


<div className="mt-8 flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center bg-red-50 text-red-600 rounded">1</button>
<button className="w-8 h-8 flex items-center justify-center border rounded">2</button>
<button className="w-8 h-8 flex items-center justify-center border rounded">&gt;</button>
</div>
</div>
</main>

</div>  
);
}