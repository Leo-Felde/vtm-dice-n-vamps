export const defaultUserData = {
  nome:'',
  conceito: '',
  predator: '',
  cronica: '',
  ambicao: '',
  clan: '',
  sire: '',
  desejo: '',
  generation: '',
  vitality: 0,
  forca_de_vontade: 0,
  savedDie: [],
  disciplines: {},
  attributes:{
    forca: 0,
    destreza:0 ,
    vigor: 0,
    carisma: 0,
    manipulacao: 0,
    autocontrole: 0,
    inteligencia: 0,
    raciocinio: 0,
    determinacao: 0
  },
  abilities:{
    armas_brancas: 0,
    armas_de_fogo: 0,
    atletismo: 0,
    briga: 0,
    conducao: 0,
    furtividade: 0,
    ladroagem: 0,
    oficios: 0,
    sobrevivencia: 0,
    empatia_com_animais: 0,
    etiqueta: 0,
    intimidacao: 0,
    lideranca: 0,
    manha: 0,
    performance: 0,
    persuasao: 0,
    sagacidade: 0,
    subterfugio: 0,
    ciencia: 0,
    erudicao: 0,
    financas: 0,
    investigacao: 0,
    medicina: 0,
    ocultismo: 0,
    percepcao: 0,
    politica: 0,
    tecnologia: 0
  },
  pecialties:{
    armas_brancas: '', 
    armas_de_fogo: '', 
    atletismo: '', 
    briga: '', 
    conducao: '', 
    furtividade: '', 
    ladroagem: '', 
    oficios: '', 
    sobrevivencia: '', 
    empatia_com_animais: '', 
    etiqueta: '', 
    intimidacao: '', 
    lideranca: '', 
    manha: '', 
    performance: '', 
    persuasao: '', 
    sagacidade: '', 
    subterfugio: '', 
    ciencia: '', 
    erudicao: '', 
    financas: '', 
    investigacao: '', 
    medicina: '', 
    ocultismo: '', 
    percepcao: '', 
    politica: '', 
    tecnologia: ''   
  }
}

export const atributos = [
  { label: 'Força', value: 'forca', shortLabel: 'Força' },
  { label: 'Destreza', value: 'destreza', shortLabel: 'Destr' },
  { label: 'Vigor', value: 'vigor', shortLabel: 'Vigor' },
  { label: 'Carisma', value: 'carisma', shortLabel: 'Caris' },
  { label: 'Manipulação', value: 'manipulacao', shortLabel: 'Manip' },
  { label: 'Autocontrole', value: 'autocontrole', shortLabel: 'AutoC' },
  { label: 'Inteligência', value: 'inteligencia', shortLabel: 'Intel' },
  { label: 'Raciocínio', value: 'raciocinio', shortLabel: 'Racio' },
  { label: 'Determinação', value: 'determinacao', shortLabel: 'Deter' },
  { label: 'Força de vontade', value: 'forca_de_vontade', hidden: true }
]

export const habilidades = [
  { label: 'Armas Brancas', value: 'armas_brancas', shortLabel: 'Arm.B' },
  { label: 'Armas de Fogo', value: 'armas_de_fogo', shortLabel: 'Arm.F' },
  { label: 'Atletismo', value: 'atletismo', shortLabel: 'Atlet' },
  { label: 'Briga', value: 'briga', shortLabel: 'Briga' },
  { label: 'Condução', value: 'conducao', shortLabel: 'Condu' },
  { label: 'Furtividade', value: 'furtividade', shortLabel: 'Furti' },
  { label: 'Ladroagem', value: 'ladroagem', shortLabel: 'Ladro' },
  { label: 'Ofícios', value: 'oficios', shortLabel: 'Ofici' },
  { label: 'Sobrevivência', value: 'sobrevivencia', shortLabel: 'Sobre' },
  { label: 'Empatia com Animais', value: 'empatia_com_animais', shortLabel: 'Anima' },
  { label: 'Etiqueta', value: 'etiqueta', shortLabel: 'Etiq' },
  { label: 'Intimidação', value: 'intimidacao', shortLabel: 'Inti' },
  { label: 'Liderança', value: 'lideranca', shortLabel: 'Lider' },
  { label: 'Manha', value: 'manha', shortLabel: 'Manha' },
  { label: 'Performance', value: 'performance', shortLabel: 'Perfo' },
  { label: 'Persuasão', value: 'persuasao', shortLabel: 'Persu' },
  { label: 'Sagacidade', value: 'sagacidade', shortLabel: 'Sagac' },
  { label: 'Subterfúgio', value: 'subterfugio', shortLabel: 'Subte' },
  { label: 'Ciência', value: 'ciencia', shortLabel: 'Ciênc' },
  { label: 'Erudição', value: 'erudicao', shortLabel: 'Erudi' },
  { label: 'Finanças', value: 'financas', shortLabel: 'Finan' },
  { label: 'Investigação', value: 'investigacao', shortLabel: 'Inves' },
  { label: 'Medicina', value: 'medicina', shortLabel: 'Medic' },
  { label: 'Ocultismo', value: 'ocultismo', shortLabel: 'Ocult' },
  { label: 'Percepção', value: 'percepcao', shortLabel: 'Perce' },
  { label: 'Política', value: 'politica', shortLabel: 'Polit' },
  { label: 'Tecnologia', value: 'tecnologia', shortLabel: 'Tecno' },
  { label: 'Força de vontade', value: 'forca_de_vontade', hidden: true }
]

