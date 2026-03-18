import { Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const credentials = [
  {
    title: "Honor Graduate Eligibility (HE)",
    description:
      "Graduated with academic distinction, demonstrating consistent excellence throughout the teacher education program.",
    badge: "Academic Distinction",
    icon: Award,
  },
  {
    title: "Licensure Examination for Professional Teachers",
    description:
      "Successfully passed the national board examination, earning the title of Licensed Professional Teacher (LPT).",
    badge: "Licensed Professional Teacher",
    icon: BookOpen,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } }
};

export default function Credentials() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 border-t border-slate-100">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="section-heading text-3xl sm:text-4xl mb-10 sm:mb-16 text-center text-slate-900">
          Credentials
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {credentials.map((c, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants} 
              className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 transition-colors">
                <c.icon size={28} />
              </div>
              <h3 className="font-display text-xl text-slate-900 font-bold mb-4">
                {c.title}
              </h3>
              <p className="text-base text-slate-500 leading-relaxed mb-6 font-medium">
                {c.description}
              </p>
              <div className="inline-flex items-center gap-2 mt-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-sm font-bold text-slate-700">
                  {c.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
