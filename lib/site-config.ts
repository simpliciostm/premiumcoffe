const defaultWhatsappNumber = "5511999999999";
const defaultInstagramUrl = "https://instagram.com/cafeaurora";
const defaultSiteUrl = "https://cafe-aurora-template.netlify.app";

function normalizeWhatsappNumber(input: string) {
  return input.replace(/\D/g, "");
}

export const siteConfig = {
  name: "Café Aurora",
  shortName: "Café Aurora",
  title: "Café Aurora | Cafeteria Especial, Brunch Artesanal e Ambiente Aconchegante",
  description:
    "Descubra o Café Aurora: cafés especiais, doces artesanais e brunch em um espaço elegante e acolhedor. Reserve sua mesa pelo WhatsApp.",
  locale: "pt_BR",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? defaultInstagramUrl,
  whatsappNumber: normalizeWhatsappNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? defaultWhatsappNumber)
};

export function getWhatsAppLink(message: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const contactLinks = {
  whatsappReservation: getWhatsAppLink("Olá, quero reservar uma mesa no Café Aurora."),
  whatsappInfo: getWhatsAppLink("Olá, gostaria de mais informações sobre o Café Aurora."),
  whatsappQuick: getWhatsAppLink("Olá, vim pelo site e quero atendimento no Café Aurora."),
  instagram: siteConfig.instagramUrl
};
