import { profile } from "@/data/profile";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="grid gap-10 md:grid-cols-2 md:items-center">
      <div className="space-y-5">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="text-lg font-medium text-slate-700">
          {profile.role}
        </p>
        <p className="max-w-xl text-slate-600 leading-relaxed">
          {profile.about}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          {profile.skills.slice(0, 5).map((skill) => (
            <span
              key={skill}
              className="rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <Link
            to="/projects"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800"
          >
            Voir Projets
          </Link>
          <Link
            to="/contact"
            className="rounded-md border px-4 py-2 text-sm font-medium text-slate-800 bg-white hover:bg-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="relative mx-auto h-64 w-64 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 shadow-xl">
          <div className="absolute inset-4 rounded-3xl border border-white/20" />
          <div className="absolute bottom-4 left-4 space-y-1 text-sm text-slate-100">
            <p className="font-semibold">Marrakech, Maroc</p>
            <p className="text-xs text-slate-200/80">
              Technologies émergentes & ingénierie éducative
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
