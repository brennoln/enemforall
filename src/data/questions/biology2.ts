import { Question } from '../../types';

export const scienceQuestionsBiologyPart2: Question[] = [
  // 11 - Ecologia / Teia Trófica e Níveis Tróficos
  {
    id: 'bio-11',
    subject: 'biologia',
    topic: 'Ecologia / Cadeias e Teias Alimentares',
    source: 'ENEM 2021',
    difficulty: 1,
    context: 'Em uma teia alimentar de um ecossistema aquático, o fitoplâncton é consumido pelo zooplâncton, que serve de alimento para pequenos peixes, os quais são predados por peixes maiores.',
    question: 'Nessa teia, os pequenos peixes ocupam qual nível trófico?',
    options: [
      { letter: 'A', text: '1º nível trófico (produtor)' },
      { letter: 'B', text: '2º nível trófico (consumidor primário)' },
      { letter: 'C', text: '3º nível trófico (consumidor secundário)' },
      { letter: 'D', text: '4º nível trófico (consumidor terciário)' },
      { letter: 'E', text: 'Nível dos decompositores' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: NÍVEL TRÓFICO COMEÇA NO 1 (PRODUTOR)! 1º NT = Fitoplâncton (Produtor). 2º NT = Zooplâncton (Consumidor Primário). 3º NT = Pequenos peixes (Consumidor Secundário)! Cuidado: Consumidor 2 = Nível Trófico 3!',
      stepByStep: ['1. Produtores = 1º Nível Trófico.', '2. Herbívoros/Consumidores Primários = 2º Nível Trófico.', '3. Carnívoros/Consumidores Secundários = 3º Nível Trófico.'],
      timeSaverTip: 'Nível Trófico é sempre o número do consumidor mais 1.',
      trapAlert: 'Confundir Consumidor Secundário (2º consumidor) com 2º Nível Trófico.'
    }
  },
  // 12 - Citologia / Respiração Celular e Fermentação
  {
    id: 'bio-12',
    subject: 'biologia',
    topic: 'Bioenergética / Fermentação Lática e Muscular',
    source: 'ENEM 2022',
    difficulty: 2,
    context: 'Durante um sprint intenso de 100 metros rasos, o suprimento de oxigênio nas células musculares esqueléticas dos atletas torna-se insuficiente para suprir a demanda energética pela via aeróbica.',
    question: 'Para continuar regenerando ATP rapidamente, essas células musculares passam a realizar:',
    options: [
      { letter: 'A', text: 'Fermentação alcoólica com produção de etanol e gás carbônico.' },
      { letter: 'B', text: 'Fermentação lática com formação de lactato a partir do piruvato.' },
      { letter: 'C', text: 'Ciclo de Krebs acelerado sem consumo de aceptores de elétrons.' },
      { letter: 'D', text: 'Fosforilação oxidativa anaeróbica usando íons sulfato.' },
      { letter: 'E', text: 'Glicogenólise mitocondrial com liberação direta de glicose.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: MÚSCULO EM ANÓXIA FAZ FERMENTAÇÃO LÁTICA! O piruvato recebe hidrogênios do NADH e vira ácido lático (lactato). Humano NUNCA faz fermentação alcoólica (quem faz é levedura)!',
      stepByStep: ['1. Sem O2 suficiente, a cadeia respiratória mitocondrial trava.', '2. A glicólise continua gerando 2 ATP.', '3. Para regenerar NAD+, o piruvato é reduzido a lactato no citosol.'],
      timeSaverTip: 'Músculo cansado sem oxigênio = Lactato (Fermentação Lática).',
      trapAlert: 'Marcar fermentação alcoólica para músculo humano.'
    }
  },
  // 13 - Fisiologia Humana / Sistema Circulatório e Hematose
  {
    id: 'bio-13',
    subject: 'biologia',
    topic: 'Fisiologia Humana / Sistema Cardiovascular',
    source: 'ENEM 2020',
    difficulty: 2,
    context: 'O coração humano funciona como uma bomba biológica dupla em um circuito fechado e completo. O sangue rico em oxigênio (sangue arterial) que retorna dos pulmões entra no coração por meio das:',
    question: 'Quais vasos conduzem esse sangue oxigenado e em qual câmara cardíaca ele desembarca?',
    options: [
      { letter: 'A', text: 'Veias cavas no átrio direito.' },
      { letter: 'B', text: 'Artérias pulmonares no ventrículo direito.' },
      { letter: 'C', text: 'Veias pulmonares no átrio esquerdo.' },
      { letter: 'D', text: 'Artéria aorta no ventrículo esquerdo.' },
      { letter: 'E', text: 'Veias coronárias no átrio esquerdo.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: VEIA CHEGA AO CORAÇÃO, ARTÉRIA SAI! Volta do pulmão = Pulmonar. Se chega = Veia. Se é oxigenado = Lado Esquerdo do coração! Logo: Veias Pulmonares no Átrio Esquerdo!',
      stepByStep: ['1. Chega ao coração sempre em um Átrio por Veias.', '2. Pulmão -> Coração = Veias Pulmonares.', '3. Lado esquerdo recebe e bombeia sangue arterial oxigenado.'],
      timeSaverTip: 'Artéria = AFasta do coração. Veia = Vem ao coração. Lado esquerdo é o oxigenado.',
      trapAlert: 'Achar que toda veia transporta sangue venoso pobre em oxigênio (as veias pulmonares são a clássica exceção!).'
    }
  },
  // 14 - Genética / Grupos Sanguíneos Sistema ABO e Fator Rh
  {
    id: 'bio-14',
    subject: 'biologia',
    topic: 'Genética / Sistema ABO e Eritroblastose Fetal',
    source: 'ENEM 2019',
    difficulty: 3,
    context: 'A eritroblastose fetal (doença hemolítica do recém-nascido) ocorre pela incompatibilidade do fator Rh entre mãe e feto, podendo levar a graves anemias no bebê.',
    question: 'Para que haja risco real dessa doença se manifestar na segunda gestação, é necessário que:',
    options: [
      { letter: 'A', text: 'A mãe seja Rh+ e o feto seja Rh-.' },
      { letter: 'B', text: 'A mãe seja Rh- e o feto seja Rh+.' },
      { letter: 'C', text: 'Tanto o pai quanto a mãe sejam Rh-.' },
      { letter: 'D', text: 'A mãe pertença ao grupo sanguíneo O e o feto ao grupo AB.' },
      { letter: 'E', text: 'O pai seja Rh- e a mãe já possua anticorpos anti-A.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: MÃE NEGATIVA, FILHO POSITIVO! Se a mãe é Rh- e não tem a proteína, o contato com o sangue do 1º filho Rh+ gera anticorpos anti-Rh. Na 2ª gestação de feto Rh+, seus anticorpos atacam as hemácias do bebê!',
      stepByStep: ['1. Mãe Rh- (não tem antígeno D).', '2. Feto Rh+ (produz antígeno D herdado do pai).', '3. A mãe é sensibilizada e produz anticorpos anti-Rh IgG que atravessam a placenta.'],
      timeSaverTip: 'Apenas mães Rh- correm risco de sensibilização por feto Rh+.',
      trapAlert: 'Inverter os sinais (mãe Rh+ e bebê Rh- não tem perigo, pois mãe Rh+ já tolera o fator).'
    }
  },
  // 15 - Ecologia / Relações Ecológicas (Mutualismo, Protocooperação, Parasitismo)
  {
    id: 'bio-15',
    subject: 'biologia',
    topic: 'Ecologia / Dinâmica de Populações e Interações',
    source: 'ENEM 2023',
    difficulty: 1,
    context: 'Os líquens são formados pela associação íntima entre fungos e algas (ou cianobactérias), em que as algas fornecem matéria orgânica fotossintética e os fungos providenciam umidade e abrigo mineral, sendo incapazes de viverem isolados no ambiente natural.',
    question: 'Essa relação ecológica harmônica interespecífica obrigatória é classificada como:',
    options: [
      { letter: 'A', text: 'Comensalismo' },
      { letter: 'B', text: 'Protocooperação' },
      { letter: 'C', text: 'Mutualismo' },
      { letter: 'D', text: 'Inquilinismo' },
      { letter: 'E', text: 'Amensalismo' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: INTERESPECÍFICA + BENEFÍCIO MÚTUO (+/+) + OBRIGATÓRIA = MUTUALISMO! Se fosse facultativa (não obrigatória, como jacaré e pássaro-palito), seria Protocooperação!',
      stepByStep: ['1. Ambas as espécies se beneficiam (+/+).', '2. É obrigatória para a sobrevivência de ambos = MUTUALISMO.'],
      timeSaverTip: 'Líquen, micorriza e bactérias no rúmen bovino são sempre mutualismo obrigatório.',
      trapAlert: 'Marcar comensalismo (+/0) onde só um se beneficia.'
    }
  },
  // 16 - Biologia Celular / Divisão Celular (Mitose x Meiose)
  {
    id: 'bio-16',
    subject: 'biologia',
    topic: 'Divisão Celular / Meiose e Variabilidade Genética',
    source: 'ENEM 2021',
    difficulty: 2,
    context: 'A variabilidade genética nas populações com reprodução sexuada é fundamental para a seleção natural e evolução biológica.',
    question: 'Qual evento exclusivo da Prófase I da Meiose é o principal responsável pela recombinação gênica entre cromátides homólogas?',
    options: [
      { letter: 'A', text: 'Citocinese centrípeta' },
      { letter: 'B', text: 'Crossing-over (ou permutação gênica)' },
      { letter: 'C', text: 'Duplicação semiconservativa do DNA' },
      { letter: 'D', text: 'Disjunção prematura das cromátides irmãs' },
      { letter: 'E', text: 'Descondensação total da cromatina' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: RECOMBINAÇÃO = CROSSING-OVER (PERMUTAÇÃO)! Ocorre no Paquíteno da Prófase I da Meiose I, onde cromátides homólogas trocam pedaços de DNA!',
      stepByStep: ['1. Os cromossomos homólogos emparelham (sinapse).', '2. Ocorrem quebras e trocas de segmentos correspondentes (crossing-over).', '3. Isso gera novas combinações de alelos nos gametas.'],
      timeSaverTip: 'Viu "troca de pedaços de DNA na meiose" no ENEM? É Crossing-over / Permutação.',
      trapAlert: 'Confundir com mutação (o crossing-over apenas recombina alelos existentes).'
    }
  },
  // 17 - Fisiologia Vegetal / Fitormônios (Auxina e Fototropismo)
  {
    id: 'bio-17',
    subject: 'biologia',
    topic: 'Botânica / Hormônios Vegetais e Fototropismo',
    source: 'ENEM 2022',
    difficulty: 3,
    context: 'Ao posicionar uma planta jovem em uma janela que recebe luz solar apenas de uma direção lateral, observa-se que o caule se curva em direção à fonte de luz (fototropismo positivo).',
    question: 'Esse fenômeno fisiológico decorre do acúmulo de qual hormônio e em qual região do caule?',
    options: [
      { letter: 'A', text: 'Giberelina acumulada no lado iluminado.' },
      { letter: 'B', text: 'Auxina (AIA) acumulada no lado sombreado.' },
      { letter: 'C', text: 'Etileno concentrado no ápice apical exposto à luz.' },
      { letter: 'D', text: 'Ácido abscísico concentrado na zona de absorção radicular.' },
      { letter: 'E', text: 'Citocinina concentrada uniformemente em todas as folhas.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: AUXINA FOGE DA LUZ! A auxina migra para o lado escuro/sombreado. Como no caule a auxina ESTIMULA o alongamento celular, as células do lado sombreado crescem mais rápido, entortando a planta rumo à luz!',
      stepByStep: ['1. Auxina (AIA) tem fotodegradação e foge da luz para o lado sombreado.', '2. Maior teor de auxina no caule = maior alongamento celular.', '3. Lado escuro cresce mais que o lado claro -> curvatura em direção ao sol.'],
      timeSaverTip: 'Auxina foge da luz. No caule estimula crescimento.',
      trapAlert: 'Achar que a auxina se acumula no lado iluminado.'
    }
  },
  // 18 - Evolução / Lamarckismo versus Darwinismo
  {
    id: 'bio-18',
    subject: 'biologia',
    topic: 'Evolução / Teorias Evolutivas',
    source: 'ENEM 2020',
    difficulty: 1,
    context: 'O uso inadequado e indiscriminado de antibióticos tem acelerado o surgimento de "superbactérias" multirresistentes em ambientes hospitalares em todo o mundo.',
    question: 'De acordo com a teoria da Seleção Natural formulada por Charles Darwin, as bactérias resistentes surgem porque:',
    options: [
      { letter: 'A', text: 'O antibiótico induz mutações genéticas adaptativas benéficas diretamente nas bactérias sensíveis.' },
      { letter: 'B', text: 'O antibiótico atua como agente seletivo, eliminando as sensíveis e selecionando aquelas que já apresentavam resistência prévia.' },
      { letter: 'C', text: 'O uso frequente ensina o sistema imunológico bacteriano a metabolizar a droga.' },
      { letter: 'D', text: 'As bactérias transmitem características adquiridas pelo hábito de conviver com o fármaco.' },
      { letter: 'E', text: 'A resistência é decorrente da atrofia dos ribossomos por desuso.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: O MEIO NÃO INDUZ, O MEIO SELECIONA! Induzir mutação = Lamarck (ERRO!). Selecionar quem já era resistente por variabilidade prévia = Darwin (CERTO)!',
      stepByStep: ['1. A mutação ocorre ao acaso ANTES do contato com o antibiótico.', '2. O antibiótico mata as suscetíveis e deixa as já resistentes sobreviverem e se multiplicarem.'],
      timeSaverTip: 'Se a alternativa diz "o ambiente provocou/induziu mutação para adaptar", descarte (é lamarckismo disfarçado).',
      trapAlert: 'Achar que o antibiótico ensinou ou causou a mutação benéfica.'
    }
  },
  // 19 - Microbiologia e Saúde / Vacinas versus Soros
  {
    id: 'bio-19',
    subject: 'biologia',
    topic: 'Imunologia / Vacinas versus Soros',
    source: 'ENEM 2023',
    difficulty: 1,
    context: 'Um trabalhador rural foi picado por uma serpente peçonhenta da espécie cascavel no campo e levado imediatamente ao pronto-socorro.',
    question: 'A conduta médica correta para neutralizar rapidamente o veneno circulante é administrar:',
    options: [
      { letter: 'A', text: 'Vacina antiofídica, para gerar imunização ativa prolongada.' },
      { letter: 'B', text: 'Soro antiofídico, contendo anticorpos prontos para ação curativa imediata.' },
      { letter: 'C', text: 'Antibiótico de largo espectro para destruir os vírus da picada.' },
      { letter: 'D', text: 'Antígeno purificado para estimular os linfócitos B a criar memória.' },
      { letter: 'E', text: 'Anti-histamínico sem necessidade de anticorpos heterólogos.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: SORO = SALVA (CURA IMEDIATA COM ANTICORPOS PRONTOS)! VACINA = PREVINE (DÁ ANTÍGENO PARA CRIAR MEMÓRIA)! Veneno de cobra mata em horas, não dá tempo de produzir anticorpos, precisa de SORO!',
      stepByStep: ['1. Picada peçonhenta exige ação imediata de anticorpos prontos = imunização passiva (SORO).', '2. Vacina é preventiva com antígeno para imunização ativa.'],
      timeSaverTip: 'Soro é curativo (já vem com anticorpos). Vacina é preventiva (vem com antígenos).',
      trapAlert: 'Falar "vacina antiofídica" (não existe para emergência de picada de cobra!).'
    }
  },
  // 20 - Biomas Brasileiros / Cerrado e Caatinga
  {
    id: 'bio-20',
    subject: 'biologia',
    topic: 'Ecologia / Biomas Brasileiros e Adaptações',
    source: 'ENEM 2021',
    difficulty: 2,
    context: 'As plantas do Cerrado brasileiro exibem troncos tortuosos, cascas grossas suberosas e folhas coriáceas, enquanto o solo sob o qual se desenvolvem é profundo, ácido e rico em alumínio tóxico.',
    question: 'A principal adaptação hídrica que permite a essas árvores do Cerrado sobreviverem à estação de seca rigorosa é:',
    options: [
      { letter: 'A', text: 'Sistema radicular pivotante e profundo que alcança o lençol freático perene.' },
      { letter: 'B', text: 'Ausência total de estômatos nas folhas coriáceas.' },
      { letter: 'C', text: 'Queda permanente de folhas durante todas as estações chuvosas.' },
      { letter: 'D', text: 'Armazenamento massivo de água no córtex do caule como cactos da caatinga.' },
      { letter: 'E', text: 'Absorção de orvalho noturno exclusivamente pelos pelos suberosos do tronco.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: CERRADO = FLORESTA INVERTIDA! A água na superfície seca, mas lá no fundo tem o lençol freático. As raízes são gigantescas e profundas para buscar essa água! Tronco torto é pelo alumínio e fogo!',
      stepByStep: ['1. O solo superficial do Cerrado seca no inverno, mas o lençol é perene.', '2. Raízes axiais profundas garantem água o ano todo.', '3. Por isso as árvores do Cerrado não perdem todas as folhas na seca (são semidecíduas).'],
      timeSaverTip: 'Cerrado tem raiz profunda (lençol freático). Caatinga é que tem cactos e caules que armazenam água.',
      trapAlert: 'Confundir adaptações do Cerrado com as xerofíticas da Caatinga.'
    }
  }
];
