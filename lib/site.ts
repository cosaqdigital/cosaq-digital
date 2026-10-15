export const contactEmail = "admin@cosaqdigital.com";

export function contactHref(subject = "Quero conversar sobre meu projeto") {
  return "/?interesse=" + encodeURIComponent(subject) + "#contato";
}

// Arte original da marca, sem redesenho ou substituição tipográfica.
export const officialLogo = {
  src: "/brand/cosaq-digital.png",
  width: 936,
  height: 255,
};

export type Project = {
  slug: string;
  title: string;
  country: string;
  market: string;
  domain: string;
  href: string;
  accent: "green" | "blue";
  image: string | null;
  description: string;
  problem: string;
  approach: string;
  capabilities: string[];
  details: { title: string; description: string }[];
  engineering: { title: string; description: string }[];
  scopeNote: string;
};

export const projects: Project[] = [
  {
    slug: "orcamentos-brasil",
    title: "Orçamentos Brasil",
    country: "Brasil",
    market: "Plataforma de conexão de serviços",
    domain: "orcamentobrasil.com",
    href: "https://orcamentobrasil.com",
    accent: "green",
    image: "/projects/orcamentos-brasil.png",
    description:
      "Da solicitação de orçamento ao fluxo de oportunidades: uma plataforma que organiza jornadas diferentes para clientes, profissionais e operação.",
    problem:
      "Quem procura um serviço precisa explicar o que deseja. Quem presta o serviço precisa receber oportunidades relevantes. No meio dessa jornada, a operação precisa de processos claros e controle.",
    approach:
      "Desenvolvemos experiências distintas para solicitação de orçamentos, área profissional e administração. A arquitetura organiza a entrada de pedidos, a gestão de oportunidades e o acesso controlado às informações.",
    capabilities: [
      "Fluxos de solicitação",
      "Área profissional autenticada",
      "Gestão de oportunidades",
      "Painel administrativo",
    ],
    details: [
      {
        title: "Para o cliente",
        description:
          "Fluxo orientado de pedido de orçamento, com categorias de serviço e informações necessárias para encaminhar a solicitação.",
      },
      {
        title: "Para o profissional",
        description:
          "Área autenticada com cadastro, oportunidades e acesso condicionado às informações comerciais disponíveis.",
      },
      {
        title: "Para a operação",
        description:
          "Painel administrativo com revisão e qualificação de pedidos, acompanhamento de profissionais e ações controladas.",
      },
    ],
    engineering: [
      {
        title: "Autenticação e permissões",
        description:
          "Áreas distintas e controles de acesso para separar informações de clientes, profissionais e administração.",
      },
      {
        title: "Notificações e integrações",
        description:
          "Fluxos documentados de e-mail e alertas por SMS para operações elegíveis, com regras de envio e consentimento.",
      },
      {
        title: "Carteira e pagamentos",
        description:
          "Mecanismos financeiros auditáveis e integração com Mercado Pago validados em testes controlados. A habilitação comercial é uma etapa separada.",
      },
    ],
    scopeNote:
      "As funcionalidades apresentadas são componentes implementados ou tecnicamente validados no projeto. Recursos sob habilitação controlada não são descritos como disponíveis para todo o público.",
  },
  {
    slug: "getestimatefast",
    title: "GetEstimateFast",
    country: "Estados Unidos",
    market: "Captação digital para serviços residenciais",
    domain: "getestimatefast.com",
    href: "https://www.getestimatefast.com",
    accent: "blue",
    image: "/projects/getestimatefast.png",
    description:
      "Uma jornada de captação em inglês, pensada para ajudar moradores da região de Tampa Bay a iniciar pedidos de orçamento com menos atrito.",
    problem:
      "Um serviço residencial pode envolver diferentes profissionais e muitas dúvidas. Uma navegação confusa faz o visitante desistir antes mesmo de explicar o que precisa.",
    approach:
      "Organizamos a descoberta por categorias de serviços e criamos páginas e formulários guiados para o visitante iniciar a solicitação com mais clareza.",
    capabilities: [
      "Páginas por serviço",
      "Formulários orientados",
      "Estrutura de SEO local",
      "Jornada de conversão",
    ],
    details: [
      {
        title: "Descoberta de serviços",
        description:
          "Páginas dedicadas a necessidades como reforma de banheiro, pintura, drywall e instalação de pisos.",
      },
      {
        title: "Solicitação guiada",
        description:
          "Formulários focados em explicar a necessidade do proprietário e facilitar o primeiro contato comercial.",
      },
      {
        title: "Contexto regional",
        description:
          "Conteúdo em inglês e páginas específicas para áreas de atendimento da região de Tampa Bay.",
      },
    ],
    engineering: [
      {
        title: "Arquitetura de páginas",
        description:
          "Organização de categorias, páginas de serviços e rotas geográficas alinhadas às buscas de quem procura atendimento local.",
      },
      {
        title: "Experiência de formulários",
        description:
          "Componentes de seleção e preenchimento que transformam a procura por um serviço em uma solicitação estruturada.",
      },
      {
        title: "Rotas alternativas de contato",
        description:
          "Fluxos com opções alternativas de comunicação por WhatsApp, SMS ou e-mail, conforme as páginas e configurações aplicáveis.",
      },
    ],
    scopeNote:
      "Este caso demonstra desenvolvimento de jornada digital, conteúdo comercial e captação de orçamentos; não representa um marketplace com a mesma estrutura operacional do Orçamentos Brasil.",
  },
  {
    slug: "wbnextlevel",
    title: "WB NextLevel",
    country: "Estados Unidos",
    market: "Site comercial para serviços de reformas",
    domain: "wbnextlevel.com",
    href: "https://wbnextlevel.com",
    accent: "blue",
    image: "/projects/wbnextlevel.png",
    description:
      "Presença digital voltada à apresentação de serviços de reformas e melhorias residenciais, com foco em clareza e contato comercial.",
    problem:
      "Empresas prestadoras de serviços precisam apresentar sua especialidade com clareza, construir confiança e facilitar o caminho entre o interesse e o contato.",
    approach:
      "Estruturamos a apresentação comercial de serviços e a navegação de um site para quem busca soluções de reformas residenciais.",
    capabilities: [
      "Site comercial",
      "Apresentação de serviços",
      "Experiência responsiva",
      "Caminhos de contato",
    ],
    details: [
      {
        title: "Serviços em primeiro plano",
        description:
          "Organização das principais categorias de reformas e melhorias de forma compreensível para potenciais clientes.",
      },
      {
        title: "Apresentação profissional",
        description:
          "Composição visual voltada a valorizar o trabalho e favorecer a leitura das informações comerciais.",
      },
      {
        title: "Navegação orientada",
        description:
          "Chamadas e estrutura de página para facilitar a descoberta de serviços e o início de uma conversa.",
      },
    ],
    engineering: [
      {
        title: "Estrutura institucional",
        description:
          "Arquitetura de conteúdo centrada em serviços e apresentação comercial.",
      },
      {
        title: "Experiência em diferentes telas",
        description:
          "Layout concebido para leitura e navegação também em dispositivos móveis.",
      },
      {
        title: "Conexão com o negócio",
        description:
          "Informações de contato e apresentação de ofertas organizadas para apoiar a presença digital.",
      },
    ],
    scopeNote:
      "O caso mostra a estrutura do site e a experiência de apresentação. Não publicamos métricas de leads, clientes ou faturamento sem dados verificáveis.",
  },
];

export const navigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Diagnóstico", href: "/#diagnostico" },
  { label: "Como trabalhamos", href: "/#sobre" },
];