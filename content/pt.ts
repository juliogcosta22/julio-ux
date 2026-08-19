import type { SiteContent } from './types'
import { deadqueue } from './cases/deadqueue'
import { toll } from './cases/toll'
import { jornada } from './cases/jornada'
import { nutririo } from './cases/nutririo'

export const pt: SiteContent = {
  meta: {
    title: 'Júlio Costa — Product Designer',
    description:
      'Product designer atuando entre pesquisa, interface e código. Cases em gaming competitivo, operação rodoviária, educação e saúde.',
  },
  nav: {
    brand: 'Júlio Costa',
    items: [
      { id: 'work', label: 'Projetos' },
      { id: 'experience', label: 'Experiência' },
      { id: 'skills', label: 'Habilidades' },
      { id: 'references', label: 'Recomendações' },
      { id: 'about', label: 'Sobre' },
    ],
    contact: 'Entrar em contato',
    menu: 'Menu',
    close: 'Fechar',
  },
  hero: {
    status: 'Aberto a propostas',
    titleTop: 'Desenho interfaces onde o',
    emphasis: 'visual',
    titleBottom: 'encontra a usabilidade',
    intro:
      'Product designer com seis anos entre pesquisa, interface e, mais recentemente, o código que coloca tudo isso no ar. Trabalho em sistemas onde cada decisão de design tem um número preso nela.',
    cta: 'Entrar em contato',
    scroll: 'Projetos selecionados',
  },
  work: {
    eyebrow: 'Projetos selecionados',
    title: 'Quatro projetos, quatro problemas diferentes',
    intro:
      'Ferramentas internas, uma plataforma de ensino, um app de saúde e um produto de gaming competitivo que desenhei e construí de ponta a ponta.',
    viewCase: 'Ler o case',
  },
  experience: {
    eyebrow: 'Experiência',
    title: 'Onde eu trabalhei',
    entries: [
      {
        company: 'Independente',
        role: 'Product Designer & Desenvolvedor',
        period: '2026 — atual',
        bullets: [
          'Desenhando e construindo a DeadQueue, plataforma de matchmaking competitivo rodando em produção, da pesquisa e do design system até o código no ar.',
          'Atuação ponta a ponta: decisões de produto, interface, front-end, modelo de dados e a lógica de ranking por trás da experiência.',
        ],
      },
      {
        company: 'Muralis Tecnologia',
        role: 'UX/UI Designer',
        period: '2023 — 2025',
        bullets: [
          'Criei e implementei design systems e design tokens para garantir consistência e escalabilidade entre os produtos.',
          'Desenhei interfaces para sistemas de gestão em setores como rodovias e shopping centers.',
          'Conduzi processos de design centrado no usuário: pesquisa, entrevistas, análise de concorrentes, UI, prototipação e teste de usabilidade.',
          'Alinhei objetivos de negócio e necessidades do usuário na conversa com stakeholders.',
          'Trabalhei junto do time de desenvolvimento para garantir a implementação fiel do trabalho de UX/UI.',
        ],
      },
    ],
  },
  services: {
    eyebrow: 'O que eu faço',
    title: 'Quatro coisas, bem feitas',
    items: [
      {
        title: 'UX Design',
        text: 'De wireframe a jornada do usuário, usando a técnica que o problema realmente pede em vez de aplicar a caixa de ferramentas inteira toda vez.',
      },
      {
        title: 'Design Visual',
        text: 'Interfaces alinhadas com a marca e a estética sem abrir mão de legibilidade, hierarquia e capacidade de escalar.',
      },
      {
        title: 'Prototipação',
        text: 'Protótipos no Figma que se comportam como produto de verdade, para o teste de usabilidade medir o produto e não o limite do protótipo.',
      },
      {
        title: 'Pesquisa com usuários',
        text: 'Planejar, conduzir e extrair decisão de entrevistas e testes de usabilidade. A entrega é uma decisão, não um relatório.',
      },
    ],
  },
  tools: {
    eyebrow: 'Ferramentas',
    title: 'Com o que eu trabalho',
    items: [
      { title: 'Figma', text: 'Wireframes, protótipos e design systems' },
      { title: 'Next.js e React', text: 'Colocando no ar as interfaces que desenho' },
      { title: 'Tailwind CSS', text: 'Design tokens que sobrevivem ao contato com o código' },
      { title: 'Claude e OpenAI', text: 'Apoio em pesquisa, síntese e escrita' },
      { title: 'UseBerry', text: 'Teste de usabilidade remoto' },
      { title: 'Azure DevOps e Jira', text: 'Entrega ágil' },
    ],
  },
  references: {
    eyebrow: 'Recomendações',
    title: 'O que dizem quem trabalhou comigo',
    items: [
      {
        quote:
          'O Júlio é um membro de time excepcional, sempre disposto a apoiar os outros. Demonstra forte domínio da área, traz insights valiosos com consistência e contribui ativamente compartilhando conhecimento com os colegas.',
        author: 'Colega de time',
        role: 'Muralis Tecnologia',
      },
      {
        quote:
          'Tive a oportunidade de trabalhar com o Júlio e posso dizer que é um profissional muito dedicado e colaborativo. Além da forte proficiência técnica, está sempre buscando aprender mais, especialmente em tecnologia e design. O Júlio tem um perfil criativo e inovador, e as contribuições dele foram muito valiosas para o time. Recomendo com total confiança para qualquer equipe que valorize competência, iniciativa e trabalho em equipe.',
        author: 'Júlia Torres',
        role: 'Colega de time',
      },
      {
        quote:
          'Trabalhar com o Júlio foi uma experiência muito positiva. É extremamente comprometido, traz ideias valiosas com consistência e apresenta os pontos de vista dele de um jeito que eleva o trabalho do time inteiro. Também tem uma habilidade natural de gerar harmonia no grupo, o que fez diferença real na nossa dinâmica.',
        author: 'Juliana Ribeiro',
        role: 'UX/UI Designer',
      },
    ],
  },
  about: {
    eyebrow: 'Sobre',
    title: 'Eu sou o Júlio Costa',
    body: [
      'Product designer focado em experiências digitais relevantes e centradas no usuário. Liderei um projeto estratégico que aumentou a produtividade em 800% em um departamento e 150% em outro, e já trabalhei em plataformas de RH, sistemas rodoviários, apps de shopping, internet banking e educação.',
      'Mais recentemente eu parei de entregar o design na fronteira. Desenho e construo meus próprios produtos, e isso mudou o jeito que eu decido: um trade-off deixa de ser discussão e vira uma coisa que dá para medir na mesma semana.',
      'Trabalho em português e inglês, e estou aberto a posições remotas e projetos freelance.',
    ],
    highlights: [
      { value: '6 anos', label: 'De design' },
      { value: '+800%', label: 'Maior ganho de produtividade entregue' },
      { value: '5', label: 'Setores atendidos' },
      { value: '2', label: 'Idiomas' },
    ],
    cta: 'Entrar em contato',
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos falar do seu produto',
    body:
      'Aberto a posições full-time, projetos freelance e conversas que ainda nem foram formatadas. O caminho mais rápido é o e-mail.',
    email: 'julioguimaraes22@gmail.com',
    channels: [
      { label: 'E-mail', value: 'julioguimaraes22@gmail.com', href: 'mailto:julioguimaraes22@gmail.com' },
      { label: 'LinkedIn', value: 'in/juliogcosta', href: 'https://www.linkedin.com/in/juliogcosta/' },
      { label: 'Instagram', value: '@julio.ux', href: 'https://www.instagram.com/julio.ux/' },
    ],
    back: 'Voltar para o início',
  },
  footer: {
    brand: 'Júlio Costa',
    role: 'Product Designer · UX/UI Designer',
    navTitle: 'Navegação',
    casesTitle: 'Cases',
    socialTitle: 'Onde me achar',
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juliogcosta/' },
      { label: 'Instagram', href: 'https://www.instagram.com/julio.ux/' },
      { label: 'E-mail', href: 'mailto:julioguimaraes22@gmail.com' },
    ],
    rights: '© 2026 Júlio Costa. Todos os direitos reservados.',
  },
  caseUi: {
    role: 'Função',
    year: 'Ano',
    discipline: 'Disciplina',
    index: 'Conteúdo',
    next: 'Próximo case',
    backHome: 'Todos os projetos',
    liveSite: 'Site no ar',
  },
  cases: [deadqueue.pt, toll.pt, nutririo.pt, jornada.pt],
}