export const predatorTypes = [
  {
    label: 'Alleycat', value: 'alleycat', desc: 'Embosca vítimas com violência', longDesc: 'Para o Alleycat, o sangue é mais saboroso quando vem com adrenalina e medo, se alimentando de vítimas que emboscam em becos escuros ou ruas abandonadas, pegando-as de surpresa com uma força brutal.', humanityEffect: -1, specialtyGain: [{ briga: 'Agarrar' }, { intimidacao: 'Assalto' }], disciplineGain: ['Celerity', 'Potence'], merits: [{ label: 'Contato Criminal', value: 3 }]
  }, {
    label: 'Bagger', value: 'bagger', desc: 'Alimenta-se de sangue armazenado', LongDesc: 'O Bagger evita o perigo de beber diretamente de mortais, preferindo roubar ou adquirir bolsas de sangue de hospitais ou bancos de sangue. Outros Membros zombam desse estilo, considerando-o uma abordagem preguiçosa, mas sua discrição muitas vezes o torna um método seguro e eficaz.', humanityEffect: 0, specialtyGain: [{ seguranca: 'Abrir fechaduras' }, { manha: 'Mercado negro' }], disciplineGain: ['Feiticaria_de_sangue', 'ofuscacao'], merits: [{ label: 'Garganta de ferro', value: 2 }]
  },{
    label: 'Bloodleech', value: 'bloodleech', desc: 'Alimenta-se de outros Membros', longDesc: 'O Blood Leech rejeita sangue mortal, preferindo se alimentar da vitae de outros Membros, caçando os mais fracos ou até recebendo sangue como pagamento. A Camarilla considera isso repugnante, pois coloca a estabilidade da sociedade vampírica em risco.', humanityEffect: -1, specialtyGain: [{ briga: 'Lutar contra Membros' }, { furtividade: 'Se esconder de Membros' }], disciplineGain: ['metamorfose', 'rapidez'], merits: [{ label: 'Segredo negro (diablerista ou evitado)', value: 3 }, { label: 'Exclusão de presa: Mortais', value: 3 }]
  }, {
    label: 'Cleaver', value: 'cleaver', desc: 'Alimenta-se de sua familia humana', longDesc: 'Para o Cleaver o sangue mais doce pode vir das pessoas mais próximas, alimentando-se de seus familiares e amigos próximos. A Camarilla proíbe a prática de tomar uma família humana desta forma, pois é uma Violação à Máscara esperando para acontecer.', humanityEffect: 0, specialtyGain: [{ persuasao: 'Abusador psicológico' }, { labia: 'Mentiroso descarado' }], disciplineGain: ['dominacao', 'animalismo'], merits: [{ label: 'Segredo negro (Cleaver)', value: 3 }, { label: 'Rebanho', value: 2 }]
  }, {
    label: 'Consensualist', value: 'consensualist', desc: 'Precisa da permissão de humanos para beber', longDesc: 'Para o Consensualist, a alimentação só é válida se a vítima estiver de acordo. Conseguir "doadores" que não revelerão o segredo pode ser difícil e outros Membros o zombam por depender da boa vontade dos mortais.', humanityEffect: +1, specialtyGain: [{ medicina: 'Flebotomia' }, { Persuasão: '+1 com vítimas' }], disciplineGain: ['auspicios', 'fortitude'], merits: [{ label: 'Segredo negro (Consensualista)', value: 3 }, { label: 'Exclusão de Presa: Não consentidos', value: 3 }]
  }, {
    label: 'Farmer', value: 'farmer', desc: 'Alimenta-se apenas de animais', longDesc: 'O Farmer evita o sangue de humanos e se alimenta exclusivamente de animais, muitos Membros consideram este estilo de vida fraco e indigno. A vitae animal nunca sustenta como a de humanos, sendo necessário drenar vários animais muitas vezes até a morte, eventualmente Farners podem sucumbir a beber de humanos novamente.', humanityEffect: +1, specialtyGain: [{ empatia_com_animais: 'Afinidade com um tipo de animal' }, { persuasao: 'Caçador' }], disciplineGain: ['animalismo', 'metamorfose'], merits: [{ label: 'Exclusão de Presa: humanos/Membros', value: 3 }]
  }, {
    label: 'Osiris', value: 'osiris', desc: 'Alimenta-se daqueles que o cultuam e adoram', longDesc: 'O Osiris é um mestre de culto. Eles se cercam de seguidores fervorosos que os veem como deuses ou guias espirituais, e que oferecem seu sangue como uma forma de devoção. Esses Membros cultivam cultos ao seu redor, alimentando-se de sua adoração e manipulando suas mentes para garantir lealdade cega.', humanityEffect: 0, specialtyGain: [{ ocultismo: 'Nome ou tipo do culto' }, { entreterimento: 'Pregador língua-de-prata' }], disciplineGain: ['Feiticaria_de_sangue', 'presenca'], merits: [{ label: 'rebanho', value: 3 }, { label: 'INIMIGO OU DEFEITO MISTICO', value: 2 }]
  }, {
    label: 'Sandman', value: 'sandman', desc: 'Alimenta-se de humanos adormecidos ou desacordados', longDesc: 'O Sandman se especializa em alimentar-se de mortais adormecidos, invadindo seus lares ou se aproveitando de lugares onde as pessoas estão vulneráveis. Para eles, a alimentação é uma operação furtiva, feita enquanto as vítimas estão inconscientes e incapazes de resistir.', humanityEffect: 0, specialtyGain: [{ medicina: 'anestesia' }, { furtividade: 'Invadir' }], disciplineGain: ['auspicios', 'ofuscacao'], merits: [{ label: 'Recursos', value: 1 }]
  }, {
    label: 'Scene Queen', value: 'sceneQueen', desc: 'Alimenta-se de admiradores em lugares em que são populares', longDesc: 'Para o Scene Queen, a vida noturna é o palco onde seus instintos predatórios brilham. Eles dominam festas, raves e eventos, movendo-se entre os mortais como uma celebridade ou estrela que todos desejam. A multidão, as luzes e drogas dessas celebrações oferecem o disfarce perfeito para a alimentação.', humanityEffect: 0, specialtyGain: [{ etiqueta: 'grupo especifico' }, { liderança: 'grupo especifico' }, { manha: 'grupo especifico' }], disciplineGain: ['dominacao', 'potencia'], merits: [{ label: 'fama', value: 1 }, { label: 'Antipático ou exclusão a presa fora do grupo', value: 3 }]
  }, {
    label: 'Siren', value: 'siren', desc: 'Alimenta-se usando da sedução e sexo', longDesc: 'Para o Siren, o sangue mais saboroso é aquele que vem com paixão e prazer. Usam o sexo e a intimidade para caçar suas presas, alimentando-se durante o auge de momentos de vulnerabilidade emocional. É mal visto por alguns Membros pois muitas vezes é acompanhado da furnicação com mortais.', humanityEffect: 0, specialtyGain: [{ persuasao: 'Sedução' }, { subterfugio: 'Sedução' }], disciplineGain: ['fortitude', 'presenca'], merits: [{ label: 'Atraente', value: 1 }, { label: 'Inimigo', value: 1 }]
  }, {
    label: 'Extortionist', value: 'extortionist', desc: 'Alimenta-se de sangue extorquido de mortais', longDesc: 'O Extortionist obtem sua alimentação em troca de serviços como proteção, segurança ou vigilância. Por mais que as vezes os serviços possam ser genuínos, muitas vezes eles se alimentam de vítimas enganadas em cenários de perigo inexistente.', humanityEffect: 0, specialtyGain: [{ intimidacao: 'Coersão' }, { ladroagem: 'Fabricar evidencias' }], disciplineGain: ['dominacao', 'potencia'], merits: [{ label: 'Recursos OU Contatos', value: 3 }, { label: 'inimigo (policia ou vitima)', value: 2 }]
  }, {
    label: 'Graverobber', value: 'graverobber', desc: 'Alimenta-se de mortos e pessoas de luto', longDesc: 'O Graverobber prefere evitar se alimentar de humanos vivos, "caçando" em mortuários e cemitérios por cadáveres recentes. Apesar da preferencia por corpos o Graverobber não discarta viúvas solitárias ou outras pessoas de luto que ficarem até tarde no cemitério.', humanityEffect: 0, specialtyGain: [{ seguranca: 'Abrir fechaduras' }, { medicina: 'Manipulação de cadaveres' }], disciplineGain: ['fortitude', 'ofuscacao'], merits: [{ label: 'Garganta de ferro', value: 3 }]
  }, {
    label: 'Roadside Killer', value: 'roadside_killer', desc: 'Nômade que se alimenta de pessoas nas estradas e rodovias', longDesc: 'O Roadside Killer nunca fica no mesmo lugar por muito tempo e esta sempre em movimento, caçando aqueles que não farão falta se desaparecerem na estrada.', humanityEffect: 0, specialtyGain: [{ sobrevivencia: 'Estradas e rodovias' }, { investigacao: 'Marcas de clãs' }], disciplineGain: ['fortitude', 'metamorfose'], merits: [{ label: 'Exclusão de presa: Locais', value: 3 }]
  }, {
    label: 'Grim Reaper', value: 'grim-reaper', desc: 'Alimenta-se dos enfermos e delibitados', longDesc: 'O Grim Reaper está constantemente em busca de vítimas perto do fim de suas vidas, seja por senilidade, doença ou ferimento. Muitas vezes adquirem o gosto por doenças específicas, tornando-os mais fáceis de identificar.', humanityEffect: 0, specialtyGain: [{ seguranca: 'Abrir fechaduras' }, { medicina: 'Enfermos, doentes e feridos' }], disciplineGain: ['auspicios', 'ofuscacao'], merits: [{ label: 'Exclusão de presa: humanos saudaveis', value: 3 }]
  }, {
    label: 'Pursuer', value: 'pursuer', desc: 'Stalkea a vítima antes de beber', longDesc: 'O Pursuer é um caçador cauteloso e paciente , prefere stalkear suas vítimas descobrindo seus hábitos e rotinas. Por sua caça ser longa muitos Pursuers atacam a vítima quando sua fome está alta e, acidentamente ou não, drenam sua vítima até a morte.', humanityEffect: -1, specialtyGain: [{ seguranca: 'Abrir fechaduras' }, { manha: 'Mercado negro' }], disciplineGain: ['animalismo', 'auspicios'], merits: [{ label: 'contatos criminais', value: 1 }]
  }, {
    label: 'Trapdoor', value: 'trapdoor', desc: 'Atrai as vítimas até seu esconderijo', longDesc: 'O Trapdoor constroi seu ninho e atrai vítimas até ele, seja um jovem explorando uma casa abandonada ou um casal querendo alugar um quarto em seu motel, a caça vai ao caçador. Muitas vezes o vampiro captura as vítimas e as mantém em cativeiro para beber repetidamente', humanityEffect: -1, specialtyGain: [{ persuasao: 'Marketing' }, { ladroagem: 'Emboscadas e armadilhas' }], disciplineGain: ['metamorfose', 'ofuscacao'], merits: [{ label: 'Garganta de ferro', value: 1 }]
  }
]

