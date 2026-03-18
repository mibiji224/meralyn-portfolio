import { BookOpen, LayoutGrid, Users } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: BookOpen,
    title: "Seminars & Workshops",
    description:
      "Active participation in educational programs, conferences, and workshops to stay current with modern teaching methodologies.",
  },
  {
    icon: LayoutGrid,
    title: "Curriculum Planning",
    description:
      "Training in instructional planning aligned with DepEd standards, ensuring quality and relevance in classroom delivery.",
  },
  {
    icon: Users,
    title: "Learning Sessions",
    description:
      "Collaborative professional learning among fellow teachers through Learning Action Cells (LAC) and peer mentoring.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
};

export default function ProfessionalDevelopment() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-slate-100">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="section-heading text-3xl sm:text-4xl mb-10 sm:mb-16 text-center text-slate-900">
          Professional Development
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((c, i) => (
            <motion.div key={i} variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 rounded-3xl bg-indigo-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-600 transition-colors duration-300 group-hover:-translate-y-2 transform">
                <c.icon size={32} className="text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl text-slate-900 mb-4 font-bold">
                {c.title}
              </h3>
              <p className="text-base text-slate-500 font-medium leading-relaxed max-w-sm mx-auto">
                {c.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
