import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-32 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl">
            I'm a passionate developer who bridges the gap between design and engineering.
            I believe that the best digital products look beautiful and work flawlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <Code size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Clean Code</h3>
            <p className="text-gray-400">
              I write scalable, maintainable, and self-documenting code. Architecture matters just as much as functionality.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <Palette size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Modern Design</h3>
            <p className="text-gray-400">
              Obsessed with micro-interactions, typography, and layout. I implement designs with pixel-perfect precision.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors md:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
              <Zap size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Performance</h3>
            <p className="text-gray-400">
              Optimizing for Core Web Vitals. Fast load times and smooth 60fps animations are non-negotiable.
            </p>
          </motion.div>
          
           {/* Card 4 - Wide */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 backdrop-blur-sm md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
               <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-6">
                <Globe size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Global Mindset</h3>
              <p className="text-gray-300">
                Experienced in working with remote asynchronous teams across multiple timezones. 
                I value clear communication and collaborative problem solving.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-video rounded-xl bg-black/40 overflow-hidden relative">
               {/* Decorative map abstract or similar */}
               <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;