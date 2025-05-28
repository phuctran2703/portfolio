"use client"

import ProjectCard from "@/components/ui/project-card"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Projects</h2>
          <div className="h-px flex-1 bg-border"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="FilaTeam"
            period="August 2024"
            description="Implementation of team features based on laravel/jetstream using Filament on Laravel 11, implementing team switching features with Livewire and automatic refresh after team changes."
            technologies={["Laravel 11", "Filament", "Livewire"]}
            imageUrl="/placeholder.svg?height=300&width=600"
            githubUrl="https://github.com/holiq/filateam"
          />

          <ProjectCard
            title="Landing Page Seccodeid"
            period="April 2023"
            description="Seccodeid landing page created using TailwindCSS with responsive design and optimal SEO."
            technologies={["TailwindCSS", "HTML", "JavaScript"]}
            imageUrl="/placeholder.svg?height=300&width=600"
            liveUrl="https://seccodeid.com"
          />

          <ProjectCard
            title="CIlog"
            period="May 2024 - June 2024"
            description="A campus assignment project from the Programming course to create a blog application using CodeIgniter4 and Bootstrap, equipped with category features, post slugs, admin panel, and comments and replies."
            technologies={["CodeIgniter4", "Bootstrap", "MySQL"]}
            imageUrl="/placeholder.svg?height=300&width=600"
            githubUrl="https://github.com/holiq/cilog"
          />

          <ProjectCard
            title="Blog Laravel"
            period="August 2020 - September 2020"
            description="A simple blog created with Laravel 7, Tailwind CSS, and AlpineJS, equipped with admin panel features, roles and permissions, comments and replies on posts, as well as slugs and tags on posts."
            technologies={["Laravel 7", "Tailwind CSS", "AlpineJS", "MySQL"]}
            imageUrl="/placeholder.svg?height=300&width=600"
            githubUrl="https://github.com/holiq/blog-laravel"
          />
        </div>
      </div>
    </section>
  )
}
