import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/synchronicity", label: "Synchronicity" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="w-full py-12 px-6 md:px-12 mt-24 border-t border-text-primary/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="font-display font-medium text-lg tracking-wide">
          Rushi Pratik Soni
        </div>
        
        <ul className="flex flex-wrap items-center gap-6 text-sm text-text-primary/70">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-accent transition-colors duration-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-6 text-sm text-text-primary/70">
          <li>
            <a href="https://linkedin.com/in/rushisoni" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:rushisoni25@gmail.com" className="hover:text-accent transition-colors duration-300">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
