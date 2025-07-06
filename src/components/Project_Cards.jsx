import { BlurFade } from "./BlurFadeSkillsCard";

const colors = ["#EF4444", "#3B82F6", "#10B981"];

const projects = [
  {
    title: "Stretto",
    image: "assets/stretto.png",
    description:
      "Designed and developed Stretto’s fiduciary banking web application, enabling secure multi-bank cash management, real-time transaction tracking, and FDIC-compliant account services for restructuring professionals and trustees.",
    link: "",
    tech: ["JavaScript", "React", "SCSS", "Redux", "GraphQL"],
  },
  {
    title: "LoneWolf",
    image: "assets/lonwolf.png",
    description:
      "Lone Wolf Technologies provides real estate software solutions that support transaction management, accounting, digital signatures, and client engagement, used by agents, brokerages, and MLSs across North America.",
    link: "",
    tech: ["TypeScript", "React", "CustomLibrary", "Redux", "RestAPI"],
  },
  {
    title: "Kickstarter",
    image: "assets/kickstarter.png",
    description:
      "The Kickstarters Web Application is a dynamic and innovative platform designed to bridge the gap between job seekers and employers, making the job search and hiring process easier, more efficient, and ultimately more rewarding for everyone involved.",
    link: "https://github.com/pavankumarmurugan/kickstarters.git",
    tech: ["TypeScript", "React", "AntDesign", "Css"],
  },
  
];

const images = Array.from({ length: projects.length }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

const Project_Cards = () => {
    console.log(images,"images")
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <BlurFade key={project.title} delay={0.25 + index * 0.1} inView>
             <div
          key={index}
          className="p-4 bg-gradient-to-b from-storm to-indigo rounded-2xl relative flex flex-col justify-between h-full"
        >
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 md:h-58 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
          </div>

          <div className="mt-auto pt-2">
            {project?.tech?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block text-white text-xs px-1 py-1 rounded-full"
                    style={{ color: colors[techIndex % 3] }}
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src="assets/github.png"
                  alt="github-link"
                  className="absolute top-[0.6rem] right-2 bg-black rounded-2xl p-1 hover:scale-110"
                  style={{ width: 30, height: 30 }}
                />
            </a>
          )}
        </div>
          </BlurFade>
      ))}
    </div>
  );
};

export default Project_Cards;
