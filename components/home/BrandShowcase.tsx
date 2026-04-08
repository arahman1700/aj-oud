"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { assetPath } from "@/lib/basePath";

export function BrandShowcase() {
  const t = useTranslations("Home");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${assetPath("/images/brand/luxury-scene.jpg")})`,
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-brand-green-dark/70" />

      {/* Gold line accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <div className="w-16 h-px bg-brand-gold mx-auto mb-4" />
          <div className="w-2 h-2 rounded-full bg-brand-gold mx-auto" />
          <div className="w-16 h-px bg-brand-gold mx-auto mt-4" />
        </motion.div>

        {/* Arabic tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading text-brand-beige mb-6 leading-relaxed"
          dir="rtl"
        >
          {t("taglineAr")}
        </motion.p>

        {/* English tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-brand-gold-light/80 italic tracking-wide"
          dir="ltr"
        >
          {t("taglineEn")}
        </motion.p>

        {/* Decorative bottom element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/logo-light.png"
            alt="AJoud"
            className="mx-auto h-10 w-auto opacity-40"
          />
        </motion.div>
      </div>
    </section>
  );
}
