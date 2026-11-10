import { Question } from '../../types';

export const mathQuestionsPart1: Question[] = [
  // 1 - ESPECIAL 1 (Top 1: Porcentagem)
  {
    id: 'mat-01',
    subject: 'matematica',
    topic: 'Porcentagem / Descontos',
    source: 'Questão Adaptada ENEM 2023 (Foco em Agilidade)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Top 1 mais cobrado em Matemática (Matemática Básica)',
    context: 'Uma loja de eletrônicos oferece 15% de desconto para pagamentos via Pix na compra de um fone que custa R$ 240,00.',
    question: 'Qual é o valor economizado com esse desconto?',
    options: [
      { letter: 'A', text: 'R$ 24,00' },
      { letter: 'B', text: 'R$ 30,00' },
      { letter: 'C', text: 'R$ 36,00' },
      { letter: 'D', text: 'R$ 40,00' },
      { letter: 'E', text: 'R$ 48,00' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 10% de 240 = 24. A metade (5%) = 12. Some os dois: 24 + 12 = 36 reais na lata!',
      stepByStep: ['1. 10% de 240 = 24.', '2. 5% = metade de 24 = 12.', '3. 15% = 24 + 12 = 36.'],
      timeSaverTip: 'Nunca monte a conta armada (240 × 15) / 100.',
      trapAlert: 'A pegadinha é marcar o valor pago (204) em vez do valor economizado.',
      deepMemoryFact: 'No ENEM, ~25% da prova de matemática é pura matemática básica (porcentagem, fração, regra de 3 e proporcionalidade). Dominar porcentagens mentais garante 700+ na TRI.'
    }
  },
  // 2 - ESPECIAL 2 (Top 2: Mediana e Estatística)
  {
    id: 'mat-02',
    subject: 'matematica',
    topic: 'Estatística / Mediana Express',
    source: 'ENEM 2023',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Estatística (Mediana é certeza absoluta de cair)',
    context: 'Um atleta anotou seus tempos em segundos em 7 corridas de 100 metros: 11,2; 10,8; 11,5; 10,9; 11,0; 10,7; 11,4.',
    question: 'Qual é a MEDIANA desses tempos registrados?',
    options: [
      { letter: 'A', text: '10,9 s' },
      { letter: 'B', text: '11,0 s' },
      { letter: 'C', text: '11,1 s' },
      { letter: 'D', text: '11,2 s' },
      { letter: 'E', text: '11,3 s' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 7 termos = o do meio é o 4º termo em ordem crescente. Riscando os menores: 10,7; 10,8; 10,9 e o quarto é 11,0!',
      stepByStep: ['1. Rol: 10,7 | 10,8 | 10,9 | [11,0] | 11,2 | 11,4 | 11,5.', '2. O valor exatamente central é 11,0 s.'],
      timeSaverTip: 'Não perca tempo calculando a média somando os números com vírgula!',
      trapAlert: 'Pegar o número que está no meio antes de colocar em ordem.',
      deepMemoryFact: 'Se a quantidade de elementos (n) for PAR, a mediana é obrigatoriamente a média aritmética dos dois termos centrais: (X_(n/2) + X_(n/2 + 1)) / 2.'
    }
  },
  // 3 - ESPECIAL 3 (Top 3: Escalas e Cartografia)
  {
    id: 'mat-03',
    subject: 'matematica',
    topic: 'Escalas / Cartografia',
    source: 'Questão Adaptada ENEM 2022 (Foco em Agilidade)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Escala Cartográfica (Presente em todas as edições)',
    context: 'Em uma planta baixa com escala 1 : 50, uma sala retangular mede 8 cm de comprimento por 6 cm de largura.',
    question: 'Qual é a área REAL dessa sala em metros quadrados (m²)?',
    options: [
      { letter: 'A', text: '12 m²' },
      { letter: 'B', text: '24 m²' },
      { letter: 'C', text: '48 m²' },
      { letter: 'D', text: '120 m²' },
      { letter: 'E', text: '240 m²' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Passe as medidas para o real primeiro! 8 cm × 50 = 400 cm = 4 metros. 6 cm × 50 = 300 cm = 3 metros. Área = 4 × 3 = 12 m²!',
      stepByStep: ['1. Comprimento real: 8 × 50 = 400 cm = 4 m.', '2. Largura real: 6 × 50 = 300 cm = 3 m.', '3. Área real = 4 m × 3 m = 12 m².'],
      timeSaverTip: 'Converter os lados para metros antes de multiplicar a área evita contas com dezenas de milhares.',
      trapAlert: 'Multiplicar 8 × 6 = 48 e só multiplicar por 50 (esquecendo que na área a escala é ao quadrado).',
      deepMemoryFact: 'Propriedade dimensional de escalas: Escala linear = d/D (expoente 1). Escala de área = (d/D)² (expoente 2). Escala volumétrica = (d/D)³ (expoente 3).'
    }
  },
  // 4 - ESPECIAL 4 (Top 4: Geometria Espacial Cilindro)
  {
    id: 'mat-04',
    subject: 'matematica',
    topic: 'Geometria Espacial / Volume de Cilindro',
    source: 'Questão Adaptada ENEM 2023 (Foco em Agilidade)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Volume de Cilindro (Top 1 disparado da Geometria)',
    context: 'Uma lata de tinta em formato cilíndrico reto possui raio de 10 cm e altura de 20 cm. Considere π = 3.',
    question: 'Qual é o volume dessa lata em litros? (Lembre que 1.000 cm³ = 1 Litro)',
    options: [
      { letter: 'A', text: '1,5 L' },
      { letter: 'B', text: '3,0 L' },
      { letter: 'C', text: '6,0 L' },
      { letter: 'D', text: '12,0 L' },
      { letter: 'E', text: '15,0 L' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: V = π · r² · h = 3 · (10²) · 20 = 3 · 100 · 20 = 6.000 cm³. Como 1.000 cm³ = 1 L → corte 3 zeros: 6 Litros!',
      stepByStep: ['1. Área da base = π · r² = 3 · 100 = 300 cm².', '2. Volume = 300 × 20 = 6.000 cm³.', '3. 6.000 cm³ = 6 Litros.'],
      timeSaverTip: 'Corte 3 zeros para passar de cm³ para Litros em 1 segundo.',
      trapAlert: 'Multiplicar o raio pela altura antes de elevar o raio ao quadrado.',
      deepMemoryFact: 'Fórmulas do cilindro: Área Lateral = 2·π·r·h | Área Total = 2·π·r·h + 2·π·r² | Volume = π·r²·h. Relação métrica: 1 m³ = 1.000 L | 1 dm³ = 1 L | 1 cm³ = 1 mL.'
    }
  },
  // 5 - ESPECIAL 5 (Top 5: Probabilidade)
  {
    id: 'mat-05',
    subject: 'matematica',
    topic: 'Probabilidade Simples',
    source: 'ENEM 2022',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Probabilidade (Casos Favoráveis / Casos Possíveis)',
    context: 'Em uma urna com 25 fichas idênticas, 15 são verdes e 10 são amarelas.',
    question: 'Retirando-se uma ficha aleatoriamente, qual é a probabilidade percentual de sair uma ficha amarela?',
    options: [
      { letter: 'A', text: '10%' },
      { letter: 'B', text: '25%' },
      { letter: 'C', text: '40%' },
      { letter: 'D', text: '50%' },
      { letter: 'E', text: '60%' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 10/25. Para virar porcentagem de cabeça, multiplique em cima e embaixo por 4: (10×4)/(25×4) = 40/100 = 40%!',
      stepByStep: ['1. Casos favoráveis = 10 fichas amarelas.', '2. Total = 25 fichas.', '3. 10/25 = 40/100 = 40%.'],
      timeSaverTip: 'Toda fração com denominador 25 vira porcentagem multiplicando direto por 4.',
      trapAlert: 'Fazer 10 / 15 (amarelas sobre verdes) em vez de dividir pelo total.',
      deepMemoryFact: 'Probabilidade de eventos complementares: P(A) + P(não A) = 1 (100%). Em questões de "pelo menos um", calcule 1 - P(nenhum).'
    }
  },
  // 6 - ESPECIAL 6 (Top 6: Divisão Proporcional)
  {
    id: 'mat-06',
    subject: 'matematica',
    topic: 'Razão e Proporção / Divisão Proporcional',
    source: 'Questão Adaptada ENEM 2021 (Foco em Agilidade)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Divisão Proporcional em Partes (Constante no ENEM)',
    context: 'Dois sócios dividem um lucro de R$ 90.000,00 proporcionalmente ao valor investido por cada um: 2 partes para o sócio A e 3 partes para o sócio B.',
    question: 'Quanto coube ao sócio B?',
    options: [
      { letter: 'A', text: 'R$ 30.000,00' },
      { letter: 'B', text: 'R$ 36.000,00' },
      { letter: 'C', text: 'R$ 45.000,00' },
      { letter: 'D', text: 'R$ 54.000,00' },
      { letter: 'E', text: 'R$ 60.000,00' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Total de partes = 2 + 3 = 5 partes. Cada parte vale 90.000 / 5 = 18.000. O sócio B tem 3 partes: 3 × 18.000 = R$ 54.000!',
      stepByStep: ['1. Soma das partes: 2 + 3 = 5 partes.', '2. Valor de 1 parte: 90.000 / 5 = 18.000.', '3. Parte de B: 3 × 18.000 = 54.000.'],
      timeSaverTip: 'Dividir por 5 de cabeça: corte 1 zero e dobre o número (90.000 vira 9.000 × 2 = 18.000).',
      trapAlert: 'Calcular a parte de A (36.000) e esquecer de responder a de B.',
      deepMemoryFact: 'Divisão inversamente proporcional: se for inversamente a 2 e 3, a divisão é diretamente proporcional aos inversos 1/2 e 1/3 (multiplique pelo MMC 6 virando proporção 3 e 2).'
    }
  },
  // 7 - ESPECIAL 7 (Top 7: Princípio Fundamental da Contagem)
  {
    id: 'mat-07',
    subject: 'matematica',
    topic: 'Análise Combinatória / Princípio Fundamental',
    source: 'ENEM 2023',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • PFC / Senhas e Códigos',
    context: 'Para criar uma senha bancária de 4 dígitos distintos, um cliente deve escolher apenas entre os algarismos 1, 2, 3, 4, 5 e 6.',
    question: 'Quantas senhas diferentes podem ser formadas nessas condições?',
    options: [
      { letter: 'A', text: '24' },
      { letter: 'B', text: '120' },
      { letter: 'C', text: '360' },
      { letter: 'D', text: '720' },
      { letter: 'E', text: '1.296' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: A ordem importa (é senha) e são dígitos DISTINTOS. Multiplique as opções: 6 × 5 × 4 × 3 = 30 × 12 = 360!',
      stepByStep: ['1. 1º dígito: 6 opções.', '2. 2º dígito: 5 opções.', '3. 3º dígito: 4 opções.', '4. 4º dígito: 3 opções.', '5. 6 × 5 × 4 × 3 = 360.'],
      timeSaverTip: 'Multiplique em pares: (6×5=30) e (4×3=12) → 30 × 12 = 360 de cabeça.',
      trapAlert: 'Fazer 6⁴ = 1.296 (esquecendo que a questão exigiu dígitos distintos).',
      deepMemoryFact: 'Se pudesse repetir algarismos: 6 × 6 × 6 × 6 = 6⁴ = 1.296. A palavra "distintos" ou "diferentes" é o gatilho mental para subtrair 1 opção a cada etapa.'
    }
  },
  // 8 - ESPECIAL 8 (Top 8: Pitágoras e Triângulo 3-4-5)
  {
    id: 'mat-08',
    subject: 'matematica',
    topic: 'Geometria Plana / Pitágoras Express',
    source: 'Questão Adaptada ENEM 2022 (Foco em Agilidade)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Teorema de Pitágoras e Triângulos Notáveis',
    context: 'Uma rampa de acessibilidade tem 15 metros de comprimento e vence uma altura vertical de 9 metros.',
    question: 'Qual é o comprimento horizontal da base dessa rampa?',
    options: [
      { letter: 'A', text: '6 m' },
      { letter: 'B', text: '10 m' },
      { letter: 'C', text: '12 m' },
      { letter: 'D', text: '13 m' },
      { letter: 'E', text: '14 m' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: TRIÂNGULO 3-4-5 MULTIPLICADO POR 3! Se a hipotenusa é 15 (5×3) e um cateto é 9 (3×3), o outro cateto TEM que ser 4 × 3 = 12 m!',
      stepByStep: ['1. Triângulo pitagórico básico: 3 - 4 - 5.', '2. Multiplicando todos por 3: 9 - 12 - 15.', '3. Logo, o cateto horizontal mede 12 metros.'],
      timeSaverTip: 'Reconhecer os múltiplos de 3-4-5 evita fazer 15² - 9² = 225 - 81 = 144.',
      trapAlert: 'Subtrair direto 15 - 9 = 6.',
      deepMemoryFact: 'Ternos pitagóricos para memorizar para o ENEM: (3, 4, 5) e seus múltiplos (6,8,10 / 9,12,15) e o segundo terno mais famoso (5, 12, 13).'
    }
  },
  // 9 - ESPECIAL 9 (Top 9: Função Afim / Taxa de Variação)
  {
    id: 'mat-09',
    subject: 'matematica',
    topic: 'Função do 1º Grau / Gráficos',
    source: 'ENEM 2021',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Função Afim (y = ax + b com taxa fixa e variável)',
    context: 'Um serviço de transporte por aplicativo cobra uma taxa fixa de bandeirada de R$ 5,00 mais R$ 2,50 por quilômetro rodado (x).',
    question: 'Qual é a distância percorrida por um passageiro que pagou R$ 42,50 por uma corrida?',
    options: [
      { letter: 'A', text: '12 km' },
      { letter: 'B', text: '15 km' },
      { letter: 'C', text: '17 km' },
      { letter: 'D', text: '19 km' },
      { letter: 'E', text: '21 km' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Tire a taxa fixa primeiro: 42,50 - 5 = 37,50. Divida 37,50 por 2,50: cabe exatamente 15 vezes!',
      stepByStep: ['1. Equação: 5 + 2,50x = 42,50.', '2. 2,50x = 37,50.', '3. x = 37,50 / 2,50 = 375 / 25 = 15 km.'],
      timeSaverTip: 'Dividir por 2,5 de cabeça: dobre o valor e divida por 5 (37,5 × 2 = 75 / 5 = 15).',
      trapAlert: 'Dividir o total de 42,50 direto por 2,50 sem subtrair os 5 da bandeirada.',
      deepMemoryFact: 'Em y = ax + b: "b" é sempre o ponto inicial (quando x=0) e "a" é a taxa angular / variação constante: a = Δy / Δx.'
    }
  },
  // 10
  {
    id: 'mat-10',
    subject: 'matematica',
    topic: 'Regra de Três Composta / Inversa',
    source: 'Questão Adaptada ENEM 2023 (Foco em Agilidade)',
    difficulty: 1,
    context: 'Se 6 máquinas iguais produzem uma encomenda em 10 dias, quantos dias serão necessários se operarem 15 dessas máquinas no mesmo ritmo?',
    question: 'Quantos dias serão gastos pelas 15 máquinas?',
    options: [
      { letter: 'A', text: '3 dias' },
      { letter: 'B', text: '4 dias' },
      { letter: 'C', text: '5 dias' },
      { letter: 'D', text: '6 dias' },
      { letter: 'E', text: '8 dias' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Mais máquinas = MENOS dias (inversamente proporcional). O produto Máquinas × Dias é constante: 6 × 10 = 60. Com 15 máquinas: 60 / 15 = 4 dias!',
      stepByStep: ['1. Grandezas inversas: dobro de máquinas = metade dos dias.', '2. Constante total de trabalho = 6 × 10 = 60.', '3. Dias com 15 máquinas = 60 / 15 = 4 dias.'],
      timeSaverTip: 'Em grandezas inversas, multiplique na mesma linha e divida pelo outro número.',
      trapAlert: 'Multiplicar em cruz como se fosse direta (15 × 10 / 6 = 25 dias) - absurdo ter mais máquinas e demorar mais tempo!'
    }
  },
  // 11
  {
    id: 'mat-11',
    subject: 'matematica',
    topic: 'Aritmética / Média Ponderada',
    source: 'ENEM 2022',
    difficulty: 1,
    context: 'As notas de um candidato em três provas com pesos 2, 3 e 5 foram, respectivamente, 6,0; 8,0 e 7,0.',
    question: 'Qual é a média ponderada final obtida por esse candidato?',
    options: [
      { letter: 'A', text: '6,8' },
      { letter: 'B', text: '7,0' },
      { letter: 'C', text: '7,1' },
      { letter: 'D', text: '7,4' },
      { letter: 'E', text: '7,6' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Soma dos pesos = 2 + 3 + 5 = 10 (divisor perfeito!). Multiplique as notas pelos pesos: (6×2 = 12) + (8×3 = 24) + (7×5 = 35) = 71. Divida por 10: 7,1!',
      stepByStep: ['1. Produtos: 12 + 24 + 35 = 71.', '2. Soma dos pesos: 2 + 3 + 5 = 10.', '3. Média = 71 / 10 = 7,1.'],
      timeSaverTip: 'Como a soma dos pesos dá 10, basta somar os produtos e colocar uma vírgula!',
      trapAlert: 'Fazer média simples somando (6 + 8 + 7) / 3 = 7,0.'
    }
  },
  // 12
  {
    id: 'mat-12',
    subject: 'matematica',
    topic: 'Geometria Espacial / Cone Express',
    source: 'Questão Adaptada ENEM 2023 (Foco em Agilidade)',
    difficulty: 1,
    context: 'Uma casquinha de sorvete em formato de cone reto tem raio da base de 3 cm e altura de 10 cm. Considere π = 3.',
    question: 'Qual é o volume dessa casquinha de sorvete em cm³?',
    options: [
      { letter: 'A', text: '30 cm³' },
      { letter: 'B', text: '60 cm³' },
      { letter: 'C', text: '90 cm³' },
      { letter: 'D', text: '180 cm³' },
      { letter: 'E', text: '270 cm³' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Cone tem bico, divide por 3! Mas como π = 3, o π corta com o /3 da fórmula! Sobra apenas: r² · h = 3² · 10 = 9 · 10 = 90 cm³!',
      stepByStep: ['1. V = (1/3) · π · r² · h.', '2. Como π = 3, (1/3) × 3 = 1 (corta).', '3. V = r² · h = 9 · 10 = 90 cm³.'],
      timeSaverTip: 'Sempre que o ENEM der π = 3 para cone ou pirâmide, corte o 3 com o denominador da fórmula!',
      trapAlert: 'Esquecer de dividir por 3 e marcar 270 (volume do cilindro).'
    }
  },
  // 13 - ESPECIAL 10 (Top 10: Vértice da Parábola / Máximos e Mínimos)
  {
    id: 'mat-13',
    subject: 'matematica',
    topic: 'Função Quadrática / Vértice',
    source: 'Questão Adaptada ENEM 2021 (Foco em Agilidade)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Vértice da Parábola (Máximos e Mínimos sem Bhaskara)',
    context: 'O lucro diário L (em milhares de reais) de uma confeitaria em função da quantidade x de bolos produzidos é modelado por L(x) = -x² + 12x - 20.',
    question: 'Quantos bolos devem ser produzidos para se obter o LUCRO MÁXIMO?',
    options: [
      { letter: 'A', text: '4 bolos' },
      { letter: 'B', text: '6 bolos' },
      { letter: 'C', text: '10 bolos' },
      { letter: 'D', text: '12 bolos' },
      { letter: 'E', text: '16 bolos' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Pediu "quantos bolos para o máximo"? É o X do vértice: X_v = -b / (2a) = -12 / (2 × -1) = 6 bolos!',
      stepByStep: ['1. Identifique os coeficientes: a = -1, b = 12.', '2. X_v = -b / (2a) = -12 / (-2) = 6.', '3. Logo, 6 bolos geram o lucro máximo.'],
      timeSaverTip: 'A questão perguntou a QUANTIDADE de bolos (Xv), não o valor do lucro em R$ (Yv). Responda direto o Xv.',
      trapAlert: 'Calcular Bhaskara inteiro até o fim à toa.',
      deepMemoryFact: 'Se a questão pedisse o VALOR MÁXIMO do lucro em R$: Y_v = -Δ / (4a) ou simplesmente substitua X_v=6 na função: L(6) = -(6²) + 12(6) - 20 = -36 + 72 - 20 = 16 mil reais!'
    }
  },
  // 14
  {
    id: 'mat-14',
    subject: 'matematica',
    topic: 'Trigonometria Básica',
    source: 'ENEM 2022',
    difficulty: 1,
    context: 'Ao meio-dia, a sombra projetada no solo por um poste vertical de 5 metros de altura mede 5 metros.',
    question: 'Qual é o ângulo de elevação do Sol em relação ao plano horizontal nesse momento?',
    options: [
      { letter: 'A', text: '30°' },
      { letter: 'B', text: '45°' },
      { letter: 'C', text: '60°' },
      { letter: 'D', text: '75°' },
      { letter: 'E', text: '90°' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Altura = Sombra (os dois catetos são iguais a 5). Triângulo retângulo com catetos iguais é triângulo isósceles, logo os ângulos agudos são de 45°!',
      stepByStep: ['1. tg(θ) = Cateto Oposto / Cateto Adjacente = 5 / 5 = 1.', '2. O único ângulo notável com tangente igual a 1 é 45°.'],
      timeSaverTip: 'Cateto igual a cateto = sempre ângulo de 45 graus.',
      trapAlert: 'Confundir tangente com seno ou cosseno.'
    }
  },
  // 15
  {
    id: 'mat-15',
    subject: 'matematica',
    topic: 'Análise de Gráficos e Tabelas',
    source: 'ENEM 2023',
    difficulty: 1,
    context: 'Um produto custava R$ 100,00. No mês seguinte, teve seu preço reajustado com um aumento de 20%. No mês posterior, devido à queda de vendas, o novo valor sofreu um desconto de 20%.',
    question: 'Em relação ao valor inicial de R$ 100,00, o preço final do produto ficou:',
    options: [
      { letter: 'A', text: 'Exatamente igual (R$ 100,00)' },
      { letter: 'B', text: '4% mais caro (R$ 104,00)' },
      { letter: 'C', text: '4% mais barato (R$ 96,00)' },
      { letter: 'D', text: '2% mais barato (R$ 98,00)' },
      { letter: 'E', text: '10% mais barato (R$ 90,00)' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Aumentar 20% e depois reduzir 20% NUNCA volta pro mesmo valor! 100 + 20% = 120. Agora 20% de 120 = 24. Preço final: 120 - 24 = R$ 96,00 (4% mais barato).',
      stepByStep: ['1. R$ 100 + 20% = R$ 120,00.', '2. 10% de 120 = 12 → 20% = 24.', '3. R$ 120 - R$ 24 = R$ 96,00 (4% a menos).'],
      timeSaverTip: 'Regra de ouro: aumentou x% e reduziu x%? O resultado final é sempre uma perda de (x²/100)%. (20²/100 = 4% de perda).',
      trapAlert: 'Marcar que volta para 100 reais (a pegadinha mais frequente do ENEM).'
    }
  }
];
