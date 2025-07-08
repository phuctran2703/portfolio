"use client"

import { ModeToggle } from "@/components/ui/mode-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { personalInfo } from "@/data/resume"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Define navigation links
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

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
          window.history.pushState({}, '', target.getAttribute('href') || '');
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <header className="h-16 sticky top-0 z-40 w-full px-4 md:px-8 lg:px-20 shadow bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link 
            href="#" 
            className="transition-colors hover:text-primary cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
          >
            <span className="text-lg md:text-xl font-bold tracking-tight text-blue-700 dark:!text-emerald-400">{personalInfo.name.toUpperCase()}</span>
          </Link>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="outline" size="sm" asChild className="hidden md:flex">
            <Link href="#contact">Contact Me</Link>
          </Button>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-black shadow-lg py-4 px-4 z-50">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium transition-colors hover:text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" asChild className="mt-2 w-full">
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Me</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
