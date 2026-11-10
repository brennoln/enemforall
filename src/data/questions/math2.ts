import { Question } from '../../types';

export const mathQuestionsPart2: Question[] = [
  // 16
  {
    id: 'mat-16',
    subject: 'matematica',
    topic: 'Análise Combinatória / Combinação',
    source: 'ENEM 2023',
    context: 'Uma comissão de saúde em um hospital deve ser formada por exatamente 3 médicos escolhidos entre 7 médicos disponíveis.',
    question: 'De quantas maneiras distintas essa comissão pode ser formada?',
    options: [
      { letter: 'A', text: '21' },
      { letter: 'B', text: '35' },
      { letter: 'C', text: '42' },
      { letter: 'D', text: '210' },
      { letter: 'E', text: '343' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: É comissão, a ordem NÃO importa (Combinação). C(7,3) = (7 × 6 × 5) / (3 × 2 × 1). O 6 de cima corta com 3×2 de baixo! Sobra apenas 7 × 5 = 35!',
      stepByStep: ['1. C(7,3) = (7 · 6 · 5) / (3 · 2 · 1).', '2. Simplifique o 6 com (3 · 2).', '3. 7 × 5 = 35 comissões.'],
      timeSaverTip: 'Corte o 6 de cima com o 3×2 de baixo direto.',
      trapAlert: 'Calcular arranjo 7×6×5 = 210 esquecendo de dividir pela permutação do grupo (3!).'
    }
  },
  // 17
  {
    id: 'mat-17',
    subject: 'matematica',
    topic: 'Estatística / Média Simples',
    source: 'Questão Adaptada ENEM 2022 (Foco em Agilidade)',
    context: 'As temperaturas médias registradas de segunda a sexta-feira em uma cidade foram: 24°C, 28°C, 25°C, 31°C e 27°C.',
    question: 'Qual foi a temperatura média nesses 5 dias úteis?',
    options: [
      { letter: 'A', text: '26°C' },
      { letter: 'B', text: '27°C' },
      { letter: 'C', text: '28°C' },
      { letter: 'D', text: '29°C' },
      { letter: 'E', text: '30°C' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Some os números: 24+28 = 52; 52+25 = 77; 77+31 = 108; 108+27 = 135. Divida por 5: corte 1 zero e dobre: 13,5 × 2 = 27°C!',
      stepByStep: ['1. Soma das temperaturas = 135.', '2. Média = 135 / 5 = 27°C.'],
      timeSaverTip: 'Dividir por 5 de cabeça é só dobrar o número e voltar uma vírgula (135 × 2 = 270 → 27).',
      trapAlert: 'Errar a soma básica na pressa.'
    }
  },
  // 18
  {
    id: 'mat-18',
    subject: 'matematica',
    topic: 'Matemática Financeira / Juros Simples',
    source: 'ENEM 2021',
    context: 'Um empréstimo de R$ 2.000,00 foi contratado a uma taxa de juros simples de 3% ao mês durante 5 meses.',
    question: 'Qual é o montante total (capital + juros) a ser quitado no final desse período?',
    options: [
      { letter: 'A', text: 'R$ 2.150,00' },
      { letter: 'B', text: 'R$ 2.300,00' },
      { letter: 'C', text: 'R$ 2.450,00' },
      { letter: 'D', text: 'R$ 2.600,00' },
      { letter: 'E', text: 'R$ 2.750,00' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 3% por mês em 5 meses = 15% no total! 10% de 2.000 = 200. Mais 5% (metade) = 100. Juros = 300. Montante = 2.000 + 300 = R$ 2.300!',
      stepByStep: ['1. Taxa acumulada = 3% × 5 = 15%.', '2. Juros = 15% de 2.000 = R$ 300,00.', '3. Montante = 2.000 + 300 = R$ 2.300,00.'],
      timeSaverTip: 'Multiplique a taxa pelo tempo antes de calcular o percentual do dinheiro.',
      trapAlert: 'Marcar R$ 300,00 (que são apenas os juros, e não o montante).'
    }
  },
  // 19
  {
    id: 'mat-19',
    subject: 'matematica',
    topic: 'Geometria Espacial / Paralelepípedo',
    source: 'Questão Adaptada ENEM 2023 (Foco em Agilidade)',
    context: 'Uma piscina em formato de bloco retangular (paralelepípedo) possui 8 metros de comprimento, 5 metros de largura e 1,5 metro de profundidade.',
    question: 'Quantos LITROS de água são necessários para enchê-la totalmente?',
    options: [
      { letter: 'A', text: '30.000 L' },
      { letter: 'B', text: '40.000 L' },
      { letter: 'C', text: '60.000 L' },
      { letter: 'D', text: '80.000 L' },
      { letter: 'E', text: '120.000 L' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Volume = Comprimento × Largura × Altura = 8 × 5 × 1,5. Como 8 × 5 = 40, e 40 × 1,5 = 60 m³. Cada m³ = 1.000 Litros → 60.000 Litros!',
      stepByStep: ['1. V = 8 × 5 × 1,5 = 40 × 1,5 = 60 m³.', '2. 60 m³ = 60 × 1.000 = 60.000 Litros.'],
      timeSaverTip: 'Multiplique primeiro 8×5=40 (número redondo fácil) e depois por 1,5.',
      trapAlert: 'Esquecer de converter de m³ para Litros e marcar 60.'
    }
  },
  // 20
  {
    id: 'mat-20',
    subject: 'matematica',
    topic: 'Probabilidade / Eventos Sucessivos',
    source: 'ENEM 2023',
    context: 'Dois dados perfeitos de 6 faces numeradas de 1 a 6 são lançados simultaneamente.',
    question: 'Qual é a probabilidade de que os dois números obtidos sejam iguais?',
    options: [
      { letter: 'A', text: '1/36' },
      { letter: 'B', text: '1/12' },
      { letter: 'C', text: '1/6' },
      { letter: 'D', text: '1/4' },
      { letter: 'E', text: '1/2' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: O 1º dado pode dar QUALQUER número (chance 6/6 = 1). Para o 2º dado ser igual ao primeiro, há apenas 1 caso entre as 6 faces. Chance = 1/6!',
      stepByStep: ['1. Pares possíveis com números iguais: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) = 6 casos.', '2. Total de combinações com 2 dados: 6 × 6 = 36.', '3. P = 6 / 36 = 1 / 6.'],
      timeSaverTip: 'Para dados iguais, não importa o que saiu no primeiro; basta o segundo coincidir (1/6).',
      trapAlert: 'Marcar 1/36 (achando que o problema fixou um par específico como 6 e 6).'
    }
  },
  // 21
  {
    id: 'mat-21',
    subject: 'matematica',
    topic: 'Proporcionalidade / Densidade Demográfica',
    source: 'Questão Adaptada ENEM 2022 (Foco em Agilidade)',
    context: 'Um município possui uma população estimada de 450.000 habitantes distribuídos em uma área territorial de 1.500 km².',
    question: 'Qual é a densidade demográfica desse município em habitantes por km²?',
    options: [
      { letter: 'A', text: '30 hab/km²' },
      { letter: 'B', text: '150 hab/km²' },
      { letter: 'C', text: '300 hab/km²' },
      { letter: 'D', text: '450 hab/km²' },
      { letter: 'E', text: '3.000 hab/km²' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Densidade = Habitantes / Área = 450.000 / 1.500. Corte dois zeros de cada lado: 4.500 / 15. Como 45 / 15 = 3, o resultado é 300 hab/km²!',
      stepByStep: ['1. Densidade = 450.000 / 1.500.', '2. Corte 2 zeros: 4.500 / 15.', '3. 4.500 / 15 = 300 habitantes/km².'],
      timeSaverTip: 'Corte os zeros antes de fazer a divisão.',
      trapAlert: 'Errar a contagem de zeros e marcar 30 ou 3.000.'
    }
  },
  // 22
  {
    id: 'mat-22',
    subject: 'matematica',
    topic: 'Geometria Plana / Área do Trapézio',
    source: 'ENEM 2021',
    context: 'Um terreno tem a forma de um trapézio com base maior medindo 30 metros, base menor de 18 metros e altura perpendicular de 10 metros.',
    question: 'Qual é a área total desse terreno em metros quadrados?',
    options: [
      { letter: 'A', text: '180 m²' },
      { letter: 'B', text: '240 m²' },
      { letter: 'C', text: '360 m²' },
      { letter: 'D', text: '480 m²' },
      { letter: 'E', text: '600 m²' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Área do Trapézio = [(B + b) × h] / 2. Some as bases: 30 + 18 = 48. Metade de 48 = 24. Multiplique pela altura 10: 24 × 10 = 240 m²!',
      stepByStep: ['1. Soma das bases: 30 + 18 = 48 m.', '2. Metade da soma: 48 / 2 = 24.', '3. Multiplique por 10: 24 × 10 = 240 m².'],
      timeSaverTip: 'Divida a soma por 2 ANTES de multiplicar pela altura.',
      trapAlert: 'Multiplicar 30 × 18 como se fosse retângulo.'
    }
  },
  // 23
  {
    id: 'mat-23',
    subject: 'matematica',
    topic: 'Progressão Aritmética (PA) Express',
    source: 'Questão Adaptada ENEM 2023 (Foco em Agilidade)',
    context: 'Uma pessoa decide guardar dinheiro em um cofrinho: no 1º mês guarda R$ 50,00, e a cada mês seguinte guarda R$ 20,00 a mais que no mês anterior (R$ 70 no 2º, R$ 90 no 3º...).',
    question: 'Quanto ela guardará exatamente no 10º mês?',
    options: [
      { letter: 'A', text: 'R$ 200,00' },
      { letter: 'B', text: 'R$ 230,00' },
      { letter: 'C', text: 'R$ 250,00' },
      { letter: 'D', text: 'R$ 270,00' },
      { letter: 'E', text: 'R$ 300,00' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Do 1º pro 10º mês passam-se 9 aumentos de 20 reais! 9 × 20 = 180 reais de aumento. Some com o inicial: 50 + 180 = R$ 230,00!',
      stepByStep: ['1. Termo geral da PA: a₁₀ = a₁ + 9r.', '2. a₁₀ = 50 + 9 × 20 = 50 + 180 = R$ 230,00.'],
      timeSaverTip: 'São 9 passos (n - 1), nunca 10 passos.',
      trapAlert: 'Multiplicar 10 × 20 = 200 e somar com 50 dando 250 (esquecendo que o 1º mês já é o ponto de partida).'
    }
  },
  // 24
  {
    id: 'mat-24',
    subject: 'matematica',
    topic: 'Geometria Plana / Circunferência',
    source: 'ENEM 2022',
    context: 'A roda de uma bicicleta possui raio de 35 cm. Considere a aproximação π = 22/7.',
    question: 'Que distância a bicicleta percorre após a roda dar 100 voltas completas no chão?',
    options: [
      { letter: 'A', text: '110 metros' },
      { letter: 'B', text: '220 metros' },
      { letter: 'C', text: '350 metros' },
      { letter: 'D', text: '440 metros' },
      { letter: 'E', text: '700 metros' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Comprimento da roda C = 2 · π · r = 2 · (22/7) · 35. O 35 simplifica com o 7 virando 5! C = 2 · 22 · 5 = 220 cm = 2,2 metros por volta. 100 voltas = 2,2 × 100 = 220 metros!',
      stepByStep: ['1. C = 2 × (22/7) × 35 = 2 × 22 × 5 = 220 cm.', '2. 220 cm = 2,2 metros por volta.', '3. 100 voltas = 2,2 m × 100 = 220 metros.'],
      timeSaverTip: 'Sempre simplifique a fração 22/7 com múltiplos de 7 (35 / 7 = 5).',
      trapAlert: 'Errar a conversão de centímetros para metros e marcar 22.000.'
    }
  },
  // 25
  {
    id: 'mat-25',
    subject: 'matematica',
    topic: 'Potenciação e Notação Científica',
    source: 'ENEM 2023',
    context: 'A massa de um único átomo de hidrogênio é de aproximadamente 1,66 × 10⁻²⁴ gramas.',
    question: 'Quantos gramas pesam, em notação científica, 3 × 10²³ átomos de hidrogênio?',
    options: [
      { letter: 'A', text: '4,98 × 10⁻¹ g (0,498 g)' },
      { letter: 'B', text: '4,98 × 10¹ g (49,8 g)' },
      { letter: 'C', text: '4,98 × 10⁻² g' },
      { letter: 'D', text: '0,55 × 10⁻¹ g' },
      { letter: 'E', text: '4,98 × 10⁻⁴⁷ g' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Multiplique os números e some os expoentes da base 10: (1,66 × 3 = 4,98). Expoentes: -24 + 23 = -1. Fica direto: 4,98 × 10⁻¹ gramas!',
      stepByStep: ['1. Multiplique coeficientes: 1,66 × 3 = 4,98.', '2. Multiplique potências de 10: 10⁻²⁴ × 10²³ = 10^(-24 + 23) = 10⁻¹.', '3. Resultado = 4,98 × 10⁻¹ g.'],
      timeSaverTip: 'Multiplicação de potências de mesma base = apenas some os expoentes (-24 + 23 = -1).',
      trapAlert: 'Multiplicar os expoentes (-24 × 23) e marcar alternativa absurda.'
    }
  },
  // 26
  {
    id: 'mat-26',
    subject: 'matematica',
    topic: 'Leitura e Interpretação Gráfica',
    source: 'Questão Adaptada ENEM 2022 (Foco em Agilidade)',
    context: 'Uma pesquisa de satisfação entrevistou 400 clientes: 45% responderam "Ótimo", 35% "Bom", 15% "Regular" e o restante "Ruim".',
    question: 'Quantos clientes avaliaram o serviço como "Ruim"?',
    options: [
      { letter: 'A', text: '10 clientes' },
      { letter: 'B', text: '20 clientes' },
      { letter: 'C', text: '25 clientes' },
      { letter: 'D', text: '30 clientes' },
      { letter: 'E', text: '40 clientes' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Some os outros percentuais: 45 + 35 + 15 = 95%. Sobram 5% para "Ruim". 10% de 400 = 40. A metade (5%) é 20 clientes!',
      stepByStep: ['1. 45% + 35% + 15% = 95%.', '2. Sobram 100% - 95% = 5%.', '3. 5% de 400: 10% é 40 → a metade é 20 clientes.'],
      timeSaverTip: '5% é sempre a metade exata de 10%.',
      trapAlert: 'Achar que "o restante" é 10%.'
    }
  },
  // 27
  {
    id: 'mat-27',
    subject: 'matematica',
    topic: 'Sistemas de Equações do 1º Grau',
    source: 'Questão Adaptada ENEM 2021 (Foco em Agilidade)',
    context: 'Em um estacionamento há carros e motos, totalizando 30 veículos e 80 rodas no chão (cada carro tem 4 rodas e cada moto tem 2 rodas).',
    question: 'Quantas MOTOS estão estacionadas nesse local?',
    options: [
      { letter: 'A', text: '10 motos' },
      { letter: 'B', text: '15 motos' },
      { letter: 'C', text: '20 motos' },
      { letter: 'D', text: '25 motos' },
      { letter: 'E', text: '5 motos' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO DO ENEM: Finja que TODOS os 30 veículos fossem carros (4 rodas cada). Teríamos 30 × 4 = 120 rodas. Mas só temos 80 rodas (sobram 40 rodas). Como cada moto tem 2 rodas a menos que o carro, divida a diferença por 2: 40 / 2 = 20 MOTOS!',
      stepByStep: ['1. Suposição máxima: 30 carros × 4 = 120 rodas.', '2. Diferença para o real: 120 - 80 = 40 rodas extras.', '3. Como cada moto economiza 2 rodas: 40 / 2 = 20 motos.'],
      timeSaverTip: 'O método da falsa suposição resolve sistemas de 1º grau em 10 segundos sem montar x e y.',
      trapAlert: 'Responder a quantidade de carros (10) em vez da quantidade de motos (20).'
    }
  },
  // 28
  {
    id: 'mat-28',
    subject: 'matematica',
    topic: 'Geometria Espacial / Esfera',
    source: 'Questão Adaptada ENEM 2023 (Foco em Agilidade)',
    context: 'Um brinquedo esférico de borracha maciça possui raio de 3 cm. Considere a aproximação π = 3.',
    question: 'Qual é o volume dessa esfera em cm³?',
    options: [
      { letter: 'A', text: '36 cm³' },
      { letter: 'B', text: '72 cm³' },
      { letter: 'C', text: '108 cm³' },
      { letter: 'D', text: '144 cm³' },
      { letter: 'E', text: '324 cm³' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Volume da esfera V = (4/3) · π · r³. Como π = 3, ele cancela com o /3 da fórmula! Sobra apenas: 4 · r³ = 4 · (3³) = 4 · 27 = 108 cm³!',
      stepByStep: ['1. V = (4/3) · π · r³.', '2. Com π = 3, o fator (4/3) × 3 vira 4.', '3. V = 4 × 3³ = 4 × 27 = 108 cm³.'],
      timeSaverTip: 'Quando π = 3 na esfera, a fórmula vira simplesmente 4 · r³.',
      trapAlert: 'Elevar o raio ao quadrado em vez de elevar ao cubo.'
    }
  },
  // 29
  {
    id: 'mat-29',
    subject: 'matematica',
    topic: 'Razão e Frações / Rendimento',
    source: 'ENEM 2023',
    context: 'Um carro flex percorre 12 km por litro de gasolina e 8,4 km por litro de etanol.',
    question: 'A autonomia com etanol representa qual fração ou porcentagem da autonomia com gasolina?',
    options: [
      { letter: 'A', text: '60%' },
      { letter: 'B', text: '65%' },
      { letter: 'C', text: '70%' },
      { letter: 'D', text: '75%' },
      { letter: 'E', text: '80%' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Razão = 8,4 / 12. Como 84 / 12 = 7 (da tabuada do 12: 12 × 7 = 84), então 8,4 / 12 = 0,7 = 70%!',
      stepByStep: ['1. Razão = 8,4 / 12 = 84 / 120.', '2. Divida por 12: 7 / 10 = 0,7 = 70%.'],
      timeSaverTip: 'Tabuada do 12: 12 × 7 = 84. Bateu o olho, é 70%.',
      trapAlert: 'Inverter a divisão fazendo 12 / 8,4.'
    }
  },
  // 30
  {
    id: 'mat-30',
    subject: 'matematica',
    topic: 'Estatística / Moda Express',
    source: 'ENEM 2022',
    context: 'Em uma turma de cursinho pré-vestibular, as idades dos alunos de uma sala são: 17, 18, 17, 19, 18, 17, 20, 18, 17, 21.',
    question: 'Qual é a MODA dessa distribuição de idades?',
    options: [
      { letter: 'A', text: '17 anos' },
      { letter: 'B', text: '18 anos' },
      { letter: 'C', text: '18,5 anos' },
      { letter: 'D', text: '19 anos' },
      { letter: 'E', text: '21 anos' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: MODA É O QUE ESTÁ NA MODA (O QUE MAIS APARECE). O número 17 aparece 4 vezes; o 18 aparece 3 vezes. A moda é 17 anos!',
      stepByStep: ['1. Frequência do 17: 4 vezes.', '2. Frequência do 18: 3 vezes.', '3. Como 17 é o mais frequente, a moda é 17.'],
      timeSaverTip: 'Moda não exige cálculo nenhum, apenas contagem visual de repetição.',
      trapAlert: 'Calcular a média das idades.'
    }
  }
];
