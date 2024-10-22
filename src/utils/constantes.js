export const atributos = [
  { label: 'Força', value: 'forca' },
  { label: 'Destreza', value: 'destreza' },
  { label: 'Vigor', value: 'vigor' },
  { label: 'Carisma', value: 'carisma' },
  { label: 'Manipulação', value: 'manipulacao' },
  { label: 'Autocontrole', value: 'autocontrole' },
  { label: 'Inteligência', value: 'inteligencia' },
  { label: 'Raciocínio', value: 'raciocinio' },
  { label: 'Determinação', value: 'determinacao' }
]

export const habilidades = [
  { label: 'Armas Brancas', value: 'armas_brancas' },
  { label: 'Armas de Fogo', value: 'armas_de_fogo' },
  { label: 'Atletismo', value: 'atletismo' },
  { label: 'Briga', value: 'briga' },
  { label: 'Condução', value: 'conducao' },
  { label: 'Furtividade', value: 'furtividade' },
  { label: 'Ladroagem', value: 'ladroagem' },
  { label: 'Ofícios', value: 'oficios' },
  { label: 'Sobrevivência', value: 'sobrevivencia' },
  { label: 'Empatia com Animais', value: 'empatia_com_animais' },
  { label: 'Etiqueta', value: 'etiqueta' },
  { label: 'Intimidação', value: 'intimidacao' },
  { label: 'Liderança', value: 'lideranca' },
  { label: 'Manha', value: 'manha' },
  { label: 'Performance', value: 'performance' },
  { label: 'Persuasão', value: 'persuasao' },
  { label: 'Sagacidade', value: 'sagacidade' },
  { label: 'Subterfúgio', value: 'subterfugio' },
  { label: 'Ciência', value: 'ciencia' },
  { label: 'Erudição', value: 'erudicao' },
  { label: 'Finanças', value: 'financas' },
  { label: 'Investigação', value: 'investigacao' },
  { label: 'Medicina', value: 'medicina' },
  { label: 'Ocultismo', value: 'ocultismo' },
  { label: 'Percepção', value: 'percepcao' },
  { label: 'Política', value: 'politica' },
  { label: 'Tecnologia', value: 'tecnologia' },
  { label: 'Força de vontade', value: 'forca_de_vontade' }
]

