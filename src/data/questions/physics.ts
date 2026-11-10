import { Question } from '../../types';

export const scienceQuestionsPhysics: Question[] = [
  // 1 - ESPECIAL FÍSICA 1 (Top 1 Física: Consumo de Energia em kWh)
  {
    id: 'fis-01',
    subject: 'fisica',
    topic: 'Eletrodinâmica / Consumo de Energia',
    source: 'ENEM 2023',
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Top 1 Absoluto de Física: Consumo de Energia (kWh)',
    context: 'Um ar-condicionado de potência 1.500 W (1,5 kW) opera em média 8 horas por dia durante um mês de 30 dias. A tarifa cobrada é de R$ 0,80 por kWh.',
    question: 'Qual é o valor em reais acrescentado na conta de luz pelo uso desse aparelho?',
    options: [
      { letter: 'A', text: 'R$ 144,00' },
      { letter: 'B', text: 'R$ 288,00' },
      { letter: 'C', text: 'R$ 360,00' },
      { letter: 'D', text: 'R$ 480,00' },
      { letter: 'E', text: 'R$ 720,00' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Horas no mês: 8 × 30 = 240 horas. Energia: 1,5 kW × 240 h = 360 kWh. Custo: 360 × 0,80 = 36 × 8 = R$ 288,00 na lata!',
      stepByStep: ['1. Horas totais = 8 h/dia × 30 dias = 240 horas.', '2. Consumo em kWh = 1,5 kW × 240 h = 360 kWh.', '3. Custo = 360 × R$ 0,80 = R$ 288,00.'],
      timeSaverTip: 'Multiplicar 360 × 0,80 é a mesma coisa que 36 × 8 = 288.',
      trapAlert: 'Multiplicar 1500 sem converter para quilowatts.',
      deepMemoryFact: '1 kWh = 3,6 × 10⁶ Joules (3,6 MJ). Eletrodinâmica representa ~20% de todas as questões de Física do ENEM desde 2009.'
    }
  },
  // 2 - ESPECIAL FÍSICA 2 (Top 2 Física: Ondulatória e v = λ · f)
  {
    id: 'fis-02',
    subject: 'fisica',
    topic: 'Ondulatória / Refração',
    source: 'ENEM 2022',
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Ondulatória (v = λ · f e Fenômenos Ondulatórios)',
    context: 'Uma onda sonora que se propaga no ar a uma velocidade de 340 m/s penetra na água de uma piscina, onde sua velocidade passa a ser de 1.480 m/s.',
    question: 'O que ocorre com a FREQUÊNCIA e com o COMPRIMENTO DE ONDA desse som ao entrar na água?',
    options: [
      { letter: 'A', text: 'A frequência aumenta e o comprimento de onda permanece constante.' },
      { letter: 'B', text: 'A frequência permanece constante e o comprimento de onda aumenta.' },
      { letter: 'C', text: 'Ambos aumentam proporcionalmente.' },
      { letter: 'D', text: 'A frequência diminui e o comprimento de onda aumenta.' },
      { letter: 'E', text: 'Ambos permanecem rigorosamente inalterados.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: REFRAÇÃO = FREQUÊNCIA SAGRADA CONSTANTE! Como v = λ · f, se a velocidade aumentou (340 para 1.480), o comprimento de onda λ TEM que aumentar junto!',
      stepByStep: ['1. A frequência só depende da fonte sonora, nunca muda na refração.', '2. Pela equação v = λ · f, como v aumentou, λ também aumenta.'],
      timeSaverTip: 'Elimine na hora qualquer alternativa que diga que a frequência mudou.',
      trapAlert: 'Achar que a frequência aumenta quando a onda fica mais veloz.',
      deepMemoryFact: 'Espectro Eletromagnético (ordem crescente de frequência): Rádio < Micro-ondas < Infravermelho < Luz Visível < Ultravioleta < Raios X < Raios Gama.'
    }
  },
  // 3 - ESPECIAL FÍSICA 3 (Top 3 Física: Circuitos Elétricos e Paralelo)
  {
    id: 'fis-05',
    subject: 'fisica',
    topic: 'Eletrodinâmica / Circuitos em Paralelo',
    source: 'ENEM 2023',
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Circuitos Elétricos e 1ª Lei de Ohm',
    context: 'Em uma residência padrão, as lâmpadas do teto dos cômodos são conectadas à rede elétrica da concessionária.',
    question: 'Por qual razão técnica as lâmpadas e tomadas de uma casa são ligadas em PARALELO e não em série?',
    options: [
      { letter: 'A', text: 'Para que a corrente elétrica total seja nula.' },
      { letter: 'B', text: 'Para que todas fiquem submetidas à mesma diferença de potencial (tensão) e funcionem de forma independente.' },
      { letter: 'C', text: 'Para aumentar a resistência equivalente de todo o circuito residencial.' },
      { letter: 'D', text: 'Para economizar fios durante a instalação predial.' },
      { letter: 'E', text: 'Para reduzir a potência dissipada por efeito Joule ao valor zero.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: PARALELO = MESMA TENSÃO (127V ou 220V para todas). Se desligar a luz do quarto, a sala continua acesa!',
      stepByStep: ['1. Em circuitos paralelos, todos os ramos recebem a tensão nominal da rede.', '2. O desligamento de um aparelho não interrompe a passagem de corrente nos demais.'],
      timeSaverTip: 'Residência = sempre ligação em paralelo.',
      trapAlert: 'Achar que em série a lâmpada consome menos energia.',
      deepMemoryFact: 'Em paralelo: 1/Req = 1/R1 + 1/R2. Para dois resistores iguais R, a resistência cai pela metade (R/2).'
    }
  },
  // 4 - ESPECIAL FÍSICA 4 (Top 4 Física: Calorimetria / Que MaCeTe)
  {
    id: 'fis-04',
    subject: 'fisica',
    topic: 'Calorimetria / Calor Sensível',
    source: 'ENEM 2022',
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Calorimetria e Trocas de Calor (Q = mcΔT)',
    context: 'Para aquecer 500 g de água de 20°C até 80°C, utiliza-se uma fonte térmica. O calor específico da água é 1,0 cal/g°C.',
    question: 'Qual é a quantidade de calor em quilocalorias (kcal) fornecida à água?',
    options: [
      { letter: 'A', text: '10 kcal' },
      { letter: 'B', text: '20 kcal' },
      { letter: 'C', text: '30 kcal' },
      { letter: 'D', text: '40 kcal' },
      { letter: 'E', text: '50 kcal' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Variação de temperatura ΔT = 80 - 20 = 60°C. Q = m · c · ΔT = 500 × 1 × 60 = 30.000 cal. Em kcal: corte 3 zeros = 30 kcal!',
      stepByStep: ['1. ΔT = 80 - 20 = 60°C.', '2. Q = 500 × 1 × 60 = 30.000 calorias.', '3. 30.000 cal / 1000 = 30 kcal.'],
      timeSaverTip: '500 × 60 = 30.000. Cortou 3 zeros = 30.',
      trapAlert: 'Multiplicar pela temperatura final 80 em vez da variação 60.',
      deepMemoryFact: 'Capacidade térmica C = m · c (em cal/°C). Quanto maior a capacidade térmica, mais calor o corpo precisa absorver para variar 1°C.'
    }
  },
  // 5 - ESPECIAL FÍSICA 5 (Top 5 Física: Torricelli e Cinemática)
  {
    id: 'fis-03',
    subject: 'fisica',
    topic: 'Cinemática / Torricelli',
    source: 'Questão Adaptada ENEM 2021 (Foco em Agilidade)',
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Cinemática sem Tempo (Equação de Torricelli)',
    context: 'Um vaso de flores cai acidentalmente do parapeito de uma sacada a 20 metros de altura em relação ao solo. Despreze a resistência do ar e adote g = 10 m/s².',
    question: 'Com qual velocidade o vaso atinge o chão?',
    options: [
      { letter: 'A', text: '10 m/s (36 km/h)' },
      { letter: 'B', text: '15 m/s (54 km/h)' },
      { letter: 'C', text: '20 m/s (72 km/h)' },
      { letter: 'D', text: '25 m/s (90 km/h)' },
      { letter: 'E', text: '40 m/s (144 km/h)' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Não tem tempo? V = √(2·g·h) = √(2 · 10 · 20) = √(400) = 20 m/s direto!',
      stepByStep: ['1. V² = V₀² + 2·g·Δh = 0 + 2 · 10 · 20 = 400.', '2. V = √400 = 20 m/s.'],
      timeSaverTip: 'Em queda livre de 20 metros na Terra (g=10), a velocidade final é sempre 20 m/s (72 km/h).',
      trapAlert: 'Esquecer de tirar a raiz quadrada de 400.',
      deepMemoryFact: 'Na ausência de resistência do ar, corpos de massas diferentes caem com a mesma aceleração (gravidade) e chegam juntos ao solo.'
    }
  },
  // 6 - Dinâmica e Atrito
  {
    id: 'fis-06',
    subject: 'fisica',
    topic: 'Dinâmica / Força de Atrito',
    source: 'Questão Adaptada ENEM 2021 (Foco em Agilidade)',
    context: 'Uma caixa de 40 kg repousa sobre um piso horizontal. O coeficiente de atrito estático entre a caixa e o solo é μ = 0,30. Adote g = 10 m/s².',
    question: 'Qual é a força horizontal MÍNIMA necessária para colocar essa caixa em movimento?',
    options: [
      { letter: 'A', text: '12 N' },
      { letter: 'B', text: '40 N' },
      { letter: 'C', text: '120 N' },
      { letter: 'D', text: '300 N' },
      { letter: 'E', text: '400 N' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Peso P = 40 × 10 = 400 N. Fat_max = μ · Normal = 0,30 × 400 = 120 N!',
      stepByStep: ['1. Normal N = Peso = m × g = 40 × 10 = 400 N.', '2. Fat_max = 0,30 × 400 = 120 N.'],
      timeSaverTip: 'Multiplique a massa × 10 (400) e multiplique pelo coeficiente (400 × 0,3 = 120).',
      trapAlert: 'Multiplicar apenas 40 × 0,3 = 12 (esquecendo a gravidade g=10).'
    }
  },
  // 7 - Óptica Geométrica (Lentes e Espelhos)
  {
    id: 'fis-07',
    subject: 'fisica',
    topic: 'Óptica / Espelhos Planos',
    source: 'ENEM 2022',
    context: 'Uma pessoa está a 2 metros de distância de um espelho plano vertical fixo na parede.',
    question: 'A que distância essa pessoa se encontra da SUA PRÓPRIA IMAGEM conjugada pelo espelho?',
    options: [
      { letter: 'A', text: '1 metro' },
      { letter: 'B', text: '2 metros' },
      { letter: 'C', text: '3 metros' },
      { letter: 'D', text: '4 metros' },
      { letter: 'E', text: '8 metros' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Espelho plano é simétrico! Se o objeto está a 2m na frente, a imagem virtual está a 2m "atrás" do espelho. Distância pessoa-imagem = 2 + 2 = 4 metros!',
      stepByStep: ['1. Distância objeto-espelho: p = 2 m.', '2. Distância imagem-espelho: p\' = 2 m.', '3. Distância total entre objeto e imagem = 2 + 2 = 4 m.'],
      timeSaverTip: 'Distância da pessoa à imagem no espelho plano é SEMPRE o dobro da distância ao espelho.',
      trapAlert: 'Marcar 2 metros (que é a distância ao espelho, não à imagem).'
    }
  },
  // 8 - Trabalho e Energia
  {
    id: 'fis-08',
    subject: 'fisica',
    topic: 'Energia / Conservação Mecânica',
    source: 'Questão Adaptada ENEM 2023 (Foco em Agilidade)',
    context: 'Um carrinho de montanha-russa de massa 500 kg parte do repouso do ponto mais alto da pista a 20 metros de altura em relação ao solo. Despreze qualquer atrito e adote g = 10 m/s².',
    question: 'Qual é a velocidade desse carrinho ao atingir o ponto mais baixo da pista ao nível do solo (h = 0)?',
    options: [
      { letter: 'A', text: '10 m/s' },
      { letter: 'B', text: '20 m/s' },
      { letter: 'C', text: '40 m/s' },
      { letter: 'D', text: '100 m/s' },
      { letter: 'E', text: '200 m/s' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Toda energia potencial vira cinética! mgh = mv²/2 → v = √(2gh) = √(2 · 10 · 20) = √400 = 20 m/s! A massa de 500 kg nem entra na conta!',
      stepByStep: ['1. Conservação da energia mecânica: Ep_inicial = Ec_final.', '2. m·g·h = (m·v²)/2.', '3. v² = 2·g·h = 2 · 10 · 20 = 400 → v = 20 m/s.'],
      timeSaverTip: 'A massa sempre corta nessa conservação. Não gaste tempo calculando 500 × 10 × 20.',
      trapAlert: 'Tentar calcular o trabalho multiplicando pela massa.'
    }
  },
  // 9 - Hidrostática (Empuxo e Flotação)
  {
    id: 'fis-09',
    subject: 'fisica',
    topic: 'Hidrostática / Empuxo de Arquimedes',
    source: 'ENEM 2021',
    context: 'Um bloco cúbico de madeira de densidade 0,8 g/cm³ flutua em equilíbrio na água pura cuja densidade é 1,0 g/cm³.',
    question: 'Qual porcentagem do volume total desse bloco de madeira permanece SUBMERSA abaixo da linha da água?',
    options: [
      { letter: 'A', text: '20%' },
      { letter: 'B', text: '50%' },
      { letter: 'C', text: '80%' },
      { letter: 'D', text: '90%' },
      { letter: 'E', text: '100%' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Fração submersa = densidade do corpo / densidade do líquido = 0,8 / 1,0 = 0,80 = 80%! A porcentagem submersa é a própria densidade relativa!',
      stepByStep: ['1. Em equilíbrio de flotação: Empuxo = Peso.', '2. d_liq · V_sub · g = d_corpo · V_tot · g.', '3. V_sub / V_tot = d_corpo / d_liq = 0,8 / 1,0 = 80%.'],
      timeSaverTip: 'Densidade de 0,8 na água pura significa exatamente 80% submerso e 20% emerso para fora.',
      trapAlert: 'Marcar 20% (que é o que fica de fora da água).'
    }
  },
  // 10 - Eletrodinâmica / 2ª Lei de Ohm
  {
    id: 'fis-10',
    subject: 'fisica',
    topic: 'Eletrodinâmica / 2ª Lei de Ohm',
    source: 'ENEM 2023',
    context: 'Um engenheiro eletricista precisa substituir um fio condutor de cobre de comprimento L e área de seção transversal A por outro fio feito do mesmo material, mas com o DOBRO do comprimento (2L) e a METADE da área de seção (A/2).',
    question: 'A resistência elétrica do novo fio condutor será:',
    options: [
      { letter: 'A', text: 'A mesma do fio original.' },
      { letter: 'B', text: 'Duas vezes maior.' },
      { letter: 'C', text: 'Quatro vezes maior.' },
      { letter: 'D', text: 'Duas vezes menor.' },
      { letter: 'E', text: 'Quatro vezes menor.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 2ª Lei de Ohm: R = ρ · L / A ("Rola"). Dobrou o comprimento (×2) e dividiu a área por 2 (×2 de novo): 2 × 2 = 4 vezes maior!',
      stepByStep: ['1. R_original = ρ · L / A.', '2. R_novo = ρ · (2L) / (A/2) = ρ · (2L · 2 / A) = 4 · (ρ · L / A).', '3. A resistência fica 4 vezes maior.'],
      timeSaverTip: 'Fio mais longo e mais fino sempre oferece MUITO mais resistência.',
      trapAlert: 'Achar que o 2 do comprimento corta com o 2 da área.'
    }
  }
];
