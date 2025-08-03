import React from "react";
import ProductCard from "./components/ProductCard";

const products = [
  { id: 1, name: "BPC-157", dose: "5 mg", price: "$49.95", points: 300, image: "/images/vial1.png" },
  { id: 2, name: "CJC-1295", dose: "2 mg", price: "$49.95", points: 250, image: "/images/vial2.png" },
  { id: 3, name: "Ipamorelin", dose: "5 mg", price: "$55.00", points: 275, image: "/images/vial3.png" },
  { id: 4, name: "MK-677", dose: "25 mg", price: "$89.00", points: 400, image: "/images/vial4.png" },
];

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <nav className="bg-navy text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-serif font-bold">RVMD Research</div>
          <div className="hidden md:flex gap-6 ml-6 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm hidden md:block">Shop</div>
          <button className="bg-gold text-navy px-4 py-2 rounded-md font-semibold hover:opacity-90 transition">
            Login
          </button>
        </div>
      </nav>
      <div className="bg-navy text-white py-3 text-center text-sm font-medium">
        All products sourced in the USA
      </div>
      <main className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-50">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
