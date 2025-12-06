import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-8" />
          <p className="text-xl text-gray-400">A showcase of recent technical challenges and visual experiments.</p>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-3/5 group relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-video bg-gray-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    <a
                      href={project.link}
                      className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                      title="View Live"
                    >
                      <ExternalLink size={24} />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-black text-white border border-white/20 rounded-full hover:scale-110 transition-transform"
                      title="View Code"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-2/5">
                <span className="text-accent font-medium tracking-wider text-sm mb-2 block">0{index + 1}</span>
                <h3 className="font-display text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium uppercase tracking-wide border border-white/10 rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors group">
                  <span className="border-b border-transparent group-hover:border-accent transition-colors">Read Case Study</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;