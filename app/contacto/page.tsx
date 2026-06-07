import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with MCRh for property enquiries or management services.",
};

export default function ContactPage() {
  return (
    <main className="pt-32">
      <section className="mx-auto max-w-[1280px] px-6 pb-[120px] md:px-16">
        <div className="mb-16 max-w-2xl">
          <p className="mb-6 text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
            Get in touch
          </p>
          <h1 className="font-serif text-[40px] font-normal leading-[1.2] tracking-[-0.01em] text-midnight md:text-[64px] md:leading-[1.1] md:tracking-[-0.02em]">
            Let&apos;s talk
          </h1>
          <p className="mt-6 text-lg leading-[1.6] text-charcoal">
            Whether you have a property to manage, a stay to book, or simply a
            question — we respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <form className="space-y-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold tracking-[0.15em] text-charcoal uppercase">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-midnight bg-transparent pb-3 text-base text-midnight outline-none placeholder:text-charcoal/40 focus:border-brass-deep"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold tracking-[0.15em] text-charcoal uppercase">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-midnight bg-transparent pb-3 text-base text-midnight outline-none placeholder:text-charcoal/40 focus:border-brass-deep"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold tracking-[0.15em] text-charcoal uppercase">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-b border-midnight bg-transparent pb-3 text-base text-midnight outline-none placeholder:text-charcoal/40 focus:border-brass-deep"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold tracking-[0.15em] text-charcoal uppercase">
                  Enquiry type
                </label>
                <select className="w-full border-b border-midnight bg-transparent pb-3 text-base text-midnight outline-none focus:border-brass-deep">
                  <option value="">Select an option</option>
                  <option value="stay">Book a stay</option>
                  <option value="management">Property management</option>
                  <option value="design">Design services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold tracking-[0.15em] text-charcoal uppercase">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full resize-none border-b border-midnight bg-transparent pb-3 text-base text-midnight outline-none placeholder:text-charcoal/40 focus:border-brass-deep"
                  placeholder="Tell us about your enquiry..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center border border-midnight px-8 py-4 text-xs font-semibold tracking-[0.15em] text-midnight uppercase transition-colors hover:bg-surface-variant"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Contact details */}
          <div className="space-y-12 lg:col-span-4 lg:col-start-9">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
                Address
              </p>
              <p className="text-base leading-[1.6] text-charcoal">
                {siteConfig.address}
                <br />
                Manchester, UK
              </p>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-base text-midnight transition-colors hover:text-brass-deep"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
                WhatsApp
              </p>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-midnight transition-colors hover:text-brass-deep"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
