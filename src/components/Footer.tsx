import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white border-t border-slate-100 py-12 px-6 text-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6">
          <span className="font-display italic text-2xl text-indigo-600">M</span>
        </div>
        
        <p className="text-2xl text-slate-900 mb-2 font-bold" style={{ fontFamily: "var(--font-name)" }}>
          Meralyn Matundo
        </p>
        <p className="text-sm text-slate-500 font-medium mb-6">
          Elementary School Teacher &middot; Bislig City, Philippines
        </p>
        <div className="w-16 h-px bg-slate-200 mb-6"></div>
        <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
}
