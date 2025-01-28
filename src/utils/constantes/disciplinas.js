export const disciplineOptions = [
  { label: 'Alquimia de Sangue', value: 'alquimia_de_sangue', desc: 'Exclusivo aos Sangue-Fracos, destilar o sangue vampírico em poções que concedem poderes temporários.' },
  { label: 'Animalismo', value: 'animalismo', desc: 'Comunicação e comando de animais, além de despertar o lado bestial em si mesmo ou nos outros.' },
  { label: 'Auspícios', value: 'auspicios', desc: 'Percepção sobrenatural, sentindr emoções, ler pensamentos e ver além do véu da realidade.' },
  { label: 'Dominação', value: 'dominacao', desc: 'Controle da mente, permite apagar memórias e forçar atos contra a vontade própria. ' },
  { label: 'Presença', value: 'presenca', desc: 'O vampiro se torna irresistivelmente carismático, influenciando emoções e comportamento de forma intensa.'},
  { label: 'Feitiçaria de Sangue', value: 'feiticaria_de_sangue', desc: 'Exclusivo aos Ventrue, manipulação de sangue através de magia.' },
  { label: 'Fortitude', value: 'fortitude', desc: 'Resistência física e mental, tornando-o quase invulnerável.' },
  { label: 'Metamorfose', value: 'metamorfose', desc: 'Manipulação do próprio corpo, reduzir o proprio peso, viar névoa ou transformar-se em animais.' },
  { label: 'Ofuscação', value: 'ofuscacao', desc: 'Invisilidade nas sombras e ilusões.' },
  { label: 'Potência', value: 'potencia', desc: 'Força sobre-humana, permitindo feitos físicos extraordinários.' },
  { label: 'Rapidez', value: 'rapidez', desc: 'Velocidade sobrenatural, mais rápido do que os olhos humanos e de muitos Membros pode acompanhar.' },
  { label: 'Abismo', value: 'abismo', desc: 'Conexão com o vazio primordial, capaz de invocar sombras vivas, manipular escuridão e explorar os segredos do nada absoluto.'}
]

