import { Question } from '../../types';

export const mathQuestionsPart3: Question[] = [
  // 31
  {
    id: 'mat-31',
    subject: 'matematica',
    topic: 'Porcentagem / Acréscimo Real',
    source: 'Questão Adaptada ENEM 2023 (Foco em Agilidade)',
    difficulty: 1,
    context: 'A mensalidade de uma academia passou de R$ 80,00 para R$ 100,00.',
    question: 'Qual foi o percentual de aumento aplicado nessa mensalidade?',
    options: [
      { letter: 'A', text: '20%' },
      { letter: 'B', text: '25%' },
      { letter: 'C', text: '30%' },
      { letter: 'D', text: '35%' },
      { letter: 'E', text: '40%' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: O aumento foi de 20 reais. Em cima do valor ORIGINAL de 80: 20 / 80 = 1/4 = 25%!',
      stepByStep: ['1. Variação em reais = 100 - 80 = 20 reais.', '2. Fração sobre a base inicial = 20 / 80 = 1 / 4 = 25%.'],
      timeSaverTip: 'A base da porcentagem é SEMPRE o valor inicial (80), nunca o final (100).',
      trapAlert: 'Fazer 20 / 100 = 20% (pegadinha mais batida do ENEM).'
    }
  },
  // 32
  {
    id: 'mat-32',
    subject: 'matematica',
    topic: 'Geometria Plana / Área do Círculo',
    source: 'Questão Adaptada ENEM 2022 (Foco em Agilidade)',
    difficulty: 1,
    context: 'Uma praça circular tem diâmetro de 20 metros. Adote a aproximação π = 3,14.',
    question: 'Qual é a área total ocupada por essa praça?',
    options: [
      { letter: 'A', text: '62,8 m²' },
      { letter: 'B', text: '125,6 m²' },
      { letter: 'C', text: '314 m²' },
      { letter: 'D', text: '628 m²' },
      { letter: 'E', text: '1.256 m²' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Diâmetro = 20 m → RAIO = 10 m (metade!). Área = π · r² = 3,14 · (10²) = 3,14 · 100 = 314 m²!',
      stepByStep: ['1. Raio = Diâmetro / 2 = 20 / 2 = 10 m.', '2. Área = π · r² = 3,14 × 100 = 314 m².'],
      timeSaverTip: 'Multiplicar por 100 basta andar com a vírgula 2 casas para a direita.',
      trapAlert: 'Usar o diâmetro 20 no raio e achar 1.256 m².'
    }
  },
  // 33
  {
    id: 'mat-33',
    subject: 'matematica',
    topic: 'Conversão de Unidades de Tempo',
    source: 'ENEM 2021',
    difficulty: 1,
    context: 'Uma prova com 90 questões de múltipla escolha deve ser realizada em exatamente 4 horas e 30 minutos.',
    question: 'Em média, quantos minutos o candidato tem disponível para resolver cada questão?',
    options: [
      { letter: 'A', text: '2,5 minutos' },
      { letter: 'B', text: '3,0 minutos' },
      { letter: 'C', text: '3,5 minutos' },
      { letter: 'D', text: '4,0 minutos' },
      { letter: 'E', text: '4,5 minutos' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 4h30min = (4 × 60) + 30 = 240 + 30 = 270 minutos. Divida por 90 questões: 270 / 90. Corta o zero: 27 / 9 = 3,0 minutos exatos!',
      stepByStep: ['1. Tempo total = 4 × 60 + 30 = 270 minutos.', '2. 270 / 90 questões = 3 minutos por questão.'],
      timeSaverTip: '270 / 90 corta o zero e vira tabuada do 9 (27 / 9 = 3).',
      trapAlert: 'Achar que 4h30min são 430 minutos ou 4,3 horas.'
    }
  },
  // 34
  {
    id: 'mat-34',
    subject: 'matematica',
    topic: 'Probabilidade / Eventos Complementares',
    source: 'ENEM 2023',
    difficulty: 1,
    context: 'Em uma linha de montagem industrial, a probabilidade de um componente sair com algum defeito de fabricação é de 0,02 (2%).',
    question: 'Qual é a probabilidade percentual de um componente selecionado aleatoriamente ser PERFEITO (sem defeito)?',
    options: [
      { letter: 'A', text: '80%' },
      { letter: 'B', text: '90%' },
      { letter: 'C', text: '96%' },
      { letter: 'D', text: '98%' },
      { letter: 'E', text: '99,8%' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Evento complementar: P(perfeito) = 100% - P(defeituoso) = 100% - 2% = 98%!',
      stepByStep: ['1. 1 - 0,02 = 0,98.', '2. 0,98 = 98%.'],
      timeSaverTip: 'Quando a pergunta quer o oposto, subtraia de 100% em 1 segundo.',
      trapAlert: 'Confundir 0,02 com 20% e marcar 80%.'
    }
  },
  // 35
  {
    id: 'mat-35',
    subject: 'matematica',
    topic: 'Escalas / Redução de Área',
    source: 'Questão Adaptada ENEM 2022 (Foco em Agilidade)',
    difficulty: 1,
    context: 'Uma miniatura de carro foi confeccionada na escala linear de 1 : 20.',
    question: 'A área do teto solar da miniatura corresponde a qual fração da área do teto solar do veículo real?',
    options: [
      { letter: 'A', text: '1/20' },
      { letter: 'B', text: '1/40' },
      { letter: 'C', text: '1/200' },
      { letter: 'D', text: '1/400' },
      { letter: 'E', text: '1/8.000' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Escala de comprimento é E = 1/20. Escala de ÁREA é sempre E² = (1/20)² = 1/400! Escala de volume seria E³ (1/8000).',
      stepByStep: ['1. Relação linear = 1/20.', '2. Relação superficial (área) = (1/20)² = 1 / 400.'],
      timeSaverTip: 'Área = expoente 2 (ao quadrado); Volume = expoente 3 (ao cubo).',
      trapAlert: 'Marcar 1/20 (escala linear) ou 1/40 (apenas dobrando).'
    }
  },
  // 36
  {
    id: 'mat-36',
    subject: 'matematica',
    topic: 'Geometria Plana / Triângulo Equilátero',
    source: 'ENEM 2021',
    difficulty: 1,
    context: 'Um mosaico decorativo utiliza ladrilhos triangulares equiláteros com lados medindo 6 cm. Considere a aproximação √3 = 1,7.',
    question: 'Qual é a área aproximada de um desses ladrilhos em cm²?',
    options: [
      { letter: 'A', text: '9,0 cm²' },
      { letter: 'B', text: '15,3 cm²' },
      { letter: 'C', text: '18,0 cm²' },
      { letter: 'D', text: '30,6 cm²' },
      { letter: 'E', text: '36,0 cm²' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Área do triângulo equilátero = (L² · √3) / 4. Com L=6: (36 · 1,7) / 4. O 36 divide por 4 virando 9! 9 × 1,7 = 15,3 cm²!',
      stepByStep: ['1. Fórmula: A = (L² · √3) / 4.', '2. A = (6² · 1,7) / 4 = (36 · 1,7) / 4.', '3. Simplifique: 36 / 4 = 9 → 9 × 1,7 = 15,3 cm².'],
      timeSaverTip: 'Divida o L² por 4 ANTES de multiplicar pela raiz de 3.',
      trapAlert: 'Fazer base × altura / 2 sem calcular a altura com Pitágoras.'
    }
  },
  // 37
  {
    id: 'mat-37',
    subject: 'matematica',
    topic: 'Estatística / Amplitude Térmica',
    source: 'ENEM 2023',
    difficulty: 1,
    context: 'Em um dia de inverno no Sul do país, a temperatura mínima registrada foi de -3°C e a máxima atingiu 17°C.',
    question: 'Qual foi a AMPLITUDE TÉRMICA registrada nesse dia?',
    options: [
      { letter: 'A', text: '14°C' },
      { letter: 'B', text: '17°C' },
      { letter: 'C', text: '20°C' },
      { letter: 'D', text: '23°C' },
      { letter: 'E', text: '7°C' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Amplitude = Máxima - Mínima = 17 - (-3) = 17 + 3 = 20°C! Pense na reta numérica: de -3 até zero são 3 graus, de zero a 17 são 17 graus (3 + 17 = 20).',
      stepByStep: ['1. Amplitude = Valor Máximo - Valor Mínimo.', '2. 17 - (-3) = 17 + 3 = 20°C.'],
      timeSaverTip: 'Menos com menos vira mais na subtração de número negativo.',
      trapAlert: 'Subtrair 17 - 3 = 14 esquecendo do sinal de menos da temperatura mínima.'
    }
  },
  // 38
  {
    id: 'mat-38',
    subject: 'matematica',
    topic: 'Análise Combinatória / Permutação Simples',
    source: 'Questão Adaptada ENEM 2022 (Foco em Agilidade)',
    difficulty: 1,
    context: 'Cinco livros diferentes de matemática devem ser organizados lado a lado em uma prateleira da estante.',
    question: 'De quantas maneiras distintas esses 5 livros podem ser organizados?',
    options: [
      { letter: 'A', text: '25' },
      { letter: 'B', text: '60' },
      { letter: 'C', text: '120' },
      { letter: 'D', text: '240' },
      { letter: 'E', text: '720' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Permutação de 5 objetos = 5! (5 fatorial). 5! = 5 × 4 × 3 × 2 × 1 = 120 maneiras!',
      stepByStep: ['1. P₅ = 5! = 5 × 4 × 3 × 2 × 1.', '2. 20 × 6 = 120 maneiras.'],
      timeSaverTip: 'Memorize de cabeça os fatoriais básicos: 3! = 6 | 4! = 24 | 5! = 120 | 6! = 720.',
      trapAlert: 'Fazer 5 × 5 = 25.'
    }
  },
  // 39
  {
    id: 'mat-39',
    subject: 'matematica',
    topic: 'Razão e Proporção / Velocidade Média',
    source: 'ENEM 2021',
    difficulty: 1,
    context: 'Um trem de carga percorre uma distância de 360 km em exatamente 4 horas e 30 minutos (4,5 horas).',
    question: 'Qual foi a velocidade média desenvolvida pelo trem nesse percurso?',
    options: [
      { letter: 'A', text: '72 km/h' },
      { letter: 'B', text: '75 km/h' },
      { letter: 'C', text: '80 km/h' },
      { letter: 'D', text: '85 km/h' },
      { letter: 'E', text: '90 km/h' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Vm = 360 / 4,5. Para sumir com a vírgula, multiplique por 2 em cima e embaixo: (360 × 2) / (4,5 × 2) = 720 / 9 = 80 km/h de cabeça!',
      stepByStep: ['1. Vm = Δs / Δt = 360 / 4,5.', '2. Multiplique por 2: 720 / 9 = 80 km/h.'],
      timeSaverTip: 'Dividir por número terminado em ,5: dobre os dois valores para virar conta inteira fácil.',
      trapAlert: 'Dividir por 4,3 e errar a conta.'
    }
  },
  // 40
  {
    id: 'mat-40',
    subject: 'matematica',
    topic: 'Juros Compostos / Noção Básica',
    source: 'Questão Adaptada ENEM 2023 (Foco em Agilidade)',
    difficulty: 1,
    context: 'Uma aplicação financeira de R$ 1.000,00 rende 10% de juros compostos ao ano.',
    question: 'Qual será o saldo dessa aplicação ao final de 2 anos?',
    options: [
      { letter: 'A', text: 'R$ 1.100,00' },
      { letter: 'B', text: 'R$ 1.200,00' },
      { letter: 'C', text: 'R$ 1.210,00' },
      { letter: 'D', text: 'R$ 1.250,00' },
      { letter: 'E', text: 'R$ 1.300,00' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Ano 1: 1.000 + 10% (100) = 1.100. Ano 2: 1.100 + 10% de 1.100 (110) = R$ 1.210,00! Resolvido sem fórmula em 4 segundos.',
      stepByStep: ['1. Final do 1º ano = R$ 1.100,00.', '2. 10% sobre 1.100 = R$ 110,00.', '3. Saldo final = 1.100 + 110 = R$ 1.210,00.'],
      timeSaverTip: 'Em 2 anos com 10%, a taxa composta acumulada é sempre 21% (10 + 10 + 1).',
      trapAlert: 'Marcar 1.200 (que seria se fossem juros simples).'
    }
  },
  // 41
  {
    id: 'mat-41',
    subject: 'matematica',
    topic: 'Geometria Espacial / Paralelepípedo & Cubo',
    source: 'ENEM 2022',
    difficulty: 1,
    context: 'Uma caixa cúbica de papelão tem aresta medindo 20 cm.',
    question: 'Quantos cubinhos de madeira de 5 cm de aresta cabem perfeitamente dentro dessa caixa?',
    options: [
      { letter: 'A', text: '16 cubinhos' },
      { letter: 'B', text: '32 cubinhos' },
      { letter: 'C', text: '64 cubinhos' },
      { letter: 'D', text: '80 cubinhos' },
      { letter: 'E', text: '128 cubinhos' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Em cada dimensão cabem 20 / 5 = 4 cubinhos. Como são 3 dimensões (comprimento, largura, altura): 4 × 4 × 4 = 4³ = 64 cubinhos!',
      stepByStep: ['1. Aresta maior / aresta menor = 20 / 5 = 4.', '2. No espaço tridimensional: 4³ = 4 × 4 × 4 = 64 cubinhos.'],
      timeSaverTip: 'Divida as arestas e eleve o resultado ao cubo.',
      trapAlert: 'Dividir apenas 20 por 5 e achar 4, ou dividir 8000 por 125 manualmente.'
    }
  },
  // 42
  {
    id: 'mat-42',
    subject: 'matematica',
    topic: 'Porcentagem / Concentração Salina',
    source: 'Questão Adaptada ENEM 2021 (Foco em Agilidade)',
    difficulty: 1,
    context: 'Um frasco de soro caseiro contém 500 mL de água com 15 gramas de sal dissolvidos.',
    question: 'Qual é a porcentagem massa/volume (g/100 mL) de sal nessa solução?',
    options: [
      { letter: 'A', text: '1,5%' },
      { letter: 'B', text: '3,0%' },
      { letter: 'C', text: '4,5%' },
      { letter: 'D', text: '6,0%' },
      { letter: 'E', text: '7,5%' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: São 15 g em 500 mL. Quer saber em 100 mL (por cento)? Divida por 5: 15 / 5 = 3 g em 100 mL = 3%!',
      stepByStep: ['1. 500 mL para virar 100 mL precisa ser dividido por 5.', '2. 15 g / 5 = 3 gramas por 100 mL = 3%.'],
      timeSaverTip: 'Reduza a base para 100 mL dividindo por 5.',
      trapAlert: 'Achar que é 15% direto só porque tem o número 15 no enunciado.'
    }
  },
  // 43
  {
    id: 'mat-43',
    subject: 'matematica',
    topic: 'Função do 1º Grau / Raiz da Função',
    source: 'ENEM 2023',
    difficulty: 1,
    context: 'A temperatura T (em °C) no interior de uma câmara frigorífica varia com o tempo t (em minutos) segundo a função T(t) = -4t + 28.',
    question: 'Após quantos minutos da ligação a câmara atinge exatamente 0°C?',
    options: [
      { letter: 'A', text: '4 minutos' },
      { letter: 'B', text: '6 minutos' },
      { letter: 'C', text: '7 minutos' },
      { letter: 'D', text: '8 minutos' },
      { letter: 'E', text: '14 minutos' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Zere a função: -4t + 28 = 0 → 4t = 28. Tabuada do 4: 28 / 4 = 7 minutos!',
      stepByStep: ['1. T(t) = 0 → -4t + 28 = 0.', '2. 4t = 28.', '3. t = 28 / 4 = 7 minutos.'],
      timeSaverTip: 'Raiz de função do 1º grau ax+b = 0 é sempre t = -b/a = 28/4 = 7.',
      trapAlert: 'Errar o sinal e achar tempo negativo.'
    }
  },
  // 44
  {
    id: 'mat-44',
    subject: 'matematica',
    topic: 'Geometria Plana / Losango',
    source: 'ENEM 2022',
    difficulty: 1,
    context: 'Uma pipa tem o formato de um losango com diagonais medindo 40 cm e 30 cm.',
    question: 'Qual é a área dessa pipa em cm²?',
    options: [
      { letter: 'A', text: '300 cm²' },
      { letter: 'B', text: '600 cm²' },
      { letter: 'C', text: '700 cm²' },
      { letter: 'D', text: '1.200 cm²' },
      { letter: 'E', text: '2.400 cm²' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Área do Losango = (D × d) / 2. Pegue a metade de uma das diagonais: metade de 40 = 20. Multiplique pela outra: 20 × 30 = 600 cm²!',
      stepByStep: ['1. Fórmula: A = (D · d) / 2.', '2. A = (40 · 30) / 2 = 1.200 / 2 = 600 cm².'],
      timeSaverTip: 'Divida por 2 antes de multiplicar (20 × 30 = 600).',
      trapAlert: 'Multiplicar 40 × 30 = 1.200 e esquecer de dividir por 2.'
    }
  },
  // 45
  {
    id: 'mat-45',
    subject: 'matematica',
    topic: 'Análise de Informações / Lógica Simples',
    source: 'ENEM 2023',
    difficulty: 1,
    context: 'Uma fábrica produz 1.200 peças por hora com 4 operadores. Se o número de operadores dobrar e o rendimento por operador se mantiver constante:',
    question: 'Quantas peças serão produzidas em uma jornada diária de 8 horas com essa nova equipe?',
    options: [
      { letter: 'A', text: '9.600 peças' },
      { letter: 'B', text: '14.400 peças' },
      { letter: 'C', text: '19.200 peças' },
      { letter: 'D', text: '24.000 peças' },
      { letter: 'E', text: '28.800 peças' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Dobrou operadores → dobra a produção por hora: 1.200 × 2 = 2.400 peças/hora. Em 8 horas: 2.400 × 8 = 19.200 peças (24 × 8 = 192)!',
      stepByStep: ['1. Produção horária com dobro de pessoas = 2.400 peças.', '2. Em 8 horas: 2.400 × 8 = 19.200 peças.'],
      timeSaverTip: '24 × 8 = 192, coloque os 2 zeros = 19.200.',
      trapAlert: 'Multiplicar 1.200 × 8 = 9.600 esquecendo que o número de funcionários dobrou.'
    }
  }
];
