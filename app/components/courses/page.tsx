"use client";

import { motion } from "framer-motion";

const courses = [
  { id: 1, title: "Next.js من الصفر", desc: "تعلم بناء مواقع حديثة." },
  { id: 2, title: "JavaScript احترافي", desc: "إتقان اللغة من البداية للنهاية." },
  { id: 3, title: "React متقدم", desc: "Hooks, Context, State Management." },
];

export default function CoursesPage() {
  return (
    <div className="py-20 px-10">
      <h1 className="text-4xl font-bold mb-10 text-center">كل الكورسات</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition border cursor-pointer"
          >
            <h2 className="text-2xl font-bold mb-3">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.desc}</p>
            <a href="#" className="text-blue-600 font-bold hover:underline">
              عرض التفاصيل →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
