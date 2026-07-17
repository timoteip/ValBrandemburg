import { cn } from "@/lib/utils";

/**
 * Branded stand-in shown wherever real project photography hasn't been supplied
 * yet. Renders as an accessible image (role="img" + label) so screen readers
 * still get the description the real photo will carry. Callers set the aspect
 * ratio through className and pass the visual — an icon or a label — as children.
 */
export function PlaceholderPanel({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "from-secondary/60 to-muted ring-border/60 flex items-center justify-center bg-gradient-to-br ring-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
