import { MapPin } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  type: string
  period: string
  description: string
  responsibilities: string[]
}

export default function ExperienceCard({
  title,
  company,
  location,
  type,
  period,
  description,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <div className="rounded-lg border border-gray-100 bg-card text-card-foreground shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="flex flex-col space-y-1.5 p-6 pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              <span className="text-blue-600">{title}</span> at <span>{company}</span>
            </h3>
            <p className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3 text-gray-600" /> {location} • <span className="font-medium text-gray-600">{type}</span>
            </p>
          </div>
          <div className="inline-flex items-center rounded-full border border-blue-600 bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit">
            {period}
          </div>
        </div>
      </div>
      <div className="p-6 pt-2 space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed text-gray-600">{description}</p>
        <div>
          <h4 className="font-semibold mb-3 text-base">Key Responsibilities:</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="text-card-foreground/90">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
