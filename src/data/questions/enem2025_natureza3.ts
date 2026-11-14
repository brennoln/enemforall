import { Question } from '../../types';

export const enem2025NaturezaPart3: Question[] = [
  // QUESTÃO 124 - FÍSICA
  {
    id: 'enem2025-124',
    subject: 'fisica',
    topic: 'Hidrostática e Mecânica / Pressão (P = d · g · h)',
    source: 'ENEM 2025 • Q124 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Pressão de Coluna (P = d · g · h) Sem Usar a Área!',
    context: 'A laje de um depósito de bebidas tem 50 m² de área útil de armazenamento e foi projetada para suportar pressões de até 10⁴ Pa. O gerente do estabelecimento pretende armazenar um produto cuja densidade é 1 250 kg/m³. Considere a aceleração da gravidade igual a 10 m/s².',
    question: 'A altura máxima, em metro, de empilhamento do produto que essa laje é capaz de suportar é',
    options: [
      { letter: 'A', text: '0,16 m.' },
      { letter: 'B', text: '0,50 m.' },
      { letter: 'C', text: '0,80 m.' },
      { letter: 'D', text: '1,60 m.' },
      { letter: 'E', text: '8,00 m.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: A área de 50 m² é DISTRATOR! A pressão exercida por uma coluna de altura h e densidade d é direto P = d · g · h! Substituindo: 10.000 = 1.250 × 10 × h => 10.000 = 12.500 · h => h = 100 / 125 = 4 / 5 = 0,80 m! Alternativa C!',
      stepByStep: [
        '1. Pressão = Força / Área = (m · g) / A = (d · A · h · g) / A = d · g · h.',
        '2. 10⁴ = 1.250 × 10 × h => 10.000 = 12.500 × h.',
        '3. h = 10.000 / 12.500 = 10 / 12,5 = 0,80 m.'
      ],
      timeSaverTip: 'Para achar pressão de empilhamento ou coluna líquida, use sempre P = d · g · h e ignore a área da base!',
      trapAlert: 'Tentar multiplicar ou dividir pela área de 50 m² e chegar em 0,16 m (A) ou 1,60 m (D).'
    }
  },
  // QUESTÃO 125 - FÍSICA
  {
    id: 'enem2025-125',
    subject: 'fisica',
    topic: 'Eletrodinâmica / Geradores Reais e Associação de Geradores',
    source: 'ENEM 2025 • Q125 (Caderno 5 Amarelo)',
    difficulty: 3,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Equação do Gerador (U = ε - r · i) e Associação em Série',
    context: 'Em uma comunidade rural, os moradores utilizam uma bomba-d’água alimentada por 100 V de tensão contínua, podendo variar em até 5 V (ou seja, de 95 V a 105 V). Um eletrotécnico pretende instalar placas fotovoltaicas idênticas para alimentar essa bomba. Cada uma apresenta tensão de operação igual a 34 V com corrente de 7,5 A, e 40 V quando em circuito aberto (ε = 40 V). O eletrotécnico construiu um circuito que permite à bomba operar corretamente com o menor número possível de placas conectadas.',
    imageUrl: '/enem2025/q125.png',
    question: 'O diagrama que representa o circuito construído pelo eletrotécnico é:',
    options: [
      { letter: 'A', text: '136 V e 3,2 Ω', imageUrl: '/enem2025/q125_A.png' },
      { letter: 'B', text: '120 V e 2,4 Ω', imageUrl: '/enem2025/q125_B.png' },
      { letter: 'C', text: '120 V e 5,3 Ω', imageUrl: '/enem2025/q125_C.png' },
      { letter: 'D', text: '102 V e 2,4 Ω', imageUrl: '/enem2025/q125_D.png' },
      { letter: 'E', text: '102 V e 5,3 Ω', imageUrl: '/enem2025/q125_E.png' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1) Cada placa entrega 34 V em operação. Para alimentar a bomba de 100 V (± 5 V, ou seja, entre 95 V e 105 V), precisamos de 3 placas em SÉRIE: 3 × 34 V = 102 V (dentro da faixa!). 2) No diagrama do gerador, coloca-se a f.e.m. total de circuito aberto (ε_eq = 3 × 40 V = 120 V -> elimina A, D e E!). 3) Em 1 placa: U = ε - r·i => 34 = 40 - r · 7,5 => r · 7,5 = 6 => r = 0,8 Ω. Em 3 placas em série: r_eq = 3 × 0,8 = 2,4 Ω! Logo: 120 V e 2,4 Ω (Alternativa B)!',
      stepByStep: [
        '1. Número de placas em série: 3 placas fornecem 3 × 34 V = 102 V de tensão útil (entre 95 V e 105 V).',
        '2. Força eletromotriz equivalente (ε_eq): 3 × 40 V = 120 V.',
        '3. Resistência interna de 1 placa: 40 - 34 = r × 7,5 => r = 6 / 7,5 = 0,8 Ω.',
        '4. Resistência interna equivalente das 3 placas em série: r_eq = 3 × 0,8 Ω = 2,4 Ω (Alternativa B).'
      ],
      timeSaverTip: 'Descobriu que são 3 placas em série? 3 × 40 V = 120 V (só ficam B e C). Como a queda nas 3 placas é 120 - 102 = 18 V para 7,5 A, r_eq = 18 / 7,5 = 2,4 Ω!',
      trapAlert: 'Marcar 102 V como f.e.m. da bateria (D) esquecendo que o símbolo do gerador representa a tensão em aberto ε (120 V) antes da resistência interna.'
    }
  },
  // QUESTÃO 126 - QUÍMICA
  {
    id: 'enem2025-126',
    subject: 'quimica',
    topic: 'Eletroquímica / Potencial-Padrão de Redução e Pilhas (ΔE°)',
    source: 'ENEM 2025 • Q126 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Cálculo de d.d.p. (ΔE° = E°red maior - E°red menor)',
    context: 'Objetos de prata escurecem em contato com compostos contendo enxofre por causa da formação de uma fina camada de sulfeto de prata. Um método simples para clarear o objeto consiste em forrar um recipiente com papel alumínio, adicionar solução de NaCl e mergulhar a prata. Considere os potenciais-padrão de redução:\n• Ag₂S (s) + 2 e⁻ → 2 Ag (s) + S²⁻ (aq)   E° = −0,69 V\n• O₂ (g) + 4 H⁺ (aq) + 4 e⁻ → 2 H₂O (l)   E° = +1,23 V\n• Al³⁺ (aq) + 3 e⁻ → Al (s)   E° = −1,68 V',
    question: 'Os valores das diferenças de potencial-padrão das reações que representam o escurecimento e o clareamento do objeto de prata são, respectivamente:',
    options: [
      { letter: 'A', text: '+0,54 V e +2,37 V.' },
      { letter: 'B', text: '+1,92 V e +0,99 V.' },
      { letter: 'C', text: '−0,15 V e +5,43 V.' },
      { letter: 'D', text: '+2,61 V e +1,29 V.' },
      { letter: 'E', text: '+0,15 V e −1,29 V.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Ambos os processos são ESPONTÂNEOS (logo ambos têm ΔE° POSITIVO: ΔE° = E°maior - E°menor)! 1) Escurecimento (Ag + O₂ formando Ag₂S): envolve a semirreação 1 (-0,69 V) e a 2 (+1,23 V): ΔE° = +1,23 - (-0,69) = +1,92 V! 2) Clareamento (Ag₂S + Al): envolve a 1 (-0,69 V) e a 3 (-1,68 V): ΔE° = -0,69 - (-1,68) = +0,99 V! Alternativa B!',
      stepByStep: [
        '1. Escurecimento da prata pelo O₂ na presença de S²⁻: O₂ reduz (+1,23 V) e Ag oxida a Ag₂S (inverso de -0,69 V => +0,69 V). ΔE° = 1,23 - (-0,69) = +1,92 V.',
        '2. Clareamento da prata pelo alumínio: Ag₂S reduz a Ag (-0,69 V) e Al oxida a Al³⁺ (inverso de -1,68 V => +1,68 V). ΔE° = -0,69 - (-1,68) = +0,99 V.'
      ],
      timeSaverTip: 'Reação espontânea = ΔE° é SEMPRE (Maior menos Menor) sem multiplicar os potenciais!',
      trapAlert: 'Somar com sinal trocado (+1,23 - 0,69 = +0,54 V) e cair na letra A!'
    }
  },
  // QUESTÃO 127 - QUÍMICA
  {
    id: 'enem2025-127',
    subject: 'quimica',
    topic: 'Estequiometria e Gases Ideais / Equação de Clapeyron (P·V = n·R·T)',
    source: 'ENEM 2025 • Q127 (Caderno 5 Amarelo)',
    difficulty: 3,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Questão Difícil de Estequiometria dos Gases + Rendimento',
    context: 'Para promover o crescimento adequado da massa durante o cozimento de um bolo a 180 °C (453 K) e 1,00 atm, uma chefe precisaria produzir um volume total de gás igual a 4,00 L usando bicarbonato de amônio, que se decompõe em TRÊS gases distintos com rendimento de 80%:\nNH₄HCO₃ (s) → NH₃ (g) + CO₂ (g) + H₂O (g)\nDados: Massa molar do NH₄HCO₃ = 79 g/mol e R = 0,082 atm·L/(mol·K).',
    question: 'A massa, em grama, de bicarbonato de amônio que ela deve utilizar é mais próxima de',
    options: [
      { letter: 'A', text: '2,3 g.' },
      { letter: 'B', text: '3,5 g.' },
      { letter: 'C', text: '5,9 g.' },
      { letter: 'D', text: '6,8 g.' },
      { letter: 'E', text: '8,9 g.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: ATENÇÃO TRIPLA! 1) Achar mols totais de gás por P·V = n_gas · R · T: 1 × 4 = n_gas × 0,082 × 453 => n_gas = 4 / 37,15 ≈ 0,108 mol de gases! 2) Como 1 mol de NH₄HCO₃ gera 3 MOLS DE GASES (NH₃ + CO₂ + H₂O), divide por 3: n_sal = 0,108 / 3 = 0,036 mol! 3) Como o rendimento é 80% (0,8), divide por 0,8: n_real = 0,036 / 0,8 = 0,045 mol! Massa = 0,045 × 79 g/mol ≈ 3,55 g -> 3,5 g (Alternativa B)!',
      stepByStep: [
        '1. Mols totais de gás (n_gás): n_gás = P·V / (R·T) = (1,00 × 4,00) / (0,082 × 453) = 4 / 37,146 ≈ 0,1077 mol de gases.',
        '2. Pela equação, 1 mol de NH₄HCO₃ produz 3 mols de gases (1 NH₃ + 1 CO₂ + 1 H₂O). Logo, mols de sal que reagiram = 0,1077 / 3 ≈ 0,0359 mol.',
        '3. Considerando o rendimento de 80%: n_inicial = 0,0359 / 0,80 ≈ 0,0449 mol.',
        '4. Massa de NH₄HCO₃ = 0,0449 mol × 79 g/mol ≈ 3,54 g (mais próxima de 3,5 g).'
      ],
      timeSaverTip: 'Repare que 0,082 × 453 ≈ 37,1 e 79 / 37,1 ≈ 2,13. Então Massa = (4 × 2,13) / (3 × 0,8) = 8,52 / 2,4 ≈ 3,55 g!',
      trapAlert: 'Esquecer de dividir por 3 (os 3 gases formados) ou esquecer do rendimento de 80% (que daria 2,8 g ou 8,9 g).'
    }
  },
  // QUESTÃO 128 - FÍSICA
  {
    id: 'enem2025-128',
    subject: 'fisica',
    topic: 'Cinemática Vetorial / Composição de Movimentos (Velocidade Relativa)',
    source: 'ENEM 2025 • Q128 (Caderno 5 Amarelo)',
    difficulty: 2,
    context: 'Considere um avião que, ao decolar, é instruído pela torre a atingir, em 6 minutos (0,1 hora), uma posição de 20 km a Leste, 20 km a Norte e 1 km de altitude em relação ao ponto de decolagem. No entanto, no instante da decolagem, começa a soprar um vento cujo vetor velocidade tem componentes 30 km/h para Leste, 20 km/h para Sul e 1 km/h de cima para baixo.',
    imageUrl: '/enem2025/q128.png',
    question: 'Durante a ação do vento, a velocidade v que o piloto deve estabelecer em relação ao ar para que o avião chegue à posição esperada no tempo indicado tem as componentes',
    options: [
      { letter: 'A', text: '230 km/h para Leste, 180 km/h para Sul e 9 km/h para baixo.' },
      { letter: 'B', text: '230 km/h para Leste, 180 km/h para Norte e 9 km/h para cima.' },
      { letter: 'C', text: '200 km/h para Oeste, 200 km/h para Norte e 10 km/h para cima.' },
      { letter: 'D', text: '170 km/h para Leste, 220 km/h para Norte e 11 km/h para cima.' },
      { letter: 'E', text: '170 km/h para Leste, 180 km/h para Norte e 11 km/h para cima.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 6 minutos = 1/10 de hora (0,1 h)! Logo, a velocidade RESULTANTE necessária é só multiplicar as distâncias por 10: 200 km/h Leste, 200 km/h Norte e 10 km/h para cima! Como o vento já empurra 30 km/h para Leste, o avião só precisa de 200 - 30 = 170 km/h Leste! Como o vento atrapalha empurrando 20 km/h para Sul e 1 km/h para baixo, o avião precisa compensar com 200 + 20 = 220 km/h Norte e 10 + 1 = 11 km/h para cima! Alternativa D!',
      stepByStep: [
        '1. Tempo Δt = 6 min = 6/60 h = 0,1 h.',
        '2. Velocidade resultante desejada (v_res = v_avião + v_vento): Leste = 20/0,1 = 200 km/h; Norte = 20/0,1 = 200 km/h; Cima = 1/0,1 = 10 km/h.',
        '3. Eixo Leste: v_avião + 30 = 200 => v_avião = 170 km/h para Leste.',
        '4. Eixo Norte-Sul: v_avião - 20 = 200 => v_avião = 220 km/h para Norte.',
        '5. Eixo Vertical: v_avião - 1 = 10 => v_avião = 11 km/h para cima.'
      ],
      timeSaverTip: 'Vento a favor = Subtrai (200 - 30 = 170). Vento contra = Soma para compensar (200 + 20 = 220 e 10 + 1 = 11).',
      trapAlert: 'Subtrair no eixo Norte-Sul achando que o vento para o Sul ajuda a ir para o Norte (E).'
    }
  },
  // QUESTÃO 129 - QUÍMICA / BIOLOGIA
  {
    id: 'enem2025-129',
    subject: 'quimica',
    topic: 'Cinética Química / Catalisadores, Enzimas e Energia de Ativação',
    source: 'ENEM 2025 • Q129 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Gráfico de Enzima/Catalisador (Cai Todo Ano!)',
    context: 'Nos processos de transformação e reciclagem de recursos naturais, as velocidades das reações químicas são estudadas pela cinética química. Uma reação A → B é realizada na presença e na ausência de uma enzima, com todas as demais condições permanecendo inalteradas. Considere que, no gráfico da variação de energia ao longo dessa reação, a linha contínua representa o avanço da reação na ausência da enzima, e a linha pontilhada, na presença da enzima.',
    question: 'O gráfico que representa a situação descrita é:',
    options: [
      { letter: 'A', text: 'Gráfico A (energias iniciais de A diferentes)', imageUrl: '/enem2025/q129_A.png' },
      { letter: 'B', text: 'Gráfico B (energias finais de B diferentes)', imageUrl: '/enem2025/q129_B.png' },
      { letter: 'C', text: 'Gráfico C (mesmo início A, mesmo fim B, pico pontilhado mais baixo)', imageUrl: '/enem2025/q129_C.png' },
      { letter: 'D', text: 'Gráfico D (pico pontilhado mais alto)', imageUrl: '/enem2025/q129_D.png' },
      { letter: 'E', text: 'Gráfico E (início e fim diferentes)', imageUrl: '/enem2025/q129_E.png' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: ENZIMA = CATALISADOR BIOLÓGICO! O catalisador NUNCA muda o ponto de partida (A) nem o ponto de chegada (B), ou seja, NÃO altera o ΔH! Ele apenas ABAIXA O MORRO (diminui a energia de ativação)! Linha pontilhada com morro mais baixo e mesmo início/fim = Gráfico C!',
      stepByStep: [
        '1. Enzimas são biocatalisadores que aceleram a reação diminuindo a energia de ativação (o topo da curva).',
        '2. A entalpia dos reagentes (A) e dos produtos (B) permanece exatamente a mesma.',
        '3. Logo, a curva pontilhada deve partir do mesmo A, chegar no mesmo B e ter pico inferior à linha contínua (Alternativa C).'
      ],
      timeSaverTip: 'Catalisador/Enzima: Mesmo começo, mesmo fim, morrinho mais baixo!',
      trapAlert: 'Escolher gráficos onde A ou B mudam de altura (A, B, E) ou onde o morro pontilhado sobe (D).'
    }
  },
  // QUESTÃO 130 - FÍSICA / MATEMÁTICA
  {
    id: 'enem2025-130',
    subject: 'fisica',
    topic: 'Termometria e Eletrodinâmica / Sensibilidade de Sensores (Taxa de Variação)',
    source: 'ENEM 2025 • Q130 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Para um sensor feito de platina, a relação entre a resistência e a temperatura pode ser descrita por uma equação do tipo R(T) = A + B·T, em que T é a temperatura e A e B são constantes. O gráfico apresenta a dependência da resistência em função da temperatura para cinco diferentes sensores.',
    imageUrl: '/enem2025/q130.png',
    question: 'Os sensores que apresentam maior sensibilidade são',
    options: [
      { letter: 'A', text: '1 e 2.' },
      { letter: 'B', text: '1 e 3.' },
      { letter: 'C', text: '2 e 3.' },
      { letter: 'D', text: '2 e 4.' },
      { letter: 'E', text: '2 e 5.' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: MAIOR SENSIBILIDADE = MAIOR INCLINAÇÃO DA RETA (maior coeficiente angular B = ΔR / ΔT)! Ou seja, para uma pequena mudança de temperatura, a resistência varia muito! Olhando o gráfico, quais são as duas retas mais inclinadas ("mais em pé")? As retas verde (Sensor 2) e roxa/magenta (Sensor 5)! Alternativa E!',
      stepByStep: [
        '1. Sensibilidade de um sensor linear R(T) = A + B·T é dada pela taxa de variação ΔR/ΔT, que é o coeficiente angular B (inclinação da reta).',
        '2. As retas 1 e 3 são quase horizontais (baixa sensibilidade).',
        '3. As retas mais íngremes (maior inclinação) são as dos sensores 2 e 5.'
      ],
      timeSaverTip: 'Sensibilidade em gráfico = Inclinação da reta! Quanto mais inclinada, mais sensível.',
      trapAlert: 'Escolher o Sensor 1 achando que "estar mais alto no gráfico" significa maior sensibilidade (isso é só o coeficiente linear A!).'
    }
  },
  // QUESTÃO 131 - BIOLOGIA
  {
    id: 'enem2025-131',
    subject: 'biologia',
    topic: 'Parasitologia / Ciclos de Vida e Profilaxia (Esquistossomose)',
    source: 'ENEM 2025 • Q131 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Campeão de Parasitologia: Molusco Aquático = Esquistossomose!',
    context: 'O ácido úsnico é retirado de liquens e foi testado contra diversas espécies, conforme o quadro:\n• Aedes aegypti (larvas): Baixa eficiência\n• Bacilo de Koch: Média eficiência\n• Moluscos aquáticos (adultos): Alta eficiência\n• Pernilongo (larvas): Média eficiência\n• Vermes platelmintos: Ineficiente',
    imageUrl: '/enem2025/q131.png',
    question: 'O ácido úsnico mostrou-se mais indicado para o controle da',
    options: [
      { letter: 'A', text: 'esquistossomose.' },
      { letter: 'B', text: 'febre amarela.' },
      { letter: 'C', text: 'coqueluche.' },
      { letter: 'D', text: 'tuberculose.' },
      { letter: 'E', text: 'dengue.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Na tabela, onde está a "ALTA EFICIÊNCIA"? Em "MOLUSCOS AQUÁTICOS (adultos)"! Qual é a doença clássica do ENEM cujo hospedeiro intermediário é um molusco aquático (caramujo Biomphalaria)? ESQUISTOSSOMOSE! (Combater o caramujo interrompe o ciclo!).',
      stepByStep: [
        '1. O ácido úsnico apresentou "Alta eficiência" contra moluscos aquáticos adultos.',
        '2. Os caramujos aquáticos (moluscos gastrópodes do gênero Biomphalaria) são os hospedeiros intermediários do Schistosoma mansoni.',
        '3. Mesmo sendo ineficiente contra o verme adulto diretamente, eliminar o hospedeiro intermediário (molusco) controla a transmissão da esquistossomose.'
      ],
      timeSaverTip: 'Molusco aquático / Caramujo = Esquistossomose (Barriga d\'água) SEMPRE!',
      trapAlert: 'Descartar esquistossomose só porque a última linha diz "Vermes platelmintos: Ineficiente" — o controle aqui é de vetor/hospedeiro intermediário (caramujo)!'
    }
  },
  // QUESTÃO 132 - QUÍMICA
  {
    id: 'enem2025-132',
    subject: 'quimica',
    topic: 'Físico-Química / Adsorção e Superfície de Contato (Carvão Ativado)',
    source: 'ENEM 2025 • Q132 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'A filtração em carvão é uma das mais antigas formas de purificação de água. O carvão ativado, diferentemente do carvão comum, é útil para ser empregado na remoção de material orgânico, cloro e outros contaminantes. Essa capacidade decorre de suas propriedades de adsorção. A origem do material utilizado para produzir o carvão ativado pode influenciar sua porosidade e, consequentemente, interferir na capacidade do material de remover impurezas.',
    imageUrl: '/enem2025/q132.png',
    question: 'Qual característica do carvão ativado explica a sua maior eficiência nesse processo?',
    options: [
      { letter: 'A', text: 'Massa.' },
      { letter: 'B', text: 'Dureza.' },
      { letter: 'C', text: 'Densidade.' },
      { letter: 'D', text: 'Superfície.' },
      { letter: 'E', text: 'Condutividade.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: ADSORÇÃO (com "D") é um fenômeno de SUPERFÍCIE! O carvão ativado é cheio de microporos, mesoporos e macroporos justamente para ter uma imensa ÁREA SUPERFICIAL (superfície de contato) onde as impurezas ficam retidas!',
      stepByStep: [
        '1. Adsorção é a adesão de moléculas de um fluido (adsorvato) na superfície sólida (adsorvente).',
        '2. A alta porosidade do carvão ativado aumenta drasticamente sua área superficial específica (Superfície).',
        '3. Quanto maior a superfície de contato interna dos poros, maior a retenção de contaminantes.'
      ],
      timeSaverTip: 'Carvão ativado / Porosidade / Adsorção = Área de Superfície (Superfície de contato)!',
      trapAlert: 'Confundir adsorção (superfície) com absorção (volume/densidade).'
    }
  },
  // QUESTÃO 133 - BIOLOGIA
  {
    id: 'enem2025-133',
    subject: 'biologia',
    topic: 'Biotecnologia / Engenharia Genética e Transgenia',
    source: 'ENEM 2025 • Q133 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'A maioria dos seres vivos tem um relógio biológico (ciclo circadiano), que regula as mudanças metabólicas e comportamentais de acordo com o ciclo de 24 horas de rotação da Terra. Em 2015, um artigo publicado na revista Science Advantage mostrou ser possível a transferência dos genes do relógio circadiano da cianobactéria Synechococcus elongatus para o genoma da bactéria Escherichia coli, um organismo não circadiano.',
    question: 'Estarão presentes no organismo geneticamente modificado os genes do',
    options: [
      { letter: 'A', text: 'metabolismo de E. coli, apenas.' },
      { letter: 'B', text: 'ciclo circadiano de E. coli, apenas.' },
      { letter: 'C', text: 'metabolismo de S. elongatus e do ciclo circadiano de E. coli.' },
      { letter: 'D', text: 'ciclo circadiano de S. elongatus e do metabolismo de E. coli.' },
      { letter: 'E', text: 'ciclo circadiano de S. elongatus e do ciclo circadiano de E. coli.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Puramente leitura atenta! Quem recebeu o gene? A bactéria E. coli (que já tem os genes do seu próprio metabolismo, mas NÃO tinha ciclo circadiano). Qual gene ela recebeu de fora? O gene do ciclo circadiano de S. elongatus! Logo, a E. coli modificada terá: ciclo circadiano de S. elongatus + metabolismo de E. coli (Alternativa D)!',
      stepByStep: [
        '1. Organismo receptor: Escherichia coli (mantém seus genes originais de metabolismo, e o texto diz que ela é "não circadiana").',
        '2. Gene inserido (transgene): genes do relógio circadiano da cianobactéria S. elongatus.',
        '3. Resultado: genes do ciclo circadiano de S. elongatus + genes do metabolismo de E. coli.'
      ],
      timeSaverTip: 'Como o texto diz que E. coli é "um organismo NÃO circadiano", qualquer opção que fale em "ciclo circadiano de E. coli" (B, C, E) está automaticamente errada!',
      trapAlert: 'Trocar os nomes das duas espécies na leitura rápida (C).'
    }
  },
  // QUESTÃO 134 - BIOLOGIA
  {
    id: 'enem2025-134',
    subject: 'biologia',
    topic: 'Zoologia / Fisiologia de Aves (Glândula Uropigial e Impermeabilização)',
    source: 'ENEM 2025 • Q134 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Os funcionários de um zoológico observaram um aumento na taxa de mortalidade de aves aquáticas por afogamento. Um grupo de biólogos analisou o comportamento das aves por várias semanas e observou que elas apresentavam dificuldade de flutuação, por causa do encharcamento das penas com água.',
    question: 'O aumento na taxa de mortalidade dessas aves estava associado a uma redução na',
    options: [
      { letter: 'A', text: 'dilatação do papo.' },
      { letter: 'B', text: 'reposição de penas das asas.' },
      { letter: 'C', text: 'secreção da glândula uropigial.' },
      { letter: 'D', text: 'formação da membrana natatória.' },
      { letter: 'E', text: 'largura das cavidades de ossos pneumáticos.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Penas de aves aquáticas encharcando e afundando = falta do óleo impermeabilizante (ceras/lipídios) produzido pela GLÂNDULA UROPIGIAL (localizada na base da cauda)!',
      stepByStep: [
        '1. As aves possuem uma única glândula sebácea/oleosa principal na base da cauda: a glândula uropigial (ou uropigiana).',
        '2. Com o bico, a ave espalha essa secreção lipídica hidrofóbica sobre as penas, impermeabilizando-as.',
        '3. Sem essa secreção, a água encharca as penas, aumenta a densidade da ave e causa o afogamento.'
      ],
      timeSaverTip: 'Ave aquática + Impermeabilização das penas + Óleo/Lipídio = Glândula Uropigial!',
      trapAlert: 'Marcar ossos pneumáticos (E), ignorando que o texto especificou "por causa do encharcamento das penas com água".'
    }
  },
  // QUESTÃO 135 - FÍSICA
  {
    id: 'enem2025-135',
    subject: 'fisica',
    topic: 'Eletrodinâmica / Potência Elétrica (P = U · i) e Fusível de Segurança',
    source: 'ENEM 2025 • Q135 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Questão Clássica de Fusível/Disjuntor (P = U · i)',
    context: 'Uma estudante comprou uma régua com seis tomadas que suporta uma corrente elétrica máxima de 20 A na tensão de 110 V. Acima desse valor, o fusível se rompe, inutilizando-a até que um novo fusível seja instalado. Ela mantém o computador (250 W) e o condicionador de ar portátil (1 100 W) ligados permanentemente e tenta realizar 4 atividades, uma de cada vez, na ordem:\n1º – imprimir um trabalho (Impressora: 660 W);\n2º – fazer um café (Cafeteira: 900 W);\n3º – ligar a luminária (Luminária LED: 5 W);\n4º – secar os cabelos (Secador: 750 W).',
    imageUrl: '/enem2025/q135.png',
    question: 'Considerando a ordem das tentativas, quantas atividades a estudante conseguiu realizar sem queimar o fusível?',
    options: [
      { letter: 'A', text: '4' },
      { letter: 'B', text: '3' },
      { letter: 'C', text: '2' },
      { letter: 'D', text: '1' },
      { letter: 'E', text: '0' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Em vez de calcular a corrente de cada aparelho, calcule a POTÊNCIA MÁXIMA que a régua aguenta! P_máx = U · i_máx = 110 V × 20 A = 2.200 W! Fixos ligados: Computador (250 W) + Ar (1.100 W) = 1.350 W. Folga disponível na régua: 2.200 - 1.350 = 850 W! 1ª tentativa: Impressora (660 W <= 850 W) -> FUNCIONA! 2ª tentativa: Cafeteira (900 W > 850 W) -> QUEIMA O FUSÍVEL E INUTILIZA A RÉGUA! Logo, ela só conseguiu realizar 1 atividade (Alternativa D)!',
      stepByStep: [
        '1. Potência máxima suportada pela régua: P_máx = 110 V × 20 A = 2.200 W.',
        '2. Potência já ocupada permanentemente: 250 W (PC) + 1.100 W (Ar) = 1.350 W. Sobram 2.200 - 1.350 = 850 W.',
        '3. 1º (Impressora 660 W): 1.350 + 660 = 2.010 W <= 2.200 W (Realizada com sucesso!).',
        '4. 2º (Cafeteira 900 W): 1.350 + 900 = 2.250 W > 2.200 W -> O fusível se rompe na 2ª tentativa, inutilizando a régua para a 3ª e 4ª.',
        '5. Total de atividades realizadas: apenas 1.'
      ],
      timeSaverTip: 'Sempre transforme o limite de corrente (20 A × 110 V = 2.200 W) em limite de Potência em Watts: somar potências é 10x mais rápido que dividir tudo por 110!',
      trapAlert: 'Marcar 3 atividades (B) por achar que depois de queimar na cafeteira ela ainda conseguiria ligar a luminária e o secador (o texto avisa: "inutilizando-a até que um novo fusível seja instalado"!).'
    }
  }
];
