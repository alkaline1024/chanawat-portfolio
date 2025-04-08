<script setup lang="ts">
import { useAutoAnimate } from "@formkit/auto-animate/vue";
const { t } = useI18n();
const [blogSection] = useAutoAnimate();

const defaultVisibleCount = 3;
const visibleCount = ref(defaultVisibleCount);
const visibleBlogs = computed(() => blogs.slice(0, visibleCount.value));
const showMore = () => (visibleCount.value = blogs.length);
const showLess = () => (visibleCount.value = defaultVisibleCount);
const isExpanded = computed(() => visibleCount.value != defaultVisibleCount);
const blogs = [
  {
    title: "ฝึกงานที่ Dev Forward: จากนักศึกษา สู่วิถี Full Stack Developer!",
    content:
      "สวัสดีผู้อ่านทุกท่าน ผมนายชนาวัฒน์ ทั้วสุภาพ (เอิร์ท) นักศึกษาจากมหาวิทยาลัยสงขลานครินทร์ คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ ที่เดินเข้าสู่วิถีแห่งการฝึกงานในฐานะ Full Stack Developer จะขอใช้บทความนี้เพื่อเป็นที่สมุดบันทึกประสบการณ์จากการฝึกงานที่ Dev Forward Co., Ltd.",
    publishDate: "Mar 6, 2025",
    url: "https://medium.com/@eartheisen/ฝึกงานที่-dev-forward-จากนักศึกษา-สู่วิถี-full-stack-developer-d8489f10841c",
  },
  {
    title: "Concurrency Parallelism และ Asynchronous ต่างกันตรงไหน? พร้อมยกตัวอย่าง C++",
    content:
      "บทความนี้อธิบายถึงความแตกต่างระหว่าง Concurrency, Parallelism และ Asynchronous พร้อมยกตัวอย่างการใช้งานในภาษา C++",
    publishDate: "Mar 15, 2024",
    url: "https://medium.com/@eartheisen/concurrency-parallelism-และ-asynchronous-ต่างกันตรงไหน-พร้อมยกตัวอย่าง-c-6e0a1b5e0b7e",
  },
  {
    title: "สอนใช้ Ansible ในการทำ Automation ขั้นพื้นฐาน",
    content: "บทความนี้แนะนำการใช้งาน Ansible ซึ่งเป็น Open Source Software สำหรับการทำ Automation ในการจัดการระบบ IT",
    publishDate: "Mar 15, 2024",
    url: "https://medium.com/@eartheisen/สอนใช้-ansible-ในการทำ-automation-ขั้นพื้นฐาน-9f7a0e3b7f5e",
  },
  {
    title: "อย่าพึ่งออกแบบระบบ ถ้าคุณยังไม่รู้จัก CAP Theorem",
    content:
      "บทความนี้อธิบายเกี่ยวกับ CAP Theorem ซึ่งเป็นทฤษฎีที่อธิบายข้อจำกัดของระบบกระจายศูนย์ (distributed systems)",
    publishDate: "Mar 14, 2024",
    url: "https://medium.com/@eartheisen/อย่าพึ่งออกแบบระบบ-ถ้าคุณยังไม่รู้จัก-cap-theorem-4f8a3b2e9d5e",
  },
  {
    title: "MPI หรือ Message Passing Interface คืออะไร?",
    content:
      "บทความนี้แนะนำ MPI (Message Passing Interface) ซึ่งเป็นมาตรฐานสำหรับการสื่อสารระหว่างโปรเซสในระบบคอมพิวเตอร์แบบขนาน",
    publishDate: "Mar 14, 2024",
    url: "https://medium.com/@eartheisen/mpi-หรือ-message-passing-interface-คืออะไร-2e3a4b7c8d9e",
  },
  {
    title: "ประวัติความเป็นมาของ Top500 เว็บไซต์จัดอันดับ Supercomputer",
    content: "บทความนี้เล่าถึงประวัติและความเป็นมาของเว็บไซต์ Top500 ที่จัดอันดับซูเปอร์คอมพิวเตอร์ที่เร็วที่สุดในโลก",
    publishDate: "Mar 13, 2024",
    url: "https://medium.com/@eartheisen/ประวัติความเป็นมาของ-top500-เว็บไซต์จัดอันดับ-supercomputer-5f6a7b8c9d0e",
  },
  {
    title: "จุดเริ่มต้นและการพัฒนาการของ High-Performance Computing (ตอนที่ 2)",
    content:
      "บทความนี้เล่าต่อถึงการพัฒนาของ High-Performance Computing หลังจากยุคของ Cray ผู้บุกเบิกซูเปอร์คอมพิวเตอร์",
    publishDate: "Mar 13, 2024",
    url: "https://medium.com/@eartheisen/จุดเริ่มต้นและการพัฒนาการของ-high-performance-computing-ตอนที่-2-6e7f8a9b0c1d",
  },
  {
    title: "จุดเริ่มต้นและการพัฒนาการของ High-Performance Computing (ตอนที่ 1)",
    content: "บทความนี้พาผู้อ่านไปรู้จักกับประวัติศาสตร์ของ High-Performance Computing ตั้งแต่ยุคเริ่มต้นจนถึงปัจจุบัน",
    publishDate: "Mar 12, 2024",
    url: "https://medium.com/@eartheisen/จุดเริ่มต้นและการพัฒนาการของ-high-performance-computing-ตอนที่-1-7f8a9b0c1d2e",
  },
  {
    title: "Container Orchestration คือหัวใจหลักของ Infrastructure ด้วย Kubernetes",
    content:
      "บทความนี้อธิบายถึงความสำคัญของ Container Orchestration ใน Infrastructure และการใช้งาน Kubernetes ในการจัดการคอนเทนเนอร์",
    publishDate: "Feb 26, 2024",
    url: "https://medium.com/@eartheisen/หัวใจหลักของ-infrastructure-ด้วย-container-orchestration-กับ-kubernetes-884c0cab6b8c",
  },
  {
    title: "ไขคำตอบ Parallel Computing เร็วกว่า Sequential จริงหรือ?",
    content:
      "บทความนี้วิเคราะห์การทำงานของ Parallel Computing และ Sequential Computing ว่าแบบใดมีประสิทธิภาพมากกว่ากัน",
    publishDate: "Feb 26, 2024",
    url: "https://medium.com/@eartheisen/ไขคำตอบ-parallel-computing-เร็วกว่า-sequential-จริงหรือ-9a0b1c2d3e4f",
  },
  {
    title: "การเกิดของขึ้นของ Aurora ระบบ Supercomputer อนาคตไกล",
    content: "บทความนี้เล่าถึงการพัฒนาและความสำคัญของ Aurora ซูเปอร์คอมพิวเตอร์ที่มีประสิทธิภาพสูงในอนาคต",
    publishDate: "Jan 11, 2024",
    url: "https://medium.com/@eartheisen/การเกิดของขึ้นของ-aurora-ระบบ-supercomputer-อนาคตไกล-671715aaf32d",
  },
  {
    title: "สร้างเกมใน Python กันด้วย Pygame",
    content: "บทความนี้แนะนำการใช้ Pygame ซึ่งเป็นโมดูลของ Python สำหรับการออกแบบและพัฒนาเกม",
    publishDate: "Aug 2, 2022",
    url: "https://medium.com/@eartheisen/สร้างเกมใน-python-กันด้วย-pygame-ed8a29cd6c55",
  },
  {
    title: "เปิดตัว PyScript ที่จะสามารถทำให้เราสามารถเขียน Python บน HTML",
    content: "บทความนี้แนะนำ PyScript ซึ่งเป็น Framework ที่ทำให้เราสามารถเขียนสคริปต์ Python ได้ลงบนโค้ด HTML",
    publishDate: "May 9, 2022",
    url: "https://medium.com/@eartheisen/เปิดตัว-pyscript-ที่จะสามารถทำให้เราสามารถเขียน-python-บน-html-5d9be6ba3596",
  },
];
</script>

<template>
  <div class="space-y-2">
    <h1 class="font-medium">{{ t("blogs") }}</h1>
    <div
      ref="blogSection"
      class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <CardBlog
        v-for="blog in visibleBlogs"
        :blog
      />
    </div>
    <div class="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 py-2 text-center font-medium">
      <UButton
        size="md"
        variant="outline"
        :label="isExpanded ? t('show-less') : t('show-more')"
        :icon="isExpanded ? 'ic:baseline-keyboard-arrow-up' : 'ic:baseline-keyboard-arrow-down'"
        :ui="{
          leadingIcon: 'text-lg',
        }"
        class="pr-4 pl-3 hover:text-white"
        @click="isExpanded ? showLess() : showMore()"
      />
    </div>
  </div>
</template>
