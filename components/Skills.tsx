import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Define layout classes for a 4-column desktop grid, 2-column tablet grid
  const getGridClasses = (index: number) => {
    switch (index) {
      case 0: // React - Hero Item (Big Square)
        return "md:col-span-2 md:row-span-2 bg-gradient-to-br from-white/10 to-white/5";
      case 3: // Node (Tall vertical on some layouts, or standard)
        return "md:col-span-1 md:row-span-1";
      case 5: // Figma (Wide)
        return "md:col-span-2 md:row-span-1";
      default: // Standard 1x1
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden bg-surface/10">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
             <div className="h-[1px] w-12 bg-secondary" />
             <span className="text-secondary font-medium tracking-widest text-sm uppercase">Expertise</span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-gray-400 max-w-xl text-lg">
             A carefully curated selection of tools and technologies I use to build scalable, high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4">
          {SKILLS.map((skill, index) => {
             const isLarge = index === 0;
             const isWide = index === 5;
             
             return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`
                  relative group p-6 rounded-3xl border border-white/10 backdrop-blur-md overflow-hidden flex flex-col justify-between
                  bg-white/5 hover:bg-white/10 transition-all duration-300
                  ${getGridClasses(index)}
                `}
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Header / Category */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-3 py-1 text-xs font-medium uppercase tracking-wide border border-white/10 rounded-full text-gray-400 bg-black/20">
                    {skill.category}
                  </span>
                  {isLarge && (
                    <span className="text-primary font-bold text-xs bg-primary/10 px-2 py-1 rounded">PRIMARY</span>
                  )}
                </div>

                {/* Icon & Name */}
                <div className={`relative z-10 flex ${isLarge ? 'flex-col items-start gap-4' : 'flex-row items-center gap-4'} mt-4`}>
                   <div className={`
                      flex items-center justify-center rounded-2xl bg-black/30 shadow-inner
                      ${isLarge ? 'w-20 h-20 p-4' : 'w-12 h-12 p-2.5'}
                      transition-transform duration-500 group-hover:scale-110
                   `}>
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className={`w-full h-full object-contain drop-shadow-lg ${skill.name === 'Next.js' ? 'invert' : ''}`}
                      />
                   </div>
                   
                   <div className={isLarge ? 'mt-2' : ''}>
                      <h4 className={`font-display font-bold ${isLarge ? 'text-3xl' : 'text-lg group-hover:text-primary transition-colors'}`}>
                        {skill.name}
                      </h4>
                      {isWide && (
                         <p className="text-sm text-gray-500 mt-1 hidden md:block">Design Tool</p>
                      )}
                   </div>
                </div>

                {/* Progress Bar (Visual only) */}
                <div className="relative z-10 mt-6 space-y-2">
                   <div className="flex justify-between text-xs text-gray-400">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                   </div>
                   <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-accent"
                      />
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;