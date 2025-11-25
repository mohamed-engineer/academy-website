"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold mb-6 text-blue-700"
      >
        تعلّم من أفضل المدرسين بجودة عالية
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-gray-600 text-xl mb-10"
      >
        ملايين الطلاب يطورون مهاراتهم معنا يوميًا
      </motion.p>
    </section>
  );
}
