import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends React.ComponentProps<typeof Link> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 border border-foreground",
  secondary:
    "bg-surface text-foreground hover:bg-border border border-border",
  outline:
    "bg-transparent text-foreground hover:bg-surface border border-foreground",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-none px-6 py-3 text-sm font-medium tracking-wide transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
