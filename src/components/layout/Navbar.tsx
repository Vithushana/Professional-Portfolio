import { useState } from "react";
import Container from "../ui/Container";
import { portfolio } from "../data/portfolio";
import { FileText, Menu, X } from "lucide-react";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100 bg-white/90 backdrop-blur-md shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="group flex items-center gap-3">
            <img 
              src="/profile.jpg" 
              alt={portfolio.name}
              className="h-11 w-11 rounded-lg object-cover shadow-md ring-2 ring-indigo-200 group-hover:scale-105 group-hover:ring-indigo-400 transition-all"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold shadow-md text-lg';
                fallback.textContent = portfolio.name.split(' ').map(n => n[0]).join('');
                target.parentElement?.appendChild(fallback);
              }}
            />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Vithushana
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors relative group"
              >
                {n.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={portfolio.links.resume}
              download="Vithushana_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-base font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <FileText className="h-5 w-5" />
              <span className="hidden sm:inline">Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-indigo-50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-indigo-100">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 rounded-lg transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}