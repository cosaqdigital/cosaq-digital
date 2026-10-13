import Link from "next/link";
import Image from "next/image";

const services = [
  { icon: "◫", title: "Sites profissionais", description: "Uma presença digital que apresenta seus serviços com clareza, inspira confiança e facilita o contato de novos clientes." },
  { icon: "◇", title: "Plataformas digitais", description: "Produtos digitais com cadastros, áreas de usuários, regras de negócio e funcionalidades próprias." },
  { icon: "⚡", title: "Automações", description: "Integrações e processos inteligentes para reduzir tarefas repetitivas e organizar sua operação." },
  { icon: "⌘", title: "Sistemas personalizados", description: "Ferramentas sob medida para controlar informações, solicitações, equipes e oportunidades." },
];

const projects = [
  { title: "Orçamentos Brasil", tag: "BRASIL • PLATAFORMA DE SERVIÇOS", description: "Uma plataforma que conecta clientes e prestadores de serviços no Brasil. Desenvolvida com cadastros, oportunidades, pagamentos e comunicação entre usuários.", image: "/projects/orcamentos-brasil.png", href: "https://orcamentobrasil.com", accent: "emerald" },
  { title: "GetEstimateFast", tag: "ESTADOS UNIDOS • PLATAFORMA DE ORÇAMENTOS", description: "Uma plataforma americana para solicitar orçamentos de serviços residenciais, com fluxos digitais de pedidos e atendimento.", image: "/projects/getestimatefast.png", href: "https://www.getestimatefast.com", accent: "blue" },
];

const questions = [
  { title: "Seus clientes encontram e confiam na sua empresa?", detail: "Um site claro e profissional pode tornar seus serviços mais fáceis de conhecer e contratar." },
  { title: "Sua equipe repete tarefas que poderiam ser automáticas?", detail: "A tecnologia pode integrar etapas de atendimento, comunicação e organização." },
  { title: "Você perde solicitações ou oportunidades no dia a dia?", detail: "Sistemas podem organizar contatos, pedidos e etapas de acompanhamento." },
  { title: "Tem uma ideia que poderia se tornar uma plataforma?", detail: "Podemos avaliar a viabilidade e o caminho para transformar a ideia em produto digital." },
];

