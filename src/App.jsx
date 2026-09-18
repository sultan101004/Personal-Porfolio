import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Mail,
  Menu,
  Moon,
  MoveUpRight,
  Palette,
  Send,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'

const projects = [
  {
    title: '3D Product Studio',
    type: 'Interactive experience',
    year: '2025',
    tags: ['React', 'Three.js'],
    category: 'Web design',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=85',
    description: 'A browser-based 3D product experience combining expressive interaction, visual polish, and performant frontend architecture.',
    color: 'peach',
  },
  {
    title: 'Full Stack Workspace',
    type: 'Web application',
    year: '2024',
    tags: ['Next.js', 'Node.js'],
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85',
    description: 'A full-stack dashboard for managing projects, users, and data through a clear and responsive product interface.',
    color: 'blue',
  },
  {
    title: 'Campus Connect',
    type: 'Student platform',
    year: '2023',
    tags: ['React', 'Firebase'],
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    description: 'A student-focused platform for sharing events, resources, and opportunities with a fast, approachable user experience.',
    color: 'yellow',
  },
]

const skills = [
  { name: 'React / Next.js', level: 'Advanced', icon: Code2 },
  { name: 'Full Stack Development', level: 'Working knowledge', icon: Sparkles },
  { name: '3D Design / Three.js', level: 'Working knowledge', icon: Palette },
  { name: 'Interactive UI / Motion', level: 'Working knowledge', icon: MoveUpRight },
]

