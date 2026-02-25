import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { portfolio } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-14 bg-gradient-to-b from-purple-50/40 via-pink-50/30 to-slate-50">
      <Container>
        <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />
        
        {/* Tech Stack Icons */}
        <div className="mb-8 flex justify-center gap-5 text-5xl opacity-0-initial animate-fadeIn">
          <span title="Java">☕</span>
          <span title="React">⚛️</span>
          <span title="Node.js">🟢</span>
          <span title="Python">🐍</span>
          <span title="Cloud">☁️</span>
          <span title="Database">📦</span>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {portfolio.skills.map((s, index) => (
            <span
              key={s}
              className="group opacity-0-initial animate-scaleIn rounded-full border-2 border-indigo-200 bg-white/80 px-6 py-3 text-base font-semibold text-gray-800 hover:scale-110 hover:shadow-xl hover:border-indigo-400 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {s}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}