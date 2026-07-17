# Architecture Decisions

A running record of the reasoning behind non-obvious choices. Newest last.

## Rendering: static Server Components

Every page is a Server Component and statically rendered. The site is marketing
content that changes rarely, so there is no reason for pages to be dynamic. The
only server-side runtime is the contact form's route handler. This keeps the
JavaScript baseline small and the Lighthouse scores high.

Client Components are limited to a fixed, documented set (see `conventions.md`).
Scroll and hover animation is added by wrapping server-rendered sections in a
small client `Reveal` component and passing content through as children, rather
than converting whole sections to Client Components.

## Deployment: Vercel

Chosen for first-class App Router support: route handlers for the contact form,
image optimization, and edge caching with no custom configuration.

## Contact form: Resend via a route handler

The form posts to a Next.js route handler which sends the lead by email through
Resend. Validation uses a single Zod schema shared by the client and the server,
so the browser and the handler cannot disagree, and the server never trusts the
client. Spam is handled with a honeypot field and basic rate limiting rather than
a third-party CAPTCHA, to protect page speed and avoid an external dependency.

## Service detail pages: `/services/[slug]`

Each service gets a statically generated detail page with its own metadata and
structured data. This is the strongest available SEO lever for a local
contractor, where the searches that matter are service-and-location specific.

## No CMS

Content lives in typed modules under `src/content/`, imported directly. The
client will send new project photos to the developer rather than editing the
site, so the cost of a CMS — async content loading, a remote image pipeline,
revalidation, and the loss of compile-time guarantees such as required alt text —
buys nothing here. If that changes, the decision is revisited with real
requirements. Content updates ship as commits.

## Single warm palette, no dark mode

The brand identity is a fixed warm, cream palette. A dark theme is not in scope,
would double the design surface, and shadcn's dark theme is opt-in (so it was
dormant regardless). It was removed to avoid maintaining an undesigned second
theme. Reversible later if genuinely wanted.

## Two-tier accent gold

The brand gold `#B8864A` does not meet WCAG AA contrast as normal-size text on
the cream background (about 3:1), and white text on it also fails. It is
therefore reserved for large display type and decorative fills. A darker
`--gold-strong` (`#8A6234`) is used for links, small accent text, and gold
buttons with white text, all of which meet AA. This preserves the brand look
while keeping text accessible.

## Icons referenced as components

Service and feature icons are imported Lucide components stored directly in the
content modules, not string names resolved at runtime. An invalid icon becomes a
compile error instead of a missing glyph in production.

## Hero image: priority LCP with a blur-up placeholder

The hero photograph is the page's Largest Contentful Paint element, so it loads
with `priority` (no lazy loading) and a `blurDataURL` so a tiny inline preview
paints immediately while the full image streams in — avoiding a blank hero on
first load without adding a layout shift. The blur base64 is stored alongside the
image's other metadata in `src/content/images.ts`, keeping every fact about an
image in one record.

Legibility of the white copy over an arbitrary photograph is handled with two
stacked, purely decorative gradient overlays (a left-to-right darkening for the
text column and a bottom-up darkening) rather than by darkening the image itself.
This keeps the photo faithful while guaranteeing contrast at every breakpoint,
and the overlays carry `aria-hidden` since they are presentational.
