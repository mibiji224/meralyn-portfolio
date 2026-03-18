import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { X, FileText, FolderOpen, Maximize2, Minimize2, Eye } from "lucide-react";

interface ProjectFile {
  name: string;
  path: string;
}

interface Project {
  title: string;
  subject: string;
  description: string;
  tags: string[];
  files: ProjectFile[];
}

const projects: Project[] = [
  {
    title: "Kindergarten Daily Lesson Logs",
    subject: "Kindergarten",
    description:
      "Comprehensive daily lesson logs designed for kindergarten classes, aligned with the MATATAG curriculum framework.",
    tags: ["Kindergarten", "DLL", "MATATAG"],
    files: [
      { name: "Kindergarten DLL MATATAG Q3 W5", path: "/portfolio-src/kindergarten/BISLIG 2B-Kindergarten-DLL-MATATAG_Q3-W5_EDITED f.pdf" },
      { name: "Kindergarten DLL Q3 W6", path: "/portfolio-src/kindergarten/DLL_KINDERGARTEN_Q3_W6.pdf" },
      { name: "Kindergarten DLL Q3 W7", path: "/portfolio-src/kindergarten/DLL_KINDERGARTEN_Q3_W7.pdf" },
      { name: "Kinder DLL Q3 WK9 Final", path: "/portfolio-src/kindergarten/KINDER-DLL-Q3-WK-9 final.pdf" },
      { name: "Kinder DLL Q4 W1", path: "/portfolio-src/kindergarten/Kinder-DLL-Q4-W1.pdf" },
      { name: "Kinder DLL Q4 W2", path: "/portfolio-src/kindergarten/KINDER-DLL-Q4-W2.pdf" },
      { name: "Kinder DLL Q4 W3", path: "/portfolio-src/kindergarten/Kinder-DLL-Q4-W3.pdf" },
    ],
  },
  {
    title: "MATATAG Kinder PowerPoint Presentations",
    subject: "Kindergarten · All Subjects",
    description:
      "Interactive PowerPoint presentations covering all subjects for kindergarten learners under the MATATAG program.",
    tags: ["PowerPoint", "Kinder", "All Subjects"],
    files: [
      { name: "Kinder Q4 Week 1 Day 2", path: "/portfolio-src/ppts/Matatag.Kinder.Q4.Week1.Day2.Modified (1).pdf" },
      { name: "Kinder Q4 Week 1 Day 3", path: "/portfolio-src/ppts/Matatag.Kinder.Q4.Week1.Day3.Modified (1).pdf" },
      { name: "Kinder Q4 Week 3 Day 1", path: "/portfolio-src/ppts/Matatag.Kinder.Q4.Week3.Day1.pdf" },
      { name: "Q4 Week 1 Lesson Kinder MATATAG", path: "/portfolio-src/ppts/Q4-WEEK-1-LESSON-KINDER MATATAG.pdf" },
    ],
  },
  {
    title: "MAPEH Grade 6 Daily Lesson Logs",
    subject: "MAPEH · Grade 6",
    description:
      "Structured daily lesson logs for Grade 6 MAPEH covering Music, Arts, Physical Education, and Health.",
    tags: ["MAPEH", "Grade 6", "DLL"],
    files: [
      { name: "MAPEH DLL Q3 W5", path: "/portfolio-src/mapeh/DLL_MAPEH_Q3_W5.pdf" },
      { name: "MAPEH DLL Q3 W6", path: "/portfolio-src/mapeh/DLL_MAPEH_Q3_W6.pdf" },
      { name: "MAPEH DLL Q3 W7", path: "/portfolio-src/mapeh/DLL_MAPEH_Q3_W7.pdf" },
      { name: "G6 MAPEH DLL Q4 W1", path: "/portfolio-src/mapeh/DLL_G6-MAPEH_Q4_W1.pdf" },
      { name: "G6 MAPEH DLL Q4 W3", path: "/portfolio-src/mapeh/DLL_G6-MAPEH_Q4_W3.pdf" },
    ],
  },
  {
    title: "Araling Panlipunan Lesson Materials",
    subject: "Araling Panlipunan",
    description:
      "Teaching materials and resources for Araling Panlipunan (Social Studies), contextualised for local learners.",
    tags: ["AP", "Social Studies", "Resources"],
    files: [
      { name: "AP 5 Q4 W1 DLL", path: "/portfolio-src/araling-panlipunan/AP 5 Q4 W1 DLL.pdf" },
      { name: "G5 AP DLL Q3 W5-9", path: "/portfolio-src/araling-panlipunan/G5_AP_DLL_Q3_W5-9.pdf" },
      { name: "G5 AP DLL Q3 W5", path: "/portfolio-src/araling-panlipunan/G5_AP_DLL_Q3_W5.pdf" },
      { name: "G5 AP DLL Q3 W6", path: "/portfolio-src/araling-panlipunan/G5_AP_DLL_Q3_W6.pdf" },
      { name: "G5 AP DLL Q3 W7", path: "/portfolio-src/araling-panlipunan/G5_AP_DLL_Q3_W7.pdf" },
      { name: "G5 AP DLL Q3 W8", path: "/portfolio-src/araling-panlipunan/G5_AP_DLL_Q3_W8.pdf" },
      { name: "G5 AP DLL Q4 W2", path: "/portfolio-src/araling-panlipunan/G5_AP_DLL_Q4_W2.pdf" },
      { name: "G5 AP DLL Q4 W3", path: "/portfolio-src/araling-panlipunan/G5_AP_DLL_Q4_W3.pdf" },
    ],
  },
  {
    title: "Supplementary Independent Activities",
    subject: "Kinder · Literacy",
    description:
      "Supplementary learning activities for independent practice, focused on early literacy and numeracy skills.",
    tags: ["Literacy", "Independent", "Kinder"],
    files: [
      { name: "Q3 Week 1 Day 4 Activity", path: "/portfolio-src/supplementary-activities/Q3 Week 1. Supplementary Activity. Day 4.pdf" },
      { name: "Q3 Week 3 Day 2 Activity", path: "/portfolio-src/supplementary-activities/Q3 Week 3 Kinder Supplementary Activity. Day 2.pdf" },
      { name: "Q3 Week 9 Day 2 Activities", path: "/portfolio-src/supplementary-activities/Q3. Week 9. Supplementary Activities. Day 2.pdf" },
      { name: "Q3 Week 9 Day 3 Activities", path: "/portfolio-src/supplementary-activities/Q3. Week 9. Supplementary Activities. Day 3.pdf" },
      { name: "Q4 Week 1 Day 3 Activity", path: "/portfolio-src/supplementary-activities/Q4 Week 1. Supplementary Activity. Day 3 (1).pdf" },
      { name: "Q4 Week 3 Day 1 Activities", path: "/portfolio-src/supplementary-activities/Q4. Week 3. Supplementary Activities . Day 1.pdf" },
    ],
  },
  {
    title: "School-Based Lesson Log Collection",
    subject: "F.M. Clar Elementary",
    description:
      "A curated collection of lesson logs used at F.M. Clar Elementary School across multiple grade levels.",
    tags: ["School-Based", "Collection", "Multi-Grade"],
    files: [
      { name: "Kindergarten DLL Q3 W5", path: "/portfolio-src/kindergarten/BISLIG 2B-Kindergarten-DLL-MATATAG_Q3-W5_EDITED f.pdf" },
      { name: "MAPEH DLL Q3 W5", path: "/portfolio-src/mapeh/DLL_MAPEH_Q3_W5.pdf" },
      { name: "G5 AP DLL Q3 W5", path: "/portfolio-src/araling-panlipunan/G5_AP_DLL_Q3_W5.pdf" },
      { name: "Kinder DLL Q4 W1", path: "/portfolio-src/kindergarten/Kinder-DLL-Q4-W1.pdf" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as any },
  },
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewFile, setPreviewFile] = useState<ProjectFile | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setPreviewFile(null);
    setIsFullscreen(false);
  };

  const handleClose = useCallback(() => {
    setSelectedProject(null);
    setPreviewFile(null);
    setIsFullscreen(false);
  }, []);

  const handleFileClick = (file: ProjectFile) => {
    setPreviewFile(file);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          handleClose();
        }
      }
    };
    if (selectedProject) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject, isFullscreen, handleClose]);

  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-y border-slate-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="section-heading text-3xl sm:text-4xl mb-6 text-center text-slate-900"
        >
          Teaching Portfolio
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-slate-500 text-center max-w-2xl mx-auto mb-10 sm:mb-16 text-base sm:text-lg font-medium"
        >
          A collection of teaching materials, lesson plans, and educational
          resources I have developed throughout my career.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onClick={() => handleCardClick(p)}
              className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group cursor-pointer"
            >
              <p className="text-xs tracking-widest text-indigo-600 font-bold mb-4 uppercase">
                {p.subject}
              </p>
              <h3 className="font-display text-xl text-slate-900 mb-4 leading-tight font-bold group-hover:text-indigo-700 transition-colors">
                {p.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6 flex-grow font-medium text-sm sm:text-base">
                {p.description}
              </p>
              <div className="flex items-center justify-between gap-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-slate-100 text-slate-600 hover:bg-slate-200"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <button className="shrink-0 flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-xl transition-colors duration-300">
                  <Eye className="w-4 h-4" />
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Split View Panel */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Fullscreen Preview */}
            <AnimatePresence>
              {isFullscreen && previewFile && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="fixed inset-0 z-[60] bg-slate-950 flex flex-col"
                  onContextMenu={preventContextMenu}
                >
                  <div className="flex items-center justify-between px-6 py-3 bg-slate-900">
                    <div className="flex items-center gap-3 min-w-0">
                      <FileText className="w-5 h-5 text-slate-400 shrink-0" />
                      <span className="text-sm font-semibold text-slate-200 truncate">
                        {previewFile.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleFullscreen}
                        className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                        aria-label="Exit fullscreen"
                      >
                        <Minimize2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleClose}
                        className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                        aria-label="Close"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <iframe
                      src={previewFile.path}
                      className="w-full h-full border-0"
                      title={previewFile.name}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Split Panel Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative ml-auto w-full max-w-5xl h-full flex shadow-2xl"
            >
              {/* File List Sidebar — Desktop */}
              <div className="w-80 min-w-[20rem] bg-white border-r border-slate-200 flex flex-col h-full max-md:hidden">
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs tracking-widest text-indigo-600 font-bold uppercase mb-1">
                        {selectedProject.subject}
                      </p>
                      <h3 className="font-display text-lg text-slate-900 font-bold leading-tight">
                        {selectedProject.title}
                      </h3>
                    </div>
                    <button
                      onClick={handleClose}
                      className="shrink-0 p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                      aria-label="Close panel"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {selectedProject.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="bg-slate-100 text-slate-500 text-xs"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
                    Files ({selectedProject.files.length})
                  </p>
                  <div className="space-y-1">
                    {selectedProject.files.map((file, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleFileClick(file)}
                        className={`w-full text-left px-3 py-3 rounded-xl flex items-start gap-3 transition-all duration-150 ${
                          previewFile?.path === file.path
                            ? "bg-indigo-50 border border-indigo-200"
                            : "hover:bg-slate-50 border border-transparent"
                        }`}
                      >
                        <FileText className={`w-4 h-4 mt-0.5 shrink-0 ${previewFile?.path === file.path ? "text-indigo-500" : "text-red-500"}`} />
                        <div className="min-w-0 flex-1">
                          <p
                            className={`text-sm font-semibold leading-snug ${
                              previewFile?.path === file.path
                                ? "text-indigo-700"
                                : "text-slate-700"
                            }`}
                          >
                            {file.name}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5 uppercase font-medium">
                            PDF
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col h-full w-full bg-white">
                {!previewFile ? (
                  <>
                    <div className="p-5 border-b border-slate-100">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-xs tracking-widest text-indigo-600 font-bold uppercase mb-1">
                            {selectedProject.subject}
                          </p>
                          <h3 className="font-display text-lg text-slate-900 font-bold leading-tight">
                            {selectedProject.title}
                          </h3>
                        </div>
                        <button
                          onClick={handleClose}
                          className="shrink-0 p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                          aria-label="Close panel"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
                        Files ({selectedProject.files.length})
                      </p>
                      <div className="space-y-1">
                        {selectedProject.files.map((file, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleFileClick(file)}
                            className="w-full text-left px-3 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-50 border border-transparent transition-all"
                          >
                            <FileText className="w-4 h-4 text-red-500 shrink-0" />
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-semibold text-slate-700 leading-snug">
                                {file.name}
                              </p>
                              <p className="text-xs text-slate-400 mt-0.5 uppercase font-medium">
                                PDF
                              </p>
                            </div>
                            <Eye className="w-4 h-4 text-slate-300" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col h-full" onContextMenu={preventContextMenu}>
                    <div className="px-4 py-3 bg-white border-b border-slate-200 flex items-center justify-between">
                      <button
                        onClick={() => setPreviewFile(null)}
                        className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                      >
                        Back to files
                      </button>
                      <span className="text-sm font-semibold text-slate-700 truncate mx-3 flex-1 text-center">
                        {previewFile.name}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={toggleFullscreen}
                          className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors"
                          aria-label="Fullscreen"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={handleClose}
                          className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                          aria-label="Close"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <iframe
                        src={previewFile.path}
                        className="w-full h-full border-0"
                        title={previewFile.name}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Desktop Preview Pane */}
              <div className="flex-1 bg-slate-50 flex flex-col h-full max-md:hidden" onContextMenu={preventContextMenu}>
                {previewFile ? (
                  <>
                    <div className="px-6 py-4 bg-white border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2 min-w-0">
                        <FileText className="w-4 h-4 text-red-500 shrink-0" />
                        <span className="text-sm font-semibold text-slate-700 truncate">
                          {previewFile.name}
                        </span>
                      </div>
                      <button
                        onClick={toggleFullscreen}
                        className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors"
                        aria-label="Expand to fullscreen"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        Fullscreen
                      </button>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <iframe
                        src={previewFile.path}
                        className="w-full h-full border-0"
                        title={previewFile.name}
                      />
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
                    <FolderOpen className="w-12 h-12 mb-4 text-slate-300" />
                    <p className="text-sm font-semibold">Select a file to preview</p>
                    <p className="text-xs mt-1 text-slate-400">
                      Choose a file from the list to view it here
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
