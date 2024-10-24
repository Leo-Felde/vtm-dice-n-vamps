export const disciplineOptions = [
  { label: 'Alquimia de Sangue', value: 'alquimia_de_sangue', desc: 'Exclusivo aos Sangue-Fracos, destilar o sangue vampírico em poções que concedem poderes temporários.' },
  { label: 'Animalismo', value: 'animalismo', desc: 'Comunicação e comando de animais, além de despertar o lado bestial em si mesmo ou nos outros.' },
  { label: 'Auspícios', value: 'auspicios', desc: 'Percepção sobrenatural, sentindr emoções, ler pensamentos e ver além do véu da realidade.' },
  { label: 'Dominação', value: 'dominacao', desc: 'Controle da mente, permite apagar memórias e forçar atos contra a vontade própria. ' },
  { label: 'Feitiçaria de Sangue', value: 'feiticaria_de_sangue', desc: 'Exclusivo aos Ventrue, manipulação de sangue através de magia.' },
  { label: 'Fortitude', value: 'fortitude', desc: 'Resistência física e mental, tornando-o quase invulnerável.' },
  { label: 'Metamorfose', value: 'metamorfose', desc: 'Manipulação do próprio corpo, reduzir o proprio peso, viar névoa ou transformar-se em animais.' },
  { label: 'Ofuscação', value: 'ofuscacao', desc: 'Invisilidade nas sombras e ilusões.' },
  { label: 'Potência', value: 'potencia', desc: 'Força sobre-humana, permitindo feitos físicos extraordinários.' },
  { label: 'Rapidez', value: 'rapidez', desc: 'Velocidade sobrenatural, mais rápido do que os olhos humanos e de muitos Membros pode acompanhar.' },
]