function ContactButton({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return <a href="mailto:hello@cosaqdigital.com?subject=Quero%20conversar%20sobre%20meu%20projeto" className={secondary ? "inline-flex min-h-12 items-center justify-center rounded-xl border border-sky-400/40 bg-slate-950/50 px-6 text-sm font-semibold text-white transition hover:border-sky-300 hover:bg-slate-800" : "inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(0,119,255,.24)] transition hover:brightness-110"}>{children}</a>;
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050c17] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(0,117,255,.18),transparent_42%),radial-gradient(ellipse_at_12%_45%,rgba(0,71,158,.11),transparent_40%)]" />
      <header className="relative z-30 border-b border-white/10 bg-[#050b16]/95">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 lg:px-8">
          <Link href="#inicio" aria-label="COSAQ Digital" className="flex items-center">
            {/* Logotipo tipográfico temporário; substituir APENAS pelo arquivo original da marca. */}
            <span className="font-display text-xl font-semibold tracking-[.22em] text-white">COSAQ <span className="text-sky-400">DIGITAL</span></span>
          </Link>
          <nav aria-label="Navegação principal" className="order-3 flex w-full gap-5 overflow-x-auto text-sm text-slate-300 md:order-2 md:w-auto">
            <Link href="#inicio" className="hover:text-sky-400">Início</Link><Link href="#solucoes" className="hover:text-sky-400">Soluções</Link><Link href="#projetos" className="hover:text-sky-400">Projetos</Link><Link href="#diagnostico" className="hover:text-sky-400">Seu negócio</Link><Link href="#sobre" className="hover:text-sky-400">Sobre</Link><Link href="#contato" className="hover:text-sky-400">Contato</Link>
          </nav>
          <a href="#contato" className="rounded-xl border border-sky-500/50 bg-sky-500/15 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-500/25">Fale com a COSAQ ↗</a>
        </div>
      </header>

      <section id="inicio" className="relative isolate overflow-hidden border-b border-white/10 bg-[#040c17]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(0,120,255,.28),transparent_45%),linear-gradient(120deg,rgba(2,9,20,.95),rgba(5,23,47,.92))]" />
        <div className="pointer-events-none absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full border border-blue-400/10 shadow-[0_0_150px_30px_rgba(0,120,255,.18)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[180px] bg-[linear-gradient(transparent,rgba(2,8,17,.95))]" />
        <div className="relative mx-auto grid max-w-[1460px] items-center gap-10 px-5 pb-24 pt-20 lg:min-h-[760px] lg:grid-cols-[.82fr_1.18fr] lg:px-12 lg:pt-24">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-3 border-l-2 border-sky-400 pl-4 text-xs font-bold uppercase tracking-[.22em] text-sky-300">Soluções digitais para negócios reais</div>
            <h1 className="max-w-[680px] font-display text-[clamp(2.75rem,5vw,5.4rem)] font-bold leading-[1.04] tracking-[-.045em]">Transformamos ideias em soluções digitais que fazem <span className="bg-gradient-to-r from-sky-300 to-blue-600 bg-clip-text text-transparent">seu negócio avançar.</span></h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 lg:text-lg">Criamos sites profissionais, plataformas e sistemas digitais para empresas que querem conquistar mais clientes, ganhar eficiência e crescer com mais estrutura.</p>
            <div className="mt-9 flex flex-wrap gap-3"><ContactButton>Conversar sobre meu projeto ↗</ContactButton><Link href="#projetos" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-sky-500/40 bg-[#06162b]/70 px-6 text-sm font-semibold hover:border-sky-300">Explorar projetos reais →</Link></div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-sky-400/20 pt-6 text-xs font-medium text-slate-300 sm:text-sm"><span className="border-r border-white/10">Sites que inspiram confiança</span><span className="border-r border-white/10">Sistemas personalizados</span><span>Plataformas em operação</span></div>
          </div>
          <div className="relative isolate mx-auto w-full max-w-[790px] pb-10 pt-6 lg:translate-x-5">
            <div className="absolute inset-6 -z-10 rounded-full bg-blue-500/25 blur-[95px]" />
            <div className="relative ml-auto w-[95%] rotate-[-2deg] rounded-[20px] border border-sky-300/35 bg-[#071326] p-2 shadow-[0_45px_100px_rgba(0,0,0,.6),0_0_50px_rgba(0,110,255,.2)] transition duration-700 hover:rotate-0 sm:w-[88%]">
              <div className="flex h-8 items-center gap-2 rounded-t-xl bg-[#122846] px-4"><i className="h-2 w-2 rounded-full bg-sky-400" /><i className="h-2 w-2 rounded-full bg-white/25" /><i className="h-2 w-2 rounded-full bg-white/25" /><span className="ml-3 text-[10px] tracking-wider text-slate-300">getestimatefast.com</span></div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-b-xl bg-white"><Image src="/projects/getestimatefast.png" fill priority sizes="(max-width:1024px) 100vw, 55vw" className="object-cover object-top" alt="Captura real do GetEstimateFast em destaque" /></div>
              <div className="absolute -bottom-4 left-12 right-12 h-4 rounded-b-[50%] bg-slate-400/70 blur-[1px]" />
            </div>
            <a href="https://orcamentobrasil.com" target="_blank" rel="noopener noreferrer" className="absolute -bottom-5 left-0 w-[53%] max-w-[320px] rounded-2xl border border-emerald-400/45 bg-[#061d24]/95 p-5 shadow-[0_20px_65px_rgba(0,0,0,.7)] backdrop-blur-lg transition hover:-translate-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-emerald-400">Brasil • Plataforma digital</p><p className="mt-3 text-xl font-bold sm:text-2xl">Orçamentos <span className="text-emerald-400">Brasil</span></p><p className="mt-2 text-xs text-slate-300 sm:text-sm">Conectando clientes e profissionais ↗</p>
            </a>
            <div className="absolute right-0 top-0 hidden rounded-xl border border-sky-400/30 bg-[#071e3c]/95 px-5 py-3 text-xs font-medium tracking-wider text-sky-200 shadow-2xl sm:block">ESTRATÉGIA → TECNOLOGIA → RESULTADOS</div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="relative border-y border-white/10 bg-[#091324]/75 py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[.24em] text-sky-400">O que fazemos</p><h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-5xl">Tecnologia para resolver desafios e abrir possibilidades.</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{services.map(s=><article key={s.title} className="rounded-2xl border border-sky-400/15 bg-[#07111f] p-6 transition hover:-translate-y-1 hover:border-sky-400/50"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-2xl text-sky-400">{s.icon}</span><h3 className="mt-6 text-xl font-bold">{s.title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{s.description}</p><a href="#contato" className="mt-6 inline-block text-sm font-semibold text-sky-400">Conversar sobre isso →</a></article>)}</div></div></section>

      <section id="projetos" className="relative overflow-hidden bg-[#030a14] py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_45%,rgba(0,148,95,.12),transparent_40%),radial-gradient(ellipse_at_85%_45%,rgba(0,106,255,.16),transparent_42%)]" />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.27em] text-sky-400">Nossos projetos</p><h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">Plataformas reais que mostram <span className="text-sky-400">o que sabemos construir.</span></h2></div><p className="max-w-md leading-8 text-slate-300">Do cadastro à comunicação, das solicitações aos pagamentos: conheça duas plataformas desenvolvidas para desafios reais.</p></div>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="group overflow-hidden rounded-[28px] border border-emerald-400/30 bg-gradient-to-br from-[#092a27] to-[#07131a] shadow-[0_20px_70px_rgba(0,0,0,.25)] transition duration-500 hover:-translate-y-2 hover:border-emerald-400/65">
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(20,164,106,.24),transparent_70%)]">
                <div className="absolute -right-5 top-2 h-60 w-60 rounded-full border border-emerald-400/15" /><div className="absolute -left-8 bottom-0 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl" />
                <div className="relative w-[82%] rounded-xl border border-emerald-300/30 bg-[#061915] p-2 shadow-[0_24px_60px_rgba(0,0,0,.55)] transition duration-700 group-hover:scale-[1.04]"><div className="flex h-6 items-center gap-2 border-b border-emerald-400/10 px-2"><i className="h-2 w-2 rounded-full bg-emerald-400"/><span className="text-[10px] text-emerald-300">orcamentobrasil.com</span></div><div className="flex aspect-[16/8] flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#082922] to-[#061815]"><span className="text-3xl font-bold">Orçamentos <span className="text-emerald-400">Brasil</span></span><span className="text-xs text-slate-300">Conectando pessoas, serviços e oportunidades</span><div className="h-4 w-[65%] rounded-full border border-emerald-300/20 bg-white/10"/></div></div>
              </div>
              <div className="p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-300">Plataforma brasileira</p><h3 className="mt-3 text-3xl font-bold">Orçamentos Brasil</h3><p className="mt-4 leading-7 text-slate-300">Conecta clientes e profissionais, com cadastros, oportunidades, comunicação e pagamentos integrados à operação.</p><a href="https://orcamentobrasil.com" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-xl border border-emerald-400/50 bg-emerald-400/10 px-5 py-3 text-sm font-semibold transition hover:bg-emerald-400/20">Conhecer o projeto ↗</a></div>
            </article>
            <article className="group overflow-hidden rounded-[28px] border border-sky-400/30 bg-gradient-to-br from-[#0b2348] to-[#07131f] shadow-[0_20px_70px_rgba(0,0,0,.25)] transition duration-500 hover:-translate-y-2 hover:border-sky-400/65">
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(0,117,255,.28),transparent_75%)]">
                <div className="relative w-[82%] rotate-[1deg] overflow-hidden rounded-xl border border-sky-300/40 bg-[#061323] p-2 shadow-[0_24px_60px_rgba(0,0,0,.55)] transition duration-700 group-hover:rotate-0 group-hover:scale-[1.04]"><div className="flex h-6 items-center gap-2 px-2"><i className="h-2 w-2 rounded-full bg-sky-400"/><span className="text-[10px] text-sky-300">getestimatefast.com</span></div><div className="relative aspect-[16/8] overflow-hidden rounded-b-md bg-white"><Image src="/projects/getestimatefast.png" alt="Captura real da plataforma GetEstimateFast" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover object-top" /></div></div>
              </div>
              <div className="p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[.2em] text-sky-300">Plataforma nos Estados Unidos</p><h3 className="mt-3 text-3xl font-bold">GetEstimateFast</h3><p className="mt-4 leading-7 text-slate-300">Facilita solicitações de orçamentos para serviços residenciais com uma experiência digital de captação e atendimento.</p><a href="https://www.getestimatefast.com" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-xl border border-sky-400/50 bg-sky-400/10 px-5 py-3 text-sm font-semibold transition hover:bg-sky-400/20">Conhecer o projeto ↗</a></div>
            </article>
          </div>
        </div>
      </section>

      <section id="diagnostico" className="relative border-y border-white/10 bg-[#09172a] py-24"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[.24em] text-sky-400">Enxergue novas oportunidades</p><h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Sua empresa pode ter problemas que a tecnologia já consegue resolver.</h2><p className="mt-6 text-lg leading-8 text-slate-300">Nem sempre é preciso começar sabendo qual sistema contratar. Começamos entendendo o desafio e avaliando o que realmente faz sentido para seu negócio.</p><div className="mt-8"><ContactButton>Quero avaliar meu negócio →</ContactButton></div></div><div className="space-y-3">{questions.map((q,i)=><details key={q.title} className="group rounded-2xl border border-sky-400/20 bg-[#06101f] p-5 open:border-sky-400/60"><summary className="cursor-pointer list-none text-lg font-semibold"><span className="mr-4 text-sky-400">0{i+1}</span>{q.title}<span className="float-right text-sky-400">+</span></summary><p className="ml-9 mt-4 leading-7 text-slate-300">{q.detail}</p></details>)}</div></div></section>

      <section id="sobre" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[.24em] text-sky-400">Como trabalhamos</p><h2 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">Estratégia, desenvolvimento e evolução.</h2><div className="mt-10 grid gap-5 md:grid-cols-4">{[{n:"01",t:"Entendemos",d:"Conhecemos seu negócio, seus objetivos e desafios."},{n:"02",t:"Planejamos",d:"Definimos uma proposta digital adequada à sua realidade."},{n:"03",t:"Desenvolvemos",d:"Criamos a solução e validamos os principais fluxos."},{n:"04",t:"Evoluímos",d:"Acompanhamos melhorias e novas necessidades do projeto."}].map(s=><div key={s.n} className="rounded-xl border border-sky-500/20 bg-[#0c1a2e] p-7 shadow-[0_16px_38px_rgba(0,0,0,.15)]"><p className="text-2xl font-bold text-sky-400">{s.n}</p><h3 className="mt-5 text-xl font-bold">{s.t}</h3><p className="mt-3 leading-7 text-slate-300">{s.d}</p></div>)}</div></section>

      <section id="contato" className="relative border-t border-white/10 bg-gradient-to-r from-[#082649] to-[#071322] py-20"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-9 px-5 md:flex-row md:items-center lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[.24em] text-sky-400">Seu próximo projeto começa aqui</p><h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">Vamos descobrir o que a tecnologia pode fazer pelo seu negócio?</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">Atendemos empresas no Brasil e nos Estados Unidos, com comunicação em português e soluções digitais pensadas para cada negócio.</p></div><ContactButton>Falar sobre meu projeto ↗</ContactButton></div></section>
      <footer className="relative border-t border-white/10 bg-[#040913] py-10"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 text-sm text-slate-400 lg:px-8"><div><span className="font-semibold tracking-widest text-white">COSAQ DIGITAL</span><p className="mt-3 max-w-xs leading-6">Desenvolvimento e gestão de soluções digitais para empresas no Brasil e nos Estados Unidos.</p></div><div className="flex flex-col gap-2"><a href="#solucoes" className="hover:text-white">Soluções</a><a href="#projetos" className="hover:text-white">Projetos</a><a href="#diagnostico" className="hover:text-white">Diagnóstico digital</a></div><div className="flex flex-col gap-2"><a href="mailto:hello@cosaqdigital.com" className="hover:text-white">hello@cosaqdigital.com</a><span>Brasil e Estados Unidos</span><span>© {new Date().getFullYear()} COSAQ Digital</span></div></div></footer>
    </main>
  );
}
