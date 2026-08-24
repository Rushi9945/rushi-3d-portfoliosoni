export default function Divider({ className = "" }: { className?: string }) {
  return <div className={`w-full h-[1px] bg-text-primary/10 ${className}`} />;
}
