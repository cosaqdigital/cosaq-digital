# COSAQ Digital

Institutional homepage for COSAQ Digital, built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` runs the production server.
- `npm run lint` checks the app and components.

## Solicitações comerciais

O formulário em `/#contato` usa `POST /api/lead` para encaminhar pedidos a
`admin@cosaqdigital.com`. Para habilitar o envio automático, configure no
projeto COSAQ Digital da Vercel (Production e Preview):

- `RESEND_API_KEY`: chave secreta com permissão de envio, gerada no Resend.
- `RESEND_FROM_EMAIL`: remetente de domínio verificado no Resend, por exemplo
  `COSAQ Digital <contato@cosaqdigital.com>` (somente depois da verificação).

Não coloque essas credenciais no GitHub nem no navegador. Faça um novo deploy após
configurar as variáveis. Antes disso, o formulário mostra erro explícito e oferece
a alternativa de envio pelo aplicativo de e-mail; jamais apresenta sucesso falso.

O endpoint valida campos, origem, consentimento, tamanho de corpo e honeypot.
Para uma operação de alto volume, acrescente defesa distribuída de rate limit,
verificação anti-bot robusta (ex.: Turnstile) e acompanhamento de falhas do
provedor. Eventos GA4 enviados: contact_click, lead_form_start, lead_form_submit,
diagnostic_start, diagnostic_complete, diagnostic_contact_click.
Nenhum dado pessoal é enviado nos eventos do Analytics.

O diagnóstico não envia respostas automaticamente: só transfere o resumo ao
formulário após consentimento e ação explícita. Configure a entrega, faça um teste
real ponta a ponta e monitore os primeiros contatos antes de iniciar anúncios.
