"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { personalInfo } from "@/data/resume"

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Get In Touch</h2>
          <div className="h-px flex-1 bg-border"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <div className="rounded-lg border border-gray-100 bg-card text-card-foreground shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <h3 className="text-2xl font-bold leading-none tracking-tight">Contact Information</h3>
              <p className="text-base text-muted-foreground">
                Feel free to reach out through any of these channels
              </p>
            </div>
            <div className="p-6 pt-4 space-y-6">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full text-blue-600 shrink-0">
                  <Mail className="h-5 w-5" />
                </Button>
                <div>
                  <p className="font-semibold text-base">Email</p>
                  <p className="text-sm text-muted-foreground">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full text-blue-600 shrink-0">
                  <Phone className="h-5 w-5" />
                </Button>
                <div>
                  <p className="font-semibold text-base">Phone</p>
                  <p className="text-sm text-muted-foreground">{personalInfo.phone}</p>
                </div>
              </div>              <div className="pt-4">
                <p className="font-semibold text-base mb-3">Social Profiles</p>
                <div className="flex gap-3">
                  <Link href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer">
                    <div className="relative group">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full transition-all duration-300 hover:bg-accent hover:scale-110 hover:bg-blue-500 hover:text-white hover:cursor-pointer text-blue-600"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        GitHub
                      </div>
                    </div>
                  </Link>
                  <Link href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <div className="relative group">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full transition-all duration-300 hover:bg-accent hover:scale-110 hover:bg-blue-500 hover:text-white hover:cursor-pointer text-blue-600"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        LinkedIn
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Send Message Card */}
          <div className="rounded-lg border border-gray-100 bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <h3 className="text-2xl font-bold leading-none tracking-tight">Send Me a Message</h3>
              <p className="text-base text-muted-foreground">I'll get back to you as soon as possible</p>
            </div>
            <div className="p-6 pt-4">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your name"
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none border-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none border-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    placeholder="Message subject"
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none border-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    rows={4}
                    className="flex w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none border-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md bg-blue-600 text-white hover:cursor-pointer"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
