/* Pill-style filter row; options are { id, label }, counts is { [id]: number } */
export const FilterChips = ({ options, active, counts, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-12 animate-fade-in animation-delay-300">
      {options.map((option) => {
        const isActive = option.id === active;
        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            aria-pressed={isActive}
            className={`px-4 py-2 rounded-full text-sm border transition-all ${
              isActive
                ? "bg-primary text-primary-foreground border-primary"
                : "glass text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            {option.label}
            <span className={`ml-2 text-xs ${isActive ? "opacity-80" : "opacity-60"}`}>
              {counts[option.id] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
};
