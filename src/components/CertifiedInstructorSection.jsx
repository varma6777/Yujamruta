import React, { useState, useEffect } from "react";
import { 
  Award, 
  CheckCircle2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  X, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  Building2
} from "lucide-react";
import { TraditionalMandala, FloatingLeaf } from "./BotanicalElements";
import { useLanguage } from "../context/LanguageContext";
import { getCertificatesData } from "../data/siteData";

const DEFAULT_CERTIFICATES = [
  {
    id: "svyasa-yic",
    title: "Yoga Instructor's Course (Y.I.C.)",
    shortTitle: "S-VYASA Yoga Instructor's Course",
    institution: "Swami Vivekananda Yoga Anusandhana Samsthana (S-VYASA)",
    institutionBadge: "Deemed to be University • NAAC A+ Accredited",
    image: "/assets/images/svyasa-yic-certificate.jpg",
    alt: "Swami Vivekananda Yoga Anusandhana Samsthana - Yoga Instructor's Course Certificate for Abhinandan K K",
    description: "Certified professional yoga instructor course comprising rigorous theory, classical asana alignment, pranayama, and therapeutic yogic pedagogy.",
    details: [
      "Successfully completed the Yoga Instructor's Course.",
      "12 Credit Course comprising 300 Hours of Learning.",
      "Conducted at Prashanti Kutiram, Jigani, Bengaluru.",
      "Completed in September 2026."
    ],
    credentialTag: "300 Hours • 12 Credits",
    issueDate: "September 2026",
    regNo: "Reg. No: SVYASA/YICR/BATCH.NO279/0926/008"
  },
  {
    id: "kuvempu-championship",
    title: "University-Level Yoga Participation Certificate",
    shortTitle: "Kuvempu University Championship",
    institution: "Kuvempu University – Directorate of Physical Education",
    institutionBadge: "Directorate of Physical Education • Shivamogga",
    image: "/assets/images/kuvempu-university-certificate.jpg",
    alt: "Kuvempu University Directorate of Physical Education - Yoga Participation Certificate for Abhinandan K K",
    description: "Official university representation certificate acknowledging competitive participation in Men's Yoga at inter-university championship circuits.",
    details: [
      "Represented Kuvempu University in Yoga (Men).",
      "Participated in the competition at Anna University, Chennai.",
      "Competition dates: 01/12/2023 to 04/12/2023.",
      "Academic year: 2023–24."
    ],
    credentialTag: "Inter-University Level • Men's Yoga",
    issueDate: "Academic Year 2023–24",
    regNo: "Certificate No. 179"
  }
];

