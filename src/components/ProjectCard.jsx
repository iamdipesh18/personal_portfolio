import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { ProjectCover } from "@/components/ProjectCover";

export const ProjectCard = ({ project, index = 0 }) => {
  return (
    <div
      className="group relative glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 animate-fade-in"
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-video">
        <ProjectCover
          project={project}
          className="transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

        {/* Hover overlay links (sit above the card-wide link) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="pointer-events-auto p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="pointer-events-auto p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            {/* The whole card links to the detail page via this stretched link */}
            <Link
              to={`/projects/${project.slug}`}
              className="text-xl font-semibold group-hover:text-primary transition-colors after:absolute after:inset-0"
            >
              {project.title}
            </Link>
            {project.subtitle && (
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Arrow icon animation on hover */}
          <ArrowUpRight className="w-5 h-5 flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
        </div>

        <p className="text-muted-foreground text-sm">{project.description}</p>

        {/* Project tags */}
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
      </div>
    </div>
  );
};
