import React, { useState } from "react";
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  Send, 
  Leaf, 
  Droplets, 
  HelpCircle,
  ExternalLink
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { FloatingLeaf, TraditionalMandala } from "../components/BotanicalElements";
import { BRAND_INFO } from "../data/siteData";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language, t } = useLanguage();
  const isKn = language === "kn";

  const [enquiryType, setEnquiryType] = useState(isKn ? "ಯೋಗ ತರಗತಿಗಳು" : "Yoga Classes");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMsg("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg(isKn ? "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರು, ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಮತ್ತು ಸಂದೇಶವನ್ನು ನಮೂದಿಸಿ." : "Please provide your Name, Phone Number, and Message.");
      return;
    }

    const encodedMsg = encodeURIComponent(
      isKn
        ? `*ವೆಬ್‌ಸೈಟ್ ವಿಚಾರಣೆ - ಯುಜಾಮೃತ*
----------------------------------------
*ವಿಭಾಗ:* ${enquiryType}
*ಹೆಸರು:* ${formData.fullName}
*ಮೊಬೈಲ್:* ${formData.phone}
*ಇಮೇಲ್:* ${formData.email || "ಲಭ್ಯವಿಲ್ಲ"}
*ವಿಷಯ:* ${formData.subject || enquiryType}
*ಸಂದೇಶ:*
${formData.message}
----------------------------------------`
        : `*NEW WEBSITE ENQUIRY - YUJAMRUTHA*
----------------------------------------
*Enquiry Category:* ${enquiryType}
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "N/A"}
*Subject:* ${formData.subject || enquiryType}
*Message:*
${formData.message}
----------------------------------------`
    );

    const whatsappUrl = `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodedMsg}`;
    setSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  const directWhatsAppUrl = `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodeURIComponent(
    isKn ? "ನಮಸ್ಕಾರ ಯುಜಾಮೃತ! ನಾನು ನಿಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಲು ಬಯಸುತ್ತೇನೆ." : "Namaste Yujamrutha! I would like to connect with you."
  )}`;

  return (
    <div className="bg-cream min-h-screen">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[50vh] sm:min-h-[58vh] flex items-center justify-center bg-forest-950 text-cream overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/contact_hero_nature.jpg" 
            alt="Misty Western Ghats hills and traditional sanctuary in Thirthahalli" 
            className="w-full h-full object-cover object-center filter brightness-85 contrast-105"
            onError={(e) => {
              e.currentTarget.src = "/assets/images/apiary-landscape.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/65 to-forest-950/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-forest-950/50 via-transparent to-forest-950/70 pointer-events-none"></div>
          <div className="absolute inset-0 bg-mandala pointer-events-none opacity-20"></div>
        </div>

        <FloatingLeaf className="top-12 left-10 z-10" delay="0s" />
        <FloatingLeaf className="bottom-10 right-14 z-10" delay="2.5s" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-forest-950/90 border border-amber-400/50 text-amber-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{t("contact_hero_badge")}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-300 drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] mb-3 sm:mb-4 leading-tight">
            {t("contact_hero_title")}
          </h1>

          <p className="font-decorative italic text-xl sm:text-2xl md:text-3xl text-white font-medium mb-4 sm:mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {t("contact_hero_tagline")}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-cream-soft max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {t("contact_hero_desc")}
          </p>
        </div>
      </section>

      {/* ===================== CONTACT DETAILS & FORM ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-honey-dark font-semibold">
                {isKn ? "ನೇರ ಸಂಪರ್ಕ" : "Direct Communication"}
              </span>
              <h2 className="font-heading text-3xl font-bold text-forest mt-1 mb-4">
                {t("contact_direct_title")}
              </h2>
              <p className="text-earth-dark/80 text-sm leading-relaxed mb-6">
                {t("contact_direct_desc")}
              </p>
            </div>

            {/* Card: Phone & WhatsApp */}
            <div className="bg-white p-6 rounded-3xl border border-honey/20 shadow-soft hover:shadow-elevated transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-honey/15 text-honey-dark flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-honey" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-earth-light">{t("contact_call_label")}</span>
                <p className="font-heading text-xl font-bold text-forest mt-0.5">{BRAND_INFO.phone}</p>
                <div className="mt-2 flex gap-3">
                  <a 
                    href={`tel:${BRAND_INFO.rawPhone}`} 
                    className="text-xs font-semibold text-forest underline hover:text-honey-dark"
                  >
                    {t("contact_btn_direct_call")}
                  </a>
                  <span className="text-stone-300">•</span>
                  <a 
                    href={directWhatsAppUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    {t("contact_btn_wa_chat")}
                  </a>
                </div>
              </div>
            </div>

            {/* Card: Email Address */}
            <div className="bg-white p-6 rounded-3xl border border-honey/20 shadow-soft hover:shadow-elevated transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-100 text-forest flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-forest" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-earth-light">{t("contact_email_label")}</span>
                <p className="font-heading text-base sm:text-lg font-bold text-forest mt-0.5 break-all">{BRAND_INFO.email}</p>
                <p className="text-xs text-stone-500 mt-1">{t("contact_email_desc")}</p>
              </div>
            </div>

            {/* Card: Business Address */}
            <div className="bg-white p-6 rounded-3xl border border-honey/20 shadow-soft hover:shadow-elevated transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-natural-soft text-natural flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-natural" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-earth-light">{t("contact_location_label")}</span>
                <p className="font-heading text-base font-bold text-forest mt-0.5 leading-snug">{BRAND_INFO.address}</p>
                <p className="text-xs text-stone-500 mt-1">{t("contact_location_desc")}</p>
              </div>
            </div>

            {/* Card: Operational Hours */}
            <div className="bg-white p-6 rounded-3xl border border-honey/20 shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-forest" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-earth-light">{t("contact_hours_label")}</span>
                <p className="font-heading text-sm sm:text-base font-bold text-forest mt-0.5">{t("contact_hours_timing")}</p>
                <p className="text-xs text-stone-500 mt-1">{t("contact_hours_yoga")}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-elevated border-2 border-honey/30">
              
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold text-forest mb-2">{t("contact_form_title")}</h3>
                <p className="text-earth-dark/80 text-sm">
                  {isKn ? "ಕೆಳಗಿನ ವಿಭಾಗವನ್ನು ಆರಿಸಿ ಸಂದೇಶ ಕಳುಹಿಸಿ. ನಾವು ತಕ್ಷಣ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತೇವೆ." : "Choose your topic below and send your message. We will respond promptly."}
                </p>
              </div>

              {/* Enquiry Category Selector Tabs */}
              <div className="mb-8">
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                  {isKn ? "ವಿಚಾರಣೆಯ ಪ್ರಕಾರ ಆಯ್ಕೆಮಾಡಿ" : "Select Enquiry Type"}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: isKn ? "ಯೋಗ ತರಗತಿಗಳು" : "Yoga Classes", label: isKn ? "ಯೋಗ ತರಗತಿಗಳು" : "Yoga Classes", icon: Leaf },
                    { id: isKn ? "ಜೇನುತುಪ್ಪ ಆರ್ಡರ್‌ಗಳು" : "Honey Orders", label: isKn ? "ಜೇನುತುಪ್ಪ ಆರ್ಡರ್‌ಗಳು" : "Honey Orders", icon: Droplets },
                    { id: isKn ? "ಸಾಮಾನ್ಯ ವಿಚಾರಣೆಗಳು" : "General Enquiries", label: isKn ? "ಸಾಮಾನ್ಯ ವಿಚಾರಣೆಗಳು" : "General Enquiries", icon: HelpCircle },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isSelected = enquiryType === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setEnquiryType(tab.id)}
                        className={`p-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 text-center cursor-pointer ${
                          isSelected
                            ? "bg-forest text-white shadow-md border-forest"
                            : "bg-stone-50 text-earth-dark border border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isSelected ? "text-honey" : "text-stone-400"}`} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold">{isKn ? "ಸಂದೇಶ ಸಿದ್ಧಗೊಂಡಿದೆ!" : "Message generated!"}</p>
                    <p className="text-xs mt-0.5">{t("contact_success")}</p>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                      {t("contact_field_name")}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t("contact_field_name_ph")}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 text-sm bg-stone-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                      {t("contact_field_phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("contact_field_phone_ph")}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 text-sm bg-stone-50"
                    />
                  </div>
                </div>

                {/* Email & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                      {t("contact_field_email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact_field_email_ph")}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 text-sm bg-stone-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                      {t("contact_field_subject")}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t("contact_field_subject_ph")}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 text-sm bg-stone-50"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                    {t("contact_field_message")}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder={t("contact_field_message_ph")}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 text-sm bg-stone-50"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-forest hover:bg-forest-800 text-white font-bold text-base shadow-elevated hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-honey" />
                  <span>{t("contact_btn_send_wa")}</span>
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>

      {/* ===================== GOOGLE MAPS SECTION ===================== */}
      <section className="py-16 bg-cream-soft border-t border-honey/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={isKn ? "ಜೇನು ಕೃಷಿ ಮತ್ತು ಪಾರಂಪರಿಕ ತಾಣ" : "Apiary & Heritage Location"}
            sanskrit="तीर्थहल्ली वन प्रदेशः"
            title={isKn ? "ಪಶ್ಚಿಮ ಘಟ್ಟಗಳಲ್ಲಿ ನಮ್ಮ ತಾಣವನ್ನು ಗುರುತಿಸಿ" : "Locate Us in the Western Ghats"}
            subtitle={isKn ? "ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲೆಯ ತೀರ್ಥಹಳ್ಳಿಯ ಹಸಿರು ಕಾನನದ ಮಧ್ಯೆ ನೆಲೆಸಿದೆ." : "Nestled amidst the lush rainforests of Thirthahalli, Shivamogga, Karnataka."}
          />

          <div className="rounded-3xl overflow-hidden shadow-elevated border-2 border-honey/30 bg-white">
            <div className="relative w-full h-[400px]">
              <iframe
                title="Yujamrutha Location - Thirthahalli Shivamogga"
                src="https://maps.google.com/maps?q=Thirthahalli%20Shivamogga%20Karnataka&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-105"
              ></iframe>

              <div className="absolute bottom-6 left-6 max-w-sm bg-forest-950/95 backdrop-blur-md p-4 rounded-2xl border border-honey/30 text-cream shadow-2xl">
                <div className="flex items-center gap-2 text-honey text-xs font-bold uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4 text-honey" />
                  <span>{isKn ? "ಯುಜಾಮೃತ ಜೇನು ಕೃಷಿ ಕೇಂದ್ರ" : "Yujamrutha Apiaries"}</span>
                </div>
                <p className="text-white text-sm font-semibold">{BRAND_INFO.address}</p>
                <p className="text-xs text-cream/70 mt-1">{isKn ? `ಸ್ಥಳದ ನಿರ್ದೇಶಾಂಕಗಳು: ${BRAND_INFO.mapCoordinates}` : `Coordinates: ${BRAND_INFO.mapCoordinates}`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
