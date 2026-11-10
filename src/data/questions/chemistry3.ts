import { Question } from '../../types';

export const scienceQuestionsChemistryPart3: Question[] = [
  // 21 - Estequiometria / Rendimento de Reação
  {
    id: 'qui-21',
    subject: 'quimica',
    topic: 'Estequiometria / Rendimento e Pureza',
    source: 'ENEM 2021',
    difficulty: 2,
    context: 'Na queima teórica de 100 g de carvão puro, esperava-se produzir 360 g de gás carbônico (CO2). Porém, em condições industriais reais, obteve-se apenas 288 g de CO2.',
    question: 'Qual foi o rendimento percentual desse processo químico?',
    options: [
      { letter: 'A', text: '70%' },
      { letter: 'B', text: '75%' },
      { letter: 'C', text: '80%' },
      { letter: 'D', text: '85%' },
      { letter: 'E', text: '90%' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Rendimento = Obtido Real / Esperado Teórico = 288 / 360 = 28,8 / 36 = 0,80 = 80%! Questão limpa sem firula!',
      stepByStep: ['1. Rendimento (%) = (Massa Real / Massa Teórica) × 100%.', '2. R = (288 / 360) × 100% = 80%.'],
      timeSaverTip: '288 e 360 são divisíveis por 72 (4/5) = 80%.',
      trapAlert: 'Dividir 360 por 288 obtendo valor acima de 100%.'
    }
  },
  // 22 - Química Orgânica / Reações de Polimerização (PET, Polietileno)
  {
    id: 'qui-22',
    subject: 'quimica',
    topic: 'Química Orgânica / Polímeros e Reciclagem',
    source: 'ENEM 2023',
    difficulty: 2,
    context: 'Garrafas plásticas descartáveis de refrigerante são comumente fabricadas a partir de PET (poli(tereftalato de etileno)), um polímero formado pela condensação de um ácido dicarboxílico com um diálcool.',
    question: 'A ligação química característica que une os monômeros na cadeia principal do PET é do tipo:',
    options: [
      { letter: 'A', text: 'Éter' },
      { letter: 'B', text: 'Éster' },
      { letter: 'C', text: 'Amida' },
      { letter: 'D', text: 'Anidrido' },
      { letter: 'E', text: 'Glicosídica' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: ÁCIDO + ÁLCOOL = ÉSTER + ÁGUA! Como o PET é poli(tereftalato de etileno), ele é um POLIÉSTER, contendo grupo éster (-COO-)!',
      stepByStep: ['1. Ácido tereftálico (ácido carboxílico) reage com etilenoglicol (álcool).', '2. Reação de esterificação produz éster e libera H2O.', '3. O polímero resultante é um poliéster.'],
      timeSaverTip: 'O próprio nome diz: poli-tereftalATO (ato de etileno = éster).',
      trapAlert: 'Confundir éster (-COO-) com éter (-O-).'
    }
  },
  // 23 - Termoquímica / Gráfico com e sem catalisador
  {
    id: 'qui-23',
    subject: 'quimica',
    topic: 'Cinética Química / Gráfico de Energia de Ativação',
    source: 'ENEM 2020',
    difficulty: 1,
    context: 'Em uma indústria química, o uso de catalisador de platina permitiu acelerar em 10.000 vezes a velocidade de produção de um insumo farmacêutico.',
    question: 'Do ponto de vista termodinâmico e cinético, qual parâmetro foi alterado pela presença da platina?',
    options: [
      { letter: 'A', text: 'A entalpia dos reagentes aumentou.' },
      { letter: 'B', text: 'A variação de entalpia (ΔH) da reação diminuiu.' },
      { letter: 'C', text: 'A energia de ativação do processo diminuiu.' },
      { letter: 'D', text: 'A entalpia dos produtos aumentou.' },
      { letter: 'E', text: 'O rendimento no equilíbrio químico foi duplicado.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: CATALISADOR SÓ FAZ UMA COISA: DIMINUI A ENERGIA DE ATIVAÇÃO! Ele NÃO altera ΔH, NÃO altera equilíbrio e NÃO altera produtos/reagentes!',
      stepByStep: ['1. Catalisador cria caminho alternativo com menor barreira energética (energia de ativação menor).', '2. ΔH (energia inicial e final) permanece idêntica.'],
      timeSaverTip: 'Questão de catalisador no ENEM: procure a alternativa que fala "diminui a energia de ativação". 99% de chance de ser o gabarito.',
      trapAlert: 'Achar que catalisador aumenta o rendimento final ou altera o ΔH.'
    }
  },
  // 24 - Química Inorgânica / Funções e Neutralização
  {
    id: 'qui-24',
    subject: 'quimica',
    topic: 'Química Inorgânica / Neutralização Ácido-Base',
    source: 'ENEM 2019',
    difficulty: 1,
    context: 'A azia estomacal é provocada pelo excesso de ácido clorídrico (HCl) no suco gástrico. Para alívio dos sintomas, o hidróxido de magnésio (Mg(OH)2) é amplamente consumido como antiácido.',
    question: 'A reação química que ocorre entre o ácido gástrico e o antiácido é classificada como:',
    options: [
      { letter: 'A', text: 'Oxirredução' },
      { letter: 'B', text: 'Neutralização gerando cloreto de magnésio e água' },
      { letter: 'C', text: 'Eletrólise espontânea com desprendimento de gás cloro' },
      { letter: 'D', text: 'Combustão inorgânica' },
      { letter: 'E', text: 'Precipitação sem alteração de pH' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: ÁCIDO + BASE = SAL + ÁGUA! HCl + Mg(OH)2 -> MgCl2 + H2O. Neutralização pura que eleva o pH de volta ao normal!',
      stepByStep: ['1. HCl é um ácido inorgânico forte.', '2. Mg(OH)2 é uma base (antiácido).', '3. A reação de um ácido com uma base é sempre neutralização (sal + água).'],
      timeSaverTip: 'Antiácido = base que neutraliza o ácido.',
      trapAlert: 'Confundir neutralização com reação de oxirredução.'
    }
  },
  // 25 - Soluções / Solubilidade e Curvas de Solubilidade
  {
    id: 'qui-25',
    subject: 'quimica',
    topic: 'Soluções / Coeficiente de Solubilidade',
    source: 'ENEM 2022',
    difficulty: 2,
    context: 'O coeficiente de solubilidade de determinado sal de cloreto em água a 20 °C é de 36 g para cada 100 g de água. Em um béquer foram misturados 45 g desse sal com 100 g de água a 20 °C.',
    question: 'Após agitação cuidadosa e repouso térmico a 20 °C, o sistema é classificado como:',
    options: [
      { letter: 'A', text: 'Solução insaturada homogênea sem corpo de fundo.' },
      { letter: 'B', text: 'Solução saturada com 9 g de corpo de fundo (precipitado).' },
      { letter: 'C', text: 'Solução supersaturada estável com 45 g dissolvidos.' },
      { letter: 'D', text: 'Solução saturada com 45 g de precipitado.' },
      { letter: 'E', text: 'Mistura heterogênea coloidal com 36 g de precipitado.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: CABEM 36 g NA ÁGUA! Se colocou 45 g: dissolve 36 g e sobra 45 - 36 = 9 g no fundo! É saturada com corpo de fundo!',
      stepByStep: ['1. Limite a 20 °C = 36 g de sal em 100 g de H2O.', '2. Adicionou 45 g.', '3. Dissolvidos = 36 g (solução saturada); Fundo = 45 - 36 = 9 g de precipitado.'],
      timeSaverTip: 'Subtraia o coeficiente da quantidade posta: o excedente é o precipitado.',
      trapAlert: 'Achar que é supersaturada (supersaturação exige resfriamento lento e ausência de precipitado).'
    }
  },
  // 26 - Química Orgânica / Saponificação e Micelas
  {
    id: 'qui-26',
    subject: 'quimica',
    topic: 'Química Orgânica / Sabões e Tensoativos',
    source: 'ENEM 2023',
    difficulty: 2,
    context: 'Os sabões e detergentes conseguem remover gorduras insolúveis em água porque suas moléculas possuem propriedades anfifílicas (ou anfipáticas).',
    question: 'A estrutura molecular responsável por essa capacidade de limpeza é caracterizada por apresentar:',
    options: [
      { letter: 'A', text: 'Cadeia carbônica curta e inteiramente apolar.' },
      { letter: 'B', text: 'Extremidade apolar hidrofóbica e extremidade polar hidrofílica.' },
      { letter: 'C', text: 'Apenas grupos iônicos sem cadeia hidrocarbônica.' },
      { letter: 'D', text: 'Dois polos de alta densidade de carga negativa.' },
      { letter: 'E', text: 'Comportamento exclusivamente solúvel em solventes orgânicos.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: SABÃO = ANFIFÍLICO! Cabeça polar (hidrofílica, adora água) + Cauda carbônica apolar (hidrofóbica/lipofílica, gruda na gordura formando micelas)!',
      stepByStep: ['1. A cauda apolar interage com a gordura.', '2. A cabeça polar ionizada interage com a água.', '3. Formam-se micelas que mantêm a gordura suspensa e removível pela água.'],
      timeSaverTip: 'Viu sabão/detergente no ENEM? Lembre de micelas e molécula anfifílica (polar + apolar).',
      trapAlert: 'Dizer que o sabão reage quimicamente destruindo a molécula de gordura (ele apenas dispersa fisicamente).'
    }
  },
  // 27 - Gases Ideais / Equação de Clapeyron
  {
    id: 'qui-27',
    subject: 'quimica',
    topic: 'Físico-Química / Gases Ideais (P·V = n·R·T)',
    source: 'ENEM 2020',
    difficulty: 3,
    context: 'Um botijão rígido e indeformável (volume constante) contém gás hélio sob pressão de 2 atm a uma temperatura de 300 K (aprox. 27 °C). Devido à exposição ao sol forte, a temperatura do gás atinge 450 K.',
    question: 'Qual será a nova pressão exercida pelo gás no interior desse botijão?',
    options: [
      { letter: 'A', text: '2,5 atm' },
      { letter: 'B', text: '3,0 atm' },
      { letter: 'C', text: '3,5 atm' },
      { letter: 'D', text: '4,0 atm' },
      { letter: 'E', text: '4,5 atm' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: TRANSFORMAÇÃO ISOCÓRICA (V constante): P1 / T1 = P2 / T2! De 300 K para 450 K a temperatura aumentou 1,5 vez (450/300 = 1,5). Logo a pressão aumenta 1,5 vez: 2 × 1,5 = 3 atm!',
      stepByStep: ['1. Volume e mols constantes: P/T = constante.', '2. 2 / 300 = P2 / 450 => P2 = (2 × 450) / 300 = 900 / 300 = 3,0 atm.'],
      timeSaverTip: 'Sempre faça a temperatura absoluta em Kelvin na lei dos gases.',
      trapAlert: 'Usar temperatura em Celsius (°C) em vez de Kelvin (K).'
    }
  },
  // 28 - Eletroquímica / Proteção Catódica (Metal de Sacrifício)
  {
    id: 'qui-28',
    subject: 'quimica',
    topic: 'Eletroquímica / Corrosão e Metal de Sacrifício',
    source: 'ENEM 2021',
    difficulty: 2,
    context: 'Para proteger o casco de aço (constituído predominantemente por ferro) de navios contra a corrosão provocada pela água do mar, placas de zinco ou magnésio são rebitadas no casco.',
    question: 'Esses metais exercem proteção ao ferro porque possuem:',
    options: [
      { letter: 'A', text: 'Maior potencial de redução que o ferro, reduzindo-se primeiro.' },
      { letter: 'B', text: 'Menor potencial de redução (maior potencial de oxidação) que o ferro, oxidando-se preferencialmente.' },
      { letter: 'C', text: 'Capacidade de revestir quimicamente o ferro com uma camada polimérica protetora.' },
      { letter: 'D', text: 'Menor reatividade química frente ao oxigênio do que o ferro.' },
      { letter: 'E', text: 'Propriedade magnética que repele íons cloreto da água marinha.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: METAL DE SACRIFÍCIO = ELE SE SACRIFICA OXIDANDO NO LUGAR DO FERRO! Para se oxidar primeiro, precisa ter MAIOR potencial de OXIDAÇÃO (ou seja, MENOR potencial de redução)!',
      stepByStep: ['1. Zinco e magnésio são mais eletropositivos que o ferro.', '2. Eles oxidam e doam elétrons para o ferro, mantendo o ferro reduzido (intacto).'],
      timeSaverTip: 'O metal de sacrifício se desgasta para salvar o ferro. Por isso chama metal de sacrifício!',
      trapAlert: 'Trocar potencial de oxidação por potencial de redução.'
    }
  },
  // 29 - Química Geral / Separação de Misturas (Decantação e Filtração)
  {
    id: 'qui-29',
    subject: 'quimica',
    topic: 'Química Geral / Métodos de Separação de Misturas',
    source: 'ENEM 2022',
    difficulty: 1,
    context: 'Em uma estação de tratamento de água (ETA), após as etapas de coagulação e floculação, a água contendo os flocos pesados de impurezas é enviada para grandes tanques onde repousa por várias horas.',
    question: 'Qual é o nome desse processo físico em que os flocos assentam no fundo pela ação da gravidade?',
    options: [
      { letter: 'A', text: 'Filtração rápida' },
      { letter: 'B', text: 'Destilação fracionada' },
      { letter: 'C', text: 'Decantação (ou sedimentação)' },
      { letter: 'D', text: 'Levigação centrífuga' },
      { letter: 'E', text: 'Flotação por aeração' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: CAIR POR GRAVIDADE = DECANTAÇÃO! Em repouso, o mais denso vai para o fundo (sedimenta). Questão clássica do ciclo da ETA no ENEM!',
      stepByStep: ['1. Coagulação com Al2(SO4)3 junta sujeiras em flocos.', '2. Floculação agrega os flocos.', '3. Decantação assenta os flocos no fundo do tanque pela gravidade.'],
      timeSaverTip: 'Gravidade puxando para baixo = Decantação/Sedimentação.',
      trapAlert: 'Confundir com flotação (onde bolhas fazem a sujeira subir à tona).'
    }
  },
  // 30 - Química Orgânica / Funções Mistas e Farmacologia
  {
    id: 'qui-30',
    subject: 'quimica',
    topic: 'Química Orgânica / Reconhecimento de Funções Orgânicas',
    source: 'ENEM 2023',
    difficulty: 2,
    context: 'O paracetamol possui em sua estrutura química um anel aromático ligado a uma hidroxila (-OH) e a um grupo nitrogenado acilado (-NH-CO-CH3).',
    question: 'As funções orgânicas oxigenada e nitrogenada presentes na molécula do paracetamol são, respectivamente:',
    options: [
      { letter: 'A', text: 'Álcool e amina' },
      { letter: 'B', text: 'Fenol e amida' },
      { letter: 'C', text: 'Éter e cetona' },
      { letter: 'D', text: 'Fenol e amina' },
      { letter: 'E', text: 'Álcool e amida' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: -OH ligada direto no BENZENO = FENOL (não é álcool!). Nitrogênio ligado à carbonila C=O (-NH-CO-) = AMIDA (com D, não amina)! Logo: Fenol e Amida!',
      stepByStep: ['1. Anel benzênico + OH = FENOL.', '2. N ligado a C=O = AMIDA.', '3. Combinação: Fenol e amida.'],
      timeSaverTip: 'Se tem C=O grudado no N, é Amida. Se não tem C=O no N, é Amina.',
      trapAlert: 'Marcar álcool quando a hidroxila está ligada diretamente no anel aromático.'
    }
  }
];
