"use client";

import { motion } from "framer-motion";

const courses = [
  { id: 1, title: "Next.js من الصفر", desc: "تعلم بناء مواقع حديثة." },
  { id: 2, title: "JavaScript احترافي", desc: "أساسيات + مشروع كبير." },
  { id: 3, title: "React متقدم", desc: "Hooks, State, Routing والمزيد." },
];

export default function Courses() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        الكورسات المتوفرة
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.a
            key={course.id}
            href={`/courses/${course.id}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer border"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600">{course.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
