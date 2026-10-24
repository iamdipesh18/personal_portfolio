import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Timeline } from "@/components/Timeline";
import { experiences } from "@/data/experience";

const featuredExperiences = experiences.filter((exp) => exp.featured);

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious beginner to now building products while learning.
          </p>
        </div>

        <Timeline items={featuredExperiences} />

        {/* Full Journey Button */}
        <div className="text-center mt-16 animate-fade-in animation-delay-500">
          <Link to="/experience">
            <AnimatedBorderButton>
              See Full Journey ({experiences.length} roles)
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
