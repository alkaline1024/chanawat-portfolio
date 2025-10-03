<script setup lang="ts">
const { t, locale } = useI18n();

const experiences = [
  {
    id: "gramick",
    imgSrc: "/chanawat-portfolio/img/logo-gramick.png",
    backgroundColor: "bg-gradient-to-t from-[#3400FF] to-[#00BFFF] text-white",
    title: "Gramick Co., Ltd.",
    location: "Ladprao, Bangkok",
    position: "Full Stack Developer",
    subtitle: "Full-time",
    period: "May 2025 - Present",
    description: ["Currently working here.", ".", "."],
    title_th: "Gramick Co., Ltd.",
    location_th: "ลาดพร้าว, กรุงเทพฯ",
    position_th: "Full Stack Developer",
    subtitle_th: "พนักงานประจำ",
    period_th: "พ.ค. 2568 - ปัจจุบัน",
    description_th: ["ปัจจุบันกำลังทำงานที่นี่", ".", "."],
  },
  {
    id: "r202",
    imgSrc: "/chanawat-portfolio/img/logo-r202.png",
    backgroundColor: "bg-gradient-to-t from-gray-300 to-gray-50 border-gray-100 border text-stone-950",
    title: "R202 Laboratory",
    location: "CoE, Prince of Songkla University",
    position: "Full Stack Developer",
    subtitle: "Research Student",
    period: "Nov 2021 - Apr 2025",
    description: [
      "R202 Laboratory is the student training place at the Department of Computer Engineering, Faculty of Engineering, Prince of Songkla University, organized by Dr. Thanathip Limna. This laboratory is interested in software systems development, including Web Development, High Performance Computing, AI, IoT, etc.",
      "I had the opportunity to explore and apply several key technologies and tools. These included managing background tasks using Redis queues, implementing SMTP for transactional email systems, and building CI/CD pipelines with Docker containers to automate the deployment process. Additionally, I learned how to write clean, maintainable code and collaborate within a development team, which strengthened my ability to work effectively in professional software environments.",
      "Overall, this experience not only enhanced my technical capabilities but also deepened my understanding of how software is built, tested, and deployed in production-like settings.",
    ],
    title_th: "R202 Laboratory",
    location_th: "ภาควิชาวิศวกรรมคอมพิวเตอร์, มหาวิทยาลัยสงขลานครินทร์",
    position_th: "Full Stack Developer",
    subtitle_th: "นักศึกษาวิจัย",
    period_th: "พ.ย. 2564 - เม.ย. 2568",
    description_th: [
      "R202 เป็นพื้นที่สำหรับห้องปฏิบัติการฝึกฝนทักษะสำหรับนักศึกษาภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์ ภายใต้การดูแลของ ดร.ธนาธิป ลิ่มนา โดยเน้นการพัฒนาระบบซอฟต์แวร์ในหลากหลายด้าน เช่น ระบบเว็บไซต์ การประมวลผลสมรรถนะสูง (HPC), ปัญญาประดิษฐ์ (AI) รวมไปถึง IoT",
      "ผมได้มีโอกาสเรียนรู้และลงมือใช้เทคโนโลยีที่สำคัญหลายอย่าง เช่น การจัดการงานเบื้องหลังด้วย Redis การตั้งค่าระบบส่งอีเมลด้วย SMTP และการสร้างกระบวนการ CI/CD ด้วย Docker รวมถึงฝึกเขียนโค้ดให้สะอาด (Clean code) ดูแลง่าย ให้อยู่ในรูปแบบ Best Practice",
      "ประสบการณ์นี้ไม่เพียงแต่ช่วยเพิ่มทักษะด้านเทคนิค แต่ยังช่วยให้ผมเข้าใจภาพรวมของการพัฒนา การทดสอบ และนำซอฟต์แวร์ไปใช้งานจริงได้อย่างเข้าใจมากยิ่งขึ้น อีกทั้งยังได้เรียนรู้การทำงานร่วมกับทีม ซึ่งช่วยพัฒนาทักษะการทำงานในสภาพแวดล้อมต่าง ๆ ได้เป็นอย่างมาก",
    ],
  },
  {
    id: "devforward",
    imgSrc: "/chanawat-portfolio/img/logo-devforward.png",
    backgroundColor: "bg-gradient-to-t from-orange-600 to-[#F29620] dark:from-orange-700 dark:to-yellow-600 text-white",
    title: "Dev Forward Co., Ltd.",
    location: "Huai Khwang, Bangkok",
    position: "Full Stack Developer",
    subtitle: "Cooperative Internship",
    period: "Nov 2024 - Mar 2025",
    description: [
      "Dev Forward Co., Ltd.  is a technology company based in Bangkok, where I had the opportunity to complete my Cooperative Internship as a Full Stack Developer. The internship was a highly valuable experience that challenged me to step out of my comfort zone and apply new technologies in real-world scenarios.",
      "I was responsible for both frontend and backend development using modern frameworks such as Nuxt.js for the frontend and Fastify.js for the backend. I also worked with various AWS services including DynamoDB, Cognito, S3, and Lambda, as well as implemented CI/CD pipelines integrated with AWS SAML. In addition, I gathered requirements directly from clients, which helped me grow in both technical and communication skills.",
      "This internship taught me how to adapt to new environments, learn unfamiliar tools and technologies under time constraints, collaborate with a team, and handle challenges professionally. Overall, it greatly boosted my confidence in full-stack development and working with complex systems.",
    ],
    title_th: "Dev Forward Co., Ltd.",
    location_th: "ห้วยขวาง, กรุงเทพฯ",
    position_th: "Full Stack Developer",
    subtitle_th: "ฝึกงานสหกิจศึกษา",
    period_th: "พ.ย. 2567 - มี.ค. 2568",
    description_th: [
      "Dev Forward Co., Ltd. เป็นบริษัทที่ผมได้มีโอกาสฝึกงานสหกิจศึกษาในตำแหน่ง Full Stack Developer ที่นี่ โดยตลอดระยะเวลาการฝึกงาน ผมได้เรียนรู้และพัฒนาทักษะใหม่ ๆ จากการลงมือทำงานจริง และได้ก้าวออกจากพื้นที่ปลอดภัยของตัวเอง",
      "ผมรับผิดชอบทั้งฝั่ง Frontend และ Backend โดยใช้เฟรมเวิร์กสมัยใหม่ เช่น Nuxt.js สำหรับฝั่งผู้ใช้ และ Fastify.js สำหรับฝั่งเซิร์ฟเวอร์ นอกจากนี้ยังได้ใช้งานบริการต่าง ๆ ของ AWS อย่างเช่น DynamoDB, Cognito, S3 และ Lambda รวมไปถึงการสร้าง CI/CD Pipeline ร่วมกับ AWS SAML รวมไปถึงการเก็บ Requirement จากลูกค้าโดยตรง ซึ่งช่วยให้ผมพัฒนาทั้งทักษะด้านเทคนิคและการสื่อสารไปพร้อมกัน",
      "จากการได้ฝึกงานที่นี่ ทำให้ได้ฝึกปรับตัวเข้ากับสภาพแวดล้อมใหม่ ๆ การเรียนรู้เครื่องมือและเทคโนโลยีที่ไม่เคยใช้มาก่อนในเวลาที่จำกัด รวมถึงการทำงานร่วมกับทีมและรับมือกับความท้าทายที่เกิดขึ้นอย่างมืออาชีพ โดยรวมแล้ว การฝึกงานครั้งนี้ช่วยเสริมความมั่นใจในการทำงานด้าน Full Stack และระบบอื่น ๆ เป็นอย่างมาก",
    ],
  },
  {
    id: "importstar",
    imgSrc: "/chanawat-portfolio/img/logo-importstar.png",
    backgroundColor: "bg-gradient-to-t from-purple-900 to-purple-600 text-white",
    title: "Import Star Co., Ltd.",
    location: "Hat Yai, Songkhla",
    position: "Full Stack Developer",
    subtitle: "Part-time",
    period: "Mar 2023 - Nov 2024",
    description: [
      "Import Star Co., Ltd. provided me with a valuable opportunity to strengthen my skills in both web and mobile (Flutter) application development. I worked across the full stack using technologies such as Flask (Python), FastAPI for backend services, Svelte for frontend development, and Flutter for mobile applications.",
      "One of the key aspects of my role was engaging directly with clients to gather requirements, which allowed me to deeply understand user needs and translate them into system architecture, database design, and UX/UI wireframes. I also worked on optimizing large-scale MongoDB queries, improving system performance and scalability.",
      "As a growing startup, Import Star encouraged a culture of continuous learning and experimentation. I was frequently involved in researching and testing new tools, frameworks, and libraries to enhance our development workflow and product quality. This fast-paced and adaptive environment helped me develop not only my technical proficiency but also my problem-solving mindset and product thinking.",
    ],
    title_th: "Import Star Co., Ltd.",
    location_th: "หาดใหญ่, สงขลา",
    position_th: "Full Stack Developer",
    subtitle_th: "พนักงานชั่วคราว",
    period_th: "มี.ค. 2566 - พ.ย. 2567",
    description_th: [
      "Import Star Co., Ltd. เป็นอีกหนึ่งสถานที่สำคัญที่ทำให้ผมได้พัฒนาทักษะด้านการเขียนเว็บไซต์และแอปพลิเคชันอย่างรอบด้าน ทั้งในฝั่ง Backend ด้วย Flask และ FastAPI และในฝั่ง Frontend ด้วย Svelte รวมถึง Mobile Application ด้วย Flutter โดยตลอดการทำงาน ผมได้มีโอกาสในการพัฒนาโปรเจกต์ที่ใช้งานจริงตั้งแต่ต้นจนจบ",
      "อีกหนึ่งในสิ่งที่ผมได้รับจากที่นี่คือประสบการณ์ในการพูดคุยกับลูกค้าเพื่อเก็บ Requirement อย่างเป็นระบบ แล้วนำมาวิเคราะห์ ออกแบบโครงสร้างระบบ ฐานข้อมูล และ UX/UI ให้เหมาะสมกับการใช้งานจริง นอกจากนี้ยังได้ลงมือแก้ปัญหาการ Query ข้อมูลขนาดใหญ่ใน MongoDB เพื่อแก้ไขและเพิ่มประสิทธิภาพของระบบ",
      "ด้วยความที่ Import Star เป็นบริษัทที่เพิ่งเริ่มต้นได้ไม่นาน จึงมีบรรยากาศการทำงานที่เปิดกว้างและท้าทายอยู่เสมอ ผมมีโอกาสได้ค้นคว้าและทดลองใช้เครื่องมือหรือไลบรารีใหม่ ๆ เพื่อนำมาใช้เป็นเครื่องมือที่จะพัฒนาอยู่เสมอ ช่วยส่งเสริมแนวและความสามารถในการเรียนรู้สิ่งใหม่ได้อย่างมาก",
    ],
  },
];
</script>

<template>
  <div class="space-y-2">
    <h1 class="font-medium">{{ t("experiences") }}</h1>
    <div class="mt-20 grid grid-cols-1 gap-8 max-md:gap-20 md:grid-cols-2 lg:grid-cols-3">
      <CardExperience
        v-for="exp in experiences"
        :key="exp.id"
        :id="exp.id"
        :img-src="exp.imgSrc"
        :background-color="exp.backgroundColor"
        :title="locale === 'th' ? exp.title_th : exp.title"
        :location="locale === 'th' ? exp.location_th : exp.location"
        :position="locale === 'th' ? exp.position_th : exp.position"
        :subtitle="locale === 'th' ? exp.subtitle_th : exp.subtitle"
        :period="locale === 'th' ? exp.period_th : exp.period"
        :description="locale === 'th' ? exp.description_th : exp.description"
      />
    </div>
  </div>
</template>
