"use client";

import { motion } from "framer-motion";

const courses = [
  { id: 1, title: "Next.js من الصفر", desc: "تعلم بناء مواقع حديثة باستخدام Next.js" },
  { id: 2, title: "JavaScript احترافي", desc: "إتقان جافاسكربت خطوة بخطوة" },
  { id: 3, title: "React متقدم", desc: "Hooks, State Management وأكثر" },
];

export default function CoursesSection() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-3xl font-bold mb-10 text-center">أشهر الكورسات</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.desc}</p>
            <a
              href="/courses"
              className="text-blue-600 font-bold hover:underline"
            >
              ابدأ الآن →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
