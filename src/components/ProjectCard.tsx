import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  achievements?: string[];
  category: 'Full-Stack' | 'Frontend' | 'Backend';
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <TiltCard>
        <div className="group relative h-full rounded-2xl bg-background border border-border overflow-hidden hover:border-sky/30 transition-all duration-500 hover:shadow-lg">
          {/* Image */}
          <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-sky text-white">
                {project.category}
              </span>
            </div>

            {/* Hover Actions */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-sky text-white text-sm font-medium hover:bg-sky-dark transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-lg bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-colors"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2 group-hover:text-sky transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-sky/10 text-sky">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            {/* Achievements */}
            {project.achievements && project.achievements.length > 0 && (
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-sky flex items-center gap-1">
                  <ArrowRight size={12} />
                  {project.achievements[0]}
                </p>
              </div>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

export default ProjectCard;
