import { motion } from "framer-motion";

const skills = [
  "Lesson Planning & Instruction",
  "Early Literacy & Numeracy",
  "Classroom Management",
  "Student Engagement",
  "Assessment & Evaluation",
  "EdTech Integration",
  "Child-Centered Approaches",
  "Curriculum Planning",
  "Differentiated Instruction",
  "Parent-Teacher Communication",
  "Learning Materials Design",
  "Inclusive Education",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "backOut" as any } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-y border-slate-100">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
          className="section-heading text-3xl sm:text-4xl mb-6 text-center text-slate-900"
        >
          Teaching Skills
        </motion.h2>
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
          className="text-slate-500 text-center max-w-2xl mx-auto mb-10 sm:mb-16 text-base sm:text-lg font-medium"
        >
          Core competencies developed through years of classroom experience and continuous professional development.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={itemVariants}
            >
              <span
                className="inline-block px-5 py-3 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 transition-all cursor-default shadow-sm hover:shadow-md"
              >
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
