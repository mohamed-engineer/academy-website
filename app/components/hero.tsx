"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

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

  return (
    <section
      className="
        relative h-[100vh] w-full overflow-hidden select-none
        bg-gradient-to-b from-[#0d0f12] via-[#111418] to-[#0d0f12]
        text-white flex flex-col items-center justify-center
      "
    >

      {/* Floating Background Glow */}
      <motion.div
        style={{ x: mouse.x, y: mouse.y }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"
      />

      <motion.div
        style={{ x: -mouse.x, y: -mouse.y }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"
      />

      {/* Parallax Title */}
      <motion.h1
        style={{ y: y1 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold text-center leading-tight"
      >
        ابدأ رحلتك نحو  
        <span className="text-blue-400 block">الاحتراف 🎓🔥</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        style={{ y: y2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-gray-300 mt-6 text-center text-lg md:text-2xl max-w-3xl"
      >
        تعلم تقنيات العصر مع أفضل المدربين، وبمنصة حديثة فائقة السرعة.
        كل ما تحتاجه لرفع مستواك — في مكان واحد.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-6 mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/courses"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg text-xl"
        >
          ابدأ التعلم الآن
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#teachers"
          className="px-8 py-4 border border-gray-500 hover:border-blue-500 hover:text-blue-400 rounded-xl text-xl"
        >
          تعرف على المدرسين
        </motion.a>
      </motion.div>

      {/* Laptop Image - 3D Tilt + Mouse Move */}
      <motion.div
        className="mt-16"
        style={{
          rotateX: mouse.y,
          rotateY: -mouse.x,
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Image
          src="/laptop.png" // حط اللابتوب بتاعك هنا
          alt="Laptop"
          width={750}
          height={500}
          className="drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
