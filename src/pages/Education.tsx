import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">
          Formations
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Parcours académique entre génie informatique, systèmes
          d’information et technologies émergentes.
        </p>
      </div>

      <ol className="space-y-4">
        {education.map((e) => (
          <li
            key={e.school + e.start}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold">
                  {e.degree}
                  {e.field ? ` — ${e.field}` : ""}
                </h3>
                <p className="text-xs text-slate-500">{e.school}</p>
              </div>
              <span className="text-xs text-slate-500">
                {e.start} {e.end ? `→ ${e.end}` : "→ en cours"}
              </span>
            </div>
            {e.location && (
              <p className="mt-1 text-xs text-slate-500">{e.location}</p>
            )}
            {e.highlights && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-700">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
