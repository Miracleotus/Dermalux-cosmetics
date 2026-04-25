"use client";

import { motion } from "framer-motion";

export default function RefundPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Refund Policy
        </h1>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-pink">1. Returns</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We want you to love your Dermalux Cosmetics! We offer a 30-day return policy. If 30 days have passed since your purchase, unfortunately, we cannot offer you a refund or exchange. To be eligible for a return, your item must be gently used (less than 20% consumed) or unused, and in the same condition that you received it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-pink">2. Refunds</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. If approved, your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment within 5-7 business days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-pink">3. Non-returnable Items</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Gift cards and certain promotional sale items are final sale and cannot be returned.
          </p>
        </section>
      </motion.div>
    </main>
  );
}