import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Trainings", href: "#trainings" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-slate-100 flex items-center px-6 lg:px-12">
      <a href="#" className="text-xl text-slate-900 tracking-wide" style={{ fontFamily: "var(--font-name)" }}>
        Meralyn <span className="text-indigo-600">Matundo</span>
      </a>

      <div className="ml-auto hidden md:flex items-center gap-1">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-xs uppercase tracking-widest text-slate-500 hover:text-indigo-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            {l.label}
          </a>
        ))}
        <Button size="sm" className="ml-3">
          Hire Me
        </Button>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="ml-auto md:hidden text-slate-600 p-2 hover:bg-slate-50 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-100 md:hidden flex flex-col py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-6 py-3 text-xs uppercase tracking-widest text-slate-500 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
