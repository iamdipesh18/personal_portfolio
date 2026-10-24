import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { ProjectCover } from "@/components/ProjectCover";
import { projectCategories, projects } from "@/data/projects";

const primaryButton =
  "inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition";
const outlineButton =
  "inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:bg-surface transition";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <title>Project not found — Dipesh Dhungana</title>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-6">
            The project you are looking for does not exist.
          </p>
          <Link to="/projects" className={primaryButton}>
            See all projects
          </Link>
        </div>
      </div>
    );
  }

  const category = projectCategories.find((c) => c.id === project.category);

  return (
    <section className="pt-36 pb-32 relative overflow-hidden">
      <title>{`${project.title} — Dipesh Dhungana`}</title>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> All projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: details */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-sm uppercase tracking-widest text-primary">
                {category?.label} · {project.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {project.description}
              </p>
            </div>

            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryButton}
                >
                  {project.embed ? "Open Full Demo" : "Live Site"}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={project.link ? outlineButton : primaryButton}
              >
                GitHub <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: live mobile demo, or cover image */}
          <div className="animate-fade-in animation-delay-200">
            {project.embed ? (
              <div className="flex flex-col items-center gap-3">
                <div className="w-[300px] sm:w-[340px] md:w-[390px] h-[650px] sm:h-[720px] md:h-[844px] rounded-[2rem] overflow-hidden border-[8px] border-black shadow-2xl bg-black">
                  <iframe
                    src={project.embed}
                    title={`${project.title} demo`}
                    width="100%"
                    height="100%"
                    style={{ border: "none" }}
                    allow="clipboard-write; fullscreen"
                    allowFullScreen
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Live demo — may take a few seconds to load.
                </p>
              </div>
            ) : (
              <div className="glass rounded-3xl p-2 glow-border">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <ProjectCover project={project} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
