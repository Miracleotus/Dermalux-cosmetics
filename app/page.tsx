"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Droplet, Package } from "lucide-react";
import { motion, Variants } from "framer-motion";

const categories = [
  {
    icon: <Sparkles size={28} />,
    title: "Skincare",
    desc: "Serums, moisturizers, and cleansers that bring out your inner glow.",
  },
  {
    icon: <Droplet size={28} />,
    title: "Makeup",
    desc: "Pigment-rich, skin-loving cosmetics for flawless wear.",
  },
  {
    icon: <Package size={28} />,
    title: "Bundles",
    desc: "Curated kits to simplify your daily regimen.",
  },
];

const whyChooseUs = [
  { title: "Clean Ingredients", desc: "Free from parabens, sulfates, and synthetic fragrances." },
  { title: "Cruelty-Free", desc: "Proudly leaping bunny certified. We never test on animals." },
  { title: "Dermatologist Tested", desc: "Formulated for efficacy and safe for sensitive skin types." },
];

const process = [
  { step: "1", title: "Cleanse & Prep", desc: "Wash away impurities with our Oat Cleanser and balance with our Rose Toner." },
  { step: "2", title: "Treat & Hydrate", desc: "Target concerns with our Vitamin C Serum and lock it in with the Silk Cloud Moisturizer." },
  { step: "3", title: "Enhance", desc: "Finish with our protective SPF and a touch of our Dew Drops Liquid Blush." },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function HomePage() {
  return (
    <main className="bg-brand-dark text-white font-body">

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(229, 169, 169, 0.15) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Reveal Your Most Radiant Self.
          </h1>
          <p className="text-brand-gray max-w-2xl text-lg mb-10 leading-relaxed">
            Discover luxurious, science-backed skincare and cosmetics designed to nourish your skin and elevate your natural beauty.
          </p>
          <Link
            href="/shop"
            className="bg-brand-pink text-brand-dark px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-pink-light transition-all inline-flex items-center gap-2 rounded-full"
          >
            Shop the Collection <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ABOUT SNIPPET */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Beauty That Cares For You
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed">
          At Dermalux Cosmetics, we believe that makeup and skincare should work in harmony. Born from a desire to create high-performance products without harsh chemicals, our collections are meticulously crafted using nourishing, cruelty-free ingredients. We aren`t just covering up flaws; we`re celebrating and protecting the skin you`re in.
        </p>
      </motion.section>

      {/* CATEGORIES */}
      <section className="bg-brand-plum/30 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6">
              Explore Dermalux
            </h2>
            <p className="text-brand-gray text-center mb-16 text-lg">
              Whether you are building a foundational skincare routine or looking for the perfect everyday makeup look, we have you covered.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {categories.map((c) => (
              <motion.div
                variants={staggerItem}
                key={c.title}
                className="border border-white/10 p-6 hover:border-brand-pink/50 transition-all group rounded-2xl bg-white/2 hover:bg-white/5"
              >
                <div className="text-brand-pink mb-4 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-brand-gray leading-relaxed text-sm">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="font-display text-4xl font-bold text-center mb-16"
        >
          The <span className="text-brand-pink">Dermalux Difference</span>
        </motion.h2>
        <p className="text-brand-gray text-center max-w-2xl mx-auto mb-16 text-lg">
          We hold ourselves to the highest standards because your skin deserves nothing less.
        </p>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {whyChooseUs.map((item) => (
            <motion.div variants={staggerItem} key={item.title} className="flex flex-col items-center gap-4">
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="bg-brand-plum/30 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="font-display text-4xl font-bold text-center mb-16"
          >
            Your 3-Step Path to Glowing Skin
          </motion.h2>
          <p className="text-brand-gray text-center max-w-2xl mx-auto mb-16 text-lg">
            Great skin doesn`t have to be complicated. Follow our signature three-step method for a flawless canvas.
          </p>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {process.map((p) => (
              <motion.div variants={staggerItem} key={p.step} className="flex gap-8 items-start border-b border-white/10 pb-8">
                <span className="font-display text-5xl font-bold text-brand-pink/40 shrink-0">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="py-32 px-6 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Ready to Upgrade Your Beauty Routine?
        </h2>
        <p className="text-brand-gray max-w-xl mx-auto mb-10 text-lg">
          Join the Dermalux family today and get 15% off your first order when you sign up for our newsletter.
        </p>
        <Link
          href="/shop"
          className="bg-brand-pink text-brand-dark px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-brand-pink-light transition-all inline-block rounded-full"
        >
          Claim Your Discount
        </Link>
      </motion.section>

    </main>
  );
}