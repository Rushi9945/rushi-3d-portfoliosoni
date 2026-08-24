import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import MyModel from '../sections/MyModel'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'

const MARQUEE = ['B2B OUTREACH', 'INTERNATIONAL SALES', 'PIPELINE MANAGEMENT', 'CRM', 'LEAD GENERATION', 'BUSINESS DEVELOPMENT', 'BNI EXPERTISE', 'CLIENT ACQUISITION']

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#05050a] text-white">
      <Navbar />
      <main>
        <Hero />

        {/* Tech marquee */}
        <div className="relative overflow-hidden border-y border-white/8 py-4">
          <div className="marquee-track flex w-max gap-10">
            {[...MARQUEE, ...MARQUEE].map((t, i) => (
              <span key={i} className="flex items-center gap-10 font-mono2 text-sm uppercase tracking-[0.3em] text-white/35">
                {t} <span className="text-violet-400">✦</span>
              </span>
            ))}
          </div>
        </div>

        <About />
        <MyModel />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
