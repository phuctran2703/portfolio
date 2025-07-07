import { MapPin } from "lucide-react"
import Image from "next/image"

interface ExperienceCardProps {
  title: string
  company: string
  logo?: string
  location: string
  type: string
  period: string
  description: string
  responsibilities: string[]
}

export default function ExperienceCard({
  title,
  company,
  logo,
  location,
  type,
  period,
  description,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-card dark:!bg-transparent text-card-foreground shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="flex flex-col space-y-1.5 p-4 sm:p-6 pb-2">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 lg:gap-4">
          <div className="flex items-center gap-3 text-center lg:text-left">
            {logo && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 mx-auto lg:mx-0">
                <Image
                  src={logo}
                  alt={`${company} logo`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:!text-white">
                <span className="">{title}</span> at <span>{company}</span>
              </h3>
              <p className="flex items-center justify-center lg:justify-start gap-1 mt-1 text-sm text-muted-foreground dark:!text-gray-300 flex-wrap">
                <MapPin className="h-3 w-3 text-gray-600 dark:!text-gray-300 flex-shrink-0" /> 
                <span>{location}</span> • <span className="font-medium text-gray-600 dark:!text-gray-300">{type}</span>
              </p>
            </div>
          </div>
          <div className="inline-flex items-center rounded-full border border-blue-600 bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit mx-auto lg:mx-0 mt-2 lg:mt-0">
            {period}
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6 pt-2 space-y-3 sm:space-y-4">
        <p className="text-sm sm:text-base text-muted-foreground dark:!text-gray-300 leading-relaxed text-gray-600">{description}</p>
        <div>
          <h4 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg text-gray-900 dark:!text-white">Key Responsibilities:</h4>
          <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base leading-relaxed">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="text-card-foreground/90 dark:!text-gray-300">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
