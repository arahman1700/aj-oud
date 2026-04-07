"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { GoldParticles } from "@/components/ui/gold-particles";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function AnimatedHero() {
  const t = useTranslations("Home");
  const pt = useTranslations("Product");

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero/hero-main.png)" }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/30 to-transparent" />

      {/* Gold particles floating */}
      <div className="absolute inset-0">
        <GoldParticles />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Animated logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/logo-light.png"
            alt="AJoud"
            className="mx-auto h-24 md:h-36 w-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Title with letter stagger */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-heading text-brand-beige mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t("heroTitle")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-brand-gold-light mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t("heroSubtitle")}
        </motion.p>

        {/* CTA Button with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark px-10 py-4 text-lg font-semibold rounded-sm hover:bg-brand-gold-light transition-all duration-500 hover:shadow-[0_0_30px_rgba(188,156,96,0.3)] hover:scale-105"
          >
            {t("heroButton")}
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ←
            </motion.span>
          </Link>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-brand-beige/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[pt("authentic"), pt("freeShipping"), pt("delivery")].map(
            (text, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                {text}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 start-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-brand-gold/30 flex items-start justify-center pt-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-brand-gold"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
