"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative w-full h-[90vh] flex flex-col justify-center items-center 
        text-center overflow-hidden 
        bg-gradient-to-b from-[#0d0f12] via-[#12151a] to-[#0d0f12]
        text-white px-6
      "
    >
      {/* Floating Background Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-32 left-20 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2.3 }}
        className="absolute bottom-20 right-20 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl"
      />

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
      >
        ابدأ رحلة تعلمك  
        <span className="block text-blue-400">نحو الاحتراف 🚀</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10"
      >
        تعلّم أحدث التقنيات وطور مهاراتك على أيدي مدربين محترفين  
        عبر منصة تعليمية حديثة وسهلة الاستخدام.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="flex gap-6"
      >
        <motion.a
          href="/courses"
          className="
            bg-blue-600 hover:bg-blue-700 
            px-8 py-4 rounded-xl shadow-lg 
            text-lg font-semibold transition
          "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ابدأ التعلم الآن
        </motion.a>

        <motion.a
          href="#teachers"
          className="
            border border-gray-500 hover:border-blue-500 text-gray-300 hover:text-blue-400
            px-8 py-4 rounded-xl text-lg transition
          "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          تعرف على المدرسين
        </motion.a>
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 text-gray-500"
      >
        🌙
      </motion.div>
    </section>
  );
}
