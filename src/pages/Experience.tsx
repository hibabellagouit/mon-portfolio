export default function Experience() {
  const items = [
    {
      title: "Étudiante en Master — Technologies Émergentes",
      org: "Master Sciences de Didactique & Ingénierie Éducative",
      location: "Marrakech",
      period: "2024 — Aujourd’hui",
      details:
        "Approche croisée entre pédagogie, ingénierie éducative et technologies émergentes.",
    },
    {
      title: "Stage — Application Sklep (vente en ligne)",
      org: "Cité d’Innovation de Marrakech",
      location: "Marrakech",
      period: "2023 — 2024",
      details:
        "Développement d’une application de vente en ligne : interfaces React, expérience utilisateur, gestion des données.",
    },
    {
      title: "Stage — Application Ujuke (lecteur de musique)",
      org: "Entreprise à Marrakech",
      location: "Marrakech",
      period: "2022 — 2023",
      details:
        "Conception et développement d’un lecteur de musique en Java avec modélisation UML et Merise.",
    },
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">
          Parcours
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Un parcours entre informatique, données et ingénierie éducative.
        </p>
      </div>

      <ol className="space-y-4">
        {items.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <span className="text-xs text-slate-500">{item.period}</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {item.org} · {item.location}
            </p>
            <p className="mt-3 text-sm text-slate-700">{item.details}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
