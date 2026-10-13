import Link from "next/link";
import Image from "next/image";

const services = [
  { icon: "◫", title: "Sites profissionais", description: "Uma presença digital que apresenta seus serviços com clareza, inspira confiança e facilita o contato de novos clientes." },
  { icon: "◇", title: "Plataformas digitais", description: "Produtos digitais com cadastros, áreas de usuários, regras de negócio e funcionalidades próprias." },
  { icon: "⚡", title: "Automações", description: "Integrações e processos inteligentes para reduzir tarefas repetitivas e organizar sua operação." },
  { icon: "⌘", title: "Sistemas personalizados", description: "Ferramentas sob medida para controlar informações, solicitações, equipes e oportunidades." },
];

const projects = [
  { title: "Orçamentos Brasil", tag: "PLATAFORMA BRASILEIRA", description: "Uma plataforma que conecta pessoas que precisam contratar serviços a profissionais interessados em novas oportunidades. Fluxos de cadastro, gestão de pedidos, comunicação e pagamentos.", image: "/projects/orcamentos-brasil.png", href: "https://orcamentobrasil.com", accent: "emerald" },
  { title: "GetEstimateFast", tag: "PLATAFORMA NOS ESTADOS UNIDOS", description: "Uma experiência digital para solicitar orçamentos de serviços residenciais, com captação de pedidos e integração dos processos de atendimento.", image: "/projects/getestimatefast.png", href: "https://www.getestimatefast.com", accent: "blue" },
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

      <section id="inicio" className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-20 lg:min-h-[680px] lg:grid-cols-[1fr_1fr] lg:px-8 lg:pt-24">
        <div className="relative z-10">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[.25em] text-sky-400">Tecnologia • Estratégia • Soluções reais</p>
          <h1 className="max-w-2xl font-display text-5xl font-bold leading-[1.07] tracking-tight sm:text-6xl">Transformamos ideias em soluções digitais que fazem <span className="text-sky-400">seu negócio avançar.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">Criamos sites profissionais, desenvolvemos plataformas e construímos sistemas e automações para sua empresa conquistar clientes, organizar processos e descobrir novas oportunidades.</p>
          <div className="mt-9 flex flex-wrap gap-3"><ContactButton>Quero conversar sobre meu projeto ↗</ContactButton><Link href="#projetos" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-6 text-sm font-semibold hover:border-sky-400">Conheça nossos projetos →</Link></div>
          <div className="mt-12 flex flex-wrap gap-5 border-t border-white/10 pt-6 text-sm text-slate-300"><span>✧ Soluções sob medida</span><span>✧ Projetos digitais reais</span><span>✧ Atendimento em português</span></div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-[480px]">
          <div className="absolute inset-8 rounded-full bg-blue-600/20 blur-[80px]" />
          <div className="relative mt-4 rotate-[-3deg] rounded-3xl border border-sky-400/30 bg-[#091c36] p-4 shadow-[0_35px_95px_rgba(0,102,255,.22)] sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4"><span className="text-xs uppercase tracking-[.2em] text-sky-300">Projetos & tecnologia</span><span className="flex gap-1"><i className="h-2 w-2 rounded-full bg-sky-500" /><i className="h-2 w-2 rounded-full bg-sky-500/50" /><i className="h-2 w-2 rounded-full bg-sky-500/20" /></span></div>
            <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-[#102c51] to-[#071324] p-7 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[.2em] text-sky-300">Da ideia à operação</p><h2 className="mt-4 max-w-sm text-3xl font-bold leading-tight sm:text-4xl">Soluções digitais com propósito e estrutura.</h2><p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">Sites • Sistemas • Plataformas • Automações</p></div>
            <div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-sky-300">01 / BR</p><p className="mt-2 font-semibold">Orçamentos Brasil</p><p className="mt-1 text-xs text-slate-400">Conexões e oportunidades</p></div><div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-sky-300">02 / US</p><p className="mt-2 font-semibold">GetEstimateFast</p><p className="mt-1 text-xs text-slate-400">Solicitações e orçamentos</p></div></div>
          </div>
          <div className="absolute -bottom-4 -left-3 rounded-xl border border-sky-500/40 bg-[#071b34] px-5 py-3 text-sm font-medium shadow-xl sm:-left-8">↗ Estratégia que vira solução</div>
        </div>
      </section>

      <section id="solucoes" className="relative border-y border-white/10 bg-[#091324]/75 py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[.24em] text-sky-400">O que fazemos</p><h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-5xl">Tecnologia para resolver desafios e abrir possibilidades.</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{services.map(s=><article key={s.title} className="rounded-2xl border border-sky-400/15 bg-[#07111f] p-6 transition hover:-translate-y-1 hover:border-sky-400/50"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-2xl text-sky-400">{s.icon}</span><h3 className="mt-6 text-xl font-bold">{s.title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{s.description}</p><a href="#contato" className="mt-6 inline-block text-sm font-semibold text-sky-400">Conversar sobre isso →</a></article>)}</div></div></section>

      <section id="projetos" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="text-xs font-semibold uppercase tracking-[.24em] text-sky-400">Projetos em destaque</p><h2 className="mt-4 text-4xl font-bold sm:text-5xl">Tecnologia que sai do papel.</h2></div><p className="max-w-lg text-slate-300">Conheça plataformas que desenvolvemos para conectar pessoas, organizar solicitações e transformar processos em experiências digitais.</p></div><div className="mt-12 grid gap-6 lg:grid-cols-2">{projects.map(p=><article key={p.title} className="overflow-hidden rounded-3xl border border-sky-400/20 bg-[#0a1729]"><div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#102d48] to-[#05101d] p-5">{p.title==="GetEstimateFast"?<Image src={p.image} alt="Captura do GetEstimateFast" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />:<div className="text-center"><p className="text-xs uppercase tracking-[.3em] text-sky-300">Plataforma digital</p><p className="mt-5 text-3xl font-bold">Orçamentos <span className="text-emerald-400">Brasil</span></p><p className="mt-3 text-sm text-slate-300">Conectando serviços e profissionais</p></div>}</div><div className="p-7"><p className="text-xs font-semibold tracking-[.16em] text-sky-400">{p.tag}</p><h3 className="mt-3 text-3xl font-bold">{p.title}</h3><p className="mt-4 min-h-28 leading-7 text-slate-300">{p.description}</p><a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-xl border border-sky-400/40 px-5 py-3 text-sm font-semibold transition hover:bg-sky-500/15">Conhecer o projeto ↗</a></div></article>)}</div></section>

      <section id="diagnostico" className="relative border-y border-white/10 bg-[#09172a] py-24"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[.24em] text-sky-400">Enxergue novas oportunidades</p><h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Sua empresa pode ter problemas que a tecnologia já consegue resolver.</h2><p className="mt-6 text-lg leading-8 text-slate-300">Nem sempre é preciso começar sabendo qual sistema contratar. Começamos entendendo o desafio e avaliando o que realmente faz sentido para seu negócio.</p><div className="mt-8"><ContactButton>Quero avaliar meu negócio →</ContactButton></div></div><div className="space-y-3">{questions.map((q,i)=><details key={q.title} className="group rounded-2xl border border-sky-400/20 bg-[#06101f] p-5 open:border-sky-400/60"><summary className="cursor-pointer list-none text-lg font-semibold"><span className="mr-4 text-sky-400">0{i+1}</span>{q.title}<span className="float-right text-sky-400">+</span></summary><p className="ml-9 mt-4 leading-7 text-slate-300">{q.detail}</p></details>)}</div></div></section>

      <section id="sobre" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[.24em] text-sky-400">Como trabalhamos</p><h2 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">Do entendimento do problema à evolução da solução.</h2><div className="mt-10 grid gap-4 md:grid-cols-4">{[{n:"01",t:"Entendemos",d:"Conhecemos seu negócio, seus objetivos e desafios."},{n:"02",t:"Planejamos",d:"Definimos uma proposta digital adequada à sua realidade."},{n:"03",t:"Desenvolvemos",d:"Criamos a solução e validamos os principais fluxos."},{n:"04",t:"Evoluímos",d:"Acompanhamos melhorias e novas necessidades do projeto."}].map(s=><div key={s.n} className="border-l-2 border-sky-500/70 bg-white/[.025] p-6"><p className="text-2xl font-bold text-sky-400">{s.n}</p><h3 className="mt-5 text-xl font-bold">{s.t}</h3><p className="mt-3 leading-7 text-slate-300">{s.d}</p></div>)}</div></section>

      <section id="contato" className="relative border-t border-white/10 bg-gradient-to-r from-[#082649] to-[#071322] py-20"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-9 px-5 md:flex-row md:items-center lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[.24em] text-sky-400">Seu próximo projeto começa aqui</p><h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">Vamos descobrir o que a tecnologia pode fazer pelo seu negócio?</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">Atendemos empresas no Brasil e nos Estados Unidos, com comunicação em português e soluções adaptadas ao seu projeto.</p></div><ContactButton>Falar sobre meu projeto ↗</ContactButton></div></section>
      <footer className="relative border-t border-white/10 bg-[#040913] py-10"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 text-sm text-slate-400 lg:px-8"><span className="font-semibold tracking-widest text-white">COSAQ DIGITAL</span><span>Sites • Plataformas • Sistemas • Automações</span><span>© {new Date().getFullYear()} COSAQ Digital</span></div></footer>
    </main>
  );
}
