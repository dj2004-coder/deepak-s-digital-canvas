import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Lightbulb, Rocket, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from '@/components/FloatingElements';
import StatsCard from '@/components/StatsCard';
import TiltCard from '@/components/TiltCard';

const Index = () => {
  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '8+', label: 'Projects Completed' },
    { value: '40%', label: 'UI Performance Improvement' },
    { value: '98', label: 'Lighthouse Score' },
  ];

  const highlights = [
    { icon: Code2, title: 'What I Do', description: 'Full Stack expertise in React, Node.js & MongoDB' },
    { icon: Lightbulb, title: 'Why I Code', description: 'Passion for building scalable, user-focused solutions' },
    { icon: Rocket, title: 'Vision', description: 'Creating impactful digital products that matter' },
    { icon: Award, title: 'Featured', description: 'BrajMart platform with 40% UI improvement' },
  ];

  const topSkills = ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-pattern" />
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-medium mb-6"
              >
                <Zap size={16} />
                Available for Remote & Freelance Work
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-navy leading-tight mb-4"
              >
                Deepak Jadon
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl font-medium text-muted-foreground mb-6"
              >
                Full Stack <span className="gradient-text-sky">Developer</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
              >
                Crafting exceptional digital experiences through innovative code, elegant design, and cutting-edge technology solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky text-white font-medium shadow-sky hover:bg-sky-dark transition-colors"
                  >
                    View My Work
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
                <a href="/resume" target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-navy text-navy font-medium hover:bg-navy hover:text-white transition-all"
                  >
                    <Download size={18} />
                    Resume
                  </motion.button>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4"
              >
                <span className="text-sm text-muted-foreground">Connect:</span>
                {[
                  { icon: Github, href: 'https://github.com/deepakjadon1902' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/deepak-jadon-612487272' },
                  { icon: Mail, href: 'mailto:deepakjadon1907@gmail.com' },
                ].map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-sky hover:text-white transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <TiltCard className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky/20 via-transparent to-navy/20" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy-light to-sky flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-5xl sm:text-6xl font-bold">
                        DJ
                      </div>
                      <p className="text-sm sm:text-base font-medium opacity-80">Full Stack Developer</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-4 border-sky/30 rounded-3xl animate-pulse-glow" />
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={stat.label} {...stat} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">
              What Makes Me <span className="gradient-text-sky">Different</span>
            </h2>
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-sky to-sky-light mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-sky/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-sky/10 flex items-center justify-center mb-4 group-hover:bg-sky transition-colors">
                  <Icon size={28} className="text-sky group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Skills */}
      <section className="relative py-16 sm:py-24 bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Core <span className="text-sky">Technologies</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {topSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-sky hover:border-sky transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Let's Build Something <span className="gradient-text-sky">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'm always excited to collaborate on innovative ideas and bring them to life.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sky text-white text-lg font-medium shadow-sky hover:bg-sky-dark transition-colors"
              >
                Get in Touch
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
