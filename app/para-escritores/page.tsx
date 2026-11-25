import type { Metadata } from "next";
import Link from "next/link";
import { contactHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plataforma para Escritores: Sua Livraria Digital | COSAQ Digital",
  description: "Tenha uma livraria digital com sua identidade. Venda ebooks diretamente aos leitores, com leitura online e sem comissão da COSAQ sobre suas vendas.",
  alternates: { canonical: "/para-escritores" },
  openGraph: {
    title: "Seu livro. Sua plataforma. Suas vendas. | COSAQ Digital",
    description: "Sua própria livraria digital, personalizada para apresentar, vender e valorizar suas obras.",
    url: "https://cosaqdigital.com/para-escritores",
    type: "website",
  },
};

const inquiry = (reason: string) => contactHref("Plataforma para escritores — " + reason);
const primary = "inline-flex min-h-13 items-center justify-center rounded-lg bg-[#0a84ff] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#006fe0] focus-visible:outline-2 focus-visible:outline-offset-4";
const secondary = "inline-flex min-h-13 items-center justify-center rounded-lg border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#85c1ff] hover:bg-white/5";
const label = "mb-5 text-xs font-semibold uppercase tracking-[.22em] text-[#8fc7ff]";
const title = "max-w-4xl text-[clamp(2.3rem,5vw,4.4rem)] leading-[1.08] font-medium tracking-[-.055em] text-white";
const muted = "max-w-2xl text-base leading-8 text-slate-300 md:text-lg";

const capabilities = [
  ["Sua identidade", "Uma presença digital com a sua apresentação, cores, biografia e universo literário."],
  ["Sua vitrine", "Livros, lançamentos e coleções organizados em um espaço que valoriza suas obras."],
  ["Leitura digital", "Ambiente de acesso para os leitores, com recursos definidos conforme a solução contratada."],
  ["Vendas diretas", "Uma jornada comercial conectada à sua plataforma e ao meio de pagamento configurado."],
];

const audiences = [
  ["Seu primeiro livro", "Apresente sua estreia com uma experiência profissional."],
  ["Autores independentes", "Construa uma presença própria, além das vitrines de terceiros."],
  ["Catálogos em expansão", "Organize seus livros e prepare a divulgação dos próximos lançamentos."],
];

const steps = [
  ["01", "Conte sua história", "Entendemos seus livros, público e objetivos."],
  ["02", "Conheça a proposta", "Apresentamos a estrutura e os recursos indicados."],
  ["03", "Personalize seu espaço", "Definimos identidade, escopo, investimento e cronograma."],
  ["04", "Prepare seu lançamento", "Configuramos, validamos e ativamos conforme o contrato."],
];

const plans = [
  { name: "Essencial", who: "Para começar com presença profissional", setup: "R$ 990", monthly: "R$ 147", highlight: false },
  { name: "Profissional", who: "Para fortalecer sua marca literária", setup: "R$ 1.490", monthly: "R$ 197", highlight: true },
  { name: "Premium", who: "Para catálogos e personalizações maiores", setup: "R$ 3.490", monthly: "R$ 397", highlight: false },
];

const faq = [
  ["Preciso ter vários livros?", "Não. O projeto pode atender quem está lançando a primeira obra ou quem já tem um catálogo."],
  ["A plataforma terá minha identidade?", "Sim. O nível de personalização depende do plano e do escopo contratados."],
  ["A COSAQ fica com parte das minhas vendas?", "Não cobramos comissão da COSAQ sobre vendas diretas de livros. Taxas do processador de pagamento, tributos e serviços terceiros podem ser aplicáveis."],
  ["Posso usar meu próprio domínio?", "Sim, conforme o plano e a configuração. Registro e renovação podem ser cobrados à parte."],
  ["Posso continuar vendendo em outros lugares?", "Em princípio, sim, desde que seus contratos de publicação e distribuição não imponham exclusividade."],
  ["Vou receber compradores automaticamente?", "A plataforma oferece a estrutura para apresentação e venda. Tráfego, anúncios e divulgação são serviços distintos e não há garantia de vendas."],
  ["Quem é dono dos meus livros?", "Os direitos autorais permanecem com seus titulares. A tecnologia é disponibilizada sob licença conforme o contrato."],
  ["E se eu cancelar?", "Prazos de encerramento, dados exportáveis e continuidade de acesso serão definidos no contrato."],
];

