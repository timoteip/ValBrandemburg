import { z } from "zod";

/**
 * Single source of truth for contact-form validation, shared by the client
 * (inline field errors) and the route handler (never trust the client). Keep
 * this free of server-only imports so it can run in the browser bundle.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.email("Please enter a valid email address").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  projectType: z.string().trim().max(80).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about your project")
    .max(2000, "That message is a bit long — please shorten it"),
});

export type ContactInput = z.infer<typeof contactSchema>;
