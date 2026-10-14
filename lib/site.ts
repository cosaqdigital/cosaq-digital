export const contactEmail = "admin@cosaqdigital.com";

export function contactHref(subject = "Quero conversar sobre meu projeto") {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
}

// Original artwork from the official ZIP. Only the surrounding background
// margins were cropped; the complete mark retains its original source pixels.
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
};

export const projects: Project[] = [
  {
    slug: "orcamentos-brasil",
    title: "Orçamentos Brasil",
    country: "Brasil",
    market: "Conexão entre clientes e profissionais",
    domain: "orcamentobrasil.com",
    href: "https://orcamentobrasil.com",
    accent: "green",
    image: "/projects/orcamentos-brasil.png",
    description:
      "Uma plataforma para aproximar quem precisa de um serviço de quem tem experiência para realizá-lo.",
    problem:
      "Encontrar um profissional e transformar uma necessidade em uma oportunidade de serviço são dois lados do mesmo desafio.",
    approach:
      "A proposta reúne clientes e profissionais em uma experiência digital voltada ao mercado brasileiro, aproximando necessidades e serviços.",
    capabilities: [
      "Conexão entre clientes e profissionais",
      "Experiência voltada ao mercado brasileiro",
    ],
    details: [
      {
        title: "Para quem precisa",
        description:
          "Uma presença digital dedicada à conexão com profissionais de serviços.",
      },
      {
        title: "Para quem faz",
        description:
          "Um ponto de encontro entre profissionais e necessidades de clientes.",
      },
      {
        title: "Contexto brasileiro",
        description:
          "Uma proposta apresentada em português para o mercado nacional.",
      },
    ],
  },
  {
    slug: "getestimatefast",
    title: "GetEstimateFast",
    country: "Estados Unidos",
    market: "Orçamentos para serviços residenciais",
    domain: "getestimatefast.com",
    href: "https://www.getestimatefast.com",
    accent: "blue",
    image: "/projects/getestimatefast.png",
    description:
      "Uma experiência digital que facilita o início de pedidos de orçamento para serviços residenciais nos Estados Unidos.",
    problem:
      "Pedir orçamentos para um projeto residencial costuma exigir contatos repetidos e uma explicação diferente a cada profissional.",
    approach:
      "A experiência começa pela escolha do serviço. Categorias claras, uma busca em destaque e caminhos para iniciar uma solicitação tornam a jornada mais objetiva.",
    capabilities: [
      "Busca por serviços",
      "Categorias residenciais",
      "Início de pedidos de orçamento",
    ],
    details: [
      {
        title: "Serviços fáceis de encontrar",
        description:
          "Busca e categorias para necessidades como reformas de cozinha, banheiros e limpeza residencial.",
      },
      {
        title: "Próximo passo evidente",
        description:
          "Chamadas para iniciar uma solicitação acompanham a navegação e a apresentação dos serviços.",
      },
      {
        title: "Contexto local",
        description:
          "A comunicação em inglês apresenta a proposta para moradores da região de Tampa Bay.",
      },
    ],
  },
];

export const navigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Diagnóstico", href: "/#diagnostico" },
  { label: "Como trabalhamos", href: "/#sobre" },
];
