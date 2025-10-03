<script setup lang="ts">
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { useMediaQuery } from "@vueuse/core";

const { t } = useI18n();

// Icon source: https://icones.js.org/

const mySkill = {
  advance: [
    {
      icon: "logos:html-5",
      shortName: "HTML",
      fullName: "HyperText Markup Language",
      description: "Markup language for creating web pages",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: "logos:css-3",
      shortName: "CSS",
      fullName: "Cascading Style Sheets",
      description: "Style sheet language for designing web pages",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: "logos:typescript-icon",
      shortName: "TypeScript",
      fullName: "TypeScript",
      description: "Typed superset of JavaScript that compiles to plain JavaScript",
      url: "https://www.typescriptlang.org/",
    },
    {
      icon: "logos:python",
      shortName: "Python",
      fullName: "Python",
      description: "High-level, interpreted programming language",
      url: "https://www.python.org/",
    },
    {
      icon: "logos:flask",
      shortName: "Flask",
      fullName: "Flask",
      description: "Lightweight Python web framework",
      url: "https://flask.palletsprojects.com/",
    },
    {
      icon: "logos:mongodb-icon",
      shortName: "MongoDB",
      fullName: "MongoDB",
      description: "NoSQL document database",
      url: "https://www.mongodb.com/",
    },
    {
      icon: "logos:nuxt-icon",
      shortName: "Nuxt",
      fullName: "Nuxt.js",
      description: "Vue.js framework for server-rendered or static web applications",
      url: "https://nuxtjs.org/",
    },
    {
      icon: "logos:react",
      shortName: "React",
      fullName: "React & React Native",
      description: "JavaScript library for building user interfaces",
      url: "https://reactjs.org/",
    },
    {
      icon: "logos:flutter",
      shortName: "Flutter",
      fullName: "Flutter",
      description: "UI toolkit for building natively compiled applications for mobile, web, and desktop",
      url: "https://flutter.dev/",
    },
    {
      icon: "logos:fastapi-icon",
      shortName: "FastAPI",
      fullName: "FastAPI",
      description: "Modern, fast web framework for building APIs with Python",
      url: "https://fastapi.tiangolo.com/",
    },
    {
      icon: "logos:semantic-ui",
      shortName: "Fomantic",
      fullName: "Fomantic-UI",
      description: "A modern front-end framework based on Semantic UI for building responsive layouts",
      url: "https://fomantic-ui.com/",
    },
    {
      icon: "logos:tailwindcss-icon",
      shortName: "Tailwind",
      fullName: "Tailwind CSS",
      description: "Utility-first CSS framework",
      url: "https://tailwindcss.com/",
    },
    {
      icon: "logos:linux-tux",
      shortName: "Linux",
      fullName: "Linux",
      description:
        "A family of open-source Unix-like operating systems widely used for servers, desktops, and embedded devices.",
      url: "https://www.linux.org/",
    },
  ],
  intermediate: [
    {
      icon: "logos:c-plusplus",
      shortName: "C++",
      fullName: "C++",
      description: "General-purpose programming language",
      url: "https://isocpp.org/",
    },
    {
      icon: "logos:pandas-icon",
      shortName: "Pandas",
      fullName: "Pandas",
      description: "Data analysis library for Python",
      url: "https://pandas.pydata.org/",
    },
    {
      icon: "logos:fastify-icon",
      shortName: "Fastify",
      fullName: "Fastify.js",
      description: "Fast and low overhead web framework for Node.js",
      url: "https://www.fastify.io/",
    },
    {
      icon: "logos:svelte-icon",
      shortName: "Svelte",
      fullName: "Svelte/SvelteKit",
      description: "Modern framework for building fast and reactive web interfaces",
      url: "https://svelte.dev/",
    },
    {
      icon: "logos:redis",
      shortName: "Redis",
      fullName: "Redis",
      description: "In-memory data structure store used as a database, cache, and message broker",
      url: "https://redis.io/",
    },
    {
      icon: "logos:docker-icon",
      shortName: "Docker",
      fullName: "Docker",
      description: "Platform for developing, shipping, and running applications in containers",
      url: "https://www.docker.com/",
    },
    {
      icon: "logos:postgresql",
      shortName: "PostgreSQL",
      fullName: "PostgreSQL",
      description: "Open-source relational database management system",
      url: "https://www.postgresql.org/",
    },
  ],
  basic: [
    {
      icon: "logos:java",
      shortName: "Java",
      fullName: "Java",
      description: "High-level, class-based, object-oriented programming language",
      url: "https://www.java.com/",
    },
    {
      icon: "logos:gopher",
      shortName: "Go",
      fullName: "Golang",
      description: "Open-source programming language designed for building efficient software",
      url: "https://golang.org/",
    },
    {
      icon: "logos:django-icon",
      shortName: "Django",
      fullName: "Django",
      description: "High-level Python web framework that encourages rapid development",
      url: "https://www.djangoproject.com/",
    },
    {
      icon: "logos:visual-studio",
      shortName: "Visual C++",
      fullName: "Visual C++",
      description: "Microsoft's integrated development environment for C++",
      url: "https://visualstudio.microsoft.com/vs/features/cplusplus/",
    },
    {
      icon: "logos:mysql",
      shortName: "MySQL",
      fullName: "MySQL",
      description: "Open-source relational database management system",
      url: "https://www.mysql.com/",
    },
    {
      icon: "logos:mariadb-icon",
      shortName: "MariaDB",
      fullName: "MariaDB",
      description: "An open-source relational database management system, forked from MySQL.",
      url: "https://mariadb.org/",
    },
    {
      icon: "logos:apache",
      shortName: "Apache",
      fullName: "Apache HTTP Server",
      description: "Open-source HTTP server software.",
      url: "https://httpd.apache.org/",
    },
    {
      icon: "logos:vim",
      shortName: "Vim",
      fullName: "Vim",
      description: "Highly configurable text editor for efficient text editing.",
      url: "https://www.vim.org/",
    },
    {
      icon: "logos:ansible",
      shortName: "Ansible",
      fullName: "Ansible",
      description: "Open-source IT automation and configuration management tool",
      url: "https://www.ansible.com/",
    },
    {
      icon: "logos:microsoft-azure",
      shortName: "Azure",
      fullName: "Microsoft Azure",
      description: "Cloud computing platform by Microsoft.",
      url: "https://azure.microsoft.com/",
    },
    {
      icon: "logos:google-cloud",
      shortName: "GCP",
      fullName: "Google Cloud Platform",
      description: "Suite of cloud computing services by Google",
      url: "https://cloud.google.com/",
    },
    {
      icon: "logos:google-fit",
      shortName: "Google Fit",
      fullName: "Google Fit",
      description: "Health-tracking platform by Google.",
      url: "https://www.google.com/fit/",
    },
    {
      icon: "logos:google-maps",
      shortName: "Google Maps",
      fullName: "Google Maps",
      description: "Web mapping service developed by Google.",
      url: "https://maps.google.com/",
    },
    {
      icon: "logos:aws",
      shortName: "AWS",
      fullName: "Amazon Web Services",
      description: "Comprehensive cloud platform",
      url: "https://aws.amazon.com/",
    },
    {
      icon: "logos:aws-ec2",
      shortName: "EC2",
      fullName: "Amazon EC2",
      description: "Scalable computing capacity in the cloud",
      url: "https://aws.amazon.com/ec2/",
    },
    {
      icon: "logos:aws-lambda",
      shortName: "Lambda",
      fullName: "AWS Lambda",
      description: "Serverless computing service",
      url: "https://aws.amazon.com/lambda/",
    },
    {
      icon: "logos:aws-s3",
      shortName: "S3",
      fullName: "Amazon S3",
      description: "Scalable object storage service",
      url: "https://aws.amazon.com/s3/",
    },
    {
      icon: "logos:aws-cognito",
      shortName: "Cognito",
      fullName: "AWS Cognito",
      description: "User authentication and access control service",
      url: "https://aws.amazon.com/cognito/",
    },
    {
      icon: "logos:aws-dynamodb",
      shortName: "DynamoDB",
      fullName: "Amazon DynamoDB",
      description: "Managed NoSQL database service",
      url: "https://aws.amazon.com/dynamodb/",
    },
  ],
};

