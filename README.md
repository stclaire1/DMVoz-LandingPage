# DMVoz Producoes - Landing Page

Landing page institucional para a empresa DMVoz Producoes, focada na apresentação de serviços de locução, portfólio de campanhas, demonstrações de audio, depoimentos, FAQ e captação de leads via formulário.

## Site em producao

- https://dmvozproducoes.com.br

## Visao geral

Este projeto foi construido com Next.js (App Router) e organiza a home em blocos de conteúdo reutilizáveis. O foco principal é: apresentar autoridade da marca, mostrar trabalhos reais e facilitar contato por formulario e WhatsApp.

![Print do site](<preview.png>)

## Stack tecnica

- Next.js 16.2 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui + Radix primitives
- Embla Carousel (com autoplay)
- React Hook Form + use-mask-input
- EmailJS (envio de formulario)
- Floating WhatsApp widget
- Sonner (toasts)

## Arquitetura do projeto

```text
app/
	layout.tsx                # metadata global e fonte Montserrat
	page.tsx                  # composicao da home
	globals.css               # tokens de tema e estilos base
	lib/data/
		audios.js               # lista de demos de audio
		videos.js               # lista de campanhas (YouTube)
		testimonials.js         # lista de depoimentos
		faq.js                  # perguntas frequentes

components/
	HeroSection/
	CampaignSection/
	SpecialtiesSection/
		components/ResponsiveAudioPlayer.tsx
	AboutUsSection/
	TestimonialsSection/
		components/TestimonialCard.tsx
	FAQSection/
	ContactUsSection/
	FloatingWhatsappBtn/
	Footer/
	ui/                       # primitives de UI (accordion, button, carousel, etc.)

types/
	audio.ts
	videos.ts
	testimonials.ts
	faq.ts
	formData.ts
```

## Scripts disponiveis

```bash
npm run dev     # sobe ambiente de desenvolvimento
npm run build   # gera build de producao
npm run start   # inicia app em modo producao
npm run lint    # executa lint
```

## Como rodar localmente

### 1. Pre-requisitos

- Node.js 20+ recomendado
- npm 10+ recomendado

### 2. Instalar dependencias

```bash
npm install
```

### 3. Executar ambiente de desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Gestao de conteudo

Edições de conteudo podem ser feitas sem alterar logica de componentes:

- Videos: `app/lib/data/videos.js`
- Audios: `app/lib/data/audios.js`
- Depoimentos: `app/lib/data/testimonials.js`
- FAQ: `app/lib/data/faq.js`

Arquivos de midia ficam em `public/` (ex.: `public/audios` e `public/images`).