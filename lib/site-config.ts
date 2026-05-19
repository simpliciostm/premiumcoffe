const defaultWhatsappNumber = "5514996094830";
const defaultInstagramUrl = "https://instagram.com/atelieraurora.bauru";
const defaultSiteUrl = "https://atelierauroracafe.netlify.app";

function normalizeWhatsappNumber(input: string) {
  return input.replace(/\D/g, "");
}

export const siteConfig = {
  name: "Ateliê Aurora Café",
  shortName: "Ateliê Aurora",
  title: "Ateliê Aurora Café | Cafeteria Boutique em Bauru com Brunch e Cafés Especiais",
  description:
    "Cafeteria boutique em Bauru com cafés especiais, brunch brasileiro e doces artesanais em um ambiente elegante e acolhedor.",
  locale: "pt_BR",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? defaultInstagramUrl,
  instagramHandle: "@atelieraurora.bauru",
  whatsappNumber: normalizeWhatsappNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? defaultWhatsappNumber),
  address: {
    street: "Rua Rio Branco, 12-40",
    district: "Centro",
    city: "Bauru - SP",
    zipCode: "17010-000"
  }
};

export function getWhatsAppLink(message: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const contactLinks = {
  whatsappReservation: getWhatsAppLink("Olá, quero reservar uma mesa no Ateliê Aurora Café."),
  whatsappInfo: getWhatsAppLink("Olá, gostaria de receber o cardápio do Ateliê Aurora Café."),
  whatsappQuick: getWhatsAppLink("Olá, vim pelo site e quero atendimento do Ateliê Aurora Café."),
  instagram: siteConfig.instagramUrl
};

export const fullAddress = `${siteConfig.address.street} - ${siteConfig.address.district}, ${siteConfig.address.city}, CEP ${siteConfig.address.zipCode}`;
