"use client";

const SkillBadge = ({ name }: { name: string }) => {
  return (
    <span className="bg-blue-600 text-white rounded-lg px-2 py-0.5 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-xs">
      {name}
    </span>
  );
};

const CategoryHeading = ({ title }: { title: string }) => (
  <span className="font-bold flex items-center space-x-2">
    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full inline-block"></span>
    <span>{title}</span>
  </span>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <div className="space-y-8">
        {" "}
        <h2 className="text-3xl font-extrabold tracking-tight relative">
          Skills
        </h2>        <div className="rounded-lg border border-gray-100 bg-card text-card-foreground shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1 p-6">
          <div className="flex flex-col md:flex-row gap-x-12 gap-y-10">
            <div className="flex-1">
              <ul className="space-y-6">
                <li className="flex items-center flex-wrap gap-x-3 gap-y-2">
                  <CategoryHeading title="Languages" />
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Python" />
                    <SkillBadge name="Java" />
                    <SkillBadge name="C++" />
                  </div>
                </li>
                <li className="flex items-center flex-wrap gap-x-3 gap-y-2">
                  <CategoryHeading title="Database" />
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="MySQL" />
                    <SkillBadge name="SQL Server" />
                    <SkillBadge name="MongoDB" />
                  </div>
                </li>
                <li className="flex items-center flex-wrap gap-x-3 gap-y-2">
                  <CategoryHeading title="Big Data" />
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Apache Hadoop" />
                    <SkillBadge name="Apache Spark" />
                  </div>
                </li>
              </ul>            </div>

            <div className="flex-1">
              <ul className="space-y-6">
                <li className="flex items-center flex-wrap gap-x-3 gap-y-2">
                  <CategoryHeading title="Library" />
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="PyTorch" />
                    <SkillBadge name="TensorFlow" />
                    <SkillBadge name="NumPy" />
                  </div>
                </li>
                <li className="flex items-center flex-wrap gap-x-3 gap-y-2">
                  <CategoryHeading title="Frameworks" />
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Node.js" />
                    <SkillBadge name="Next.js" />
                    <SkillBadge name="FastAPI" />
                  </div>
                </li>
                <li className="flex items-center flex-wrap gap-x-3 gap-y-2">
                  <CategoryHeading title="Cloud Services" />
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Azure Synapse Analytics" />
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
