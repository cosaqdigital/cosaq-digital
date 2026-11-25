import type { IconName } from "@/components/Icon";

export const plans = [
  { name: "Essencial", setup: "990", monthly: "147", description: "Para lançar sua primeira obra com uma livraria personalizada.", scope: ["Página do autor e vitrine", "Venda direta e acesso à leitura"] },
  { name: "Profissional", setup: "1.490", monthly: "197", description: "Para fortalecer sua marca e organizar um catálogo em crescimento.", scope: ["Estrutura do plano Essencial", "Catálogo e gestão com escopo ampliado"] },
  { name: "Premium", setup: "3.490", monthly: "397", description: "Para projetos com coleções, integrações ou necessidades específicas.", scope: ["Estrutura do plano Profissional", "Personalizações e integrações sob medida"] },
] as const;

export const interests = ["Demonstração", "Proposta comercial"] as const;
export const bookOptions = ["Em preparação", "1 livro", "2 a 5 livros", "6 a 10 livros", "Mais de 10 livros"] as const;
export type WriterInterest = (typeof interests)[number];
export type WriterPlan = (typeof plans)[number]["name"];

export const capabilities = [
  ["Página do escritor", "Apresente sua trajetória, assine sua vitrine e dê a cada leitor um lugar para conhecer sua obra."],
  ["Catálogo de livros", "Reúna capas, sinopses, séries e lançamentos em uma vitrine que o leitor pode explorar."],
  ["Leitura digital", "Ofereça uma experiência de leitura no navegador com foco no texto e adaptação à tela."],
  ["Gestão comercial", "Centralize a consulta às obras e aos pedidos conforme o painel definido na proposta."],
] as const;

export const identities = [
  { author: "Rafael Costa", genre: "Fantasia épica", style: "fantasy", title: "Onde as montanhas despertam" },
  { author: "Marina Duarte", genre: "Romance contemporâneo", style: "romance", title: "Entre o silêncio e o sol" },
  { author: "Lucas Almeida", genre: "Suspense literário", style: "suspense", title: "Segredos entre as árvores" },
] as const;

export const benefits: { icon: IconName; title: string; description: string }[] = [
  { icon: "pencil", title: "Identidade própria", description: "Cores, tipografia e biografia com a sua assinatura." },
  { icon: "globe", title: "Venda direta", description: "Seu catálogo ligado ao meio de pagamento definido no projeto." },
  { icon: "layers", title: "Obras organizadas", description: "Livros, coleções e lançamentos reunidos em um só endereço." },
  { icon: "system", title: "Leitura profissional", description: "Uma interface que se adapta ao dispositivo do seu leitor." },
  { icon: "workflow", title: "Tecnologia administrada", description: "Manutenção da plataforma pela COSAQ conforme o plano." },
  { icon: "grow", title: "Catálogo que pode crescer", description: "Estrutura preparada para evoluir com próximos lançamentos." },
];

export const steps = [
  ["Apresente seu projeto", "Conte quais livros quer publicar e como deseja chegar aos leitores."],
  ["Conheça nossa solução", "Veja a experiência e receba uma proposta com escopo e investimento."],
  ["Personalize sua plataforma", "Alinhe a identidade visual, o catálogo e o fluxo de venda com a COSAQ."],
  ["Prepare o lançamento", "Revise a livraria, o acesso aos livros e os meios de pagamento antes da abertura."],
];

export const faq = [
  ["Quantos livros posso publicar?", "Você pode começar pela primeira obra ou trazer um catálogo. O volume inicial e as opções de expansão são definidos na proposta."],
  ["Posso personalizar a identidade da livraria?", "Sim. A proposta define como serão aplicados o seu nome, as cores, a tipografia, a biografia e outros elementos da identidade."],
  ["Posso usar meu domínio próprio?", "Sim. Podemos configurar um domínio que você já possui ou orientar o registro de um novo. Registro e renovação podem ter custos próprios."],
  ["A COSAQ cobra comissão sobre as minhas vendas?", "A COSAQ cobra pela implantação e pela manutenção previstas na proposta. A comissão da COSAQ sobre vendas diretas é de 0%."],
  ["Como funciona a leitura digital?", "O leitor acessa as obras liberadas em uma interface no navegador, adaptada a computador, tablet e celular. Os formatos aceitos e os recursos de acesso são confirmados no escopo."],
  ["Com quem ficam os direitos autorais?", "Os direitos sobre as obras permanecem com seus respectivos titulares. O autor precisa ter autorização para comercializar todo o conteúdo publicado."],
  ["Posso continuar vendendo em marketplaces?", "Sim, desde que os contratos de publicação e distribuição das suas obras permitam vendas em outros canais."],
  ["Que taxas podem incidir sobre o pagamento?", "O meio de pagamento pode cobrar por transação, parcelamento ou repasse. Tributos e serviços de terceiros seguem as condições aplicáveis ao seu projeto."],
  ["O que a manutenção inclui?", "A proposta descreve o que a COSAQ administra, quais atualizações e canais de suporte estão cobertos e quais serviços têm orçamento separado."],
  ["Como funcionam o cancelamento e a propriedade do software?", "A plataforma é disponibilizada sob licença conforme o contrato. A proposta define as condições de cancelamento, os dados disponíveis para exportação e os prazos de transição."],
];
