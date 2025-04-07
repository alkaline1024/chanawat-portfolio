<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <div class="space-y-2">
    <h1 class="font-medium">Experiences</h1>
    <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <CardExperience
        imgSrc="/chanawat-portfolio/img/logo-r202.png"
        background-color="bg-gradient-to-b from-gray-300 to-gray-50 text-stone-950"
        location="CoE, Prince of Songkla University"
        position="Research Student"
        title="R202 Laboratory"
        subtitle="Research Student"
        period="Nov 2021 - Present"
        :description="[
          'R202 Laboratory is the student training place at the Department of Computer Engineering, Faculty of Engineering, Prince of Songkla University, organized by Dr. Thanathip Limna. This laboratory is interested in software systems development, including High Performance Computing, AI, IoT, etc.',
          'I had the opportunity to explore and apply several key technologies and tools. These included managing background tasks using Redis queues, implementing SMTP for transactional email systems, and building CI/CD pipelines with Docker containers to automate the deployment process. Additionally, I learned how to write clean, maintainable code and collaborate within a development team, which strengthened my ability to work effectively in professional software environments.',
          'Overall, this experience not only enhanced my technical capabilities but also deepened my understanding of how software is built, tested, and deployed in production-like settings.',
        ]"
      />

      <CardExperience
        imgSrc="/img/logo-devforward.png"
        backgroundColor="bg-gradient-to-b from-orange-600 to-[#F29620] dark:from-orange-700 dark:to-yellow-600 text-white"
        location="Huai Khwang, Bangkok"
        position="Full Stack Developer"
        subtitle="Cooperative Internship"
        title="Dev Forward Co., Ltd."
        period="Nov 2024 - Mar 2025"
        id="devforward"
        :description="[
          'Dev Forward Co., Ltd. is a technology company based in Bangkok, where I had the opportunity to complete my Cooperative Internship as a Full Stack Developer. The internship was a highly valuable experience that challenged me to step out of my comfort zone and apply new technologies in real-world scenarios.',
          'During my time at Dev Forward, I was responsible for developing and maintaining features across both the frontend and backend. I worked with modern frameworks such as Nuxt.js for the frontend and Fastify.js for the backend. Additionally, I gained hands-on experience with various AWS services, including DynamoDB, Cognito, S3, and Lambda, which allowed me to build scalable and secure systems.',
          'One of the key highlights of this internship was learning how to implement CI/CD pipelines and deploying systems with AWS SAML. I also had the opportunity to engage directly with clients to gather requirements, which improved both my technical and communication skills. Overall, this experience significantly enhanced my confidence in full-stack development and cloud-based infrastructure.',
        ]"
      />

      <CardExperience
        imgSrc="/img/logo-importstar.png"
        backgroundColor="bg-gradient-to-b from-purple-900 to-purple-600 text-white"
        location="Hat Yai, Songkhla"
        position="Full Stack Developer"
        subtitle="Part-time"
        title="Import Star Co., Ltd."
        period="Mar 2023 - Nov 2024"
        id="importstar"
        :description="[
          'Import Star Co., Ltd. provided me with a valuable opportunity to strengthen my skills in both web and mobile (Flutter) application development. I worked across the full stack using technologies such as Flask (Python), Fastify.js for backend services, Svelte for frontend development, and Flutter for mobile applications.',
          'One of the key aspects of my role was engaging directly with clients to gather requirements, which allowed me to deeply understand user needs and translate them into system architecture, database design, and UX/UI wireframes. I also worked on optimizing large-scale MongoDB queries, improving system performance and scalability.',
          'As a growing startup, Import Star encouraged a culture of continuous learning and experimentation. I was frequently involved in researching and testing new tools, frameworks, and libraries to enhance our development workflow and product quality. This fast-paced and adaptive environment helped me develop not only my technical proficiency but also my problem-solving mindset and product thinking.',
        ]"
        :description-th="[
          'Import Star Co., Ltd. เป็นอีกหนึ่งสถานที่สำคัญที่ทำให้ผมได้พัฒนาทักษะด้านการเขียนเว็บไซต์และแอปพลิเคชันอย่างรอบด้าน ทั้งในฝั่ง Backend ด้วย Flask (Python) และ Fastify.js และในฝั่ง Frontend ด้วย Svelte รวมถึง Mobile Application ด้วย Flutter โดยตลอดการทำงาน ผมได้มีโอกาสเรียนรู้และพัฒนาโปรเจกต์จริงตั้งแต่ต้นจนจบ',
          'หนึ่งในสิ่งที่ผมได้รับจากที่นี่คือประสบการณ์ในการพูดคุยกับลูกค้าเพื่อเก็บ Requirement อย่างเป็นระบบ แล้วนำมาวิเคราะห์ ออกแบบโครงสร้างระบบ ฐานข้อมูล และ UX/UI ให้เหมาะสมกับการใช้งานจริง นอกจากนี้ยังได้ลงมือแก้ปัญหาการ Query ข้อมูลขนาดใหญ่ใน MongoDB เพื่อเพิ่มประสิทธิภาพของระบบอย่างชัดเจน',
          'ด้วยความที่ Import Star เป็นบริษัทที่เพิ่งเริ่มต้นได้ไม่นาน จึงมีบรรยากาศการทำงานที่เปิดกว้างและท้าทายอยู่เสมอ ผมมีโอกาสได้ทำ Research และทดลองใช้เครื่องมือหรือไลบรารีใหม่ ๆ เพื่อนำมาปรับปรุงกระบวนการทำงานและคุณภาพของซอฟต์แวร์อย่างต่อเนื่อง ซึ่งช่วยเสริมสร้างแนวคิดเชิงนวัตกรรมและความสามารถในการเรียนรู้สิ่งใหม่ได้อย่างมาก',
        ]"
      />
    </div>
  </div>
</template>
