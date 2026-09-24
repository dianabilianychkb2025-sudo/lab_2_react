import { motion } from 'framer-motion';

function Skills() {
  const skills = ['HTML5 & CSS3', 'JavaScript', 'React & Vite', 'Git & GitHub', 'VS Code', 'Chrome DevTools'];

  return (
    <motion.section 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2>Навички та Інструменти</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-card"
            whileHover={{ scale: 1.08, backgroundColor: 'rgba(56, 189, 248, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;