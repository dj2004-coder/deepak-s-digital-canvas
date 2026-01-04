import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Users, 
  Palette,
  FileCode,
  Boxes,
  Workflow,
  GitBranch,
  Terminal,
  Search,
  MessageSquare,
  Bug,
  Lightbulb,
  Zap
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import SkillCard from '@/components/SkillCard';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    color: 'from-sky to-sky-light',
    skills: [
      { name: 'HTML5', icon: FileCode, level: 95 },
      { name: 'CSS3', icon: Palette, level: 90 },
      { name: 'JavaScript (ES6+)', icon: Zap, level: 92 },
      { name: 'React.js', icon: Boxes, level: 90 },
      { name: 'TypeScript', icon: FileCode, level: 88 },
      { name: 'Tailwind CSS', icon: Palette, level: 92 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'from-navy to-navy-light',
    skills: [
      { name: 'Node.js', icon: Server, level: 88 },
      { name: 'Express.js', icon: Workflow, level: 85 },
      { name: 'MongoDB', icon: Database, level: 85 },
      { name: 'PostgreSQL', icon: Database, level: 75 },
      { name: 'RESTful APIs', icon: Workflow, level: 90 },
      { name: 'JWT/OAuth', icon: Wrench, level: 85 },
    ],
  },
  {
    title: 'Tools & Testing',
    icon: Wrench,
    color: 'from-sky-dark to-sky',
    skills: [
      { name: 'Git', icon: GitBranch, level: 90 },
      { name: 'GitHub', icon: GitBranch, level: 92 },
      { name: 'Postman', icon: Terminal, level: 88 },
      { name: 'Thunder Client', icon: Terminal, level: 85 },
      { name: 'Figma', icon: Palette, level: 75 },
      { name: 'SEO Optimization', icon: Search, level: 80 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'from-navy-light to-navy',
    skills: [
      { name: 'Problem-Solving', icon: Lightbulb, level: 95 },
      { name: 'Communication', icon: MessageSquare, level: 90 },
      { name: 'Debugging', icon: Bug, level: 92 },
      { name: 'Team Collaboration', icon: Users, level: 88 },
      { name: 'Agile/Scrum', icon: Workflow, level: 85 },
      { name: 'Quick Learner', icon: Zap, level: 95 },
    ],
  },
];

const Skills = () => {
  return (
    <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    {...skill}
                    delay={skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-navy via-navy-light to-navy text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              My Development <span className="text-sky">Philosophy</span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              I believe in writing clean, maintainable code that scales. Every project is an opportunity to learn something new and push boundaries.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Performance First', value: '98', suffix: '/100', label: 'Lighthouse Score' },
              { title: 'Code Quality', value: '35', suffix: '%', label: 'Bug Reduction' },
              { title: 'User Experience', value: '40', suffix: '%', label: 'UI Improvement' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-4xl font-bold text-sky mb-2">
                  {item.value}<span className="text-2xl">{item.suffix}</span>
                </div>
                <div className="text-sm text-white/60">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Skills;
