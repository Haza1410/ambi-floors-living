import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

const YELLOW = "#FFD408";

export function Logo({ variant = "light", className }: LogoProps) {
  const text = variant === "light" ? "#111111" : "#FFFFFF";

  return (
    <svg
      viewBox="0 0 780 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ambi Floors & Living"
      className={cn("block h-full w-auto", className)}
    >
      <text
        x="390"
        y="102"
        textAnchor="middle"
        fill={text}
        style={{
          fontFamily: "var(--font-logo), 'Nunito', sans-serif",
          fontSize: "112px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
        }}
      >
        ambi
      </text>
      <circle
        cx="521"
        cy="36"
        r="15"
        fill={variant === "light" ? "#FFFFFF" : "#111111"}
      />
      <circle cx="521" cy="36" r="13" fill={YELLOW} />

      <text
        x="390"
        y="156"
        textAnchor="middle"
        fill={text}
        style={{
          fontFamily: "var(--font-logo), 'Nunito', sans-serif",
          fontSize: "21px",
          fontWeight: 400,
          letterSpacing: "0.36em",
        }}
      >
        FLOORS &amp; LIVING
      </text>

      <rect x="110" y="170" width="560" height="2.5" fill={YELLOW} rx="1" />
    </svg>
  );
}
