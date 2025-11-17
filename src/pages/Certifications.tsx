import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";

export default function CertificationsPage() {
  const [query, setQuery] = useState("");

  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [query]
  );

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Certifications
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Certifications techniques axées sur Java et les technologies
            back-end.
          </p>
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filtrer (ex: Java, Hibernate…) "
          className="w-full max-w-xs rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {list.map((c) => (
          <article
            key={c.title + c.issueDate}
            className="flex gap-4 rounded-xl border bg-white p-4 shadow-sm"
          >
            {c.image && (
              <img
                src={c.image}
                alt={c.imageAlt ?? c.title}
                className="h-16 w-16 rounded-md object-contain"
              />
            )}
            <div className="space-y-1">
              <h3 className="text-sm font-semibold">{c.title}</h3>
              <p className="text-xs text-slate-500">
                {c.issuer} •{" "}
                {c.issueDate.replace("-", "/")}{" "}
                {c.status === "active" && (
                  <span className="ml-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    Active
                  </span>
                )}
              </p>
              {c.skills && (
                <p className="mt-1 text-xs text-slate-600">
                  Compétences : {c.skills.join(", ")}
                </p>
              )}
              {c.credentialUrl && (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block pt-2 text-xs font-medium text-slate-900 underline"
                >
                  Voir le certificat
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
