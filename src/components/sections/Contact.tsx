import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { portfolio } from "../data/portfolio";
import { Mail, Phone, Github, Linkedin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-14 bg-gradient-to-br from-indigo-50/40 via-purple-50/40 to-pink-50/40">
      <Container>
        <SectionTitle title="Contact" subtitle="Let's connect and build something great" />
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href={`mailto:${portfolio.links.email}`}
              className="group rounded-2xl border border-indigo-200 bg-white/80 p-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-4 text-white group-hover:scale-110 transition-transform">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-600">Email</p>
                  <p className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{portfolio.links.email}</p>
                </div>
              </div>
            </a>

            <div className="rounded-2xl border border-purple-200 bg-white/80 p-7 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-4 text-white">
                  <Phone className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-600">Phone</p>
                  <p className="text-xl font-bold text-gray-900">{portfolio.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Contact Card */}
          <div className="rounded-2xl border border-indigo-200 bg-white/80 p-8 shadow-xl">
            <div className="text-center mb-8">
              <MessageCircle className="h-14 w-14 mx-auto mb-4 text-indigo-600" />
              <p className="text-gray-700 text-xl leading-relaxed">
                Interested in working together or have a project in mind? Feel free to reach out!
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                href={`mailto:${portfolio.links.email}`}
              >
                <Send className="h-5 w-5" />
                Send Email
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-lg border-2 border-indigo-600 bg-white/80 px-7 py-3.5 text-base font-semibold text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200"
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-white/80 px-7 py-3.5 text-base font-semibold text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
                href={portfolio.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