const isDesktop = useMediaQuery("(min-width: 768px)");
</script>

<template>
  <div>
    <div class="flex items-center gap-8 pt-12 max-lg:flex-col-reverse max-md:pb-8">
      <DotLottieVue
        v-if="isDesktop"
        class="aspect-square h-96 w-96 drop-shadow-[0_25px_25px_rgba(0,0,0,0.075)] dark:drop-shadow-[0_25px_25px_rgba(255,255,255,0.075)]"
        autoplay
        loop
        src="/chanawat-portfolio/lotties/skills.json"
      />
      <div class="space-y-4">
        <h2 class="py-2 !text-6xl font-semibold">{{ t("skills") }}</h2>
        <p class="text-xl opacity-70">"{{ t("full-stack-description") }}"</p>
      </div>
    </div>
    <div class="overflow-hidden rounded-xl shadow-lg">
      <h3 class="w-full bg-stone-100 p-4 font-medium shadow max-md:p-2 dark:bg-stone-700">{{ t("advance") }}</h3>
      <div class="flex w-full flex-wrap gap-5 p-6 max-md:justify-center max-md:gap-4 max-md:p-4 dark:bg-stone-800">
        <CardSkill
          v-for="skill in mySkill.advance"
          :skill
        />
      </div>
      <h3 class="w-full bg-stone-100 p-4 font-medium shadow max-md:p-2 dark:bg-stone-700">{{ t("intermediate") }}</h3>
      <div class="flex w-full flex-wrap gap-5 p-6 max-md:justify-center max-md:gap-4 max-md:p-4 dark:bg-stone-800">
        <CardSkill
          v-for="skill in mySkill.intermediate"
          :skill
        />
      </div>
      <h3 class="w-full bg-stone-100 p-4 font-medium shadow max-md:p-2 dark:bg-stone-700">{{ t("basic") }}</h3>
      <div class="flex w-full flex-wrap gap-5 p-6 max-md:justify-center max-md:gap-4 max-md:p-4 dark:bg-stone-800">
        <CardSkill
          v-for="skill in mySkill.basic"
          :skill
        />
      </div>
    </div>
    <DotLottieVue
      v-if="!isDesktop"
      class="mx-auto aspect-square h-64 w-64 drop-shadow-[0_25px_25px_rgba(0,0,0,0.075)] dark:drop-shadow-[0_25px_25px_rgba(255,255,255,0.075)]"
      autoplay
      loop
      src="/chanawat-portfolio/lotties/skills.json"
    />
  </div>
</template>
