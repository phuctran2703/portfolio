"use client"

import { ModeToggle } from "@/components/ui/mode-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"

export default function Header() {
  // Add smooth scrolling effect
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
          // Update URL without reloading
          window.history.pushState({}, '', target.getAttribute('href') || '');
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <header className="h-16 sticky top-0 z-40 w-full px-20 shadow bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">TRAN BAO PHUC</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#introduce" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#education" className="text-sm font-medium transition-colors hover:text-primary">
            Education
          </Link>
          <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
            Skills
          </Link>
          <Link href="#certification" className="text-sm font-medium transition-colors hover:text-primary">
            Certification
          </Link>
          <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">
            Experience
          </Link>
          <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="outline" size="sm" asChild className="hidden md:flex">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
