"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Globe, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

// Custom Badge component
function CustomBadge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "outline";
}) {
  const baseClasses =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";
  const variantClasses = {
    default: "bg-blue-600 text-blue-600-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline:
      "border border-gray-100 bg-background hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <span className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
}

// Custom Modal component
function CustomModal({
  isOpen,
  onClose,
  children,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "visible";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        ref={modalRef}
        className={cn(
          "bg-background p-4 sm:p-6 rounded-lg shadow-lg max-h-[90vh] w-full max-w-[95vw] sm:max-w-[600px] overflow-auto",
          className
        )}
      >
        <div className="flex justify-end">
          <button onClick={onClose} className="p-1 rounded-full hover:bg-muted">
            <X className="h-4 w-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Custom Card component */}
      <div 
        className="overflow-hidden group transition-all duration-300 shadow-md hover:shadow-md hover:-translate-y-1 border border-gray-200 border-border bg-card text-card-foreground rounded-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card Header */}
        <div className="p-3 sm:p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight line-clamp-2">{title}</h3>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-3 sm:p-4 pt-0">
          <p className="text-xs sm:text-sm text-gray-600 text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-1 mt-2 sm:mt-3">
            {technologies.map((tech, index) => (
              <CustomBadge key={index} variant="secondary" className="text-xs bg-black text-white">
                {tech}
              </CustomBadge>
            ))}
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-3 sm:p-4 pt-0 flex justify-end">
          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            {githubUrl && (
              <Button
                variant="ghost"
                size="icon"
                className="transition-all duration-200 hover:bg-primary/10 hover:text-blue-600 border border-gray-300 rounded-full"
                asChild
              >
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            )}
            {liveUrl && (
              <Button
                variant="ghost"
                size="icon"
                className="transition-all duration-200 hover:bg-primary/10 hover:text-blue-600 border border-gray-300 rounded-full"
                asChild
              >
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Live Demo</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      <CustomModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          {/* Modal Header */}
          <div className="mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
          </div>

          <div className="relative h-48 sm:h-64 w-full overflow-hidden rounded-md">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
            <p className="leading-relaxed text-sm sm:text-base">{description}</p>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {technologies.map((tech, index) => (
                <CustomBadge key={index} variant="secondary" className="bg-black text-white text-xs">
                  {tech}
                </CustomBadge>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm"
                  >
                    <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                    GitHub
                  </Link>
                </Button>
              )}
              {liveUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm"
                  >
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </CustomModal>
    </>
  );
}
