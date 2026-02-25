import Container from "../../components/ui/Container";
import { portfolio } from "../data/portfolio";
import { MapPin, Code, Mail, Github, Linkedin, FileText, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="opacity-0-initial animate-slideInLeft space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 shadow-md border border-indigo-100">
              <MapPin className="h-5 w-5 text-indigo-600" />
              <span className="text-base font-medium text-gray-700">{portfolio.location}</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {portfolio.name}
              </span>
            </h1>
            
            <div className="flex items-center gap-2 text-xl font-medium text-gray-700">
              <Code className="h-6 w-6 text-indigo-600" />
              <p>{portfolio.role}</p>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-xl">{portfolio.summary}</p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-xl bg-white/80 p-5 shadow-md border border-indigo-100">
                <div className="text-3xl font-bold text-indigo-600">💻</div>
                <div className="mt-2 text-base font-semibold text-gray-700">Full Stack</div>
                <div className="text-sm text-gray-500">Development</div>
              </div>
              <div className="rounded-xl bg-white/80 p-5 shadow-md border border-purple-100">
                <div className="text-3xl font-bold text-purple-600">☁️</div>
                <div className="mt-2 text-base font-semibold text-gray-700">Cloud & IoT</div>
                <div className="text-sm text-gray-500">Solutions</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200"
              >
                View Projects
                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`mailto:${portfolio.links.email}`}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-indigo-300 bg-white/80 px-7 py-3.5 text-base font-semibold text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 opacity-0-initial animate-slideInRight">
            <div className="flex justify-center animate-float">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-2xl opacity-50"></div>
                {portfolio.profileImage ? (
                  <img 
                    src={portfolio.profileImage} 
                    alt={portfolio.name}
                    className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl ring-4 ring-indigo-100"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const initials = portfolio.name.split(' ').map(n => n[0]).join('');
                      const parent = target.parentElement;
                      if (parent) {
                        const div = document.createElement('div');
                        div.className = 'relative w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-white shadow-2xl ring-4 ring-indigo-100 flex items-center justify-center text-white text-6xl md:text-7xl font-bold';
                        div.textContent = initials;
                        parent.appendChild(div);
                      }
                    }}
                  />
                ) : (
                  <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-white shadow-2xl ring-4 ring-indigo-100 flex items-center justify-center text-white text-6xl md:text-7xl font-bold">
                    {portfolio.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
            </div>
            
            <div className="rounded-2xl border border-indigo-200 bg-white/80 backdrop-blur-sm p-6 shadow-xl">
              <p className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                Quick Links
              </p>
              <div className="grid gap-3">
                <a 
                  className="group rounded-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 px-4 py-3 text-sm font-medium hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-200 flex items-center justify-between" 
                  href={portfolio.links.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  className="group rounded-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 px-4 py-3 text-sm font-medium hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-200 flex items-center justify-between" 
                  href={portfolio.links.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  className="group rounded-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 px-4 py-3 text-sm font-medium hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-200 flex items-center justify-between" 
                  href={portfolio.links.resume} 
                  download="Vithushana_Resume.pdf"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Resume PDF
                  </span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}