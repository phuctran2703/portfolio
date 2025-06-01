"use client"

import ExperienceCard from "@/components/ui/experience-card"
import { experiences } from "@/data/resume"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Work Experience</h2>
          <div className="h-px flex-1 bg-border"></div>
        </div>
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              type={exp.type}
              period={exp.period}
              description={exp.description}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
