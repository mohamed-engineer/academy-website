"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSearch, FiBell, FiUser } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "الرئيسية", icon: "🏠" },
    { href: "/courses", label: "الكورسات", icon: "📚" },
    { href: "#teachers", label: "المدرسين", icon: "👨‍🏫" },
    { href: "#", label: "المدونة", icon: "📝" },
    { href: "#", label: "تواصل معنا", icon: "💬" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md transition-all duration-300
        ${scrolled 
          ? "bg-gray-900/95 shadow-lg" 
          : "bg-gray-900/80"
        }
        border-b border-gray-700
        text-white
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="text-3xl">🎓</div>
          <Link href="/" className="text-xl sm:text-2xl font-bold tracking-wide text-blue-400 hover:text-blue-300 transition">
            EduPlatform
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-1 text-base">
          {menuItems.slice(0, -1).map((item) => (
            <motion.div key={item.href}>
              <Link
                href={item.href}
                className="
                  relative px-4 py-2 text-gray-300 hover:text-blue-400 
                  transition group rounded-lg hover:bg-gray-800/50
                "
              >
                <span className="flex items-center gap-1">
                  {item.label}
                </span>
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Bar - Desktop */}
          <motion.div 
            className="hidden md:flex items-center bg-gray-800 rounded-lg px-3 py-2 gap-2 border border-gray-700 hover:border-blue-500 transition"
            animate={{ width: searchOpen ? 250 : 120 }}
          >
            <FiSearch className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="البحث في الكورسات..."
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
              className="bg-transparent text-white outline-none text-sm flex-1 placeholder-gray-500"
            />
          </motion.div>

          {/* Notification Icon */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block relative p-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition"
          >
            <FiBell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </motion.button>

          {/* User Profile - Desktop */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block p-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition"
          >
            <FiUser size={20} />
          </motion.button>

          {/* CTA Button - Desktop */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/courses"
            className="
              hidden md:block
              bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600
              text-white px-6 py-2 rounded-lg
              transition shadow-lg font-semibold text-sm
            "
          >
            ابدأ التعلم
          </motion.a>

          {/* Mobile Menu Icon */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 text-white hover:bg-gray-800 rounded-lg transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden flex flex-col border-t border-gray-700 bg-gray-800/50 backdrop-blur-sm"
        >
          {/* Mobile Search */}
          <div className="px-4 pt-3 pb-2">
            <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2 gap-2 border border-gray-600">
              <FiSearch className="text-gray-400" size={18} />
              <input
                type="text"
                placeholder="البحث..."
                className="bg-transparent text-white outline-none text-sm flex-1 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Menu Items */}
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className="
                  flex items-center gap-3 px-4 py-3 text-gray-300 
                  hover:text-blue-400 hover:bg-gray-700 transition border-b border-gray-700
                "
                onClick={() => setOpen(false)}
              >
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </Link>
            </motion.div>
          ))}

          {/* Mobile CTA */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            href="/courses"
            onClick={() => setOpen(false)}
            className="
              m-4 bg-gradient-to-r from-blue-600 to-blue-500 
              hover:from-blue-700 hover:to-blue-600
              text-white text-center py-3 rounded-lg
              transition shadow-lg font-semibold
            "
          >
            ابدأ التعلم الآن
          </motion.a>
        </motion.div>
      )}
    </motion.header>
  );
}
