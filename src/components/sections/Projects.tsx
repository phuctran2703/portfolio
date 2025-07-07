"use client"

import { useState, useEffect, useRef } from "react"
import ProjectCard from "@/components/ui/project-card"
import { projects } from "@/data/resume"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [projectsPerPage, setProjectsPerPage] = useState(1)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  // Update projects per page based on screen width
  useEffect(() => {
    const updateProjectsPerPage = () => {
      const width = window.innerWidth
      if (width >= 1280) { // xl screens
        setProjectsPerPage(3)
      } else if (width >= 768) { // md screens
        setProjectsPerPage(2)
      } else { // mobile screens
        setProjectsPerPage(1)
      }
    }

    // Set initial value
    updateProjectsPerPage()

    // Add event listener
    window.addEventListener('resize', updateProjectsPerPage)

    // Cleanup
    return () => window.removeEventListener('resize', updateProjectsPerPage)
  }, [])

  // Reset current index when projectsPerPage changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [projectsPerPage])

  const nextProjects = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + projectsPerPage
    )
  }

  const prevProjects = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, projects.length - projectsPerPage) : prevIndex - projectsPerPage
    )
  }

  const currentProjects = projects.slice(currentIndex, currentIndex + projectsPerPage)
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  // Touch handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const diffX = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50 // minimum distance for a swipe
    
    if (Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        // Swipe left - next projects
        nextProjects()
      } else {
        // Swipe right - previous projects
        prevProjects()
      }
    }
    
    // Reset touch values
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section id="projects" className="py-16 md:py-20 scroll-mt-16 px-4 md:px-8 lg:px-20 bg-[#F9FAFB] dark:!bg-black">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 dark:!text-white">My Projects</h2>
        </div>

        {/* Projects Grid with Navigation */}
        <div 
          className="relative w-full group"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons - Show on hover and larger screens */}
          {totalPages > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-2 rounded-full hover:bg-blue-500 hover:border-blue-500 hover:text-white opacity-0 group-hover:opacity-100 md:opacity-100 transition-all duration-300 cursor-pointer dark:bg-gray-800/80 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:hover:text-white"
                onClick={prevProjects}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-2 rounded-full hover:bg-blue-500 hover:border-blue-500 hover:text-white opacity-0 group-hover:opacity-100 md:opacity-100 transition-all duration-300 cursor-pointer dark:bg-gray-800/80 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:hover:text-white"
                onClick={nextProjects}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}

          {/* Projects Grid */}
          <div className="mx-4 sm:mx-8 lg:mx-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 touch-pan-y">
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={currentIndex + index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex space-x-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  Math.floor(currentIndex / projectsPerPage) === index
                    ? "bg-primary scale-110 dark:bg-blue-500"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 dark:bg-gray-600 dark:hover:bg-gray-500"
                }`}
                onClick={() => setCurrentIndex(index * projectsPerPage)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
