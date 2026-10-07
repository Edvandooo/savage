export interface Pillar {
  number: string;
  title: string;
  tag: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialProofCase {
  id: string;
  tag: string;
  badge: string;
  title: string;
  highlight: string;
  metricLabel: string;
  metricValue: string;
  context: string;
  quote: string;
  dateContext: string;
}

export const SAVAGE_LINKS = {
  instagram: 'https://www.instagram.com/savagecommunity._/',
  instagramHandle: '@savagecommunity._',
  whatsapp: 'https://wa.me/5579999544201?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Savage%20Community%20e%20gostaria%20de%20fazer%20parte.',
  contactDisplay: '+55 (79) 99954-4201',
};

export const SAVAGE_OFFER_CORE =
  'Uma comunidade para quem quer desenvolver mentalidade, disciplina, execução e conhecimento sobre o mercado digital em um ambiente de pessoas com a mesma ambição.';

export const SAVAGE_STATS = [
  {
    value: '5.063',
    suffix: '',
    label: 'Seguidores no perfil oficial',
    subtext: 'Comunidade em crescimento no Instagram',
  },
  {
    value: 'Centenas',
    suffix: '',
    label: 'Vidas e mentes impactadas',
    subtext: 'Jovens e adultos buscando desenvolvimento real',
  },
  {
    value: '14 a 20+',
    suffix: 'anos',
    label: 'Idades dos membros',
    subtext: 'Do zero absoluto até quem já fatura',
  },
  {
    value: '09',
    suffix: 'temas',
    label: 'Fundamentos de evolução',
    subtext: 'Mente, corpo, mercado e execução',
  },
];

/* Unified 9 pillars / what you find */
export const SAVAGE_WHAT_YOU_FIND: Pillar[] = [
  {
    number: '01',
    title: 'Mentalidade',
    tag: 'Mente Blindada',
    description: 'Blindagem ativa contra o vitimismo, comodismo e dispersão, construindo uma postura forte e inegociável.',
  },
  {
    number: '02',
    title: 'Disciplina',
    tag: 'Ação Contínua',
    description: 'Consistência diária para fazer o que precisa ser feito com ou sem motivação, honrando a própria palavra.',
  },
  {
    number: '03',
    title: 'Mercado Digital',
    tag: 'Visão Prática',
    description: 'Compreensão direta sobre como o ecossistema digital opera, modelos reais de receita e posicionamento.',
  },
  {
    number: '04',
    title: 'Empreendedorismo',
    tag: 'Construção Real',
    description: 'Mentalidade e visão estratégica para criar, validar e gerir projetos comerciais no mundo real.',
  },
  {
    number: '05',
    title: 'Produtividade',
    tag: 'Foco Implacável',
    description: 'Gestão de blocos de tempo, rotina inteligente e eliminação de distrações e hábitos que roubam energia.',
  },
  {
    number: '06',
    title: 'Desenvolvimento Pessoal',
    tag: 'Caráter & Postura',
    description: 'Evolução comportamental contínua, postura madura e respeito pelo próprio potencial.',
  },
  {
    number: '07',
    title: 'Estudo',
    tag: 'Direção Clara',
    description: 'Absorção direcionada do conhecimento que realmente importa, sem perder tempo com excessos teóricos.',
  },
  {
    number: '08',
    title: 'Execução',
    tag: 'Campo de Batalha',
    description: 'Aplicação imediata das estratégias para transformar intenções em resultados práticos no dia a dia.',
  },
  {
    number: '09',
    title: 'Comunidade',
    tag: 'Ambiente Forte',
    description: 'Convivência com jovens e adultos focados na mesma ambição, onde o padrão é alto e ninguém fica para trás.',
  },
];

export const AUDIENCE_PROFILES = [
  {
    id: 'ambition',
    badge: 'Para quem tem Ambição',
    title: 'Quer construir algo muito maior',
    description: 'Você sente que nasceu para mais do que a rotina tradicional e quer colocar sua energia na direção certa.',
  },
  {
    id: 'zero',
    badge: 'Para quem está Começando',
    title: 'Ainda no início e busca direção',
    description: 'Não sabe por onde dar o primeiro passo, mas tem fome de aprender com quem já trilhou o caminho.',
  },
  {
    id: 'business',
    badge: 'Para quem já Empreende',
    title: 'Já começou e quer evoluir o negócio',
    description: 'Possui clientes ou um projeto em andamento e precisa de ambiente qualificado e visão para avançar.',
  },
  {
    id: 'mindset',
    badge: 'Para quem quer Mudar a Mente',
    title: 'Disciplina, foco e mente blindada',
    description: 'Cansado de prometer e não cumprir. Você quer desenvolver fibra moral, resiliência e foco diário.',
  },
  {
    id: 'physical',
    badge: 'Para quem quer Evoluir Fisicamente',
    title: 'Treino, alimentação e vigor',
    description: 'Corpo fraco não sustenta mente forte. Treino e alimentação são pilares essenciais da filosofia Savage.',
  },
  {
    id: 'finance',
    badge: 'Para quem quer Crescer Financeiramente',
    title: 'Empreendedorismo e mercado digital',
    description: 'Compreender as mecânicas reais de geração de valor e escala na nova economia com quem pratica.',
  },
];

export const REAL_COMMUNITY_PROOFS: SocialProofCase[] = [
  {
    id: 'faturamento-setembro',
    tag: 'Prova Real 01',
    badge: 'Resultado Compartilhado',
    title: 'Faturamento Líquido de R$ 7.234,55',
    highlight: 'R$ 7.234,55',
    metricLabel: 'Faturamento Líquido Reportado',
    metricValue: 'R$ 7.234,55',
    context: 'Resultado compartilhado por membro aplicando o conteúdo da mentoria dentro da Savage Community.',
    quote: 'Resultado do mês de setembro aplicando o conteúdo da mentoria, SAVAGE ATÉ O FIM.',
    dateContext: 'Mês de Setembro · Relato direto do ambiente interno',
  },
  {
    id: 'mentalidade-apoio',
    tag: 'Prova Real 02',
    badge: 'Interação de Comunidade',
    title: 'Ajuda Mútua em Relação à Mentalidade',
    highlight: 'Apoio Diário',
    metricLabel: 'Ambiente Coletivo',
    metricValue: '100% Compartilhado',
    context: 'Pergunta real feita por um seguidor: "Quero mudar minha mentalidade, a Savage seria o lugar ideal?"',
    quote: 'Sim, lá todos ajudam uns aos outros em relação à mentalidade. O ambiente molda caráter.',
    dateContext: 'Registro oficial compartilhado pela Savage',
  },
  {
    id: 'faixa-etaria',
    tag: 'Prova Real 03',
    badge: 'Demografia Real',
    title: 'Jovens dos 14 aos 20+ anos Unidos',
    highlight: '14 aos 20+ anos',
    metricLabel: 'Amplitude de Idades',
    metricValue: 'Todas as Fases',
    context: 'Dúvida respondida publicamente sobre idade mínima para entrar na comunidade.',
    quote: 'Temos membros de 14, 15, 16, 17, 18, 19, 20 anos ou mais. O que une todos é a fome de evoluir.',
    dateContext: 'Ambiente de respeito, maturidade e estudo',
  },
  {
    id: 'do-zero',
    tag: 'Prova Real 04',
    badge: 'Acolhimento Estratégico',
    title: 'Tanto para o Zero quanto para Escala',
    highlight: 'Do Zero à Escala',
    metricLabel: 'Nível de Entrada',
    metricValue: 'Sem Pré-requisito',
    context: 'A Savage foi estruturada para quem nunca vendeu nada e também para quem já possui operação ativa.',
    quote: 'Quem está do zero aprende os alicerces e a mentalidade; quem já começou ganha refinamento e ambiente de aceleração.',
    dateContext: 'Direcionamento individualizado',
  },
];

/* Focused Conversion FAQ */
export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Para quem é a Savage?',
    answer: 'A Savage é uma comunidade voltada para jovens e adultos com ambição que querem crescer mentalmente, fisicamente e financeiramente, recusando ativamente a mediocridade.',
  },
  {
    question: 'Estou começando do zero. Posso fazer parte?',
    answer: 'Sim. A comunicação da Savage apresenta a comunidade tanto para quem está começando do zero absoluto quanto para quem já começou e quer escalar seus negócios.',
  },
  {
    question: 'Já empreendo. A Savage também é para mim?',
    answer: 'Sim. A Savage também se apresenta como um ambiente para quem já começou e quer refinar estratégias, destravar gargalos operacionais e acelerar a execução diária.',
  },
  {
    question: 'O que é a Savage?',
    answer: 'Uma comunidade e movimento de transformação pessoal e profissional para quem quer desenvolver mentalidade, disciplina, execução e conhecimento sobre o mercado digital em um ambiente de pessoas com a mesma ambição.',
  },
  {
    question: 'Como faço para conhecer ou entrar?',
    answer: 'Você clica nos botões desta página, é direcionado ao WhatsApp oficial da Savage e conversa diretamente com nosso time para entender as condições de entrada.',
  },
];
