"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function IntroduceSection() {
  return (
    <section id="introduce" className="h-[calc(100vh-4rem)] flex flex-col md: flex-row py-12 items-center justify-between scroll-mt-20">
      <div className="flex flex-col gap-8">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-blue-600">Tran Bao Phuc</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground text-gray-600">
            Final year student in HCMUT
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed md:leading-loose text-justify">
            I have a genuine interest in AI and software development. I enjoy
            working on projects that create practical solutions and provide real
            value. I am eager to find opportunities where I can apply my
            knowledge in practical environments and contribute meaningfully to
            the success of a team.
          </p>
          <div className="flex flex-row justify-between">
            
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="transition-all duration-300 hover:translate-y-[-2px] bg-blue-600 text-white hover:shadow-md"
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md hover:bg-accent"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="https://github.com/phuctran2703"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-accent hover:scale-110 hover:bg-blue-500 hover:text-white hover:cursor-pointer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/phuc-tran-29b650353/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-accent hover:scale-110 hover:bg-blue-500 hover:text-white hover:cursor-pointer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
          </div>

        </div>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <Avatar className="w-48 h-48 border-4 border-blue-300 shadow-lg transition-all duration-500 hover:border-primary/40 hover:shadow-xl">
          <AvatarImage
            src="/mee.png?height=192&width=192"
            alt="TBP"
          />
          <AvatarFallback className="text-4xl">TBP</AvatarFallback>
        </Avatar>
      </div>
    </section>
  );
}
