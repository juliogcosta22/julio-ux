import type { CaseStudy, Lang } from '../types'

/** Nutrir.io, meal planning app tackling diet adherence. */
export const nutririo: Record<Lang, CaseStudy> = {
  en: {
    slug: 'nutririo',
    eyebrow: 'Addressing low adherence to diets',
    title: 'Nutrir.io',
    subtitle: 'A meal planning app designed around execution, not calorie counting',
    role: 'UX/UI Designer',
    year: '2025',
    discipline: 'UX Design',
    metrics: [
      { value: '20–45', label: 'Age range of the target user' },
      { value: '4', label: 'Pillars in the core experience' },
      { value: '1', label: 'Weekly plan as the central axis' },
    ],
    blocks: [
      {
        kind: 'text',
        eyebrow: 'Project description',
        title: 'Turning a plan into practice',
        body: [
          'Nutrir.io is an intelligent meal planning app built to close the gap between having a diet and following one. The solution combines weekly planning, recipes that adapt to the user’s goals, automatic shopping lists and nutritional tracking inside a light, unpressured interface.',
          'The challenge was low adherence caused by disorganisation, monotony, and the distance between a nutritional goal and an actual Tuesday evening.',
        ],
        image: {
          src: '/Images/nutririo-plan.png',
          alt: 'The Nutrir.io home screen showing the day’s meal plan',
          width: 412,
          height: 917,
          caption: 'The home screen: the day’s plan and nutrition at a glance, without pressure.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'The problem',
        title: 'People do not quit diets for lack of willpower',
        body: [
          'They quit because of execution. Meal plans tend to be rigid and do not adapt to the user’s routine, preferences or the unexpected. That produces disorganisation, repetitive meals and off-plan decisions.',
          'Each of those is small on its own. Stacked over a few weeks, they turn into frustration, and frustration is what ends the diet, not the diet itself.',
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Process',
        title: 'Research',
        items: [
          {
            title: 'Competitor analysis and benchmarking',
            text: 'Established nutrition apps prioritise calorie counting and tracking, with little attention to weekly organisation, flexibility or fitting a real routine. The benchmark set the direction by contrast: avoid dense interfaces, commit to clarity and proactive planning.',
          },
          {
            title: 'Qualitative interviews, two sides',
            text: 'I interviewed potential users and nutritionists, which validated some assumptions and killed others. The dominant pain points were food variety and, above all, organising the week.',
          },
          {
            title: 'Defining the user',
            text: 'People aged 20 to 45 who want to eat well, for weight loss, muscle gain or general wellbeing, but struggle to follow a plan consistently. Busy routines, high value on practicality, and a low tolerance for rigid diets and calorie-only apps.',
          },
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Persona',
        title: 'Ana Pereira, 29, salesperson',
        body: ['Busy routine, wants to lose weight and eat better without turning it into a second job.'],
        items: [
          { title: 'Abandons diets for lack of time and planning', text: 'The plan exists. The half hour to execute it does not.' },
          { title: 'Rigid, unrealistic meal plans', text: 'A plan that breaks the first time the week changes is a plan that gets dropped.' },
          { title: 'Apps focused only on calories', text: 'They measure the outcome without helping with the execution that produces it.' },
          { title: 'Lack of variety kills motivation', text: 'Repetition is the most common and most preventable reason people quit.' },
        ],
        image: {
          src: '/Images/nutririo-persona.jpg',
          alt: 'Portrait of Ana Pereira, the primary persona',
          width: 1024,
          height: 1024,
          caption: 'Ana Pereira, 29: the routine the whole product had to fit into.',
        },
      },
      {
        kind: 'list',
        eyebrow: 'Solution',
        title: 'Design the week, not the meal',
        body: [
          'The design focus was to reduce friction, remove unnecessary decisions and make it clear what to eat, when and how, while respecting the routine the user actually has.',
        ],
        items: [
          {
            title: 'Onboarding that asks for the minimum',
            text: 'Only essential information up front. Every extra question at the start is a reason to close the app before it has done anything useful.',
          },
          {
            title: 'The weekly plan as the central axis',
            text: 'Making the week the main object, rather than the individual meal, moves the decisions to a single moment and drops the daily cognitive load to near zero.',
          },
          {
            title: 'Recipes that adapt without breaking the goal',
            text: 'Flexibility is the retention mechanism. The plan bends around the user’s week instead of the user bending around the plan.',
          },
          {
            title: 'Automatic shopping lists and tracking',
            text: 'The plan generates its own logistics, so the step between deciding and doing stops being manual work.',
          },
        ],
        image: {
          src: '/Images/nutririo-recipes.png',
          alt: 'The recipe browser inside a meal',
          width: 824,
          height: 1834,
          caption: 'Recipes that adapt to the goal, so the plan bends around the week.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'Visual system',
        title: 'A style guide that lowers the pressure',
        body: [
          'The guide was built to convey lightness, clarity and warmth. The palette, typography and visual elements reinforce a calm and trustworthy experience, avoiding the sense of pressure and rigidity common in diet apps.',
          'Beyond the emotional register, it does the structural job: visual consistency, predictable behaviour and room to scale as features are added.',
        ],
        image: {
          src: '/Images/nutririo-palette.png',
          alt: 'The Nutrir.io colour palette from the style guide',
          width: 2383,
          height: 4096,
          caption: 'The palette behind the calm, unpressured register of the app.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'Conclusion',
        title: 'The hard part is never the information',
        body: [
          'Nutrir.io reinforced that the real challenge in digital nutrition is daily execution, not knowledge. Focusing on planning, clarity and flexibility produced a more human experience that fits the routine people actually have.',
          'The project also sharpened three things I now carry into any product with a behavioural goal: reduce cognitive load, use non-judgemental language, and treat consistency as an ongoing process instead of perfection.',
        ],
      },
    ],
  },

  pt: {
    slug: 'nutririo',
    eyebrow: 'Resolvendo a baixa adesão à dieta',
    title: 'Nutrir.io',
    subtitle: 'App de planejamento alimentar desenhado em torno da execução, não da contagem de calorias',
    role: 'UX/UI Designer',
    year: '2025',
    discipline: 'UX Design',
    metrics: [
      { value: '20 a 45', label: 'Faixa etária do usuário-alvo' },
      { value: '4', label: 'Pilares da experiência central' },
      { value: '1', label: 'Plano semanal como eixo' },
    ],
    blocks: [
      {
        kind: 'text',
        eyebrow: 'Descrição do projeto',
        title: 'Transformar o plano em prática',
        body: [
          'O Nutrir.io é um app inteligente de planejamento alimentar feito para fechar a distância entre ter uma dieta e seguir uma dieta. A solução combina planejamento semanal, receitas que se adaptam aos objetivos do usuário, lista de compras automática e acompanhamento nutricional dentro de uma interface leve e sem pressão.',
          'O desafio era a baixa adesão causada por desorganização, monotonia e a distância entre uma meta nutricional e uma terça-feira à noite de verdade.',
        ],
        image: {
          src: '/Images/nutririo-plan.png',
          alt: 'A tela inicial do Nutrir.io mostrando o plano de refeições do dia',
          width: 412,
          height: 917,
          caption: 'A tela inicial: o plano do dia e a nutrição num relance, sem pressão.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'O problema',
        title: 'Ninguém abandona dieta por falta de vontade',
        body: [
          'Abandona por execução. Os planos alimentares costumam ser rígidos e não se adaptam à rotina, às preferências nem ao imprevisto do usuário. Isso gera desorganização, refeições repetitivas e decisões fora do plano.',
          'Cada uma dessas coisas é pequena sozinha. Empilhadas por algumas semanas, viram frustração, e é a frustração que encerra a dieta, não a dieta em si.',
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Processo',
        title: 'Pesquisa',
        items: [
          {
            title: 'Análise de concorrentes e benchmarking',
            text: 'Os apps de nutrição consolidados priorizam contagem e rastreio de calorias, com pouca atenção à organização semanal, à flexibilidade e ao encaixe na rotina real. O benchmark definiu a direção por contraste: fugir de interfaces densas e apostar em clareza e planejamento proativo.',
          },
          {
            title: 'Entrevistas qualitativas dos dois lados',
            text: 'Entrevistei usuários em potencial e nutricionistas, o que validou algumas hipóteses e derrubou outras. As dores dominantes eram a variedade de alimentos e, acima de tudo, a organização da semana.',
          },
          {
            title: 'Definição do usuário',
            text: 'Pessoas de 20 a 45 anos que querem comer bem, seja para emagrecer, ganhar massa ou bem-estar geral, mas têm dificuldade de seguir um plano com consistência. Rotina corrida, praticidade como valor alto e pouca tolerância a dieta rígida e app só de caloria.',
          },
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Persona',
        title: 'Ana Pereira, 29 anos, vendedora',
        body: ['Rotina corrida, quer emagrecer e comer melhor sem transformar isso em um segundo emprego.'],
        items: [
          { title: 'Abandona a dieta por falta de tempo e planejamento', text: 'O plano existe. A meia hora para executar ele não.' },
          { title: 'Planos rígidos e irreais', text: 'Plano que quebra na primeira semana atípica é plano que vai ser largado.' },
          { title: 'Apps focados só em caloria', text: 'Medem o resultado sem ajudar na execução que produz esse resultado.' },
          { title: 'Falta de variedade desmotiva', text: 'A repetição é o motivo mais comum e mais evitável de desistência.' },
        ],
        image: {
          src: '/Images/nutririo-persona.jpg',
          alt: 'Retrato de Ana Pereira, a persona principal',
          width: 1024,
          height: 1024,
          caption: 'Ana Pereira, 29: a rotina em que o produto inteiro precisava caber.',
        },
      },
      {
        kind: 'list',
        eyebrow: 'Solução',
        title: 'Desenhar a semana, não a refeição',
        body: [
          'O foco de design foi reduzir fricção, eliminar decisões desnecessárias e deixar claro o que comer, quando e como, respeitando a rotina que o usuário realmente tem.',
        ],
        items: [
          {
            title: 'Onboarding que pede o mínimo',
            text: 'Só a informação essencial na entrada. Toda pergunta extra no começo é um motivo para fechar o app antes dele ter feito algo útil.',
          },
          {
            title: 'O plano semanal como eixo central',
            text: 'Colocar a semana como objeto principal, no lugar da refeição avulsa, concentra as decisões em um único momento e derruba a carga cognitiva diária para perto de zero.',
          },
          {
            title: 'Receitas que adaptam sem quebrar a meta',
            text: 'Flexibilidade é o mecanismo de retenção. O plano dobra em volta da semana do usuário em vez do usuário dobrar em volta do plano.',
          },
          {
            title: 'Lista de compras automática e acompanhamento',
            text: 'O plano gera a própria logística, então o passo entre decidir e fazer deixa de ser trabalho manual.',
          },
        ],
        image: {
          src: '/Images/nutririo-recipes.png',
          alt: 'O navegador de receitas dentro de uma refeição',
          width: 824,
          height: 1834,
          caption: 'Receitas que adaptam à meta, para o plano dobrar em volta da semana.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'Sistema visual',
        title: 'Um style guide que baixa a pressão',
        body: [
          'O guia foi criado para transmitir leveza, clareza e acolhimento. A paleta, a tipografia e os elementos visuais reforçam uma experiência calma e confiável, evitando a sensação de pressão e rigidez comum nos apps de dieta.',
          'Além do registro emocional, ele faz o trabalho estrutural: consistência visual, comportamento previsível e espaço para escalar conforme novas funcionalidades entram.',
        ],
        image: {
          src: '/Images/nutririo-palette.png',
          alt: 'A paleta de cores do Nutrir.io, do style guide',
          width: 2383,
          height: 4096,
          caption: 'A paleta por trás do registro calmo e sem pressão do app.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'Conclusão',
        title: 'A parte difícil nunca é a informação',
        body: [
          'O Nutrir.io reforçou que o desafio real da nutrição digital é a execução do dia a dia, não o conhecimento. Focar em planejamento, clareza e flexibilidade produziu uma experiência mais humana e alinhada com a rotina que as pessoas de fato têm.',
          'O projeto também afiou três coisas que eu levo hoje para qualquer produto com meta comportamental: reduzir carga cognitiva, usar linguagem sem julgamento e tratar consistência como processo contínuo, não como perfeição.',
        ],
      },
    ],
  },
}
