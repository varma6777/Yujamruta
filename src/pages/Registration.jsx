import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Clock, 
  Calendar, 
  Monitor, 
  CreditCard, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  User, 
  Users, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Globe, 
  Send, 
  UserCheck, 
  Award, 
  Target, 
  HeartPulse, 
  ArrowLeft,
  MessageCircle
} from "lucide-react";
import { TraditionalMandala, FloatingLeaf } from "../components/BotanicalElements";
import { BRAND_INFO } from "../data/siteData";
import { useLanguage } from "../context/LanguageContext";

export default function Registration() {
  const { language, t } = useLanguage();
  const isKn = language === "kn";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    age: "",
    yogaClass: isKn ? "ಆನ್‌ಲೈನ್ ಲೈವ್ ಮುಂಜಾನೆ ಬ್ಯಾಚ್ (ಬೆಳಗ್ಗೆ 6:30 – 7:30)" : "Online Live Morning Batch (6:30 AM – 7:30 AM)",
    address: "",
    phoneNumber: "",
    whatsappNumber: "",
    sameAsPhone: false,
    experience: isKn ? "ಯಾವುದೇ ಅನುಭವವಿಲ್ಲ (ಸಂಪೂರ್ಣ ಆರಂಭಿಕ)" : "No Experience (Complete Beginner)",
    mainGoal: isKn ? "ನಮ್ಯತೆ ಮತ್ತು ಭಂಗಿ ತಿದ್ದುಪಡಿ" : "Flexibility & Posture Correction",
    healthIssues: "",
    language: isKn ? "ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್ (Bilingual)" : "Kannada & English (Bilingual)",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "sameAsPhone") {
      setFormData((prev) => ({
        ...prev,
        sameAsPhone: checked,
        whatsappNumber: checked ? prev.phoneNumber : prev.whatsappNumber,
      }));
      if (errors.whatsappNumber) {
        setErrors((prev) => ({ ...prev, whatsappNumber: "" }));
      }
      return;
    }

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "phoneNumber" && prev.sameAsPhone) {
        updated.whatsappNumber = value;
      }
      return updated;
    });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validatePhone = (num) => {
    const cleaned = (num || "").replace(/\D/g, "");
    return cleaned.length === 10 || (cleaned.length === 12 && cleaned.startsWith("91"));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.studentName.trim() || formData.studentName.trim().length < 2) {
      newErrors.studentName = isKn 
        ? "ದಯವಿಟ್ಟು ವಿದ್ಯಾರ್ಥಿಯ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ (ಕನಿಷ್ಠ 2 ಅಕ್ಷರಗಳು)."
        : "Please enter the student's full name (at least 2 letters).";
    }

    const ageNum = parseInt(formData.age, 10);
    if (!formData.age || isNaN(ageNum) || ageNum < 5 || ageNum > 99) {
      newErrors.age = isKn 
        ? "ದಯವಿಟ್ಟು 5 ರಿಂದ 99 ರ ನಡುವಿನ ಮಾನ್ಯ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ."
        : "Please enter a valid age between 5 and 99.";
    }

    if (!formData.yogaClass) {
      newErrors.yogaClass = isKn ? "ದಯವಿಟ್ಟು ತರಗತಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ." : "Please select a preferred class / batch.";
    }

    if (!formData.address.trim() || formData.address.trim().length < 5) {
      newErrors.address = isKn ? "ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ." : "Please provide your residential address or city/area.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = isKn ? "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಅಗತ್ಯವಿದೆ." : "Phone number is required for class updates.";
    } else if (!validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = isKn ? "ದಯವಿಟ್ಟು 10 ಅಂಕಿಗಳ ಮಾನ್ಯ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ." : "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = isKn ? "ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ ಅಗತ್ಯವಿದೆ." : "WhatsApp number is required to receive daily live class links.";
    } else if (!validatePhone(formData.whatsappNumber)) {
      newErrors.whatsappNumber = isKn ? "ದಯವಿಟ್ಟು 10 ಅಂಕಿಗಳ ಮಾನ್ಯ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ." : "Please enter a valid 10-digit WhatsApp number.";
    }

    if (!formData.experience) {
      newErrors.experience = isKn ? "ಹಿಂದಿನ ಅನುಭವ ಆಯ್ಕೆಮಾಡಿ." : "Please select previous yoga experience.";
    }

    if (!formData.mainGoal) {
      newErrors.mainGoal = isKn ? "ಆರೋಗ್ಯ ಗುರಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ." : "Please select your primary wellness goal.";
    }

    if (!formData.language) {
      newErrors.language = isKn ? "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ." : "Please select your preferred language.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      const formEl = document.getElementById("main-form-card");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    const cleanPhone = formData.phoneNumber.replace(/\D/g, "");
    const cleanWa = formData.whatsappNumber.replace(/\D/g, "");

    const message = isKn
      ? `*ಆನ್‌ಲೈನ್ ಯೋಗ ನೋಂದಣಿ - ಯುಜಾಮೃತ*
====================================
1. *ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು:* ${formData.studentName.trim()}
2. *ಪೋಷಕರ ಹೆಸರು:* ${formData.parentName.trim() || "ಅನ್ವಯಿಸುವುದಿಲ್ಲ"}
3. *ವಯಸ್ಸು:* ${formData.age} ವರ್ಷಗಳು
4. *ಆಯ್ದ ತರಗತಿ:* ${formData.yogaClass}
5. *ವಿಳಾಸ:* ${formData.address.trim()}
6. *ಮೊಬೈಲ್ ಸಂಖ್ಯೆ:* ${cleanPhone}
7. *ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ:* ${cleanWa}
8. *ಯೋಗ ಅನುಭವ:* ${formData.experience}
9. *ಆರೋಗ್ಯ ಗುರಿ:* ${formData.mainGoal}
10. *ದೈಹಿಕ ತೊಂದರೆಗಳು:* ${formData.healthIssues.trim() || "ಏನೂ ಇಲ್ಲ"}
11. *ಆದ್ಯತೆಯ ಭಾಷೆ:* ${formData.language}
====================================
_ನಮಸ್ಕಾರ ಗುರುಗಳೇ, ನಾನು ಯುಜಾಮೃತ ಯೋಗ ತರಗತಿಗೆ ಪ್ರವೇಶ ಪಡೆಯಲು ಇಷ್ಟಪಡುತ್ತೇನೆ. ದಯವಿಟ್ಟು ದೃಢೀಕರಿಸಿ._`
      : `*YUJAMRUTHA YOGA - STUDENT REGISTRATION*
====================================
1. *Student Name:* ${formData.studentName.trim()}
2. *Parent's Name:* ${formData.parentName.trim() || "N/A (Adult Student)"}
3. *Age:* ${formData.age} years
4. *Selected Class:* ${formData.yogaClass}
5. *Address:* ${formData.address.trim()}
6. *Phone Number:* ${cleanPhone}
7. *WhatsApp Number:* ${cleanWa}
8. *Yoga Experience:* ${formData.experience}
9. *Main Goal:* ${formData.mainGoal}
10. *Injury / Health Issues:* ${formData.healthIssues.trim() || "None"}
11. *Preferred Language:* ${formData.language}
====================================
_Namaste Master Abhinandan! I would like to complete my admission for Yujamrutha Yoga._`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BRAND_INFO.rawPhone}?text=${encoded}`;

    setIsSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-cream min-h-screen">
      
      {/* Top Header */}
      <section className="bg-forest-950 text-cream py-12 relative overflow-hidden border-b-2 border-honey/30">
        <div className="absolute inset-0 bg-mandala opacity-20 pointer-events-none"></div>
        <FloatingLeaf className="top-6 left-8" delay="0s" />
        <FloatingLeaf className="bottom-6 right-12" delay="2s" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Link 
              to="/yoga" 
              className="inline-flex items-center gap-1.5 text-xs text-honey-light hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isKn ? "ಯೋಗ ಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ" : "Back to Yoga Overview"}</span>
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/20 border border-honey/40 text-honey-light text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("yoga_reg_badge")}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            {isKn ? "ಯುಜಾಮೃತ ಯೋಗ" : "YUJAMRUTHA YOGA"}
          </h1>
          <p className="font-decorative italic text-2xl sm:text-3xl text-honey-glow font-medium mb-3">
            {t("yoga_reg_title")}
          </p>
          <p className="text-xs sm:text-sm text-cream/85 max-w-xl mx-auto leading-relaxed font-light">
            {t("yoga_reg_subtitle")}
          </p>

          {/* Quick Info Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
            <div className="px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-700 text-cream/90 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-honey" />
              <span>{isKn ? "ಸಮಯ: ಬೆಳಗ್ಗೆ 6:30 – 7:30" : "Timing: 6:30 AM – 7:30 AM"}</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-700 text-cream/90 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-honey" />
              <span>{isKn ? "ವಾರದಲ್ಲಿ 5 ದಿನಗಳು (ಸೋಮ – ಶುಕ್ರ)" : "5 Days / Week (Mon – Fri)"}</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-honey text-forest-950 font-bold flex items-center gap-1.5 shadow-sm">
              <span>{isKn ? "ಶುಲ್ಕ: ₹500 ಪ್ರವೇಶ + ₹400/ತಿಂಗಳು" : "Fee: ₹500 Reg + ₹400/month"}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Registration Form */}
      <section className="py-14 sm:py-20 relative">
        <TraditionalMandala className="absolute top-10 left-8" size={320} />
        <TraditionalMandala className="absolute bottom-10 right-8" size={320} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div id="main-form-card" className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-elevated border-2 border-honey/40 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-forest via-honey to-forest"></div>

            {isSubmitted && (
              <div className="mb-8 p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-900 flex items-start gap-3.5 shadow-sm animate-fadeIn">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-sm space-y-1">
                  <p className="font-bold text-base text-emerald-950">
                    {isKn ? "ನೋಂದಣಿ ಸಿದ್ಧಗೊಂಡಿದೆ!" : "Registration Details Ready!"}
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-800">
                    {t("yoga_reg_success")}
                  </p>
                </div>
              </div>
            )}

            {Object.keys(errors).length > 0 && (
              <div className="mb-8 p-4 rounded-2xl bg-red-50 border border-red-300 text-red-800 flex items-start gap-3 text-sm">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">
                    {isKn ? "ದಯವಿಟ್ಟು ಕೆಳಗೆ ಅಗತ್ಯ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ." : "Please complete the required fields marked in red below."}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Student Name & Parent's Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                    {t("yoga_field_student_name")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-honey">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      placeholder={t("yoga_field_student_name_ph")}
                      className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white ${
                        errors.studentName ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-stone-200 focus:border-honey"
                      }`}
                    />
                  </div>
                  {errors.studentName && (
                    <p className="text-xs text-red-600 mt-1.5">{errors.studentName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                    {t("yoga_field_parent_name")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-honey">
                      <Users className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder={t("yoga_field_parent_name_ph")}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-stone-200 text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white focus:border-honey"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Age & Class Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                    {t("yoga_field_age")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-honey">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder={t("yoga_field_age_ph")}
                      min="5"
                      max="99"
                      className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white ${
                        errors.age ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-stone-200 focus:border-honey"
                      }`}
                    />
                  </div>
                  {errors.age && (
                    <p className="text-xs text-red-600 mt-1.5">{errors.age}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                    {t("yoga_field_class")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-honey">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <select
                      name="yogaClass"
                      value={formData.yogaClass}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-stone-200 text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white focus:border-honey text-forest font-medium"
                    >
                      <option value={isKn ? "ಆನ್‌ಲೈನ್ ಲೈವ್ ಮುಂಜಾನೆ ಬ್ಯಾಚ್ (ಬೆಳಗ್ಗೆ 6:30 – 7:30)" : "Online Live Morning Batch (6:30 AM – 7:30 AM)"}>
                        {isKn ? "ಆನ್‌ಲೈನ್ ಲೈವ್ ಮುಂಜಾನೆ ಬ್ಯಾಚ್ (ಬೆಳಗ್ಗೆ 6:30 – 7:30) [ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ]" : "Online Live Morning Batch (6:30 AM – 7:30 AM) [Recommended]"}
                      </option>
                      <option value={isKn ? "ಆರಂಭಿಕ ಯೋಗ ಬುನಾದಿ" : "Beginner Yoga Foundation"}>
                        {isKn ? "ಆರಂಭಿಕ ಯೋಗ ಬುನಾದಿ (ಸರಳ ಆಸನಗಳು ಮತ್ತು ಉಸಿರಾಟ)" : "Beginner Yoga Foundation"}
                      </option>
                      <option value={isKn ? "ಪ್ರಾಣಾಯಾಮ ಮತ್ತು ಧ್ಯಾನ" : "Pranayama & Mindful Meditation"}>
                        {isKn ? "ಪ್ರಾಣಾಯಾಮ ಮತ್ತು ಧ್ಯಾನ" : "Pranayama & Mindful Meditation"}
                      </option>
                      <option value={isKn ? "ಮುಂದುವರಿದ ಆಸನ ಮತ್ತು ಸಮತೋಲನ" : "Advanced Asana & Hand Balance Training"}>
                        {isKn ? "ಮುಂದುವರಿದ ಆಸನ ಮತ್ತು ಸಮತೋಲನ" : "Advanced Asana & Hand Balance Training"}
                      </option>
                      <option value={isKn ? "ಯೋಗ ಚಿಕಿತ್ಸೆ (ಬೆನ್ನುನೋವು / ಕುತ್ತಿಗೆ ನೋವು)" : "Therapeutic Yoga (Back Pain / Posture Correction)"}>
                        {isKn ? "ಯೋಗ ಚಿಕಿತ್ಸೆ (ಬೆನ್ನುನೋವು / ಕುತ್ತಿಗೆ ನೋವು)" : "Therapeutic Yoga (Back Pain / Posture Correction)"}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                  {t("yoga_field_address")}
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 text-honey pointer-events-none">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder={t("yoga_field_address_ph")}
                    className={`w-full pl-11 pr-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white ${
                      errors.address ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-stone-200 focus:border-honey"
                    }`}
                  ></textarea>
                </div>
                {errors.address && (
                  <p className="text-xs text-red-600 mt-1.5">{errors.address}</p>
                )}
              </div>

              {/* Row 4: Phone & WhatsApp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                    {t("yoga_field_phone")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-honey">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder={t("yoga_field_phone_ph")}
                      className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white ${
                        errors.phoneNumber ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-stone-200 focus:border-honey"
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-xs text-red-600 mt-1.5">{errors.phoneNumber}</p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-forest">
                      {t("yoga_field_whatsapp")}
                    </label>
                    <label className="inline-flex items-center gap-1.5 text-xs text-forest cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="sameAsPhone"
                        checked={formData.sameAsPhone}
                        onChange={handleInputChange}
                        className="rounded text-honey focus:ring-honey h-3.5 w-3.5 cursor-pointer"
                      />
                      <span className="text-[11px] font-medium text-earth-light">{t("yoga_same_as_phone")}</span>
                    </label>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-600">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      placeholder={t("yoga_field_whatsapp_ph")}
                      className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white ${
                        errors.whatsappNumber ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-stone-200 focus:border-honey"
                      }`}
                    />
                  </div>
                  {errors.whatsappNumber && (
                    <p className="text-xs text-red-600 mt-1.5">{errors.whatsappNumber}</p>
                  )}
                </div>
              </div>

              {/* Row 5: Experience & Goal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                    {t("yoga_field_experience")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-honey">
                      <Award className="w-5 h-5" />
                    </div>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-stone-200 text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white focus:border-honey text-forest"
                    >
                      <option value={isKn ? "ಯಾವುದೇ ಅನುಭವವಿಲ್ಲ (ಸಂಪೂರ್ಣ ಆರಂಭಿಕ)" : "No Experience (Complete Beginner)"}>
                        {isKn ? "ಯಾವುದೇ ಅನುಭವವಿಲ್ಲ (ಸಂಪೂರ್ಣ ಆರಂಭಿಕ)" : "No Experience (Complete Beginner)"}
                      </option>
                      <option value={isKn ? "ಆರಂಭಿಕ ಹಂತ (6 ತಿಂಗಳಿಗಿಂತ ಕಡಿಮೆ)" : "Beginner (Less than 6 months of practice)"}>
                        {isKn ? "ಆರಂಭಿಕ ಹಂತ (6 ತಿಂಗಳಿಗಿಂತ ಕಡಿಮೆ)" : "Beginner (Less than 6 months)"}
                      </option>
                      <option value={isKn ? "ಮಧ್ಯಮ ಹಂತ (6 ತಿಂಗಳಿಂದ 2 ವರ್ಷಗಳು)" : "Intermediate (6 months to 2 years of practice)"}>
                        {isKn ? "ಮಧ್ಯಮ ಹಂತ (6 ತಿಂಗಳಿಂದ 2 ವರ್ಷಗಳು)" : "Intermediate (6 months to 2 years)"}
                      </option>
                      <option value={isKn ? "ಮುಂದುವರಿದ ಹಂತ (2+ ವರ್ಷಗಳು)" : "Advanced (2+ years / Prior Championship Aspirant)"}>
                        {isKn ? "ಮುಂದುವರಿದ ಹಂತ (2+ ವರ್ಷಗಳು)" : "Advanced (2+ years)"}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                    {t("yoga_field_goal")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-honey">
                      <Target className="w-5 h-5" />
                    </div>
                    <select
                      name="mainGoal"
                      value={formData.mainGoal}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-stone-200 text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white focus:border-honey text-forest"
                    >
                      <option value={isKn ? "ನಮ್ಯತೆ ಮತ್ತು ಭಂಗಿ ತಿದ್ದುಪಡಿ" : "Flexibility & Posture Correction"}>
                        {isKn ? "ನಮ್ಯತೆ ಮತ್ತು ಭಂಗಿ ತಿದ್ದುಪಡಿ" : "Flexibility & Posture Correction"}
                      </option>
                      <option value={isKn ? "ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ಮತ್ತು ಚೈತನ್ಯ" : "General Health, Vitality & Daily Energy"}>
                        {isKn ? "ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ಮತ್ತು ಚೈತನ್ಯ" : "General Health, Vitality & Daily Energy"}
                      </option>
                      <option value={isKn ? "ಒತ್ತಡ ನಿವಾರಣೆ ಮತ್ತು ಮನಶ್ಶಾಂತಿ" : "Stress Relief & Mental Peace (Pranayama)"}>
                        {isKn ? "ಒತ್ತಡ ನಿವಾರಣೆ ಮತ್ತು ಮನಶ್ಶಾಂತಿ" : "Stress Relief & Mental Peace (Pranayama)"}
                      </option>
                      <option value={isKn ? "ಬೆನ್ನು / ಕುತ್ತಿಗೆ ನೋವು ನಿವಾರಣೆ" : "Therapeutic Relief for Back / Neck / Joint Pain"}>
                        {isKn ? "ಬೆನ್ನು / ಕುತ್ತಿಗೆ ನೋವು ನಿವಾರಣೆ" : "Therapeutic Relief for Back / Neck / Joint Pain"}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 6: Health Issues */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                  {t("yoga_field_health")}
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 text-rose-500 pointer-events-none">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <textarea
                    name="healthIssues"
                    value={formData.healthIssues}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder={t("yoga_field_health_ph")}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border border-stone-200 text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white focus:border-honey"
                  ></textarea>
                </div>
              </div>

              {/* Row 7: Language */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                  {t("yoga_field_lang")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-honey">
                    <Globe className="w-5 h-5" />
                  </div>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-stone-200 text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white focus:border-honey text-forest font-medium"
                  >
                    <option value="Kannada & English (Bilingual)">ಕನ್ನಡ & English (Bilingual)</option>
                    <option value="Kannada (ಕನ್ನಡ)">ಕನ್ನಡ (Kannada)</option>
                    <option value="English">English</option>
                    <option value="Hindi (हिन्दी)">हिन्दी (Hindi)</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group relative w-full py-4 px-8 rounded-full bg-gradient-to-r from-forest via-forest-900 to-forest hover:from-forest-800 hover:to-forest-950 text-white font-bold text-base sm:text-lg shadow-elevated hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 border border-honey/50 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-honey/25 border border-honey/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <UserCheck className="w-4 h-4 text-honey-light" />
                  </div>
                  <span>{t("yoga_btn_submit_wa")}</span>
                  <Send className="w-4 h-4 text-honey-light transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
