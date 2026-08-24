const fs = require('fs');
fs.writeFileSync('src/components/ui/FadeIn.tsx', \'use client';
import { motion } from 'framer-motion';
export function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay, ease: 'easeOut' }} className={className}>
      {children}
    </motion.div>
  );
}\);

fs.writeFileSync('src/components/home/Hero.tsx', \import { H1, P } from '../ui/Typography';
import ArrowLink from '../ui/ArrowLink';
import { FadeIn } from '../ui/FadeIn';

export default function Hero() {
  return (
    <section className='min-h-[75vh] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 py-16 md:py-20'>
      <div className='w-full md:w-3/5 space-y-10'>
        <FadeIn>
          <H1 className='leading-[1.15]'>
            Engineer Minded.<br />
            <span className='text-text-primary/70'>Sales Driven.</span><br />
            Human First.
          </H1>
        </FadeIn>
        <FadeIn delay={0.2} className='max-w-md'>
          <P className='text-lg leading-relaxed'>
            [Short editorial introduction placeholder. This will contain the real Rushi\\'s story, setting the tone for the rest of the website.]
          </P>
        </FadeIn>
        <FadeIn delay={0.3}>
          <ArrowLink href='/work'>Explore my work</ArrowLink>
        </FadeIn>
      </div>
      <FadeIn delay={0.4} className='w-full md:w-2/5'>
        <div className='relative w-full aspect-[4/5] bg-surface rounded-sm border border-text-primary/10 flex items-center justify-center overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-tr from-surface to-bg-base opacity-40' />
          <span className='text-text-primary/40 text-xs uppercase tracking-[0.2em] font-medium z-10'>Portrait / Reserved</span>
        </div>
      </FadeIn>
    </section>
  );
}\);

fs.writeFileSync('src/components/home/Intro.tsx', \import { FadeIn } from '../ui/FadeIn';

export default function Intro() {
  return (
    <section className='py-24 md:py-32 border-t border-text-primary/10'>
      <FadeIn className='max-w-4xl mx-auto text-center'>
        <h3 className='font-display text-2xl md:text-3xl lg:text-4xl leading-relaxed md:leading-relaxed text-text-primary/90 font-light'>
          [This is the three-line editorial personal statement placeholder. It should visually communicate who I am, what I have been doing, and where I am heading in a natural, mature tone.]
        </h3>
      </FadeIn>
    </section>
  );
}\);

fs.writeFileSync('src/components/home/Achievement.tsx', \import { FadeIn } from '../ui/FadeIn';
import { ArrowRight } from 'lucide-react';

export default function Achievement() {
  return (
    <section className='py-16 md:py-24'>
      <FadeIn>
        <div className='group block relative max-w-3xl border-l-2 border-accent pl-6 md:pl-8 py-2'>
          <span className='text-xs uppercase tracking-widest text-accent font-semibold mb-3 block'>Featured Achievement</span>
          <h4 className='font-display text-2xl md:text-3xl mb-4 text-text-primary'>
            Engineering students made plastic from corn flour
          </h4>
          <p className='text-text-primary/70 mb-6 max-w-xl leading-relaxed'>
            [Short description of the diploma laboratory achievement. This serves as an editorial footnote to the professional journey without overwhelming the page.]
          </p>
          <a 
            href='https://gujarati.news18.com/photogallery/ahmedabad/engineering-students-made-a-miracle-made-plastic-from-corn-flour-az-1855744-page-3.html' 
            target='_blank' 
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors'
          >
            Read Source <ArrowRight className='w-4 h-4 transform group-hover:translate-x-1 transition-transform' />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}\);

fs.writeFileSync('src/components/home/Stats.tsx', \import { FadeIn } from '../ui/FadeIn';

export default function Stats() {
  const stats = [
    { value: '50+', label: 'International meetings' },
    { value: '15+', label: 'Countries' },
    { value: '3', label: 'Business verticals' },
    { value: '19', label: 'Years old' },
  ];

  return (
    <section className='py-16 md:py-24 border-t border-text-primary/10'>
      <FadeIn>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8'>
          {stats.map((stat, i) => (
            <div key={i} className='flex flex-col gap-3'>
              <span className='font-display text-4xl md:text-5xl text-text-primary tracking-tight'>
                {stat.value}
              </span>
              <span className='text-sm text-text-primary/70 font-medium tracking-wide uppercase'>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}\);

fs.writeFileSync('src/components/home/WorkPreview.tsx', \import Link from 'next/link';
import { FadeIn } from '../ui/FadeIn';
import { ArrowRight } from 'lucide-react';
import { H2 } from '../ui/Typography';

const previewData = [
  { id: 1, company: '[Company/Org Name]', role: '[Role Title]', year: '202X - Present', desc: '[Very short descriptor of the role]' },
  { id: 2, company: '[Company/Org Name]', role: '[Role Title]', year: '202X - 202X', desc: '[Very short descriptor of the role]' },
  { id: 3, company: '[Company/Org Name]', role: '[Role Title]', year: '202X - 202X', desc: '[Very short descriptor of the role]' },
];

export default function WorkPreview() {
  return (
    <section className='py-24 border-t border-text-primary/10'>
      <FadeIn className='mb-16'>
        <H2>Experience</H2>
      </FadeIn>
      <div className='flex flex-col'>
        {previewData.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.1}>
            <Link href='/work' className='group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-text-primary/10 hover:border-accent transition-colors'>
              <div className='flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4 md:mb-0 w-full md:w-2/3'>
                <h3 className='font-display text-2xl md:text-3xl text-text-primary group-hover:text-accent transition-colors'>{item.company}</h3>
                <span className='text-text-primary/60 text-sm md:text-base'>{item.role}</span>
              </div>
              <div className='flex items-center justify-between w-full md:w-1/3 md:justify-end gap-8'>
                <span className='text-text-primary/50 text-sm font-mono tracking-wider'>{item.year}</span>
                <ArrowRight className='w-5 h-5 text-text-primary/30 group-hover:text-accent group-hover:-rotate-45 transition-all duration-300' />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}\);

fs.writeFileSync('src/components/home/SynchronicityTeaser.tsx', \import { FadeIn } from '../ui/FadeIn';
import { H2, P } from '../ui/Typography';
import ArrowLink from '../ui/ArrowLink';

export default function SynchronicityTeaser() {
  const themes = ['Psycho-Spiritual', 'Business', 'Top 1% Mindset'];

  return (
    <section className='py-24 md:py-32 my-16 bg-surface rounded-sm px-8 md:px-16 border border-text-primary/5'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-16'>
        <div className='w-full md:w-1/2 space-y-8'>
          <FadeIn>
            <H2>Synchronicity</H2>
            <P className='text-lg mt-6 max-w-md'>
              Connecting the dots between abstract philosophies and practical execution.
            </P>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className='space-y-4 mb-10'>
              {themes.map((theme, i) => (
                <li key={i} className='flex items-center gap-4 text-text-primary/80 font-medium'>
                  <span className='w-1.5 h-1.5 rounded-full bg-accent/60' />
                  {theme}
                </li>
              ))}
            </ul>
            <ArrowLink href='/synchronicity'>Explore Synchronicity</ArrowLink>
          </FadeIn>
        </div>
        
        {/* Placeholder for 3D Experience Circle */}
        <FadeIn delay={0.3} className='w-full md:w-1/2 flex justify-center'>
          <div className='w-64 h-64 md:w-80 md:h-80 rounded-full border border-dashed border-text-primary/20 flex items-center justify-center relative'>
            <div className='absolute inset-4 rounded-full border border-text-primary/5 animate-pulse' />
            <span className='text-xs text-text-primary/30 uppercase tracking-widest text-center px-4 leading-relaxed'>
              [ 3D Experience <br/> Placeholder ]
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}\);

fs.writeFileSync('src/app/page.tsx', \import PageContainer from '../components/layout/PageContainer';
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import Achievement from '../components/home/Achievement';
import Stats from '../components/home/Stats';
import WorkPreview from '../components/home/WorkPreview';
import SynchronicityTeaser from '../components/home/SynchronicityTeaser';

export default function Home() {
  return (
    <PageContainer className='pt-8 md:pt-16 pb-0'>
      <Hero />
      <Intro />
      <Stats />
      <Achievement />
      <WorkPreview />
      <SynchronicityTeaser />
    </PageContainer>
  );
}\);

