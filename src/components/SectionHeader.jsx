import React from "react";

export default function SectionHeader({
  badge,
  sanskrit,
  title,
  subtitle,
  centered = true,
  theme = "dark" // "dark" (on light cream bg) or "light" (on dark forest bg)
}) {
  const isLight = theme === "light";

  return (
    <div className={`mb-8 sm:mb-12 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {/* Badge / Pill */}
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-2.5 sm:mb-3 ${
          isLight 
            ? "bg-honey/20 text-honey-light border border-honey/40" 
            : "bg-forest-100 text-forest border border-forest-500/20"
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-honey animate-pulse"></span>
          {badge}
        </div>
      )}

      {/* Sanskrit / Decorative Tagline */}
      {sanskrit && (
        <span className={`block font-decorative text-sm sm:text-base md:text-lg italic tracking-wide mb-1 ${
          isLight ? "text-honey-glow" : "text-honey-dark"
        }`}>
          {sanskrit}
        </span>
      )}

      {/* Main Title */}
      <h2 className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 ${
        isLight ? "text-white" : "text-forest"
      }`}>
        {title}
      </h2>

      {/* Flourish Divider */}
      <div className={`flex items-center gap-2.5 sm:gap-3 my-3 sm:my-4 ${centered ? "justify-center" : "justify-start"}`}>
        <div className={`h-[1px] w-8 sm:w-16 ${isLight ? "bg-honey/40" : "bg-honey"}`}></div>
        <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rotate-45 bg-honey rounded-xs"></div>
        <div className={`h-[1px] w-8 sm:w-16 ${isLight ? "bg-honey/40" : "bg-honey"}`}></div>
      </div>

      {/* Descriptive Subtitle */}
      {subtitle && (
        <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${
          isLight ? "text-cream/80" : "text-earth-dark/80"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
