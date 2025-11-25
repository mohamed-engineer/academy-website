"use client";

import { motion } from "framer-motion";

const teachers = [
  { name: "أحمد سامي", bio: "محاضر متخصص في JavaScript" },
  { name: "مريم خالد", bio: "خبيرة UI/UX" },
  { name: "علي حسين", bio: "React Developer بخبرة 6 سنوات" },
];

export default function TeachersSection() {
  return (
    <section className="py-20 px-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center">أفضل المدرسين</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teachers.map((teacher, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center"
          >
            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">{teacher.name}</h3>
            <p className="text-gray-600 mt-2">{teacher.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
