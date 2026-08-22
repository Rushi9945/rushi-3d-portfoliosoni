import Reveal from '../components/Reveal'
import { Mail, Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react'

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com/' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 pt-28">
      <div className="orb absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[110px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-cyan-300">05 — What's next</p>
          <h2 className="font-display mt-4 text-5xl font-extrabold leading-tight md:text-6xl">
            Let's build something
            <br />
            <span className="text-gradient">unforgettable</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-white/60">
            Have a project in mind, a role to fill, or just want to talk shaders and chai?
            My inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <a
            href="mailto:rushisoni25@gmail.com"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-9 py-4 text-base font-semibold text-[#05050a] transition-transform hover:scale-105"
          >
            <Mail size={18} className="transition-transform group-hover:-rotate-12" />
            Mail me
          </a>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex items-center justify-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="glass flex h-12 w-12 items-center justify-center rounded-full text-white/60 transition-all hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-300"
              >
                <s.icon size={19} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <footer className="mt-24 border-t border-white/8 py-8 text-center">
        <p className="flex items-center justify-center gap-1.5 font-mono2 text-xs text-white/40">
          Designed & built by Rushi Soni · Made with
          <Heart size={12} className="text-violet-400" fill="currentColor" />
          and too much chai · {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  )
}
