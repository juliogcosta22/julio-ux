import type { CaseStudy, Lang } from '../types'

/**
 * DeadQueue, the self-initiated, end-to-end case. The narrative is built
 * around five real problems players hit in Deadlock's organised matches and the five product
 * answers DeadQueue ships for them, the UX/UI decisions behind each, and how a
 * product designer directed the whole build with Claude Code. Engineering is
 * evidence, never the subject.
 */
export const deadqueue: Record<Lang, CaseStudy> = {
  en: {
    slug: 'deadqueue',
    eyebrow: 'Self-initiated · design and build',
    title: 'DeadQueue',
    subtitle: 'A competitive matchmaking platform for Deadlock, designed and shipped solo',
    role: 'Product Designer & Developer',
    year: '2026',
    discipline: 'Product Design + Development',
    inverted: true,
    featured: true,
    metrics: [
      { value: '500+', label: 'Users in the first two months' },
      { value: '400+', label: 'Matches created' },
      { value: '177', label: 'Active users' },
      { value: '20', label: 'Paying subscribers' },
    ],
    links: [{ label: 'Visit deadqueue.com.br', href: 'https://www.deadqueue.com.br' }],
    blocks: [
      {
        kind: 'text',
        eyebrow: 'Project description',
        title: 'The competitive Deadlock doesn’t have yet',
        body: [
          'DeadQueue is a platform that organises more competitive matches for Deadlock, Valve’s new MOBA hero shooter. The game is still in closed beta, but it already averages around 60,000 active players worldwide, with plenty of people waiting for its launch.',
          'DeadQueue brings the community what the game doesn’t deliver competitively yet: balanced players, hero picks and bans, communication, and a rank that follows your progress.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Background',
        title: 'Why I started it',
        body: [
          'I play the game, and I kept hearing the same complaint: the matches the game puts together are just bad.',
          'So I went to find out why. I talked to streamers and players, and the frustration was always the same, all around the matchmaking.',
          'The demand was already there, from a community that cares. It just needed a platform that took it seriously.',
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Problem',
        title: 'Five problems behind one complaint',
        body: [
          'One sentence came up again and again: “the matchmaking is just bad.” When I dug in, it split into five specific problems, each one needing its own fix.',
        ],
        items: [
          {
            title: 'Matches aren’t balanced',
            text: 'Players of very different skill land in the same match, so the result is decided before it even starts.',
          },
          {
            title: 'Hero picks are blind',
            text: 'You choose your hero without seeing the enemy team, or even your own. The composition decides half the match, and it’s put together blind.',
          },
          {
            title: 'Nobody talks, and nothing stops sabotage',
            text: 'People stay silent, quit halfway, or throw to lose faster, and nothing in the game stops them.',
          },
          {
            title: 'No feedback at the end',
            text: 'You play and play and play, and your rank doesn’t move. And nobody really understands how rank works.',
          },
          {
            title: 'No reason to get better',
            text: 'With nothing at stake, players never push to learn the game or beat their own ceiling.',
          },
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Solution 01',
        title: 'Ten levels, and a captain draft that balances',
        body: [
          'The fix for unbalanced matches starts with a level from 1 to 10. You only queue with players within two levels of you, so a level 7 never ends up in a lobby full of level 2s. The group is already close before teams are formed.',
          'Captains are voted in, which already splits the strongest players onto different teams. Then each captain picks their five players one at a time, alternating, so both teams come out even.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Solution 02',
        title: 'Picks and bans, with both teams in view',
        body: [
          'Blind picks were the second problem, so DeadQueue adds a full hero draft before the match. Bans first, then picks, with both teams’ choices visible as they happen.',
          'That turns the minute before the match into part of the match. You finally pick your hero knowing what the enemy is building and what your team needs.',
        ],
        image: {
          src: '/Images/Picks.png',
          alt: 'DeadQueue hero draft with picks and bans',
          width: 1920,
          height: 981,
          caption: 'The draft screen: bans first, then everyone picks, with both teams in view.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'Solution 03',
        title: 'Communication is the baseline',
        body: [
          'The game’s own voice chat is good, but almost nobody uses it. On DeadQueue, linking your Discord, the biggest communication platform for gamers, is required. And we encourage active communication, so players can actually get better at the game.',
          'And here, talking actually matters. Players who stay silent, quit, or try to sabotage the team get handled by moderation, something public matchmaking never had.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Solution 04',
        title: 'Progress in every match',
        body: [
          'The result comes right after the match ends, fast and with real feedback, in two ways: an AI reads a screenshot of the final scoreboard in a couple of seconds, and the official Deadlock data confirms it later. From there, points are based on how you played and how strong the other team was, so beating a tough team is worth more than rolling an easy one. And players see their progress in real time!',
        ],
        image: {
          src: '/Images/Final de partida.png',
          alt: 'End-of-match result screen',
          width: 1920,
          height: 1080,
          caption: 'The end-of-match screen the AI reads, and where your rank moves.',
        },
      },
      {
        kind: 'callout',
        eyebrow: 'Solution 05',
        title: 'Above all, a place to get better',
        body: [
          'That is what DeadQueue really is: a community built around getting better at the game.',
          'The players themselves say they’ve improved a lot compared to people who never played here.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Gamification',
        title: 'Engagement and personalisation',
        body: [
          'Every game has gamification, and DeadQueue is no different. On top of your level, every player has a profile they can customise, visible to everyone.',
          'The idea is simple. You earn DeadCoins every match, more for a win and a bit less for a loss. You spend them on cosmetics like animated frames, a custom name colour and exclusive banners.',
          'And what drives the most motivation and engagement: the leaderboard, with prizes for the top players.',
        ],
        image: {
          src: '/Images/Ranking.png',
          alt: 'DeadQueue season leaderboard',
          width: 1916,
          height: 938,
          caption: 'The season leaderboard, where the top three finish for real prizes.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'Subscriptions',
        title: 'Subscribe and support',
        body: [
          'Subscriptions keep DeadQueue online, so the plan comes with real perks, from bonus coins to more visibility on the platform. But honestly, most people subscribe for one reason: to keep the project running.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Process',
        title: 'From design to code',
        body: [
          'After understanding what users needed and designing the flows and interfaces in Figma, all that was left was bringing it to life. For that, I used my basic development skills and Claude Code, taking the project from prototype to reality.',
          'This stage was full of quick adjustments. Features that would have taken sprints shipped in days, sometimes in hours. With no slow hand-off, I could test the same day, a speed that was unthinkable in the old process.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Testing',
        title: 'Testing with real players before launch',
        body: [
          'Before opening it to everyone, the product had to survive real players. So I ran closed test sessions inside streamer communities, where the people most likely to break things, and to have strong opinions, already hang out.',
          'Getting them in was a design problem of its own. Testers earned an exclusive Beta Tester badge that few players will ever have, so joining a test became something to show off, not a favour to ask for.',
          'It worked. Six sessions turned up a pile of bugs and ideas, and each one led to fixes before launch. By July, the version that went live had already been tested hard by the community it was built for.',
        ],
      },
      {
        kind: 'metrics',
        eyebrow: 'Results',
        title: 'Two months in',
        body: [
          'Two months after launch, the numbers say the loop works. People come back, play enough to start climbing, and some already pay to keep the platform running. For a bet on a game that hasn’t fully launched, that early community is the whole point.',
        ],
        items: [
          { value: 'July 2026', label: 'Live in production' },
          { value: '500+', label: 'Users signed up' },
          { value: '177', label: 'Active users' },
          { value: '132', label: 'Played 5+ matches' },
          { value: '400+', label: 'Matches created on DeadQueue' },
          { value: '20', label: 'Paying subscribers' },
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Roadmap',
        title: 'Built to grow with the game',
        body: [
          'DeadQueue is a bet on where Deadlock is heading, so what’s next is aimed at the competitive scene forming around it. Three things come next.',
        ],
        items: [
          {
            title: 'Tournaments on the platform',
            text: 'Deadlock is intensely competitive and already has tournaments in beta. Running them on DeadQueue, with brackets, drafts and results in one place, is what the scene will lean on most at launch.',
          },
          {
            title: 'Scrims and scheduled practice',
            text: 'Teams, pro and amateur, can book practice matches with the draft handled by DeadQueue, so organised training is as easy as joining a queue.',
          },
          {
            title: 'Academy',
            text: 'The biggest and hardest one: a school that teaches new and veteran players the game, where you learn something and put it into practice right away, in matches the platform runs.',
          },
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Conclusion',
        title: 'What owning the whole thing taught me',
        body: [
          'Designing and building the same product removed the handoff completely. A decision like “read the scoreboard from a screenshot” wasn’t a ticket to fight for, it was a conversation with Claude Code and a working feature that afternoon.',
          'The lesson that stuck: a design decision only becomes real when something has to run on it, and a product only becomes real when people change because of it. The proof DeadQueue works isn’t the thirty-one screens, it’s the players who got better inside them.',
        ],
      },
    ],
  },

  pt: {
    slug: 'deadqueue',
    eyebrow: 'Projeto autoral · design e construção',
    title: 'DeadQueue',
    subtitle: 'Plataforma de matchmaking competitivo para Deadlock, desenhada e construída sozinho',
    role: 'Product Designer & Desenvolvedor',
    year: '2026',
    discipline: 'Product Design + Desenvolvimento',
    inverted: true,
    featured: true,
    metrics: [
      { value: '500+', label: 'Usuários nos dois primeiros meses' },
      { value: '400+', label: 'Partidas criadas' },
      { value: '177', label: 'Usuários ativos' },
      { value: '20', label: 'Assinantes' },
    ],
    links: [{ label: 'Visitar deadqueue.com.br', href: 'https://www.deadqueue.com.br' }],
    blocks: [
      {
        kind: 'text',
        eyebrow: 'Descrição do projeto',
        title: 'O competitivo que o Deadlock ainda não tem',
        body: [
          'O DeadQueue é uma plataforma que organiza partidas mais competitivas para Deadlock, o novo MOBA hero shooter da Valve. O jogo ainda está em beta fechado, mas já tem uma média de 60 mil jogadores ativos no mundo, e muita gente esperando o lançamento.',
          'O DeadQueue busca trazer para a comunidade o que o jogo ainda não entrega competitivamente: jogadores equilibrados, picks and bans de heróis, comunicação e um rank que acompanha o seu desenvolvimento.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Contexto',
        title: 'Por que eu comecei',
        body: [
          'Eu jogo, e escutava sempre a mesma reclamação: as partidas organizadas pelo jogo são muito ruins.',
          'Então fui descobrir o porquê. Conversei com streamers e jogadores, e a frustração era sempre a mesma, toda em torno do matchmaking.',
          'A vontade já existia, numa comunidade que se importa. Só faltava uma plataforma que levasse isso a sério.',
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Problema',
        title: 'Cinco problemas por trás de uma reclamação',
        body: [
          'Uma frase aparecia o tempo todo: “o matchmaking é muito ruim.” Quando fui a fundo, ela se abria em cinco problemas específicos, cada um pedindo a própria solução.',
        ],
        items: [
          {
            title: 'As partidas não são equilibradas',
            text: 'Jogadores de níveis bem diferentes caem na mesma partida, então o resultado já está decidido antes de começar.',
          },
          {
            title: 'Os heróis são escolhidos no escuro',
            text: 'Você escolhe o herói sem ver o time inimigo, nem o seu. A composição decide metade da partida, e ela é montada no escuro.',
          },
          {
            title: 'Ninguém se comunica, e nada impede a sabotagem',
            text: 'As pessoas ficam caladas, abandonam no meio ou jogam para perder rápido, e nada no jogo impede isso.',
          },
          {
            title: 'Nenhum feedback no fim',
            text: 'Você joga, joga e joga, e o seu rank não muda. Ninguém entende como o rank funciona.',
          },
          {
            title: 'Nenhum motivo para evoluir',
            text: 'Sem nada em jogo, o jogador nunca se esforça para aprender ou superar o próprio limite.',
          },
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Solução 01',
        title: 'Dez níveis, e um draft de capitães que equilibra',
        body: [
          'A correção para as partidas desequilibradas começa com um nível de 1 a 10. Você só entra na fila com jogadores até dois níveis de distância, então um nível 7 nunca cai num lobby cheio de nível 2. O grupo já está próximo antes de formar os times.',
          'Os capitães são votados, o que já separa os jogadores mais fortes em times diferentes. Depois, cada um escolhe seus cinco jogadores de forma alternada, para os dois times saírem parelhos.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Solução 02',
        title: 'Picks and bans, com os dois times à vista',
        body: [
          'Herói no escuro era o segundo problema, então o DeadQueue coloca um draft de heróis completo antes da partida. Primeiro os bans, depois os picks, com as escolhas dos dois times aparecendo na hora.',
          'Isso transforma o minuto antes da partida em parte da partida. Você finalmente escolhe o herói sabendo o que o inimigo está montando e do que o seu time precisa.',
        ],
        image: {
          src: '/Images/Picks.png',
          alt: 'Draft de heróis do DeadQueue com picks e bans',
          width: 1920,
          height: 981,
          caption: 'A tela de draft: primeiro os bans, depois todo mundo escolhe, com os dois times à vista.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'Solução 03',
        title: 'Comunicação é requisito mínimo',
        body: [
          'O chat de voz do próprio jogo é bom, mas quase ninguém usa. No DeadQueue, vincular o Discord, a maior plataforma de comunicação entre gamers, é obrigatório. E nós incentivamos a comunicação ativa para que os jogadores possam evoluir no game.',
          'E aqui a conversa importa de verdade. Quem fica calado, abandona ou tenta sabotar o time é tratado pela moderação, algo que o matchmaking público nunca teve.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Solução 04',
        title: 'Progresso a cada partida',
        body: [
          'O resultado sai logo depois do jogo acabar, rápido e com feedback real, por dois caminhos: uma IA lê um print do placar final em poucos segundos, e o dado oficial do Deadlock confirma depois. A partir daí, os pontos saem pelo seu desempenho e pela força do time adversário, então vencer um time forte vale mais do que atropelar um fraco. Assim o jogador vê a sua evolução em tempo real!',
        ],
        image: {
          src: '/Images/Final de partida.png',
          alt: 'Tela de resultado de fim de partida',
          width: 1920,
          height: 1080,
          caption: 'A tela de fim de partida que a IA lê, e onde o rank se mexe.',
        },
      },
      {
        kind: 'callout',
        eyebrow: 'Solução 05',
        title: 'Acima de tudo, um lugar para evoluir',
        body: [
          'É isso que o DeadQueue é de verdade: uma comunidade construída em torno de ficar melhor no jogo.',
          'Os próprios jogadores dizem que evoluíram bastante em relação a quem nunca jogou aqui.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Gamificação',
        title: 'Engajamento e personalização',
        body: [
          'Todo jogo tem gamificação, e no DeadQueue não é diferente. Além do nível, todo jogador tem um perfil que dá para personalizar, e é visível para todos.',
          'A ideia é simples. Você ganha DeadCoins a cada partida, mais quando vence e um pouco menos quando perde. Essas moedas são para gastar em cosméticos como molduras animadas, cor do nome e banners exclusivos.',
          'E o que mais gera motivação e engajamento: o ranking, com premiação para os primeiros colocados.',
        ],
        image: {
          src: '/Images/Ranking.png',
          alt: 'Ranking da temporada do DeadQueue',
          width: 1916,
          height: 938,
          caption: 'O ranking da temporada, onde os três primeiros disputam premiação de verdade.',
        },
      },
      {
        kind: 'text',
        eyebrow: 'Assinaturas',
        title: 'Assinar e apoiar',
        body: [
          'A assinatura é o que mantém o DeadQueue no ar, então o plano vem com vantagens de verdade, de moedas de bônus a mais visibilidade na plataforma. Mas, sendo honesto, a maioria assina por um motivo: manter o projeto funcionando.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Processo',
        title: 'Do design para o código',
        body: [
          'Depois de entender a necessidade dos usuários e desenhar os fluxos e as interfaces no Figma, só faltava trazer tudo à vida. Para isso, usei meus conhecimentos básicos de desenvolvimento e o Claude Code, levando o projeto do protótipo à realidade.',
          'Nessa etapa fiz muitos ajustes rápidos. Funcionalidades que levariam sprints saíram em dias, às vezes em horas. Sem o processo lento de hand-off, dava para testar no mesmo dia, uma velocidade impensável no fluxo antigo.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Testes',
        title: 'Testando com jogadores de verdade antes de lançar',
        body: [
          'Antes de abrir para todo mundo, o produto precisava sobreviver a jogadores de verdade. Então rodei sessões de teste fechadas dentro de comunidades de streamers, onde já estão as pessoas mais propensas a quebrar as coisas e a ter opinião forte.',
          'Trazer essas pessoas foi um problema de design à parte. Quem testava ganhava uma badge exclusiva de Beta Tester que poucos jogadores vão ter, então entrar num teste virou algo para exibir, não um favor a pedir.',
          'Funcionou. Seis sessões trouxeram uma montanha de bugs e ideias, e cada uma virou correção antes do lançamento. Em julho, a versão que entrou no ar já tinha sido testada com força pela comunidade para quem ela foi feita.',
        ],
      },
      {
        kind: 'metrics',
        eyebrow: 'Resultados',
        title: 'Dois meses depois',
        body: [
          'Dois meses depois do lançamento, os números dizem que o ciclo funciona. As pessoas voltam, jogam o bastante para começar a subir, e algumas já pagam para manter a plataforma no ar. Para uma aposta num jogo que ainda nem lançou de vez, essa comunidade inicial é o objetivo inteiro.',
        ],
        items: [
          { value: 'Julho 2026', label: 'No ar em produção' },
          { value: '500+', label: 'Usuários cadastrados' },
          { value: '177', label: 'Usuários ativos' },
          { value: '132', label: 'Jogaram mais de 5 partidas' },
          { value: '400+', label: 'Partidas criadas pelo DeadQueue' },
          { value: '20', label: 'Assinantes' },
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Roadmap',
        title: 'Feita para crescer junto com o jogo',
        body: [
          'O DeadQueue é uma aposta na direção que o Deadlock está tomando, então o que vem a seguir mira a cena competitiva em volta dele. Três coisas vêm por aí.',
        ],
        items: [
          {
            title: 'Torneios na plataforma',
            text: 'O Deadlock é muito competitivo e já tem torneios até no beta. Organizá-los no DeadQueue, com chaves, drafts e resultados num lugar só, é o que a cena mais vai usar no lançamento.',
          },
          {
            title: 'Scrims e treinos agendados',
            text: 'Times, pro e amador, podem marcar treinos com o draft feito pelo DeadQueue, então treino organizado fica tão fácil quanto entrar na fila.',
          },
          {
            title: 'Academy',
            text: 'A maior e mais difícil: uma escola que ensina o jogo a novatos e veteranos, onde você aprende algo e coloca em prática na hora, em partidas que a plataforma gerencia.',
          },
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Conclusão',
        title: 'O que assumir o todo me ensinou',
        body: [
          'Desenhar e construir o mesmo produto tirou o handoff do caminho por completo. Uma decisão como “ler o placar a partir de um print” não era um card para defender, era uma conversa com o Claude Code e uma funcionalidade rodando naquela tarde.',
          'A lição que ficou: uma decisão de design só vira real quando alguma coisa precisa rodar em cima dela, e um produto só vira real quando as pessoas mudam por causa dele. A prova de que o DeadQueue funciona não são as trinta e uma telas, são os jogadores que ficaram melhores dentro delas.',
        ],
      },
    ],
  },
}
