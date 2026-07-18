# Launch Checklist

Everything the site needs before it goes live. The build is complete; what
remains is real content and configuration. Items are grouped by who owns them.

## Content from the client

- [ ] **Project photos.** Every image is currently a placeholder. Replace the
      files and clear the `placeholder: true` flag on each entry so the real
      photo renders instead of the branded stand-in.
  - Services — 10 photos, one per service (`src/content/services.ts`,
    `public/images/services/`)
  - Gallery — 12 project photos (`src/content/gallery.ts`,
    `public/images/gallery/`)
  - About — workshop photo (`src/content/images.ts` → `aboutWorkshop`)
  - Hero — currently a stock photo; swap for a real project shot if available
    (`src/content/images.ts` → `heroKitchen`)
  - Social share image — 1200×630 (`src/content/images.ts` → `ogDefault`), then
    wire it into `openGraph.images` in `src/app/layout.tsx`
- [ ] **Testimonials.** The current entries are clearly-marked samples and are
      hidden automatically in production. Supply genuine, attributable reviews in
      `src/content/testimonials.ts` (remove `placeholder: true`) to make the
      section appear.
- [ ] **Business details** in `src/content/site.ts` (marked `PLACEHOLDER`):
      street address, business hours, service area, phone/fax/email, and social
      profile links. These feed the footer, contact page, and structured data.
- [ ] **FAQ specifics.** Two answers are marked `needsConfirmation` in
      `src/content/faq.ts` — service area and licensing/insurance. They appear in
      FAQ structured data that search engines read, so confirm them for accuracy.
- [ ] **Privacy policy review.** `src/content/privacy.ts` is a plain-language
      draft. Have it reviewed to confirm it matches actual data practices and any
      applicable requirements before publishing.

## Configuration and deployment

- [ ] **Site URL.** Set `NEXT_PUBLIC_SITE_URL` to the production domain (no
      trailing slash). This drives canonical URLs, the sitemap, robots, and Open
      Graph tags — locally they fall back to `http://localhost:3000`.
- [ ] **Contact form email (Resend).** Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`
      (a verified sender), and `CONTACT_TO_EMAIL` (the inbox that receives leads).
      Until these are set, the form validates and succeeds but only logs the
      submission server-side instead of emailing it.

## Pre-launch verification

- [ ] Submit the contact form end to end and confirm the email arrives.
- [ ] Confirm `/sitemap.xml` and `/robots.txt` show the production domain.
- [ ] Final pass at mobile, tablet, and desktop, and a Lighthouse check.