export const predatorTypes = [
  {
    label: 'Alleycat', value: 'alleycat', desc: 'Embosca vítimas com violência', longDesc: 'Para o Alleycat, o sangue é mais saboroso quando vem com adrenalina e medo, se alimentando de vítimas que emboscam em becos escuros ou ruas abandonadas, pegando-as de surpresa com uma força brutal.', humanityEffect: -1, specialtyGain: [{ briga: 'Agarrar' }, { intimidacao: 'Assalto' }], disciplineGain: ['Celerity', 'Potence'], merits: [{ label: 'Contato Criminal', value: 3 }]
  }, {
    label: 'Bagger', value: 'bagger', desc: 'Alimenta-se de sangue armazenado', LongDesc: 'O Bagger evita o perigo de beber diretamente de mortais, preferindo roubar ou adquirir bolsas de sangue de hospitais ou bancos de sangue. Outros vampiros zombam desse estilo, considerando-o uma abordagem preguiçosa, mas sua discrição muitas vezes o torna um método seguro e eficaz.', humanityEffect: 0, specialtyGain: [{ seguranca: 'Abrir fechaduras' }, { manha: 'Mercado negro' }], disciplineGain: ['Feiticaria_de_sangue', 'ofuscacao'], merits: [{ label: 'Garganta de ferro', value: 2 }]
  },{
    label: 'Bloodleech', value: 'bloodleech', desc: 'Alimenta-se de outros vampiros', longDesc: 'O Blood Leech rejeita sangue mortal, preferindo se alimentar da vitae de outros vampiros, caçando os mais fracos ou até recebendo sangue como pagamento. A Camarilla considera isso repugnante, pois coloca a estabilidade da sociedade vampírica em risco.', humanityEffect: -1, specialtyGain: [{ briga: 'Lutar contra Membros' }, { furtividade: 'Se esconder de Membros' }], disciplineGain: ['metamorfose', 'rapidez'], merits: [{ label: 'Segredo negro (diablerista ou evitado)', value: 3 }, { label: 'Exclusão de presa: Mortais', value: 3 }]
  }, {
    label: 'Cleaver', value: 'cleaver', desc: 'Alimenta-se de sua familia humana', longDesc: 'Para o Cleaver o sangue mais doce pode vir das pessoas mais próximas, alimentando-se de seus familiares e amigos próximos. A Camarilla proíbe a prática de tomar uma família humana desta forma, pois é uma Violação à Máscara esperando para acontecer.', humanityEffect: 0, specialtyGain: [{ persuasao: 'Abusador psicológico' }, { labia: 'Mentiroso descarado' }], disciplineGain: ['dominacao', 'animalismo'], merits: [{ label: 'Segredo negro (Cleaver)', value: 3 }, { label: 'Rebanho', value: 2 }]
  }, {
    label: 'Consensualist', value: 'consensualist', desc: 'Precisa da permissão de humanos para beber', longDesc: 'Para o Consensualist, a alimentação só é válida se a vítima estiver de acordo. Conseguir "doadores" que não revelerão o segredo pode ser difícil e outros vampiros o zombam por depender da boa vontade dos mortais.', humanityEffect: +1, specialtyGain: [{ medicina: 'Flebotomia' }, { Persuasão: '+1 com vítimas' }], disciplineGain: ['auspicios', 'fortitude'], merits: [{ label: 'Segredo negro (Consensualista)', value: 3 }, { label: 'Exclusão de Presa: Não consentidos', value: 3 }]
  }, {
    label: 'Farmer', value: 'farmer', desc: 'Alimenta-se apenas de animais', longDesc: 'O Farmer evita o sangue de humanos e se alimenta exclusivamente de animais, muitos vampiros consideram este estilo de vida fraco e indigno. A vitae animal nunca sustenta como a de humanos, sendo necessário drenar vários animais muitas vezes até a morte, eventualmente Farners podem sucumbir a beber de humanos novamente.', humanityEffect: +1, specialtyGain: [{ empatia_com_animais: 'Afinidade com um tipo de animal' }, { persuasao: 'Caçador' }], disciplineGain: ['animalismo', 'metamorfose'], merits: [{ label: 'Exclusão de Presa: humanos/vampiros', value: 3 }]
  }, {
    label: 'Osiris', value: 'osiris', desc: 'Alimenta-se daqueles que o cultuam e adoram', longDesc: 'O Osiris é um mestre de culto. Eles se cercam de seguidores fervorosos que os veem como deuses ou guias espirituais, e que oferecem seu sangue como uma forma de devoção. Esses vampiros cultivam cultos ao seu redor, alimentando-se de sua adoração e manipulando suas mentes para garantir lealdade cega.', humanityEffect: 0, specialtyGain: [{ ocultismo: 'Nome ou tipo do culto' }, { entreterimento: 'Pregador língua-de-prata' }], disciplineGain: ['Feiticaria_de_sangue', 'presenca'], merits: [{ label: 'rebanho', value: 3 }, { label: 'INIMIGO OU DEFEITO MISTICO', value: 2 }]
  }, {
    label: 'Sandman', value: 'sandman', desc: 'Alimenta-se de humanos adormecidos ou desacordados', longDesc: 'O Sandman se especializa em alimentar-se de mortais adormecidos, invadindo seus lares ou se aproveitando de lugares onde as pessoas estão vulneráveis. Para eles, a alimentação é uma operação furtiva, feita enquanto as vítimas estão inconscientes e incapazes de resistir.', humanityEffect: 0, specialtyGain: [{ medicina: 'anestesia' }, { furtividade: 'Invadir' }], disciplineGain: ['auspicios', 'ofuscacao'], merits: [{ label: 'Recursos', value: 1 }]
  }, {
    label: 'Scene Queen', value: 'sceneQueen', desc: 'Alimenta-se de admiradores em lugares em que são populares', longDesc: 'Para o Scene Queen, a vida noturna é o palco onde seus instintos predatórios brilham. Eles dominam festas, raves e eventos, movendo-se entre os mortais como uma celebridade ou estrela que todos desejam. A multidão, as luzes e drogas dessas celebrações oferecem o disfarce perfeito para a alimentação.', humanityEffect: 0, specialtyGain: [{ etiqueta: 'grupo especifico' }, { liderança: 'grupo especifico' }, { manha: 'grupo especifico' }], disciplineGain: ['dominacao', 'potencia'], merits: [{ label: 'fama', value: 1 }, { label: 'Antipático ou exclusão a presa fora do grupo', value: 3 }]
  }, {
    label: 'Siren', value: 'siren', desc: 'Alimenta-se usando da sedução e sexo', longDesc: 'Para o Siren, o sangue mais saboroso é aquele que vem com paixão e prazer. Usam o sexo e a intimidade para caçar suas presas, alimentando-se durante o auge de momentos de vulnerabilidade emocional. É mal visto por alguns vampiros pois muitas vezes é acompanhado da furnicação com mortais.', humanityEffect: 0, specialtyGain: [{ persuasao: 'Sedução' }, { subterfugio: 'Sedução' }], disciplineGain: ['fortitude', 'presenca'], merits: [{ label: 'Atraente', value: 1 }, { label: 'Inimigo', value: 1 }]
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
  'Brujah', 'Gangrel', 'Malkavian', 'Nosferatos', 'Toreador',
  'Tremere', 'Ventrue', 'Caitiff'
]