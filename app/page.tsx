"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center pt-20">
      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        منصة تعليمية متطورة لك
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-gray-600 text-xl mb-10"
      >
        تعلم أفضل المهارات والتقنيات بأعلى جودة.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/courses"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg shadow-lg hover:bg-blue-700 transition"
        >
          تصفح الكورسات
        </Link>
      </motion.div>
    </div>
  );
}
