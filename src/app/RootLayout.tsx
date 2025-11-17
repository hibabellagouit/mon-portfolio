import { NavLink, Outlet } from "react-router-dom";

const navLinkBase =
  "text-sm font-medium transition hover:text-primary";
const navLinkActive = "text-primary";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <NavLink to="/" className="text-lg font-semibold tracking-tight">
            Hiba
          </NavLink>
          <div className="flex items-center gap-4">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              Projets
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              Parcours
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              Formations
            </NavLink>
            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              Certifications
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} • Bellagouit Hiba
      </footer>
    </div>
  );
}
