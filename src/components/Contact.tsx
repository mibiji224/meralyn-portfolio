import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  { icon: Phone, label: "Contact No.", value: "09635676898" },
  { icon: Mail, label: "Email", value: "matundomeralyn@gmail.com" },
  { icon: MapPin, label: "Address", value: "Bislig City, Surigao del Sur, Philippines" },
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

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.h2 variants={itemVariants} className="section-heading text-3xl sm:text-4xl mb-10 sm:mb-16 text-center text-slate-900">
          Contact Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={itemVariants} className="flex flex-col h-full">
            <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10">
              Feel free to reach out if you have any questions, collaboration
              opportunities, or would like to learn more about my teaching
              portfolio and experience.
            </p>
            <div className="space-y-6 flex-grow">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors duration-300">
                    <item.icon size={20} className="text-indigo-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      {item.label}
                    </p>
                    <p className="text-base font-semibold text-slate-800">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white border border-slate-100 shadow-lg shadow-slate-200/50 rounded-[2rem] p-8 sm:p-10">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <Input placeholder="Full Name" className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-indigo-600" />
                </div>
                <div className="space-y-1">
                  <Input type="email" placeholder="Email Address" className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-indigo-600" />
                </div>
              </div>
              <div className="space-y-1">
                <Input placeholder="Subject" className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-indigo-600" />
              </div>
              <div className="space-y-1">
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="flex w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all resize-none"
                />
              </div>
              <Button className="w-full h-12 rounded-xl text-base font-semibold shadow-md shadow-indigo-200 hover:shadow-lg transition-shadow bg-indigo-600 hover:bg-indigo-700">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
