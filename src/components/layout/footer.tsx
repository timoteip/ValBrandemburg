import Link from "next/link";
import { Mail, MapPin, Phone, Printer } from "lucide-react";

import { Container } from "@/components/common/container";
import { primaryNav } from "@/content/nav";
import { services } from "@/content/services";
import { site } from "@/content/site";

const socialLinks = [
  { label: "Facebook", href: site.socials.facebook },
  { label: "Instagram", href: site.socials.instagram },
  { label: "Houzz", href: site.socials.houzz },
].filter((s) => s.href);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 bg-muted/40 mt-24 border-t">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + contact */}
          <div className="lg:col-span-1">
            <p className="font-serif text-xl font-semibold">{site.name}</p>
            <p className="text-muted-foreground mt-3 max-w-xs text-sm">
              Kitchen, bathroom, and whole-home remodeling, crafted to last since {site.foundedYear}
              .
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={site.phone.href}
                  className="hover:text-gold-strong inline-flex items-center gap-2.5 transition-colors"
                >
                  <Phone className="text-gold-strong size-4 shrink-0" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-gold-strong inline-flex items-center gap-2.5 break-all transition-colors"
                >
                  <Mail className="text-gold-strong size-4 shrink-0" />
                  {site.email}
                </a>
              </li>
              <li className="text-muted-foreground flex items-center gap-2.5">
                <Printer className="text-gold-strong size-4 shrink-0" />
                Fax {site.fax.display}
              </li>
              <li className="text-muted-foreground flex items-center gap-2.5">
                <MapPin className="text-gold-strong size-4 shrink-0" />
                {site.serviceArea.join(", ")}
              </li>
            </ul>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold-strong transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="hover:text-gold-strong transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-gold-strong transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-gold-strong font-medium underline-offset-4 hover:underline"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </nav>

          {/* Call to action */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase">Get Started</p>
            <p className="text-muted-foreground mt-4 text-sm">
              Ready to begin? Schedule your free, no-obligation consultation.
            </p>
            <Link
              href="/contact"
              className="bg-gold-strong mt-4 inline-flex h-10 items-center rounded-lg px-5 text-sm font-medium text-white transition-colors hover:bg-[color-mix(in_oklch,var(--gold-strong),black_10%)]"
            >
              Free Consultation
            </Link>
          </div>
        </div>

        <div className="border-border/60 mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-muted-foreground text-xs">
            &copy; {year} {site.name} All rights reserved.
          </p>
          {socialLinks.length > 0 && (
            <ul className="flex items-center gap-5">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-gold-strong text-xs font-medium tracking-wide uppercase transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
}
