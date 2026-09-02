import type { CaseStudy, Lang } from '../types'

/**
 * Toll validation system, the flagship client case. Carried over from the
 * previous portfolio and re-cut so the numbers lead and the process supports.
 */
export const toll: Record<Lang, CaseStudy> = {
  en: {
    slug: 'toll-validation-system',
    eyebrow: 'User-centered design raising throughput',
    title: 'Toll validation system',
    subtitle: 'Rebuilt the internal workspace behind Brazil’s automatic tolls, tripling daily throughput',
    role: 'UX Designer',
    year: '2024',
    discipline: 'UX Design',
    featured: true,
    metrics: [
      { value: '+150%', label: 'General validation throughput' },
      { value: '+800%', label: 'Violation case throughput' },
      { value: '11k', label: 'Validations per day, from 5k' },
      { value: '2', label: 'Rounds of usability testing' },
    ],
    blocks: [
      {
        kind: 'text',
        eyebrow: 'Project description',
        title: 'The invisible team behind a seamless toll',
        body: [
          'One of the largest highway operators in Brazil wanted to raise the volume of traffic validations processed at its toll plazas. Automatic tolls feel seamless to the driver, but every transit that the system cannot resolve on its own lands on the desk of a validation operator.',
          'My role was to redesign the internal interface those operators live in: an outdated, fragmented workspace that had to become a modern, customisable and visually direct tool. The goal was to shorten the path through each case, reduce cognitive load, and move a number the business actually tracks.',
        ],
        image: {
          src: '/Images/toll-ui.jpg',
          alt: 'The redesigned validation interface in its dark theme',
          width: 2048,
          height: 1536,
          caption: 'The redesigned validation workspace operators use today.',
        },
      },
      {
        kind: 'list',
        eyebrow: 'Process',
        title: 'Finding the real bottleneck',
        body: [
          'The brief arrived as “make it faster”. Getting to what was actually slow took four steps.',
        ],
        items: [
          {
            title: 'Benchmarking against our own history',
            text: 'We started from internal references on previous validation projects. Existing patterns gave us a fast read on how similar flows had been solved before, and where those solutions had run out of road.',
          },
          {
            title: 'Interviews with four operators',
            text: 'Exploratory, qualitative sessions with the people doing the work every day. This is where the pain points stopped being generic and became specific: exactly which screens, which steps, which repeated motions.',
          },
          {
            title: 'Interviews with two stakeholders',
            text: 'In parallel, conversations focused on strategic goals and what success would be measured against. It aligned user needs and business targets before a single screen was drawn.',
          },
          {
            title: 'Service blueprint of the current flow',
            text: 'We mapped the end-to-end experience to see how the touchpoints actually connected, which parts were working, and where the friction concentrated.',
          },
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Key insight',
        title: 'One task, five places',
        body: [
          'The analysis exposed a structural gap rather than a cosmetic one. To close a single validation case, an operator had to move across multiple spreadsheets and system tabs, rebuilding the context of the case in their head every time.',
          'The fragmentation was the cost. Each context switch added time, added cognitive load, and added the chance of a human error on a task that is repeated thousands of times a day.',
        ],
        image: {
          src: '/Images/toll-before.png',
          alt: 'The legacy validation interface, dense and fragmented',
          width: 3001,
          height: 2250,
          caption: 'Before: closing a single case meant jumping across tabs and spreadsheets.',
        },
      },
      {
        kind: 'list',
        eyebrow: 'Solution',
        title: 'Collapse the task into a single surface',
        body: [
          'The direction became explicit: consolidate the fragmented process into one streamlined interface. We started in low fidelity so the core idea could be tested and iterated before any visual investment.',
        ],
        items: [
          {
            title: 'Expandable rows, one per transit case',
            text: 'The highest-impact decision. Each row opens in place with everything the case needs, so the operator reads and resolves without switching context or losing their position in the list.',
          },
          {
            title: 'Consolidated action panel',
            text: 'Key actions grouped into a fixed card on the left, so the operator always knows where the next click is instead of scanning the screen for it.',
          },
          {
            title: 'High-resolution vehicle imagery up top',
            text: 'Large, sharp vehicle images placed first in the reading order. Most decisions are visual, so the evidence deserves the strongest position on the screen.',
          },
          {
            title: 'Customisable keyboard shortcuts',
            text: 'These operators repeat the same handful of actions dozens of times a day. Letting them map their own shortcuts turned the interface into something they configure rather than something they endure.',
          },
          {
            title: 'Saved advanced filters',
            text: 'Research showed operators follow the same query patterns week over week. Saving a filter configuration turns a repeated manual setup into one click.',
          },
        ],
        image: {
          src: '/Images/toll-wireframe.jpg',
          alt: 'Low-fidelity wireframe of the consolidated interface',
          width: 1512,
          height: 982,
          caption: 'The single-surface concept, tested in low fidelity before any visual work.',
        },
      },
      {
        kind: 'metrics',
        eyebrow: 'Results',
        title: 'After two rounds of usability testing',
        body: [
          'Each testing round surfaced adjustments that made the difference between a functional interface and one that matched how the work is really done. There was a real learning curve at rollout, as expected with a new structure, and the gain landed once the team settled in.',
        ],
        items: [
          { value: '9k–11k', label: 'Daily validations, up from 3k–5k' },
          { value: '+150%', label: 'General throughput' },
          { value: '2,880', label: 'Violation cases per day, up from 320' },
          { value: '+800%', label: 'Violation throughput' },
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Conclusion',
        title: 'What the numbers confirmed',
        body: [
          'The gain validated the central bet: for a high-repetition, high-volume task, the win is not in adding features. It is in removing the distance between the operator and the decision they are already qualified to make.',
          'Focus, customisation and a single surface did more for throughput than any individual feature on the roadmap.',
        ],
        image: {
          src: '/Images/toll-after.jpg',
          alt: 'The redesigned workspace on a tablet, overlooking a toll plaza',
          width: 1280,
          height: 832,
          caption: 'After: one surface, built around the decision the operator is already qualified to make.',
        },
      },
    ],
  },

  pt: {
    slug: 'toll-validation-system',
    eyebrow: 'Design centrado no usuário elevando a produtividade',
    title: 'Sistema de validação de pedágios',
    subtitle: 'Redesenho do ambiente interno por trás dos pedágios automáticos, triplicando a produção diária',
    role: 'UX Designer',
    year: '2024',
    discipline: 'UX Design',
    featured: true,
    metrics: [
      { value: '+150%', label: 'Produção geral de validações' },
      { value: '+800%', label: 'Produção em casos de violação' },
      { value: '11 mil', label: 'Validações por dia, antes 5 mil' },
      { value: '2', label: 'Rodadas de teste de usabilidade' },
    ],
    blocks: [
      {
        kind: 'text',
        eyebrow: 'Descrição do projeto',
        title: 'O time invisível por trás de um pedágio sem parada',
        body: [
          'Uma das maiores concessionárias de rodovias do Brasil queria aumentar o volume de validações de trânsitos processadas nas suas praças de pedágio. O pedágio automático parece instantâneo para o motorista, mas todo trânsito que o sistema não resolve sozinho cai na mesa de um operador de validação.',
          'Meu papel foi redesenhar a interface interna onde esses operadores passam o dia: um ambiente defasado e fragmentado que precisava virar uma ferramenta moderna, personalizável e visualmente direta. O objetivo era encurtar o caminho dentro de cada caso, reduzir a carga cognitiva e mover um número que o negócio de fato acompanha.',
        ],
        image: {
          src: '/Images/toll-ui.jpg',
          alt: 'A interface de validação redesenhada, no tema escuro',
          width: 2048,
          height: 1536,
          caption: 'O ambiente de validação redesenhado que os operadores usam hoje.',
        },
      },
      {
        kind: 'list',
        eyebrow: 'Processo',
        title: 'Encontrando o gargalo real',
        body: [
          'O briefing chegou como “deixa mais rápido”. Descobrir o que estava lento de verdade levou quatro passos.',
        ],
        items: [
          {
            title: 'Benchmarking na própria casa',
            text: 'Partimos de referências internas de projetos anteriores de validação. Os padrões existentes deram uma leitura rápida de como fluxos parecidos já tinham sido resolvidos e onde essas soluções travavam.',
          },
          {
            title: 'Entrevistas com quatro operadores',
            text: 'Sessões qualitativas exploratórias com quem faz o trabalho todo dia. É aqui que as dores deixam de ser genéricas e viram específicas: quais telas, quais passos, quais movimentos repetidos.',
          },
          {
            title: 'Entrevistas com dois stakeholders',
            text: 'Em paralelo, conversas focadas nos objetivos estratégicos e em como o sucesso seria medido. Isso alinhou necessidade do usuário e meta de negócio antes de qualquer tela ser desenhada.',
          },
          {
            title: 'Service blueprint do fluxo atual',
            text: 'Mapeamos a experiência ponta a ponta para enxergar como os pontos de contato realmente se conectavam, o que já funcionava e onde a fricção se concentrava.',
          },
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Insight principal',
        title: 'Uma tarefa, cinco lugares',
        body: [
          'A análise expôs uma lacuna estrutural, não cosmética. Para fechar um único caso de validação, o operador precisava transitar por várias planilhas e abas do sistema, remontando o contexto do caso na cabeça a cada volta.',
          'A fragmentação era o custo. Cada troca de contexto somava tempo, somava carga cognitiva e somava chance de erro humano em uma tarefa repetida milhares de vezes por dia.',
        ],
        image: {
          src: '/Images/toll-before.png',
          alt: 'A interface antiga de validação, densa e fragmentada',
          width: 3001,
          height: 2250,
          caption: 'Antes: fechar um único caso exigia pular entre abas e planilhas.',
        },
      },
      {
        kind: 'list',
        eyebrow: 'Solução',
        title: 'Concentrar a tarefa em uma única superfície',
        body: [
          'A direção ficou explícita: consolidar o processo fragmentado em uma interface única e fluida. Começamos em baixa fidelidade para testar e iterar a ideia central antes de qualquer investimento visual.',
        ],
        items: [
          {
            title: 'Linhas expansíveis, uma por trânsito',
            text: 'A decisão de maior impacto. Cada linha abre no lugar com tudo o que o caso precisa, então o operador lê e resolve sem trocar de contexto nem perder a posição na lista.',
          },
          {
            title: 'Painel de ações consolidado',
            text: 'As ações principais agrupadas em um card fixo à esquerda, para o operador sempre saber onde está o próximo clique em vez de varrer a tela atrás dele.',
          },
          {
            title: 'Imagens do veículo em alta no topo',
            text: 'Imagens grandes e nítidas primeiro na ordem de leitura. A maioria das decisões é visual, então a evidência merece a posição mais forte da tela.',
          },
          {
            title: 'Atalhos de teclado personalizáveis',
            text: 'Esses operadores repetem o mesmo punhado de ações dezenas de vezes por dia. Deixar cada um mapear os próprios atalhos transformou a interface em algo que ele configura, não em algo que ele aguenta.',
          },
          {
            title: 'Filtros avançados salvos',
            text: 'A pesquisa mostrou que os operadores seguem os mesmos padrões de consulta semana após semana. Salvar a configuração de filtro transforma uma montagem manual repetida em um clique.',
          },
        ],
        image: {
          src: '/Images/toll-wireframe.jpg',
          alt: 'Wireframe de baixa fidelidade da interface consolidada',
          width: 1512,
          height: 982,
          caption: 'O conceito de superfície única, testado em baixa fidelidade antes de qualquer trabalho visual.',
        },
      },
      {
        kind: 'metrics',
        eyebrow: 'Resultados',
        title: 'Depois de duas rodadas de teste de usabilidade',
        body: [
          'Cada rodada de teste trouxe ajustes que fizeram a diferença entre uma interface funcional e uma alinhada com o jeito que o trabalho acontece de verdade. Houve curva de aprendizado real na virada, como esperado com uma estrutura nova, e o ganho apareceu assim que o time se ambientou.',
        ],
        items: [
          { value: '9 a 11 mil', label: 'Validações por dia, antes 3 a 5 mil' },
          { value: '+150%', label: 'Produção geral' },
          { value: '2.880', label: 'Casos de violação por dia, antes 320' },
          { value: '+800%', label: 'Produção em violações' },
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Conclusão',
        title: 'O que os números confirmaram',
        body: [
          'O ganho validou a aposta central: em tarefa de alta repetição e alto volume, a vitória não está em adicionar funcionalidade. Está em remover a distância entre o operador e a decisão que ele já é qualificado para tomar.',
          'Foco, personalização e uma superfície única fizeram mais pela produção do que qualquer funcionalidade isolada do roadmap.',
        ],
        image: {
          src: '/Images/toll-after.jpg',
          alt: 'O ambiente redesenhado em um tablet, com a praça de pedágio ao fundo',
          width: 1280,
          height: 832,
          caption: 'Depois: uma só superfície, construída em volta da decisão que o operador já é qualificado para tomar.',
        },
      },
    ],
  },
}
