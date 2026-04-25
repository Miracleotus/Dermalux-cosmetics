"use client";

import { useState, useRef } from "react";
import { products, Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShopPage() {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setNotification(`${product.name} has been added to your cart!`);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shop Our Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-white/10 rounded-2xl p-6 flex flex-col gap-4 bg-white/5 hover:bg-white/8 transition-all border-t-2 border-t-brand-pink hover:border-t-brand-pink-light hover:shadow-lg hover:shadow-brand-pink/20 group">
            <Link href={`/shop/${product.id}`} className="flex flex-col gap-4 flex-1">
              <span className="text-xs text-brand-pink uppercase tracking-widest font-semibold">{product.category}</span>
              <h2 className="text-xl font-semibold group-hover:text-brand-pink-light transition-colors">{product.name}</h2>
              <p className="text-white/60 text-sm flex-1">{product.shortDesc}</p>
            </Link>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-bold text-brand-pink">{formatPrice(product.price)}</span>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-brand-pink text-brand-dark text-sm font-semibold px-4 py-2 rounded-full hover:bg-brand-pink-light transition flex items-center gap-2"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-brand-pink text-brand-dark px-6 py-4 rounded-2xl shadow-xl shadow-brand-pink/20 font-semibold flex items-center gap-3 z-50"
          >
            <CheckCircle size={20} />
            {notification}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}