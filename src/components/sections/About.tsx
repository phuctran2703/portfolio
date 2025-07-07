"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 scroll-mt-16 px-4 md:px-8 lg:px-20 bg-[#F9FAFB] dark:!bg-gray-900"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:!text-white">About Me</h2>
        <div className="w-full">
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed md:leading-loose text-justify dark:!text-gray-300 max-w-3xl mx-auto">
            During my time at university, I focused on learning full-stack development, working with both frontend and backend technologies. As I progressed, I became more interested in writing clean, maintainable code and building interfaces that are easy to use. In addition, I make an effort to stay up to date with industry trends and continuously explore new tools and frameworks. Now, I am looking to apply the knowledge and skills I have gained in a real-world work environment, where I can contribute to team goals and continue developing my professional abilities.
          </p>
        </div>
      </div>
    </section>
  );
}
