import Container from "../ui/Container";
import { portfolio } from "../data/portfolio";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-100 bg-gradient-to-br from-slate-50/50 via-indigo-50/30 to-purple-50/30 py-12">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-gray-600 font-medium flex items-center gap-2 text-base">
              © {new Date().getFullYear()} {portfolio.name}. 
              <span className="flex items-center gap-1 text-base">
                Made with <Heart className="h-5 w-5 text-red-500 fill-red-500" /> and code
              </span>
            </p>
            <p className="text-base text-gray-500 mt-1">Building the future, one line at a time.</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white/80 px-5 py-2.5 text-base font-medium text-gray-700 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all" 
              href={portfolio.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a 
              className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white/80 px-5 py-2.5 text-base font-medium text-gray-700 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all" 
              href={portfolio.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a 
              className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white/80 px-5 py-2.5 text-base font-medium text-gray-700 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all" 
              href={`mailto:${portfolio.links.email}`}
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}