const repositoryUrl = 'https://github.com/sultan101004/Personal-Porfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [filter, setFilter] = useState('All work')
  const [formStatus, setFormStatus] = useState('idle')
  const [formError, setFormError] = useState('')

  const filteredProjects = filter === 'All work' ? projects : projects.filter((project) => project.category === filter)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')?.trim()
    const email = form.get('email')?.trim()
    const message = form.get('message')?.trim()

    if (!name || !email || !message) {
      setFormError('Please fill in all three fields so I can get back to you.')
      setFormStatus('error')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setFormError('That email address looks a little off. Please check it and try again.')
      setFormStatus('error')
      return
    }

    setFormError('')
    setFormStatus('success')
    event.currentTarget.reset()
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Sultan Shah home"><span>SS</span><i>.</i></a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>Journey</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label={darkMode ? 'Use light mode' : 'Use dark mode'} onClick={() => setDarkMode((value) => !value)}>
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="mini-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
          <button className="icon-button menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial="hidden" animate="visible" variants={fadeUp}>Software engineer <span>·</span> FAST NUCES / Pakistan</motion.p>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}>Building digital<br /><em>worlds that work.</em></motion.h1>
            <motion.p className="hero-intro" initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}>I&apos;m Sultan Shah, a software engineering student who builds polished web products with React, Next.js, 3D design, and full-stack development.</motion.p>
            <motion.div className="hero-actions" initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }}>
              <a className="button button-dark" href="#work">See my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#contact">Get in touch <span>↗</span></a>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }}>
            <div className="portrait-wrap">
              <img src="/sultan-shah.jpg" onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85' }} alt="Portrait of Sultan Shah" />
              <div className="portrait-note"><span>Currently</span><strong>building better<br />digital spaces</strong></div>
            </div>
            <div className="sun-mark">✳</div>
          </motion.div>
          <div className="hero-foot"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section className="marquee" aria-label="Areas of expertise"><div className="marquee-track"><span>Strategy</span><i>✳</i><span>Design</span><i>✳</i><span>Development</span><i>✳</i><span>Strategy</span><i>✳</i><span>Design</span><i>✳</i><span>Development</span></div></section>

        <section className="about section-pad section-grid" id="about">
          <p className="section-label">01 / About me</p>
          <div className="about-content">
            <h2>Curious by default.<br /><span>Technical by nature.</span></h2>
            <div className="about-columns">
              <p className="lead-copy">I&apos;m a BS Software Engineering student at FAST NUCES, focused on turning ambitious ideas into useful, engaging digital products.</p>
              <div className="body-copy"><p>My work sits at the intersection of frontend engineering, visual design, and problem solving. I enjoy making interfaces feel clear while keeping the systems underneath reliable and maintainable.</p><p>My current interests include immersive 3D experiences, full-stack applications, and thoughtful interaction design.</p></div>
            </div>
            <a className="text-link underlined" href="#contact">More about my approach <span>↗</span></a>
          </div>
        </section>

        <section className="skills-band section-pad" id="skills">
          <div className="section-grid"><p className="section-label">02 / What I do</p><div><h2>Good work lives<br /><span>between disciplines.</span></h2><div className="skills-list">{skills.map(({ name, level, icon: Icon }, index) => <motion.div className="skill-row" key={name} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ delay: index * 0.08 }}><div className="skill-icon"><Icon size={19} /></div><strong>{name}</strong><span>{level}</span><ArrowUpRight size={18} /></motion.div>)}</div></div></div>
          <div className="tool-strip"><span>My toolbox</span><div><b>React</b><b>Next.js</b><b>JavaScript</b><b>Three.js</b><b>Node.js</b><b>Git</b></div></div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-heading"><div><p className="section-label">03 / Selected work</p><h2>A few things<br /><span>I&apos;ve made.</span></h2></div><div className="filter-tabs">{['All work', 'Web design', 'Development', 'Product'].map((item) => <button className={filter === item ? 'active' : ''} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
          <motion.div className="project-grid" layout>{filteredProjects.map((project, index) => <motion.article className={`project-card ${project.color}`} key={project.title} layout initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.08 }}><a href={repositoryUrl} target="_blank" rel="noreferrer" className="project-image"><img src={project.image} alt={`${project.title} project preview`} /><span className="project-arrow"><ArrowUpRight size={20} /></span></a><div className="project-meta"><div><p>{project.type} <span>·</span> {project.year}</p><h3>{project.title}</h3></div><a href={repositoryUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code`}><Github size={19} /></a></div><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></motion.article>)}</motion.div>
        </section>

        <section className="journey section-pad section-grid" id="journey"><p className="section-label">04 / The journey</p><div><h2>A timeline of<br /><span>little leaps.</span></h2><div className="timeline"><div className="timeline-item"><span>2022 — now</span><div><h3>BS Software Engineering · FAST NUCES</h3><p>Building a strong foundation in software engineering, algorithms, systems, and product development.</p></div></div><div className="timeline-item"><span>2024 — now</span><div><h3>Frontend & Full Stack Development</h3><p>Creating applications with React, Next.js, modern JavaScript, and backend services.</p></div></div><div className="timeline-item"><span>Always learning</span><div><h3>3D Design & Interactive Experiences</h3><p>Exploring 3D interfaces and immersive web experiences with Three.js and creative frontend work.</p></div></div></div></div></section>

        <section className="contact section-pad" id="contact"><div className="contact-grid"><div><p className="section-label">05 / Say hello</p><h2>Have a good<br /><em>feeling?</em></h2><p className="contact-copy">I&apos;d love to hear what you&apos;re working on. Tell me a little about it and I&apos;ll be in touch soon.</p><div className="contact-links"><a href={repositoryUrl} target="_blank" rel="noreferrer"><Github size={16} /> Sultan Shah on GitHub ↗</a></div></div><form className="contact-form" onSubmit={handleSubmit} noValidate><label><span>Your name</span><input name="name" type="text" placeholder="Your name" /></label><label><span>Email address</span><input name="email" type="email" placeholder="you@company.com" /></label><label><span>What&apos;s on your mind?</span><textarea name="message" rows="4" placeholder="A new project, a hello, a collaboration..." /></label>{formStatus === 'error' && <p className="form-message error">{formError}</p>}{formStatus === 'success' && <p className="form-message success"><Check size={15} /> Message received. I&apos;ll be in touch.</p>}<button className="button button-light" type="submit">Send message <Send size={16} /></button></form></div></section>
      </main>

      <footer className="site-footer"><a className="logo" href="#top"><span>SS</span><i>.</i></a><p>Designed & built by Sultan Shah · 2026</p><div><a href={repositoryUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href={repositoryUrl} target="_blank" rel="noreferrer" aria-label="Portfolio repository"><Code2 size={17} /></a></div></footer>
    </div>
  )
}

export default App
