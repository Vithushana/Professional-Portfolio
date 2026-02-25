import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { portfolio } from "../data/portfolio";
import { ExternalLink, Github, Rocket } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-14 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-purple-50/30">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Showcasing my recent work and contributions"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {portfolio.projects.map((p, index) => (
            <div 
              key={p.title} 
              className="group rounded-2xl border border-indigo-100 bg-white/80 p-7 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover opacity-0-initial animate-fadeIn relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-bl-full opacity-50 -mr-16 -mt-16"></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                      <Rocket className="h-6 w-6 text-indigo-600" />
                      {p.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span 
                      key={t} 
                      className="rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 px-3.5 py-1.5 text-sm font-medium text-indigo-700 border border-indigo-200 hover:border-indigo-400 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 text-base font-medium pt-2 border-t border-gray-100">
                  {p.live && (
                    <a 
                      className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 hover:underline transition-all group/link" 
                      href={p.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {p.repo && (
                    <a 
                      className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 hover:underline transition-all group/link" 
                      href={p.repo} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
