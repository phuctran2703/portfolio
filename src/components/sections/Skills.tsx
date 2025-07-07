"use client";

import { skills } from "@/data/resume";

const SkillBadge = ({ name }: { name: string }) => {
  return (
    <span className="bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg px-2 py-0.5 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-xs">
      {name}
    </span>
  );
};

const CategoryHeading = ({ title }: { title: string }) => (
  <span className="font-bold flex items-center space-x-2">
    <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full inline-block"></span>
    <span>{title}</span>
  </span>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-[calc(100vh-4rem)] flex scroll-mt-16 px-4 md:px-8 lg:px-20 item-center bg-gradient-to-br from-emerald-50 via-sky-50 to-violet-50">
      <div className="max-w-4xl mx-auto flex flex-col space-y-8 items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            My Skills
          </h2>
        </div>
        <div className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-card text-card-foreground shadow-sm transition-transform duration-300 p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <ul className="space-y-6">
                {skills.languages && skills.languages.length > 0 && (
                  <li>
                    <CategoryHeading title="Languages" />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skills.languages.map((lang, index) => (
                        <SkillBadge key={index} name={lang} />
                      ))}
                    </div>
                  </li>
                )}

                {skills.database && skills.database.length > 0 && (
                  <li className="mt-4">
                    <CategoryHeading title="Database" />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skills.database.map((db, index) => (
                        <SkillBadge key={index} name={db} />
                      ))}
                    </div>
                  </li>
                )}

                {skills.bigData && skills.bigData.length > 0 && (
                  <li className="mt-4">
                    <CategoryHeading title="Big Data" />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skills.bigData.map((tech, index) => (
                        <SkillBadge key={index} name={tech} />
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <ul className="space-y-6">
                {skills.webDevelopment && skills.webDevelopment.length > 0 && (
                  <li>
                    <CategoryHeading title="Web Development" />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skills.webDevelopment.map((web, index) => (
                        <SkillBadge key={index} name={web} />
                      ))}
                    </div>
                  </li>
                )}

                {skills.aiml && skills.aiml.length > 0 && (
                  <li className="mt-4">
                    <CategoryHeading title="AI/ML" />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skills.aiml.map((ai, index) => (
                        <SkillBadge key={index} name={ai} />
                      ))}
                    </div>
                  </li>
                )}

                {skills.devOps && skills.devOps.length > 0 && (
                  <li className="mt-4">
                    <CategoryHeading title="DevOps" />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skills.devOps.map((devOps, index) => (
                        <SkillBadge key={index} name={devOps} />
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