export const clanOptions = [
  {
    label: 'Lasombra',
    value: 'lasombra',
    desc: 'Os mestres das sombras e manipulação',
    longDesc: 'Os La Sombra são conhecidos por sua habilidade de manipular as sombras e sua natureza calculista. Eles desafiam a ordem estabelecida e exercem influência tanto sobre a Camarilla quanto o Sabá, preferindo controlar das sombras. Muitas vezes, enxergam-se como os verdadeiros líderes da sociedade vampírica, mesmo que em um papel oculto.',
    clanPerseption: 'Temidos e respeitados por sua crueldade e habilidade de manipulação, mas também vistos como perigosos e traiçoeiros por outros vampiros.',
    disciplines: ['dominacao', 'potencia', 'abismo']
  },
  {
    label: 'Ventrue',
    value: 'ventrue',
    desc: 'Os líderes e tiranos',
    longDesc: 'Os Ventrue são os líderes naturais da sociedade vampírica. Com seu domínio sobre mortais e outros Membros, eles mantêm a ordem e se veem como os legítimos governantes da Camarilla.',
    clanPerseption: 'Respeitados por sua liderança natural, mas podem ser vistos como arrogantes e obcecados por controle.',
    disciplines: ['dominacao', 'fortitude', 'presenca']
  },
  {
    label: 'Toreador',
    value: 'toreador',
    desc: 'Os artistas e belos',
    longDesc: 'Os Toreador são Membros apaixonados por beleza e arte. Eles se misturam com a alta sociedade mortal, sempre em busca de inspiração artística e prazeres estéticos.',
    clanPerseption: 'São admirados pela beleza e criatividade, mas também ridicularizados por sua superficialidade e apego às aparências.',
    disciplines: ['auspicios', 'rapidez', 'presenca']
  },
  {
    label: 'Nosferatu',
    value: 'nosferatu',
    desc: 'Os monstruosos e espiões',
    longDesc: 'Deformados por sua maldição, os Nosferatu são Membros grotescos que vivem nas sombras. Embora evitados pela sociedade, eles controlam vastas redes de informação.',
    clanPerseption: 'Evitados por causa de sua aparência grotesca, são respeitados como comerciantes de informações e segredos.',
    disciplines: ['ofuscacao', 'animalismo', 'potencia']
  },
  {
    label: 'Brujah',
    value: 'brujah',
    desc: 'Os revolucionários e idealistas',
    longDesc: 'O antigo clã de Filosofos. Lutam fervorosamente pelo que acreditam, sejam causas ou ideologias, e são facilmente levados a ira.',
    clanPerseption: 'Muitos Membros não os levam a sério devido a sua tendencia a tagalerar e forçar suas crenças mas os tratam com cuidado devido ao seu temperamento curto.',
    disciplines: ['potencia', 'rapidez', 'presenca']
  },
  {
    label: 'Gangrel',
    value: 'gangrel',
    desc: 'Os selvagens e solitários',
    longDesc: 'Os Gangrel são Membros profundamente ligados à natureza, muitos são capazes de se transformar em animais. Solitários por natureza, eles preferem viver nas beiras da sociedade do que nos grandes centros.',
    clanPerseption: 'Muitas vezes vistos como renegados por sua tendencia ao isolamento mas são respeitados pela sua resiliência e força.',
    disciplines: ['animalismo', 'fortitude', 'metamorfose']
  },
  {
    label: 'Tremere',
    value: 'tremere',
    desc: 'Os feiticeiros e usurpadores',
    longDesc: 'O clã Tremere é composto por Membros que praticam a poderosa Feitiçaria de Sangue conhecida como Taumaturgia. Embora temidos e respeitados, eles enfrentam uma luta interna pelo poder.',
    clanPerseption: 'Temidos por sua reputação como magos e feiticeiros. Profundamente desconfiados pelos outros clãs devido à sua origem como usurpadores.',
    disciplines: ['auspicios', 'feiticaria_de_sangue', 'dominacao']
  },
  {
    label: 'Malkavian',
    value: 'malkavian',
    desc: 'Os loucos e oráculos',
    longDesc: 'Pouco se sabe sobre sua loucura, muitos dizem ser uma maldição ou doença do sangue, mas é inegável que Malkavianos tendem a saber mais do que deveria ser possível.',
    clanPerseption: 'Geralmente vistos como não mais do que lunáticos irritantes que falam em charadas.',
    disciplines: ['auspicios', 'dominacao', 'ofuscacao']
  },
  {
    label: 'Caitiff',
    value: 'caitiff',
    desc: 'Os sem herança',
    longDesc: 'Os Caitiff são os que não herdam os poderes e fraquesas do clã de seu Sire o nome também é atribuído àqueles que são exilados ou simplesmente não sabem a qual clã pertencem',
    clanPerseption: 'A atribuição do nome aos exilados e abandonados faz com que sejam muito mal vistos. Todavia existem muitos Caitiff que vivem secretamente como membros comums dos outros clãs.',
    disciplines: null
  },
  {
    label: 'Sangue-Fraco',
    value: 'sangue_fraco',
    desc: 'Os de sangue diluído',
    longDesc: 'Os Sangue-Fracos são Membros cujo poder é fraco ou quase inexistente. Apesar de suas limitações, alguns conseguem sobreviver e desenvolver habilidades como a Alquimia de Sangue.',
    clanPerseption: 'Desprezados por muitos por serem considerados "incompletos" e temidos por outros que acreditam que sua existência é um sinal do Fim dos Tempos.',
    disciplines: ['alquimia_de_sangue']
  }
]

export const ageOptions = [
  { label: 'XVI', value: '16', desc: 'Childer - Sangue-fraco' },
  { label: 'XV', value: '15', desc: 'Childer - Sangue-fraco' },
  { label: 'XIV', value: '14', desc: 'Childer - Sangue-fraco' },
  { label: 'XIII', value: '13', desc: 'Neonite - Comum' },
  { label: 'XII', value: '12', desc: 'Neonite - Comum' },
  { label: 'XI', value: '11', desc: 'Ancialle - Ancião' }
]

