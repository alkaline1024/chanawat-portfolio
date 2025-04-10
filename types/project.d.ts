interface IProject {
  name: string;
  name_th: string;
  description: string;
  description_th: string;
  icon: string;
  type: string;
  type_th: string;
  role: string;
  for: "r202" | "importstar" | "devforward";
  tech: {
    frontend: string;
    backend: string;
    database: string;
    additionals?: string[];
  };
  image?: string;
}
