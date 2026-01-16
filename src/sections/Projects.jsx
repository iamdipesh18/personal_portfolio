import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

/*
  Projects data array
  -------------------
  We map over this array to render each project card.
*/
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    image: "/Projects/Portfolio.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://www.dhunganadipesh.com.np/",
    githubb: "https://github.com/iamdipesh18/personal_portfolio",
  },
  {
    title: "D-Store",
    description:
      "A flutter-based e-commerce application with Firebase backend.",
    image: "/Projects/D_Store.png",
    tags: ["Flutter", "Firebase", "Dart"],
    link: "#",
    githubb: "https://github.com/iamdipesh18/d_store",
  },
  {
    title: "Medivise",
    description:
      "A medicine recommendation system powered by Artificial Intelligence and Classifiers.",
    image: "/Projects/Medivise.png",
    tags: ["Html", "css", "flask", "python", "machine learning"],
    link: "https://medivise.onrender.com/",
    githubb: "https://github.com/iamdipesh18/Medivise",
  },
    {
        title: "Movie-Sansaar",
        description:"A flutter based mobile application powered by firebase and TMDB for the showing the movies and also playing trailer within the application.",
        image:"/Projects/Movie_Sansaar.png",
        tags:["Flutter", "Firebase", "Dart","TMDB","Mobile"],
        link:"#",
        githubb:"https://github.com/iamdipesh18/movie_sansaar_mobile",
    },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glow effects*/}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Here are some of the projects I've worked on, showcasing my skills in
            web and app development. Each project reflects my commitment to
            creating efficient, user-friendly, and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Hover overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.githubb}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Arrow icon animation on hover */}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                {/* Project tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

{/* View All Projects Button */}
<div className="text-center mt-12 animate-fade-in animation-delay-500">
  <a 
    href="https://github.com/iamdipesh18" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <AnimatedBorderButton>
      View All Projects
      <ArrowUpRight className="w-5 h-5" />
    </AnimatedBorderButton>
  </a>
</div>

      </div>
    </section>
  );
};
