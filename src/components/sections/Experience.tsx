import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { portfolio } from "../data/portfolio";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-14 bg-gradient-to-br from-blue-50/40 via-indigo-50/40 to-purple-50/40">
      <Container>
        <SectionTitle title="Experience" subtitle="My professional journey" />
        
        <div className="space-y-6">
          {portfolio.experience.map((exp, index) => (
            <div 
              key={index} 
              className="opacity-0-initial animate-fadeIn rounded-2xl border border-indigo-200 bg-white/80 p-7 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-3.5 text-white">
                  <Briefcase className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-xl font-semibold text-indigo-600">{exp.company}</p>
                  <div className="mt-2 flex items-center gap-2 text-base text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span>{exp.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-base text-gray-700">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          <div className="opacity-0-initial animate-fadeIn rounded-2xl border border-indigo-200 bg-white/80 p-7 shadow-lg" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-3.5 text-white">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                <p className="mt-1 text-xl font-semibold text-purple-600">{portfolio.education.degree}</p>
                <p className="text-gray-700 text-base">{portfolio.education.institution}</p>
                <div className="mt-2 flex items-center gap-2 text-base text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>{portfolio.education.period}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