export default function WritersLandingPage() {
  return (
    <main id="conteudo" className="overflow-hidden bg-[#050a13] text-white">
      <section className="relative isolate border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_82%_25%,rgba(10,132,255,.23),transparent_50%)]" />
        <div className="shell grid gap-14 py-20 lg:grid-cols-[1.07fr_.93fr] lg:items-center lg:py-32">
          <div>
            <p className={label}>COSAQ Digital / Soluções para escritores</p>
            <h1 className="max-w-3xl text-[clamp(3rem,6.6vw,6.4rem)] leading-[1.02] font-medium tracking-[-.065em]">
              Seu livro.<br /><span className="text-[#70b7ff]">Sua plataforma.</span><br />Suas vendas.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Sua história merece um lugar que seja seu. Tenha uma livraria digital personalizada para apresentar suas obras, vender diretamente e oferecer uma experiência especial aos seus leitores.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#contato-escritores" className={primary}>Quero minha plataforma <span aria-hidden="true" className="ml-3">↗</span></Link>
              <Link href="#experiencia" className={secondary}>Conhecer a experiência</Link>
            </div>
            <p className="mt-5 text-sm text-slate-400">Uma plataforma com a sua marca. Tecnologia e implantação pela COSAQ Digital.</p>
          </div>
          <div className="relative" aria-label="Representação ilustrativa de uma livraria digital em vários dispositivos">
            <div className="absolute -inset-8 -z-10 rounded-full bg-blue-600/15 blur-3xl" />
            <div className="rounded-2xl border border-[#355079] bg-[#0a1426] p-3 shadow-[0_40px_110px_rgba(0,0,0,.45)] sm:p-5">
              <div className="mb-3 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-slate-500"/><span className="h-2 w-2 rounded-full bg-slate-500"/><span className="h-2 w-2 rounded-full bg-slate-500"/><span className="ml-3 text-[10px] text-slate-500">Exemplo de apresentação visual</span></div>
              <div className="rounded-xl border border-[#283959] bg-[linear-gradient(125deg,#101f3a,#050a13)] px-6 py-8 sm:px-9">
                <div className="flex items-center justify-between text-[10px] font-semibold tracking-[.18em] text-slate-300"><span>ESTÚDIO LITERÁRIO</span><span>OBRAS · SOBRE</span></div>
                <div className="mt-10 max-w-xs text-3xl leading-tight font-medium tracking-tight sm:text-4xl">Histórias que ficam com você.</div>
                <div className="mt-3 text-sm text-slate-400">Descubra mundos, personagens e novas páginas.</div>
                <div className="mt-7 flex gap-3">
                  {["O PRIMEIRO CAPÍTULO", "ENTRE MUNDOS", "DEPOIS DO FIM"].map((book, i) => <div key={book} className={`flex aspect-[3/4] min-w-0 flex-1 items-end rounded-md border border-white/10 p-2 text-[9px] font-bold leading-tight shadow-xl sm:p-3 sm:text-xs ${i===0?"bg-gradient-to-br from-[#2763a9] to-[#111a36]":i===1?"bg-gradient-to-br from-[#643c85] to-[#151327]":"bg-gradient-to-br from-[#965c48] to-[#231522]"}`}>{book}</div>)}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-3 w-[37%] rounded-2xl border-4 border-[#314767] bg-[#091426] p-3 shadow-2xl sm:-right-8">
              <div className="h-1.5 w-9 mx-auto rounded-full bg-slate-600" />
              <p className="mt-5 text-center text-[10px] uppercase tracking-widest text-[#8fc7ff]">Leitor digital</p>
              <div className="mt-4 text-center text-base font-medium">Capítulo 01</div>
              <div className="mt-4 space-y-2">{[100,90,97,78,98,85].map((v,i)=><div key={i} className="h-1 rounded bg-slate-500/40" style={{width:`${v}%`}}/>)}</div>
              <p className="mt-5 text-center text-[9px] text-slate-500">Exemplo ilustrativo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell section grid gap-8 lg:grid-cols-2 lg:items-center">
        <div><p className={label}>Sua história merece destaque</p><h2 className={title}>Você criou um universo. Ele merece um espaço próprio.</h2></div>
        <div><p className={muted}>Seu livro não precisa ser apenas mais um em uma prateleira digital. Em uma livraria própria, o leitor descobre sua obra em uma experiência que traz seu nome, sua identidade e suas histórias para o primeiro plano.</p><Link href="#contato-escritores" className="mt-6 inline-block text-sm font-semibold text-[#8fc7ff] underline underline-offset-8">Quero valorizar minhas obras ↗</Link></div>
      </section>

      <section id="experiencia" className="border-y border-white/10 bg-[#081324]">
        <div className="shell section">
          <p className={label}>Uma plataforma feita para seu universo</p><h2 className={title}>Muito mais do que um site para vender ebooks.</h2>
          <p className={`${muted} mt-6`}>Uma presença digital que conecta apresentação, comercialização e leitura — em uma experiência pensada para escritores.</p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {capabilities.map(([name, description],i)=><article key={name} className="group rounded-2xl border border-[#273c59] bg-[#0a192c] p-7 transition hover:border-[#4284c7] md:p-9"><span className="text-sm text-[#75baff]">0{i+1}</span><h3 className="mt-6 text-2xl font-medium">{name}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="shell section grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div><p className={label}>Mais autonomia</p><h2 className={title}>Sua receita não precisa depender de comissões para a COSAQ.</h2><p className={`${muted} mt-6`}>Nosso modelo é baseado em implantação e manutenção. Você conhece o investimento em tecnologia sem repassar à COSAQ uma porcentagem das vendas diretas de seus livros.</p><p className="mt-5 text-xs leading-6 text-slate-400">Taxas de processamento, impostos e serviços de terceiros podem ser aplicáveis. Uma plataforma própria também exige estratégia de divulgação para atrair leitores.</p></div>
        <div className="rounded-3xl border border-[#2e5e98] bg-[radial-gradient(circle_at_top_right,rgba(10,132,255,.25),transparent_60%),#0a1a30] p-8 sm:p-12"><p className="text-xs uppercase tracking-[.2em] text-[#9fcfff]">Comissão da COSAQ sobre vendas diretas</p><div className="mt-6 text-[clamp(5.5rem,12vw,10rem)] font-medium leading-none tracking-[-.09em]">0%</div><div className="mt-8 h-px bg-white/15" /><p className="mt-7 text-xl font-medium">Sua obra. Seu preço. Seu negócio.</p><p className="mt-2 text-sm text-slate-300">Sem comissões de marketplace cobradas pela COSAQ sobre as vendas diretas.</p></div>
      </section>

      <section className="border-y border-white/10 bg-[#081324]"><div className="shell section"><p className={label}>Para cada fase da sua carreira</p><h2 className={title}>Você é mais do que um livro.</h2><p className={`${muted} mt-6`}>Hoje, uma obra. Amanhã, uma coleção. Sua presença digital pode crescer com você.</p><div className="mt-12 grid gap-5 md:grid-cols-3">{audiences.map(([name,description])=><article className="rounded-2xl border border-white/15 p-7" key={name}><h3 className="text-xl font-medium">{name}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{description}</p></article>)}</div></div></section>

      <section className="shell section"><p className={label}>Como funciona</p><h2 className={title}>Seu próximo capítulo começa com uma conversa.</h2><div className="mt-12 grid gap-4 md:grid-cols-4">{steps.map(([n,name,description])=><div key={n} className="border-t border-[#44648a] pt-6"><span className="text-sm text-[#85c1ff]">{n}</span><h3 className="mt-5 text-xl font-medium">{name}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{description}</p></div>)}</div><Link className={`${primary} mt-10`} href="#contato-escritores">Solicitar apresentação ↗</Link></section>

      <section id="investimento" className="border-y border-white/10 bg-[#081324]"><div className="shell section"><p className={label}>Investimento transparente</p><h2 className={title}>Uma estrutura para o momento da sua carreira.</h2><p className={`${muted} mt-6`}>Conheça nossos valores iniciais de referência. Cada proposta detalha o escopo, recursos, personalizações, custos de terceiros e prazo de implantação.</p><div className="mt-12 grid gap-5 lg:grid-cols-3">{plans.map(plan=><article key={plan.name} className={`flex flex-col rounded-2xl border p-7 ${plan.highlight?"border-[#0a84ff] bg-[#0b2545]":"border-white/15 bg-[#0b182a]"}`}><div className="flex items-center justify-between gap-2"><h3 className="text-2xl font-medium">{plan.name}</h3>{plan.highlight&&<span className="rounded-full bg-[#0a84ff]/20 px-3 py-1 text-[10px] font-semibold text-[#afd7ff]">Recomendado</span>}</div><p className="mt-3 min-h-14 text-sm text-slate-300">{plan.who}</p><div className="mt-6 text-xs text-slate-400">Implantação a partir de</div><div className="mt-1 text-3xl font-medium">{plan.setup}</div><div className="mt-5 text-xs text-slate-400">Manutenção a partir de</div><div className="mt-1 text-xl font-medium">{plan.monthly}<span className="text-sm text-slate-400">/mês</span></div><Link className={`${plan.highlight?primary:secondary} mt-9 w-full`} href={inquiry("Plano "+plan.name)}>Solicitar proposta ↗</Link></article>)}</div><p className="mt-6 text-xs leading-6 text-slate-400">Plano recomendado pela COSAQ, sem alegação de popularidade. Valores sujeitos à definição do escopo e confirmação na proposta. Recursos em desenvolvimento só serão contratados com prazo e especificações expressos.</p></div></section>

      <section className="shell section"><p className={label}>Dúvidas frequentes</p><h2 className={title}>Tudo mais claro para sua decisão.</h2><div className="mt-12 max-w-4xl divide-y divide-white/15 border-y border-white/15">{faq.map(([question,answer])=><details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-medium marker:hidden sm:text-lg">{question}<span aria-hidden="true" className="text-2xl text-[#85c1ff] group-open:rotate-45 transition">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-7 text-slate-300">{answer}</p></details>)}</div></section>

      <section id="contato-escritores" className="border-t border-white/10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(10,132,255,.2),transparent_65%),#081324]"><div className="shell section text-center"><p className={label}>Sua história merece um lugar próprio</p><h2 className={`${title} mx-auto`}>Você já criou a história. Agora tenha um espaço à altura dela.</h2><p className={`${muted} mx-auto mt-7`}>Conte-nos sobre suas obras e receba uma apresentação personalizada das possibilidades da sua futura plataforma.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Link href={inquiry("Quero minha plataforma literária")} className={primary}>Quero minha plataforma ↗</Link><Link href="mailto:admin@cosaqdigital.com?subject=Plataforma%20para%20escritores" className={secondary}>Enviar e-mail</Link></div><p className="mx-auto mt-6 max-w-xl text-xs leading-6 text-slate-400">Ao entrar em contato, você será encaminhado ao canal comercial da COSAQ Digital. Não há contratação automática nesta página.</p></div></section>
    </main>
  );
}
