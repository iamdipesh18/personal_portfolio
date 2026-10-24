import { useSearchParams } from "react-router-dom";
import { Clapperboard, GraduationCap } from "lucide-react";
import { FilterChips } from "@/components/FilterChips";
import { PageHeader } from "@/components/PageHeader";
import { Timeline } from "@/components/Timeline";
import {
  contentCreation,
  experiences,
  experienceTracks,
} from "@/data/experience";
import { education } from "@/data/education";

const counts = Object.fromEntries(
  experienceTracks.map((t) => [
    t.id,
    t.id === "all"
      ? experiences.length
      : experiences.filter((e) => e.track === t.id).length,
  ])
);

const ExperiencePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("track");
  const active = experienceTracks.some((t) => t.id === requested)
    ? requested
    : "all";

  const visible =
    active === "all"
      ? experiences
      : experiences.filter((e) => e.track === active);

  const setTrack = (id) =>
    setSearchParams(id === "all" ? {} : { track: id }, { replace: true });

  return (
    <section className="pt-36 pb-32 relative overflow-hidden">
      <title>Experience — Dipesh Dhungana</title>

      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <PageHeader eyebrow="Full Journey" title="Every role," accent="in detail.">
          Software development, data operations, and digital media: the
          complete picture of where I've worked and what I did there.
        </PageHeader>

        <FilterChips
          options={experienceTracks}
          active={active}
          counts={counts}
          onChange={setTrack}
        />

        <Timeline items={visible} detailed />

        {/* Education + Beyond Code */}
        <div className="grid lg:grid-cols-2 gap-8 mt-24">
          {education.map((edu) => (
            <div key={edu.institution} className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Education</h2>
              </div>
              <span className="text-sm text-primary font-medium">
                {edu.period}
              </span>
              <h3 className="text-lg font-semibold mt-2">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.institution}</p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                {edu.location}
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                {edu.description}
              </p>
            </div>
          ))}

          <div className="glass rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clapperboard className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Beyond Code</h2>
            </div>
            <span className="text-sm text-primary font-medium">
              {contentCreation.period}
            </span>
            <h3 className="text-lg font-semibold mt-2">
              {contentCreation.role}
            </h3>
            <p className="text-muted-foreground">
              {contentCreation.handle} · {contentCreation.platforms.join(", ")}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
              {contentCreation.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
