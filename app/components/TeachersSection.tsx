"use client";

import { motion } from "framer-motion";
import { FaStar, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

const teachers = [
  {
    id: 1,
    name: "أحمد سامي",
    bio: "محاضر متخصص في JavaScript وWeb Development",
    specialty: "JavaScript/Node.js",
    students: 3450,
    rating: 4.9,
    avatar: "👨‍💻",
    courses: 12,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "مريم خالد",
    bio: "خبيرة UI/UX وDesign Systems متخصصة",
    specialty: "UI/UX Design",
    students: 2890,
    rating: 4.8,
    avatar: "👩‍🎨",
    courses: 8,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "علي حسين",
    bio: "React Developer بخبرة 6 سنوات ومحترف",
    specialty: "React/Next.js",
    students: 4100,
    rating: 4.9,
    avatar: "⚛️",
    courses: 15,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "فاطمة عمر",
    bio: "متخصصة في البرمجة بلغة Python والـ Data Science",
    specialty: "Python/Data Science",
    students: 2100,
    rating: 4.7,
    avatar: "🐍",
    courses: 10,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 5,
    name: "محمد النجار",
    bio: "خبير في Full Stack Development والعمارة البرمجية",
    specialty: "Full Stack",
    students: 3200,
    rating: 4.8,
    avatar: "🏗️",
    courses: 14,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 6,
    name: "ليلى عبدالرحمن",
    bio: "متخصصة في Mobile Development والـ Native Apps",
    specialty: "Mobile Dev",
    students: 1800,
    rating: 4.6,
    avatar: "📱",
    courses: 9,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export default function TeachersSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
    <section id="teachers" className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
          فريق الخبراء
        </span>
        <h2 className="text-5xl font-bold text-white mb-4 mt-2">أفضل المدرسين</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          تعلم من أفضل المحاضرين والخبراء في مجال تطوير الويب وتصميم التطبيقات
        </p>
      </motion.div>

      {/* Teachers Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {teachers.map((teacher) => (
          <motion.div
            key={teacher.id}
            variants={itemVariants}
            onHoverStart={() => setHoveredId(teacher.id)}
            onHoverEnd={() => setHoveredId(null)}
            whileHover={{ y: -10 }}
            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition shadow-xl hover:shadow-2xl"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition duration-500"></div>

            {/* Content */}
            <div className="relative p-8">
              {/* Avatar */}
              <motion.div
                animate={hoveredId === teacher.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                className="text-7xl mb-4"
              >
                {teacher.avatar}
              </motion.div>

              {/* Name & Specialty */}
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition">
                {teacher.name}
              </h3>
              <p className="text-blue-400 text-sm font-semibold mb-3">{teacher.specialty}</p>

              {/* Bio */}
              <p className="text-gray-400 text-sm mb-6 line-clamp-2 group-hover:text-gray-300 transition">
                {teacher.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-700">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">{teacher.courses}</p>
                  <p className="text-xs text-gray-500">دورات</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-white">{teacher.students.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">طالب</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" size={16} />
                    <span className="font-bold text-white">{teacher.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500">تقييم</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  href={teacher.social.twitter}
                  className="p-2 bg-gray-700 hover:bg-blue-500 rounded-lg transition text-white"
                >
                  <FaTwitter size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  href={teacher.social.linkedin}
                  className="p-2 bg-gray-700 hover:bg-blue-600 rounded-lg transition text-white"
                >
                  <FaLinkedin size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  href={teacher.social.github}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition text-white"
                >
                  <FaGithub size={18} />
                </motion.a>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-bold transition shadow-lg"
              >
                عرض الدورات
              </motion.button>

              {/* Hover Badge */}
              {hoveredId === teacher.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                >
                  متاح الآن
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-gray-400 mb-6">
          هل تريد أن تصبح مدرساً معنا؟
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-bold transition shadow-lg"
        >
          انضم إلى فريقنا
        </motion.button>
      </motion.div>
    </section>
  );
}
