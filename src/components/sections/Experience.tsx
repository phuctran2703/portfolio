"use client"

import ExperienceCard from "@/components/ui/experience-card"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Work Experience</h2>
          <div className="h-px flex-1 bg-border"></div>
        </div>
        <div className="grid gap-6">
          <ExperienceCard
            title="AI Engineer Intern"
            company="Graphicsminer"
            location="Ho Chi Minh City, Vietnam"
            type="Full-time"
            period="May 2024 to August 2024"
            description="GraphicsMiner is a Human-Computer Interaction (HCI) research lab that focuses on developing AI-powered and simulation-based tools to support teaching and learning."
            responsibilities={[
              "Researched and applied core machine learning and statistical modeling techniques in various AI-related projects.",
              "Participated in developing computer vision solutions, including object detection and image processing.",
              "Deployed and integrated AI models into web applications, focusing on usability, performance, and scalability.",
            ]}
          />

        </div>
      </div>
    </section>
  )
}
