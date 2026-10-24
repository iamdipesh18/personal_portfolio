import { Brain, Globe, GraduationCap, Smartphone } from "lucide-react";

const categoryIcons = {
  mobile: Smartphone,
  web: Globe,
  ai: Brain,
  academic: GraduationCap,
};

/* Project screenshot, or a generated cover when the project has no image */
export const ProjectCover = ({ project, className = "" }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  const Icon = categoryIcons[project.category] ?? Globe;

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary/25 via-surface to-highlight/10 ${className}`}
    >
      <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <span className="text-2xl font-semibold text-foreground/80 px-6 text-center">
        {project.title}
      </span>
    </div>
  );
};
