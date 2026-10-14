import React from "react";
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Menu, X, MoveUpRight } from 'lucide-react';

const projects = [
  { id: '01', name: 'NEON ATHLETICS', category: 'Identity / Campaign', year: '2025', kind: 'neon', title: 'BUILT TO BREAK THROUGH', note: 'A new signal for a new generation.' },
  { id: '02', name: 'COMMON GROUND', category: 'Digital / Strategy', year: '2025', kind: 'common', title: 'MEET IN THE MIDDLE', note: 'Making room for a more connected city.' },
  { id: '03', name: 'FUTURE NATURE', category: 'Art direction / E-commerce', year: '2024', kind: 'future', title: 'BETTER BY NATURE', note: 'Everyday essentials, reimagined.' },
];
const services = [
  ['01', 'Brand systems', 'Strategy, positioning, naming, and a visual world with a point of view.'],
  ['02', 'Digital experiences', 'High-impact websites that turn curiosity into meaningful action.'],
  ['03', 'Creative campaigns', 'Ideas built to travel across screens, spaces, and culture.'],
  ['04', 'Motion & interaction', 'A little movement. A lot more feeling. Every detail has a purpose.'],
];
const reveal = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: .65, ease: [0.22, 1, 0.36, 1] } } };

function Logo() { return <a className="logo" href="#home" aria-label="Kinetiq home">KINETIQ<span>®</span></a>; }

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [['Work', '#work'], ['Approach', '#approach'], ['Services', '#services']];
  return <header className="header">
    <Logo />
    <div className="header-status"><span className="live-dot" /> INDEPENDENT CREATIVE STUDIO</div>
    <button className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
      {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>LET'S TALK <ArrowUpRight size={14} /></a>
    </nav>
  </header>;
}

function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay) => ({ initial: { opacity: 0, y: reduce ? 0 : 55 }, animate: { opacity: 1, y: 0 }, transition: { duration: reduce ? 0 : .85, delay, ease: [0.22, 1, .36, 1] } });
  return <section className="hero" id="home">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-topline mono"><span>STRATEGY / DESIGN / DIGITAL</span><span>AVAILABLE FOR SELECT PROJECTS <i className="live-dot" /></span></div>
    <div className="hero-main">
      <div className="hero-copy">
        <motion.p className="kicker" {...enter(.05)}>GOOD IDEAS HAVE MOMENTUM.</motion.p>
        <div className="hero-heading">
          <motion.div className="hero-line" {...enter(.12)}>MAKE IT</motion.div>
          <motion.div className="hero-line hero-line-2" {...enter(.23)}> <span>MOVE</span><span className="hero-symbol"><Asterisk strokeWidth={1.1} /></span></motion.div>
        </div>
        <motion.div className="hero-under" {...enter(.38)}>
          <p>We turn ambitious thinking into brands, digital experiences, and ideas that refuse to stand still.</p>
          <a href="#work" className="circle-arrow" aria-label="Explore our work"><ArrowDownRight size={23} /></a>
        </motion.div>
      </div>
      <motion.div className="kinetic-object" initial={{ opacity: 0, scale: .7, rotate: -20 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, delay: .35, ease: [0.22, 1, .36, 1] }} aria-hidden="true">
        <div className="object-ring ring-1" /><div className="object-ring ring-2" /><div className="object-ring ring-3" />
        <div className="object-center"><span>K</span><i>®</i></div><div className="orbital-path orbital-path-1"><div className="object-orb orb-1" /></div><div className="orbital-path orbital-path-2"><div className="object-orb orb-2" /></div>
        <span className="object-note mono">ENERGY IN / IMPACT OUT</span>
      </motion.div>
    </div>
    <div className="hero-bottom mono"><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span><span>EST. FOR WHAT'S NEXT — 2025</span><span>01 / 04</span></div>
  </section>;
}

function Marquee() {
  const items = ['NO STATIC THINKING', 'BUILT TO MOVE', 'MAKE A LITTLE NOISE', 'NO STATIC THINKING', 'BUILT TO MOVE', 'MAKE A LITTLE NOISE'];
  return <div className="marquee"><div className="marquee-track">{[...items, ...items].map((item, i) => <span key={i}>{item}<Asterisk size={21} /></span>)}</div></div>;
}

