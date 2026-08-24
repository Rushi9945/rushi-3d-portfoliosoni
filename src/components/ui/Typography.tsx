export function H1({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h1 className={`font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight ${className}`}>{children}</h1>;
}

export function H2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`font-display text-3xl md:text-4xl font-medium tracking-tight ${className}`}>{children}</h2>;
}

export function H3({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`font-display text-2xl md:text-3xl font-medium ${className}`}>{children}</h3>;
}

export function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`leading-relaxed text-text-primary/80 ${className}`}>{children}</p>;
}
