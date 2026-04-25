"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Terms and Conditions
        </h1>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Overview</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            This website is operated by Dermalux Cosmetics. Throughout the site, the terms “we”, “us” and “our” refer to Dermalux Cosmetics. By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Products and Services</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Certain products or services may be available exclusively online through the website. We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor`s display of any color (such as our signature pink) will be accurate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. Changes to Terms</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website.
          </p>
        </section>
      </motion.div>
    </main>
  );
}