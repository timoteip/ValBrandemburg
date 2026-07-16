import { cn } from "@/lib/utils";

/**
 * Centered content column with consistent horizontal padding. Used by every
 * section so page width and gutters stay uniform across the site.
 */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)} {...props} />
  );
}
