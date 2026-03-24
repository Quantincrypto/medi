import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "We procured a Siemens SOMATOM CT scanner through MedicalEquipment.Africa and had it fully commissioned within 6 weeks. The PPB compliance documentation package saved us months of regulatory back-and-forth — it was the most seamless capital equipment acquisition we've done in a decade.",
    author: "Dr. James Kariuki",
    title: "Chief Radiologist",
    hospital: "Aga Khan University Hospital",
    location: "Nairobi, Kenya",
    initials: "JK",
    color: "bg-teal-600",
  },
  {
    quote: "The team sourced a refurbished Philips Ingenia 1.5T MRI for our imaging centre at a price point that simply wasn't achievable through the OEM channel. Installation support was hands-on and the engineers were on-site within 48 hours when we had a cooling question during commissioning.",
    author: "Dr. Adaora Okonkwo",
    title: "Head of Medical Imaging",
    hospital: "Lagos University Teaching Hospital",
    location: "Lagos, Nigeria",
    initials: "AO",
    color: "bg-blue-600",
  },
  {
    quote: "SAHPRA registration can be a significant barrier to importing imaging equipment. MedicalEquipment.Africa had pre-prepared dossiers for every unit we shortlisted. We selected a GE Logiq E10 ultrasound and were scanning patients within five weeks of signing. Exceptional service.",
    author: "Prof. Michael van der Berg",
    title: "Director of Radiology",
    hospital: "Groote Schuur Hospital",
    location: "Cape Town, South Africa",
    initials: "MV",
    color: "bg-indigo-600",
  },
  {
    quote: "Sourcing quality diagnostic imaging equipment for sub-Saharan Africa is historically fraught with risk. The ISO 13485 certified refurbishment process gave our board the confidence to approve the capital allocation. Our C-arm has been running without incident for over 14 months.",
    author: "Dr. Emmanuel Asante",
    title: "Hospital Administrator",
    hospital: "Korle Bu Teaching Hospital",
    location: "Accra, Ghana",
    initials: "EA",
    color: "bg-emerald-600",
  },
  {
    quote: "We needed a digital X-ray system urgently for our casualty department. MedicalEquipment.Africa had a NAFDAC-compliant unit ready within three weeks. The after-sales support contract has been excellent — remote diagnostics resolved our last fault call within two hours.",
    author: "Dr. Fatima Al-Hassan",
    title: "Consultant Radiologist",
    hospital: "National Hospital Abuja",
    location: "Abuja, Nigeria",
    initials: "FA",
    color: "bg-violet-600",
  },
];

export const TestimonialCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 200);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(next, 6000);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? next() : prev();
      resetAutoPlay();
    }
    touchStartX.current = null;
  };

  const t = testimonials[current];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Card */}
      <div
        className={`bg-white rounded-2xl border border-navy/5 shadow-sm p-8 md:p-10 transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'} select-none`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Quote icon */}
        <Quote className="w-8 h-8 text-teal/30 mb-6" />

        {/* Quote text */}
        <p className="text-navy/80 text-base md:text-lg leading-relaxed mb-8 italic">
          "{t.quote}"
        </p>

        {/* Author row */}
        <div className="flex items-center gap-4">
          <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
            <span className="text-white font-black text-sm">{t.initials}</span>
          </div>
          <div>
            <p className="font-bold text-navy text-sm">{t.author}</p>
            <p className="text-navy/50 text-xs">{t.title} · {t.hospital}</p>
            <p className="text-teal text-xs font-semibold mt-0.5">{t.location}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Dot indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetAutoPlay(); }}
              className={`rounded-full transition-all duration-300 ${i === current ? 'bg-teal w-6 h-2' : 'bg-navy/15 w-2 h-2 hover:bg-navy/30'}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex gap-2">
          <button
            onClick={() => { prev(); resetAutoPlay(); }}
            className="w-9 h-9 rounded-full border border-navy/10 flex items-center justify-center hover:border-teal hover:text-teal transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => { next(); resetAutoPlay(); }}
            className="w-9 h-9 rounded-full border border-navy/10 flex items-center justify-center hover:border-teal hover:text-teal transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
