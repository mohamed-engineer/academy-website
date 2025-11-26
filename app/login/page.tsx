"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiGithub } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }
    
    if (!password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("تم تسجيل الدخول بنجاح!");
    }, 2000);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
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

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex flex-col justify-center"
            >
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">🎓</div>
                    <h1 className="text-4xl font-bold text-blue-400">EduPlatform</h1>
                  </div>
                  <p className="text-gray-400 text-lg">
                    انضم إلى آلاف الطلاب الذين يتعلمون ويتطورون معنا
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: "📚", title: "محتوى غني", desc: "أكثر من 200 دورة تعليمية شاملة" },
                    { icon: "👨‍🏫", title: "معلمون خبراء", desc: "تعلم من أفضل المتخصصين" },
                    { icon: "🏆", title: "شهادات معترف بها", desc: "احصل على شهادات رسمية" },
                    { icon: "⏰", title: "تعلم في وقتك", desc: "ادرس حسب سرعتك الخاصة" },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-4"
                    >
                      <div className="text-3xl">{feature.icon}</div>
                      <div>
                        <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <p className="text-gray-400 text-sm mb-4">انضم إلى مجتمعنا</p>
                  <div className="flex gap-3">
                    {["50K+", "200+", "4.8★"].map((stat, i) => (
                      <div key={i} className="flex-1 bg-gray-800/50 p-3 rounded-lg text-center">
                        <p className="text-blue-400 font-bold">{stat}</p>
                        <p className="text-xs text-gray-400">
                          {i === 0 ? "طالب نشط" : i === 1 ? "دورة متاحة" : "تقييم"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Login Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center"
            >
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 sm:p-10 border border-gray-700 shadow-2xl"
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">تسجيل الدخول</h2>
                  <p className="text-gray-400">أهلاً بك في EduPlatform</p>
                </div>

                {/* Social Login */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-4 mb-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition border border-gray-600"
                  >
                    <FaGoogle size={20} />
                    <span className="hidden sm:inline">Google</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition border border-gray-600"
                  >
                    <FiGithub size={20} />
                    <span className="hidden sm:inline">GitHub</span>
                  </motion.button>
                </motion.div>

                {/* Divider */}
                <motion.div variants={itemVariants} className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-800 text-gray-400">أو</span>
                  </div>
                </motion.div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      البريد الإلكتروني
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="your@email.com"
                        className={`w-full pl-10 pr-4 py-3 bg-gray-700 text-white placeholder-gray-500 rounded-lg border-2 transition focus:outline-none ${
                          errors.email ? "border-red-500" : "border-gray-600 focus:border-blue-500"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                    )}
                  </motion.div>

                  {/* Password Field */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      كلمة المرور
                    </label>
                    <div className="relative">
                      <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (errors.password) setErrors({ ...errors, password: undefined });
                        }}
                        placeholder="••••••••"
                        className={`w-full pl-10 pr-12 py-3 bg-gray-700 text-white placeholder-gray-500 rounded-lg border-2 transition focus:outline-none ${
                          errors.password ? "border-red-500" : "border-gray-600 focus:border-blue-500"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
                      >
                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-400 text-sm mt-2">{errors.password}</p>
                    )}
                  </motion.div>

                  {/* Remember & Forgot */}
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-between text-sm"
                  >
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 bg-gray-700 border-gray-600 rounded cursor-pointer"
                      />
                      <span className="text-gray-400 hover:text-gray-300 transition">
                        تذكرني
                      </span>
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      هل نسيت كلمة المرور؟
                    </Link>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-bold transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <span>تسجيل الدخول</span>
                        <FiArrowRight size={20} />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Sign Up Link */}
                <motion.div variants={itemVariants} className="mt-8 text-center border-t border-gray-700 pt-6">
                  <p className="text-gray-400">
                    ليس لديك حساب؟{" "}
                    <Link
                      href="/signup"
                      className="text-blue-400 hover:text-blue-300 font-semibold transition"
                    >
                      إنشاء حساب جديد
                    </Link>
                  </p>
                </motion.div>
              </motion.div>

              {/* Security Notice */}
              <motion.p
                variants={itemVariants}
                className="text-center text-gray-500 text-xs mt-6"
              >
                🔒 بيانات آمنة - نحن لا نشارك معلوماتك مع أطراف ثالثة
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
