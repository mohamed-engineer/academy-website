"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaStar, FaUsers, FaClock, FaCheckCircle } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Next.js من الصفر",
    desc: "تعلم بناء مواقع حديثة باستخدام أحدث تقنيات Next.js",
    level: "مبتدئ",
    students: 2450,
    hours: 24,
    rating: 4.8,
    price: 199,
    originalPrice: 299,
    tags: ["React", "Next.js", "TypeScript"],
    image: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "JavaScript احترافي",
    desc: "إتقان اللغة من البداية للنهاية مع أمثلة عملية",
    level: "متوسط",
    students: 3100,
    hours: 32,
    rating: 4.9,
    price: 249,
    originalPrice: 349,
    tags: ["JavaScript", "ES6+", "الخوارزميات"],
    image: "bg-gradient-to-br from-yellow-500 to-yellow-600",
  },
  {
    id: 3,
    title: "React متقدم",
    desc: "Hooks, Context, State Management وأنماط عملية",
    level: "متقدم",
    students: 1800,
    hours: 28,
    rating: 4.7,
    price: 279,
    originalPrice: 399,
    tags: ["React", "Hooks", "Performance"],
    image: "bg-gradient-to-br from-cyan-500 to-cyan-600",
  },
  {
    id: 4,
    title: "Tailwind CSS من الأساس",
    desc: "تصميم واجهات مستجيبة بسرعة وكفاءة",
    level: "مبتدئ",
    students: 4200,
    hours: 16,
    rating: 4.6,
    price: 129,
    originalPrice: 199,
    tags: ["CSS", "Design", "Tailwind"],
    image: "bg-gradient-to-br from-pink-500 to-pink-600",
  },
  {
    id: 5,
    title: "TypeScript للمحترفين",
    desc: "أنواع قوية وتطبيقات آمنة مع أفضل الممارسات",
    level: "متقدم",
    students: 1600,
    hours: 20,
    rating: 4.8,
    price: 229,
    originalPrice: 329,
    tags: ["TypeScript", "OOP", "Design Patterns"],
    image: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  {
    id: 6,
    title: "Web Performance & SEO",
    desc: "تحسين أداء المواقع وتصدر نتائج البحث",
    level: "متوسط",
    students: 980,
    hours: 18,
    rating: 4.9,
    price: 199,
    originalPrice: 279,
    tags: ["Performance", "SEO", "Optimization"],
    image: "bg-gradient-to-br from-green-500 to-green-600",
  },
];

export default function CoursesPage() {
  const [filter, setFilter] = useState("الكل");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 px-6 border-b border-gray-700">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-4">كل الكورسات</h1>
          <p className="text-xl text-blue-200">
            اختر من مجموعة واسعة من الدورات التعليمية المتخصصة
          </p>
          <p className="text-sm text-blue-300 mt-2">
            {courses.length} كورس متاح • تعلم حسب سرعتك
          </p>
        </motion.div>
      </div>

      {/* Filter Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
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
                  : "bg-gray-800 text-gray-200 border-2 border-gray-700 hover:border-blue-500 hover:bg-gray-700"
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
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredId(course.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -10 }}
              className="group bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden cursor-pointer border border-gray-700 hover:border-blue-500"
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
                    <p className="font-semibold">{course.level}</p>
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title */}
                <h2 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition">
                  {course.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {course.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-900 text-blue-300 px-3 py-1 rounded-full"
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
                      <span className="text-xs text-gray-400">
                        {course.hours}س
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500 text-sm" />
                      <span className="text-xs text-gray-400">
                        {course.rating}
                      </span>
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
                    <span className="text-xs bg-red-900 text-red-300 px-2 py-1 rounded">
                      {Math.round(
                        ((course.originalPrice - course.price) /
                          course.originalPrice) *
                          100
                      )}
                      % خصم
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
                    اشترك الآن
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition"
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
            className="text-center py-20"
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
          className="mt-20 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12 text-center border-2 border-blue-700"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            لم تجد الكورس المناسب؟
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            يمكنك التواصل معنا للحصول على توصيات شخصية أو اقتراح كورس جديد
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition shadow-lg"
          >
            تواصل معنا
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
