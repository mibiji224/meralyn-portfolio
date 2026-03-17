import { Award } from "lucide-react";
import { motion } from "framer-motion";

const trainings = [
  "Early Childhood Development Teacher Skills Development Training",
  "Computer Skills Development Training: Improving Classroom Learning Through ICT",
  "Upskilling and Reskilling Teaching and Supervision Skills Training",
  "Mid-Year Performance Review and Evaluation",
  "School-Based INSET on Reflective Practice and Instructional Refinement in the Implementation of Academic Recovery and ARAL Program",
  "School Learning Action Cell (SLAC) on Sports Coaching Techniques",
  "Kindergarten Festival of Talents",
  "School-Based INSET — Academic Recovery and ARAL Program (Instructional Refinement Session)",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as any } }
};

export default function Trainings() {
  return (
    <section id="trainings" className="py-24 px-6 bg-slate-50">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="section-heading text-4xl mb-16 text-center text-slate-900">
          Trainings & Seminars
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {trainings.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex items-start gap-4 bg-white border border-slate-100 shadow-sm rounded-2xl p-6 hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                <Award size={20} className="text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <div className="pt-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">
                  Training {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                  {t}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
