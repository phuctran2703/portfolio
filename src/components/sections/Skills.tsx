"use client";

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
    <section id="skills" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Skills
          </h2>
          <div className="h-px flex-1 bg-border dark:bg-gray-700"></div>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-card text-card-foreground shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1 p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <ul className="space-y-6">
                <li>
                  <CategoryHeading title="Languages" />
                  <div className="flex flex-wrap gap-2 mt-2">
                    <SkillBadge name="Python" />
                    <SkillBadge name="Java" />
                    <SkillBadge name="C++" />
                  </div>
                </li>
                <li className="mt-4">
                  <CategoryHeading title="Database" />
                  <div className="flex flex-wrap gap-2 mt-2">
                    <SkillBadge name="MySQL" />
                    <SkillBadge name="SQL Server" />
                    <SkillBadge name="MongoDB" />
                  </div>
                </li>
                <li className="mt-4">
                  <CategoryHeading title="Big Data" />
                  <div className="flex flex-wrap gap-2 mt-2">
                    <SkillBadge name="Apache Hadoop" />
                    <SkillBadge name="Apache Spark" />
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-6">
                <li>
                  <CategoryHeading title="Web Development" />
                  <div className="flex flex-wrap gap-2 mt-2">
                    <SkillBadge name="HTML/CSS" />
                    <SkillBadge name="JavaScript" />
                    <SkillBadge name="React" />
                    <SkillBadge name="Next.js" />
                  </div>
                </li>
                <li className="mt-4">
                  <CategoryHeading title="AI/ML" />
                  <div className="flex flex-wrap gap-2 mt-2">
                    <SkillBadge name="TensorFlow" />
                    <SkillBadge name="PyTorch" />
                    <SkillBadge name="Scikit-learn" />
                  </div>
                </li>
                <li className="mt-4">
                  <CategoryHeading title="DevOps" />
                  <div className="flex flex-wrap gap-2 mt-2">
                    <SkillBadge name="Git" />
                    <SkillBadge name="Docker" />
                    <SkillBadge name="CI/CD" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
