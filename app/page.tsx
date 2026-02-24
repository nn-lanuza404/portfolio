// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div>  {/* wrapper helps with potential future full-page effects */}
      {/* Hero Section */}
      <section id="hero" className="relative px-6 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col items-center text-center min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Nino Nestor</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10">
            Front-end Developer | Creating clean, fast, and user-friendly web experiences
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="#skills"
              scroll={false}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              View Skills
            </Link>

            <Link
              href="#contact"
              scroll={false}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 text-2xl">
            <a href="https://github.com/Chocolatenexttosoap" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-400 transition-colors">
              {/* GitHub SVG */}
            </a>
            <a href="mailto:certifiedlanuza@gmail.com" aria-label="Email" className="hover:text-red-500 transition-colors">
              {/* Email SVG */}
            </a>
          </div>
        </div>
      </section>

      {/* Skills / Tech Stack Section */}
      <section id="skills" className="py-20 px-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What I Work With</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Git"].map((tech) => (
              <div key={tech} className="bg-gray-100 dark:bg-gray-800 py-4 px-6 rounded-lg font-medium shadow-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional: Add more sections here later (Projects, About, Contact form, etc.) */}
      {/* Example placeholder for Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg mb-6">Email me at certifiedlanuza@gmail.com or find me on GitHub.</p>
          {/* You can add a real form later */}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>© {new Date().getFullYear()} Nino Nestor. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}