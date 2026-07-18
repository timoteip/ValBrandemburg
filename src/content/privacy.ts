/**
 * Privacy policy copy.
 *
 * ⚠️ DRAFT — LEGAL REVIEW REQUIRED BEFORE LAUNCH. This is a standard, plain-
 * language template written to reflect how the site actually works (a contact
 * form whose submissions are emailed to the business). It is not legal advice.
 * The client must review it — and confirm it matches their real data practices,
 * retention, and any applicable state requirements — before publishing.
 *
 * `{email}` in the body is replaced with the business email at render time so
 * the address stays in one place (site.ts).
 */

export const privacy = {
  title: "Privacy Policy",
  /** ISO date; formatted for display in the page. */
  lastUpdated: "2026-07-18",
  intro:
    "This policy explains what information we collect when you use this website, how we use it, and the choices you have. We keep this simple because our use of your information is simple.",
  sections: [
    {
      heading: "Information we collect",
      body: [
        "We only collect the information you choose to give us. When you submit the contact form, we collect your name and email address, and — if you provide them — your phone number, the type of project you're interested in, and the details of your message.",
        "We do not sell your information, and we do not use third-party advertising or tracking cookies on this site.",
      ],
    },
    {
      heading: "How we use your information",
      body: [
        "We use the information you submit for one purpose: to respond to your inquiry and, where appropriate, to schedule and discuss your project. We do not use it for marketing unless you ask us to.",
      ],
    },
    {
      heading: "How your information is handled",
      body: [
        "Contact form submissions are delivered to us by email through a third-party email provider that processes the message solely to deliver it. We do not share your information with anyone else except as needed to respond to you or as required by law.",
      ],
    },
    {
      heading: "Data retention",
      body: [
        "We keep the messages you send us for as long as needed to respond to your inquiry and maintain a record of our correspondence. You can ask us to delete your information at any time.",
      ],
    },
    {
      heading: "Your choices",
      body: [
        "You can contact us at {email} to ask what information we hold about you, to correct it, or to request that we delete it. You can also simply choose not to submit the contact form.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "If we change how we handle your information, we will update this page and revise the date below.",
      ],
    },
    {
      heading: "Contact us",
      body: ["If you have any questions about this policy, please reach out to us at {email}."],
    },
  ],
} as const;
