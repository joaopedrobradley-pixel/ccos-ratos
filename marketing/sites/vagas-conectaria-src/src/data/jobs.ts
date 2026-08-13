import conectariaIcon from "@/assets/logo/conectaria-icon.png";
import trilhaCertaLogo from "@/assets/parceiros/trilha-certa.png";
import jahAcaiLogo from "@/assets/parceiros/jah-acai.png";
import candidaGalleLogo from "@/assets/parceiros/candida-galle.png";
import origoEnergiaLogo from "@/assets/parceiros/origo-energia.png";

export interface ApplyOption {
  type: "whatsapp" | "email" | "link";
  label: string;
  value: string;
  note?: string;
}

export interface JobSection {
  title: string;
  text?: string;
  bullets?: string[];
}

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  category: "Marketing" | "Comercial" | "RH" | "Educação" | "Logística";
  location: string;
  type: string;
  summary: string;
  sections: JobSection[];
  apply: ApplyOption[];
  /** true quando a Conectaria é quem recruta/toca o processo diretamente (mostra selo na vaga) */
  recruitedByConectaria?: boolean;
}

export const JOBS: Job[] = [
  {
    id: "consultor-vendas-origo-energia",
    title: "Consultor(a) de Vendas / Parceiro Comercial (PJ)",
    company: "Órigo Energia",
    companyLogo: origoEnergiaLogo,
    category: "Comercial",
    location: "Minas Gerais, Pará, Pernambuco, Bahia, Tocantins, Rio Grande do Norte, Goiás, Mato Grosso e Mato Grosso do Sul",
    type: "Comissionada — CLT ou PJ",
    summary:
      "Órigo Energia está em expansão e busca vendedores e parceiros comerciais (PJ) para atuar em energia solar e mercado livre de energia, com comissão atrativa e comissionamento ilimitado.",
    sections: [
      {
        title: "Sobre a vaga",
        text: "A Órigo Energia está em expansão e busca Consultores(as) de Vendas e Parceiros Comerciais (PJ) em um dos setores que mais crescem no Brasil: energia solar e mercado livre de energia. Se você tem experiência com vendas ou possui CNPJ ativo e carteira de clientes B2B, essa é a oportunidade ideal para crescer com uma empresa sólida e reconhecida nacionalmente.",
      },
      {
        title: "O que oferecemos",
        bullets: [
          "Vaga comissionada, com comissão atrativa e bonificações por metas",
          "Para parceiros PJ: credenciamento oficial como Parceiro Comercial Órigo Energia, com comissionamento agressivo e ilimitado, proporcional à performance",
          "Treinamentos completos para a equipe comercial (porta a porta e prospecção ativa) e para o time interno / Back Office (BKO)",
          "Plataforma exclusiva para gestão de leads, contratos e resultados",
          "Suporte comercial e técnico dedicado",
          "Apoio do time de Marketing, com produção de mídias digitais e materiais promocionais",
        ],
      },
      {
        title: "Requisitos",
        bullets: [
          "Atendimento ao cliente e experiência com vendas",
          "Informática básica e disponibilidade de horário",
          "Para atuação como Parceiro Comercial (PJ): CNPJ ativo, carteira de clientes B2B e estrutura de Back Office para gestão operacional de contratos",
        ],
      },
      {
        title: "Regiões de atuação",
        bullets: [
          "Minas Gerais",
          "Pará",
          "Pernambuco",
          "Bahia",
          "Tocantins",
          "Rio Grande do Norte",
          "Goiás",
          "Mato Grosso",
          "Mato Grosso do Sul",
        ],
      },
    ],
    apply: [
      {
        type: "whatsapp",
        label: "Falar no WhatsApp",
        value: "5535998370774",
        note: "Informe interesse na vaga de Consultor(a) de Vendas / Parceiro Comercial",
      },
      {
        type: "email",
        label: "Enviar e-mail com o currículo",
        value: "gilcymar.oliveira@origoenergia.com.br",
        note: "Assunto: Vaga Consultor de Vendas / Parceiro Comercial",
      },
    ],
  },
  {
    id: "estoquista-extrema-trilha-certa",
    title: "Estoquista",
    company: "Trilha Certa Consultoria",
    companyLogo: trilhaCertaLogo,
    category: "Logística",
    location: "Extrema, MG",
    type: "CLT",
    summary:
      "Empresa em expansão estrutura nova operação em Extrema/MG e busca talentos para iniciar ou desenvolver carreira na área de Logística.",
    sections: [
      {
        title: "Sobre a vaga",
        text: "Estamos conduzindo um processo seletivo para uma empresa em expansão, que está estruturando sua nova operação em Extrema/MG. Se você busca uma oportunidade para iniciar ou desenvolver sua carreira na área de Logística, essa vaga pode ser para você.",
      },
      {
        title: "Principais atividades",
        bullets: [
          "Receber, conferir e armazenar materiais",
          "Separar pedidos para expedição",
          "Organizar o estoque",
          "Apoiar inventários e controles internos",
          "Informar divergências e apoiar o controle de estoque",
        ],
      },
      {
        title: "Requisitos",
        bullets: [
          "Ensino Médio completo",
          "Pacote Office básico",
          "Organização e comprometimento",
          "Disponibilidade para atividades operacionais",
        ],
      },
      {
        title: "Diferenciais",
        bullets: [
          "Experiência em logística ou almoxarifado",
          "Conhecimento em armazenagem",
          "Noções de Excel e matemática básica",
        ],
      },
      {
        title: "Remuneração e horário",
        bullets: [
          "Salário: R$ 2.031,00 (CLT)",
          "Horário: segunda a sexta-feira, das 08h às 18h",
          "Local: Extrema, MG",
        ],
      },
      {
        title: "Benefícios",
        bullets: [
          "Vale Alimentação/Refeição: R$ 800,00",
          "Convênio médico",
          "Convênio odontológico",
          "Seguro de vida",
          "Vale transporte ou auxílio para deslocamento",
        ],
      },
      {
        title: "Oportunidade de crescimento",
        text: "A posição oferece oportunidades de crescimento interno para profissionais que apresentem bom desempenho.",
      },
    ],
    apply: [
      {
        type: "whatsapp",
        label: "Falar no WhatsApp",
        value: "5511941222646",
        note: "Informe interesse na vaga de Estoquista, Extrema/MG",
      },
    ],
  },
  {
    id: "sdr-jah-acai",
    title: "Representante de Desenvolvimento de Vendas (SDR)",
    company: "JAH Açaí",
    companyLogo: jahAcaiLogo,
    recruitedByConectaria: true,
    category: "Comercial",
    location: "Híbrido — Pinheiros, SP (2x/semana)",
    type: "CLT (PJ negociável)",
    summary:
      "Primeiro ponto de contato com candidatos a franqueados: qualificar leads e agendar reuniões para o time de Expansão.",
    sections: [
      {
        title: "Missão do cargo",
        text: "Garantir abordagem ultra-ágil dos leads inbound, qualificar candidatos pelos 4 pilares do ICP e agendar reuniões comerciais qualificadas para o Closer, mantendo a saúde e a consistência dos dados no RD Station CRM.",
      },
      {
        title: "Responsabilidades",
        bullets: [
          "Abordar novos leads em tempo recorde (SLA máximo de 1 dia útil, idealmente nos primeiros 30 minutos via WhatsApp/ligação)",
          "Executar a régua de cadência multitouch (WhatsApp, ligações e provas sociais)",
          "Qualificar o lead (MQL → SQL) avaliando capacidade financeira, geografia, perfil e momento do empreendedor",
          "Agendar a reunião comercial em até 2 dias úteis e preencher 100% dos campos de qualificação",
          "Registrar detalhadamente todas as interações no CRM e classificar corretamente o motivo de perda",
          "Apoiar ações de outbound e participar do check-in diário e da reunião semanal de pipeline",
        ],
      },
      {
        title: "O que esperamos",
        bullets: [
          "Comunicação fluida e extrovertida, com capacidade de gerar rapport por ligação e áudio",
          "Disciplina operacional para registro de dados no CRM",
          "Familiaridade com automações de vendas (RD Station é diferencial)",
          "Entendimento básico da jornada de vendas B2B e tratamento de objeções",
        ],
      },
      {
        title: "Remuneração",
        bullets: [
          "Fixo: entre R$ 3.000 e R$ 4.000 (CLT; se PJ, valor negociável)",
          "Variável: 2,5% sobre a taxa de franquia fechada",
          "Benefícios: Wellhub, Vale Transporte e Vale Refeição (iFood)",
        ],
      },
      {
        title: "Processo seletivo",
        bullets: [
          "Triagem de currículo",
          "Entrevista com recrutadores",
          "Teste técnico — simulação de qualificação ao vivo com dois leads",
          "Entrevista final com a liderança da vaga",
        ],
      },
    ],
    apply: [
      { type: "link", label: "Candidatar-se no LinkedIn", value: "https://www.linkedin.com/jobs/view/4457774189" },
      {
        type: "email",
        label: "Enviar e-mail com o currículo",
        value: "joaopedrobradley@conectaria.com.br",
        note: "Assunto: Vaga de SDR, Jáh Açaí",
      },
    ],
  },
  {
    id: "estagio-marketing-conectaria",
    title: "Estagiário(a) de Marketing",
    company: "Conectaria",
    companyLogo: conectariaIcon,
    recruitedByConectaria: true,
    category: "Marketing",
    location: "Remoto",
    type: "Estágio — 6h/dia",
    summary:
      "Apoiar a estratégia de conteúdo da Conectaria: redes sociais, roteiros, métricas e produção de conteúdo.",
    sections: [
      {
        title: "Missão do cargo",
        text: "Apoiar a estruturação e a execução da estratégia de conteúdo da Conectaria, ajudando a conectar cada vez mais profissionais a novas oportunidades no mercado.",
      },
      {
        title: "Responsabilidades",
        bullets: [
          "Estruturar estratégias de marketing e linhas editoriais",
          "Produzir legendas, roteiros de Reels, carrosséis e Stories",
          "Editar vídeos com apoio de IA",
          "Gerenciar postagens e métricas no TikTok, Instagram, LinkedIn e YouTube",
          "Produzir relatórios de desempenho e realizar pesquisas de mercado",
          "Estruturar artigos e revisar copys de páginas de vendas",
        ],
      },
      {
        title: "O que esperamos",
        bullets: [
          "Estar cursando graduação, de preferência em Administração ou Marketing",
          "Disponibilidade para trabalhar 6h por dia, remotamente",
          "Organização e disciplina para lidar com múltiplas entregas",
          "Criatividade e senso crítico para conteúdo",
        ],
      },
      {
        title: "Remuneração e benefícios",
        bullets: ["Bolsa de estágio: R$ 1.100", "WellHub (Gympass)", "Acesso a diversos cursos de desenvolvimento"],
      },
      {
        title: "Processo seletivo",
        bullets: ["Triagem de currículo", "Teste prático", "Análise das respostas do teste", "Entrevista com o gestor"],
      },
    ],
    apply: [
      {
        type: "email",
        label: "Enviar e-mail com o currículo",
        value: "joaopedrobradley@conectaria.com.br",
        note: "Assunto: Estágio em Marketing | Currículo",
      },
    ],
  },
  {
    id: "especialista-gente-gestao-jah",
    title: "Especialista de Gente & Gestão",
    company: "JAH Açaí",
    companyLogo: jahAcaiLogo,
    recruitedByConectaria: true,
    category: "RH",
    location: "Híbrido — sede + visitas periódicas à Fábrica Sorocaba",
    type: "PJ — tempo integral",
    summary:
      "Atuação técnica em performance, talentos, people analytics e engajamento para a franqueadora e a rede de franqueados.",
    sections: [
      {
        title: "Missão do cargo",
        text: "Fortalecer a gestão de pessoas da Franqueadora nas frentes de performance, talentos, people analytics e engajamento, além de apoiar a jornada do franqueado e o recrutamento estruturado da rede. Posição técnica e de execução, não de gestão de equipe.",
      },
      {
        title: "Principais responsabilidades",
        bullets: [
          "Planejar e conduzir a 1ª pesquisa de e-NPS de clima da Franqueadora",
          "Estruturar e manter o dashboard de People Analytics da área",
          "Apoiar a implementação do Modelo de Business Partner de G&G",
          "Apoiar o desenho do Modelo de Gestão de Performance e conduzir o 1º ciclo completo",
          "Realizar gestão de movimentação de pessoal e contratação de talentos",
          "Apoiar a jornada do franqueado, o Programa PEX e o recrutamento estruturado da rede",
          "Estruturar o Programa de Reconhecimento e apoiar o pilar de saúde mental da rede",
        ],
      },
      {
        title: "Perfil desejado",
        bullets: [
          "Formação em Administração, Psicologia, RH ou áreas correlatas",
          "Experiência prévia comprovada em empresa franqueadora (requisito obrigatório)",
          "Vivência em gestão de performance, talentos, people analytics ou engajamento de redes de franquia",
          "Excel avançado / ferramentas de BI; familiaridade com Microsoft 365 e SharePoint",
        ],
      },
      {
        title: "Remuneração",
        bullets: ["R$ 11.000,00 + VR (R$ 40/dia) + Wellhub", "Regime PJ, tempo integral"],
      },
      {
        title: "Processo seletivo",
        bullets: [
          "Triagem de currículo",
          "Entrevista com recrutadores",
          "Avaliação comportamental",
          "Avaliação técnica com o gestor da área",
          "Etapa de case",
        ],
      },
    ],
    apply: [
      {
        type: "email",
        label: "Enviar e-mail com o currículo",
        value: "joaopedrobradley@conectaria.com.br",
        note: "Assunto: Especialista de Gente & Gestão - Vaga",
      },
    ],
  },
  {
    id: "instrutor-cursos-trilha-certa",
    title: "Instrutor de Cursos Profissionalizantes",
    company: "Trilha Certa Consultoria",
    companyLogo: trilhaCertaLogo,
    category: "Educação",
    location: "Carapicuíba, SP",
    type: "CLT",
    summary:
      "Tirar dúvidas de alunos sobre pacote Office e programação Web básica — a empresa oferece formação antes do início.",
    sections: [
      {
        title: "Descrição de tarefas",
        text: "Tirar dúvidas de alunos sobre pacote Office e básico de programação Web. A empresa oferece curso de formação e treinamento antes do início da função principal.",
      },
      {
        title: "Salário",
        bullets: ["R$ 2.100,00 + vale-transporte", "Comissão por rematrícula: R$ 50,00"],
      },
      {
        title: "Horários de trabalho",
        bullets: ["Terça a sábado, das 08h às 17h (almoço 12h–13h)", "Segunda, das 13h às 17h"],
      },
      {
        title: "Requisitos",
        bullets: [
          "Ser morador de Carapicuíba-SP",
          "Ter conhecimento sobre pacote Office, de preferência cursando alguma faculdade de TI",
          "Facilidade de comunicação e gostar de trabalhar com o público",
        ],
      },
    ],
    apply: [
      {
        type: "whatsapp",
        label: "Falar no WhatsApp",
        value: "5511941222646",
        note: "Informe que é para a vaga de professor",
      },
    ],
  },
  {
    id: "vendedor-gramado-candida-galle",
    title: "Vendedor(a) — Vendas Internas e Externas",
    company: "Cândida Galle",
    companyLogo: candidaGalleLogo,
    category: "Comercial",
    location: "Gramado, RS",
    type: "Vendas internas e externas",
    summary:
      "Empresa referência no segmento de acabamentos para construção busca vendedor(a) para atuação consultiva, aproximando relacionamentos e gerando resultados.",
    sections: [
      {
        title: "Sobre a vaga",
        text: "Empresa referência no segmento de acabamentos para construção busca um(a) vendedor(a) para atuar de forma consultiva, desenvolvendo relacionamento com clientes, identificando oportunidades de negócio e contribuindo para o crescimento da carteira de clientes.",
      },
      {
        title: "Principais responsabilidades",
        bullets: [
          "Realizar atendimento consultivo aos clientes",
          "Prospectar novos clientes e desenvolver negócios",
          "Gerenciar e fortalecer o relacionamento com a carteira de clientes",
          "Elaborar orçamentos e conduzir negociações",
          "Realizar visitas comerciais quando necessário",
          "Acompanhar metas e indicadores comerciais",
          "Representar a empresa com foco na excelência do atendimento e na geração de resultados",
        ],
      },
      {
        title: "Requisitos",
        bullets: [
          "Experiência em vendas consultivas",
          "Perfil comunicativo, proativo e orientado para resultados",
          "CNH B",
          "Disponibilidade para atuação interna e externa",
        ],
      },
      {
        title: "Diferenciais",
        bullets: [
          "Experiência com acabamentos para construção, construção civil, arquitetura, design de interiores ou decoração",
          "Carteira de clientes ativa",
        ],
      },
      {
        title: "A empresa oferece",
        bullets: [
          "Salário compatível com a função",
          "Comissão por resultados",
          "Plano de desenvolvimento",
          "Excelente ambiente de trabalho",
          "Férias coletivas no final do ano",
        ],
      },
    ],
    apply: [
      {
        type: "email",
        label: "Enviar e-mail com o currículo",
        value: "crgvagas@gmail.com",
        note: "Assunto: Vendedor Gramado",
      },
    ],
  },
  {
    id: "vendedor-taquara-candida-galle",
    title: "Vendedor(a) — Vendas Internas e Externas",
    company: "Cândida Galle",
    companyLogo: candidaGalleLogo,
    category: "Comercial",
    location: "Taquara, RS",
    type: "Vendas internas e externas",
    summary:
      "Empresa referência no segmento de acabamentos para construção busca vendedor(a) para atuação consultiva, aproximando relacionamentos e gerando resultados.",
    sections: [
      {
        title: "Sobre a vaga",
        text: "Empresa referência no segmento de acabamentos para construção busca um(a) vendedor(a) para atuar de forma consultiva, desenvolvendo relacionamento com clientes, identificando oportunidades de negócio e contribuindo para o crescimento da carteira de clientes.",
      },
      {
        title: "Principais responsabilidades",
        bullets: [
          "Realizar atendimento consultivo aos clientes",
          "Prospectar novos clientes e desenvolver negócios",
          "Gerenciar e fortalecer o relacionamento com a carteira de clientes",
          "Elaborar orçamentos e conduzir negociações",
          "Realizar visitas comerciais quando necessário",
          "Acompanhar metas e indicadores comerciais",
          "Representar a empresa com foco na excelência do atendimento e na geração de resultados",
        ],
      },
      {
        title: "Requisitos",
        bullets: [
          "Experiência em vendas consultivas",
          "Perfil comunicativo, proativo e orientado para resultados",
          "CNH B",
          "Disponibilidade para atuação interna e externa",
        ],
      },
      {
        title: "Diferenciais",
        bullets: [
          "Experiência com acabamentos para construção, construção civil, arquitetura, design de interiores ou decoração",
          "Carteira de clientes ativa",
        ],
      },
      {
        title: "A empresa oferece",
        bullets: [
          "Salário compatível com a função",
          "Comissão por resultados",
          "Plano de desenvolvimento",
          "Excelente ambiente de trabalho",
          "Férias coletivas no final do ano",
        ],
      },
    ],
    apply: [
      {
        type: "email",
        label: "Enviar e-mail com o currículo",
        value: "crgvagas@gmail.com",
        note: "Assunto: Vendedor Taquara",
      },
    ],
  },
  {
    id: "consultor-comercial-trilha-certa",
    title: "Consultor(a) Comercial",
    company: "Trilha Certa Consultoria",
    companyLogo: trilhaCertaLogo,
    category: "Comercial",
    location: "Vila Dirce, Carapicuíba-SP",
    type: "CLT",
    summary: "Vendas de cursos profissionalizantes via WhatsApp e presencial, com abordagem de leads da planilha.",
    sections: [
      {
        title: "Responsabilidades",
        bullets: [
          "Fazer vendas de cursos profissionalizantes via WhatsApp e presencial",
          "Abordar leads novos e antigos recebidos via Google e redes sociais",
          "Controle de planilhas",
        ],
      },
      {
        title: "Salário",
        bullets: ["R$ 2.000,00 + comissão de R$ 100,00 por venda (meta mínima de 20 vendas/mês)"],
      },
      {
        title: "Horários de trabalho",
        bullets: ["Terça a sábado, das 08h às 17h", "Segunda, das 13h às 17h (44h semanais)"],
      },
      {
        title: "Requisitos",
        bullets: [
          "Residir em Carapicuíba-SP",
          "Ter conhecimento básico de informática",
          "Possuir experiência com vendas (sistema de comissão e metas)",
          "Ter ambição e objetivos claros para maximizar os ganhos",
        ],
      },
      {
        title: "Benefícios",
        bullets: ["Vale-transporte"],
      },
    ],
    apply: [
      {
        type: "whatsapp",
        label: "Falar no WhatsApp",
        value: "5511941222646",
        note: "Informe interesse na vaga de Consultor(a) Comercial",
      },
    ],
  },
];
