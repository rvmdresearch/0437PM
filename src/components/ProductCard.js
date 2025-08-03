import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex justify-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-32 object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-navy text-center">{product.name}</h3>
      <p className="text-center text-sm text-gray-600">{product.dose}</p>
      <p className="text-center font-bold text-navy my-1">{product.price}</p>
      <p className="text-center text-xs text-gray-500 mb-2">Earn {product.points} Points</p>
      <button className="w-full bg-navy text-white py-2 rounded-md hover:bg-gold hover:text-navy transition">
        Select Options
      </button>
      <div className="text-xs text-center mt-2 text-green-600 font-semibold">✓ Third-party Lab Tested</div>
    </div>
  );
}
