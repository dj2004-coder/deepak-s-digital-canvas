import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Globe, FileText } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const Resume = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'deepakjadon1907@gmail.com', href: 'mailto:deepakjadon1907@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 91493 70081', href: 'tel:+919149370081' },
    { icon: MapPin, label: 'Location', value: 'Mathura, Uttar Pradesh, India', href: null },
    { icon: Github, label: 'GitHub', value: 'github.com/deepakjadon1902', href: 'https://github.com/deepakjadon1902' },
    { icon: Linkedin, label: 'LinkedIn', value: 'deepak-jadon-612487272', href: 'https://linkedin.com/in/deepak-jadon-612487272' },
    { icon: Globe, label: 'Portfolio', value: 'deepak-s-portfolio-one.vercel.app', href: 'https://deepak-s-portfolio-one.vercel.app' },
  ];

  return (
    <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Resume"
          subtitle="A detailed overview of my experience, skills, and qualifications"
        />

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sky text-white font-medium shadow-sky hover:bg-sky-dark transition-colors"
          >
            <Download size={20} />
            Download Resume (PDF)
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-navy text-navy font-medium hover:bg-navy hover:text-white transition-all"
          >
            <ExternalLink size={20} />
            View in New Tab
          </motion.button>
        </motion.div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl bg-background border border-border hover:border-sky/30 transition-all group"
            >
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center group-hover:bg-sky transition-colors">
                    <Icon size={18} className="text-sky group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium text-navy group-hover:text-sky transition-colors">{value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center">
                    <Icon size={18} className="text-sky" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium text-navy">{value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden border border-border shadow-lg"
        >
          <div className="aspect-[8.5/11] bg-background p-8 sm:p-12">
            {/* Resume Header */}
            <div className="text-center mb-8 pb-8 border-b border-border">
              <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-2">Deepak Jadon</h1>
              <p className="text-lg text-sky font-medium mb-4">Full Stack Web Developer</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Mail size={14} /> deepakjadon1907@gmail.com
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={14} /> +91 91493 70081
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> Mathura, India
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                <FileText size={18} className="text-sky" />
                Professional Summary
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full Stack Developer with 1+ years of experience in building scalable web applications using React, TypeScript, Node.js, and MongoDB. 
                Specialized in performance optimization, achieving 40% UI improvement and 25% API latency reduction. 
                Available for remote work and international freelance opportunities.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-navy mb-3">Work Experience</h2>
              <div className="border-l-2 border-sky/30 pl-4">
                <h3 className="font-semibold text-navy">Web Developer</h3>
                <p className="text-sm text-sky">BrajMart Private Limited | June 2024 – Present</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Improved UI performance by 40%</li>
                  <li>• Reduced API latency by 25%</li>
                  <li>• Reduced production bugs by 35%</li>
                  <li>• Implemented JWT authentication & role-based access</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-navy mb-3">Education</h2>
              <div>
                <h3 className="font-semibold text-navy">B.Tech in Technology</h3>
                <p className="text-sm text-sky">GLA University, Mathura | 2022 – 2026</p>
                <p className="text-sm text-muted-foreground">CGPA: 7.44/10</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Git', 'REST APIs', 'JWT'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full bg-sky/10 text-sky">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Resume;