function ProjectArt({ project }) {
  if (project.kind === 'neon') return <div className="art-neon"><div className="neon-grid"/><div className="neon-shape shape-a"/><div className="neon-shape shape-b"/><div className="neon-type">PUSH<br/>PAST<span>LIMITS.</span></div><div className="neon-tag mono">NEON ATHLETICS™</div><div className="neon-stamp">N<span>®</span></div></div>;
  if (project.kind === 'common') return <div className="art-common"><div className="common-sun"/><div className="common-arch arch-a"/><div className="common-arch arch-b"/><div className="common-type">COMMON<br/><i>GROUND</i></div><div className="common-caption mono">A PLACE TO BEGIN AGAIN.</div></div>;
  return <div className="art-future"><div className="future-sphere"/><div className="future-ring"/><div className="future-leaf leaf-a"/><div className="future-leaf leaf-b"/><div className="future-type">FUTURE<br/>NATURE<span>®</span></div><div className="future-caption mono">BETTER THINGS, NATURALLY.</div></div>;
}

function Work() {
  return <section className="work section-wrap" id="work">
    <div className="section-top"><span className="section-label mono">01 / SELECTED WORK</span><span className="section-side mono">A FEW THINGS WE'VE SET IN MOTION</span></div>
    <div className="work-intro"><h2>Ideas in<br/><span>full colour.</span></h2><p>Different challenges. Different worlds. One shared belief that the details make the difference.</p></div>
    <div className="project-list">{projects.map((p, i) => <motion.a href="#contact" className={`project project-${p.kind}`} key={p.id} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} transition={{ delay: i * .07 }}>
      <div className="project-art"><ProjectArt project={p}/><div className="project-index mono">{p.id} / 03</div><div className="project-open"><ArrowUpRight size={22}/></div></div>
      <div className="project-details"><div><h3>{p.name}</h3><p>{p.category}</p></div><span className="project-year mono">{p.year}</span></div>
    </motion.a>)}</div>
    <a className="outline-link" href="#contact">HAVE SOMETHING IN MIND? <span>LET'S MAKE IT REAL <ArrowUpRight size={16}/></span></a>
  </section>;
}

function Approach() {
  return <section className="approach" id="approach"><div className="approach-inner section-wrap">
    <div className="section-label mono">02 / OUR POINT OF VIEW</div>
    <div className="approach-content"><h2>Less noise.<br/><span>More signal.</span></h2><div className="approach-copy"><p className="approach-lead">The world doesn't need more of the same. It needs ideas with a pulse, brands with a backbone, and digital experiences worth spending time with.</p><p className="approach-small">We're a nimble, independent studio built around collaboration. We get close to the problem, find the interesting angle, and make work that earns its place in the world.</p><a href="#services" className="arrow-link">HOW WE WORK <ArrowDownRight size={17}/></a></div></div>
    <div className="approach-foot"><div className="pulse-mark"><span/><span/><span/><span/><span/></div><span className="mono">CURIOUS BY DEFAULT. PRECISE BY DESIGN.</span><span className="mono">MANILA ↔ EVERYWHERE</span></div>
  </div></section>;
}

function Services() {
  return <section className="services section-wrap" id="services"><div className="section-top"><span className="section-label mono">03 / WHAT WE BRING</span><span className="section-side mono">FROM FIRST THOUGHT TO FINAL PIXEL</span></div><div className="services-head"><h2>Good work<br/>starts <span>here.</span></h2><p>Bring us the early thought, the big pivot, or the thing you can't stop thinking about.</p></div>
    <div className="service-list">{services.map(([num, title, description]) => <motion.div className="service-row" key={num} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .5 }}><span className="mono service-num">{num}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight className="service-icon" size={21}/></motion.div>)}</div>
  </section>;
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'hello@kinetiq.studio';
  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${email}`; }
  }
  return <section className="contact" id="contact"><div className="contact-inner section-wrap"><span className="section-label mono">04 / YOUR MOVE</span><div className="contact-spark"><Asterisk strokeWidth={.8}/></div><h2>Let's make<br/>something <span>move.</span></h2><div className="contact-bottom"><p>Have a challenge, a half-formed idea, or a plan that needs a creative partner? We're listening.</p><button onClick={copyEmail} className="email-button"><span>{copied ? 'EMAIL COPIED!' : email}</span><ArrowUpRight size={22}/></button></div></div></section>;
}

function Footer() {
  return <footer className="footer section-wrap"><Logo/><span className="mono footer-tag">INDEPENDENT THINKING. OUT IN THE WORLD.</span><div className="footer-links"><span>© KINETIQ® 2025</span><a href="#home">BACK TO TOP ↑</a></div></footer>;
}

export default function App() {
  return <><Header/><main><Hero/><Marquee/><Work/><Approach/><Services/><Contact/></main><Footer/></>;
}
