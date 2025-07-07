"use client"

import ExperienceCard from "@/components/ui/experience-card"
import { experiences } from "@/data/resume"

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-[calc(100vh-4rem)] py-16 md:py-20 scroll-mt-16 px-4 md:px-8 lg:px-20 bg-white dark:!bg-gray-900">
      <div className="max-w-4xl mx-auto flex flex-col space-y-8 items-center justify-center">
        <div className="flex items-center space-x-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:!text-white">Work Experience</h2>
        </div>
        <div className="w-full space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              logo={exp.logo}
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
