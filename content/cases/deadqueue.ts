import type { CaseStudy, Lang } from '../types'

/**
 * DeadQueue — the self-initiated, end-to-end case. Designed and built solo,
 * so the narrative deliberately mixes product decisions with the engineering
 * consequence of each one.
 */
export const deadqueue: Record<Lang, CaseStudy> = {
  en: {
    slug: 'deadqueue',
    eyebrow: 'Self-initiated · design and code',
    title: 'DeadQueue',
    subtitle: 'A competitive matchmaking platform for Deadlock, designed and shipped solo',
    role: 'Product Designer & Developer',
    year: '2026',
    discipline: 'Product Design + Development',
    inverted: true,
    featured: true,
    metrics: [
      { value: '31', label: 'Screens shipped' },
      { value: '95', label: 'Components in the system' },
      { value: '214', label: 'API endpoints' },
      { value: '1', label: 'Person, design to production' },
    ],
    links: [{ label: 'Visit deadqueue.com.br', href: 'https://www.deadqueue.com.br' }],
    blocks: [
      {
        kind: 'text',
        eyebrow: 'Project description',
        title: 'A ranked league for a game that does not ship one',
        body: [
          'DeadQueue is a competitive matchmaking platform for Deadlock, Valve’s hero shooter. It gives the Brazilian community what the game itself does not: a solo queue with balanced teams, lobby duels between pre-made squads, a hero draft with bans, a rating that actually moves, and a season that closes on a podium.',
          'I designed and built all of it. Research, product decisions, design system, interface and the production code behind it. It has been live since May 2026.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Background',
        title: 'Why I started it',
        body: [
          'I play the game. Public matchmaking pairs people almost at random: the match is decided in the first ten minutes, nobody talks, and someone leaves halfway through.',
          'The community had already built a workaround. Custom matches get organised by hand on Discord: someone posts “10/12”, people react with an emoji, teams get picked by whoever shouts first. It works exactly once. Nobody knows who won, who left, or who is actually good.',
          'That was the opening. The matches already existed. What was missing was everything around them: fair teams, memory, and consequence.',
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Problem',
        title: 'Three problems hiding under one complaint',
        body: [
          'Every player said the same sentence: “the games are bad”. Talking to them, and reading how the Discord threads actually behaved, split that sentence into three problems that each needed a different answer.',
        ],
        items: [
          {
            title: 'Teams were never balanced',
            text: 'There was no skill signal and no memory of past matches. Team formation was left to human preference, and a captain picks his friends first. The result is decided before the match starts.',
          },
          {
            title: 'Nothing had consequence',
            text: 'A custom match left no trace. Winning felt like nothing, and leaving in the middle cost nothing. Without a record, there is no reason to behave like it is competitive.',
          },
          {
            title: 'The coordination cost more than the game',
            text: 'Assembling twelve people took longer than the match itself, and the whole thing lived in a chat thread that scrolled away by the next evening.',
          },
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Principles',
        title: 'What I decided to optimise for',
        body: [
          'Every product like this trades the same four things against each other. Writing down which side I would take, before designing anything, is what kept the decisions consistent later.',
        ],
        items: [
          {
            title: 'A fair match beats a fast match',
            text: 'Waiting a few extra minutes for a game that stays close is a better experience than an instant blowout. Queue time is a cost, not the metric.',
          },
          {
            title: 'Uncertainty is information',
            text: 'A new player is not a bad player, they are an unknown one. The interface should say that out loud instead of quietly guessing.',
          },
          {
            title: 'Every match has to move something',
            text: 'If a player finishes a match and nothing visibly changed, the loop is broken. Progress is the product.',
          },
          {
            title: 'The system explains itself',
            text: 'Any ranking decision has to be traceable by the player who lived it. A ranking nobody understands is a ranking nobody trusts.',
          },
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Solution',
        title: 'Two ways in, one competitive loop',
        items: [
          {
            title: 'Solo queue',
            text: 'Enter alone. The platform gathers eleven other players and builds both teams. No captains negotiating, no waiting for a friend to log in.',
          },
          {
            title: 'Lobby versus lobby',
            text: 'Build a squad and challenge another one. Teams come pre-formed, so the platform skips team formation and warns both sides when the skill gap is wide.',
          },
          {
            title: 'Hero draft with bans',
            text: 'Bans first to set the tone, then each player picks their own hero, with no duplicates on the board. It turns the minute before the match into part of the match.',
          },
          {
            title: 'Score, level and season',
            text: 'Every result moves the rating. The season closes with a podium and resets the race, never the player’s history.',
          },
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Decision 01',
        title: 'Levels 1 to 10 instead of Bronze, Silver, Gold',
        body: [
          'Ranked games name their tiers. I removed the names on purpose.',
          'Tier names arrive pre-loaded from other games. A player who is “Gold” somewhere else reads “Gold” here as either an insult or a promotion that was never granted. Worse, named tiers freeze people: nobody wants to drop from Gold to Silver, so the rank turns into something to protect instead of something to move.',
          'What the player sees instead is a number from 1 to 10, a colour, and a progress bar inside the current level. The bar is the actual design object: it moves after every match, even when the number does not, so the loop always pays out. Level 10 is the only one with a name, Legend, because the top should be worth saying out loud.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Decision 02',
        title: 'Showing the system’s uncertainty instead of hiding it',
        body: [
          'The rating runs on OpenSkill, a Bayesian model in the same family as TrueSkill. It describes each player with two numbers: an estimate of skill, and how confident the system is about that estimate.',
          'The design decision was to surface the second number. For the first five matches the badge reads “Calibrating 2/5” instead of a level, and the leaderboard sorts uncalibrated players below everyone else regardless of how well they are doing.',
          'It costs a new player five matches of not seeing their number. In exchange, nobody is ranked on a guess and nobody gets to call the ranking fake. The number that eventually appears has been earned, and that is the whole asset.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Decision 03',
        title: 'Balancing teams as a search problem, not a coin flip',
        body: [
          'The first version shuffled twelve players and picked two captains at random. Honest, and terrible: two of the strongest players would land as opposing captains, and the rest of the match was decided by who picked their friend first.',
          'I replaced it with an exact search. Twelve players split into two sixes gives 924 possible partitions, few enough to evaluate every single one and score it against four goals at the same time: an expected win probability as close to 50/50 as possible, similar average level on both sides, teams that are internally homogeneous rather than one stack of stars carrying four beginners, and uncertain players spread across both sides instead of piled onto one.',
          'The search finishes in under five milliseconds. From the player’s side it is completely invisible, which is exactly the point: they just notice the games got close.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Decision 04',
        title: 'Closing the loop in seconds, not minutes',
        body: [
          'The rating can only move once the result is known, and the official match data can take a long time to show up. That gap is precisely where players close the tab.',
          'So the result screen accepts a screenshot of the end-of-match scoreboard. A vision model reads it and returns structured data, winner, heroes, kills, damage and souls, in a couple of seconds, which is enough to update everyone’s rating immediately. When the official data lands later, it silently replaces the provisional read.',
          'The design constraint drove the whole feature. The player should never be parked on a screen that says “waiting”, and a screenshot is something they already have.',
        ],
      },
      {
        kind: 'callout',
        eyebrow: 'Trade-off',
        title: 'The decision I had to undo',
        body: [
          'The queue was designed to only pair players within a few levels of each other, widening the window every two minutes until it opened up. Correct on paper, wrong in the real world: with a small player base, the strongest players sat alone in an empty queue while the window crawled open.',
          'I put the entire rule behind a feature flag and switched it off. Today the queue matches purely on wait time and the balancer does the work once the twelve are in. The adaptive window is written, tested and dormant, waiting for the volume that makes it true.',
          'Designing for the product you have is not the same as designing for the product you want.',
        ],
      },
      {
        kind: 'list',
        eyebrow: 'System',
        title: 'A design system built to survive one person shipping fast',
        body: [
          'With no handoff and no second designer, the system is the only thing keeping thirty-one screens consistent. It is deliberately small.',
        ],
        items: [
          {
            title: 'Two typefaces, no exceptions',
            text: 'A display serif for titles, team names and big numbers. One sans for everything else. Every new screen inherits the voice instead of negotiating it.',
          },
          {
            title: 'Colour as meaning, not decoration',
            text: 'Amber and sapphire are the two teams, and they mean the same thing in the draft, on the scoreboard, in the match history and in the Discord channels the platform creates.',
          },
          {
            title: 'Nineteen shared primitives',
            text: 'Badges, avatars, rank chips, progress bars, dialogs. Built once and reused, so a fix lands everywhere at the same time.',
          },
          {
            title: 'Tokens instead of hex values',
            text: 'Surfaces, borders and semantic colours live in the config. Changing a shade is one line, not a search across ninety-five components.',
          },
          {
            title: 'Motion with a rule',
            text: 'Every animation is gated on reduced-motion preferences, nothing animates width or height, and micro-interactions stay under 360ms.',
          },
        ],
      },
      {
        kind: 'metrics',
        eyebrow: 'Results',
        title: 'Where it stands',
        body: [
          'DeadQueue runs in production with solo queue, lobbies, hero draft, seasons, ranking, achievements, tournaments, Discord integration and moderation tooling. The next chapter is the post-match screen: the animated rating delta and the level-up moment the loop still owes the player.',
        ],
        items: [
          { value: 'May 2026', label: 'Live in production' },
          { value: '31', label: 'Screens' },
          { value: '95', label: 'Components' },
          { value: '214', label: 'API endpoints' },
          { value: '474', label: 'Commits in 3.5 months' },
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Conclusion',
        title: 'What designing and building the same product taught me',
        body: [
          'Owning both sides removed the translation layer. A decision like “surface the calibration state” stopped being a ticket to argue for and became a two-line change, so the distance between an idea and something real collapsed from sprints to hours.',
          'It also made the cost of design decisions concrete. Wanting balanced teams is easy to say. The balance is a scoring function with four weights that somebody has to tune, and living on both sides of that made me a considerably better designer to build with.',
        ],
      },
    ],
  },

  pt: {
    slug: 'deadqueue',
    eyebrow: 'Projeto autoral · design e código',
    title: 'DeadQueue',
    subtitle: 'Plataforma de matchmaking competitivo para Deadlock, desenhada e construída sozinho',
    role: 'Product Designer & Desenvolvedor',
    year: '2026',
    discipline: 'Product Design + Desenvolvimento',
    inverted: true,
    featured: true,
    metrics: [
      { value: '31', label: 'Telas em produção' },
      { value: '95', label: 'Componentes no sistema' },
      { value: '214', label: 'Endpoints de API' },
      { value: '1', label: 'Pessoa, do design ao deploy' },
    ],
    links: [{ label: 'Visitar deadqueue.com.br', href: 'https://www.deadqueue.com.br' }],
    blocks: [
      {
        kind: 'text',
        eyebrow: 'Descrição do projeto',
        title: 'Uma liga ranqueada para um jogo que não tem uma',
        body: [
          'A DeadQueue é uma plataforma de matchmaking competitivo para Deadlock, o hero shooter da Valve. Ela entrega para a comunidade brasileira o que o próprio jogo não entrega: fila solo com times equilibrados, duelos entre lobbies montados por amigos, draft de heróis com bans, uma pontuação que realmente se move e uma temporada que termina em pódio.',
          'Desenhei e construí tudo. Pesquisa, decisões de produto, design system, interface e o código que roda em produção. Está no ar desde maio de 2026.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Contexto',
        title: 'Por que eu comecei',
        body: [
          'Eu jogo. O matchmaking público junta as pessoas quase no sorteio: a partida se decide nos dez primeiros minutos, ninguém se comunica e sempre tem alguém que abandona no meio.',
          'A comunidade já tinha criado uma gambiarra. As partidas personalizadas eram organizadas na mão pelo Discord: alguém posta “10/12”, o pessoal reage com emoji, os times são montados por quem grita primeiro. Funciona exatamente uma vez. Depois ninguém sabe quem venceu, quem saiu, nem quem realmente joga bem.',
          'Essa era a brecha. As partidas já existiam. Faltava tudo em volta delas: times justos, memória e consequência.',
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Problema',
        title: 'Três problemas escondidos dentro de uma reclamação',
        body: [
          'Todo jogador dizia a mesma frase: “as partidas são ruins”. Conversando com eles, e observando como as threads do Discord funcionavam de verdade, essa frase se abriu em três problemas distintos, cada um pedindo uma resposta diferente.',
        ],
        items: [
          {
            title: 'Os times nunca eram equilibrados',
            text: 'Não existia sinal de habilidade nem memória das partidas anteriores. A formação dos times ficava na preferência humana, e capitão escolhe o amigo primeiro. O resultado já estava decidido antes do jogo começar.',
          },
          {
            title: 'Nada tinha consequência',
            text: 'A partida personalizada não deixava rastro. Vencer não valia nada e abandonar não custava nada. Sem registro, não existe motivo para tratar aquilo como competitivo.',
          },
          {
            title: 'A coordenação custava mais que o jogo',
            text: 'Juntar doze pessoas demorava mais que a própria partida, e tudo isso vivia em uma thread de chat que sumia na rolagem no dia seguinte.',
          },
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Princípios',
        title: 'O que eu decidi otimizar',
        body: [
          'Todo produto desse tipo negocia as mesmas quatro coisas entre si. Escrever de que lado eu ficaria, antes de desenhar qualquer tela, foi o que manteve as decisões coerentes lá na frente.',
        ],
        items: [
          {
            title: 'Partida justa vale mais que partida rápida',
            text: 'Esperar alguns minutos a mais por um jogo que fica disputado do começo ao fim é melhor que entrar na hora em um atropelo. Tempo de fila é custo, não é a métrica.',
          },
          {
            title: 'Incerteza é informação',
            text: 'Jogador novo não é jogador ruim, é jogador desconhecido. A interface tem que dizer isso em voz alta em vez de chutar em silêncio.',
          },
          {
            title: 'Toda partida precisa mover alguma coisa',
            text: 'Se o jogador termina uma partida e nada mudou visivelmente, o ciclo está quebrado. Progresso é o produto.',
          },
          {
            title: 'O sistema se explica',
            text: 'Qualquer decisão do ranking precisa ser rastreável pelo jogador que viveu ela. Ranking que ninguém entende é ranking em que ninguém confia.',
          },
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Solução',
        title: 'Duas portas de entrada, um único ciclo competitivo',
        items: [
          {
            title: 'Fila solo',
            text: 'Entre sozinho. A plataforma reúne outros onze jogadores e monta os dois times. Sem capitão negociando, sem esperar o amigo entrar.',
          },
          {
            title: 'Lobby contra lobby',
            text: 'Monte seu time e desafie outro. Como os times já vêm formados, a plataforma pula a fase de formação e avisa os dois lados quando a diferença de nível é grande.',
          },
          {
            title: 'Draft de heróis com bans',
            text: 'Primeiro os bans, para ditar o ritmo, depois cada jogador escolhe o próprio herói, sem repetição na mesa. O minuto antes da partida vira parte da partida.',
          },
          {
            title: 'Pontuação, nível e temporada',
            text: 'Todo resultado move a pontuação. A temporada fecha em pódio e zera a disputa, nunca o histórico do jogador.',
          },
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Decisão 01',
        title: 'Níveis de 1 a 10 no lugar de Bronze, Prata e Ouro',
        body: [
          'Jogo ranqueado dá nome para as divisões. Eu tirei os nomes de propósito.',
          'Nome de divisão chega carregado de outro jogo. Quem é “Ouro” em outro lugar lê “Ouro” aqui como ofensa ou como promoção que ninguém deu. Pior: divisão com nome congela as pessoas. Ninguém quer cair de Ouro para Prata, então o rank vira uma coisa para proteger em vez de uma coisa para mover.',
          'O que o jogador vê é um número de 1 a 10, uma cor e uma barra de progresso dentro do nível atual. A barra é o verdadeiro objeto de design: ela anda depois de toda partida, mesmo quando o número não muda, então o ciclo sempre paga. O nível 10 é o único com nome, Lenda, porque chegar no topo merece ser dito em voz alta.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Decisão 02',
        title: 'Mostrar a incerteza do sistema em vez de escondê-la',
        body: [
          'A pontuação roda em OpenSkill, um modelo bayesiano da mesma família do TrueSkill. Ele descreve cada jogador com dois números: uma estimativa de habilidade e o quanto o sistema confia nessa estimativa.',
          'A decisão de design foi expor o segundo número. Nas cinco primeiras partidas o badge mostra “Calibrando 2/5” no lugar do nível, e o ranking coloca os não calibrados abaixo de todo mundo, independente de estarem indo bem.',
          'Custa ao jogador novo cinco partidas sem ver o próprio número. Em troca, ninguém é ranqueado com base em chute e ninguém pode chamar o ranking de fajuto. O número que aparece no fim foi conquistado, e é exatamente esse o ativo.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Decisão 03',
        title: 'Equilibrar times como problema de busca, não como sorteio',
        body: [
          'A primeira versão embaralhava os doze jogadores e sorteava dois capitães. Honesta e péssima: dois dos jogadores mais fortes caíam como capitães adversários e o resto da partida era decidido por quem escolhia o amigo primeiro.',
          'Troquei por uma busca exata. Doze jogadores divididos em dois times de seis geram 924 partições possíveis, poucas o bastante para avaliar todas e pontuar cada uma contra quatro objetivos ao mesmo tempo: probabilidade de vitória esperada o mais perto possível de 50/50, nível médio parecido dos dois lados, times internamente homogêneos em vez de um bloco de feras carregando quatro iniciantes, e jogadores incertos distribuídos entre os dois lados em vez de amontoados em um só.',
          'A busca termina em menos de cinco milissegundos. Do lado do jogador é totalmente invisível, e é justamente esse o ponto: ele só percebe que as partidas ficaram disputadas.',
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Decisão 04',
        title: 'Fechar o ciclo em segundos, não em minutos',
        body: [
          'A pontuação só se move quando o resultado é conhecido, e o dado oficial da partida pode demorar bastante para aparecer. É exatamente nesse intervalo que o jogador fecha a aba.',
          'Então a tela de resultado aceita um print do placar final. Um modelo de visão lê a imagem e devolve dado estruturado, vencedor, heróis, abates, dano e almas, em poucos segundos, o suficiente para atualizar a pontuação de todo mundo na hora. Quando o dado oficial chega depois, ele substitui a leitura provisória sem barulho.',
          'A restrição de design puxou a funcionalidade inteira. O jogador nunca deveria ficar parado numa tela escrita “aguardando”, e o print é uma coisa que ele já tem na mão.',
        ],
      },
      {
        kind: 'callout',
        eyebrow: 'Trade-off',
        title: 'A decisão que eu tive que desfazer',
        body: [
          'A fila foi desenhada para só juntar jogadores dentro de uma faixa de poucos níveis, abrindo a janela a cada dois minutos até liberar geral. Certo no papel, errado na vida real: com base pequena de jogadores, os mais fortes ficavam sozinhos numa fila vazia enquanto a janela se arrastava.',
          'Coloquei a regra inteira atrás de uma flag e desliguei. Hoje a fila casa puramente por tempo de espera e o balanceador faz o trabalho depois que os doze entram. A janela adaptativa está escrita, testada e dormindo, esperando o volume que a torna verdadeira.',
          'Desenhar para o produto que você tem não é a mesma coisa que desenhar para o produto que você quer.',
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Sistema',
        title: 'Um design system feito para aguentar uma pessoa entregando rápido',
        body: [
          'Sem handoff e sem um segundo designer, o sistema é a única coisa que mantém trinta e uma telas coerentes. Ele é propositalmente pequeno.',
        ],
        items: [
          {
            title: 'Duas famílias tipográficas, sem exceção',
            text: 'Uma serifada de display para títulos, nomes de time e números grandes. Uma sem serifa para todo o resto. Cada tela nova herda a voz em vez de negociar ela.',
          },
          {
            title: 'Cor como significado, não como enfeite',
            text: 'Âmbar e safira são os dois times, e significam a mesma coisa no draft, no placar, no histórico e nos canais que a plataforma cria no Discord.',
          },
          {
            title: 'Dezenove primitivas compartilhadas',
            text: 'Badges, avatares, chips de rank, barras de progresso, diálogos. Feitos uma vez e reaproveitados, então a correção chega em todo lugar ao mesmo tempo.',
          },
          {
            title: 'Tokens no lugar de hex',
            text: 'Superfícies, bordas e cores semânticas vivem na configuração. Mudar um tom é uma linha, não uma busca em noventa e cinco componentes.',
          },
          {
            title: 'Movimento com regra',
            text: 'Toda animação respeita a preferência de movimento reduzido, nada anima largura ou altura, e as microinterações ficam abaixo de 360ms.',
          },
        ],
      },
      {
        kind: 'metrics',
        eyebrow: 'Resultados',
        title: 'Onde o projeto está',
        body: [
          'A DeadQueue roda em produção com fila solo, lobbies, draft de heróis, temporadas, ranking, conquistas, torneios, integração com Discord e ferramentas de moderação. O próximo capítulo é a tela de pós-partida: o delta de pontuação animado e o momento de subir de nível que o ciclo ainda deve ao jogador.',
        ],
        items: [
          { value: 'Maio 2026', label: 'No ar em produção' },
          { value: '31', label: 'Telas' },
          { value: '95', label: 'Componentes' },
          { value: '214', label: 'Endpoints de API' },
          { value: '474', label: 'Commits em 3,5 meses' },
        ],
      },
      {
        kind: 'text',
        eyebrow: 'Conclusão',
        title: 'O que desenhar e construir o mesmo produto me ensinou',
        body: [
          'Assumir os dois lados eliminou a camada de tradução. Uma decisão como “expor o estado de calibração” deixou de ser um card para defender e virou uma mudança de duas linhas, então a distância entre a ideia e algo real caiu de sprints para horas.',
          'Também tornou concreto o custo de cada decisão de design. Querer times equilibrados é fácil de falar. O equilíbrio é uma função de pontuação com quatro pesos que alguém precisa calibrar, e viver dos dois lados disso me tornou um designer consideravelmente melhor de trabalhar junto.',
        ],
      },
    ],
  },
}
