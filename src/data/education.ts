export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "ENS Marrakech",
    degree: "Diplôme Universitaire de Technologie (DUT)",
    field: "Génie Informatique",
    location: "Marrakech",
    start: "2021",
    end: "2023",
    highlights: [
      "Bases solides en programmation, bases de données et génie logiciel",
      "Projet de fin d’études : application Ujuke (lecteur de musique)",
    ],
  },
  {
    school: "École Supérieure de Technologie Salé",
    degree: "Licence Professionnelle",
    field: "Systèmes d’Information et Big Data",
    location: "Salé",
    start: "2023",
    end: "2024",
    highlights: [
      "Approfondissement des systèmes d’information et des données",
      "Projet Sklep : application de vente en ligne",
    ],
  },
  {
    school:
      "Master Sciences de Didactique & Ingénierie Éducative — Technologies Émergentes",
    degree: "Master (2ᵉ année)",
    field: "Technologies Émergentes",
    location: "Marrakech",
    start: "2024",
    highlights: [
      "Intégration des technologies émergentes dans l’éducation",
      "Conception de dispositifs pédagogiques numériques",
    ],
  },
];
