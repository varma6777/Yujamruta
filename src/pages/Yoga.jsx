import React, { useState } from "react";
import { 
  Sparkles, 
  Clock, 
  Calendar, 
  Monitor, 
  CreditCard, 
  Award, 
  CheckCircle2, 
  AlertCircle,
  MessageCircle, 
  ShieldCheck, 
  Flame, 
  Wind, 
  Activity, 
  Target, 
  HeartPulse, 
  Compass, 
  User, 
  Users, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Globe, 
  Send,
  UserCheck,
  ArrowRight
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import CertifiedInstructorSection from "../components/CertifiedInstructorSection";
import { TraditionalMandala, FloatingLeaf } from "../components/BotanicalElements";
import { BRAND_INFO, getYogaClassDetails, getInstructorProfile, getYogaPrograms } from "../data/siteData";
import { useLanguage } from "../context/LanguageContext";

export default function Yoga() {
  const { language, t } = useLanguage();
  const isKn = language === "kn";

  const classDetails = getYogaClassDetails(language);
  const instructor = getInstructorProfile(language);
  const yogaPrograms = getYogaPrograms(language);

  // All 11 Form Fields State
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

  // Field change handler
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

  // Phone validation
  const validatePhone = (num) => {
    const cleaned = (num || "").replace(/\D/g, "");
    return cleaned.length === 10 || (cleaned.length === 12 && cleaned.startsWith("91"));
  };

  // Form Validation
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
        ? "ದಯವಿಟ್ಟು 5 ರಿಂದ 99 ರ ನಡುವಿನ ಮಾನ್ಯವಾದ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ."
        : "Please enter a valid age between 5 and 99.";
    }

    if (!formData.yogaClass) {
      newErrors.yogaClass = isKn 
        ? "ದಯವಿಟ್ಟು ಆಯ್ದ ತರಗತಿ / ಬ್ಯಾಚ್ ಅನ್ನು ಆಯ್ಕೆಮಾಡಿ."
        : "Please select a preferred class / batch.";
    }

    if (!formData.address.trim() || formData.address.trim().length < 5) {
      newErrors.address = isKn 
        ? "ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಿಳಾಸ ಅಥವಾ ಊರಿನ ಹೆಸರನ್ನು ನಮೂದಿಸಿ."
        : "Please provide your residential address or city/area.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = isKn 
        ? "ತರಗತಿ ವಿವರಗಳನ್ನು ಪಡೆಯಲು ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಅಗತ್ಯವಿದೆ."
        : "Phone number is required for class updates.";
    } else if (!validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = isKn 
        ? "ದಯವಿಟ್ಟು 10 ಅಂಕಿಗಳ ಮಾನ್ಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ."
        : "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = isKn 
        ? "ದೈನಂದಿನ ತರಗತಿ ಲಿಂಕ್ ಪಡೆಯಲು ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ ಅಗತ್ಯವಿದೆ."
        : "WhatsApp number is required to receive daily live class links.";
    } else if (!validatePhone(formData.whatsappNumber)) {
      newErrors.whatsappNumber = isKn 
        ? "ದಯವಿಟ್ಟು 10 ಅಂಕಿಗಳ ಮಾನ್ಯ ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ."
        : "Please enter a valid 10-digit WhatsApp number.";
    }

    if (!formData.experience) {
      newErrors.experience = isKn ? "ಹಿಂದಿನ ಯೋಗ ಅನುಭವವನ್ನು ಆಯ್ಕೆಮಾಡಿ." : "Please select previous yoga experience.";
    }

    if (!formData.mainGoal) {
      newErrors.mainGoal = isKn ? "ನಿಮ್ಮ ಮುಖ್ಯ ಆರೋಗ್ಯ ಗುರಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ." : "Please select your primary wellness goal.";
    }

    if (!formData.language) {
      newErrors.language = isKn ? "ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ." : "Please select your preferred language.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      const formEl = document.getElementById("registration-form");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    const regMessage = isKn 
      ? `*ಆನ್‌ಲೈನ್ ಯೋಗ ನೋಂದಣಿ - ಯುಜಾಮೃತ*
----------------------------------------
*ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು:* ${formData.studentName.trim()}
*ಪೋಷಕರ ಹೆಸರು:* ${formData.parentName.trim() || "ಅನ್ವಯಿಸುವುದಿಲ್ಲ"}
*ವಯಸ್ಸು:* ${formData.age.trim()} ವರ್ಷ
*ಆಯ್ದ ತರಗತಿ:* ${formData.yogaClass}
*ವಿಳಾಸ:* ${formData.address.trim()}
*ಮೊಬೈಲ್ ಸಂಖ್ಯೆ:* ${formData.phoneNumber.trim()}
*ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ:* ${formData.whatsappNumber.trim()}
*ಹಿಂದಿನ ಅನುಭವ:* ${formData.experience}
*ಆರೋಗ್ಯ ಗುರಿ:* ${formData.mainGoal}
*ಆರೋಗ್ಯ ತೊಂದರೆಗಳು:* ${formData.healthIssues.trim() || "ಏನೂ ಇಲ್ಲ"}
*ಆದ್ಯತೆಯ ಭಾಷೆ:* ${formData.language}
----------------------------------------
_ನಮಸ್ಕಾರ ಗುರುಗಳೇ, ನಾನು ಯೋಗ ಪ್ರವೇಶ ಪಡೆಯಲು ಇಷ್ಟಪಡುತ್ತೇನೆ. ದಯವಿಟ್ಟು ಖಚಿತಪಡಿಸಿ._`
      : `*ONLINE YOGA REGISTRATION - YUJAMRUTHA*
----------------------------------------
*1. Student Name:* ${formData.studentName.trim()}
*2. Parent Name:* ${formData.parentName.trim() || "N/A (Adult)"}
*3. Age:* ${formData.age.trim()} years
*4. Preferred Class:* ${formData.yogaClass}
*5. Residential Address:* ${formData.address.trim()}
*6. Phone Number:* ${formData.phoneNumber.trim()}
*7. WhatsApp Number:* ${formData.whatsappNumber.trim()}
*8. Experience Level:* ${formData.experience}
*9. Main Goal:* ${formData.mainGoal}
*10. Health Issues / Injury:* ${formData.healthIssues.trim() || "None"}
*11. Preferred Language:* ${formData.language}
----------------------------------------
_Namaste Master Abhinandan! I would like to join the upcoming batch._`;

    const encodedMsg = encodeURIComponent(regMessage);
    const whatsappUrl = `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodedMsg}`;

    setIsSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  const handleSelectProgram = (programTitle) => {
    setFormData((prev) => ({
      ...prev,
      yogaClass: programTitle
    }));
    const formEl = document.getElementById("registration-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const directWhatsAppInquiry = `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodeURIComponent(
    isKn 
      ? "ನಮಸ್ಕಾರ ಗುರುಗಳೇ! ನಾನು ಯುಜಾಮೃತ ಯೋಗ ತರಗತಿಗಳ ಪ್ರವೇಶದ ಕುರಿತು ವಿಚಾರಿಸಲು ಬಯಸುತ್ತೇನೆ." 
      : "Namaste Master Abhinandan! I would like to inquire about Yujamrutha Yoga class admissions."
  )}`;

  // Helper for program icon
  const renderIcon = (name) => {
    switch (name) {
      case "Flame": return <Flame className="w-6 h-6 text-honey" />;
      case "Wind": return <Wind className="w-6 h-6 text-natural" />;
      case "Activity": return <Activity className="w-6 h-6 text-honey-dark" />;
      case "Target": return <Target className="w-6 h-6 text-forest" />;
      case "HeartPulse": return <HeartPulse className="w-6 h-6 text-rose-600" />;
      case "Compass": return <Compass className="w-6 h-6 text-emerald-700" />;
      case "ShieldCheck": return <ShieldCheck className="w-6 h-6 text-forest" />;
      default: return <Sparkles className="w-6 h-6 text-honey" />;
    }
  };

  return (
    <div className="bg-cream min-h-screen">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[52vh] sm:min-h-[60vh] flex items-center justify-center bg-forest-950 text-cream overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/yoga_hero_nature.jpg" 
            alt="Classical Yoga practitioner meditating at sunrise in Western Ghats nature" 
            className="w-full h-full object-cover object-center filter brightness-85 contrast-105"
            onError={(e) => {
              e.currentTarget.src = "/assets/images/hero-clean.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/65 to-forest-950/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-forest-950/50 via-transparent to-forest-950/70 pointer-events-none"></div>
          <div className="absolute inset-0 bg-mandala pointer-events-none opacity-20"></div>
        </div>

        <FloatingLeaf className="top-10 left-8" delay="0s" />
        <FloatingLeaf className="bottom-8 right-10" delay="2.5s" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-forest-950/90 border border-amber-400/50 text-amber-300 text-[11px] sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{t("yoga_hero_badge")}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-300 drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] mb-3 sm:mb-4 leading-tight">
            {t("yoga_hero_title")}
          </h1>

          <p className="font-decorative italic text-xl sm:text-2xl md:text-3xl text-white font-medium mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {t("yoga_hero_tagline")}
          </p>

          <p className="text-xs sm:text-base md:text-lg text-cream-soft font-normal leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {t("yoga_hero_desc")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#registration-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-honey hover:bg-honey-dark text-forest-950 hover:text-white font-bold px-6 sm:px-8 py-3.5 rounded-full shadow-honey transition-all text-sm"
            >
              <span>{t("yoga_btn_register")} ↓</span>
            </a>
            <a
              href={directWhatsAppInquiry}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-6 py-3.5 rounded-full shadow-md transition-all text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>{isKn ? "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ" : "Ask on WhatsApp"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SECTION B: CLASS INFORMATION CARDS ===================== */}
      <section className="py-10 sm:py-16 bg-cream-soft border-b border-honey/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={isKn ? "ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ಶುಲ್ಕ" : "Batch Schedule & Fees"}
            sanskrit="नियमः सदा पालनीयಃ"
            title={t("yoga_details_title")}
            subtitle={isKn 
              ? "ನಿಮ್ಮ ಮನೆಯಲ್ಲೇ ಕುಳಿತು ಪ್ರತಿದಿನ ಶಿಸ್ತಿನ ಆರೋಗ್ಯಕರ ಯೋಗ ದಿನಚರಿಯನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಲು ಬೆಳಗಿನ ಸಂವಾದಾತ್ಮಕ ಲೈವ್ ತರಗತಿಗಳು."
              : "Live interactive morning classes designed to establish an unbroken daily wellness routine from the comfort of your home."}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Mode */}
            <div className="bg-white p-6 rounded-3xl border border-honey/25 shadow-soft hover:shadow-elevated transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-100 flex items-center justify-center text-forest shrink-0">
                <Monitor className="w-6 h-6 text-forest" />
              </div>
              <div>
                <span className="text-[11px] uppercase text-earth-light font-semibold tracking-wider">{t("yoga_detail_mode")}</span>
                <h4 className="font-heading text-lg font-bold text-forest mt-0.5">{classDetails.mode}</h4>
                <p className="text-xs text-stone-500 mt-1">{isKn ? "ಕ್ಯಾಮೆರಾದಲ್ಲಿ ಭಂಗಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ತಿದ್ದುವ ಕ್ರಮ." : "Live camera feedback with real-time posture corrections."}</p>
              </div>
            </div>

            {/* Timing */}
            <div className="bg-white p-6 rounded-3xl border border-honey/25 shadow-soft hover:shadow-elevated transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-honey/15 flex items-center justify-center text-honey-dark shrink-0">
                <Clock className="w-6 h-6 text-honey" />
              </div>
              <div>
                <span className="text-[11px] uppercase text-earth-light font-semibold tracking-wider">{t("yoga_detail_timing")}</span>
                <h4 className="font-heading text-lg font-bold text-forest mt-0.5">{classDetails.timing}</h4>
                <p className="text-xs text-stone-500 mt-1">{isKn ? "ಪ್ರಾಣಾಯಾಮ ಮತ್ತು ಧ್ಯಾನಕ್ಕೆ ಸೂಕ್ತವಾದ ಮುಂಜಾನೆಯ ಸಮಯ." : "Optimal morning Brahma Muhurta window for pranayama."}</p>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white p-6 rounded-3xl border border-honey/25 shadow-soft hover:shadow-elevated transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-natural-soft flex items-center justify-center text-natural shrink-0">
                <Calendar className="w-6 h-6 text-natural" />
              </div>
              <div>
                <span className="text-[11px] uppercase text-earth-light font-semibold tracking-wider">{t("yoga_detail_schedule")}</span>
                <h4 className="font-heading text-lg font-bold text-forest mt-0.5">{classDetails.schedule}</h4>
                <p className="text-xs text-stone-500 mt-1">{isKn ? "ಸೋಮವಾರದಿಂದ ಶುಕ್ರವಾರದವರೆಗೆ ಸಕ್ರಿಯ ಯೋಗ ಸಾಧನೆ." : "Monday to Friday active practice; weekend recovery."}</p>
              </div>
            </div>

            {/* Duration */}
            <div className="bg-white p-6 rounded-3xl border border-honey/25 shadow-soft hover:shadow-elevated transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center text-forest shrink-0">
                <Activity className="w-6 h-6 text-forest" />
              </div>
              <div>
                <span className="text-[11px] uppercase text-earth-light font-semibold tracking-wider">{t("yoga_detail_duration")}</span>
                <h4 className="font-heading text-lg font-bold text-forest mt-0.5">{classDetails.duration}</h4>
                <p className="text-xs text-stone-500 mt-1">{isKn ? "ವಾರ್ಮ್-ಅಪ್, ಆಸನಗಳು, ಪ್ರಾಣಾಯಾಮ ಮತ್ತು ವಿಶ್ರಾಂತಿ." : "Warm-up, asana practice, pranayama, and relaxation."}</p>
              </div>
            </div>

            {/* Registration Fee */}
            <div className="bg-white p-6 rounded-3xl border border-honey/25 shadow-soft hover:shadow-elevated transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-honey/15 flex items-center justify-center text-honey-dark shrink-0">
                <CreditCard className="w-6 h-6 text-honey" />
              </div>
              <div>
                <span className="text-[11px] uppercase text-earth-light font-semibold tracking-wider">{t("yoga_detail_reg_fee")}</span>
                <h4 className="font-heading text-lg font-bold text-forest mt-0.5">{classDetails.registrationFee}</h4>
                <p className="text-xs text-stone-500 mt-1">{isKn ? "ಒಮ್ಮೆಯ ಪ್ರವೇಶ ಮತ್ತು ಆರಂಭಿಕ ಆರೋಗ್ಯ ವಿಶ್ಲೇಷಣೆ." : "One-time student admission & initial health profiling."}</p>
              </div>
            </div>

            {/* Monthly Fee */}
            <div className="bg-gradient-to-br from-forest-900 to-forest-950 text-cream p-6 rounded-3xl border-2 border-honey/40 shadow-soft hover:shadow-elevated transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-honey text-forest-950 flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                ₹
              </div>
              <div>
                <span className="text-[11px] uppercase text-honey font-bold tracking-wider">{t("yoga_detail_monthly_fee")}</span>
                <h4 className="font-heading text-xl font-bold text-white mt-0.5">{classDetails.monthlyFee}</h4>
                <p className="text-xs text-cream/70 mt-1">{isKn ? "ಪ್ರತಿ ತರಗತಿಗೆ ಕೇವಲ ₹20. ಜೀವಮಾನದ ಪರಿಪೂರ್ಣ ಆರೋಗ್ಯ." : "Only ₹20 per class. Uncompromised lifelong health."}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== SECTION A: YOGA PROGRAMS ===================== */}
      <section className="py-20 bg-cream relative">
        <TraditionalMandala className="absolute top-10 right-10" size={280} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge={t("yoga_programs_badge")}
            sanskrit={t("yoga_programs_sanskrit")}
            title={t("yoga_programs_title")}
            subtitle={t("yoga_programs_subtitle")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
            {yogaPrograms.map((prog) => (
              <div 
                key={prog.id}
                className="bg-white rounded-3xl p-6 border-2 border-honey/25 hover:border-honey shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1 relative"
              >
                <div>
                  {/* Top Bar: Icon + Badge + Intensity */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-forest-50 border border-forest-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-honey/15 transition-all shrink-0">
                      {renderIcon(prog.icon)}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-honey/15 text-honey-dark border border-honey/30">
                        {prog.badge}
                      </span>
                      <span className="text-[10px] font-semibold text-stone-400">
                        {prog.intensity}
                      </span>
                    </div>
                  </div>

                  {/* Program Title & Sanskrit */}
                  <h3 className="font-heading text-xl font-bold text-forest mb-0.5 group-hover:text-honey-dark transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-honey-dark font-decorative italic mb-2.5">
                    {prog.sanskrit}
                  </p>

                  {/* Inspiring Tagline Pill */}
                  <p className="text-[11px] font-semibold text-forest-800 bg-forest-50/90 px-3 py-1.5 rounded-xl border border-forest-100 mb-3 leading-snug">
                    "{prog.tagline}"
                  </p>

                  {/* Detailed Description */}
                  <p className="text-earth-dark/80 text-xs sm:text-sm leading-relaxed mb-4">
                    {prog.description}
                  </p>

                  {/* Key Asanas Covered */}
                  <div className="mb-4 pt-3 border-t border-stone-100">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-forest block mb-2">
                      {t("yoga_asanas_label")}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.asanas && prog.asanas.map((asana, idx) => (
                        <span 
                          key={idx}
                          className="text-[10px] font-medium bg-cream-soft px-2 py-0.5 rounded-md text-forest-900 border border-honey/20"
                        >
                          {asana}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Health Benefits */}
                  <div className="mb-4 pt-3 border-t border-stone-100 space-y-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-forest block mb-1">
                      {t("yoga_benefits_label")}
                    </span>
                    {prog.benefits && prog.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-earth-dark/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-honey shrink-0 mt-0.5" />
                        <span className="leading-tight">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For Box */}
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-100 text-[11px] text-stone-600 mb-4">
                    <strong className="text-forest">{t("yoga_ideal_label")} </strong>
                    <span>{prog.idealFor}</span>
                  </div>
                </div>

                {/* Card Footer: Timing & Enroll CTA */}
                <div className="pt-3 border-t border-stone-100 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-honey" /> {prog.duration}
                    </span>
                    <span className="font-semibold text-forest text-[11px]">
                      {prog.schedule}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectProgram(prog.title)}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-forest hover:bg-forest-800 text-white group-hover:bg-gradient-to-r group-hover:from-honey group-hover:to-honey-dark group-hover:text-forest-950 font-bold py-2.5 px-3 rounded-xl text-xs transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-98"
                  >
                    <span>{t("yoga_btn_enroll_card")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION C: INSTRUCTOR PROFILE ===================== */}
      <section className="py-20 bg-forest text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-mandala pointer-events-none opacity-20"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            theme="light"
            badge={isKn ? "ಪ್ರಾಮಾಣಿಕ ಯೋಗ ಪರಂಪರೆ" : "Authentic Yogic Lineage"}
            sanskrit="गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः"
            title={isKn ? "ನಿಮ್ಮ ಯೋಗ ಗುರುಗಳನ್ನು ಪರಿಚಯಿಸಿಕೊಳ್ಳಿ" : "Meet Your Instructor"}
            subtitle={isKn 
              ? "ವಿಶ್ವವಿದ್ಯಾಲಯ ತರಬೇತಿ ಪಡೆದ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಮಟ್ಟದ ಯೋಗ ಚಾಂಪಿಯನ್‌ಶಿಪ್ ಸಾಧಕರಿಂದ ನೇರವಾಗಿ ಕಲಿಯಿರಿ." 
              : "Learn directly from a university-trained teacher and national-level yogic championship participant."}
          />

          <div className="bg-forest-900/90 rounded-3xl border-2 border-honey/30 shadow-2xl p-6 sm:p-10 lg:p-12 mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Photo */}
              <div className="lg:col-span-5 relative text-center">
                <div className="relative inline-block rounded-3xl overflow-hidden border-4 border-honey/40 shadow-elevated w-full max-w-sm">
                  <img 
                    src="/assets/images/abhinandhan.jpg" 
                    alt="Master Abhinandan K K - Lead Yoga Acharya" 
                    className="w-full h-[400px] object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/hero-clean.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-forest-950/85 backdrop-blur-md py-2 px-3 rounded-xl border border-honey/20">
                    <p className="font-heading font-bold text-white text-base">{instructor.name}</p>
                    <p className="text-honey text-xs">{instructor.role}</p>
                  </div>
                </div>
              </div>

              {/* Bio & Achievements */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-heading text-3xl font-bold text-white mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-honey text-sm font-semibold tracking-wider uppercase">
                    {isKn ? "ಎಸ್-ವ್ಯಾಸ ಯೂನಿವರ್ಸಿಟಿ ಪ್ರಮಾಣೀಕೃತ • ರಾಷ್ಟ್ರೀಯ ಯೋಗ ಸ್ಪರ್ಧಿ" : "SVYASA University Certified • Championship Competitor"}
                  </p>
                </div>

                <p className="text-cream/85 text-sm sm:text-base leading-relaxed">
                  {instructor.bio}
                </p>

                {/* Key Achievements Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {instructor.achievements.map((item, idx) => (
                    <div key={idx} className="bg-forest-950/60 p-3.5 rounded-xl border border-forest-700/60 flex items-start gap-2.5">
                      <Award className="w-5 h-5 text-honey shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-heading font-semibold text-white text-xs sm:text-sm">{item.title}</h4>
                        <p className="text-[11px] text-honey-light">{item.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="p-4 rounded-2xl bg-forest-950/80 border-l-4 border-honey italic text-xs sm:text-sm text-cream/90 font-decorative">
                  "{instructor.quote}"
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION: CERTIFIED YOGA INSTRUCTOR ===================== */}
      <CertifiedInstructorSection />

      {/* ===================== SECTION D: REGISTRATION FORM ===================== */}
      <section id="registration-form" className="py-20 bg-cream relative">
        <TraditionalMandala className="absolute top-10 left-10" size={320} />
        <TraditionalMandala className="absolute bottom-10 right-10" size={320} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Form Header Card */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-100 border border-forest/20 text-forest text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-honey-dark" />
              <span>{t("yoga_reg_badge")}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-forest mb-2">
              {isKn ? "ಯುಜಾಮೃತ ಯೋಗ" : "YUJAMRUTHA YOGA"}
            </h2>
            <p className="font-decorative italic text-xl sm:text-2xl text-honey-dark font-medium mb-3">
              {t("yoga_reg_title")}
            </p>
            <p className="text-sm sm:text-base text-earth-dark/80 max-w-2xl mx-auto leading-relaxed">
              {t("yoga_reg_subtitle")}
            </p>
          </div>

          {/* Main Card Container */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-elevated border-2 border-honey/40 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-forest via-honey to-forest"></div>

            {/* Submission Success Banner */}
            {isSubmitted && (
              <div className="mb-8 p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-900 flex items-start gap-3.5 shadow-sm animate-fadeIn">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-sm space-y-1">
                  <p className="font-bold text-base text-emerald-950">
                    {isKn ? "ನೋಂದಣಿ ವಿವರಗಳು ಸಿದ್ಧಗೊಂಡಿವೆ!" : "Registration Generated Successfully!"}
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-800">
                    {t("yoga_reg_success")}
                  </p>
                </div>
              </div>
            )}

            {/* Global Error Banner */}
            {Object.keys(errors).length > 0 && (
              <div className="mb-8 p-4 rounded-2xl bg-red-50 border border-red-300 text-red-800 flex items-start gap-3 text-sm">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">
                    {isKn ? "ದಯವಿಟ್ಟು ಕೆಳಗೆ ಕೆಂಪು ಬಣ್ಣದಲ್ಲಿ ಗುರುತಿಸಲಾದ ಅಗತ್ಯ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ." : "Please complete the required fields marked in red below."}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Student Name & Parent's Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Student Name */}
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
                        errors.studentName 
                          ? "border-red-400 focus:ring-2 focus:ring-red-200" 
                          : "border-stone-200 focus:border-honey focus:ring-2 focus:ring-honey/20"
                      }`}
                    />
                  </div>
                  {errors.studentName && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.studentName}</span>
                    </p>
                  )}
                </div>

                {/* 2. Parent's Name */}
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
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-stone-200 text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white focus:border-honey focus:ring-2 focus:ring-honey/20"
                    />
                  </div>
                </div>

              </div>

              {/* Row 2: Age & Class Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 3. Age */}
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
                        errors.age 
                          ? "border-red-400 focus:ring-2 focus:ring-red-200" 
                          : "border-stone-200 focus:border-honey focus:ring-2 focus:ring-honey/20"
                      }`}
                    />
                  </div>
                  {errors.age && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.age}</span>
                    </p>
                  )}
                </div>

                {/* 4. Class */}
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
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-stone-200 text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white focus:border-honey focus:ring-2 focus:ring-honey/20 text-forest font-medium"
                    >
                      <option value={isKn ? "ಆನ್‌ಲೈನ್ ಲೈವ್ ಮುಂಜಾನೆ ಬ್ಯಾಚ್ (ಬೆಳಗ್ಗೆ 6:30 – 7:30)" : "Online Live Morning Batch (6:30 AM – 7:30 AM)"}>
                        {isKn ? "ಆನ್‌ಲೈನ್ ಲೈವ್ ಮುಂಜಾನೆ ಬ್ಯಾಚ್ (ಬೆಳಗ್ಗೆ 6:30 – 7:30) [ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ]" : "Online Live Morning Batch (6:30 AM – 7:30 AM) [Recommended]"}
                      </option>
                      <option value={isKn ? "ಆರಂಭಿಕ ಯೋಗ ಬುನಾದಿ" : "Beginner Yoga Foundation"}>
                        {isKn ? "ಆರಂಭಿಕ ಯೋಗ ಬುನಾದಿ (ಸರಳ ಆಸನಗಳು ಮತ್ತು ಉಸಿರಾಟ)" : "Beginner Yoga Foundation (Gentle Asanas & Breathing)"}
                      </option>
                      <option value={isKn ? "ಪ್ರಾಣಾಯಾಮ ಮತ್ತು ಧ್ಯಾನ" : "Pranayama & Mindful Meditation"}>
                        {isKn ? "ಪ್ರಾಣಾಯಾಮ ಮತ್ತು ಧ್ಯಾನ (ಉಸಿರಾಟ ನಿಯಂತ್ರಣ ಮತ್ತು ಮಾನಸಿಕ ಶಾಂತಿ)" : "Pranayama & Mindful Meditation (Breath Control & Stress Healing)"}
                      </option>
                      <option value={isKn ? "ಮುಂದುವರಿದ ಆಸನ ಮತ್ತು ತೋಳಿನ ಸಮತೋಲನ" : "Advanced Asana & Hand Balance Training"}>
                        {isKn ? "ಮುಂದುವರಿದ ಆಸನ ಮತ್ತು ತೋಳಿನ ಸಮತೋಲನ (ಇನ್‌ವರ್ಶನ್‌ಗಳು ಮತ್ತು ಶಕ್ತಿ)" : "Advanced Asana & Hand Balance Training (Inversions & Strength)"}
                      </option>
                      <option value={isKn ? "ಯೋಗ ಚಿಕಿತ್ಸೆ (ಬೆನ್ನುನೋವು / ಭಂಗಿ ತಿದ್ದುಪಡಿ)" : "Therapeutic Yoga (Back Pain / Posture Correction)"}>
                        {isKn ? "ಯೋಗ ಚಿಕಿತ್ಸೆ (ಬೆನ್ನುನೋವು, ಕುತ್ತಿಗೆ ಬಿಗಿತ ಮತ್ತು ನಮ್ಯತೆ)" : "Therapeutic Yoga (Back Pain, Neck Stiffness, Mobility)"}
                      </option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Row 3: Address (5) */}
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
                      errors.address 
                        ? "border-red-400 focus:ring-2 focus:ring-red-200" 
                        : "border-stone-200 focus:border-honey focus:ring-2 focus:ring-honey/20"
                    }`}
                  ></textarea>
                </div>
                {errors.address && (
                  <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.address}</span>
                  </p>
                )}
              </div>

              {/* Row 4: Phone & WhatsApp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 6. Phone Number */}
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
                        errors.phoneNumber 
                          ? "border-red-400 focus:ring-2 focus:ring-red-200" 
                          : "border-stone-200 focus:border-honey focus:ring-2 focus:ring-honey/20"
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>

                {/* 7. WhatsApp Number */}
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
                        errors.whatsappNumber 
                          ? "border-red-400 focus:ring-2 focus:ring-red-200" 
                          : "border-stone-200 focus:border-honey focus:ring-2 focus:ring-honey/20"
                      }`}
                    />
                  </div>
                  {errors.whatsappNumber && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.whatsappNumber}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Row 5: Experience & Goal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 8. Previous Yoga Experience */}
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
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-stone-200 text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white focus:border-honey focus:ring-2 focus:ring-honey/20 text-forest"
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

                {/* 9. Main Goal */}
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
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-stone-200 text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white focus:border-honey focus:ring-2 focus:ring-honey/20 text-forest"
                    >
                      <option value={isKn ? "ನಮ್ಯತೆ ಮತ್ತು ಭಂಗಿ ತಿದ್ದುಪಡಿ" : "Flexibility & Posture Correction"}>
                        {isKn ? "ನಮ್ಯತೆ ಮತ್ತು ಭಂಗಿ ತಿದ್ದುಪಡಿ" : "Flexibility & Posture Correction"}
                      </option>
                      <option value={isKn ? "ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ಮತ್ತು ದೈನಂದಿನ ಚೈತನ್ಯ" : "General Health, Vitality & Daily Energy"}>
                        {isKn ? "ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ಮತ್ತು ದೈನಂದಿನ ಚೈತನ್ಯ" : "General Health, Vitality & Daily Energy"}
                      </option>
                      <option value={isKn ? "ಒತ್ತಡ ನಿವಾರಣೆ ಮತ್ತು ಮಾನಸಿಕ ಶಾಂತಿ" : "Stress Relief & Mental Peace (Pranayama)"}>
                        {isKn ? "ಒತ್ತಡ ನಿವಾರಣೆ ಮತ್ತು ಮಾನಸಿಕ ಶಾಂತಿ" : "Stress Relief & Mental Peace (Pranayama)"}
                      </option>
                      <option value={isKn ? "ಬೆನ್ನು / ಕುತ್ತಿಗೆ / ಕೀಲು ನೋವು ನಿವಾರಣೆ" : "Therapeutic Relief for Back / Neck / Joint Pain"}>
                        {isKn ? "ಬೆನ್ನು / ಕುತ್ತಿಗೆ / ಕೀಲು ನೋವು ನಿವಾರಣೆ" : "Therapeutic Relief for Back / Neck / Joint Pain"}
                      </option>
                      <option value={isKn ? "ತೋಳಿನ ಸಮತೋಲನ ಮತ್ತು ಶಕ್ತಿ" : "Hand Balance Mastery & Inversions"}>
                        {isKn ? "ತೋಳಿನ ಸಮತೋಲನ ಮತ್ತು ಶಕ್ತಿ" : "Hand Balance Mastery & Inversions"}
                      </option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Row 6: Injury / Health Issues */}
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
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border border-stone-200 text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white focus:border-honey focus:ring-2 focus:ring-honey/20"
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
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-stone-200 text-sm transition-all focus:outline-none bg-cream-soft/40 focus:bg-white focus:border-honey focus:ring-2 focus:ring-honey/20 text-forest font-medium"
                  >
                    <option value="Kannada & English (Bilingual)">ಕನ್ನಡ & English (Bilingual)</option>
                    <option value="Kannada (ಕನ್ನಡ)">ಕನ್ನಡ (Kannada)</option>
                    <option value="English">English</option>
                    <option value="Hindi (हिन्दी)">हिन्दी (Hindi)</option>
                  </select>
                </div>
              </div>

              {/* Batch & Fee Summary Ribbon */}
              <div className="p-4 rounded-2xl bg-forest-50 border border-forest-200 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-forest gap-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-honey" />
                  <span>{isKn ? "ಬ್ಯಾಚ್: ಬೆಳಗ್ಗೆ 6:30 – 7:30 (ಸೋಮವಾರ – ಶುಕ್ರವಾರ)" : "Batch: 6:30 AM – 7:30 AM (Monday – Friday)"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-stone-500">{isKn ? "ಪ್ರವೇಶ: ₹500" : "Reg: ₹500"}</span>
                  <span className="font-bold text-forest-950 text-base">{isKn ? "ಮಾಸಿಕ ಶುಲ್ಕ: ₹400" : "Monthly Fee: ₹400"}</span>
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

      {/* ===================== DIRECT WHATSAPP CONTACT CTA ===================== */}
      <section className="py-12 bg-forest-950 text-cream text-center border-t border-forest-800">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading text-lg font-bold text-white">
              {isKn ? "ನೋಂದಣಿಗೆ ಮುನ್ನ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ?" : "Have questions before registering?"}
            </h4>
            <p className="text-xs text-cream/75">
              {isKn ? "ನೇರವಾಗಿ ಗುರು ಅಭಿನಂದನ್ ಅವರೊಂದಿಗೆ ವಾಟ್ಸಾಪ್ ಅಥವಾ ಕರೆ ಮೂಲಕ ಮಾತನಾಡಿ." : "Talk directly with Master Abhinandan K K on WhatsApp or phone."}
            </p>
          </div>
          <a
            href={directWhatsAppInquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold px-6 py-3 rounded-full shadow-md transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{isKn ? `ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ: ${BRAND_INFO.phone}` : `Chat on WhatsApp: ${BRAND_INFO.phone}`}</span>
          </a>
        </div>
      </section>

    </div>
  );
}
