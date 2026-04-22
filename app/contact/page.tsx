import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | PluginHive Co",
  description: "Information regarding the delivery of digital products purchased from PluginHive Co.",
};

export default function ShippingPolicyPage() {
  return (
    <main className="bg-brand-dark text-white font-body min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-brand-teal">
          Shipping Policy
        </h1>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold">1. Digital Delivery</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            PluginHive Co specializes exclusively in digital software (WordPress themes and plugins). We do not sell physical goods. Therefore, no physical shipping is required or provided.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold">2. Instant Access</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Immediately upon successful payment verification, you will be redirected to a confirmation page containing download links for your purchased zip files and your software license keys.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold">3. Email Confirmation</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Simultaneously, an automated email containing your invoice, download links, and license keys will be sent to the email address provided during checkout. You can also access your downloads at any time by logging into your PluginHive Co account dashboard.
          </p>
        </section>
      </div>
    </main>
  );
}