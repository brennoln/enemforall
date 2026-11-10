import { Question } from '../../types';

export const scienceQuestionsPhysicsPart3: Question[] = [
  // 21 - Física Térmica / Calorimetria (Troca de Calor Q = m·c·ΔT)
  {
    id: 'fis-21',
    subject: 'fisica',
    topic: 'Termologia / Trocas de Calor',
    source: 'ENEM 2021',
    difficulty: 2,
    context: 'Deseja-se aquecer 500 g de água pura (calor específico c = 1,0 cal/g·°C) de 20 °C até 80 °C utilizando um ebulidor elétrico de rendimento total.',
    question: 'Qual a quantidade de calor necessária, em calorias, para esse aquecimento?',
    options: [
      { letter: 'A', text: '10.000 cal' },
      { letter: 'B', text: '20.000 cal' },
      { letter: 'C', text: '30.000 cal' },
      { letter: 'D', text: '40.000 cal' },
      { letter: 'E', text: '50.000 cal' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: "Qui-Maciete": Q = m · c · ΔT. ΔT = 80 - 20 = 60 °C. Q = 500 × 1 × 60 = 30.000 cal. 15 segundos de conta!',
      stepByStep: ['1. Variação de temperatura: ΔT = 80 - 20 = 60 °C.', '2. Fórmula sensível: Q = m · c · ΔT.', '3. Q = 500 × 1 × 60 = 30.000 cal.'],
      timeSaverTip: 'Multiplique 5 × 6 = 30 e adicione os 3 zeros (500 e 60).',
      trapAlert: 'Usar a temperatura final 80 direto em vez da variação ΔT (60).'
    }
  },
  // 22 - Ondulatória / Efeito Doppler
  {
    id: 'fis-22',
    subject: 'fisica',
    topic: 'Ondulatória / Efeito Doppler',
    source: 'ENEM 2022',
    difficulty: 1,
    context: 'Uma ambulância com a sirene ligada se aproxima de um pedestre parado na calçada e, em seguida, ultrapassa-o e se afasta rapidamente.',
    question: 'Em relação ao som emitido originalmente pela sirene, o pedestre percebe o som:',
    options: [
      { letter: 'A', text: 'Mais grave na aproximação e mais agudo no afastamento.' },
      { letter: 'B', text: 'Mais agudo na aproximação e mais grave no afastamento.' },
      { letter: 'C', text: 'Com maior velocidade de propagação na aproximação.' },
      { letter: 'D', text: 'Com mesma frequência, variando apenas a intensidade sonora.' },
      { letter: 'E', text: 'Com frequência continuamente crescente tanto na ida quanto na volta.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: DOPPLER: APROXIMA = Frequência aparente MAIOR (som mais AGUDO). AFASTA = Frequência aparente MENOR (som mais GRAVE)! Memorize: "Chega fino (agudo), vai grosso (grave)".',
      stepByStep: ['1. A aproximação "espreme" as frentes de onda, aumentando o número de ondas por segundo percebidas (frequência sobe).', '2. Frequência alta = som agudo. Frequência baixa = som grave.'],
      timeSaverTip: 'A velocidade da onda no ar NÃO muda, só depende do meio.',
      trapAlert: 'Confundir intensidade (volume forte/fraco) com frequência (agudo/grave).'
    }
  },
  // 23 - Dinâmica / Trabalho de Força
  {
    id: 'fis-23',
    subject: 'fisica',
    topic: 'Mecânica / Trabalho e Potência',
    source: 'ENEM 2020',
    difficulty: 2,
    context: 'Um operário empurra uma caixa de massa 40 kg com uma força horizontal constante de 150 N ao longo de um piso horizontal por uma distância de 8 metros.',
    question: 'Qual o trabalho realizado por essa força aplicada pelo operário?',
    options: [
      { letter: 'A', text: '320 J' },
      { letter: 'B', text: '600 J' },
      { letter: 'C', text: '1.200 J' },
      { letter: 'D', text: '2.400 J' },
      { letter: 'E', text: '3.200 J' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Trabalho = Força × Deslocamento (W = F · d). W = 150 × 8 = 1.200 Joules! A massa de 40 kg foi mero distrator.',
      stepByStep: ['1. W = F × d × cos(θ). Como é no mesmo sentido, cos(0) = 1.', '2. W = 150 N × 8 m = 1.200 J.'],
      timeSaverTip: '150 × 8: 15 × 8 = 120, logo 1.200 J.',
      trapAlert: 'Tentar usar a massa do bloco para calcular peso ou atrito quando o enunciado já deu a força resultante aplicada!'
    }
  },
  // 24 - Cinemática / Encontro no MU
  {
    id: 'fis-24',
    subject: 'fisica',
    topic: 'Cinemática / Movimento Uniforme',
    source: 'ENEM 2019',
    difficulty: 2,
    context: 'Dois carros, A e B, movem-se na mesma rodovia reta no mesmo sentido. O carro A está a 80 km/h e o carro B está a 100 km/h, 40 km atrás de A.',
    question: 'Em quanto tempo o carro B alcançará o carro A?',
    options: [
      { letter: 'A', text: '1,0 hora' },
      { letter: 'B', text: '1,5 hora' },
      { letter: 'C', text: '2,0 horas' },
      { letter: 'D', text: '2,5 horas' },
      { letter: 'E', text: '3,0 horas' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: VELOCIDADE RELATIVA! Mesmo sentido? Subtraia as velocidades: Vrel = 100 - 80 = 20 km/h. Tempo = Distância / Vrel = 40 km / 20 km/h = 2 horas!',
      stepByStep: ['1. Como vão no mesmo sentido, a aproximação ocorre a 100 - 80 = 20 km/h.', '2. Tempo = Distância / Velocidade Relativa = 40 / 20 = 2 h.'],
      timeSaverTip: 'Nunca monte duas funções horárias quando puder usar Velocidade Relativa.',
      trapAlert: 'Somar as velocidades (só se somam quando vão em sentidos opostos colidindo de frente).'
    }
  },
  // 25 - Eletrostática / Força de Coulomb
  {
    id: 'fis-25',
    subject: 'fisica',
    topic: 'Eletrostática / Lei de Coulomb',
    source: 'ENEM 2018',
    difficulty: 3,
    context: 'Duas cargas elétricas puntiformes idênticas no vácuo repelem-se com uma força F quando separadas por uma distância d. Se a distância entre elas for duplicada (2d), a nova força de repulsão passará a valer:',
    question: 'Qual é o novo valor da força elétrica em relação a F?',
    options: [
      { letter: 'A', text: '2 F' },
      { letter: 'B', text: 'F / 2' },
      { letter: 'C', text: 'F / 4' },
      { letter: 'D', text: '4 F' },
      { letter: 'E', text: 'F / 8' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: LEI DO INVERSO DO QUADRADO! F é inversamente proporcional a d². Se dobrou a distância (× 2), a força fica dividida por 2² = 4. Resposta F / 4.',
      stepByStep: ['1. Lei de Coulomb: F = k · |q1 · q2| / d².', '2. Nova distância = 2d, logo o denominador vira (2d)² = 4d².', '3. Nova força = F / 4.'],
      timeSaverTip: 'Qualquer lei com inverso do quadrado (Gravitação, Coulomb, Intensidade de luz): dobro da distância = 1/4 da intensidade.',
      trapAlert: 'Achar que dobrar a distância divide a força apenas por 2.'
    }
  },
  // 26 - Hidrostática / Empuxo e Flutuação
  {
    id: 'fis-26',
    subject: 'fisica',
    topic: 'Hidrostática / Princípio de Arquimedes',
    source: 'ENEM 2023',
    difficulty: 2,
    context: 'Um bloco de madeira maciça de volume 0,02 m³ e densidade 600 kg/m³ flutua em equilíbrio na água límpida de uma piscina (densidade da água = 1.000 kg/m³).',
    question: 'Qual é a porcentagem do volume do bloco que fica submersa?',
    options: [
      { letter: 'A', text: '40%' },
      { letter: 'B', text: '50%' },
      { letter: 'C', text: '60%' },
      { letter: 'D', text: '80%' },
      { letter: 'E', text: '100%' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: FRAÇÃO SUBMERSA EM FLUTUAÇÃO = Densidade do corpo / Densidade do líquido! 600 / 1.000 = 0,60 = 60%. Sem fórmula longa, pura proporção!',
      stepByStep: ['1. No equilíbrio de flutuação: Peso = Empuxo.', '2. d_corpo · V_total · g = d_liq · V_sub · g.', '3. V_sub / V_total = d_corpo / d_liq = 600 / 1000 = 60%.'],
      timeSaverTip: 'A razão entre as densidades dá direto a porcentagem imersa.',
      trapAlert: 'Calcular a parte emersa (fora d água = 40%) quando a pergunta pediu a submersa (60%).'
    }
  },
  // 27 - Óptica / Espelho Plano e Imagem
  {
    id: 'fis-27',
    subject: 'fisica',
    topic: 'Óptica Geométrica / Espelhos Planos',
    source: 'ENEM 2021',
    difficulty: 1,
    context: 'Uma pessoa está posicionada a 1,5 metro de distância em frente a um grande espelho plano vertical fixado na parede de um quarto.',
    question: 'Qual é a distância total entre a pessoa e a imagem virtual formada pelo espelho?',
    options: [
      { letter: 'A', text: '0,75 metro' },
      { letter: 'B', text: '1,5 metro' },
      { letter: 'C', text: '2,25 metros' },
      { letter: 'D', text: '3,0 metros' },
      { letter: 'E', text: '4,5 metros' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: SIMETRIA DO ESPELHO PLANO! A imagem fica atrás do espelho exatamente à mesma distância que o objeto está à frente (1,5 m). Logo, distância pessoa-imagem = 1,5 + 1,5 = 3,0 m!',
      stepByStep: ['1. Distância objeto-espelho: 1,5 m.', '2. Distância espelho-imagem: 1,5 m.', '3. Distância total objeto-imagem = 1,5 + 1,5 = 3,0 m.'],
      timeSaverTip: 'Distância da pessoa até sua imagem no espelho plano é sempre o dobro da distância ao espelho.',
      trapAlert: 'Marcar 1,5 m por esquecer que a pergunta pediu a distância entre a pessoa e a imagem, e não entre a pessoa e o espelho.'
    }
  },
  // 28 - Eletromagnetismo / Transformadores
  {
    id: 'fis-28',
    subject: 'fisica',
    topic: 'Eletromagnetismo / Transformadores e Indução',
    source: 'ENEM 2020',
    difficulty: 2,
    context: 'O carregador de um notebook é ligado a uma tomada residencial de 220 V e alimenta o aparelho com uma tensão contínua correspondente a uma saída de 22 V. O enrolamento primário do transformador possui 1.000 espiras.',
    question: 'Quantas espiras devem compor o enrolamento secundário desse transformador ideal?',
    options: [
      { letter: 'A', text: '10 espiras' },
      { letter: 'B', text: '100 espiras' },
      { letter: 'C', text: '500 espiras' },
      { letter: 'D', text: '2.000 espiras' },
      { letter: 'E', text: '10.000 espiras' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: RELAÇÃO DIRETA DE ESPIRAS E TENSÃO! Vp / Vs = Np / Ns. De 220 V para 22 V a tensão caiu 10 vezes (dividiu por 10). Logo o número de espiras também divide por 10: 1.000 / 10 = 100 espiras!',
      stepByStep: ['1. Razão de transformação: 220 / 22 = 10.', '2. Ns = Np / 10 = 1.000 / 10 = 100 espiras.'],
      timeSaverTip: 'Tensão e número de espiras são diretamente proporcionais.',
      trapAlert: 'Inverter a proporção e achar que as espiras aumentam.'
    }
  },
  // 29 - Mecânica / Conservação da Energia Mecânica
  {
    id: 'fis-29',
    subject: 'fisica',
    topic: 'Mecânica / Conservação de Energia',
    source: 'ENEM 2022',
    difficulty: 2,
    context: 'Um skatista de 60 kg parte do repouso do ponto mais alto de uma pista em curva (ponto A), a uma altura de 5,0 metros em relação ao solo. Despreze qualquer atrito e adote g = 10 m/s².',
    question: 'Qual será a velocidade escalar atingida pelo skatista ao passar pelo ponto mais baixo da pista (ao nível do solo)?',
    options: [
      { letter: 'A', text: '5 m/s' },
      { letter: 'B', text: '10 m/s' },
      { letter: 'C', text: '15 m/s' },
      { letter: 'D', text: '20 m/s' },
      { letter: 'E', text: '25 m/s' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: BIZU DE QUEDA LIVRE: v = √(2 · g · h)! v = √(2 × 10 × 5) = √100 = 10 m/s! A massa do skatista corta e não importa!',
      stepByStep: ['1. E_potencial = E_cinética => m·g·h = (m·v²)/2.', '2. v² = 2·g·h = 2 × 10 × 5 = 100.', '3. v = √100 = 10 m/s.'],
      timeSaverTip: 'Decorou v = √(2gh)? Resolve qualquer questão de conservação de energia em rampa/pista em 5 segundos.',
      trapAlert: 'Tentar calcular forças normais ou usar a massa de 60 kg inutilmente.'
    }
  },
  // 30 - Termodinâmica / Ciclos e Rendimento
  {
    id: 'fis-30',
    subject: 'fisica',
    topic: 'Termodinâmica / Máquinas Térmicas e 2ª Lei',
    source: 'ENEM 2023',
    difficulty: 3,
    context: 'Uma máquina térmica opera recebendo 5.000 J de calor de uma fonte quente a cada ciclo e rejeitando 3.500 J para a fonte fria.',
    question: 'Qual é o trabalho útil realizado por ciclo e o rendimento térmico dessa máquina?',
    options: [
      { letter: 'A', text: '1.500 J e rendimento de 30%' },
      { letter: 'B', text: '1.500 J e rendimento de 70%' },
      { letter: 'C', text: '3.500 J e rendimento de 30%' },
      { letter: 'D', text: '5.000 J e rendimento de 50%' },
      { letter: 'E', text: '8.500 J e rendimento de 85%' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1ª LEI: Trabalho útil = Qquente - Qfria = 5.000 - 3.500 = 1.500 J. Rendimento = Útil / Total = 1.500 / 5.000 = 15 / 50 = 30%!',
      stepByStep: ['1. Trabalho: W = Q_q - Q_f = 5000 - 3500 = 1500 J.', '2. Rendimento η = W / Q_q = 1500 / 5000 = 0,30 = 30%.'],
      timeSaverTip: 'Rendimento é sempre o que produziu de útil dividido pelo que pegou da fonte quente.',
      trapAlert: 'Dividir o trabalho pelo calor rejeitado (fonte fria).'
    }
  }
];
