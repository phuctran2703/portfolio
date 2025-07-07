"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/resume";
import ImageStack from "@/components/imageStack";

export default function IntroduceSection() {
  return (
    <section
      id="introduce"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center scroll-mt-16 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:!bg-black px-4 md:px-8 lg:px-20 py-8 md:py-12 box-border"
    >
      <div className="mx-auto flex flex-col lg:flex-row gap-8 lg:gap-30 items-center">
        <div className="w-full flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center lg:text-left text-gray-900 dark:!text-white">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:!text-emerald-400">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:!text-white text-center lg:text-left">
              {personalInfo.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:!text-white leading-relaxed md:leading-loose text-justify max-w-3xl mx-auto lg:mx-0">
              {personalInfo.description}
            </p>
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center gap-4">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 lg:gap-4">
                <Button
                  asChild
                  className="transition-all duration-300 hover:translate-y-[-2px] bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-500 hover:shadow-md"
                >
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md hover:bg-accent dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:border-gray-400 dark:!text-white"
                >
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4">
                {" "}
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full group relative hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-500 dark:!text-white dark:hover:border-gray-400 transition-all duration-200"
                >
                  <Link
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    <span className="sr-only">GitHub</span>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                      GitHub
                    </span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full group relative hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-500 dark:!text-white dark:hover:border-gray-400 transition-all duration-200"
                >
                  <Link
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    <span className="sr-only">LinkedIn</span>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                      LinkedIn
                    </span>
                  </Link>
                </Button>{" "}
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full group relative hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-500 dark:!text-white dark:hover:border-gray-400 transition-all duration-200"
                >
                  <a
                    href={`mailto:${personalInfo.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    <span className="sr-only">Email</span>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                      Email
                    </span>
                  </a>
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-xs lg:max-w-sm">
            <div className="pt-4 lg:pt-0">
            <ImageStack/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
