"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiGoogle, FiGithub, FiUser, FiCheck } from "react-icons/fi";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState<"weak" | "medium" | "strong" | null>(null);

  const calculatePasswordStrength = (pwd: string) => {
    if (pwd.length < 6) return "weak";
    if (pwd.length < 10 && !/[^a-zA-Z0-9]/.test(pwd)) return "medium";
    return "strong";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setFormData({ ...formData, password: pwd });
    if (pwd) {
      setPasswordStrength(calculatePasswordStrength(pwd));
    } else {
      setPasswordStrength(null);
    }
    if (errors.password) setErrors({ ...errors, password: "" });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "الاسم الكامل مطلوب";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "الاسم يجب أن يكون 3 أحرف على الأقل";
    }

    if (!formData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (formData.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمات المرور غير متطابقة";
    }

    if (!agreedToTerms) {
      newErrors.terms = "يجب الموافقة على الشروط والأحكام";
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
      alert("تم إنشاء الحساب بنجاح! يرجى التحقق من بريدك الإلكتروني");
      setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
      setPasswordStrength(null);
      setAgreedToTerms(false);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 relative overflow-hidden pt-20">
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

      <div className="relative z-10 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 sm:p-10 border border-gray-700 shadow-2xl"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="text-3xl">🎓</div>
                <h1 className="text-3xl font-bold text-blue-400">EduPlatform</h1>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">إنشاء حساب جديد</h2>
              <p className="text-gray-400">انضم إلى مجتمع التعلم الأكبر في العالم العربي</p>
            </motion.div>

            {/* Social Registration */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition border border-gray-600"
              >
                <FiGoogle size={20} />
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
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  الاسم الكامل
                </label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: "" });
                    }}
                    placeholder="محمد علي"
                    className={`w-full pl-10 pr-4 py-3 bg-gray-700 text-white placeholder-gray-500 rounded-lg border-2 transition focus:outline-none ${
                      errors.fullName ? "border-red-500" : "border-gray-600 focus:border-blue-500"
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-2">{errors.fullName}</p>
                )}
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
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
                    value={formData.password}
                    onChange={handlePasswordChange}
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

                {/* Password Strength Indicator */}
                {passwordStrength && (
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width:
                              passwordStrength === "weak"
                                ? "33%"
                                : passwordStrength === "medium"
                                ? "66%"
                                : "100%",
                          }}
                          className={`h-full transition ${
                            passwordStrength === "weak"
                              ? "bg-red-500"
                              : passwordStrength === "medium"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                        />
                      </div>
                      <span
                        className={
                          passwordStrength === "weak"
                            ? "text-red-400"
                            : passwordStrength === "medium"
                            ? "text-yellow-400"
                            : "text-green-400"
                        }
                      >
                        {passwordStrength === "weak"
                          ? "ضعيفة"
                          : passwordStrength === "medium"
                          ? "متوسطة"
                          : "قوية"}
                      </span>
                    </div>
                  </div>
                )}

                {errors.password && (
                  <p className="text-red-400 text-sm mt-2">{errors.password}</p>
                )}
              </motion.div>

              {/* Confirm Password Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  تأكيد كلمة المرور
                </label>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => {
                      setFormData({ ...formData, confirmPassword: e.target.value });
                      if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: "" });
                    }}
                    placeholder="••••••••"
                    className={`w-full pl-10 pr-12 py-3 bg-gray-700 text-white placeholder-gray-500 rounded-lg border-2 transition focus:outline-none ${
                      errors.confirmPassword ? "border-red-500" : "border-gray-600 focus:border-blue-500"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
                  >
                    {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-2">{errors.confirmPassword}</p>
                )}
              </motion.div>

              {/* Terms & Conditions */}
              <motion.div variants={itemVariants}>
                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => {
                        setAgreedToTerms(e.target.checked);
                        if (errors.terms) setErrors({ ...errors, terms: "" });
                      }}
                      className="w-5 h-5 bg-gray-700 border-gray-600 rounded cursor-pointer accent-blue-600"
                    />
                  </div>
                  <span className="text-sm text-gray-400 mt-1">
                    أوافق على{" "}
                    <Link href="#" className="text-blue-400 hover:text-blue-300 transition">
                      الشروط والأحكام
                    </Link>{" "}
                    و{" "}
                    <Link href="#" className="text-blue-400 hover:text-blue-300 transition">
                      سياسة الخصوصية
                    </Link>
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-red-400 text-sm mt-2">{errors.terms}</p>
                )}
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
                    <span>إنشاء حساب</span>
                    <FiArrowRight size={20} />
                  </>
                )}
              </motion.button>
            </form>

            {/* Login Link */}
            <motion.div variants={itemVariants} className="mt-8 text-center border-t border-gray-700 pt-6">
              <p className="text-gray-400">
                هل لديك حساب بالفعل؟{" "}
                <Link
                  href="/login"
                  className="text-blue-400 hover:text-blue-300 font-semibold transition"
                >
                  تسجيل الدخول
                </Link>
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div variants={itemVariants} className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
              {[
                { icon: "📚", text: "200+ دورة" },
                { icon: "👨‍🏫", text: "معلمون خبراء" },
                { icon: "🏆", text: "شهادات رسمية" },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl mb-2">{benefit.icon}</div>
                  <p className="text-xs text-gray-400">{benefit.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Security Notice */}
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-500 text-xs mt-6"
          >
            🔒 بيانات آمنة - نحن نحمي خصوصيتك بأعلى معايير الأمان
          </motion.p>
        </div>
      </div>
    </div>
  );
}
