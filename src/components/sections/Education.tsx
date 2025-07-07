"use client";

import { education, certifications } from "@/data/resume";

export default function EducationSection() {
  return (
    <section id="education" className="py-12 scroll-mt-16 px-4 md:px-8 lg:px-10 bg-white dark:!bg-black">
      <div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center">
        {/* Education Section */}
        <div className="w-full">
          <div className="flex items-center space-x-4 justify-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:!text-white">
              Education & Certifications
            </h2>
          </div>
          {education.map((edu, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 dark:border-gray-700 bg-card dark:!bg-transparent text-card-foreground shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1 mb-6"
            >
              <div className="flex flex-col sm:flex-row p-4 sm:p-6 gap-4 sm:space-x-6">
                <div className="flex justify-center sm:block">
                  <img
                    src={edu.logo}
                    alt="Education"
                    className="w-14 h-14 mt-2 object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col sm:flex-row justify-between items-center sm:items-center gap-2">
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {edu.degree && `${edu.degree}, `}Major: {edu.major}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      GPA: {edu.gpa}
                    </p>
                  </div>
                  <div className="inline-flex items-center bg-blue-600 dark:bg-blue-700 text-white rounded-full px-2 py-1 text-xs font-medium w-fit mt-1 sm:mt-0">
                    {edu.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="w-full">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`w-full p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-card dark:!bg-transparent text-card-foreground shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1 mb-4 ${
                cert.link ? 'cursor-pointer' : ''
              }`}
              onClick={() => cert.link && window.open(cert.link, '_blank')}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:space-x-6">
                <div className="flex justify-center sm:block">
                  <img
                    src={cert.logo}
                    alt={cert.title}
                    className="w-14 h-14 mt-2 object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col sm:flex-row justify-between items-center sm:items-center gap-2">
                  <div className="text-center sm:text-left flex items-center">
                    <h3 className={`text-lg md:text-xl font-bold ${
                      cert.link ? 'text-blue-600 dark:!text-white hover:underline' : 'text-gray-900 dark:!text-white'
                    }`}>
                      {cert.title}
                    </h3>
                    {cert.link && (
                      <svg
                        className="w-4 h-4 ml-2 text-blue-600 dark:!text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </div>
                  {cert.validity && (
                    <div className="inline-flex items-center bg-green-600 dark:bg-green-700 text-white rounded-full px-2 py-1 text-xs font-medium w-fit mt-1 sm:mt-0">
                      {cert.validity}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
