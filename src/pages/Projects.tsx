import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">
          Projets
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Sélection de projets réalisés en stage et en formation.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex h-full flex-col rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              {p.period && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                  {p.period}
                </span>
              )}
            </div>

            {p.company && (
              <p className="mt-1 text-xs text-slate-500">
                {p.company} · {p.location}
              </p>
            )}

            {p.context && (
              <p className="mt-1 text-xs text-slate-500">
                {p.context}
              </p>
            )}

            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
              {p.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
