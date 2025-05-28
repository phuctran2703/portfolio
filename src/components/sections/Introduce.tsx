"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function IntroduceSection() {
  return (
    <section
      id="introduce"
      className="min-h-[calc(100vh-4rem)] flex flex-col scroll-mt-20"
    >
      <div className="min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row gap-8 items-center">
        <div className="md:w-2/3 flex flex-col gap-8 order-2 lg:order-1">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-center lg:text-left">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Tran Bao Phuc
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground dark:text-gray-300 text-center lg:text-left">
              Final year student in HCMUT
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed md:leading-loose text-justify dark:text-gray-300">
              I have a genuine interest in AI and software development. I enjoy
              working on projects that create practical solutions and provide
              real value. I am eager to find opportunities where I can apply my
              knowledge in practical environments and contribute meaningfully to
              the success of a team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-between gap-4">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button
                  asChild
                  className="transition-all duration-300 hover:translate-y-[-2px] bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-md"
                >
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md hover:bg-accent dark:border-gray-600 dark:hover:bg-gray-800"
                >
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {" "}
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full group relative"
                >
                  <Link
                    href="https://github.com/phuctran2703"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      GitHub
                    </span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full group relative"
                >
                  <Link
                    href="https://www.linkedin.com/in/phuc-tran-29b650353/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      LinkedIn
                    </span>
                  </Link>
                </Button>{" "}
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full group relative"
                >
                  <a
                    href="mailto:tranbaophuc2703@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Email
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
          <Avatar className="h-48 w-48 md:h-64 md:w-64 rounded-full border-4 border-blue-600 dark:border-blue-400 shadow-lg">
            <AvatarImage src="/mee.png?height=192&width=192" alt="TBP" />
            <AvatarFallback className="text-4xl">TBP</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}
