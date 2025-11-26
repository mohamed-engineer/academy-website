"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiArrowRight, FiCheck, FiPlay } from "react-icons/fi";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  
  // Parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Mouse Move Effect
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX / 100, y: e.clientY / 100 });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const features = [
    { icon: "🎓", text: "شهادات معترف بها عالمياً" },
    { icon: "⚡", text: "تعلم بسرعتك الخاصة" },
    { icon: "💬", text: "دعم من فريق الخبراء" },
  ];

  const stats = [
    { number: "50K+", label: "طالب نشط" },
    { number: "200+", label: "دورة متاحة" },
    { number: "4.8★", label: "تقييم متوسط" },
  ];

  return (
    <div>
    <section
      className="
      relative min-h-[120vh] w-full overflow-hidden select-none
      bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950
      text-white
      "
      >
      {/* Animated Background Gradient Blobs */}
      <motion.div
        style={{ x: mouse.x * 20, y: mouse.y * 20 }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{ x: -mouse.x * 20, y: -mouse.y * 20 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 50 0 L 0 0 0 50' fill='none' stroke='%23003d99' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
        backgroundSize: '50px 50px'
      }} />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-gray-300">🚀 ابدأ تعلمك مجاناً اليوم</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
            <span className="text-white">ابدأ رحلتك نحو</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              الاحتراف والتميز
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            تعلم تقنيات العصر مع أفضل المدربين والخبراء. منصة تعليمية حديثة وفائقة السرعة مع محتوى عملي وشامل.
          </p>
          
          {/* Quick Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {features.map((feature, index) => (
              <motion.div
              key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 text-gray-300"
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="/courses"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-xl shadow-xl text-white font-bold text-lg transition"
          >
            <span>ابدأ التعلم الآن</span>
            <FiArrowRight size={20} />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-blue-500 hover:bg-blue-500/10 rounded-xl text-white font-bold text-lg transition"
            >
            <FiPlay size={20} />
            <span>شاهد فيديو توضيحي</span>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-6 mb-16 text-center"
          >
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <p className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">{stat.number}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative"
          style={{
            rotateX: mouse.y * 0.5,
            rotateY: -mouse.x * 0.5,
          }}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.6, duration: 0.8 }}
          >
          {/* Image Container with Glow */}
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-2xl rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 overflow-hidden shadow-2xl">
              <Image
                src="/1.png"
                alt="Platform Interface"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
                />
              
              {/* Overlay Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-6 left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
              >
                ✨ تحديثات يومية
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-400 text-sm">اسحب للأسفل</p>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-blue-400 rounded-full"
              />
          </div>
        </div>
      </motion.div>
    </section>
    </div>
  );
}
