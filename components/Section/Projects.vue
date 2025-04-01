<script setup lang="ts">
const { locale } = useI18n();
const projects: IProject[] = [
  {
    name: "Auth & App Portal Management",
    description:
      "User auth and portal management, utilizing AWS Cognito with support for OAuth 2.0 and SAML standards.",
    icon: "material-symbols:captive-portal-rounded",
    type: "Web Application",
    role: "Full Stack Developer",
    for: "devforward",
    tech: {
      frontend: "Nuxt.js",
      backend: "Fastify.js",
      database: "AWS DynamoDB",
      additionals: ["AWS Cognito", "AWS Lambda", "AWS S3"],
    },
  },
  {
    name: "WalkWing Application",
    description:
      "Developed a mobile app with Flutter and web app with Svelte for participant activities and back office. Integrated gachapon-style reward system.",
    icon: "ic:round-phonelink",
    type: "Mobile & Web Application",
    role: "Full Stack Developer, UX/UI Designer",
    for: "importstar",
    tech: {
      frontend: "Flutter, Svelte",
      backend: "FastAPI",
      database: "MongoDB",
      additionals: ["Google Fit"],
    },
  },
  {
    name: "Custom Suit Order Management",
    description: "Developed a system for managing custom suit orders, creating invoice and setting notifications.",
    type: "Web Application",
    icon: "ri:shirt-fill",
    role: "Full Stack Developer",
    for: "importstar",
    tech: {
      frontend: "Flask",
      backend: "Flask",
      database: "MongoDB",
      additionals: ["DaisyUI"],
    },
  },
  {
    name: "Waterworks Department Application",
    description: "Enhanced UI flow and integrated new FastAPI-based REST API for better revenue-related functionality.",
    type: "Mobile Application (Flutter)",
    icon: "ic:round-water-drop",
    role: "Frontend Developer",
    for: "importstar",
    tech: {
      frontend: "Flutter",
      backend: "FastAPI",
      database: "MongoDB",
      additionals: [],
    },
  },
  {
    name: "Importing Document from File System",
    description:
      "Built data ingestion flow for Excel/XML files using Pandas. Performed data validation and integration into the system.",
    icon: "icon-park-solid:excel",
    type: "Web Application",
    role: "Full Stack Developer, Data Engineer",
    for: "importstar",
    tech: {
      frontend: "Flask",
      backend: "Flask",
      database: "MongoDB",
      additionals: ["Pandas"],
    },
  },
  {
    name: "Warehouse Management System",
    description:
      "Developed a backoffice system supporting multi-tenancy with different organizations and roles. Optimized data query performance for over 100,000 records.",
    icon: "ic:round-warehouse",
    type: "Web Application",
    role: "Full Stack Developer",
    for: "importstar",
    tech: {
      frontend: "Flask",
      backend: "Flask",
      database: "MongoDB",
      additionals: ["Data Aggregation"],
    },
  },
  {
    name: "Multi-tenancy Certificate System",
    description:
      "Developed web app for DiiS, PSU, managing events and digital certificates supporting multi-tenancy. Included email automation and job queue handling with Redis.",
    icon: "mdi:certificate-outline",
    type: "Web Application",
    role: "Full Stack Developer",
    for: "r202",
    tech: {
      frontend: "Flask",
      backend: "Flask",
      database: "MongoDB",
      additionals: ["Redis", "SMTP", "Docker"],
    },
  },
  {
    name: "CoE Project System, PSU",
    description:
      "Developed web app for Computer Engineering students at Prince of Songkla University to submit their projects, submission and report with grading system for lecturers.",
    icon: "ic:round-assignment",
    type: "Web Application",
    role: "Full Stack Developer",
    for: "r202",
    tech: {
      frontend: "Flask",
      backend: "Flask",
      database: "MongoDB",
      additionals: ["Fomantic-UI"],
    },
  },
];
</script>

<template>
  <div class="space-y-2">
    <h1 class="font-medium">Projects</h1>
    <div class="mt-8 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <CardProject
        v-for="project in projects"
        :project
      />
    </div>
  </div>
</template>
