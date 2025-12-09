
export default function ProductCard({ product }) {
return (
<div className="group bg-white rounded-md border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition">
<div className="relative bg-gray-50">
{product.badge && (
<span className="absolute right-2 top-2 bg-red-500 text-black text-xs font-semibold px-2 py-2 rounded-full">{product.badge}</span>
)}
<img src={product.img} alt={product.title} className="w-full h-56 object-contain p-6 bg-white" />
</div>


<div className="p-4">
<p className="text-xs text-gray-400">{product.category}</p>
<h3 className="mt-1 text-sm font-semibold text-gray-900">{product.title}</h3>


<StarRating />


<div className="mt-3 flex items-baseline gap-2">
<span className="text-sm font-bold text-gray-900">${product.price.toFixed(2)}</span>
{product.originalPrice && (
<span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
)}
</div>
</div>
</div>
);
}

function StarRating() {
  // simple static 0-5 star using inline SVG
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-1 mt-2">
      {stars.map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" stroke="#e5e7eb" strokeWidth="0.8" fill="transparent" />
        </svg>
      ))}
    </div>
  );
}