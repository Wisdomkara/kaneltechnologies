import { createElement, useEffect } from 'react';
import { ArrowUpRight, Check, Clock3, Video } from 'lucide-react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import { freeAdsTraining as training } from '../data/freeAdsTraining.js';

const lessons = [
  'How Facebook and Instagram ads work.',
  'How to choose an objective for your business.',
  'How to identify the audience you want to reach.',
  'How to plan your advertising budget.',
  'A demonstration of campaign setup.',
  'Common mistakes to avoid.',
];
const steps = [
  'Click “Register for Free.”',
  'Complete the Google Form.',
  'Use the WhatsApp group link shown after submission to join the class updates group.',
  'Receive the Google Meet joining link in the group before the class.',
];
const faqs = [
  ['Is the training free?', 'Yes. Attending the introductory live training is free.'],
  ['Do I need experience?', 'No. The session is designed for beginners.'],
  ['Can I attend using my phone?', 'Yes. You can attend using a smartphone or computer.'],
  ['Does registration automatically add me to WhatsApp?', 'No. You choose to join through the invitation link after registering.'],
];
const section = 'mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-20';
const eyebrow = 'text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300';
const heading = 'text-2xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl';

function EntranceSection({ children, ...props }) {
  const reduceMotion = useReducedMotion();
  return (
    <Motion.section
      initial={reduceMotion ? false : { opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      {...props}>
      {children}
    </Motion.section>
  );
}

function RegisterButton() {
  return (
    <a href={training.registrationUrl} target="_blank" rel="noopener noreferrer"
      className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-300 sm:w-auto">
      Register for Free <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
      <span className="sr-only"> (Google Form, opens in a new tab)</span>
    </a>
  );
}

export default function FreeAdsTrainingPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Free Facebook & Instagram Ads Training | Kanel Innovations';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <main className="overflow-x-clip bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300">
      <EntranceSection className="relative isolate overflow-hidden border-b border-slate-200 dark:border-white/10 pt-32 sm:pt-40" aria-labelledby="training-title">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.06),transparent_65%)]" />
        <div className={`${section} grid gap-8 sm:gap-12 !pt-2 sm:!pt-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-center`}>
          <div>
            <p className={eyebrow}>Kanel Innovations · Free live training</p>
            <h1 id="training-title" className="mt-6 max-w-3xl text-[2rem] font-black leading-[1.15] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Learn to Run <span className="text-blue-600 dark:text-blue-400">Facebook &amp; Instagram Ads</span> for Your Business.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">Join our free live training and learn how to set up ads from your smartphone or computer.</p>
            <div className="mt-8"><RegisterButton /></div>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Free training. Any advertising spend is separate.</p>
          </div>
          <aside className="relative rounded-3xl border border-blue-200 dark:border-blue-400/25 bg-white dark:bg-slate-950 p-5 sm:p-9" aria-labelledby="event-details">
            <div aria-hidden="true" className="mb-8 h-1 w-12 rounded-full bg-blue-400" />
            <p className={eyebrow}>Save your spot</p>
            <h2 id="event-details" className="mt-3 text-2xl font-extrabold text-slate-950 dark:text-white">Event details</h2>
            <dl className="mt-7 space-y-6">
              {[[Clock3, 'Schedule', training.schedule], [Video, 'Venue', training.venue]].map(([Icon, label, value]) => (
                <div key={label} className="flex items-start gap-4">
                  {createElement(Icon, { className: 'mt-1 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400', 'aria-hidden': true })}
                  <div><dt className="text-sm text-slate-600 dark:text-slate-300">{label}</dt><dd className="mt-1 font-bold text-slate-950 dark:text-white">{value}</dd></div>
                </div>
              ))}
            </dl>
            <p className="mt-8 border-t border-slate-200 dark:border-white/10 pt-5 text-sm leading-6">Live online. Join from your smartphone or computer.</p>
          </aside>
        </div>
      </EntranceSection>

      <EntranceSection className="border-y border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950" aria-labelledby="trainer-title">
        <div className={`${section} grid items-center gap-6 sm:gap-9 md:grid-cols-[0.65fr_1fr] lg:min-h-[800px] lg:gap-20`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <img src={training.portrait} alt="Wisdom Kara, founder of Kanel Innovations" width="1024" height="1536" loading="lazy" decoding="async" className="mx-auto h-auto w-full max-w-[16rem] sm:max-w-xs rounded-2xl lg:max-h-[calc(100svh-9rem)] lg:w-auto lg:object-contain" />
          </div>
          <div>
            <h2 id="trainer-title" className={eyebrow}>Meet your trainer</h2>
            <p className={`mt-4 ${heading}`}>Wisdom Kara</p>
            <p className="mt-4 text-base sm:text-lg text-blue-700 dark:text-blue-300">Founder | Kanel Innovations</p>
            <div className="mt-8 h-px w-16 bg-blue-400" aria-hidden="true" />
            <div className="mt-6 sm:mt-8 max-w-lg space-y-5 text-base leading-7 sm:text-lg sm:leading-8">
              <p>Join Wisdom Kara, Founder of Kanel Innovations, for a free, beginner-friendly live training on Facebook and Instagram advertising. Learn how to choose the right campaign objective, identify your target audience, plan your budget and create ads that communicate your offer clearly.</p>
              <p>Follow a practical campaign setup demonstration, explore how to get started from your smartphone or computer, and discover common mistakes to avoid. You’ll also have the opportunity to ask questions and understand how these lessons apply to your business.</p>
              <p>No previous advertising experience is required.</p>
            </div>
          </div>
        </div>
      </EntranceSection>

      <EntranceSection className={section} aria-labelledby="learn-title">
        <p className={eyebrow}>The session</p>
        <h2 id="learn-title" className={`mt-3 ${heading}`}>What you’ll learn</h2>
        <ul className="mt-9 grid gap-x-12 sm:grid-cols-2">
          {lessons.map((lesson) => <li key={lesson} className="flex items-start gap-4 border-b border-slate-200 dark:border-white/10 py-4 sm:py-6 text-base leading-7"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />{lesson}</li>)}
        </ul>
        <div className="mt-12 border-l-2 border-blue-500 pl-6">
          <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">Who should attend</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">Small business owners, entrepreneurs, service providers and beginners who want to understand paid advertising.</p>
        </div>
      </EntranceSection>

      <EntranceSection className={`${section} grid gap-6 sm:gap-10 lg:grid-cols-[0.75fr_1fr]`} aria-labelledby="join-title">
        <div><p className={eyebrow}>Your next steps</p><h2 id="join-title" className={`mt-3 ${heading}`}>How to join</h2><p className="mt-5 max-w-sm leading-7">Register first, then choose to join the group for class updates and your meeting link.</p></div>
        <ol className="list-decimal space-y-5 pl-6 marker:font-bold marker:text-blue-600 dark:marker:text-blue-400">
          {steps.map((step) => <li key={step} className="pl-3 text-base leading-7 sm:text-lg sm:leading-8">{step}</li>)}
        </ol>
      </EntranceSection>

      <EntranceSection className="border-y border-slate-200 dark:border-white/10" aria-labelledby="faq-title">
        <div className={section}>
          <h2 id="faq-title" className={heading}>Frequently asked questions</h2>
          <div className="mt-8">
            {faqs.map(([question, answer]) => <details key={question} className="group border-b border-slate-200 dark:border-white/10 py-5 last:border-0"><summary className="cursor-pointer rounded-sm py-2 text-base leading-7 sm:text-lg font-bold text-slate-950 dark:text-white marker:text-blue-600 dark:marker:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-300">{question}</summary><p className="mt-3 max-w-3xl leading-7">{answer}</p></details>)}
          </div>
        </div>
      </EntranceSection>

      <EntranceSection className={`${section} text-center`} aria-labelledby="final-training-title">
        <p className={eyebrow}>Start with the basics</p>
        <h2 id="final-training-title" className={`mx-auto mt-4 max-w-2xl ${heading}`}>Ready to Learn How to Run Your Own Ads?</h2>
        <div className="mt-8"><RegisterButton /></div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Free training. Any advertising spend is separate.</p>
        <address className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-slate-200 dark:border-white/10 pt-8 text-sm not-italic sm:flex-row sm:flex-wrap sm:gap-8">
          <a className="rounded-sm underline underline-offset-4 hover:text-slate-950 dark:hover:text-white focus-visible:outline-blue-600 dark:focus-visible:outline-blue-300" href="https://kanelinnovations.com">kanelinnovations.com</a>
          <span>@kanelinnovations</span>
          <a className="rounded-sm underline underline-offset-4 hover:text-slate-950 dark:hover:text-white focus-visible:outline-blue-600 dark:focus-visible:outline-blue-300" href="tel:+2347084153584">07084153584</a>
        </address>
      </EntranceSection>
    </main>
  );
}
