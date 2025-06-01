"use client";

import { certifications } from "@/data/resume";

export default function CertificationSection() {
  return (
    <section id="certification" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Certifications
          </h2>
          <div className="h-px flex-1 bg-border"></div>
        </div>
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="w-full p-6 rounded-lg border border-gray-100 bg-card text-card-foreground shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex-1 flex flex-col sm:flex-row justify-between sm:items-start gap-2">
              <div>
                <h3 className="text-xl font-bold">{cert.title}</h3>
              </div>
              <div className="inline-flex items-center bg-blue-600 text-white rounded-full px-2 py-1 text-xs font-medium w-fit mt-1 sm:mt-0">
                {cert.validity}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