export const disciplinePowers = {
  ofuscacao: [
    {
      label: 'Manto das Sombras',
      value: 'manto_das_sombras',
      level: 1,
      rouseCheck: false,
      skillOrAttr: null,
      desc: 'Cria sombras ao redor do usuário, dificultando sua detecção.',
      longDesc: 'O usuário pode ofuscar sua presença em áreas com sombras, tornando-se mais difícil de ser visto ou detectado, especialmente em ambientes escuros.'
    },
    {
      label: 'Unseen Passage',
      value: 'unseen_passage',
      level: 2,
      rouseCheck: false,
      skillOrAttr: 'destreza+furtividade',
      desc: 'O usuário se move de forma invisível.',
      longDesc: 'Ao ativar esse poder, o usuário pode se mover sem ser visto, a menos que faça barulhos óbvios ou seja fisicamente detectado.'
    },
    {
      label: 'Ghost in the Machine',
      value: 'ghost_in_the_machine',
      level: 3,
      rouseCheck: false,
      skillOrAttr: null,
      desc: 'Permite manipular sistemas de vigilância eletrônicos.',
      longDesc: 'O usuário pode obscurecer sua imagem em câmeras de segurança e outros dispositivos eletrônicos, evitando ser detectado por meios tecnológicos.'
    },
    {
      label: 'Ocultamento',
      value: 'ocultamento',
      level: 4,
      rouseCheck: true,
      skillOrAttr: 'inteligencia+ocultismo',
      desc: 'Esconde completamente o usuário de qualquer detecção.',
      longDesc: 'Esse poder permite ao usuário desaparecer completamente de qualquer forma de detecção, seja visual, auditiva ou tecnológica, contanto que ele não seja interrompido ou agredido.'
    },
    {
      label: 'Unmarked Grave',
      value: 'unmarked_grave',
      level: 5,
      rouseCheck: true,
      skillOrAttr: null,
      desc: 'Permite enterrar-se no chão e se tornar indetectável.',
      longDesc: 'O usuário pode afundar no chão, tornando-se indetectável até emergir, mantendo total controle sobre seu estado durante a imersão.'
    }
  ],
  animalismo: [
    {
      label: 'Comando de Feras',
      value: 'comando_de_feras',
      level: 1,
      rouseCheck: false,
      skillOrAttr: 'carisma+lideranca',
      desc: 'Controla animais para obedecerem ao usuário.',
      longDesc: 'O usuário pode controlar animais ao seu redor, comandando-os a realizar tarefas simples ou agir de forma protetiva em seu nome.'
    },
    // Demais poderes de Animalismo...
  ],
  auspex: [
    {
      label: 'Sentidos Aguçados',
      value: 'sentidos_agucados',
      level: 1,
      rouseCheck: false,
      skillOrAttr: null,
      desc: 'Aprimora os sentidos do usuário além do normal.',
      longDesc: 'Esse poder permite ao usuário ampliar seus sentidos, podendo perceber sons, cheiros e detalhes visuais que normalmente estariam além de sua capacidade.'
    },
    // Demais poderes de Auspício...
  ],
  celeridade: [
    {
      label: 'Reflexos Rápidos',
      value: 'reflexos_rapidos',
      level: 1,
      rouseCheck: false,
      skillOrAttr: null,
      desc: 'Remove penalidades por agir rapidamente.',
      longDesc: 'O usuário pode agir e reagir em velocidade sobre-humana, eliminando penalidades relacionadas a ações rápidas e permitindo reflexos quase instantâneos.'
    },
    {
      label: 'Movimento Relâmpago',
      value: 'movimento_relampago',
      level: 2,
      rouseCheck: true,
      skillOrAttr: 'destreza+atletismo',
      desc: 'Move-se com velocidade extrema.',
      longDesc: 'O usuário pode atravessar grandes distâncias em um piscar de olhos, realizando movimentos tão rápidos que parecem um borrão para os olhos normais.'
    },
    {
      label: 'Golpe Veloz',
      value: 'golpe_veloz',
      level: 3,
      rouseCheck: true,
      skillOrAttr: 'destreza+briga',
      desc: 'Desfere golpes mais rápidos que o olho pode ver.',
      longDesc: 'Esse poder permite ao usuário atacar com tanta rapidez que seus oponentes não conseguem acompanhar seus movimentos, tornando seus golpes praticamente inevitáveis.'
    },
    {
      label: 'Dança da Serpente',
      value: 'danca_da_serpente',
      level: 4,
      rouseCheck: true,
      skillOrAttr: null,
      desc: 'Permite se mover com graça e agilidade incomparáveis.',
      longDesc: 'O usuário se move com a fluidez de uma serpente, desviando de ataques e se esquivando de perigos com facilidade sobrenatural, parecendo impossível de atingir.'
    },
    {
      label: 'Golpe em Velocidade Relâmpago',
      value: 'golpe_velocidade_relampago',
      level: 5,
      rouseCheck: true,
      skillOrAttr: null,
      desc: 'Ataca múltiplos alvos quase instantaneamente.',
      longDesc: 'O usuário pode atingir vários alvos em uma fração de segundo, movendo-se tão rápido que parece estar em múltiplos lugares ao mesmo tempo, atingindo todos os inimigos ao alcance.'
    }
  ],
  dominate: [
    {
      label: 'Compelir',
      value: 'compelir',
      level: 1,
      rouseCheck: false,
      skillOrAttr: 'carisma+intimidacao',
      desc: 'Comanda um alvo a realizar uma ação simples.',
      longDesc: 'O usuário pode forçar um alvo a realizar uma ação simples ou obedecer a uma ordem direta, como "sente-se" ou "cale-se". O alvo precisa estar em um estado mental fraco ou distraído.'
    },
    {
      label: 'Nuvem da Mente',
      value: 'nuvem_da_mente',
      level: 2,
      rouseCheck: false,
      skillOrAttr: 'manipulacao+intimidacao',
      desc: 'Apaga ou altera a memória recente de um alvo.',
      longDesc: 'Esse poder permite ao usuário apagar ou alterar a memória de curto prazo de um alvo, fazendo-o esquecer eventos específicos ou mesmo inserindo memórias falsas no lugar.'
    },
    {
      label: 'Mesmerismo',
      value: 'mesmerismo',
      level: 3,
      rouseCheck: true,
      skillOrAttr: 'manipulacao+inteligencia',
      desc: 'Implanta uma sugestão mental que o alvo obedecerá posteriormente.',
      longDesc: 'O usuário pode plantar uma sugestão na mente de um alvo que será ativada em um momento posterior, quando certas condições forem atendidas, como uma ordem latente.'
    },
    {
      label: 'Transe',
      value: 'transe',
      level: 4,
      rouseCheck: true,
      skillOrAttr: 'manipulacao+lideranca',
      desc: 'Coloca o alvo em um estado hipnótico profundo.',
      longDesc: 'Esse poder força um alvo a entrar em um transe profundo, tornando-o completamente obediente a comandos subsequentes, permanecendo nesse estado até ser liberado.'
    },
    {
      label: 'Possessão',
      value: 'possessao',
      level: 5,
      rouseCheck: true,
      skillOrAttr: 'inteligencia+lideranca',
      desc: 'O usuário toma completo controle do corpo do alvo.',
      longDesc: 'O usuário pode tomar total controle do corpo de um alvo, forçando-o a agir contra sua vontade e controlando todas as suas ações enquanto o poder durar.'
    }
  ],
  fortitude: [
    {
      label: 'Resiliência',
      value: 'resiliencia',
      level: 1,
      rouseCheck: false,
      skillOrAttr: null,
      desc: 'Aumenta a resistência física do usuário.',
      longDesc: 'O usuário se torna mais resistente a danos físicos, conseguindo absorver impactos e ferimentos que normalmente deixariam qualquer outra pessoa incapacitada.'
    },
    {
      label: 'Deflexão de Impactos',
      value: 'deflexao_de_impactos',
      level: 2,
      rouseCheck: false,
      skillOrAttr: null,
      desc: 'Desvia impactos de ataques com facilidade.',
      longDesc: 'Esse poder permite ao usuário desviar ataques físicos, fazendo com que golpes que o atingiriam sejam desviados ou absorvidos com mínima consequência.'
    },
    {
      label: 'Tolerância Sobrenatural',
      value: 'tolerancia_sobrenatural',
      level: 3,
      rouseCheck: true,
      skillOrAttr: null,
      desc: 'Permite ignorar a dor e ferimentos mais graves.',
      longDesc: 'O usuário pode suportar níveis extremos de dor e continuar lutando mesmo após ferimentos que normalmente o incapacitaria, ignorando ferimentos graves temporariamente.'
    },
    {
      label: 'Mente de Ferro',
      value: 'mente_de_ferro',
      level: 4,
      rouseCheck: true,
      skillOrAttr: 'inteligencia+composicao',
      desc: 'Resiste a ataques mentais e controle.',
      longDesc: 'Esse poder permite ao usuário resistir a tentativas de controle mental, hipnose ou ataques psíquicos, tornando sua mente tão resistente quanto seu corpo.'
    },
    {
      label: 'Indestrutível',
      value: 'indestrutivel',
      level: 5,
      rouseCheck: true,
      skillOrAttr: null,
      desc: 'O usuário se torna praticamente imune a qualquer dano.',
      longDesc: 'Em seu ápice, Fortitude permite que o usuário resista a praticamente qualquer tipo de dano, seja físico, mental ou sobrenatural, tornando-o quase impossível de derrubar.'
    }
  ],
  sangue: [
    {
      label: 'Sedução de Sangue',
      value: 'seducao_de_sangue',
      level: 1,
      rouseCheck: false,
      skillOrAttr: 'carisma+persuasao',
      desc: 'Atrai outros vampiros ou mortais pelo sangue.',
      longDesc: 'O usuário pode usar seu sangue como uma arma sedutora, fazendo com que outros vampiros ou mortais fiquem hipnotizados e atraídos por ele, manipulando-os através da sede.'
    },
    // Demais poderes de Sangue...
  ],
  taumaturgia: [
    {
      label: 'Caminho do Sangue',
      value: 'caminho_do_sangue',
      level: 1,
      rouseCheck: true,
      skillOrAttr: 'inteligencia+ocultismo',
      desc: 'Manipula o sangue em rituais poderosos.',
      longDesc: 'Através de rituais complexos, o usuário pode usar seu sangue ou o de outros para realizar feitos sobrenaturais, incluindo rastreamento, manipulação e controle de vitae.'
    },
    // Demais poderes de Taumaturgia...
  ]
  // Outras disciplinas podem ser adicionadas aqui...
}


export default disciplinas