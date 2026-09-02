import type { CaseStudy, Lang } from '../types'

/**
 * Jornada UX, gamified learning platform, team project.
 *
 * Note: the previous portfolio had a copy/paste error in this case (the
 * "key insights" block repeated the toll case, and the closing line pointed
 * at nutrir.io). Both are rewritten here from this project's own research.
 */
export const jornada: Record<Lang, CaseStudy> = {
  en: {
    slug: 'jornada-ux',
    eyebrow: 'Engagement through gamification',
    title: 'Jornada UX',
    subtitle: 'A gamified online learning platform built to keep students from dropping out',
    role: 'UX/UI Designer',
    year: '2023',
    discipline: 'UX Design',
    metrics: [
      { value: '9', label: 'Users in usability testing' },
      { value: '5', label: 'Tasks completed without help' },
      { value: '1,000', label: 'Points to unlock cash back' },
    ],
    blocks: [
      {
        kind: 'text',
        eyebrow: 'Project description',
        title: 'How do you make online learning stick?',
        body: [
          'The challenge was to raise student engagement and motivation without complicating navigation or overloading the experience. Anything we added had to earn its place in someone’s evening after a full day of work.',
          'Online teaching removed the barrier of getting to a classroom, and replaced it with a harder one: staying. Students drop out, and when they do, everyone loses: the student, the instructor, and whoever invested in the platform.',
        ],
        image: {
          src: '/Images/jornada-overview.png',
          alt: 'A montage of the Jornada UX platform screens',
          width: 1920,
          height: 1080,
          caption: 'The platform end to end: dashboard, ranking, modules, quizzes and profile.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'The problem',
        title: 'Dropping out is not a discipline problem',
        body: [
          'Students told us they felt unmotivated and could not see progress in their studies. That second half is the operative one. Most platforms deliver content competently and then leave the student to measure their own advance, which means the effort is real and the reward is invisible.',
          'Without a visible sense of movement, every session competes with an easier option, and eventually loses.',
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Process',
        title: 'Research',
        items: [
          {
            title: 'Competitor analysis',
            text: 'Mapping the main platforms showed that none of them offered complete itinerary suggestions. That gap became the differentiator we designed around.',
          },
          {
            title: 'User research',
            text: 'Understanding needs, desires and behaviours first, so the gamification would attach to a real motivation instead of decorating the interface with points.',
          },
          {
            title: 'Persona and journey',
            text: 'We built Clara Santos, a 29-year-old graphic designer studying to change careers. Mapping her journey exposed exactly where demotivation appeared and which navigation moments were costing us.',
          },
        ],
        image: {
          src: '/Images/jornada-persona.png',
          alt: 'Portrait of Clara Santos, the primary persona',
          width: 626,
          height: 417,
          caption: 'Clara Santos, the persona the whole design was tested against.',
        },
      },
      {
        kind: 'quote',
        text: 'Online classes take a lot of focus. Sometimes I get home from work exhausted, so I need classes that hold my attention and get straight to the point.',
        author: 'Clara Santos, primary persona',
      },
      {
        kind: 'text',
        eyebrow: 'Key insight',
        title: 'Effort was invisible, so it felt wasted',
        body: [
          'Across the interviews and the journey map, the pattern was consistent: students were completing real work, from modules to quizzes to delivered cases, and none of it accumulated anywhere they could see.',
          'The design problem was not motivation in the abstract. It was that the platform had no memory of effort, so progress had to be reconstructed by the student every time they logged in.',
        ],
        image: {
          src: '/Images/jornada-quiz.jpg',
          alt: 'The quiz screen, one of the ways students earn points',
          width: 1512,
          height: 982,
          caption: 'Modules, quizzes and delivered cases: real work that had nowhere to accumulate.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'Solution',
        title: 'Give the effort somewhere to accumulate',
        body: [
          'Every completed module, every answered quiz and every delivered case earns a defined number of points. When the student finishes the course and reaches 1,000 points, those points convert into money back.',
          'The reward matters, but the mechanic matters more: points turn scattered study sessions into a single visible line that only moves forward. The student stops asking whether they are making progress, because the answer is on screen.',
        ],
        image: {
          src: '/Images/jornada-modules.jpg',
          alt: 'The modules screen with visible progress on each card',
          width: 1514,
          height: 982,
          caption: 'Progress made visible: every module carries its own advance on screen.',
        },
      },
      {
        kind: 'list',
        eyebrow: 'Validation',
        title: 'Usability testing on the mid-fidelity prototype',
        body: [
          'We ran the prototype with nine users. Five tasks were completed cleanly, and one turned out to be genuinely too hard, which is where the useful finding was.',
        ],
        items: [
          {
            title: 'The friend chat was buried',
            text: 'Users could not find it. That mattered more than a normal navigation miss, because peer interaction is what makes a learning community grow, and a feature nobody can find contributes nothing.',
          },
          {
            title: 'Navigation was refined, not rebuilt',
            text: 'The test confirmed the core structure worked. The fixes were about visibility and hierarchy rather than a new flow.',
          },
          {
            title: 'A style guide to hold it together',
            text: 'We closed the project with a style guide covering the visual system, so consistency survived past the people who designed it.',
          },
        ],
        image: {
          src: '/Images/jornada-styleguide.png',
          alt: 'The colour section of the Jornada UX style guide',
          width: 1356,
          height: 1020,
          caption: 'The style guide that held the visual system together.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'Conclusion',
        title: 'What I took from it',
        body: [
          'This was a team project, and most of what I gained was about working as one: communication, dividing the work, defending a decision and then letting the test overrule it.',
          'The lasting design lesson was narrower and more useful. Gamification is not points. It is making effort visible, and points are just one way to do that.',
        ],
      },
    ],
  },

  pt: {
    slug: 'jornada-ux',
    eyebrow: 'Engajamento através de gamificação',
    title: 'Jornada UX',
    subtitle: 'Plataforma de ensino online gamificada, desenhada para segurar o aluno até o fim',
    role: 'UX/UI Designer',
    year: '2023',
    discipline: 'UX Design',
    metrics: [
      { value: '9', label: 'Usuários no teste de usabilidade' },
      { value: '5', label: 'Tarefas concluídas sem ajuda' },
      { value: '1.000', label: 'Pontos para liberar o cashback' },
    ],
    blocks: [
      {
        kind: 'text',
        eyebrow: 'Descrição do projeto',
        title: 'Como fazer o ensino online grudar?',
        body: [
          'O desafio era aumentar o engajamento e a motivação do aluno sem complicar a navegação nem sobrecarregar a experiência. Tudo o que a gente adicionasse precisava justificar o espaço na noite de alguém que já trabalhou o dia inteiro.',
          'O ensino online derrubou a barreira de chegar até a sala e colocou no lugar uma barreira mais difícil: ficar. O aluno desiste, e quando desiste todo mundo perde: o aluno, o professor e quem investiu na plataforma.',
        ],
        image: {
          src: '/Images/jornada-overview.png',
          alt: 'Uma montagem das telas da plataforma Jornada UX',
          width: 1920,
          height: 1080,
          caption: 'A plataforma de ponta a ponta: painel, ranking, módulos, quizzes e perfil.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'O problema',
        title: 'Desistir não é falta de disciplina',
        body: [
          'Os alunos diziam que se sentiam desmotivados e que não conseguiam enxergar progresso nos estudos. A segunda metade dessa frase é a que importa. A maioria das plataformas entrega conteúdo com competência e depois deixa o aluno medir sozinho o próprio avanço, o que significa esforço real com recompensa invisível.',
          'Sem uma sensação visível de movimento, cada sessão de estudo compete com uma opção mais fácil, e uma hora perde.',
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Processo',
        title: 'Pesquisa',
        items: [
          {
            title: 'Análise de concorrentes',
            text: 'Mapear as principais plataformas mostrou que nenhuma oferecia sugestão de itinerário completo. Essa lacuna virou o diferencial em torno do qual desenhamos.',
          },
          {
            title: 'Pesquisa com usuários',
            text: 'Entender necessidades, desejos e comportamentos primeiro, para a gamificação se prender a uma motivação real em vez de decorar a interface com pontos.',
          },
          {
            title: 'Persona e jornada',
            text: 'Criamos a Clara Santos, designer gráfica de 29 anos estudando para mudar de carreira. Mapear a jornada dela expôs exatamente onde a desmotivação aparecia e quais momentos de navegação estavam custando caro.',
          },
        ],
        image: {
          src: '/Images/jornada-persona.png',
          alt: 'Retrato de Clara Santos, a persona principal',
          width: 626,
          height: 417,
          caption: 'Clara Santos, a persona contra a qual todo o design foi testado.',
        },
      },
      {
        kind: 'quote',
        text: 'Aula online exige muito foco. Às vezes eu chego do trabalho exausta, então preciso de aula que prenda a minha atenção e vá direto ao ponto.',
        author: 'Clara Santos, persona principal',
      },
      {
        kind: 'text',
        eyebrow: 'Insight principal',
        title: 'O esforço era invisível, então parecia desperdiçado',
        body: [
          'Nas entrevistas e no mapa de jornada o padrão se repetia: o aluno estava entregando trabalho real, módulos, quizzes, cases, e nada disso se acumulava em nenhum lugar que ele pudesse ver.',
          'O problema de design não era motivação no abstrato. Era que a plataforma não tinha memória do esforço, então o progresso precisava ser reconstruído pelo aluno toda vez que ele entrava.',
        ],
        image: {
          src: '/Images/jornada-quiz.jpg',
          alt: 'A tela de quiz, uma das formas do aluno ganhar pontos',
          width: 1512,
          height: 982,
          caption: 'Módulos, quizzes e cases entregues: trabalho real que não se acumulava em lugar nenhum.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'Solução',
        title: 'Dar ao esforço um lugar para acumular',
        body: [
          'Cada módulo concluído, cada quiz respondido e cada case entregue vale uma quantidade definida de pontos. Quando o aluno termina o curso e chega a 1.000 pontos, esses pontos viram dinheiro de volta.',
          'A recompensa importa, mas a mecânica importa mais: os pontos transformam sessões de estudo espalhadas em uma única linha visível que só anda para frente. O aluno para de perguntar se está progredindo, porque a resposta está na tela.',
        ],
        image: {
          src: '/Images/jornada-modules.jpg',
          alt: 'A tela de módulos com o progresso visível em cada card',
          width: 1514,
          height: 982,
          caption: 'Progresso tornado visível: cada módulo carrega o próprio avanço na tela.',
        },
      },
      {
        kind: 'list',
        eyebrow: 'Validação',
        title: 'Teste de usabilidade no protótipo de média fidelidade',
        body: [
          'Rodamos o protótipo com nove usuários. Cinco tarefas foram concluídas sem tropeço e uma se mostrou realmente difícil demais, e foi ali que estava o achado útil.',
        ],
        items: [
          {
            title: 'O chat com amigos estava enterrado',
            text: 'Os usuários não achavam. Isso pesou mais que um erro comum de navegação, porque a interação entre pessoas é o que faz a comunidade da plataforma crescer, e funcionalidade que ninguém encontra não contribui em nada.',
          },
          {
            title: 'A navegação foi refinada, não refeita',
            text: 'O teste confirmou que a estrutura central funcionava. Os ajustes foram de visibilidade e hierarquia, não de fluxo novo.',
          },
          {
            title: 'Um style guide para sustentar o conjunto',
            text: 'Fechamos o projeto com um style guide cobrindo o sistema visual, para a consistência sobreviver às pessoas que desenharam.',
          },
        ],
        image: {
          src: '/Images/jornada-styleguide.png',
          alt: 'A seção de cores do style guide da Jornada UX',
          width: 1356,
          height: 1020,
          caption: 'O style guide que sustentou o sistema visual.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'Conclusão',
        title: 'O que eu levei do projeto',
        body: [
          'Foi um projeto em equipe, e boa parte do que ganhei foi sobre trabalhar como uma: comunicação, divisão de tarefas, defender uma decisão e depois deixar o teste derrubar ela.',
          'A lição de design que ficou é mais estreita e mais útil. Gamificação não é ponto. É tornar o esforço visível, e ponto é só uma das formas de fazer isso.',
        ],
      },
    ],
  },
}
