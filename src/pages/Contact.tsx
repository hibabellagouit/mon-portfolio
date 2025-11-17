import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = "bellagouithiba@gmail.com";
    const subject = encodeURIComponent(String(form.get("subject") || ""));
    const body = encodeURIComponent(String(form.get("message") || ""));
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="mx-auto max-w-lg space-y-6">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">
          Contact
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          N’hésite pas à me contacter pour une opportunité, une
          collaboration ou une question.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border bg-white p-5 shadow-sm"
      >
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">
            Sujet
          </label>
          <input
            name="subject"
            className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            placeholder="Objet de votre message"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            placeholder="Votre message…"
            required
          />
        </div>

        <button
          type="submit"
          className="w-fit rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800"
        >
          Envoyer
        </button>
      </form>

      <p className="text-xs text-slate-500">
        Ou directement :{" "}
        <a
          href="mailto:bellagouithiba@gmail.com"
          className="font-medium text-slate-900 underline"
        >
          bellagouithiba@gmail.com
        </a>
      </p>
    </section>
  );
}
