'use client';

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl">Portfolio</div>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-blue-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

