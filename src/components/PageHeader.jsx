/* Section-style header used at the top of the full pages */
export const PageHeader = ({ eyebrow, title, accent, children }) => {
  return (
    <div className="max-w-3xl mb-12">
      <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
        {eyebrow}
      </span>

      <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
        {title}{" "}
        <span className="font-serif italic font-normal text-white">
          {accent}
        </span>
      </h1>

      {children && (
        <p className="text-muted-foreground animate-fade-in animation-delay-200">
          {children}
        </p>
      )}
    </div>
  );
};
