interface IProject {
  name: string;
  description: string;
  icon: string;
  type: string;
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
