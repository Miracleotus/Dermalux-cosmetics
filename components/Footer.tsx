import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-navy/20 border-t border-white/10 pt-16 pb-8 px-6 mt-12 font-body">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Section */}
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3 group mb-6">
            <Image 
              src="/dermalux.png" 
              alt="Dermalux Cosmetics Logo" 
              width={32} 
              height={32} 
              className="group-hover:scale-105 transition-transform object-contain" 
            />
            <span className="font-display text-xl font-bold tracking-tight bg-linear-to-r from-brand-teal to-brand-teal/80 bg-clip-text text-transparent">
              DERMALUX COSMETICS
            </span>
          </Link>
          <p className="text-brand-gray leading-relaxed max-w-sm text-sm">
            Discover luxurious, science-backed skincare and cosmetics designed to nourish your skin and elevate your natural beauty.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="font-display font-bold text-lg mb-6 text-white tracking-wide">Explore</h3>
          <ul className="space-y-4">
            <li><Link href="/shop" className="text-brand-gray hover:text-brand-teal transition-colors text-sm">Shop Collection</Link></li>
            <li><Link href="/about" className="text-brand-gray hover:text-brand-teal transition-colors text-sm">Our Story</Link></li>
            <li><Link href="/contact" className="text-brand-gray hover:text-brand-teal transition-colors text-sm">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-display font-bold text-lg mb-6 text-white tracking-wide">Legal</h3>
          <ul className="space-y-4">
            <li><Link href="/shipping" className="text-brand-gray hover:text-brand-teal transition-colors text-sm">Shipping & Refunds</Link></li>
            <li><Link href="/terms" className="text-brand-gray hover:text-brand-teal transition-colors text-sm">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="text-brand-gray hover:text-brand-teal transition-colors text-sm">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="text-sm text-brand-gray">
          &copy; {new Date().getFullYear()} Dermalux Cosmetics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}