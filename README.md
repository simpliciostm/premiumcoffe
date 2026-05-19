# Café Aurora - Landing Page Premium

Template comercial de landing page para cafeterias locais, desenvolvido com:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm start
```

## Deploy

### Vercel
1. Conecte o repositório na Vercel.
2. Framework detectado automaticamente: `Next.js`.
3. Deploy padrão.

### Netlify
1. Conecte o repositório na Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Recomendado usar o plugin oficial da Netlify para Next.js.

## Estrutura

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  sections/
    about.tsx
    features.tsx
    final-cta.tsx
    footer.tsx
    gallery.tsx
    header.tsx
    hero.tsx
    location-hours.tsx
    menu-preview.tsx
  ui/
    motion-reveal.tsx
    section-intro.tsx
```

## Personalização rápida

- Atualize os links de WhatsApp nos componentes `hero.tsx`, `final-cta.tsx` e `footer.tsx`.
- Troque placeholders da galeria por fotos reais.
- Ajuste cores no `app/globals.css` (variáveis CSS).
- Atualize itens e preços em `menu-preview.tsx`.
