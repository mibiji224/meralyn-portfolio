import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-full h-[80vh] bg-gradient-to-b from-indigo-100/40 via-purple-50/20 to-transparent pointer-events-none -z-10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-3/4 h-[50vh] bg-gradient-to-t from-rose-50/30 via-indigo-50/20 to-transparent pointer-events-none -z-10 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4 mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center w-full">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 pt-4 sm:pt-10 lg:pt-0"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-8 justify-center lg:justify-start">
            <span className="w-10 h-px bg-indigo-300 block"></span>
            <p className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase bg-indigo-50/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-indigo-100/50 shadow-sm">
              Bislig City, Philippines
            </p>
            <span className="w-10 h-px bg-indigo-300 block"></span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-[3.5rem] sm:text-6xl lg:text-[5.5rem] xl:text-8xl font-black tracking-tight text-slate-900 leading-[0.95] mb-8 drop-shadow-sm"
            style={{ fontFamily: 'var(--font-name)' }}
          >
            Meralyn<br />
            <span className="text-indigo-600">Matundo</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            Elementary School Teacher & Licensed Professional Teacher dedicated to fostering a positive and engaging learning environment for every student.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a href="#portfolio" className="group">
              <Button size="lg" className="h-14 px-8 w-full sm:w-auto rounded-2xl text-base font-semibold shadow-xl shadow-indigo-600/20 hover:shadow-2xl hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all bg-indigo-600 hover:bg-indigo-700">
                View Portfolio
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="h-14 px-8 w-full sm:w-auto rounded-2xl text-base font-semibold border-2 border-slate-200 text-slate-700 hover:bg-slate-100/50 hover:border-slate-300 transition-colors bg-white/50 backdrop-blur-sm">
                Get In Touch
              </Button>
            </a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 flex items-center justify-center lg:justify-start gap-4 text-sm font-bold text-slate-400 tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for New Opportunities
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" as any }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end relative px-8 sm:px-16 lg:px-0"
        >
          {/* Enhanced Decorative Frame */}
          <div className="relative w-full max-w-md xl:max-w-lg aspect-[3/4] group">
            {/* Ambient shadow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-200 to-purple-100 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            {/* Solid offset frame */}
            <div className="absolute inset-0 bg-white rounded-[2rem] transform translate-x-4 translate-y-4 shadow-xl border border-slate-100 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            
            {/* Pattern/Texture overlay (subtle dots) */}
            <div className="absolute inset-0 translate-x-12 translate-y-12 opacity-50 flex" style={{ backgroundImage: "radial-gradient(#c7d2fe 2px, transparent 2px)", backgroundSize: "24px 24px" }}></div>
            
            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-slate-100 !aspect-[3/4]">
              <img 
                src="/meralyn-img.jpg" 
                alt="Meralyn Matundo" 
                className="w-full h-full object-cover origin-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
