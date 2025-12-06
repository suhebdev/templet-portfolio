import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative bg-gradient-to-b from-transparent to-black/80">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
            Let's build something together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            I'm currently available for freelance projects and full-time opportunities.
            If you have a project that needs some creative touch, I'd love to hear about it.
          </p>
          
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
          >
            <Send size={20} />
            <span>Say Hello</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;