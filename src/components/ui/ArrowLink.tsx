import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArrowLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 font-medium hover:text-accent transition-colors duration-300 ${className}`}>
      {children}
      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  );
}
