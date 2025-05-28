"use client"

export default function EducationSection() {
  return (
    <section id="education" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Education</h2>
          <div className="h-px flex-1 bg-border"></div>
        </div>
        <div className="grid gap-6">
          <div className="rounded-lg border border-gray-100 bg-card text-card-foreground shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="flex flex-row p-6 space-x-6">
              <div>
                <img
                  src="/hcmut.png"
                  alt="Education"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold">Ho Chi Minh City University of Technology</h3>
                  <p className="text-gray-500 text-sm">
                    Major: Computer Science
                  </p>
                </div>
                <div className="inline-flex items-center bg-blue-600 text-white rounded-full px-2 py-1 text-xs font-medium w-fit mt-1 sm:mt-0">
                  2021 - 2025
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