export const disciplinePowers = {
  ofuscacao: [
    {
      label: 'Manto das Sombras',
      value: 'manto_das_sombras',
      level: 1,
      rouseCheck: false,
      desc: 'Fica quase invisível quando parado no escuro (passivo)',
      longDesc: 'Quando parado no escuro, fica coberto de sombras e quase invisível. Não engana eletrônicos.'
    },
    {
      label: 'Silêncio da morte',
      value: 'silencio_da_morte',
      level: 1,
      rouseCheck: false,
      desc: 'Silencia seu sons como voz, passos e barulhos da roupa',
      longDesc: 'Sons mais altos como um tiro ou um grito quebram o efeito. Não engana eletrônicos.'
    },
    {
      label: 'Passagem invisível',
      value: 'passagem_invisivel',
      level: 2,
      rouseCheck: false,
      desc: 'Permite se mover enquanto invisível.',
      longDesc: 'Movimentos bruscos ou sons mais altos que um sussuro quebram o efeito. Não funciona se estiver sendo observado antes de usar.'
    },
    {
      label: 'Fantasma na máquina',
      value: 'fantasma_na_maquina',
      level: 3,
      rouseCheck: false,
      desc: 'Torna-se mais difícil de detectar por equipamentos eletrônicos (passivo)',
      longDesc: 'Equipamentos eletrônicos tem dificuldade para detecta-lo, os efeitos em fotos e gravações são menores. +3 dados ao contornar eletrônicos comuns.'
    },
    {
      label: 'Máscara de Mil Faces',
      value: 'mascara_mil_faces',
      level: 3,
      rouseCheck: false,
      desc: 'Adota uma aparecência de um humano comum',
      longDesc: 'Pode mudar sua aparência à de um humano comum mas não tem muito controle sobre sua aparência.'
    },
    {
      label: 'Ocultamento',
      value: 'ocultamento',
      level: 4,
      requiredDiscipline: 'auspicios-3',
      rouseCheck: true,
      desc: 'Oculta um objeto inanimado',
      longDesc: 'Pode ocultar por uma noite (+1 noite para cada sucesso adicional) qualquer objeto inanimado. O feitiço quebra se o objeto for movido muito rápido ou longe de seu local original.'
    },
    {
      label: 'Desaparecimento',
      value: 'desaparecimento',
      level: 4,
      rouseCheck: true,
      requiredPower: 'manto_das_sombras',
      desc: 'Utiliza Manto das Sombras e Passagem Invisível ao mesmo tempo.',
      longDesc: 'Quando sumir na frente de alguém, role um teste disputado de Raciocínio + Ofuscação vs Raciocínio + Prontidão.'
    },
    {
      label: 'Cobrindo o grupo',
      value: 'cobrir_grupo',
      level: 5,
      rouseCheck: true,
      desc: 'Extende Sombras ou Passagem Invisível a outros',
      longDesc: 'Realizar um teste de Raciocínio para obter numero de afetados e um Rouse Check. Pode fazer Rouse Checks adicionais para ocultar mais alvos.'
    }, {
      label: 'Disfarce do Impostor',
      value: 'disfarce_do_impostor',
      level: 5,
      rouseCheck: true,
      requiredPower: 'mascara_mil_faces',
      desc: 'Pode definir a aparência da Máscara de Mil Faces',
      longDesc: 'Pode assumir a aparência de um humano de qualquer gênero, cor ou tamanho. Deve ser uma pessoa real que precisa ser estudada anteriormente.'
    }
  ],
  rapidez: [
    {
      label: 'Graça Felina',
      value: 'graca_felina',
      level: 1,
      rouseCheck: false,
      desc: 'Aumenta a destreza e equilíbrio.',
      longDesc: 'Move-se com uma graça sobrenatural, tornando-se extremamente ágil e equilibrado.'
    },
    {
      label: 'Reflexos Rápidos',
      value: 'reflexos_rapidos',
      level: 1,
      rouseCheck: false,
      desc: 'Reflexos muito rápidos',
      longDesc: 'RApesar de seus corpos não conseguirem desafiar as leis naturais, vampiros com esse poder percebem eventos instantaneamente e podem reagir a eles com vivacidade sobre-humana.eage a ameaças e estímulos com uma velocidade impressionante, capaz de desviar-se de ataques e mover-se mais rapidamente do que o olho humano pode acompanhar. Ideal para combates e situações onde a velocidade é crucial.'
    },
    {
      label: 'Agilidade',
      value: 'agilidade',
      level: 2,
      rouseCheck: true,
      desc: 'Permite reagir tão rápido quanto seus reflexos',
      longDesc: 'Reação rápida, adicione o nível de Rapidez a testes de Destreza ou Atletismo.'
    },
    {
      label: 'Piscar',
      value: 'piscar',
      level: 2,
      rouseCheck: true,
      desc: 'Pode mover-se em alta velocidade em curtas distâncias',
      longDesc: 'Cobre distâncias curtas em um instante, dando a impressão de estar se teleportando.'
    },
    {
      label: 'Travessia',
      value: 'travessia',
      level: 2,
      rouseCheck: true,
      desc: 'Permite escalar e se mover com facilidade por superfícies verticais.',
      longDesc: 'Concede a habilidade extraordinária de escalar superfícies e se mover em terrenos íngremes com rapidez e segurança.'
    },
    {
      label: 'Fórmula da Elegância',
      value: 'formula_da_elegancia',
      level: 3,
      rouseCheck: true,
      desc: 'Concentra seu poder de Rapidez no sangue',
      longDesc: 'Vampiros que bebem seu sangue ganham metade de seu nível de Rapidez e os poderes até aquele nível.'
    },
    {
      label: 'Mira Infalível',
      value: 'mira_infalivel',
      level: 3,
      rouseCheck: false,
      requiredDiscipline: 'auspicios-2',
      desc: 'Realiza ataques precisos e certeiros.',
      longDesc: 'O mundo ao redor dele desacelera e o vampiro pode mirar e arremessar ou disparar qualquer arma em um alvo se o alvo estiver imóvel.'
    },
    {
      label: 'Ataque Relâmpago',
      value: 'ataque_relampago',
      level: 4,
      rouseCheck: true,
      desc: 'Realizar ataques em alta velocidade.',
      longDesc: 'Mais rápido do que o olho pode acompanhar, o vampiro pode atacar com os punhos ou armas brancas tão rápido que o oponente é incapaz de se defender ou fazer ações evasivas.'
    },
    {
      label: 'Fração de Segundo',
      value: 'fracao_de_segundo',
      level: 5,
      rouseCheck: true,
      desc: 'Permite agir fora do fluxo normal do tempo por um breve momento.',
      longDesc: 'A velocidade cujo vampiro se move somada a sua percepção superapurada permite que ele reaja a eventos a sua volta no momento que os percebe.'
    }
  ],
  animalismo: [
    {
      label: 'Vínculo Familiar',
      value: 'vinculo_familiar',
      level: 1,
      rouseCheck: false,
      desc: 'Permite criar um vínculo mental com um animal',
      longDesc: 'Estabelece um vínculo profundo com um animal, que o seguirá fielmente e atenderá a comandos.'
    },
    {
      label: 'Sentir a Besta',
      value: 'sentir_a_besta',
      level: 1,
      rouseCheck: true,
      desc: 'Pode sentir a Besta em outras criaturas.',
      longDesc: 'Ppermite sentir o estado emocional e o nível de ameaça de outras criaturas ao seu redor, especialmente de outros vampiros.'
    },
    {
      label: 'Sussurros Selvagens',
      value: 'sussurros_selvagens',
      level: 2,
      rouseCheck: true,
      desc: 'Pode se comunicar com animais',
      longDesc: 'O pode se comunicar com animais por meio de sussurros e gestos.'
    },
    {
      label: 'Suculência Animal',
      value: 'suculencia_animal',
      level: 3,
      rouseCheck: false,
      desc: 'Se alimenta de animais com mais eficiencia',
      longDesc: 'Se alimentar de animais satisfaz satisfaz mais a fome.'
    },
    {
      label: 'Acalmar a Besta',
      value: 'acalmar_a_besta',
      level: 3,
      rouseCheck: true,
      desc: 'Pode acalmar a fúria interior de outros',
      longDesc: 'Mantendo contato visual é possível acalmar humanos e vampiros. Humanos ficam letargicos e vampiros não podem tirar críticos/falhas bestiais nem usar Surto de Sangue.'
    },
    {
      label: 'Colméia Não-Viva',
      value: 'colmeia_nao_viva',
      level: 3,
      rouseCheck: true,
      requiredDiscipline: 'ofuscacao-2',
      desc: 'O vampiro é rodeado e protegido por um enxame de insetos',
      longDesc: 'Permite ao vampiro conjurar um enxame de pequenas criaturas mortas-vivas, como insetos, que o defendem de ameaças.'
    },
    {
      label: 'Dominar o Espírito',
      value: 'dominar_o_espirito',
      level: 4,
      rouseCheck: true,
      desc: 'Assumir o controle total de um animal',
      longDesc: 'Pode tomar posse de um animal e controlar suas ações diretamente. Não requer Rouse Check para o Familiar.'
    },
    {
      label: 'Domínio Animal',
      value: 'dominio_animal',
      level: 5,
      rouseCheck: true,
      desc: 'Dominio absoluto sobre animais',
      longDesc: 'O comando sobre as bestas é ainda mais forte, podendo comandar matilhas inteiras a darem suas vidas por um comando.'
    },
    {
      label: 'Transferindo a Besta',
      value: 'transferindo_a_besta',
      level: 5,
      rouseCheck: true,
      desc: 'Permite transferir sua Besta para outra criatura',
      longDesc: 'Quando em frenesi ou fúria, permite transferi-la à outra pessoa.'
    }
  ],
  auspicios: [
    {
      label: 'Sentidos Aguçados',
      value: 'sentidos_agucados',
      level: 1,
      rouseCheck: false,
      desc: 'Amplia os sentidos.',
      longDesc: 'Os sentidos tornam-se sobrenaturalmente aguçados, adiciona Auspicios às Percepção. Deve rolar Raciocínio + Perseverança para resistir estimulos fortes como luz nos olhos, barulho de explosão e cheiro forte.'
    },
    {
      label: 'Sentir o Invisível',
      value: 'sentir_o_invisivel',
      level: 1,
      rouseCheck: false,
      desc: 'Detecta presenças sobrenaturais e invisíveis ao redor.',
      longDesc: 'Permite ver fantasmas, vampiros usando ofuscação, objetos invisiveis entre outras coisas sobrenaturais.'
    },
    {
      label: 'Premonição',
      value: 'premonicao',
      level: 2,
      rouseCheck: false,
      desc: 'Recebe vislumbres de eventos futuros ou perigos iminentes.',
      longDesc: 'Pode experimentar sensações ou visões espontâneas que podem ou não te alertar sobre o futuro próximo.'
    },
    {
      label: 'Sondar a Alma',
      value: 'sondar_a_alma',
      level: 3,
      rouseCheck: true,
      desc: 'Lê as emoções e intenções de outra pessoa.',
      longDesc: 'Pode sondar a alma de outra pessoa, percebendo suas emoções mais profundas e detectando suas intenções ocultas, permitindo avaliar se alguém está mentindo ou agindo com malícia.'
    },
    {
      label: 'Compartilhar os Sentidos',
      value: 'compartilhar_os_sentidos',
      level: 3,
      rouseCheck: false,
      desc: 'Vê, ouve e sente através de outro ser vivo.',
      longDesc: 'Pode projetar seus sentidos a outro ser vivo, experimentando o que ele vê, ouve e sente.'
    },
    {
      label: 'Toque do Espírito',
      value: 'toque_do_espirito',
      level: 4,
      rouseCheck: true,
      desc: 'Lê as impressões psíquicas deixadas em objetos.',
      longDesc: 'Ao tocar um objeto, pode sentir as impressões psíquicas deixadas por aqueles que o manipularam, aprendendo detalhes sobre seus proprietários, eventos passados ou emoções associadas ao objeto.'
    },
    {
      label: 'Clarividência',
      value: 'clarividencia',
      level: 5,
      rouseCheck: true,
      desc: 'Permite enxergar eventos distantes como se estivesse presente.',
      longDesc: 'Pode ver eventos em lugares distantes, como se estivesse fisicamente presente, observando situações ou áreas inacessíveis de maneira sobrenatural.'
    },
    {
      label: 'Possessão',
      value: 'possessao',
      level: 5,
      rouseCheck: true,
      requiredDiscipline: 'dominacao-3',
      desc: 'Controla completamente outro ser vivo.',
      longDesc: 'Pode tomar controle completo de outro ser vivo, vendo através de seus olhos e comandando suas ações como se fosse uma marionete. A vítima perde toda a sua autonomia enquanto durar o efeito.'
    },
    {
      label: 'Telepatia',
      value: 'telepatia',
      level: 5,
      rouseCheck: true,
      desc: 'Lê os pensamentos de outra pessoa.',
      longDesc: 'Permite ler a mente de alvos dentro de seu campo de visão e até falar nela, vampiros podem resistir ( Perseverança + Auspícios vs Raciocínio + Lábia).'
    }
  ],
  presenca: [
    {
      label: 'Fascínio',
      value: 'fascinio',
      level: 1,
      rouseCheck: false,
      desc: 'Atrai a atenção de quem observa o vampiro.',
      longDesc: 'Torna-se fascinante para aqueles ao seu redor. As pessoas são atraídas para o vampiro, tornando-se mais receptivas e dispostas a agradá-lo ou ouvi-lo.'
    },
    {
      label: 'Ameaça',
      value: 'ameaca',
      level: 1,
      rouseCheck: true,
      desc: 'Projeta uma aura de medo, intimidando alvos ao redor.',
      longDesc: 'Emite uma aura de medo que desanima aqueles que o cercam, tornando-os apreensivos e menos propensos a confrontá-lo.'
    },
    {
      label: 'Olhos da Serpente',
      value: 'olhos_da_serpente',
      level: 2,
      rouseCheck: false,
      desc: 'Hipnotiza um alvo ao olhar em seus olhos.',
      longDesc: 'Mantendo o contato visual com um alvo, pode hipnotizar-lo, capturando-a em um transe encantador.'
    },
    {
      label: 'Beijo Prolongado',
      value: 'beijo_prolongado',
      level: 2,
      rouseCheck: false,
      desc: 'Prolonga o êxtase do beijo vampírico',
      longDesc: 'Os mortais dos quais de que se alimenta se tornam viciados ao Beijo, obcecadas por isso e até procuram o vampiro para reiteradas alimentações.'
    },
    {
      label: 'Olhar Aterrorizante',
      value: 'olhar_aterrorizante',
      level: 3,
      rouseCheck: true,
      desc: 'Induz medo profundo ao fazer contato visual',
      longDesc: 'Expondo brevemente sua natureza vampírica, pode afetar um único alvo com absoluto terror.'
    },
    {
      label: 'Transe',
      value: 'transe',
      level: 3,
      rouseCheck: true,
      desc: 'Coloca um alvo em um estado de transe profundo.',
      longDesc: 'foca sua atração sobrenatural em uma única pessoa, introduzindo nela admiração e paixão arrebatadoras capazes de deixá-la de joelhos'
    },
    {
      label: 'Voz Irresistível',
      value: 'voz_irresistivel',
      level: 4,
      rouseCheck: true,
      requiredDiscipline: 'dominacao-1',
      desc: 'A voz do vampiro se torna irresistivelmente persuasiva.',
      longDesc: 'Permite usar os poderes de Dominação sem contato visual, ouvir sua voz é suficiente.'
    },
    {
      label: 'Convocação',
      value: 'convocacao',
      level: 4,
      rouseCheck: true,
      desc: 'Permite chamar uma vítima de qualquer lugar.',
      longDesc: 'Alguém em que foi usado outro poder de Presença ou tomado seu sangue sente-se atraído a sua direção. Dura uma noite.'
    },
    {
      label: 'Majestade',
      value: 'majestade',
      level: 5,
      rouseCheck: true,
      desc: 'Emana uma aura de autoridade absoluta e respeito.',
      longDesc: 'Quer seja aparecendo como devastadoramente belo, monstruosamente assustador ou manejando uma ordem absoluta, todos que o veem são atingidos por sua imagem.'
    },
    {
      label: 'Magnetismo Estelar',
      value: 'magnetismo_estelar',
      level: 5,
      rouseCheck: true,
      desc: 'Os poderes de Presença agora funcionam através da tecnologia.',
      longDesc: 'Pode realizar um rouse-check adicional em qualquer poder de Presença para que funcione atraés de tecnologia (telefone, gravações e etc).'
    }
  ],
  dominacao: [
    {
      label: 'Nublar Memória',
      value: 'nublar_memoria',
      level: 1,
      rouseCheck: false,
      desc: 'Apaga ou altera memórias recentes.',
      longDesc: 'Apaga ou altera memórias recentes. Uma vítima resistente ou outro vampiro requer um teste de Carisma + Dominação.'
    },
    {
      label: 'Compelir',
      value: 'compelir',
      level: 1,
      rouseCheck: false,
      desc: 'Dá uma ordem simples à vítima, que ela deve obedecer.',
      longDesc: 'Pode dar uma ordem verbal que a vítima deve seguir, desde que não vá contra seus instintos básicos.'
    },
    {
      label: 'Hipnotizar',
      value: 'hipnotizar',
      level: 2,
      rouseCheck: true,
      desc: 'Induz um transe hipnótico na vítima, permitindo sugestões.',
      longDesc: 'Colocar uma vítima em um estado hipnótico, permitindo que ela siga ordens mais complexas e a deixa sucetivel a outros comandoss.'
    },
    {
      label: 'Demência',
      value: 'demencia',
      level: 3,
      rouseCheck: true,
      requiredDiscipline: 'ofuscacao-2',
      desc: 'Instaura loucura temporária em uma vítima, perturbando seus pensamentos.',
      longDesc: 'Pode causar um estado de loucura temporária na vítima, levando-a a comportamentos irracionais, delírios ou alucinações.'
    },
    {
      label: 'A Mente Esquecida',
      value: 'a_mente_esquecida',
      level: 3,
      rouseCheck: true,
      desc: 'Altera ou apaga memórias antigas ou complexas.',
      longDesc: 'Diferente de Nublar Memória, este poder permite apagar ou modificar memórias de longo prazo na mente da vítima. Pode reescrever eventos passados ou apagar lembranças inteiras com precisão.'
    },
    {
      label: 'Instruções Submersas',
      value: 'instrucoes_submersas',
      level: 4,
      rouseCheck: true,
      requiredPower: 'hipnotizar',
      desc: 'Implanta ordens ocultas na mente da vítima, que são ativadas mais tarde.',
      longDesc: 'Ao hipnotizar, pode fazer com que um comando que permaneça latente na mente da vítima até que seja ativado por uma palavra, ação ou evento específico.'
    },
    {
      label: 'Racionalizar',
      value: 'racionalizar',
      level: 4,
      rouseCheck: false,
      desc: 'Faz a vítima justificar suas ações como voluntárias.',
      longDesc: 'A vítima sob dominação acredita que as ordens que recebeu foram decisões próprias. Mesmo após o efeito passar, a vítima cria justificativas para suas ações.'
    },
    {
      label: 'Manipulação em Massa',
      value: 'manipulacao_em_massa',
      level: 5,
      rouseCheck: true,
      desc: 'Permite dominar várias vítimas ao mesmo tempo.',
      longDesc: 'Pode dominar um grupo de vítimas simultaneamente, dando-lhes uma única ordem que todos devem seguir. Vampiros são mais resistentes sendo menos afetados conforme a quantidade presente.'
    },
    {
      label: 'Decreto Final',
      value: 'decreto_final',
      level: 5,
      rouseCheck: true,
      desc: 'Os poderes de dominação são seguidos até o fim.',
      longDesc: 'Suas vítimas ignoram seus instintos primários e seguem seus comandos mesmo que isso as leve à morte. '
    }
  ],
  potencia: [
    {
      label: 'Corpo Letal',
      value: 'corpo_letal',
      level: 1,
      rouseCheck: false,
      desc: 'Causa dano agravado à mortais',
      longDesc: 'Ignora um nível de armadura por nível de Potência. Rasga a pele e quebra ossos de mortais.'
    },
    {
      label: 'Salto Crescente',
      value: 'salto_crescente',
      level: 1,
      rouseCheck: false,
      desc: 'Canaliza sua força nas pernas',
      longDesc: 'Pode saltar muito longe ou muito alto sem pegar impulso.'
    },
    {
      label: 'Proeza',
      value: 'proeza',
      level: 2,
      rouseCheck: true,
      desc: 'Realiza feitos de força sobre-humana',
      longDesc: 'Adicione seu nível de Potência a Força ou Briga. Pode realizar atos como dobrar metal, rasgar armadura, etc'
    },
    {
      label: 'Alimentação Brutal',
      value: 'alimentacao_brutal',
      level: 2,
      rouseCheck: false,
      desc: 'Drena sangue com grande violência',
      longDesc: 'Se alimenta muito rapidamente, causando danos graves enquanto drena o sangue.'
    },
    {
      label: 'Fagulha de Fúria',
      value: 'fagulha_de_furia',
      level: 3,
      requiredDiscipline: 'presenca-2',
      rouseCheck: true,
      desc: 'Incita alvos à fúria',
      longDesc: 'Pode incitar um ou mais alvos a fúria e até frenesi.'
    },
    {
      label: 'Pegada Inquietante',
      value: 'pegada_inquietante',
      level: 3,
      rouseCheck: true,
      desc: 'Canaliza sua força nos dedos',
      longDesc: 'Pode ser usado para escalar paredes sólidas ou dafinificar objetos e estruturas.'
    },
    {
      label: 'Fórmula do Poderio',
      value: 'formula_do_poderio',
      level: 4,
      rouseCheck: true,
      desc: 'Concentra seu poder de Potência no sangue',
      longDesc: 'Vampiros que bebem seu sangue ganham metade de seu nível de Potência e os poderes até aquele nível.'
    },
    {
      label: 'Golpe da Terra',
      value: 'golpe_da_terra',
      level: 4,
      rouseCheck: true,
      desc: 'Causa tremores ao bater no chão',
      longDesc: 'Ao bater no chão, causa um terremoto concentrado que da dano a todos e tudo em sua volta.'
    },
    {
      label: 'Punhos de Caim',
      value: 'punhos_de_caim',
      level: 5,
      rouseCheck: true,
      desc: 'Desfere golpes extremamente poderosos',
      longDesc: 'realiza UMA ação por Rouse Check com extrema força, capaz de empalar, decaptar e até mesmo arrancar o coração do peito.'
    }
  ],
  fortitude: [
    {
      label: 'Resiliência',
      value: 'resiliencia',
      level: 1,
      rouseCheck: false,
      desc: 'Aumenta a resistência física (passivo)',
      longDesc: 'Adicione seu nível de Fortitude a Vitalidade.'
    },
    {
      label: 'Mente Inabalável',
      value: 'mente_inabalavel',
      level: 1,
      rouseCheck: false,
      desc: 'Concede resistência a coerções e pressões mentais (passivo)',
      longDesc: 'Adiciona o nível de Fortitude a rolagens de resistência mental como Intimidação, sedução, etc.'
    },
    {
      label: 'Dureza',
      value: 'dureza',
      level: 2,
      rouseCheck: true,
      desc: 'Reduz o dano dos ataques físicos recebidos',
      longDesc: 'Diminui danos superficiais pelo nível de Fortitude.'
    },
    {
      label: 'Feras Resistentes',
      value: 'feras_resistentes',
      level: 2,
      rouseCheck: true,
      requiredPower: 'animalismo-1',
      desc: 'Compartilha sua resistência com animais',
      longDesc: 'Seu Familiar adiciona a vitalidade seu nível de Fortitude.'
    },
    {
      label: 'Desafiar Maldição',
      value: 'desafiar_maldicao',
      level: 3,
      rouseCheck: true,
      desc: 'Prepara se usangue para resistir a um danos agravados ou maldições',
      longDesc: 'Resiste um pouco à maldições como dano da Luz Solar ou fogo. Dano agravado menor ou igual ao nível de Fortitude é reduzido a dano superficial.'
    },
    {
      label: 'Reforçar a Muralha Interior',
      value: 'reforcar_muralha_interior',
      level: 3,
      rouseCheck: false,
      desc: 'Fortalece a mente de poderes sobrenaturais',
      longDesc: 'Torna-se mais díficil de ser afetado por disciplinas sobrenaturais como Dominação e Auspícios.'
    },
    {
      label: 'Fórmula da Resistência',
      value: 'formula_da_resistencia',
      level: 4,
      rouseCheck: true,
      desc: 'Concentra seu poder de Fortitude no sangue',
      longDesc: 'Vampiros que bebem do seu sangue ganham metade de seu nível de Fortitude e seus poderes até aquele nível.'
    },
    {
      label: 'Pele de Mármore',
      value: 'pele_de_marmore',
      level: 5,
      rouseCheck: true,
      desc: 'Torna a pele dura como pedra',
      longDesc: 'Endurece sua pele ao ponto de torná-la quase inquebrável, semelhante ao mármore.'
    },
    {
      label: 'Proeza da Dor',
      value: 'proeza_da_dor',
      level: 5,
      rouseCheck: true,
      desc: 'Resiste às delibitações da dor ou ferimentos',
      longDesc: 'Permite resistir à dor extrema e ferimentos graves, podendo continuar lutando ou fugir quando outros estariam debilitados.'
    }
  ],
  feiticaria_de_sangue: [
    {
      label: 'Sangue Ácido',
      value: 'sangue_acido',
      level: 1,
      rouseCheck: true,
      desc: 'Transforma parte do sangue em ácido',
      longDesc: 'Transforma parte do sangue em ácido corrosivo, pode ser arremessado ou derramado.'
    },
    {
      label: 'Gosto por Sangue',
      value: 'gosto_por_sangue',
      level: 1,
      rouseCheck: false,
      desc: 'Permite identificar características ao beber sangue',
      longDesc: 'Provando um pouco de sangue, pode determinar algumas características básicas do seu dono.'
    },
    {
      label: 'Extinguir Vitae',
      value: 'extinguir_vitae',
      level: 2,
      rouseCheck: true,
      desc: 'Drena temporariamente a Vitae da vítima',
      longDesc: 'Drena a Vitae de um vampiro, aumentando sua fome o e deixando incapaz de realizar ações que dependem de sangue, como usar disciplinas ou curar ferimentos.'
    },
    {
      label: 'Sangue Potente',
      value: 'sangue_potente',
      level: 2,
      rouseCheck: true,
      desc: 'Aumenta temporariamente sua Potência de Sangue',
      longDesc: 'Por uma cena, aumenta sua potência de sangue, tornando suas disciplinas mais fortes.'
    },
    {
      label: 'Toque do Escorpião',
      value: 'toque_do_escorpiao',
      level: 3,
      rouseCheck: true,
      desc: 'Transforma uma quantia do próprio sangue em um veneno',
      longDesc: 'Transforma parte de seu sangue em um veneno paralisante. Pode ser cuspido, derramado ou para cobrir armas.'
    },
    {
      label: 'Furto de Vitae',
      value: 'furto_de_vitae',
      level: 4,
      rouseCheck: true,
      desc: 'Permite extrair vitae de uma vítima à distância',
      longDesc: 'Consome o sangue de uma vítima à distância sem precisar mordê-la.'
    },
    {
      label: 'Carícia de Baal',
      value: 'caricia_de_baal',
      level: 5,
      rouseCheck: true,
      desc: 'Faz uma quantia do próprio sangue ferver',
      longDesc: 'Faz parte de seu sangue ferver. Pode ser derramado ou derramado, não pode ser manipulado com as mãos.'
    },
    {
      label: 'Caldeirão de Sangue',
      value: 'caldeirao_de_sangue',
      level: 5,
      rouseCheck: true,
      desc: 'Faz o sangue de uma vítima ferver',
      longDesc: 'Faz o sangue de um alvo ferver, pode causar dano extremos ou destruir a vítima dependendo de quanto sangue for afetado.'
    }
  ],
  abismo: [
    {
      label: 'Olhos da Escuridão',
      value: 'olhos_da_escuridao',
      level: 1,
      rouseCheck: false,
      desc: 'Permite ver no escuro',
      longDesc: 'Capaz de enxergar perfeitamente em áreas completamente escuras, sem necessitar de qualquer fonte de luz.'
    },
    {
      label: 'Chamado da Sombra',
      value: 'chamado_da_sombra',
      level: 1,
      rouseCheck: true,
      desc: 'Manipula as sombras',
      longDesc: 'Consegue manipular as sombras para realizar pequenas ações como fechar uma porta ou expandir as sombras deixando o ambiente mais escuro.'
    },
    {
      label: 'Toque do Abismo',
      value: 'toque_do_abismo',
      level: 2,
      rouseCheck: true,
      desc: 'Pode envolver pessoas ou objetos com as sombras',
      longDesc: 'Pode cubrir um alvo com as sombras. Pode amedontrar uma pessoa ou dificultar sua visão bem como esconder objetos no escudo como se não estivessem lá.'
    },
    {
      label: 'Garras do Vazio',
      value: 'garras_do_vazio',
      level: 2,
      rouseCheck: true,
      desc: 'Convoca garras feitas de pura escuridão',
      longDesc: 'Consegue evocar garras compostas de sombras que se projetam de suas mãos. Essas garras causam ferimentos profundos e podem cortar materiais sólidos com facilidade.'
    },
    {
      label: 'Controle das sombras',
      value: 'controle_das_sombras',
      level: 2,
      rouseCheck: true,
      desc: 'Manipula as sombras com mais controle',
      longDesc: 'Capaz de manipular as sombras com mais precisão pode utiliza-las para cobrir pessoas ou objetos quase completamente, pode também usa-las para ações mais complexas como amortecer sua queda.'
    },
    {
      label: 'Sussurros das Trevas',
      value: 'sussurros_das_trevas',
      level: 3,
      rouseCheck: true,
      desc: 'Permite ouvir ou comunicar-se com vozes do Abismo',
      longDesc: 'Capaz de ouvir e se comunicar com as entidades do Abismo, recebendo informações ou revelando segredos sobre o alvo ou local. As vozes nem sempre respondem claramente ou com a verdade.'
    },
    {
      label: 'Manto das Sombras',
      value: 'manto_das_sombras',
      level: 4,
      rouseCheck: true,
      desc: 'Encobre-se de uma proteção sombril',
      longDesc: 'Envolve-se em uma armadura de pura escuridão, tornando-se difícil de ver e mais resistente a danos.'
    },
    {
      label: 'Portais do Vazio',
      value: 'portais_do_vazio',
      level: 4,
      rouseCheck: true,
      desc: 'Permite criar pequenos portais sombrios para teletransporte',
      longDesc: 'Abrindo uma porta ao Abismo pode se movimentar entre as sombras como se teletransportasse. Ficar muito tempo no Abismo pode ser perigoso.'
    },
    {
      label: 'Convocar o Abismo',
      value: 'convocar_o_abismo',
      level: 5,
      rouseCheck: true,
      desc: 'Convoca uma entidade do Abismo para realizar sua vontade',
      longDesc: 'Invoca uma entidade do Abismo, que atua conforme suas instruções.'
    },
    {
      label: 'Absorver a Escuridão',
      value: 'absorver_a_escuridao',
      level: 5,
      rouseCheck: true,
      desc: 'Absorve as sombras e escuridão ao redor, tornando-se mais forte',
      longDesc: 'Absorve sombras do ambiente, fortalecendo-se temporariamente e ganhando um aumento em sua resistência.'
    }
  ]
}
