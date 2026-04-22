import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PluginHive Co",
  description: "Learn about the PluginHive Co story, our mission, and our core values.",
};

export default function AboutPage() {
  return (
    <main className="bg-brand-dark text-white font-body min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <section>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-brand-teal">
            The PluginHive Co Story
          </h1>
          <p className="text-brand-gray text-lg leading-relaxed">
            PluginHive Co was founded by a small group of web developers who were tired of bloated themes and buggy plugins that slowed down their clients&apos; websites. We realized the market needed a hub for clean, reliable, and beautifully designed WordPress tools. What started as a side project building bespoke plugins has grown into a comprehensive digital marketplace trusted by creators worldwide.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Our mission is to empower creators, entrepreneurs, and agencies by providing them with top-tier, intuitive web development tools. We aim to remove the technical friction from building websites so you can focus on what matters most: your content, your business, and your audience.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Our Core Values
          </h2>
          <ul className="list-disc list-inside text-brand-gray text-lg leading-relaxed space-y-4 ml-4">
            <li>
              <strong className="text-white">Code Quality First:</strong> We write clean, standardized, and secure code.
            </li>
            <li>
              <strong className="text-white">User-Centric Design:</strong> Our interfaces are intuitive and accessible for beginners and pros alike.
            </li>
            <li>
              <strong className="text-white">Unwavering Support:</strong> We stand by our products and are always here to help you troubleshoot and succeed.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}