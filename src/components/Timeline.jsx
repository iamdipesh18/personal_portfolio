/*
  Alternating experience timeline.
  detailed = false → short summary (home page)
  detailed = true  → full bullet points from the CV (/experience)
*/
export const Timeline = ({ items, detailed = false }) => {
  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

      {/* Experience Items */}
      <div className="space-y-12">
        {items.map((exp, idx) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
            style={{ animationDelay: `${(idx + 1) * 150}ms` }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
              {/* Ping animation only for current roles */}
              {exp.current && (
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              )}
            </div>

            {/* Content Card */}
            <div
              className={`pl-8 md:pl-0 ${
                idx % 2 === 0
                  ? "md:pr-16 md:text-right"
                  : "md:col-start-2 md:pl-16"
              }`}
            >
              <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                <span className="text-sm text-primary font-medium">
                  {exp.period}
                </span>

                <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>

                <p className="text-muted-foreground">{exp.company}</p>

                <p className="text-xs text-muted-foreground/70 mt-1">
                  {exp.employment} · {exp.location}
                </p>

                {detailed ? (
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground text-left list-disc pl-5">
                    {exp.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground mt-4">
                    {exp.summary}
                  </p>
                )}

                {/* Technology badges */}
                <div
                  className={`flex flex-wrap gap-2 mt-4 ${
                    idx % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
