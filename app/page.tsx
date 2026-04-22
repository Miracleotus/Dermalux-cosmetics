"use client";

import Link from "next/link";
import { ArrowRight, LayoutTemplate, ShoppingCart, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

const categories = [
  {
    icon: <LayoutTemplate size={28} />,
    title: "Premium Themes",
    desc: "Responsive, beautifully designed templates for any niche.",
  },
  {
    icon: <ShoppingCart size={28} />,
    title: "E-Commerce Plugins",
    desc: "Powerful extensions to scale your WooCommerce store.",
  },
  {
    icon: <Zap size={28} />,
    title: "Performance Tools",
    desc: "Caching and SEO utilities to keep your site blazing fast.",
  },
];

const whyChooseUs = [
  { title: "Quality Over Quantity", desc: "Every theme and plugin undergoes rigorous testing for compatibility, security, and speed." },
  { title: "Extensive Documentation", desc: "Clear, step-by-step guides and documentation to help you get started quickly." },
  { title: "Priority Support", desc: "Your purchase comes with regular updates and priority customer support when you need it." },
];

const process = [
  { step: "1", title: "Choose Your Solution", desc: "Browse our library and find the perfect theme or plugin for your project." },
  { step: "2", title: "Instant Download", desc: "Complete your secure purchase and download your zip files immediately." },
  { step: "3", title: "Install & Create", desc: "Upload to your WordPress dashboard, follow our quick-start guides, and launch your site faster than ever." },
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
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(201, 169, 97, 0.12) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Build Better Websites, Faster.
          </h1>
          <p className="text-brand-gray max-w-2xl text-lg mb-10 leading-relaxed">
            Welcome to PluginHive Co. Discover premium, clean-coded WordPress themes and powerful plugins designed to elevate your web projects. Whether you&apos;re an agency, freelancer, or store owner, we have the tools you need to succeed.
          </p>
          <Link
            href="/shop"
            className="bg-brand-teal text-brand-dark px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all inline-flex items-center gap-2 rounded-full"
          >
            Explore Our Catalog <ArrowRight size={16} />
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
          Crafted for Performance and Scale.
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed">
          We are a team of passionate developers and designers dedicated to building digital products that just work. At PluginHive Co, we believe that setting up a stunning, high-converting website shouldn&apos;t require compromising on speed or security. Our code is lightweight, our designs are modern, and our support is unmatched.
        </p>
      </motion.section>

      {/* CATEGORIES */}
      <section className="bg-brand-navy/30 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6">
              Everything You Need to Grow
            </h2>
            <p className="text-brand-gray text-center mb-16 text-lg">
              Browse our core categories tailored to modern web creators:
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
                className="border border-white/10 p-6 hover:border-brand-teal/50 transition-all group rounded-2xl bg-white/2 hover:bg-white/5"
              >
                <div className="text-brand-teal mb-4 group-hover:scale-110 transition-transform">
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
          The <span className="text-brand-teal">PluginHive Advantage</span>
        </motion.h2>
        <p className="text-brand-gray text-center max-w-2xl mx-auto mb-16 text-lg">
          Why do thousands of developers trust our products? Because we prioritize quality over quantity. Every theme and plugin undergoes rigorous testing for compatibility, security, and speed. Plus, your purchase comes with extensive documentation, regular updates, and priority customer support.
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
      <section className="bg-brand-navy/30 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="font-display text-4xl font-bold text-center mb-16"
          >
            From Download to Launch in Minutes
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {process.map((p) => (
              <motion.div variants={staggerItem} key={p.step} className="flex gap-8 items-start border-b border-white/10 pb-8">
                <span className="font-display text-5xl font-bold text-brand-teal/40 shrink-0">
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
          Ready to Upgrade Your Website?
        </h2>
        <p className="text-brand-gray max-w-xl mx-auto mb-10 text-lg">
          Join a growing community of web professionals building better digital experiences with PluginHive Co.
        </p>
        <Link
          href="/shop"
          className="bg-brand-teal text-brand-dark px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-brand-teal-light transition-all inline-block rounded-full"
        >
          Shop All Products
        </Link>
      </motion.section>

    </main>
  );
}