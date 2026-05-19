# Café Aurora - Landing Page Premium

Template comercial para cafeterias locais com foco em apresentação, conversão e deploy rápido.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Funcionalidades comerciais

- SEO completo (`title`, `description`, `keywords`, canonical)
- Open Graph otimizado para compartilhamento no WhatsApp
- Favicon configurado
- Botão flutuante de WhatsApp
- Links de WhatsApp e Instagram centralizados e configuráveis
- Imagens otimizadas com `next/image`

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm start
```

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/seuinstagram
```

Observações:
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: use apenas números com DDI e DDD.
- Esses valores são usados em SEO, Open Graph e botões de contato.

## Deploy na Netlify

### Opção recomendada (com suporte completo para Next.js)

1. Conecte o repositório na Netlify.
2. Em **Project configuration**:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Adicione as variáveis de ambiente:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_INSTAGRAM_URL`
4. Ative o runtime/plugin de Next.js da Netlify (quando sugerido pela plataforma).
5. Faça o deploy.

### Checklist pós-deploy

1. Abra a URL publicada e valide os links de WhatsApp/Instagram.
2. Teste compartilhamento no WhatsApp para confirmar o card Open Graph.
3. Rode Lighthouse para checar performance e acessibilidade.

## Estrutura do projeto

```text
app/
  globals.css
  layout.tsx
  opengraph-image.tsx
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
    whatsapp-floating-button.tsx
lib/
  site-config.ts
public/
  favicon.svg
  images/
```
