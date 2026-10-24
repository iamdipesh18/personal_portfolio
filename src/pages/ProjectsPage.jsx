import { useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FilterChips } from "@/components/FilterChips";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projectCategories, projects } from "@/data/projects";
import { profile } from "@/data/profile";

const counts = Object.fromEntries(
  projectCategories.map((c) => [
    c.id,
    c.id === "all"
      ? projects.length
      : projects.filter((p) => p.category === c.id).length,
  ])
);

const ProjectsPage = () => {
  // Filter lives in the URL (?category=mobile) so it can be shared
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("category");
  const active = projectCategories.some((c) => c.id === requested)
    ? requested
    : "all";

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  const setCategory = (id) =>
    setSearchParams(id === "all" ? {} : { category: id }, { replace: true });

  return (
    <section className="pt-36 pb-32 relative overflow-hidden">
      <title>Projects — Dipesh Dhungana</title>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <PageHeader eyebrow="All Work" title="Everything I've" accent="built.">
          Mobile apps, web projects, machine learning, automation, and academic
          work, all in one place.
        </PageHeader>

        <FilterChips
          options={projectCategories}
          active={active}
          counts={counts}
          onChange={setCategory}
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {visible.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
            <AnimatedBorderButton>
              More on GitHub
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
