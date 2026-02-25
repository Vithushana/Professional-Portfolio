import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { User, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-14 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30">
      <Container>
        <SectionTitle title="About" subtitle="Get to know me better" />
        
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <div className="rounded-2xl border border-indigo-200 bg-white/80 p-7 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
              <User className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Who I Am</h3>
            <p className="text-base text-gray-600">Full-stack developer passionate about IoT & AI solutions</p>
          </div>
          
          <div className="rounded-2xl border border-purple-200 bg-white/80 p-7 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">What I Do</h3>
            <p className="text-base text-gray-600">Build reactive dashboards, microservices & data pipelines</p>
          </div>
          
          <div className="rounded-2xl border border-pink-200 bg-white/80 p-7 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-red-500 text-white">
              <Zap className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">My Focus</h3>
            <p className="text-base text-gray-600">Device analytics, automation & clean UX design</p>
          </div>
        </div>

        <div className="rounded-2xl border border-indigo-200 bg-white/80 p-8 shadow-xl">
          <p className="mb-5 text-gray-700 leading-relaxed text-lg">
            I'm a full-stack developer specializing in IoT and AI-driven solutions, currently working as a Trainee Software Engineer at SenzMate IoT Intelligence. My focus is on building reactive dashboards, microservices, and data pipelines that deliver real-world impact.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-lg">
            At SenzMate, I've worked on <span className="font-semibold text-indigo-600">Polar</span> (device/kit management with QR and RCA features), <span className="font-semibold text-purple-600">Magma-Core</span> (Spring Boot microservices with codec validation), and <span className="font-semibold text-pink-600">Interplay</span> automation using Node-RED and Python. I enjoy tackling complex problems in device analytics and creating clean, user-friendly interfaces.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            I'm pursuing my BSc (Hons) in Information Technology at SLIIT (2022–2026) and constantly exploring new technologies in cloud computing, automation, and full-stack development. I'm passionate about building products that actually ship and make a difference.
          </p>
        </div>
      </Container>
    </section>
  );
}
