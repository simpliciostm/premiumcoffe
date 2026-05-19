"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contactLinks } from "@/lib/site-config";

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={contactLinks.whatsappQuick}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-aurora-coffee px-4 py-3 text-sm font-semibold text-aurora-offwhite shadow-[0_18px_35px_rgba(47,36,29,0.25)] transition hover:bg-[#3a271c] sm:bottom-7 sm:right-7"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.45, ease: "easeOut" }}
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </motion.a>
  );
}
