"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, contact } from "@/lib/site";
import { Button } from "./Button";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container className="flex items-center justify-between gap-3 py-2.5">
        <Link
          href="/"
          className="flex h-14 shrink-0 items-center sm:h-[4.5rem] lg:h-20 xl:h-24"
          onClick={() => setOpen(false)}
        >
          <Logo variant="light" className="h-full" />
        </Link>

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            {contact.phone}
          </a>
          <Button href="/contact" variant="primary" className="px-5 py-2.5 text-xs">
            Free Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <nav
          className="border-t border-border bg-background lg:hidden"
          aria-label="Mobile navigation"
        >
          <Container className="py-3">
            <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 py-3 text-sm text-foreground transition-colors hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={contact.phoneHref}
              className="flex items-center gap-2 px-2 py-3 text-sm text-foreground"
            >
              <Phone className="h-4 w-4" />
              {contact.phone}
            </a>
            <Button
              href="/contact"
              variant="primary"
              className="mt-2 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Request a Free Quote
            </Button>
          </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
