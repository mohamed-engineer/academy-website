"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "الكورسات",
      links: [
        { label: "جميع الكورسات", href: "/courses" },
        { label: "الكورسات المجانية", href: "#" },
        { label: "الكورسات المتقدمة", href: "#" },
        { label: "الشهادات", href: "#" },
      ],
    },
    {
      title: "عن الموقع",
      links: [
        { label: "من نحن", href: "#" },
        { label: "المدرسين", href: "#teachers" },
        { label: "المدونة", href: "/blog" },
        { label: "الوظائف", href: "#" },
      ],
    },
    {
      title: "الدعم",
      links: [
        { label: "مركز المساعدة", href: "#" },
        { label: "الأسئلة الشائعة", href: "#" },
        { label: "تواصل معنا", href: "#contact" },
        { label: "سياسة الخصوصية", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  const contactInfo = [
    { icon: FiMail, text: "info@eduplatform.com", href: "mailto:info@eduplatform.com" },
    { icon: FiPhone, text: "+966 50 123 4567", href: "tel:+966501234567" },
    { icon: FiMapPin, text: "الرياض، المملكة العربية السعودية", href: "#" },
  ];

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
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white border-t border-gray-800">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-b border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">اشترك في النشرة البريدية</h3>
              <p className="text-gray-300">احصل على آخر الكورسات والعروض مباشرة في بريدك الإلكتروني</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="البريد الإلكتروني..."
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition flex items-center gap-2"
              >
                <FiArrowRight size={20} />
                <span className="hidden sm:inline">اشترك</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🎓</div>
              <h2 className="text-2xl font-bold text-blue-400">EduPlatform</h2>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              منصة تعليمية حديثة تجمع بين أفضل المدرسين والمحتوى العملي الشامل
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-lg font-bold mb-4 text-blue-400">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition flex items-center gap-1"
                    >
                      <span className="text-blue-500">›</span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 py-8 border-y border-gray-800"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={info.href}
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-blue-600/20 transition group"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition">
                  <Icon className="text-blue-400 group-hover:text-white transition" size={24} />
                </div>
                <p className="text-gray-300 hover:text-blue-400 transition">{info.text}</p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Links */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <Link href="#" className="hover:text-blue-400 transition">
                الشروط والأحكام
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="#" className="hover:text-blue-400 transition">
                سياسة الخصوصية
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="#" className="hover:text-blue-400 transition">
                سياسة الكوكيز
              </Link>
            </div>

            {/* Center Info */}
            <div className="text-center text-sm text-gray-400">
              <p>© {currentYear} EduPlatform. جميع الحقوق محفوظة</p>
            </div>

            {/* Payment Methods */}
            <div className="flex justify-end gap-3 flex-wrap">
              <div className="text-xs text-gray-500">طرق الدفع المقبولة:</div>
              <div className="flex gap-2">
                {["💳", "🏦", "📱"].map((icon, i) => (
                  <div key={i} className="text-lg">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-center text-sm text-gray-500"
          >
            تم تطويره بـ ❤️ لتحسين الحياة التعليمية
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
