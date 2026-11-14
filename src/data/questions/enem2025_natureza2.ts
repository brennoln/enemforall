import { Question } from '../../types';

export const enem2025NaturezaPart2: Question[] = [
  // QUESTÃO 113 - FÍSICA
  {
    id: 'enem2025-113',
    subject: 'fisica',
    topic: 'Eletrodinâmica / Associação de Resistores e Divisor de Tensão',
    source: 'ENEM 2025 • Q113 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Campeão Absoluto de Física: Associação de Resistores',
    context: 'Considere um equipamento de resistência elétrica Rc que funciona corretamente apenas em um dado valor de tensão. Porém, a única fonte de alimentação disponível fornece uma tensão 20% superior à tensão recomendada. Para adaptar essa fonte ao aparelho, a associação de um resistor de proteção Rp, de potência adequada, se faz necessária.',
    question: 'A configuração adequada do circuito e o valor do resistor de proteção, em relação ao valor da resistência do equipamento, são:',
    options: [
      { letter: 'A', text: 'Em paralelo, com Rp = 0,2 Rc', imageUrl: '/enem2025/q113_A.png' },
      { letter: 'B', text: 'Em paralelo, com Rp = 1,2 Rc', imageUrl: '/enem2025/q113_B.png' },
      { letter: 'C', text: 'Em série, com Rp = 1,2 Rc', imageUrl: '/enem2025/q113_C.png' },
      { letter: 'D', text: 'Em série, com Rp = 2,2 Rc', imageUrl: '/enem2025/q113_D.png' },
      { letter: 'E', text: 'Em série, com Rp = 0,2 Rc', imageUrl: '/enem2025/q113_E.png' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1) Para DIVIDIR a tensão da fonte (tirar o excesso de 20%), os resistores DEVEM estar em SÉRIE (em paralelo a tensão fica igual, o que queima o aparelho -> elimina A e B na hora!). 2) Na série, como a corrente é a mesma (U = R·i), quem pega 20% da tensão precisa ter 20% da resistência (0,2 Rc)! Logo: Série com Rp = 0,2 Rc (Alternativa E)!',
      stepByStep: [
        '1. Em paralelo a tensão é a mesma em todos os ramos, logo Rp deve ser ligado em SÉRIE com Rc para absorver a tensão excedente.',
        '2. Se a tensão recomendada em Rc é V, a fonte fornece 1,2 V. Logo, Rp deve ficar com a diferença: 1,2 V - V = 0,2 V.',
        '3. Como estão em série (mesma corrente i): Vp / Vc = Rp / Rc => 0,2 V / V = Rp / Rc => Rp = 0,2 Rc (Alternativa E).'
      ],
      timeSaverTip: 'Reduzir tensão no aparelho = Resistor em SÉRIE. Excesso de 20% na tensão = Resistor de 20% (0,2 Rc).',
      trapAlert: 'Colocar em paralelo (A) achando que dividir a corrente reduziria a tensão da fonte ideal.'
    }
  },
  // QUESTÃO 114 - QUÍMICA
  {
    id: 'enem2025-114',
    subject: 'quimica',
    topic: 'Estequiometria / Cálculo Estequiométrico com Excesso',
    source: 'ENEM 2025 • Q114 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Estequiometria Clássica com Excesso de 10%',
    context: 'O Brasil é o maior produtor mundial de nióbio (massa molar = 93 g/mol), metal utilizado na fabricação de vários tipos de aço... O processo utilizado na produção do nióbio é a redução aluminotérmica de Nb₂O₅ com excesso de 10% de Al (massa molar = 27 g/mol), em relação à quantidade estequiométrica da reação:\n3 Nb₂O₅ (s) + 10 Al (s) → 6 Nb (s) + 5 Al₂O₃ (s)\nUma engenheira metalúrgica estimou a massa de alumínio necessária para produzir 9,3 kg de nióbio, nas condições descritas, considerando um rendimento de 100%.',
    question: 'A massa de alumínio, em quilograma, estimada pela engenheira é mais próxima de',
    options: [
      { letter: 'A', text: '2,7 kg.' },
      { letter: 'B', text: '3,0 kg.' },
      { letter: 'C', text: '4,1 kg.' },
      { letter: 'D', text: '4,5 kg.' },
      { letter: 'E', text: '5,0 kg.' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Olhe os números lindos: 9,3 kg de Nb (cuja massa molar é 93!). Na reação: 10 mols de Al (10 × 27 = 270 g) produzem 6 mols de Nb (6 × 93 g). Então, para produzir 1 × 93 (9,3 kg), a massa estequiométrica de Al é 270 / 6 = 45 (ou seja, 4,5 kg)! Como tem +10% de excesso: 4,5 kg + 0,45 kg = 4,95 kg ≈ 5,0 kg! Alternativa E!',
      stepByStep: [
        '1. Proporção em massa na equação: 10 mols Al (10 × 27 = 270 g) estão para 6 mols Nb (6 × 93 = 558 g).',
        '2. Para 9,3 kg de Nb: m(Al) = (270 × 9,3) / (6 × 93) = 27 / 6 = 4,5 kg de Al (quantidade estequiométrica).',
        '3. Com excesso de 10%: 4,5 kg × 1,10 = 4,95 kg ≈ 5,0 kg.'
      ],
      timeSaverTip: 'NUNCA multiplique 6 × 93! Deixe indicado "6 × 93" para cortar direto com o "9,3" do enunciado!',
      trapAlert: 'Esquecer de somar os 10% de excesso e marcar 4,5 kg (letra D — a maior pegadinha da prova!).'
    }
  },
  // QUESTÃO 115 - FÍSICA / MATEMÁTICA
  {
    id: 'enem2025-115',
    subject: 'fisica',
    topic: 'Ondulatória e Acústica / Nível Sonoro em Decibéis (Logaritmo)',
    source: 'ENEM 2025 • Q115 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Clássico de Acústica: Soma de Decibéis com Logaritmo',
    context: 'O nível sonoro, em decibel (dB), é calculado pela expressão: n = 10 · log₁₀(I / I₀).\nSupondo que, no centro de um estádio de futebol, foram realizadas medidas para avaliar o ruído médio de uma pessoa gritando a palavra "gol" em diferentes posições das arquibancadas. O valor médio obtido foi de 100 dB. Com esse dado, estimou-se o ruído sonoro produzido por 10 000 pessoas, distribuídas aleatoriamente nas arquibancadas, enquanto gritavam, simultaneamente, a palavra "gol".',
    question: 'O valor médio estimado para o ruído produzido por essas pessoas, na posição central desse estádio hipotético, foi de',
    options: [
      { letter: 'A', text: '60 dB.' },
      { letter: 'B', text: '104 dB.' },
      { letter: 'C', text: '140 dB.' },
      { letter: 'D', text: '400 dB.' },
      { letter: 'E', text: '800 dB.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: REGRA DE OURO DOS DECIBÉIS: Cada vez que a intensidade multiplica por 10, você SOMA +10 dB no nível sonoro! Como são 10.000 pessoas = 10⁴ vezes a intensidade de 1 pessoa, você soma 4 × 10 = +40 dB! 100 dB + 40 dB = 140 dB! Resolvida em 5 segundos!',
      stepByStep: [
        '1. Para 1 pessoa: n₁ = 10 · log₁₀(I / I₀) = 100 dB.',
        '2. Para 10.000 (10⁴) pessoas: I_total = 10⁴ · I.',
        '3. n_total = 10 · log₁₀(10⁴ · I / I₀) = 10 · [log₁₀(10⁴) + log₁₀(I / I₀)] = 10 · 4 + 100 = 40 + 100 = 140 dB.'
      ],
      timeSaverTip: 'Multiplicou a fonte por 10ⁿ? Some (10 × n) dB ao valor original! (10⁴ pessoas -> +40 dB).',
      trapAlert: 'Multiplicar 100 dB por 4 marcando 400 dB (D), ou somar apenas 4 marcando 104 dB (B).'
    }
  },
  // QUESTÃO 116 - QUÍMICA
  {
    id: 'enem2025-116',
    subject: 'quimica',
    topic: 'Química Geral / Polaridade, Surfactantes e Interações Intermoleculares',
    source: 'ENEM 2025 • Q116 (Caderno 5 Amarelo)',
    difficulty: 2,
    context: 'Pesquisadores desenvolveram um filtro capaz de separar óleo e água. O dispositivo é montado sobre uma malha de aço com uma sequência de camadas. A primeira camada é formada por um polímero de carga positiva, a segunda é composta por nanopartículas de sílica (SiO₂), a terceira é formada pelo mesmo polímero e a última é um surfactante, conforme apresentado na figura.',
    imageUrl: '/enem2025/q116.png',
    question: 'Na utilização desse dispositivo, a retenção do óleo ocorre',
    options: [
      { letter: 'A', text: 'no surfactante.' },
      { letter: 'B', text: 'na camada superior de polímero.' },
      { letter: 'C', text: 'nas nanopartículas de sílica.' },
      { letter: 'D', text: 'na camada inferior de polímero.' },
      { letter: 'E', text: 'na malha de aço.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Olhe a camada do topo na imagem: o SURFACTANTE tem caudas fluoradas (-CF₂-CF₃) no topo e cabeça iônica negativa (-SO₃⁻)! Além de ser a primeira camada de contato superior do revestimento superoleofóbico, o surfactante é quem controla a tensão superficial repelindo/retendo a passagem do óleo enquanto deixa a água passar pelas camadas iônicas/polares abaixo!',
      stepByStep: [
        '1. O óleo é apolar e o dispositivo é um filtro com revestimento superoleofóbico.',
        '2. As camadas inferiores (polímero carregado positivamente, sílica SiO₂ e malha) são altamente hidrofílicas/polares.',
        '3. A camada externa de surfactante fluorado barra a penetração do óleo (retenção do óleo ocorre no surfactante).'
      ],
      timeSaverTip: 'Falou em separação água/óleo ou detergente/petróleo no ENEM? O protagonista da interação com o óleo é sempre o Surfactante (tensoativo)!',
      trapAlert: 'Marcar a malha de aço (que é apenas o suporte mecânico poroso da base).'
    }
  },
  // QUESTÃO 117 - QUÍMICA
  {
    id: 'enem2025-117',
    subject: 'quimica',
    topic: 'Química Orgânica / Polaridade e Solubilidade em Água (Pontes de Hidrogênio)',
    source: 'ENEM 2025 • Q117 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Questão Clássica: Contar Hidroxilas (-OH) para Solubilidade!',
    context: 'Alguns hormônios sexuais têm ganhado notável atenção nos últimos anos por suas concentrações cada vez maiores no solo e na água em todo o mundo... De baixa polaridade, eles apresentam uma solubilidade pequena e variável em água, dependendo dos grupos presentes em suas estruturas. As figuras a seguir apresentam as estruturas de alguns desses hormônios.',
    imageUrl: '/enem2025/q117.png',
    question: 'Do ponto de vista das interações químicas, qual desses hormônios apresenta maior solubilidade em ambientes aquáticos?',
    options: [
      { letter: 'A', text: 'Estradiol.' },
      { letter: 'B', text: 'Estriol.' },
      { letter: 'C', text: 'Estrona.' },
      { letter: 'D', text: 'Novestrol.' },
      { letter: 'E', text: 'Noretindrona.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: MAIS GRUPOS -OH (HIDROXILA) = MAIS LIGAÇÕES DE HIDROGÊNIO = MAIOR SOLUBILIDADE EM ÁGUA! Conte os "-OH" nas figuras: Estradiol tem 2; ESTRIOL (tri-ol!) tem 3 grupos -OH; Estrona tem 1; Novestrol tem 2; Noretindrona tem 1. Quem tem 3 hidroxilas ganha disparado: ESTRIOL (B)!',
      stepByStep: [
        '1. A água é polar e realiza ligações de hidrogênio (H ligado a F, O, N).',
        '2. Todos os 5 hormônios têm esqueleto carbônico esteroidal parecido.',
        '3. O Estriol possui 3 grupos hidroxila (-OH), formando mais ligações de hidrogênio com a água e sendo o mais solúvel.'
      ],
      timeSaverTip: 'Até pelo nome você mata em 3 segundos: Es-TRI-ol = 3 hidroxilas (-OH) = Mais solúvel em água!',
      trapAlert: 'Escolher moléculas com tripla ligação (-C≡CH, apolar) achando que aumentam a solubilidade em água.'
    }
  },
  // QUESTÃO 118 - FÍSICA
  {
    id: 'enem2025-118',
    subject: 'fisica',
    topic: 'Cinemática / Movimento Uniforme (v = Δs / Δt)',
    source: 'ENEM 2025 • Q118 (Caderno 5 Amarelo)',
    difficulty: 2,
    context: 'A figura ilustra as informações contidas no manual de um sistema de alarme que utiliza transmissores e receptores de radiação eletromagnética para a detecção de movimento. O receptor é regulado pelo tempo de resposta, que corresponde ao intervalo de tempo necessário para o corpo do invasor atravessar completamente o feixe, de diâmetro d = 15 cm. Considere que a menor porção do corpo de um invasor é a sua posição de perfil, cuja espessura típica é 20 cm. São indicados cinco possíveis movimentos de um invasor e suas velocidades típicas (0,5 m/s; 0,7 m/s; 1,0 m/s; 2,0 m/s; 5,0 m/s).',
    imageUrl: '/enem2025/q118.png',
    question: 'Nesse sistema, o menor tempo de resposta, em milissegundo, que garante a detecção de um possível invasor é mais próximo de',
    options: [
      { letter: 'A', text: '30 ms.' },
      { letter: 'B', text: '70 ms.' },
      { letter: 'C', text: '300 ms.' },
      { letter: 'D', text: '400 ms.' },
      { letter: 'E', text: '700 ms.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: É exatamente igual ao problema clássico do TREM ATRAVESSANDO UM TÚNEL! Para o corpo de 20 cm atravessar COMPLETAMENTE o feixe de 15 cm, a distância total percorrida é Δs = 20 + 15 = 35 cm = 0,35 m! Para o MENOR tempo, pegamos a MAIOR velocidade (correndo a 5,0 m/s): Δt = 0,35 m / 5,0 m/s = 0,07 s = 70 ms! Alternativa B!',
      stepByStep: [
        '1. Deslocamento para atravessar completamente o feixe: Δs = espessura do corpo + diâmetro do feixe = 20 cm + 15 cm = 35 cm = 0,35 m.',
        '2. O caso crítico (menor tempo de travessia) ocorre na maior velocidade: v = 5,0 m/s.',
        '3. Δt = Δs / v = 0,35 / 5,0 = 0,07 s = 70 milissegundos (ms).'
      ],
      timeSaverTip: '"Atravessar completamente" = Some os dois comprimentos (20 + 15 = 35 cm) antes de dividir pela velocidade!',
      trapAlert: 'Usar apenas d = 15 cm (15 cm / 5 m/s = 30 ms, caindo na pegadinha da letra A!).'
    }
  },
  // QUESTÃO 119 - QUÍMICA
  {
    id: 'enem2025-119',
    subject: 'quimica',
    topic: 'Química Orgânica e Inorgânica / Caráter Ácido-Base de Aminas e Neutralização',
    source: 'ENEM 2025 • Q119 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Clássico: Amina é Base -> Neutraliza com Ácido (Vinagre)!',
    context: 'A dimetilamina é uma substância de elevada toxidez que entra em ebulição a 7 °C. Na madrugada de um dia frio, essa substância se espalhou por uma rodovia após um acidente de trânsito envolvendo um caminhão que transportava esse produto. Para minimizar a agressão ao meio ambiente, bem como evitar a evaporação da dimetilamina com a elevação da temperatura ao longo do dia, um químico considerou o uso de algumas substâncias ou misturas como água, vinagre, óleo de soja, sal de cozinha e bicarbonato de sódio.',
    question: 'Dentre as opções apresentadas, o tratamento correto para minimizar esse problema é usar',
    options: [
      { letter: 'A', text: 'água.' },
      { letter: 'B', text: 'vinagre.' },
      { letter: 'C', text: 'óleo de soja.' },
      { letter: 'D', text: 'sal de cozinha.' },
      { letter: 'E', text: 'bicarbonato de sódio.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: DECOREBA SAGRADA DE QUÍMICA ORGÂNICA: TODA AMINA É UMA BASE! (É por isso que você pinga limão/vinagre no peixe para tirar o cheiro de amina!). Para neutralizar a dimetilamina (base volátil) e transformá-la num sal iônico que não evapora, usa-se um ÁCIDO: VINAGRE (ácido acético)!',
      stepByStep: [
        '1. A dimetilamina ((CH₃)₂NH) é uma base orgânica de Lewis/Brønsted.',
        '2. Reagindo com um ácido fraco como o vinagre (ácido acético), ocorre reação de neutralização ácido-base.',
        '3. Forma-se um sal de amônio quaternário, que é iônico, não volátil (não evapora com o sol) e menos tóxico.'
      ],
      timeSaverTip: 'Amina = Base Orgânica -> Neutraliza com Ácido (Vinagre / Limão). Ácido = Neutraliza com Bicarbonato/Cal.',
      trapAlert: 'Marcar bicarbonato de sódio (E) por costume, esquecendo que bicarbonato é básico e só neutraliza ácidos!'
    }
  },
  // QUESTÃO 120 - FÍSICA
  {
    id: 'enem2025-120',
    subject: 'fisica',
    topic: 'Eletromagnetismo / Lei de Faraday-Lenz, Correntes de Foucault e Efeito Joule',
    source: 'ENEM 2025 • Q120 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Fogão por Indução Eletromagnética (Cai Muito!)',
    context: 'O aquecimento em fogões por indução utiliza bobinas para produzir um campo magnético variável. Essa bobina se localiza abaixo do vidro cerâmico sobre o qual a panela se apoia. O mecanismo aquece apenas a panela que se encontra na zona de cozimento, o que é uma das principais vantagens em relação ao uso do fogão a gás ou de resistência elétrica.',
    imageUrl: '/enem2025/q120.png',
    question: 'O uso do campo magnético variável tem a finalidade de',
    options: [
      { letter: 'A', text: 'imantar o material da panela por indução.' },
      { letter: 'B', text: 'movimentar os átomos de ferro concentrados no fundo da panela.' },
      { letter: 'C', text: 'emitir radiação eletromagnética, aquecendo a panela através do vidro cerâmico.' },
      { letter: 'D', text: 'induzir corrente elétrica na parte inferior da panela, aquecendo-a por efeito Joule.' },
      { letter: 'E', text: 'gerar um fluxo de corrente de convecção no ar contido entre a região da bobina e o vidro cerâmico.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Fogão de INDUÇÃO: Campo magnético variável -> variação de fluxo magnético (Lei de Faraday) -> INDUZ CORRENTE ELÉTRICA (correntes parasitas de Foucault) no fundo metálico da panela -> a corrente passa pela resistência do metal e esquenta por EFEITO JOULE! Alternativa D!',
      stepByStep: [
        '1. Pela Lei de Faraday-Neumann, a variação do fluxo magnético através do fundo condutor da panela gera uma força eletromotriz induzida.',
        '2. Surgem correntes elétricas induzidas (correntes de Foucault) circulando na base da panela.',
        '3. A passagem dessa corrente elétrica pela resistência ôhmica do metal dissipa energia térmica por efeito Joule.'
      ],
      timeSaverTip: 'Fogão por indução = Lei de Faraday (induz corrente elétrica) + Efeito Joule (aquece a panela).',
      trapAlert: 'Achar que o campo magnético apenas imanta o ferro (A) ou emite calor infravermelho (C).'
    }
  },
  // QUESTÃO 121 - BIOLOGIA
  {
    id: 'enem2025-121',
    subject: 'biologia',
    topic: 'Bioenergética / Fotossíntese Oxigênica vs. Anoxigênica (Sulfobactérias)',
    source: 'ENEM 2025 • Q121 (Caderno 5 Amarelo)',
    difficulty: 2,
    context: 'Plantas e algas realizam fotossíntese oxigênica para síntese de matéria orgânica e, para isso, utilizam trifosfato de adenosina (ATP) e nicotinamida adenina dinucleotídeo fosfato reduzido (NADPH). Já algumas bactérias fotossintetizantes não apresentam cloroplasto e clorofila, mas um pigmento denominado bacterioclorofila. Esses procariotos realizam a fotossíntese anoxigênica, um processo de síntese de matéria orgânica utilizando o gás carbônico (CO₂) e o gás sulfídrico (H₂S).',
    question: 'Na fotossíntese oxigênica, qual composto desempenha função análoga à do H₂S?',
    options: [
      { letter: 'A', text: 'ATP.' },
      { letter: 'B', text: 'NADPH.' },
      { letter: 'C', text: 'Oxigênio.' },
      { letter: 'D', text: 'Clorofila.' },
      { letter: 'E', text: 'Água.' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Olhe a semelhança química: H₂S e H₂O! Nas plantas, a ÁGUA (H₂O) doa hidrogênios/elétrons e libera O₂ (fotólise da água). Nas sulfobactérias, o H₂S substitui a água, doando hidrogênios/elétrons e liberando enxofre (S)! Portanto, o análogo do H₂S é a ÁGUA (E)!',
      stepByStep: [
        '1. Fotossíntese oxigênica (plantas): CO₂ + 2 H₂O → (CH₂O) + H₂O + O₂.',
        '2. Fotossíntese anoxigênica (bactérias): CO₂ + 2 H₂S → (CH₂O) + H₂O + 2 S.',
        '3. O H₂S atua como doador de elétrons e prótons H⁺, exatamente o papel desempenhado pela água (H₂O) nas plantas.'
      ],
      timeSaverTip: 'H₂O libera O₂; H₂S libera S. O par análogo do H₂S é sempre a H₂O (Água)!',
      trapAlert: 'Marcar Oxigênio (C): o O₂ é o produto análogo ao enxofre (S), enquanto a pergunta pediu o reagente análogo ao H₂S!'
    }
  },
  // QUESTÃO 122 - BIOLOGIA
  {
    id: 'enem2025-122',
    subject: 'biologia',
    topic: 'Ecologia e Evolução / Endemismo e Seleção Natural',
    source: 'ENEM 2025 • Q122 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'As cangas são ambientes resultantes da atuação, ao longo de milhões de anos, de chuvas, enxurradas, calor e ventos em rochas ricas em ferro. São compostas por até 90% de óxidos de ferro e contêm solos muito ácidos, rasos, com reduzidos índices de fertilidade e temperaturas que atingem quase 70 °C na superfície. Ao contrário do que se imagina, esse tipo de ambiente abriga comunidades de plantas e animais com elevado número de espécies e distribuição restrita.',
    question: 'A seleção adaptativa nesses ambientes favorece a ocorrência de espécies',
    options: [
      { letter: 'A', text: 'exóticas.' },
      { letter: 'B', text: 'migratórias.' },
      { letter: 'C', text: 'endêmicas.' },
      { letter: 'D', text: 'dominantes.' },
      { letter: 'E', text: 'generalistas.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Viu a expressão "DISTRIBUIÇÃO RESTRITA" (só ocorre naquele lugar específico e extremo) no ENEM? É a definição literal de espécie ENDÊMICA!',
      stepByStep: [
        '1. Condições abióticas extremas (solo ácido, 70 °C, ferro) selecionam adaptações altamente específicas.',
        '2. Espécies exclusivas de uma determinada área geográfica ("distribuição restrita") são denominadas espécies endêmicas.'
      ],
      timeSaverTip: '"Distribuição geográfica restrita / exclusiva de uma região" = Endêmica.',
      trapAlert: 'Marcar generalistas (espécies generalistas vivem em qualquer lugar e têm ampla distribuição).'
    }
  },
  // QUESTÃO 123 - QUÍMICA
  {
    id: 'enem2025-123',
    subject: 'quimica',
    topic: 'Equilíbrio Químico / Princípio de Le Chatelier',
    source: 'ENEM 2025 • Q123 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Deslocamento de Equilíbrio (Le Chatelier)',
    context: 'Para a produção de titânio metálico ou dióxido de titânio puros, é necessário fazer a cloração do minério que contém dióxido de titânio... A principal reação química de cloração é representada por:\nTiO₂ (s) + 2 Cl₂ (g) ⇌ TiCl₄ (g) + O₂ (g)   ΔH = +175 kJ/mol',
    question: 'Após o sistema atingir o equilíbrio químico, como a formação do TiCl₄ pode ser favorecida?',
    options: [
      { letter: 'A', text: 'Aumentando a pressão total do sistema.' },
      { letter: 'B', text: 'Diminuindo a temperatura do sistema.' },
      { letter: 'C', text: 'Aumentando a pressão parcial de O₂.' },
      { letter: 'D', text: 'Aumentando a pressão parcial de Cl₂.' },
      { letter: 'E', text: 'Variando a quantidade de TiO₂.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Quer produzir mais produto (TiCl₄, lado direito)? Adicione mais REAGENTE gasoso (Cl₂, lado esquerdo)! Aumentar a pressão parcial de Cl₂ empurra o equilíbrio para a direita! (E lembre-se: TiO₂ é sólido, não desloca equilíbrio!).',
      stepByStep: [
        '1. A) Mols gasosos: 2 mols nos reagentes (2 Cl₂) e 2 mols nos produtos (1 TiCl₄ + 1 O₂). Como Δn_gas = 0, a pressão total não desloca o equilíbrio.',
        '2. B) ΔH > 0 (endotérmica): diminuir a temperatura desloca para a esquerda (exotérmico).',
        '3. C) Aumentar O₂ (produto) desloca para a esquerda.',
        '4. D) Aumentar a pressão parcial de Cl₂ (reagente) desloca para a direita, favorecendo TiCl₄!',
        '5. E) TiO₂ é sólido puro, não altera o equilíbrio.'
      ],
      timeSaverTip: 'Adicionar reagente gasoso = desloca para os produtos! Sólido (s) nunca desloca equilíbrio!',
      trapAlert: 'Cair na letra E achando que colocar mais TiO₂(s) desloca o equilíbrio.'
    }
  }
];
