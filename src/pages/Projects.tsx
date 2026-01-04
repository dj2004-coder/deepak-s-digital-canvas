import { motion } from 'framer-motion';
import ProjectCard, { Project } from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';

const projects: Project[] = [
  {
    id: 1,
    title: 'My DriveMate',
    description: 'A comprehensive ride-sharing platform connecting drivers and passengers for seamless, eco-friendly transportation solutions.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepakjadon1902',
    achievements: ['Real-time ride tracking', '95+ Lighthouse performance'],
    category: 'Full-Stack',
    featured: true,
  },
  {
    id: 2,
    title: 'BrajBuzz Tech',
    description: 'Modern company showcase website with dynamic content management and optimized performance for tech businesses.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepakjadon1902',
    achievements: ['40% faster load times'],
    category: 'Frontend',
    featured: true,
  },
  {
    id: 3,
    title: 'EventFlow',
    description: 'Complete event management system with ticketing, scheduling, and real-time attendee tracking capabilities.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepakjadon1902',
    achievements: ['Handles 1000+ concurrent users'],
    category: 'Full-Stack',
    featured: true,
  },
  {
    id: 4,
    title: 'Social Engagement Platform',
    description: 'Built for BrajMart - a social engagement platform with interactive features and real-time communication.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'MongoDB', 'Socket.io', 'JWT'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepakjadon1902',
    achievements: ['25% reduced API latency'],
    category: 'Full-Stack',
  },
  {
    id: 5,
    title: 'DriveEase',
    description: 'Vehicle service booking platform with real-time availability tracking and automated scheduling.',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'Express', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepakjadon1902',
    achievements: ['Integrated payment gateway'],
    category: 'Full-Stack',
  },
  {
    id: 6,
    title: 'Student Record System',
    description: 'Comprehensive student management system with grade tracking, attendance, and performance analytics.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepakjadon1902',
    achievements: ['Analytics dashboard'],
    category: 'Full-Stack',
  },
  {
    id: 7,
    title: 'PicSync',
    description: 'Image synchronization platform with cloud storage integration and real-time collaboration features.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'AWS S3', 'Node.js', 'WebRTC'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepakjadon1902',
    achievements: ['Real-time sync'],
    category: 'Full-Stack',
  },
  {
    id: 8,
    title: 'NagrikSahayak',
    description: 'Civic engagement platform connecting citizens with local government services and community initiatives.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'TypeScript', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepakjadon1902',
    achievements: ['Multilingual support'],
    category: 'Full-Stack',
  },
  {
    id: 9,
    title: 'Task Management App',
    description: 'Productivity application with drag-and-drop task organization, team collaboration, and deadline tracking.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'TypeScript', 'Zustand', 'Tailwind'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepakjadon1902',
    achievements: ['Drag & drop interface'],
    category: 'Frontend',
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Projects"
          subtitle="A collection of projects I've built, from full-stack applications to frontend showcases"
        />

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-navy mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-sky rounded-full" />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-navy mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-navy rounded-full" />
            Other Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Projects;
