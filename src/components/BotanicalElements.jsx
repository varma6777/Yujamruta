import React from "react";

export function FloatingLeaf({ className = "", delay = "0s", duration = "6s" }) {
  return (
    <div 
      className={`absolute pointer-events-none opacity-40 select-none animate-float-slow ${className}`}
      style={{ animationDelay: delay, animationDuration: duration }}
    >
      <svg className="w-8 h-8 text-natural-light" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
      </svg>
    </div>
  );
}

export function HoneyDropPattern({ className = "" }) {
  return (
    <div className={`pointer-events-none opacity-15 select-none ${className}`}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 6C30 6 42 22 42 34C42 40.6274 36.6274 46 30 46C23.3726 46 18 40.6274 18 34C18 22 30 6 30 6Z" fill="#D99A18"/>
      </svg>
    </div>
  );
}

export function TraditionalMandala({ className = "", size = 200 }) {
  return (
    <svg 
      className={`pointer-events-none select-none opacity-10 text-honey ${className}`} 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="currentColor"
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3"/>
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none"/>
      <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="50" cy="50" r="4" fill="currentColor"/>
    </svg>
  );
}
