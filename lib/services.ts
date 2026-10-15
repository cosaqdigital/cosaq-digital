export type Service = {
  slug: string;
  title: string;
  short: string;
  result: string;
  introduction: string;
  examples: string[];
  deliverables: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  relatedProject: string;
  formInterest: string;
};

export const services: Service[] = [
  {
    slug: "sites-profissionais",
    title: "Sites profissionais",
    short: "Seu negócio precisa ser encontrado, compreendido e levado a sério.",
    result: "Um site que comunica seu valor e abre caminho para novas conversas.",
    introduction:
      "Um site não deve ser apenas um cartão de visitas. Ele precisa mostrar o que você faz, para quem, por que vale a pena conversar e como começar. Criamos experiências claras, responsivas e orientadas ao contato comercial.",
    examples: [
      "Site institucional para apresentar a empresa e seus diferenciais",
      "Páginas comerciais específicas para serviços",
      "Reorganização de sites que já existem",
      "Páginas para campanhas e captação de contatos",
    ],
    deliverables: [
      "Arquitetura de conteúdo e estrutura das páginas",
      "Design adaptado ao celular e ao computador",
      "Chamadas para ação e caminhos de contato",
      "Base técnica para indexação e acompanhamento",
    ],
    process: [
      "Entender o público, a proposta comercial e as páginas necessárias",
      "Definir conteúdo, layout e pontos de conversão",
      "Desenvolver, testar e disponibilizar a versão aprovada",
    ],
    faqs: [
      {
        question: "Meu negócio ainda não tem site. Por onde começamos?",
        answer:
          "Começamos pelos serviços, pelo público e pelo objetivo comercial. A partir daí definimos as páginas e a estrutura adequada ao momento da empresa.",
      },
      {
        question: "Vocês também melhoram sites que já existem?",
        answer:
          "Podemos avaliar estrutura, apresentação, navegação e desempenho de um site existente antes de propor ajustes ou reconstrução.",
      },
      {
        question: "O site poderá ser acessado pelo celular?",
        answer:
          "A experiência em dispositivos móveis faz parte da definição e da validação do projeto.",
      },
    ],
    relatedProject: "wbnextlevel",
    formInterest: "Quero um site profissional",
  },
  {
    slug: "plataformas-digitais",
    title: "Plataformas digitais",
    short: "Uma ideia de negócio precisa de jornadas que funcionem de verdade.",
    result: "Transforme seu modelo de negócio em uma experiência digital estruturada.",
    introduction:
      "Produtos digitais que conectam pessoas, serviços e oportunidades exigem mais do que telas bonitas. Planejamos jornadas, permissões, funcionalidades e operação para viabilizar uma primeira versão útil e evoluir com clareza.",
    examples: [
      "Portais que conectam clientes e profissionais",
      "Plataformas de solicitação e acompanhamento",
      "Ambientes com usuários e permissões diferentes",
      "Produtos digitais para testar um novo modelo de negócio",
    ],
    deliverables: [
      "Mapeamento da jornada e dos tipos de usuários",
      "Definição das funcionalidades essenciais",
      "Interfaces, fluxos e regras de acesso",
      "Testes da experiência e planejamento de evolução",
    ],
    process: [
      "Validar problema, público e funcionamento esperado",
      "Priorizar um escopo que pode ser desenvolvido e testado",
      "Construir, validar e preparar as próximas etapas do produto",
    ],
    faqs: [
      {
        question: "Preciso desenvolver toda a plataforma de uma vez?",
        answer:
          "Não necessariamente. Muitas ideias se beneficiam de uma primeira versão concentrada nas funções essenciais, com expansão planejada depois da validação.",
      },
      {
        question: "Uma plataforma pode ter áreas diferentes para clientes e administradores?",
        answer:
          "Sim. A estrutura de acesso e as permissões são avaliadas conforme as jornadas reais de cada perfil.",
      },
      {
        question: "Vocês desenvolvem uma ideia desde o planejamento?",
        answer:
          "Podemos começar pela definição do problema, do público e dos fluxos antes de especificar as funcionalidades.",
      },
    ],
    relatedProject: "orcamentos-brasil",
    formInterest: "Quero criar uma plataforma",
  },
  {
    slug: "sistemas-personalizados",
    title: "Sistemas personalizados",
    short: "Planilhas espalhadas e processos manuais não precisam definir sua operação.",
    result: "Mais organização e visibilidade nos processos que sustentam sua empresa.",
    introduction:
      "Quando informações chegam por vários canais, é fácil perder contexto. Um sistema sob medida pode organizar cadastros, solicitações, responsabilidades e acompanhamento, considerando o fluxo real da equipe.",
    examples: [
      "Painéis para acompanhar pedidos e solicitações",
      "Sistemas internos de cadastro e atendimento",
      "Áreas com permissões por função",
      "Organização de etapas e status operacionais",
    ],
    deliverables: [
      "Levantamento do processo atual e seus gargalos",
      "Definição de dados, papéis e fluxos essenciais",
      "Interface de trabalho adaptada à operação",
      "Regras e testes conforme o escopo contratado",
    ],
    process: [
      "Mapear como a operação funciona hoje",
      "Desenhar processos, informações e acessos",
      "Implementar e validar com cenários reais de uso",
    ],
    faqs: [
      {
        question: "Um sistema pode substituir várias planilhas?",
        answer:
          "Dependendo do processo, podemos avaliar como reunir informações e etapas em uma interface organizada, preservando o que faz sentido na operação.",
      },
      {
        question: "Posso começar com poucas funcionalidades?",
        answer:
          "Sim. Um escopo inicial menor permite validar o uso e priorizar melhorias com base na necessidade real.",
      },
      {
        question: "Como definimos o investimento?",
        answer:
          "O valor depende dos fluxos, integrações, usuários e requisitos. Primeiro levantamos o escopo para apresentar uma proposta coerente.",
      },
    ],
    relatedProject: "orcamentos-brasil",
    formInterest: "Quero organizar minha operação",
  },
  {
    slug: "automacoes-integracoes",
    title: "Automações e integrações",
    short: "Uma tarefa repetitiva não precisa consumir o tempo da sua equipe todos os dias.",
    result: "Conecte etapas, reduza retrabalho e acompanhe o que acontece.",
    introduction:
      "Antes de automatizar, precisamos entender como informações entram, quem precisa agir e o que deve acontecer em seguida. Avaliamos integrações e automações compatíveis com as ferramentas existentes e com os limites da operação.",
    examples: [
      "Notificações e alertas conforme o andamento de solicitações",
      "Integração entre formulários e atendimento",
      "Organização de tarefas e etapas repetitivas",
      "Conexões entre sistemas quando existem APIs adequadas",
    ],
    deliverables: [
      "Mapeamento de etapas e eventos do processo",
      "Avaliação das ferramentas e permissões disponíveis",
      "Construção de fluxos automatizados viáveis",
      "Testes, tratamento de erros e orientações de uso",
    ],
    process: [
      "Identificar tarefas recorrentes e riscos de execução",
      "Definir regras, gatilhos e pontos de validação",
      "Testar o fluxo e acompanhar seu comportamento",
    ],
    faqs: [
      {
        question: "É possível automatizar qualquer ferramenta?",
        answer:
          "Não. A viabilidade depende de integrações, APIs, permissões e políticas de cada serviço. Avaliamos isso antes de confirmar o escopo.",
      },
      {
        question: "Preciso substituir meus sistemas atuais?",
        answer:
          "Nem sempre. Primeiro verificamos se é possível conectar o que a empresa já utiliza.",
      },
      {
        question: "Uma automação dispensa supervisão?",
        answer:
          "Processos importantes precisam de tratamento de erros, registros e critérios de revisão. O nível de supervisão depende dos riscos envolvidos.",
      },
    ],
    relatedProject: "orcamentos-brasil",
    formInterest: "Quero simplificar processos",
  },
];