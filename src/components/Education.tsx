import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  {
    degree: "Bachelor of Elementary Education",
    school: "De La Salle John Bosco College",
    period: "Graduated on 2024",
    tag: "BEED",
    icon: GraduationCap,
  },
  {
    degree: "Master of Arts in Education Management",
    school: "University of Immaculate Conception",
    period: "2025",
    tag: "MAED",
    icon: Award,
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as any } }
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="section-heading text-4xl mb-16 text-center text-slate-900">
          Education
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 sm:left-1/2 top-4 bottom-4 w-px bg-slate-200 transform sm:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={i} 
                  variants={itemVariants} 
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${isEven ? 'sm:flex-row-reverse' : ''}`}
                >
                  <div className={`w-full sm:w-1/2 pl-24 sm:pl-0 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                      <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider mb-2">{item.period}</p>
                      <h3 className="font-display text-xl text-slate-900 font-bold mb-2 group-hover:text-indigo-600 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium mb-3">{item.school}</p>
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-indigo-50 shadow-sm z-10 group-hover:border-indigo-100 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <item.icon size={20} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
