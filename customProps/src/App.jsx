import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler from "./components/ThemeToogler"
  const isDark = true;
const NavBar = () => {

  const sections = [
    {
      id: "basic",
      label: "Basic Props",
      icon: "📦",
    },
    {
      id: "props",
      label: "Props",
      icon: "🧩",
    },
    {
      id: "children",
      label: "Children Props",
      icon: "👶",
    },
    {
      id: "complex",
      label: "Complex Props",
      icon: "⚙️",
    },
    {
      id: "theme",
      label: "Theme Props",
      icon: "🎨",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-md py-3 flex flex-wrap gap-2 justify-center">
      <div>
        <div>
          {sections.map(({ id, label, icon }) => (
            <button
              className="bg-blue-600 px-4 py-2 rounded-lg font-medium cursor-pointer text-white mr-3 mt-2 hover:bg-blue-800"
              key={id}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const AppContent = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">React Props Explained</h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            A comprehensive guide to understanding props in React
          </p>
          <div
            className={`mt-4 inline-block px-6 py-2 rounded-full ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md`}
          >
            <span className="font-semibold">
              Built with Bun + Vite + React + Tailwind CSS
            </span>
          </div>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>

          <div id="basic" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ComplexProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>
        <footer
          className={`mt-12 text-center pb-8 transition-colors ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="text-sm">
            Made with ❤️ using Bun, Vite, React, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
};
function App() {
  return (
    <>
      <AppContent />
    </>
  );
}

export default App;
