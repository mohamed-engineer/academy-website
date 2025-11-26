"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiHome, FiBookOpen, FiUsers, FiFileText, FiMail } from "react-icons/fi";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "/", icon: FiHome },
    { label: "الكورسات", href: "/courses", icon: FiBookOpen },
    { 
      label: "المدرسين", 
      href: "#teachers", 
      icon: FiUsers,
      submenu: [
        { label: "جميع المدرسين", href: "#all-teachers" },
        { label: "المتخصصون", href: "#specialists" },
      ]
    },
    { label: "المدونة", href: "/blog", icon: FiFileText },
    { label: "تواصل معنا", href: "#contact", icon: FiMail },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`
          w-full text-white transition-all duration-300
          ${isFixed 
            ? "fixed top-0 left-0 z-40 bg-gradient-to-r from-blue-700 to-blue-600 shadow-2xl" 
            : "relative bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <div className="text-2xl sm:text-3xl">🎓</div>
            <Link href="/" className="text-xl sm:text-2xl font-bold tracking-wide hover:text-blue-100 transition">
              EduPlatform
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <div key={link.label} className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg
                        hover:bg-white/20 transition-all duration-300
                        font-semibold text-sm
                      `}
                    >
                      <Icon size={18} />
                      {link.label}
                      {link.submenu && <FiChevronDown size={16} />}
                    </Link>
                  </motion.div>

                  {/* Desktop Submenu */}
                  {link.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="
                        absolute left-0 mt-0 w-48 bg-blue-700 rounded-lg shadow-xl
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                        transition-all duration-200 py-2
                      "
                    >
                      {link.submenu.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="
                            block px-4 py-2 text-sm hover:bg-white/20 transition
                            border-r-4 border-transparent hover:border-white
                          "
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Actions - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/courses"
              className="
                px-6 py-2 bg-white text-blue-600 rounded-lg font-bold
                hover:bg-blue-50 transition shadow-lg
              "
            >
              اشترك الآن
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 text-white hover:bg-white/20 rounded-lg transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Spacer when navbar is fixed */}
      {isFixed && <div className="h-16 sm:h-20"></div>}

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={`
            lg:hidden w-full bg-gradient-to-b from-blue-600 to-blue-700 
            border-b-2 border-blue-500 shadow-xl
            ${isFixed ? "fixed top-16 left-0 z-30" : "relative"}
          `}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <div key={link.label}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => setActiveDropdown(
                        activeDropdown === link.label ? null : link.label
                      )}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-lg
                        hover:bg-white/20 transition font-semibold text-left
                        ${activeDropdown === link.label ? "bg-white/20" : ""}
                      `}
                    >
                      <Icon size={20} />
                      {link.label}
                      {link.submenu && (
                        <FiChevronDown 
                          size={18} 
                          className={`ml-auto transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`}
                        />
                      )}
                    </button>
                  </motion.div>

                  {/* Mobile Submenu */}
                  {link.submenu && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pl-4 bg-white/10 rounded-lg mx-2 mt-1"
                    >
                      {link.submenu.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="
                            block px-4 py-2 text-sm text-gray-100
                            hover:text-white hover:pl-6 transition-all
                            border-r-4 border-transparent hover:border-white
                          "
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}

                  {!link.submenu && (
                    <Link
                      href={link.href}
                      className="
                        block px-4 py-3 text-sm hover:bg-white/20 rounded-lg
                        transition hover:text-gray-100
                      "
                      onClick={() => setMobileOpen(false)}
                    >
                      &nbsp;
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Mobile CTA Button */}
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 + 0.1 }}
              href="/courses"
              onClick={() => setMobileOpen(false)}
              className="
                block w-full mt-4 px-6 py-3 bg-white text-blue-600 rounded-lg 
                font-bold text-center hover:bg-blue-50 transition shadow-lg
              "
            >
              اشترك الآن
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
}
