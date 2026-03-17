import { User, Calendar, MapPin, Flag, Home } from "lucide-react";
import { motion } from "framer-motion";

const personalInfo = [
  { icon: User, label: "Full Name", value: "Meralyn Paqueo Matundo" },
  { icon: Calendar, label: "Date of Birth", value: "November 25, 2001" },
  { icon: MapPin, label: "Place of Birth", value: "Mangagoy, Bislig City, Philippines" },
  { icon: Flag, label: "Citizenship", value: "Filipino" },
  { icon: Home, label: "Address", value: "Bislig City, Surigao del Sur, Philippines" },
];

const qualities = [
  "Passionate about child-centered education",
  "Strong classroom management skills",
  "Creative and resourceful lesson planner",
  "Collaborative and team-oriented",
  "Committed to continuous professional development",
  "Adaptable to diverse learning environments",
  "Patient and empathetic with young learners",
  "Effective communicator with parents and colleagues",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } }
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="section-heading text-4xl mb-6 text-center text-slate-900">
          About Me
        </motion.h2>
        <motion.p variants={itemVariants} className="text-slate-500 text-center max-w-2xl mx-auto mb-16 text-lg font-medium">
          A dedicated elementary school teacher serving in the public school system of Bislig City, Philippines.
        </motion.p>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-slate-50 rounded-[2rem] p-8 sm:p-10 hover:shadow-lg transition-shadow">
            <div className="space-y-6 text-slate-600 leading-relaxed mb-10 text-lg">
              <p>
                I am a dedicated elementary school teacher currently serving in
                the public school system of Bislig City, Surigao del Sur,
                Philippines. My passion for education drives me to create
                engaging, inclusive, and child-friendly learning experiences.
              </p>
              <p>
                With a background in Bachelor of Elementary Education (BEED) and
                ongoing graduate studies in Master of Arts in Education (MAED), I
                continuously seek to enhance my teaching practices and contribute
                meaningfully to the development of young learners.
              </p>
              <p>
                I believe that every child deserves quality education and a
                nurturing environment that fosters curiosity, creativity, and
                confidence.
              </p>
            </div>

            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">
              Personal Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {personalInfo.map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon size={16} className="text-indigo-500 shrink-0" />
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-sm text-slate-800 font-medium pl-6">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-white border border-slate-100 rounded-[2rem] p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow h-full">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-indigo-200 block"></span>
                Personal Qualities
              </h3>
              <ul className="space-y-4">
                {qualities.map((q, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className="w-2 h-2 rounded-full bg-indigo-200 shrink-0 mt-2 group-hover:bg-indigo-500 transition-colors" />
                    <span className="text-slate-600 font-medium">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
