import { Question } from '../../types';

export const scienceQuestionsBiologyPart3: Question[] = [
  // 21 - Biologia Molecular / Dogma Central (Transcrição e Tradução)
  {
    id: 'bio-21',
    subject: 'biologia',
    topic: 'Genética Molecular / Síntese Proteica',
    source: 'ENEM 2023',
    difficulty: 2,
    context: 'Uma fita molde de DNA apresenta a sequência de bases nitrogenadas 3\'- TAC GGC TTA - 5\'. Durante o processo de transcrição celular, é sintetizada uma molécula de RNA mensageiro.',
    question: 'Qual é a sequência de códons do RNAm correspondente formado?',
    options: [
      { letter: 'A', text: '5\'- ATG CCG AAT - 3\'' },
      { letter: 'B', text: '5\'- AUG CCG AAU - 3\'' },
      { letter: 'C', text: '5\'- UAC GGC UUA - 3\'' },
      { letter: 'D', text: '3\'- AUG CCG AAU - 5\'' },
      { letter: 'E', text: '5\'- AUC GGC UUA - 3\'' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: NO RNA NÃO TEM TIMINA (T), TEM URACILA (U)! T emparelha com A, A com U, C com G, G com C. TAC vira AUG (códon de início clássico!). Resposta: 5\'- AUG CCG AAU - 3\'.',
      stepByStep: ['1. DNA: T -> RNA: A.', '2. DNA: A -> RNA: U (uracila).', '3. DNA: C -> RNA: G / DNA: G -> RNA: C.', '4. Direção antiparalela 5\' -> 3\': AUG CCG AAU.'],
      timeSaverTip: 'Viu DNA transcrito para RNA? Eliminou qualquer alternativa com "T" (Timina) já sobra quase nada.',
      trapAlert: 'Colocar timina no RNA ou inverter a extremidade 5\' e 3\'.'
    }
  },
  // 22 - Parasitologia / Doenças Tropicais (Esquistossomose)
  {
    id: 'bio-22',
    subject: 'biologia',
    topic: 'Parasitologia / Verminoses e Saúde Pública',
    source: 'ENEM 2021',
    difficulty: 2,
    context: 'A esquistossomose ("barriga-d\'água") afeta milhares de pessoas em regiões desprovidas de saneamento básico com lagoas e córregos de água doce.',
    question: 'A forma infectante que penetra ativamente pela pele humana e o hospedeiro intermediário do parasita são, respectivamente:',
    options: [
      { letter: 'A', text: 'Miracídio e mosquito Aedes aegypti' },
      { letter: 'B', text: 'Cercária e caramujo do gênero Biomphalaria' },
      { letter: 'C', text: 'Cisticerco e porco doméstico' },
      { letter: 'D', text: 'Ovo embrionado e cão doméstico' },
      { letter: 'E', text: 'Cercária e peixe de água doce' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: CERCÁRIA COÇA E CORA A PELE! M-C: Miracídio entra no caramujo; Cercária fura a pele e penetra no homem ("se nadou e coçou, esquistossomo pegou"). Caramujo Biomphalaria é o hospedeiro intermediário!',
      stepByStep: ['1. Ovos nas fezes caem na água e viram miracídios.', '2. Miracídio penetra no caramujo (Biomphalaria).', '3. No caramujo geram-se milhares de cercárias que nadam e penetram ativamente a pele humana.'],
      timeSaverTip: 'Miracídio vai pro caramujo; Cercária fura o humano.',
      trapAlert: 'Achar que o humano se infecta ingerindo o miracídio.'
    }
  },
  // 23 - Citologia / Transporte pela Membrana Plasmática
  {
    id: 'bio-23',
    subject: 'biologia',
    topic: 'Citologia / Osmose e Meio Hipertônico',
    source: 'ENEM 2020',
    difficulty: 2,
    context: 'Ao preparar uma salada de alface fresca, um cozinheiro adicionou vinagre e sal 30 minutos antes da refeição. No momento de servir, as folhas estavam murchas e flácidas, acumulando água no fundo da tigela.',
    question: 'O murchamento acelerado das folhas de alface ocorreu pelo fenômeno de:',
    options: [
      { letter: 'A', text: 'Plasmólise causada pela perda de água por osmose para o meio hipertônico.' },
      { letter: 'B', text: 'Turgência decorrente da absorção excessiva de íons de sódio por transporte ativo.' },
      { letter: 'C', text: 'Degradação da parede celular celulósica pelo ácido acético.' },
      { letter: 'D', text: 'Hemólise celular pela quebra da membrana vacuolar.' },
      { letter: 'E', text: 'Difusão facilitada de amido para o exterior celular.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: A ÁGUA VAI ONDE TEM MAIS SAL! O tempero de sal e vinagre torna o lado de fora HIPERTÔNICO (mais concentrado). Por osmose, a água sai da célula vegetal, o vacúolo encolhe e a célula fica murcha (PLASMÓLISE)!',
      stepByStep: ['1. Meio externo hipertônico (cheio de sal e soluto).', '2. Osmose: água sai do meio hipotônico (dentro da célula) para o hipertônico (fora).', '3. A célula vegetal perde água e descola da parede: plasmólise.'],
      timeSaverTip: 'Vegetal murchando com sal = Plasmólise osmótica.',
      trapAlert: 'Confundir com turgência (que é quando a célula incha por receber água em meio hipotônico).'
    }
  },
  // 24 - Biotecnologia / Transgênicos versus Terapia Gênica
  {
    id: 'bio-24',
    subject: 'biologia',
    topic: 'Biotecnologia / Organismos Geneticamente Modificados',
    source: 'ENEM 2022',
    difficulty: 1,
    context: 'A soja "Bt" cultivada no Brasil produz uma proteína inseticida natural a partir da inserção em seu genoma de um gene clonado da bactéria Bacillus thuringiensis.',
    question: 'Por possuir em seu genoma DNA estável proveniente de uma espécie filogeneticamente diferente, a soja Bt é classificada como:',
    options: [
      { letter: 'A', text: 'Organismo clonado por transferência nuclear' },
      { letter: 'B', text: 'Organismo transgênico (OGM)' },
      { letter: 'C', text: 'Mutante somático induzido por radiação' },
      { letter: 'D', text: 'Híbrido natural de reprodução cruzada' },
      { letter: 'E', text: 'Poliploide sintético estéril' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: GENE DE OUTRA ESPÉCIE = TRANSGÊNICO! Todo transgênico é um OGM, pois recebeu DNA funcional de uma espécie diferente (da bactéria para a planta)!',
      stepByStep: ['1. DNA recombinante inseriu gene da bactéria na soja.', '2. Espécies distintas trocando genes em laboratório = Transgenia.'],
      timeSaverTip: 'Gene exógeno (de fora) = Transgênico.',
      trapAlert: 'Confundir transgenia com clonagem (que é cópia idêntica).'
    }
  },
  // 25 - Fisiologia Endócrina / Regulação da Glicemia
  {
    id: 'bio-25',
    subject: 'biologia',
    topic: 'Fisiologia Humana / Pâncreas e Controle da Glicose',
    source: 'ENEM 2021',
    difficulty: 1,
    context: 'Após um almoço rico em carboidratos, as taxas de glicose no sangue elevam-se expressivamente, ativando uma resposta hormonal imediata para restabelecer a homeostase.',
    question: 'Qual hormônio é secretado e qual é sua ação biológica primária?',
    options: [
      { letter: 'A', text: 'Glucagon, estimulando a quebra de glicogênio no fígado.' },
      { letter: 'B', text: 'Insulina, promovendo a captação celular de glicose e a síntese de glicogênio hepático.' },
      { letter: 'C', text: 'Cortisol, bloqueando a absorção de glicose pelos miócitos.' },
      { letter: 'D', text: 'Adrenalina, convertendo triglicerídeos em glicose livre.' },
      { letter: 'E', text: 'Tiroxina, diminuindo a taxa de metabolismo basal.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: GLICEMIA SUBIU? INSULINA ENTRA EM AÇÃO! Ela "abre a porta" das células para a glicose entrar e guarda o excesso no fígado como glicogênio! O Glucagon faz o oposto no jejum (Glicose Cai -> GlucaGON)!',
      stepByStep: ['1. Muita glicose no sangue estimula as células beta do pâncreas.', '2. Liberação de insulina.', '3. Células captam glicose e fígado estoca como glicogênio (glicogênese).'],
      timeSaverTip: 'Insulina põe glicose PARA DENTRO das células (baixa o açúcar no sangue). Glucagon põe PARA FORA no sangue.',
      trapAlert: 'Marcar glucagon no momento pós-refeição.'
    }
  },
  // 26 - Ecologia / Poluição Térmica e Eutrofização
  {
    id: 'bio-26',
    subject: 'biologia',
    topic: 'Ecologia e Impactos Ambientais / Eutrofização',
    source: 'ENEM 2023',
    difficulty: 2,
    context: 'O despejo indiscriminado de esgoto doméstico não tratado em uma lagoa provocou a proliferação descontrolada de algas na superfície, bloqueando a luz solar.',
    question: 'A morte dos peixes nessa lagoa eutrofizada é consequência direta de:',
    options: [
      { letter: 'A', text: 'Hiperoxigenação da água provocada pelo excesso de fotossíntese de fundo.' },
      { letter: 'B', text: 'Consumo acelerado de oxigênio dissolvido pela decomposição aeróbica da biomassa morta.' },
      { letter: 'C', text: 'Aumento imediato do pH da água pelo consumo de gás carbônico pelas algas.' },
      { letter: 'D', text: 'Diminuição da temperatura da água decorrente do bloqueio da radiação solar.' },
      { letter: 'E', text: 'Intoxicação por excesso de salinidade gerada pelos compostos fosfatados.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: EUTROFIZAÇÃO = MORTE POR FALTA DE OXIGÊNIO (ANOXIA)! Algas morrem -> Bactérias decompositoras aeróbicas proliferam e ESMAGAM o oxigênio da água -> peixes sufocam!',
      stepByStep: ['1. Esgoto com fósforo e nitrogênio prolifera algas na superfície (florações).', '2. Camada bloqueia luz para as plantas do fundo, que morrem.', '3. Bactérias decompõem matéria orgânica consumindo todo o O2 dissolvido.'],
      timeSaverTip: 'Eutrofização mata peixe por asfixia (oxigênio dissolvido despenca a zero).',
      trapAlert: 'Achar que as algas intoxicam diretamente com salinidade.'
    }
  },
  // 27 - Vírus / Estrutura e Ciclos Lítico e Lisogênico
  {
    id: 'bio-27',
    subject: 'biologia',
    topic: 'Microbiologia / Vírus e Retrovírus',
    source: 'ENEM 2021',
    difficulty: 2,
    context: 'O vírus do HIV é um retrovírus causador da Síndrome da Imunodeficiência Adquirida (AIDS), possuindo genoma de RNA e atacando preferencialmente os linfócitos T CD4+.',
    question: 'A enzima viral que sintetiza DNA a partir do molde de RNA viral no interior da célula hospedeira é a:',
    options: [
      { letter: 'A', text: 'DNA polimerase III' },
      { letter: 'B', text: 'Transcriptase reversa' },
      { letter: 'C', text: 'RNA polimerase dependente de RNA' },
      { letter: 'D', text: 'DNA ligase celular' },
      { letter: 'E', text: 'Helicase ribossomal' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: RETROVÍRUS FAZ O CAMINHO INVERSO: TRANSCRIPTASE REVERSA! Transcrição normal é DNA -> RNA. Se o vírus faz RNA -> DNA, é processo REVERSO pela transcriptase reversa!',
      stepByStep: ['1. HIV contém genoma de RNA fita simples.', '2. No citoplasma do linfócito, a transcriptase reversa gera DNA de fita dupla.', '3. A integrase insere esse DNA no genoma da célula humana.'],
      timeSaverTip: 'HIV / Retrovírus no ENEM = Transcriptase Reversa.',
      trapAlert: 'Confundir com RNA polimerase.'
    }
  },
  // 28 - Bioquímica / Enzimas e Desnaturação
  {
    id: 'bio-28',
    subject: 'biologia',
    topic: 'Bioquímica / Enzimas e Fatores de Desnaturação',
    source: 'ENEM 2020',
    difficulty: 1,
    context: 'Uma amostra da enzima salivar ptialina (amilase humana), cujo pH ótimo de atuação é neutro (~6,8 a 7,0), foi submetida a um meio com pH = 1,5 contendo ácido clorídrico concentrado.',
    question: 'Nessas condições extremas de acidez, a ptialina tem sua atividade catalítica interrompida porque:',
    options: [
      { letter: 'A', text: 'Suas ligações peptídicas covalentes são quebradas em aminoácidos isolados.' },
      { letter: 'B', text: 'Sua estrutura terciária/quaternária sofre desnaturação, alterando a conformação do sítio ativo.' },
      { letter: 'C', text: 'O substrato de amido evapora espontaneamente na presença de íons cloreto.' },
      { letter: 'D', text: 'A energia de ativação da hidrólise atinge o valor zero.' },
      { letter: 'E', text: 'Ocorre aumento na velocidade máxima de colisão molecular.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: pH EXTREMO DESNATURA A ENZIMA! Desnaturar = mudar a forma 3D (estrutura terciária/quaternária). Se muda a forma, o sítio ativo perde o encaixe chave-fechadura com o substrato!',
      stepByStep: ['1. As ligações fracas (pontes de hidrogênio e iônicas) que sustentam o dobramento protéico se desfazem.', '2. A enzima perde a conformação tridimensional.', '3. Ligações peptídicas continuam intactas (não é digestão, é desnaturação!).'],
      timeSaverTip: 'Desnaturação altera a forma tridimensional, NÃO rompe as ligações peptídicas primárias.',
      trapAlert: 'Dizer que desnaturação quebra as ligações peptídicas (isso seria hidrólise/digestão).'
    }
  },
  // 29 - Zoologia e Parasitologia / Teníase versus Cisticercose
  {
    id: 'bio-29',
    subject: 'biologia',
    topic: 'Parasitologia / Teníase e Cisticercose Humana',
    source: 'ENEM 2022',
    difficulty: 3,
    context: 'A teníase e a cisticercose humana são afecções causadas pelo mesmo platelminto parasita (Taenia solium), porém apresentam mecanismos de contaminação e quadros clínicos inteiramente distintos.',
    question: 'A cisticercose humana é contraída quando o indivíduo:',
    options: [
      { letter: 'A', text: 'Consome carne de porco mal cozida contendo larvas (cisticercos).' },
      { letter: 'B', text: 'Ingere acidentalmente água ou verduras contaminadas com OVOS de Taenia solium.' },
      { letter: 'C', text: 'É picado pelo barbeiro hospedeiro das formas amastigotas.' },
      { letter: 'D', text: 'Pisa descalço em solo arenoso infestado por cercárias ativas.' },
      { letter: 'E', text: 'Inala esporos fúngicos liberados nas fezes ressecadas de suínos.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: COMEU CARNE COM LARVA = TEM A TÊNIA (TENÍASE)! COMEU OVO NA ÁGUA/SALADA = TEM A LARVA NO CÉREBRO (CISTICERCOSE)! Na cisticercose o humano vira o "porco" por comer ovos!',
      stepByStep: ['1. Teníase = comer a carne de porco mal cozida com cisticercos (parasita adulto no intestino).', '2. Cisticercose = comer os OVOS do parasita (o ovo eclode e as larvas alojam no cérebro e músculos).'],
      timeSaverTip: 'Carne malpassada dá teníase; Salada e água suja com ovos dá cisticercose.',
      trapAlert: 'Achar que cisticercose vem de comer carne de porco (a carne crua dá teníase!).'
    }
  },
  // 30 - Embriologia / Folhetos Embrionários
  {
    id: 'bio-30',
    subject: 'biologia',
    topic: 'Embriologia / Destino dos Folhetos Embrionários',
    source: 'ENEM 2023',
    difficulty: 2,
    context: 'Durante a gastrulação e organogênese nos animais triblásticos, três folhetos embrionários diferenciam-se dando origem aos tecidos e órgãos do corpo.',
    question: 'O sistema nervoso central (encéfalo e medula espinhal) e a epiderme originam-se a partir de qual folheto?',
    options: [
      { letter: 'A', text: 'Endoderme' },
      { letter: 'B', text: 'Mesoderme' },
      { letter: 'C', text: 'Ectoderme' },
      { letter: 'D', text: 'Mesogléia' },
      { letter: 'E', text: 'Celoma primário' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: ECTODERME É O QUE FICA POR FORA E O QUE PENSA! Epiderme (pele externa) + Sistema Nervoso (encéfalo, medula e retina) derivam da ECTODERME!',
      stepByStep: ['1. Ectoderme: Epiderme, anexos e todo o Sistema Nervoso (a partir da placa neural).', '2. Mesoderme: Músculos, ossos, sangue e sistema cardiovascular.', '3. Endoderme: Revestimento do trato digestório e respiratório, fígado e pâncreas.'],
      timeSaverTip: 'Cérebro e pele = Ectoderme. Músculo e osso = Mesoderme. Fígado e pulmão = Endoderme.',
      trapAlert: 'Achar que por ser interno o cérebro viria da endoderme ou mesoderme.'
    }
  }
];
