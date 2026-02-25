import { Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function FloatingSocial() {
  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-3">
      <a
        href={portfolio.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
        title="GitHub"
      >
        <Github className="h-5 w-5" />
      </a>
      <a
        href={portfolio.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
        title="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      <a
        href={`mailto:${portfolio.links.email}`}
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
        title="Email"
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
}
