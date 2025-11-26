"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaStar, FaUsers, FaClock, FaCheckCircle, FaArrowRight  } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Next.js من الصفر",
    desc: "تعلم بناء مواقع حديثة باستخدام أحدث تقنيات Next.js والـ React",
    level: "مبتدئ",
    students: 2450,
    hours: 24,
    rating: 4.8,
    price: 199,
    originalPrice: 299,
    instructor: "أحمد سامي",
    image: "bg-gradient-to-br from-blue-500 to-blue-600",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    id: 2,
    title: "JavaScript احترافي",
    desc: "إتقان اللغة من البداية للنهاية مع أمثلة عملية وتطبيقات حقيقية",
    level: "متوسط",
    students: 3100,
    hours: 32,
    rating: 4.9,
    price: 249,
    originalPrice: 349,
    instructor: "محمد النجار",
    image: "bg-gradient-to-br from-yellow-500 to-yellow-600",
    tags: ["JavaScript", "ES6+", "الخوارزميات"],
  },
  {
    id: 3,
    title: "React متقدم",
    desc: "Hooks, Context, State Management وأنماط عملية متقدمة",
    level: "متقدم",
    students: 1800,
    hours: 28,
    rating: 4.7,
    price: 279,
    originalPrice: 399,
    instructor: "علي حسين",
    image: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    tags: ["React", "Hooks", "Performance"],
  },
  {
    id: 4,
    title: "Tailwind CSS من الأساس",
    desc: "تصميم واجهات مستجيبة بسرعة وكفاءة باستخدام Tailwind CSS",
    level: "مبتدئ",
    students: 4200,
    hours: 16,
    rating: 4.6,
    price: 129,
    originalPrice: 199,
    instructor: "مريم خالد",
    image: "bg-gradient-to-br from-pink-500 to-pink-600",
    tags: ["CSS", "Design", "Tailwind"],
  },
  {
    id: 5,
    title: "TypeScript للمحترفين",
    desc: "أنواع قوية وتطبيقات آمنة مع أفضل الممارسات والتصاميم",
    level: "متقدم",
    students: 1600,
    hours: 20,
    rating: 4.8,
    price: 229,
    originalPrice: 329,
    instructor: "أحمد سامي",
    image: "bg-gradient-to-br from-purple-500 to-purple-600",
    tags: ["TypeScript", "OOP", "Design Patterns"],
  },
  {
    id: 6,
    title: "Web Performance & SEO",
    desc: "تحسين أداء المواقع والتصدر في نتائج محركات البحث",
    level: "متوسط",
    students: 980,
    hours: 18,
    rating: 4.9,
    price: 199,
    originalPrice: 279,
    instructor: "فاطمة عمر",
    image: "bg-gradient-to-br from-green-500 to-green-600",
    tags: ["Performance", "SEO", "Optimization"],
  },
];

export default function CoursesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [filter, setFilter] = useState("الكل");

  const levels = ["الكل", "مبتدئ", "متوسط", "متقدم"];
  const filteredCourses =
    filter === "الكل" ? courses : courses.filter((c) => c.level === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
          مقررات شهيرة
        </span>
        <h2 className="text-5xl font-bold text-white mb-4 mt-2">أشهر الكورسات</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          اختر من بين أكثر الدورات طلباً والتي يثق بها آلاف الطلاب حول العالم
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12 max-w-6xl mx-auto"
      >
        {levels.map((level) => (
          <motion.button
            key={level}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(level)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              filter === level
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 border-2 border-gray-700 hover:border-blue-500 hover:text-blue-400"
            }`}
          >
            {level}
          </motion.button>
        ))}
      </motion.div>

      {/* Courses Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            variants={itemVariants}
            onHoverStart={() => setHoveredId(course.id)}
            onHoverEnd={() => setHoveredId(null)}
            whileHover={{ y: -10 }}
            className="group bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-700 hover:border-blue-500 cursor-pointer"
          >
            {/* Course Image Section */}
            <div className={`h-40 ${course.image} relative overflow-hidden`}>
              <motion.div
                animate={hoveredId === course.id ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center"
              >
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📚</div>
                  <p className="font-semibold text-sm">{course.level}</p>
                </div>
              </motion.div>
              
              {/* Badge */}
              {hoveredId === course.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                >
                  متاح الآن
                </motion.div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Instructor */}
              <p className="text-blue-400 text-xs font-semibold mb-2">👨‍🏫 {course.instructor}</p>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {course.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Course Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4 py-3 border-y border-gray-700">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <FaUsers className="text-blue-500 text-sm" />
                    <span className="text-xs text-gray-400">
                      {course.students.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <FaClock className="text-green-500 text-sm" />
                    <span className="text-xs text-gray-400">{course.hours}س</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500 text-sm" />
                    <span className="text-xs text-gray-400">{course.rating}</span>
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-blue-400">
                    ${course.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${course.originalPrice}
                  </span>
                  <span className="text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded">
                    {Math.round(
                      ((course.originalPrice - course.price) /
                        course.originalPrice) *
                        100
                    )}
                    %
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  <FaCheckCircle className="text-sm" />
                  <span className="text-sm">اشترك</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 bg-gray-700 text-gray-200 rounded-lg font-semibold hover:bg-gray-600 transition text-sm"
                >
                  التفاصيل
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 max-w-6xl mx-auto"
        >
          <p className="text-2xl text-gray-400">
            لا توجد كورسات في هذا المستوى حالياً
          </p>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 max-w-6xl mx-auto bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-12 text-center border border-blue-700"
      >
        <h3 className="text-3xl font-bold mb-4 text-white">
          تريد رؤية جميع الكورسات؟
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          استكشف مجموعتنا الكاملة من أكثر من 200 دورة تعليمية في مختلف المجالات
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/courses"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition shadow-lg"
        >
          اطلع على جميع الكورسات
          <FaArrowRight  size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
