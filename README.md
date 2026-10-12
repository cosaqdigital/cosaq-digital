# COSAQ Digital

Site comercial em português, construído em Next.js. Serviços, casos de projetos, empresa, briefing de contato, privacidade e SEO técnico.

## Executar

`npm ci`, `npm run dev`. Validar com `npx tsc --noEmit` e `npm run build`.

## Ativar o WhatsApp comercial

Configure `COSAQ_WHATSAPP_NUMBER` no ambiente da hospedagem com o número comercial confirmado, incluindo o código do país e apenas dígitos (sem +, espaços ou pontuação). Publique uma nova versão após configurar. Nenhum número foi inventado ou reutilizado de outro projeto.

Sem um número válido, o briefing permite salvar um resumo e informa que o canal ainda não está disponível. Com o número, o cliente revisa a mensagem, abre o WhatsApp e confirma o envio. O site não anuncia recebimento de um pedido só por preparar ou abrir a mensagem.

## Conteúdo e análise

Dados comerciais em `lib/content.ts`. Atualizar o estágio dos projetos conforme evolução confirmada. Google Analytics preserva a propriedade existente e só carrega mediante consentimento. Canonical e sitemap usam https://www.cosaqdigital.com.

## Antes de produção

Confirmar número e testar envio até o WhatsApp do responsável; conferir informações comerciais e privacidade; validar navegação em celular e computador. Não há e-mail de recebimento configurado nem armazenamento de leads no formulário. Não há garantia de ranking ou vendas. Gestão de redes sociais é identificada como uma área em preparação.
