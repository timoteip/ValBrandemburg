"use client";

import { Accordion } from "radix-ui";
import { ChevronDown } from "lucide-react";

import { faqs } from "@/content/faq";

/**
 * The FAQ accordion. A Client Component (see conventions.md) because it owns the
 * open/closed state of each item. Radix Accordion provides the keyboard support
 * and ARIA wiring; only one item is open at a time, and all can be collapsed.
 * The questions and answers also drive FAQPage structured data, rendered by the
 * server section that wraps this component.
 */
export function Faq() {
  return (
    <Accordion.Root type="single" collapsible className="border-border/60 border-t">
      {faqs.map((item, i) => (
        <Accordion.Item key={i} value={`item-${i}`} className="border-border/60 border-b">
          <Accordion.Header>
            <Accordion.Trigger className="group focus-visible:ring-ring flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:ring-2 focus-visible:outline-none">
              <span className="font-medium">{item.question}</span>
              <ChevronDown
                aria-hidden
                className="text-gold-strong size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
            <p className="text-muted-foreground pb-5 leading-relaxed">{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
