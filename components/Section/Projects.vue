<script setup lang="ts">
const { t, locale } = useI18n();
const projects: IProject[] = [
  {
    name: "Hakon - Migrant Lookup System",
    name_th: "Hakon - ระบบค้นหารายชื่อผู้อพยพ",
    description:
      "Developed a real-time refugee lookup system during the 2025 Hat Yai flood crisis, designed to help shelters quickly search and verify displaced individuals. Supports multi-shelter operations with role-based access control. Developed overnight (~6 hours) with the R202 team and deployed immediately. Handled heavy traffic on day one and now serves over 15,000+ registered individuals.",
    description_th:
      "สร้างขึ้นในช่วงเหตุการณ์น้ำท่วมใหญ่ปี 2568 ที่หาดใหญ่ เพื่อช่วยศูนย์พักพิงค้นหาและตรวจสอบรายชื่อผู้อพยพได้อย่างรวดเร็ว รองรับหลายศูนย์พักพิงพร้อมระบบ RBAC แยกบทบาทของแต่ละศูนย์ พัฒนาร่วมกับทีม R202 ภายในคืนเดียว (~6 ชั่วโมง) และเปิดใช้งานได้ทันที รองรับผู้ใช้งานจำนวนมากตั้งแต่วันแรกได้โดยไม่ล่ม และปัจจุบันมีข้อมูลผู้อพยพมากกว่า 15,000+ คนแล้ว (01/12/2025)",
    type: "Web Application",
    type_th: "เว็บแอปพลิเคชัน",
    icon: "mdi:account-search",
    role: "Full Stack Developer (Volunteer)",
    for: "r202",
    tech: {
      frontend: "Jinja, TailwindCSS",
      backend: "Flask",
      database: "MongoDB",
      additionals: ["Real-world Emergency Use"],
    },
    demoUrl: "hakon.psu.ac.th",
  },
  {
    name: "Search Pokémon",
    name_th: "โปเกเดกซ์",
    description: "Demo Pokédex web app for searching Pokémon to experimenting with GraphQL queries.",
    description_th: "เว็บเดโม Pokédex สำหรับค้นหาโปเกมอน และฝึกการใช้งาน Query ข้อมูลด้วย GraphQL",
    type: "Web Application (Demo)",
    type_th: "เว็บแอปพลิเคชัน (เดโม)",
    icon: "mdi:pokeball",
    role: "Full Stack Developer",
    for: "experiment",
    tech: {
      frontend: "Next.js",
      backend: "GraphQL",
      database: "Public API",
      additionals: ["Apollo Client"],
    },
    codeUrl: "github.com/alkaline1024/search-pokemon",
    demoUrl: "search-pokemon-six-snowy.vercel.app",
  },
  {
    name: "Nextflix",
    name_th: "Nextflix",
    description:
      "A Netflix clone for practicing Clean Architecture. Features My List, Responsive UI and browsing various categories of movies and TV series from the TMDB API.",
    description_th:
      "โปรเจ็คจำลองเว็บ Netflix ฝึกการโค้ดแบบ Clean Architecture มีฟีเจอร์เพิ่ม/ลบรายการโปรด การแสดงผลแต่ละอุปกรณ์ การเรียกดูหนังและซีรีส์ประเภทต่าง ๆ โดยดึงข้อมูลผ่าน API จาก TMDB",
    type: "Web Application (Demo)",
    type_th: "เว็บแอปพลิเคชัน (เดโม)",
    icon: "mdi:netflix",
    role: "Full Stack Developer",
    for: "experiment",
    tech: {
      frontend: "Next.js",
      backend: "Nest.js",
      database: "TMDB API",
      additionals: ["Clean Architecture"],
    },
    codeUrl: "github.com/alkaline1024/nextflix",
    demoUrl: "nextflix-sigma.vercel.app",
    demoRemark: t("demo-loading-remark"),
  },
  {
    name: "Auth & App Portal Management",
    name_th: "ระบบจัดการพอร์ทัลแอปพลิเคชัน",
    description:
      "User auth and portal management, utilizing AWS Cognito with support for OAuth 2.0 and SAML standards.",
    description_th: "ระบบจัดการการเข้าสู่ระบบและพอร์ทัล โดยใช้ AWS Cognito ที่รองรับมาตรฐาน OAuth 2.0 และ SAML",
    type: "Web Application",
    type_th: "เว็บแอปพลิเคชัน",
    icon: "material-symbols:captive-portal-rounded",
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
    name_th: "WalkWing",
    description:
      "Developed a mobile app with Flutter and a web app with Svelte for event management, including participant and back-office systems. Integrated map-based features and a gachapon-style reward system.",
    description_th:
      "พัฒนาแอปมือถือด้วย Flutter และเว็บแอปด้วย Svelte สำหรับจัดกิจกรรม ระบบสำหรับผู้เข้าร่วม และระบบหลังบ้าน พร้อมระบบแผนที่และสุ่มของรางวัลแบบกาชาปอง",
    type: "Mobile & Web Application",
    type_th: "แอปพลิเคชันบนมือถือและเว็บ",
    icon: "ic:round-phonelink",
    role: "Full Stack Developer, UX/UI Designer",
    for: "importstar",
    tech: {
      frontend: "Flutter, Svelte",
      backend: "FastAPI",
      database: "MongoDB",
      additionals: ["Google Fit"],
    },
    demoUrl: "app.walkwing.co",
  },
  {
    name: "Custom Suit Order Management",
    name_th: "ระบบจัดการคำสั่งซื้อการตัดสูท",
    description:
      "Developed a web application for managing custom suit orders, including invoice, system settings, notifications, and inventory materials management for suit drafting.",
    description_th:
      "พัฒนาเว็บสำหรับจัดการคำสั่งซื้อตัดสูท สร้างใบแจ้งหนี้ การตั้งค่าต่าง ๆ รวมไปถึงการแจ้งเตือน การจัดการสินค้าและวัสดุในระบบ เพื่อใช้ในการพิมพ์แบบร่างสูท",
    type: "Web Application",
    type_th: "เว็บแอปพลิเคชัน",
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
    name_th: "แอปพลิเคชันจัดเก็บค่าน้ำการประปา",
    description:
      "Refactor UX/UI, integrated new API endpoints, and implemented support for thermal printer connectivity for invoice printing via both BLE and Classic Bluetooth protocols.",
    description_th:
      "ปรับปรุง UX/UI ของระบบ เชื่อมต่อ API เส้นใหม่ และระบบเชื่อมต่ออุปกรณ์ Thermal printer สำหรับพิมพ์ใบแจ้งหนี้ที่รองรับการเชื่อมต่อ Bluetooth แบบ BLE และ Classic",
    type: "Mobile Application (Flutter)",
    type_th: "แอปพลิเคชันมือถือ (Flutter)",
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
    name_th: "การนำเข้าข้อมูลจากระบบไฟล์",
    description:
      "Built data ingestion flow for Excel/XML files using Pandas. Performed data validation and integration into the system.",
    description_th:
      "สร้างระบบนำเข้าข้อมูลจากไฟล์ Excel/XML โดยใช้ Pandas พร้อมการตรวจสอบข้อมูล การแจ้งเตือนข้อมูลที่ไม่ถูกต้องก่อนการนำเข้าสู่ระบบ",
    type: "Web Application",
    type_th: "เว็บแอปพลิเคชัน",
    icon: "icon-park-solid:excel",
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
    name_th: "ระบบจัดการคลังสินค้า",
    description:
      "Developed a back-office warehouse management system supporting multi-branch and multi-role access, with optimized data querying for over 100,000 records.",
    description_th:
      "พัฒนาระบบ back-office จัดการคลังสินค้าที่รองรับการใช้งานหลายสาขาและหลายบทบาท พร้อมปรับประสิทธิภาพการดึงข้อมูลมากกว่า 100,000 รายการ",
    type: "Web Application",
    type_th: "เว็บแอปพลิเคชัน",
    icon: "ic:round-warehouse",
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
    name_th: "ระบบออกเกียรติบัตรออนไลน์",
    description:
      "Developed web app for DiiS, PSU, managing events and digital certificates supporting multi-tenancy. Included email automation with SMTP and job queue handling with Redis.",
    description_th:
      "พัฒนาเว็บแอปให้กับศูนย์คอมพิวเตอร์ มหาวิทยาลัยสงขลานครินทร์ สำหรับจัดการกิจกรรมที่จัดขึ้นเพื่อออกเกียรติบัตรออนไลน์โดยอัตโนมัติ ซึ่งรองรับการใช้งานหลายองค์กรและหลายบทบาท พร้อมระบบส่งอีเมลอัตโนมัติ",
    type: "Web Application",
    type_th: "เว็บแอปพลิเคชัน",
    icon: "mdi:certificate-outline",
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
    name_th: "ระบบส่งโปรเจกต์สำหรับ CoE, PSU",
    description:
      "Developed web app for Computer Engineering students at Prince of Songkla University to submit their projects, submission and report with grading system for lecturers.",
    description_th:
      "พัฒนาเว็บใช้ในการส่งโปรเจกต์ รายงาน และเอกสาร รวมไปถึงระบบการให้เกรดสำหรับอาจารย์ สำหรับนักศึกษาสาขาวิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 4 มหาวิทยาลัยสงขลานครินทร์",
    type: "Web Application",
    type_th: "เว็บแอปพลิเคชัน",
    icon: "ic:round-assignment",
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
    <h1 class="font-medium">{{ t("projects") }}</h1>
    <div class="mt-8 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <CardProject
        v-for="project in projects"
        :project
      />
    </div>
  </div>
</template>
