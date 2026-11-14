import { Question } from '../../types';

export const enem2025NaturezaPart1: Question[] = [
  // QUESTÃO 91 - FÍSICA
  {
    id: 'enem2025-91',
    subject: 'fisica',
    topic: 'Termologia / Propagação de Calor',
    source: 'ENEM 2025 • Q91 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Questão Clássica de Propagação de Calor',
    context: 'TEXTO I: "As mariposa, quando chega o frio / Fica dando volta em volta da lâmpida pra se esquentá. [sic]" (Adoniran Barbosa).\nTEXTO II: As mariposas se aproximam das lâmpadas atraídas pela luz, pois, sendo basicamente criaturas noturnas, estão adaptadas a seguir o brilho da lua, em um processo conhecido como orientação transversal. De fato, o calor gerado pelas lâmpadas, sobretudo as incandescentes, pode aquecer as mariposas.',
    question: 'Nesse contexto, o processo de transferência de calor para as mariposas que independe da presença de fluidos é a',
    options: [
      { letter: 'A', text: 'reflexão.' },
      { letter: 'B', text: 'refração.' },
      { letter: 'C', text: 'irradiação.' },
      { letter: 'D', text: 'dispersão.' },
      { letter: 'E', text: 'convecção.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Falou em transferência de calor que INDEPENDE de meio material ou de fluidos (propaga até no vácuo por ondas eletromagnéticas/infravermelho)? É IRRADIAÇÃO (ou radiação térmica)!',
      stepByStep: [
        '1. Existem 3 processos de transferência de calor: condução, convecção e irradiação.',
        '2. A convecção depende do movimento de massas de fluidos (ar/água).',
        '3. A irradiação ocorre por ondas eletromagnéticas (infravermelho) e independe de fluidos.'
      ],
      timeSaverTip: 'Viu "transferência de calor sem depender de meio/fluido"? Marque Irradiação em 5 segundos.',
      trapAlert: 'Reflexão, refração e dispersão são fenômenos ópticos/ondulatórios, não processos de transmissão de calor; e convecção exige fluido.'
    }
  },
  // QUESTÃO 92 - BIOLOGIA
  {
    id: 'enem2025-92',
    subject: 'biologia',
    topic: 'Ecologia / Cadeia Alimentar e Bioacumulação',
    source: 'ENEM 2025 • Q92 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Os sapinhos-ponta-de-flecha constituem um grupo de espécies encontradas na América Central e do Sul. Seus venenos são obtidos por meio do consumo de algumas formigas e cupins que se alimentam de plantas que contêm esses venenos. Esses anfíbios são usados para envenenar as flechas das zarabatanas dos caçadores nativos. Quando capturados e criados em condições artificiais, ou quando nascidos em cativeiro, não são tóxicos.',
    question: 'A perda da capacidade de se obter a toxina nos nascidos em cativeiro é causada pela',
    options: [
      { letter: 'A', text: 'diferença de umidade entre os ambientes.' },
      { letter: 'B', text: 'ausência de alimentação natural.' },
      { letter: 'C', text: 'adaptação ao novo ambiente.' },
      { letter: 'D', text: 'mudança de comportamento.' },
      { letter: 'E', text: 'variabilidade genética.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: O próprio texto entrega a resposta! "Seus venenos são obtidos por meio do consumo de algumas formigas e cupins...". Em cativeiro eles não comem essas formigas e cupins naturais!',
      stepByStep: [
        '1. Os sapos não sintetizam a toxina do zero; eles a sequestram da dieta (formigas e cupins que comem plantas tóxicas).',
        '2. Em cativeiro, a dieta é artificial (grilos/moscas de laboratório), logo falta a fonte alimentar da toxina.'
      ],
      timeSaverTip: 'Em Biologia no ENEM, sempre verifique se o próprio enunciado já declarou a causa antes de pensar em genética.',
      trapAlert: 'Marcar "adaptação" ou "variabilidade genética" por achar que houve evolução rápida em uma geração.'
    }
  },
  // QUESTÃO 93 - BIOLOGIA
  {
    id: 'enem2025-93',
    subject: 'biologia',
    topic: 'Imunologia / Vacinas e Imunização Ativa',
    source: 'ENEM 2025 • Q93 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Top 1 Imunologia: Mecanismo das Vacinas',
    context: 'A produção de vacinas exige uma sequência de procedimentos, além do cumprimento estrito de verificações de segurança. No esquema, estão demonstradas as etapas básicas realizadas para a fabricação de uma vacina utilizando a tecnologia tradicional e o efeito dela no organismo.',
    imageUrl: '/enem2025/q93.png',
    question: 'O antígeno utilizado na vacina causa um efeito protetor contra o vírus porque',
    options: [
      { letter: 'A', text: 'mata o vírus pela ligação.' },
      { letter: 'B', text: 'aglutina o vírus por associação.' },
      { letter: 'C', text: 'contém imunoglobulinas de defesa.' },
      { letter: 'D', text: 'induz a produção de proteínas neutralizadoras.' },
      { letter: 'E', text: 'mantém a quantidade de anticorpos preexistentes.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: VACINA = CONTÉM ANTÍGENO -> INDUZ O CORPO A PRODUZIR ANTICORPOS (proteínas neutralizadoras / imunoglobulinas)! Quem já vem com imunoglobulinas prontas (letra C) é o SORO!',
      stepByStep: [
        '1. O vírus inativado funciona como antígeno (corpo estranho inofensivo).',
        '2. O sistema imune reconhece o antígeno e ativa linfócitos B.',
        '3. Os linfócitos B diferenciam-se em plasmócitos e produzem anticorpos (proteínas neutralizadoras) e células de memória.'
      ],
      timeSaverTip: 'Vacina = Estimula/Induz produção de anticorpos (proteínas de defesa). Soro = Já contém anticorpos prontos.',
      trapAlert: 'A letra C ("contém imunoglobulinas") descreve o SORO, não a vacina!'
    }
  },
  // QUESTÃO 94 - BIOLOGIA
  {
    id: 'enem2025-94',
    subject: 'biologia',
    topic: 'Ecologia / Espécies Exóticas Invasoras',
    source: 'ENEM 2025 • Q94 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'O bioma Cerrado é caracterizado por apresentar ampla e natural diversidade de espécies vegetais. Nos últimos tempos, o homem vem modificando esse cenário pela inserção de plantas exóticas nesse ambiente. Exemplo disso é o cultivo do capim-gordura, nativo do continente africano e utilizado nesse tipo de ecossistema como forma de pastagem. É importante ressaltar que essa espécie vegetal é capaz de se espalhar por grandes áreas, devido à sua agressividade e poder competitivo.',
    question: 'Em longo prazo, essa ação do homem pode gerar qual consequência?',
    options: [
      { letter: 'A', text: 'Diversificar nichos ecológicos.' },
      { letter: 'B', text: 'Assorear as nascentes do bioma.' },
      { letter: 'C', text: 'Dificultar a infiltração de água na terra.' },
      { letter: 'D', text: 'Diminuir as espécies nativas do bioma.' },
      { letter: 'E', text: 'Contribuir com a redução das queimadas.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: ESPÉCIE EXÓTICA INVASORA + ALTO PODER COMPETITIVO = Expulsa e extingue as espécies locais (DIMINUI AS ESPÉCIES NATIVAS / perda de biodiversidade)!',
      stepByStep: [
        '1. O capim-gordura é uma espécie exótica invasora sem predadores/competidores à altura.',
        '2. Pelo princípio da exclusão competitiva de Gause, sua agressividade suprime a vegetação original.',
        '3. Consequência direta: redução da biodiversidade de espécies nativas do Cerrado.'
      ],
      timeSaverTip: 'Caiu espécie exótica no ENEM? A resposta é sempre competição com nativas e perda de biodiversidade nativa.',
      trapAlert: 'O capim-gordura na verdade aumenta o risco de queimadas (e não reduz, como diz a E).'
    }
  },
  // QUESTÃO 95 - BIOLOGIA
  {
    id: 'enem2025-95',
    subject: 'biologia',
    topic: 'Ecologia / Biomas Brasileiros e Convergência Adaptativa',
    source: 'ENEM 2025 • Q95 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'O monstro de gila, um lagarto encontrado em um deserto dos Estados Unidos, apresenta adaptações à falta de alimento nesse ambiente. Esse lagarto possui um hormônio que controla os níveis de açúcar em seu próprio sangue. Foi observado que esse hormônio também controla os níveis de açúcar no sangue de pessoas diabéticas.',
    question: 'Considerando que animais de um mesmo grupo taxonômico podem apresentar características adaptativas semelhantes em ambientes similares, onde seria mais provável encontrar lagartos com essas características no território brasileiro?',
    options: [
      { letter: 'A', text: 'Cerrado.' },
      { letter: 'B', text: 'Pampas.' },
      { letter: 'C', text: 'Caatinga.' },
      { letter: 'D', text: 'Restinga.' },
      { letter: 'E', text: 'Pantanal.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: "Encontrado em um DESERTO dos EUA... em ambientes similares no Brasil". Qual é o bioma brasileiro semiárido/desértico com escassez extrema de chuva e alimento? CAATINGA!',
      stepByStep: [
        '1. O monstro de gila vive em ambiente árido/desértico.',
        '2. Por convergência/semelhança adaptativa em clima seco, o bioma brasileiro análogo ao deserto é a Caatinga (clima semiárido).'
      ],
      timeSaverTip: 'Deserto / Clima Árido / Xeromorfismo no Brasil = Caatinga.',
      trapAlert: 'Confundir com o Cerrado (que é savânico tropical com estação chuvosa bem definida e lençol freático profundo).'
    }
  },
  // QUESTÃO 96 - QUÍMICA
  {
    id: 'enem2025-96',
    subject: 'quimica',
    topic: 'Química Geral / Separação de Misturas e Tratamento da Água',
    source: 'ENEM 2025 • Q96 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Existe um processo de purificação de água em que são removidos os sais dissolvidos. A água que passa por esse processo é muito utilizada em laboratórios de química, em indústrias (como solvente), em baterias de carros etc. Entretanto, esse tipo de água não é adequado para ingestão, pois pode causar problemas de saúde, como carência iônica e diarreia.',
    question: 'Essa água é chamada de',
    options: [
      { letter: 'A', text: 'dura.' },
      { letter: 'B', text: 'pesada.' },
      { letter: 'C', text: 'sanitária.' },
      { letter: 'D', text: 'destilada.' },
      { letter: 'E', text: 'oxigenada.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Água pura de laboratório sem sais dissolvidos (hipotônica) = ÁGUA DESTILADA (obtida por destilação simples)!',
      stepByStep: [
        '1. A destilação simples ferve a água e condensa o vapor puro, deixando todos os sais minerais para trás.',
        '2. Essa água sem íons é a água destilada (ou deionizada).',
        '3. Água dura tem excesso de Ca²⁺ e Mg²⁺; água pesada é D₂O (deutério); água sanitária é NaClO; oxigenada é H₂O₂.'
      ],
      timeSaverTip: 'Água sem sais usada em laboratório e baterias = Destilada.',
      trapAlert: 'Confundir com água dura (que é justamente o oposto: rica em sais de cálcio e magnésio).'
    }
  },
  // QUESTÃO 97 - BIOLOGIA / FÍSICA
  {
    id: 'enem2025-97',
    subject: 'biologia',
    topic: 'Fisiologia Humana e Óptica / Visão e Globo Ocular',
    source: 'ENEM 2025 • Q97 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Por que os olhos ficam vermelhos em algumas fotografias?\nEm fotos tiradas com câmeras fotográficas antigas, por vezes as pessoas aparecem com os olhos vermelhos. Isso ocorre porque a luz do flash da câmera incide diretamente no globo ocular, sendo refletida por uma região repleta de vasos sanguíneos.',
    question: 'Esse efeito é mais comum à noite ou em lugares pouco iluminados porque, com a pupila',
    options: [
      { letter: 'A', text: 'dilatada, chega mais luz à retina.' },
      { letter: 'B', text: 'retraída, chega mais luz vermelha à retina.' },
      { letter: 'C', text: 'retraída, chega mais luz vermelha aos bastonetes.' },
      { letter: 'D', text: 'retraída, chegam menos luzes azul e verde aos cones.' },
      { letter: 'E', text: 'dilatada, chegam menos luzes azul e verde aos bastonetes.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: No escuro/noite a pupila DILATA (midríase) para deixar entrar mais luz! Com a pupila aberta, o clarão do flash entra em cheio, bate no fundo do olho (retina/coroide cheia de sangue) e reflete vermelho!',
      stepByStep: [
        '1. Em ambientes pouco iluminados, a íris relaxa e a pupila fica dilatada.',
        '2. Com a pupila dilatada, uma quantidade muito maior de luz do flash chega ao fundo do olho (retina) e é refletida pelos vasos sanguíneos.'
      ],
      timeSaverTip: 'Escuro = Pupila Dilatada (eliminava B, C e D na hora!). Mais abertura = chega mais luz (A).',
      trapAlert: 'Achar que a pupila retrai (contrai) no escuro.'
    }
  },
  // QUESTÃO 98 - BIOLOGIA
  {
    id: 'enem2025-98',
    subject: 'biologia',
    topic: 'Fisiologia e Bioquímica / Toxinas e Termoestabilidade',
    source: 'ENEM 2025 • Q98 (Caderno 5 Amarelo)',
    difficulty: 2,
    context: 'O sashimi (filé de peixe cru) de baiacu é uma iguaria muito apreciada no Japão. Entretanto, sua ingestão pode causar a morte por parada respiratória, pois esse peixe contém uma potente neurotoxina termoestável, a tetrodotoxina, que é produzida e armazenada nas gônadas e vísceras.',
    question: 'Que ação poderia evitar essa intoxicação?',
    options: [
      { letter: 'A', text: 'Criar os peixes em cativeiro.' },
      { letter: 'B', text: 'Realizar a pesca com redes.' },
      { letter: 'C', text: 'Consumir peixes cozidos ou fritos.' },
      { letter: 'D', text: 'Preparar o peixe em condições adequadas de higiene.' },
      { letter: 'E', text: 'Manusear o peixe sem provocar o rompimento dos órgãos internos.' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Preste atenção em duas palavras do texto: 1) "termoestável" (não adianta cozinhar/fritar, o calor não destrói!); 2) "armazenada nas gônadas e vísceras". Logo, para comer o filé (músculo) sem morrer, o chef precisa limpar o peixe SEM ROMPER OS ÓRGÃOS INTERNOS!',
      stepByStep: [
        '1. Como a toxina é termoestável, cozinhar ou fritar (C) não a inativa.',
        '2. Como não é sujeira microbiana externa, higiene simples (D) não remove a toxina endógena.',
        '3. Como a toxina fica restrita às vísceras e gônadas, cortar o filé sem perfurar os órgãos internos evita contaminar a carne.'
      ],
      timeSaverTip: 'Termoestável = resiste ao calor (elimina cozinhar/fritar).',
      trapAlert: 'Marcar a letra C (cozidos ou fritos) ignorando que o enunciado disse que a toxina é termoestável!'
    }
  },
  // QUESTÃO 99 - BIOLOGIA
  {
    id: 'enem2025-99',
    subject: 'biologia',
    topic: 'Citologia / Organelas Citoplasmáticas (Lisossomos)',
    source: 'ENEM 2025 • Q99 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Clássico Absoluto de Citologia: Organelas',
    context: 'A deficiência da enzima lipase ácida causa uma doença em que o portador apresenta células que não degradam colesterol esterificado nem triglicerídeos, resultando no depósito desses compostos em diversos órgãos, principalmente no fígado.',
    question: 'Essa doença resulta da insuficiência funcional de qual estrutura celular?',
    options: [
      { letter: 'A', text: 'Lisossomos.' },
      { letter: 'B', text: 'Ribossomos.' },
      { letter: 'C', text: 'Mitocôndrias.' },
      { letter: 'D', text: 'Peroxissomos.' },
      { letter: 'E', text: 'Retículo endoplasmático liso.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Falou em "enzima ÁCIDA" (hidrolase ácida) + "DEGRADAR / DIGESTÃO intracelular" + "doença de acúmulo/depósito"? É 100% LISOSSOMO!',
      stepByStep: [
        '1. Os lisossomos são bolsas repletas de enzimas hidrolases ácidas (como a lipase ácida) que operam em pH ~5.',
        '2. Sua função é a digestão intracelular (autofagia e heterofagia).',
        '3. A falta de uma enzima lisossômica gera doenças de depósito lisossômico.'
      ],
      timeSaverTip: 'Digestão celular / Enzima ácida = Lisossomo. Síntese de lipídios = REL. Síntese de proteínas = Ribossomo.',
      trapAlert: 'Marcar Retículo Endoplasmático Liso só porque leu "colesterol e triglicerídeos" (o REL fabrica lipídios, quem degrada em pH ácido é o Lisossomo!).'
    }
  },
  // QUESTÃO 100 - BIOLOGIA
  {
    id: 'enem2025-100',
    subject: 'biologia',
    topic: 'Ecologia / Ciclo do Carbono e Efeito Estufa',
    source: 'ENEM 2025 • Q100 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'A quantidade de CO₂ na atmosfera da Terra aumentou em 50%, e a temperatura está agora cerca de 1,2 °C mais quente em comparação ao século XIX... Na prática, os países precisam enfrentar as mudanças climáticas com ações mitigadoras, que reduzam tanto as emissões quanto os níveis de CO₂ na atmosfera.',
    question: 'Qual ação mitigadora auxilia na remoção desse gás presente na atmosfera, reduzindo seus níveis?',
    options: [
      { letter: 'A', text: 'Plantar mais árvores.' },
      { letter: 'B', text: 'Instalar mais usinas eólicas.' },
      { letter: 'C', text: 'Ampliar o uso de energia solar.' },
      { letter: 'D', text: 'Manter os combustíveis fósseis no solo.' },
      { letter: 'E', text: 'Produzir menos resíduos sólidos urbanos.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Cuidado com o comando! Ele pediu a ação que "auxilia na REMOÇÃO desse gás JÁ PRESENTE na atmosfera" (sequestro de carbono). Eólica, solar e manter fóssil no solo evitam emitir mais, mas quem REMOVE CO₂ do ar via fotossíntese é PLANTAR ÁRVORES!',
      stepByStep: [
        '1. As alternativas B, C, D e E reduzem novas emissões futuras, mas não retiram o CO₂ que já está no ar.',
        '2. O plantio de árvores (reflorestamento) retira ativamente o CO₂ atmosférico pela fotossíntese, fixando o carbono na biomassa vegetal.'
      ],
      timeSaverTip: 'Remover/Sequestrar CO₂ da atmosfera = Fotossíntese (Plantar árvores / Reflorestamento).',
      trapAlert: 'Marcar B, C ou D confundindo "deixar de emitir" com "remover o gás presente na atmosfera".'
    }
  },
  // QUESTÃO 101 - FÍSICA
  {
    id: 'enem2025-101',
    subject: 'fisica',
    topic: 'Ondulatória / Espectro Eletromagnético (v = λ · f)',
    source: 'ENEM 2025 • Q101 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Relação Inversa entre Frequência e Comprimento de Onda',
    context: 'A icterícia é uma doença que acomete recém-nascidos e pode ser tratada com um método de fototerapia conhecido como banho de luz... Com o passar do tempo, essa radiação oxida os materiais do sensor, alterando sua coloração de vermelho-laranja para verde, o que indica o final do tratamento.\nO gráfico apresenta o espectro de fotoluminescência do sensor em função do comprimento de onda da luz emitida no início do tratamento (∼600 nm). A Figura 2 mostra que a frequência da luz emitida por ele aumenta em função do tempo de exposição à luz azul.',
    imageUrl: '/enem2025/q101.png',
    question: 'Os espectros de fotoluminescência do sensor no início e no final do tratamento estão esboçados no gráfico:',
    options: [
      { letter: 'A', text: 'Gráfico A (pico deslocado para a esquerda, em menor comprimento de onda ~550 nm)', imageUrl: '/enem2025/q101_A.png' },
      { letter: 'B', text: 'Gráfico B (pico deslocado para a direita, em maior comprimento de onda ~650 nm)', imageUrl: '/enem2025/q101_B.png' },
      { letter: 'C', text: 'Gráfico C (pico no mesmo comprimento de onda 600 nm, menor intensidade)', imageUrl: '/enem2025/q101_C.png' },
      { letter: 'D', text: 'Gráfico D (pico no mesmo comprimento de onda 600 nm, maior intensidade)', imageUrl: '/enem2025/q101_D.png' },
      { letter: 'E', text: 'Gráfico E (curva idêntica sobreposta)', imageUrl: '/enem2025/q101_E.png' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Como c = λ · f, frequência (f) e comprimento de onda (λ) são INVERSAMENTE PROPORCIONAIS! A Figura 2 diz que a FREQUÊNCIA AUMENTA no final do tratamento. Se a frequência AUMENTA, o comprimento de onda DIMINUI (vai de 600 nm para ~550 nm, deslocando o pico tracejado para a ESQUERDA)! Gráfico A!',
      stepByStep: [
        '1. No início, o pico (linha contínua) está em 600 nm (vermelho-laranja).',
        '2. Ao final (12 h), a luz passa para verde e a Figura 2 mostra que a frequência aumentou.',
        '3. Pela equação v = λ · f, maior frequência significa menor comprimento de onda (λ < 600 nm).',
        '4. Portanto, a curva pontilhada ("No final do tratamento") deve ter seu pico deslocado para a esquerda (em torno de 550 nm), o que ocorre exclusivamente na alternativa A.'
      ],
      timeSaverTip: 'Frequência subiu -> Comprimento de onda caiu -> Pico anda para a esquerda no eixo X!',
      trapAlert: 'Achar que aumento de frequência desloca o gráfico de comprimento de onda para a direita (B).'
    }
  },
  // QUESTÃO 102 - BIOLOGIA
  {
    id: 'enem2025-102',
    subject: 'biologia',
    topic: 'Genética / Herança Ligada ao Sexo',
    source: 'ENEM 2025 • Q102 (Caderno 5 Amarelo)',
    difficulty: 3,
    context: 'A figura apresenta a herança genética de uma característica a partir do cruzamento de insetos de uma mesma espécie.',
    imageUrl: '/enem2025/q102.png',
    question: 'Qual alternativa representa a proporção fenotípica da prole resultante do cruzamento entre indivíduos da primeira geração?',
    options: [
      { letter: 'A', text: 'Todos os 4 indivíduos com 4 pintas.', imageUrl: '/enem2025/q102_A.png' },
      { letter: 'B', text: 'Todos os 4 indivíduos sem pintas.', imageUrl: '/enem2025/q102_B.png' },
      { letter: 'C', text: 'Todos os 4 indivíduos com 6 pintas.', imageUrl: '/enem2025/q102_C.png' },
      { letter: 'D', text: '3 indivíduos com 4 pintas e 1 sem pintas.', imageUrl: '/enem2025/q102_D.png' },
      { letter: 'E', text: '1 com 4 pintas, 1 sem pintas e 2 com 6 pintas.', imageUrl: '/enem2025/q102_E.png' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Olhe os pais e a 1ª geração (F1): Pai (4 pintas) × Mãe (0 pintas) gerou F1 com 6 pintas (fenótipo intermediário = CODOMINÂNCIA / Dominância Incompleta!). Cruzando dois heterozigotos de F1 (6 pintas × 6 pintas), a F2 terá proporção 1 : 2 : 1 -> 1 com 4 pintas, 1 sem pintas e 2 com 6 pintas! Alternativa E!',
      stepByStep: [
        '1. Parental: Macho de 4 pintas (A¹A¹) × Fêmea de 0 pintas (A²A²).',
        '2. Primeira geração (F1): Todos têm 6 pintas (A¹A²), caracterizando herança sem dominância (intermediária).',
        '3. Cruzando F1 × F1 (A¹A² × A¹A²): obtém-se 1/4 A¹A¹ (4 pintas), 2/4 A¹A² (6 pintas) e 1/4 A²A² (0 pintas).',
        '4. Em 4 indivíduos representados: 1 de 4 pintas, 1 sem pintas e 2 de 6 pintas (Alternativa E).'
      ],
      timeSaverTip: 'Filho diferente de ambos os pais puros = Herança Intermediária/Codominância -> F2 sempre dá 1 : 2 : 1 (os 3 fenótipos aparecem na prole!).',
      trapAlert: 'Pensar em 1ª Lei de Mendel com dominância completa e marcar 3:1 (letra D).'
    }
  },
  // QUESTÃO 103 - FÍSICA
  {
    id: 'enem2025-103',
    subject: 'fisica',
    topic: 'Mecânica / Dinâmica e Força de Atrito no Plano Inclinado',
    source: 'ENEM 2025 • Q103 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Pegadinha Clássica de Atrito Cinético',
    context: 'Para transportar uma caixa do primeiro para o segundo piso de uma construção, um trabalhador precisará arrastá-la sobre um plano inclinado. O trabalhador começa a arrastar a caixa no primeiro piso, exercendo sobre ela uma força de grande intensidade, paralela ao seu deslocamento. Na medida em que a caixa sobe o plano inclinado, ele decide reduzir a força sobre ela, arrastando-a lentamente até chegar ao segundo piso. Considere que a caixa permanece em movimento nos encontros dos pisos com o plano inclinado, e que a rugosidade entre as superfícies permanece a mesma durante todo o percurso.',
    question: 'O comportamento da força de atrito entre a caixa e o chão no plano inclinado é representado em:',
    options: [
      { letter: 'A', text: 'Gráfico A', imageUrl: '/enem2025/q103_A.png' },
      { letter: 'B', text: 'Gráfico B', imageUrl: '/enem2025/q103_B.png' },
      { letter: 'C', text: 'Gráfico C (Força de atrito constante durante toda a subida no plano inclinado)', imageUrl: '/enem2025/q103_C.png' },
      { letter: 'D', text: 'Gráfico D', imageUrl: '/enem2025/q103_D.png' },
      { letter: 'E', text: 'Gráfico E', imageUrl: '/enem2025/q103_E.png' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: PEGADINHA CLÁSSICA! A pergunta pede o atrito "NO PLANO INCLINADO" enquanto a caixa está em movimento (atrito cinético). A força de atrito cinético é Fat = μc · N = μc · m · g · cos(θ). Ela NÃO depende da força que o trabalhador faz nem da velocidade! Como μc e a inclinação θ do plano são constantes, o atrito no plano inclinado é CONSTANTE (linha reta horizontal)! Gráfico C!',
      stepByStep: [
        '1. Enquanto a caixa desliza sobre o plano inclinado, atua o atrito cinético (dinâmico): Fat = μ · N.',
        '2. No plano inclinado de ângulo θ constante, a força normal é N = P · cos(θ) = constante.',
        '3. Mesmo o trabalhador reduzindo a força paralela ao plano, a Normal e o coeficiente de atrito não mudam.',
        '4. Logo, a força de atrito no plano inclinado permanece constante em função do tempo (Alternativa C).'
      ],
      timeSaverTip: 'Atrito cinético (em movimento) só depende de μ e da Normal (N). Não depende da força de puxar nem da velocidade!',
      trapAlert: 'Achar que porque o trabalhador reduziu a força de puxar, a força de atrito também cairia (D ou E).'
    }
  },
  // QUESTÃO 104 - FÍSICA
  {
    id: 'enem2025-104',
    subject: 'fisica',
    topic: 'Eletrostática / Força Elétrica sobre Cargas em Campo Uniforme',
    source: 'ENEM 2025 • Q104 (Caderno 5 Amarelo)',
    difficulty: 2,
    context: 'A Figura 1 apresenta o esquema de um tubo de imagem em que um filamento, na posição A, libera elétrons por efeito termiônico. Esses elétrons formam um feixe estreito, que é acelerado por campos elétricos em direção à parte interna da tela. Nesse caminho, o feixe de elétrons passa por outro campo elétrico, na região B, atingindo, em seguida, a parte interna da tela do tubo.\nNa Figura 2, a carga negativa representa o feixe de elétrons que é acelerado e, posteriormente, atinge um ponto da tela. O campo elétrico na região B apresenta a seguinte configuração (setas apontando para cima):',
    imageUrl: '/enem2025/q104_1.png',
    secondaryImageUrl: '/enem2025/q104_2.png',
    question: 'Nessa situação, qual ponto da tela será atingido pelo feixe de elétrons?',
    options: [
      { letter: 'A', text: '1' },
      { letter: 'B', text: '2' },
      { letter: 'C', text: '3' },
      { letter: 'D', text: '4' },
      { letter: 'E', text: '5' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: ELÉTRON TEM CARGA NEGATIVA (q < 0)! Carga negativa sofre força elétrica no SENTIDO OPOSTO ao campo elétrico (F = q · E)! Na Figura 2, o campo elétrico E aponta para CIMA. Logo, a força no elétron aponta para BAIXO, desviando o feixe para a parte inferior da tela: PONTO 2!',
      stepByStep: [
        '1. O vetor campo elétrico E na região B aponta verticalmente para cima.',
        '2. Como o feixe é de elétrons (carga negativa), a força elétrica F = q · E atua em sentido contrário ao campo E, isto é, verticalmente para baixo.',
        '3. O feixe sofre deflexão para baixo e atinge o ponto 2 na parte inferior da tela.'
      ],
      timeSaverTip: 'Carga Positiva vai a favor do campo E; Carga Negativa (elétron) vai CONTRA o campo E!',
      trapAlert: 'Marcar o ponto 1 (para cima) esquecendo que o elétron tem carga negativa.'
    }
  },
  // QUESTÃO 105 - FÍSICA
  {
    id: 'enem2025-105',
    subject: 'fisica',
    topic: 'Ondulatória / Acústica e Ressonância',
    source: 'ENEM 2025 • Q105 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Clássico de Ondulatória: Quebra de Taça de Cristal',
    context: 'A tirinha ilustra um processo físico em que uma onda sonora, produzida pela Mônica, causa a quebra das taças de cristal. O fenômeno ondulatório que provoca a quebra das taças só é possível em razão de uma característica da voz produzida pela Mônica naquele momento, que, diferentemente do que sugere a tirinha, não está relacionada à sua intensidade.',
    imageUrl: '/enem2025/q105.png',
    question: 'Esse fenômeno e a característica associada à voz da Mônica são, respectivamente,',
    options: [
      { letter: 'A', text: 'reflexão e comprimento de onda.' },
      { letter: 'B', text: 'ressonância e frequência.' },
      { letter: 'C', text: 'interferência e velocidade.' },
      { letter: 'D', text: 'ressonância e timbre.' },
      { letter: 'E', text: 'reflexão e amplitude.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Quebrar taça de cristal no grito = RESSONÂNCIA! E a ressonância ocorre quando a onda sonora tem exatamente a mesma FREQUÊNCIA natural de vibração do cristal! "Ressonância e frequência" (B)!',
      stepByStep: [
        '1. Todo corpo elástico (como a taça de cristal) possui uma frequência natural de vibração.',
        '2. Quando uma onda sonora externa incide com a mesma frequência natural da taça, ocorre transferência máxima de energia: fenômeno da Ressonância.',
        '3. A característica fisiológica/física determinante é a frequência (altura do som).'
      ],
      timeSaverTip: 'Quebra de taça / Ponte caindo com vento = Ressonância + Frequência igual!',
      trapAlert: 'Confundir frequência com timbre (D) na hora de marcar a dupla.'
    }
  },
  // QUESTÃO 106 - QUÍMICA
  {
    id: 'enem2025-106',
    subject: 'quimica',
    topic: 'Química Orgânica / Fórmulas Moleculares e Oxidação de Álcoois',
    source: 'ENEM 2025 • Q106 (Caderno 5 Amarelo)',
    difficulty: 2,
    context: 'Em uma aula prática de química orgânica, um professor identificou os frascos de várias substâncias apenas por suas fórmulas moleculares. Em seguida, apresentou a representação tridimensional da molécula do borneol, um álcool secundário, conforme a figura. Ele explicou que, quando oxidado, o borneol dá origem à cânfora, uma cetona usada desde a Antiguidade como incenso e no preparo de medicamentos.',
    imageUrl: '/enem2025/q106.png',
    question: 'O frasco contendo cânfora apresenta a fórmula molecular:',
    options: [
      { letter: 'A', text: 'C₉H₁₆O' },
      { letter: 'B', text: 'C₉H₁₇O' },
      { letter: 'C', text: 'C₁₀H₁₆O' },
      { letter: 'D', text: 'C₁₀H₁₆O₂' },
      { letter: 'E', text: 'C₁₀H₁₈O₂' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Conte os carbonos do borneol: 6 no anel da base + 1 no topo da ponte + 3 metilas (CH₃) = 10 CARBONOS (elimina A e B!). A cânfora é uma CETONA (tem apenas 1 oxigênio C=O, o que elimina D e E que têm O₂!). Sobrou apenas C₁₀H₁₆O (Alternativa C) sem precisar contar os hidrogênios!',
      stepByStep: [
        '1. Contando os carbonos: o esqueleto bicíclico tem 7 carbonos + 3 grupos metila (-CH₃) = 10 carbonos (C₁₀).',
        '2. Oxidação de álcool secundário (-CH-OH) a cetona (-C=O): mantém apenas 1 átomo de oxigênio (O) e perde 2 hidrogênios.',
        '3. Olhando as opções com C₁₀ e apenas um O, a única existente é C₁₀H₁₆O (letra C)!'
      ],
      timeSaverTip: 'Em questões de fórmula molecular no ENEM, conte primeiro Carbonos e Oxigênios e olhe as alternativas: quase sempre já mata a questão sem contar os Hidrogênios!',
      trapAlert: 'Achar que oxidar um álcool secundário adiciona mais um oxigênio na molécula (quem ganha oxigênio é aldeído virando ácido carboxílico).'
    }
  },
  // QUESTÃO 107 - QUÍMICA / BIOLOGIA
  {
    id: 'enem2025-107',
    subject: 'quimica',
    topic: 'Físico-Química e Ecologia / Solubilidade de Gases e Poluição Térmica',
    source: 'ENEM 2025 • Q107 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Poluição Térmica e Solubilidade do O₂ na Água',
    context: 'As usinas termonucleares são aquelas que produzem energia elétrica a partir da geração de energia térmica proveniente das reações nucleares... Durante a operação da usina, se o sistema de água de refrigeração funcionar de forma ineficiente pode causar poluição térmica, comprometendo a vida no ecossistema aquático.',
    imageUrl: '/enem2025/q107.png',
    question: 'Para o ecossistema aquático, a ineficiência do sistema de água de refrigeração tem como consequência a',
    options: [
      { letter: 'A', text: 'diminuição do pH.' },
      { letter: 'B', text: 'liberação de gases poluentes.' },
      { letter: 'C', text: 'contaminação por combustíveis.' },
      { letter: 'D', text: 'liberação de elementos radioativos.' },
      { letter: 'E', text: 'diminuição da solubilidade do gás oxigênio.' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: POLUIÇÃO TÉRMICA = ÁGUA MAIS QUENTE! E quando a temperatura da água AUMENTA, a solubilidade dos gases (como o O₂) DIMINUI (os gases escapam da água e os peixes morrem asfixiados)!',
      stepByStep: [
        '1. A água do circuito terciário de refrigeração não tem contato com o material radioativo (que fica confinado no circuito primário).',
        '2. O problema citado é a poluição térmica (devolução de água aquecida ao rio/mar).',
        '3. A dissolução de gases em líquidos é exotérmica: aumentar a temperatura reduz a solubilidade do gás oxigênio (O₂) na água.'
      ],
      timeSaverTip: 'Pense no refrigerante quente: o gás vai embora rápido! Água quente = menos O₂ dissolvido.',
      trapAlert: 'Marcar "liberação de elementos radioativos" (D) por ver uma usina nuclear (o circuito de refrigeração é isolado do reator!).'
    }
  },
  // QUESTÃO 108 - QUÍMICA
  {
    id: 'enem2025-108',
    subject: 'quimica',
    topic: 'Química Inorgânica / Fórmulas de Ácidos e Sais',
    source: 'ENEM 2025 • Q108 (Caderno 5 Amarelo)',
    difficulty: 2,
    context: 'No início do século XX, as fórmulas das substâncias eram representadas de modo diferente do atual. A figura apresenta uma fotografia bem antiga (1909) que registra uma aula de química ministrada em um colégio em Santos (SP).\nO nitrogênio era chamado de azoto e representado pelo símbolo Az. Vê-se na lousa a equação representativa da adição do oxigênio atômico (O) ao monóxido de nitrogênio (AzO) com a formação de dióxido de nitrogênio (AzO²). Analogamente, o nitrato de sódio era representado por NaAzO³.',
    imageUrl: '/enem2025/q108.png',
    question: 'Em 1909, as representações das substâncias ácido nítrico e cloreto de cálcio, tendo por base essas informações e seguindo a mesma lógica, seriam, respectivamente:',
    options: [
      { letter: 'A', text: 'HAzO³ e CaCl²' },
      { letter: 'B', text: 'HAz³O e Ca²Cl' },
      { letter: 'C', text: 'H³AzO⁴ e CaCl' },
      { letter: 'D', text: 'HAz³O e KCl²' },
      { letter: 'E', text: 'HAzO² e KCl' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Na notação de 1909, o índice ficava SOBRESCRITO (em cima) e o Nitrogênio (N) era Az! O texto já deu de bandeja: nitrato de sódio = NaAzO³. Logo, ácido nítrico (HNO₃) é só trocar Na por H: HAzO³! E cloreto de cálcio (CaCl₂) é CaCl²! Alternativa A!',
      stepByStep: [
        '1. Ácido nítrico atual é HNO₃ (vem do íon nitrato NO₃⁻, que no texto foi dado em NaAzO³). Substituindo Na⁺ por H⁺: HAzO³.',
        '2. Cloreto de cálcio: Cálcio é família 2A (Ca²⁺) e Cloro é 7A (Cl⁻), formando CaCl₂ (na lousa de 1909 até aparece MgCl²!). Logo: CaCl².'
      ],
      timeSaverTip: 'Olhe na lousa da imagem: a última linha mostra "MgCl²". Como Ca e Mg são da mesma família (2A), cloreto de cálcio tinha que ser CaCl² (única opção com CaCl² é a A!).',
      trapAlert: 'Confundir cloreto de cálcio (CaCl₂) com cloreto de potássio (KCl).'
    }
  },
  // QUESTÃO 109 - QUÍMICA
  {
    id: 'enem2025-109',
    subject: 'quimica',
    topic: 'Química Orgânica / Reações de Eliminação (Descarboxilação)',
    source: 'ENEM 2025 • Q109 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'O fruto do cajueiro é um aquênio repleto de um líquido escuro, quase preto, cáustico e inflamável. Esse líquido da casca da castanha do caju (LCC) representa aproximadamente 25% da massa da castanha... Quando submetido a altas temperaturas, o ácido anacárdico presente no LCC é convertido a cardanol, que recebe a denominação de LCC técnico, conforme o esquema:',
    imageUrl: '/enem2025/q109.png',
    question: 'O LCC técnico é produzido por meio de uma reação orgânica do tipo',
    options: [
      { letter: 'A', text: 'hidrólise.' },
      { letter: 'B', text: 'fenilação.' },
      { letter: 'C', text: 'esterificação.' },
      { letter: 'D', text: 'hidrogenação.' },
      { letter: 'E', text: 'descarboxilação.' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Olhe para a equação na figura: o grupo carboxila (-COOH) sumiu do anel aromático e saiu como "+ CO₂"! Perder carboxila na forma de CO₂ = DESCARBOXILAÇÃO!',
      stepByStep: [
        '1. O reagente (ácido anacárdico) possui uma hidroxila (-OH), uma cadeia C₁₅H₃₁ e uma carboxila (-C(=O)OH).',
        '2. Após o aquecimento (Δ), o produto (cardanol) perde o grupo carboxila, liberando gás carbônico (+ CO₂).',
        '3. A reação de eliminação do grupo carboxila como CO₂ chama-se descarboxilação.'
      ],
      timeSaverTip: 'Saiu "+ CO₂" de um ácido carboxílico? É Descarboxilação na hora!',
      trapAlert: 'Marcar hidrólise ou esterificação sem olhar que não há álcool nem água reagindo.'
    }
  },
  // QUESTÃO 110 - QUÍMICA
  {
    id: 'enem2025-110',
    subject: 'quimica',
    topic: 'Físico-Química / Radioatividade e Tempo de Meia-Vida',
    source: 'ENEM 2025 • Q110 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Conta Clássica de Meia-Vida (Cai Quase Todo Ano!)',
    context: 'A química nuclear é uma importante ferramenta na produção de substâncias utilizadas na área da saúde humana. A radiação emitida pelo cobalto-60 é utilizada na medicina como ferramenta de diagnóstico e no tratamento do câncer. No entanto, esse radioisótopo tem um tempo de armazenamento limitado, pois seu tempo de meia-vida é de 5,3 anos. Considere um frasco com uma amostra contendo 2,00 mg de cobalto-60, armazenado durante um período de 26,5 anos.',
    question: 'A massa de cobalto-60, em miligrama, que restará ao final desse tempo é mais próxima de',
    options: [
      { letter: 'A', text: '2,00 mg.' },
      { letter: 'B', text: '1,00 mg.' },
      { letter: 'C', text: '0,40 mg.' },
      { letter: 'D', text: '0,13 mg.' },
      { letter: 'E', text: '0,06 mg.' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Quantas meias-vidas de 5,3 anos cabem em 26,5 anos? 26,5 / 5,3 = 5 meias-vidas! Agora divida 2,00 mg por 2 cinco vezes: 2 -> 1 -> 0,5 -> 0,25 -> 0,125 -> 0,0625 mg ≈ 0,06 mg! Alternativa E!',
      stepByStep: [
        '1. Número de meias-vidas (n): 26,5 / 5,3 = 5 meias-vidas.',
        '2. Massa final: m = m₀ / 2⁵ = 2,00 / 32 = 1 / 16 = 0,0625 mg.',
        '3. Arredondando para duas casas decimais: 0,06 mg.'
      ],
      timeSaverTip: 'Para dividir 2 por 2 cinco vezes sem errar: na 1ª meia-vida vira 1; depois mais 4 divisões é 1/16 = 0,0625.',
      trapAlert: 'Parar na 4ª meia-vida e marcar 0,13 mg (D), ou simplesmente dividir 2,00 por 5 e marcar 0,40 mg (C)!'
    }
  },
  // QUESTÃO 111 - BIOLOGIA
  {
    id: 'enem2025-111',
    subject: 'biologia',
    topic: 'Ecologia / Impactos Ambientais, Biodigestores e Eutrofização',
    source: 'ENEM 2025 • Q111 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Campeão de Ecologia: Biodigestor e Eutrofização',
    context: 'O esquema apresenta as etapas do processo de biodigestão, uma forma de dar um destino sustentável a excrementos animais e restos de comida produzidos em áreas de criação de gado e porcos confinados.',
    imageUrl: '/enem2025/q111.png',
    question: 'Dar destino sustentável às sobras, conforme apresentado na etapa 4, ajuda a evitar a',
    options: [
      { letter: 'A', text: 'bioacumulação de toxinas em plantas.' },
      { letter: 'B', text: 'eutrofização dos corpos de água.' },
      { letter: 'C', text: 'destruição da camada de ozônio.' },
      { letter: 'D', text: 'ocorrência de inversão térmica.' },
      { letter: 'E', text: 'produção de chuva ácida.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Excrementos de porcos/gado e restos de comida são pura MATÉRIA ORGÂNICA e nutrientes (N e P)! Se jogados ou lixiviados nos rios, causam EUTROFIZAÇÃO! Ao usar as sobras estabilizadas como biofertilizante (etapa 4), evita-se a eutrofização dos corpos de água!',
      stepByStep: [
        '1. Dejetos animais são ricos em compostos nitrogenados e fosfatados.',
        '2. O descarte indevido desses efluentes em rios e lagos provoca a proliferação excessiva de algas e queda do oxigênio dissolvido (eutrofização).',
        '3. O uso controlado do biofertilizante na agricultura (etapa 4) recicla esses nutrientes e evita que cheguem aos corpos d\'água.'
      ],
      timeSaverTip: 'Dejetos de porcos/esgoto/fertilizante + Água = Eutrofização!',
      trapAlert: 'Confundir matéria orgânica biodegradável com metais pesados/pesticidas (que causam bioacumulação).'
    }
  },
  // QUESTÃO 112 - BIOLOGIA
  {
    id: 'enem2025-112',
    subject: 'biologia',
    topic: 'Bioquímica / Vitaminas e Hipovitaminoses',
    source: 'ENEM 2025 • Q112 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Golden Rice, ou arroz dourado, é uma variedade de arroz enriquecida em betacaroteno, precursor da vitamina A. Foi desenvolvida para ajudar a combater a doença decorrente da deficiência dessa vitamina. Para a obtenção dessa variedade de arroz, foram utilizados métodos de engenharia genética.',
    question: 'Esse alimento contribui para diminuir a carência associada a qual doença?',
    options: [
      { letter: 'A', text: 'Hemofilia.' },
      { letter: 'B', text: 'Escorbuto.' },
      { letter: 'C', text: 'Raquitismo.' },
      { letter: 'D', text: 'Cegueira noturna.' },
      { letter: 'E', text: 'Anemia perniciosa.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: DECOREBA CLÁSSICA DE VITAMINAS: Vitamina A (Retinol) = Visão / Retina = CEGUEIRA NOTURNA! (C = Escorbuto; D = Raquitismo; B12 = Anemia perniciosa; K = Coagulação; Hemofilia é genética).',
      stepByStep: [
        '1. O betacaroteno é convertido no organismo em Vitamina A (retinol).',
        '2. O retinol compõe a rodopsina nos bastonetes da retina, essencial para enxergar em ambientes com pouca luz.',
        '3. Sua carência causa cegueira noturna (hemeralopia) e xeroftalmia.'
      ],
      timeSaverTip: 'Vitamina A = Retinol = Retina = Cegueira Noturna.',
      trapAlert: 'Confundir cegueira noturna com escorbuto (Vitamina C) ou raquitismo (Vitamina D).'
    }
  }
];
