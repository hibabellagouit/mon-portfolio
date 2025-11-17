export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Hibernate & JPA",
    issuer: "MLIA EDU — Toubkal IT",
    issueDate: "2025-10",
    credentialUrl: "https://mliaedu.toubkalit.com/",
    skills: ["Java", "ORM", "Bases de données", "JPA", "Hibernate"],
    tags: ["Java", "Back-end", "ORM"],
    image: "", // ex: "/certs/hibernate-jpa.webp"
    imageAlt: "Badge Hibernate & JPA",
    status: "active",
  },
  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIA EDU — Toubkal IT",
    issueDate: "2025-01",
    credentialUrl: "https://mliaedu.toubkalit.com/",
    skills: ["Java", "POO", "Programmation avancée"],
    tags: ["Java", "Programmation"],
    image: "", // ex: "/certs/java-advanced.webp"
    imageAlt: "Badge Programmation Java",
    status: "active",
  },
];
