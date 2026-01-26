# Landing Page DM Voz

Uma landing page moderna construída com React, Vite e Tailwind CSS, focada em apresentar serviços, campanhas, especialidades, depoimentos e um formulário de contato integrado via EmailJS.

## O que o projeto faz

- Exibe uma página inicial com seções: Banner, Campanhas, Especialidades da empresa, Sobre a empresa, Depoimentos de clientes, FAQ e Contato.
- Formulário de contato com validação (React Hook Form), máscara para telefone e envio via EmailJS.
- Toasts de notificação (Sonner) personalizados e escopados à seção de contato.
- Carrossel de conteúdo (Embla Carousel) e componentes UI reaproveitáveis.
- Botão flutuante de WhatsApp para contato rápido.

## Por que é útil

- Interface responsiva e acessível com Tailwind CSS.
- Arquitetura de componentes clara (React) e build rápido (Vite).
- Configuração simples para envio de emails sem backend (EmailJS).
- Fácil manutenção: dados estruturados em arquivos JSON no diretório `src/data`.

## Principais Dependências
- React 19, Vite 7, TypeScript
- Tailwind CSS 4, tailwindcss-animate
- React Hook Form, EmailJS (`@emailjs/browser`)
- Sonner (toasts)
- Embla Carousel (+ autoplay)
- Radix UI (accordion/slot)
- Lucide React (ícones)
- `@digicroz/react-floating-whatsapp`