export default function CertifiedInstructorSection() {
  const { language, t } = useLanguage();
  const isKn = language === "kn";
  const certificates = getCertificatesData(language, DEFAULT_CERTIFICATES);

  const [activeCertIndex, setActiveCertIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Close modal on Escape key and allow keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveCertIndex(null);
      }
      if (e.key === "ArrowRight" && activeCertIndex !== null) {
        setActiveCertIndex((prev) => (prev + 1) % certificates.length);
        setZoomLevel(1);
      }
      if (e.key === "ArrowLeft" && activeCertIndex !== null) {
        setActiveCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
        setZoomLevel(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCertIndex, certificates.length]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeCertIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setZoomLevel(1);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeCertIndex]);

  const openModal = (index) => {
    setActiveCertIndex(index);
    setZoomLevel(1);
  };

  const closeModal = () => {
    setActiveCertIndex(null);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(Number((prev + 0.35).toFixed(2)), 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(Number((prev - 0.35).toFixed(2)), 1));
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
  };

  const activeCert = activeCertIndex !== null ? certificates[activeCertIndex] : null;

  return (
    <section 
      id="certified-instructor" 
      className="py-20 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950 text-cream relative overflow-hidden border-t-2 border-b-2 border-honey/30"
    >
      {/* Background traditional elements */}
      <div className="absolute inset-0 bg-mandala pointer-events-none opacity-20"></div>
      <TraditionalMandala className="absolute -top-16 -left-16 opacity-25 text-honey pointer-events-none" size={320} />
      <TraditionalMandala className="absolute -bottom-16 -right-16 opacity-25 text-honey pointer-events-none" size={320} />
      <FloatingLeaf className="top-12 right-12" delay="1s" />
      <FloatingLeaf className="bottom-14 left-10" delay="3s" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/15 border border-honey/40 text-honey-light text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-honey" />
            <span>{t("cert_badge")}</span>
          </div>

          <p className="text-honey-dark font-decorative italic text-base sm:text-lg mb-2">
            {t("cert_sanskrit")}
          </p>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            {t("cert_title")}
          </h2>

          <p className="font-decorative italic text-xl sm:text-2xl text-honey font-medium mb-4">
            {t("cert_quote")}
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-honey to-transparent mx-auto mb-6"></div>

          <p className="text-cream/90 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            {isKn ? (
              <>
                ನಮ್ಮ ಯೋಗ ತರಗತಿಗಳನ್ನು ಔಪಚಾರಿಕ ವಿಶ್ವವಿದ್ಯಾಲಯ ತರಬೇತಿ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಸ್ಪರ್ಧಾ ಅನುಭವ ಹೊಂದಿರುವ ಪ್ರಮಾಣೀಕೃತ ಯೋಗ ಗುರು <strong className="text-white font-semibold">ಅಭಿನಂದನ್ ಕೆ ಕೆ</strong> ಅವರು ಮುನ್ನಡೆಸುತ್ತಾರೆ.
              </>
            ) : (
              <>
                Our yoga sessions are guided by <strong className="text-white font-semibold">Abhinandan K K</strong>, a certified Yoga Instructor with professional yoga training and university-level sports participation experience.
              </>
            )}
          </p>
        </div>

        {/* ===================== TWO HORIZONTAL CERTIFICATE CARDS ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-forest-900/85 backdrop-blur-md rounded-2xl sm:rounded-3xl border-2 border-honey/35 hover:border-honey p-5 sm:p-8 shadow-elevated hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-honey/10 to-transparent rounded-bl-full pointer-events-none"></div>

              <div>
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-honey/15 text-honey-light border border-honey/30">
                    <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-honey" />
                    <span>{cert.institutionBadge}</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-cream/70 bg-forest-950/80 px-2 py-0.5 rounded-md border border-forest-800">
                    {cert.regNo}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-honey-light transition-colors mb-1.5 sm:mb-2 leading-tight">
                  {cert.title}
                </h3>

                {/* Institution Name */}
                <p className="font-serif text-honey font-semibold text-xs sm:text-base flex items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
                  <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-honey shrink-0" />
                  <span>{cert.institution}</span>
                </p>

                {/* Short description */}
                <p className="text-cream/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 italic border-l-2 border-honey/40 pl-2.5 sm:pl-3">
                  {cert.description}
                </p>

                {/* Certificate Image Preview Box */}
                <div 
                  onClick={() => openModal(index)}
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-honey/30 bg-forest-950/90 p-2 sm:p-3 mb-5 sm:mb-6 cursor-pointer group/img shadow-inner transition-all hover:border-honey hover:shadow-honey/20"
                  title={isKn ? "ಪೂರ್ಣ ಪ್ರಮಾಣಪತ್ರ ನೋಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ" : "Click to view full certificate and inspect details"}
                >
                  <div className="relative w-full h-[220px] sm:h-[300px] rounded-lg sm:rounded-xl overflow-hidden bg-forest-950 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.alt}
                      className="w-full h-full object-contain filter group-hover/img:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Hover Inspect Overlay */}
                    <div className="absolute inset-0 bg-forest-950/65 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2.5 p-4 text-center backdrop-blur-[2px]">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-honey text-forest-950 flex items-center justify-center shadow-lg transform group-hover/img:scale-110 transition-transform">
                        <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-white text-xs sm:text-sm font-bold bg-forest-900/95 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-honey/40 shadow-md">
                        {isKn ? "ಪ್ರಮಾಣಪತ್ರ ಪರಿಶೀಲಿಸಿ" : "Click to Inspect Certificate"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 px-1 text-[10px] sm:text-[11px] text-cream/70">
                    <span className="flex items-center gap-1 font-medium">
                      <Sparkles className="w-3 h-3 text-honey" /> {isKn ? "ಮೂಲ ಪ್ರಮಾಣಪತ್ರ" : "Original Certificate"}
                    </span>
                    <span className="text-honey font-semibold flex items-center gap-1">
                      <ZoomIn className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {isKn ? "ಪೂರ್ಣ ಜೂಮ್" : "Full Zoom"}
                    </span>
                  </div>
                </div>

                {/* Details List */}
                <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                  {cert.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-cream/85">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-honey shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Certificate Button */}
              <div className="pt-2 border-t border-forest-800/80">
                <button
                  type="button"
                  onClick={() => openModal(index)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-honey via-honey-light to-honey text-forest-950 hover:text-white hover:from-forest-800 hover:to-forest-900 font-bold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-honey hover:shadow-elevated transition-all duration-300 text-xs sm:text-sm border border-honey active:scale-98 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>{t("cert_btn_view_full")}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ===================== FULLSCREEN LIGHTBOX / MODAL ===================== */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-md flex flex-col justify-between p-2 sm:p-6 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between gap-2 sm:gap-4 bg-forest-900/95 border border-honey/30 rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-4 sm:py-3 text-cream shadow-xl z-20">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-honey/20 border border-honey/40 flex items-center justify-center text-honey shrink-0">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-xs sm:text-base font-bold text-white truncate">
                  {activeCert.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-honey truncate">
                  {activeCert.institution}
                </p>
              </div>
            </div>

            {/* Zoom Controls & Close Button */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Zoom Out */}
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-forest-800 hover:bg-forest-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors border border-forest-700 cursor-pointer"
                title={t("cert_modal_zoom_out")}
                aria-label={t("cert_modal_zoom_out")}
              >
                <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Zoom Reset */}
              <button
                type="button"
                onClick={handleZoomReset}
                disabled={zoomLevel === 1}
                className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-forest-800 hover:bg-forest-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors border border-forest-700 cursor-pointer flex items-center gap-1 text-[11px] font-mono"
                title={t("cert_modal_reset")}
                aria-label={t("cert_modal_reset")}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{Math.round(zoomLevel * 100)}%</span>
              </button>

              {/* Zoom In */}
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.5}
                className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-forest-800 hover:bg-forest-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors border border-forest-700 cursor-pointer"
                title={t("cert_modal_zoom_in")}
                aria-label={t("cert_modal_zoom_in")}
              >
                <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <div className="h-5 w-px bg-forest-700 mx-0.5 sm:mx-1"></div>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-honey hover:bg-honey-dark text-forest-950 font-bold transition-all shadow-md cursor-pointer flex items-center gap-1"
                title={t("cert_modal_close")}
                aria-label={t("cert_modal_close")}
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline text-xs">{t("btn_close")}</span>
              </button>
            </div>
          </div>

          {/* Modal Central Certificate Preview Viewport */}
          <div className="flex-1 relative overflow-auto my-2 sm:my-3 rounded-xl sm:rounded-2xl bg-forest-950/70 border border-forest-800 flex items-center justify-center p-2 sm:p-4">
            <div 
              className="transition-transform duration-200 ease-out flex items-center justify-center max-w-full max-h-full"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={activeCert.image}
                alt={activeCert.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-honey/20"
              />
            </div>

            {/* Left Nav Arrow */}
            <button
              type="button"
              onClick={() => {
                setActiveCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
                setZoomLevel(1);
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-forest-900/90 hover:bg-honey hover:text-forest-950 text-white border border-honey/40 shadow-xl transition-all cursor-pointer"
              title={t("cert_modal_prev")}
              aria-label={t("cert_modal_prev")}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Nav Arrow */}
            <button
              type="button"
              onClick={() => {
                setActiveCertIndex((prev) => (prev + 1) % certificates.length);
                setZoomLevel(1);
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-forest-900/90 hover:bg-honey hover:text-forest-950 text-white border border-honey/40 shadow-xl transition-all cursor-pointer"
              title={t("cert_modal_next")}
              aria-label={t("cert_modal_next")}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Bottom Info Bar */}
          <div className="bg-forest-900/95 border border-honey/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-cream shadow-xl z-20 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <div className="text-xs sm:text-sm">
              <span className="font-semibold text-honey">{activeCert.credentialTag}</span>
              <span className="text-cream/60 mx-2 hidden sm:inline">•</span>
              <span className="text-cream/80">{activeCert.regNo}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-cream/70 bg-forest-950 px-2.5 py-1 rounded-full border border-forest-800">
                {activeCertIndex + 1} / {certificates.length}
              </span>
              <button
                type="button"
                onClick={closeModal}
                className="text-xs font-semibold text-honey hover:text-honey-light underline px-2 py-1 cursor-pointer"
              >
                {t("btn_close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}