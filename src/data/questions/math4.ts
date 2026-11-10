import { Question } from '../../types';

export const mathQuestionsPart4: Question[] = [
  {
    id: 'mat-46',
    subject: 'matematica',
    topic: 'Aritmética / Regra de Três Direta',
    source: 'ENEM 2020',
    difficulty: 1,
    context: 'Uma impressora industrial de alta performance imprime 180 páginas em 4 minutos de funcionamento contínuo.',
    question: 'Mantendo esse mesmo ritmo, quantas páginas ela imprimirá em 15 minutos?',
    options: [
      { letter: 'A', text: '450 páginas' },
      { letter: 'B', text: '540 páginas' },
      { letter: 'C', text: '675 páginas' },
      { letter: 'D', text: '720 páginas' },
      { letter: 'E', text: '900 páginas' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Ache a taxa por minuto primeiro: 180 / 4 = 45 páginas por minuto. Em 15 minutos: 45 × 15 = 45 × 10 (450) + 45 × 5 (225) = 675 páginas!',
      stepByStep: ['1. Ritmo: 180 / 4 = 45 págs/min.', '2. Total em 15 min: 45 × 15 = 675 páginas.'],
      timeSaverTip: 'Multiplicar por 15 é só multiplicar por 10 e somar a metade.',
      trapAlert: 'Multiplicar 180 × 15 antes de simplificar por 4.'
    }
  },
  {
    id: 'mat-47',
    subject: 'matematica',
    topic: 'Estatística / Variância e Desvio Padrão',
    source: 'ENEM 2019',
    difficulty: 2,
    context: 'Dois candidatos a uma vaga de piloto de teste obtiveram a mesma média final de 8,0 pontos em 5 testes práticos. O candidato X apresentou desvio padrão de 0,4 ponto, enquanto o candidato Y apresentou desvio padrão de 1,8 ponto.',
    question: 'A empresa decidiu contratar o candidato mais REGULAR em seu desempenho. Qual candidato foi escolhido e por qual motivo?',
    options: [
      { letter: 'A', text: 'O candidato X, pois menor desvio padrão indica maior homogeneidade e regularidade das notas.' },
      { letter: 'B', text: 'O candidato Y, pois maior desvio padrão reflete maior capacidade de superação de metas.' },
      { letter: 'C', text: 'O candidato Y, pois o desvio padrão elevado assegura maior mediana.' },
      { letter: 'D', text: 'Houve empate técnico insolúvel por possuírem a mesma média.' },
      { letter: 'E', text: 'O candidato X, pois seu desvio padrão anula a margem de erro da média.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: DESVIO PADRÃO MENOR = MAIS REGULAR E MAIS CONSTANTE! Não precisa fazer nenhuma conta, é pura interpretação teórica!',
      stepByStep: ['1. Desvio padrão mede a dispersão em relação à média.', '2. Menor desvio = notas mais próximas da média (mais regular).', '3. Candidato X tem 0,4 contra 1,8 de Y, logo X é muito mais regular.'],
      timeSaverTip: 'Viu "mais regular/homogêneo" no ENEM? Procure o menor desvio padrão.',
      trapAlert: 'Achar que maior número de desvio padrão é melhor.'
    }
  },
  {
    id: 'mat-48',
    subject: 'matematica',
    topic: 'Geometria Espacial / Tronco de Pirâmide',
    source: 'ENEM 2018',
    difficulty: 3,
    context: 'Uma forma de bolo tem o formato de tronco de pirâmide regular de bases quadradas, com base menor de lado 10 cm, base maior de lado 20 cm e altura de 12 cm.',
    question: 'Qual é o volume dessa forma de bolo em cm³? (Fórmula do tronco: V = (h/3) · [A_B + A_b + √(A_B · A_b)])',
    options: [
      { letter: 'A', text: '1.400 cm³' },
      { letter: 'B', text: '2.800 cm³' },
      { letter: 'C', text: '3.200 cm³' },
      { letter: 'D', text: '4.800 cm³' },
      { letter: 'E', text: '8.400 cm³' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Áreas das bases: A_B = 20² = 400; A_b = 10² = 100. A média geométrica √(400×100) = 200. Soma do colchete: 400 + 100 + 200 = 700. Altura sobre 3: 12 / 3 = 4. V = 4 × 700 = 2.800 cm³!',
      stepByStep: ['1. A_B = 400 cm² | A_b = 100 cm².', '2. √(400 · 100) = √40.000 = 200.', '3. Soma = 400 + 100 + 200 = 700.', '4. V = (12/3) × 700 = 4 × 700 = 2.800 cm³.'],
      timeSaverTip: 'Divida a altura por 3 logo no início (12/3 = 4).',
      trapAlert: 'Fazer média aritmética simples das áreas e multiplicar pela altura.'
    }
  },
  {
    id: 'mat-49',
    subject: 'matematica',
    topic: 'Matemática Financeira / Inflação e Poder de Compra',
    source: 'ENEM 2020',
    difficulty: 2,
    context: 'Durante um ano com inflação acumulada de 25%, o salário de um trabalhador teve um reajuste nominal de apenas 10%.',
    question: 'Em relação ao poder de compra original, o poder de compra desse trabalhador:',
    options: [
      { letter: 'A', text: 'Diminuiu em 15%.' },
      { letter: 'B', text: 'Diminuiu em 12%.' },
      { letter: 'C', text: 'Permaneceu exatamente constante.' },
      { letter: 'D', text: 'Aumentou em 10%.' },
      { letter: 'E', text: 'Diminuiu em 25%.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Novo poder de compra = Novo Salário / Nova Inflação = 1,10 / 1,25. Multiplique por 4 em cima e embaixo: 4,40 / 5,00 = 0,88 = 88%. Como 100% - 88% = 12%, houve perda de 12%!',
      stepByStep: ['1. Salário novo: 1,10.', '2. Custo de vida novo: 1,25.', '3. Poder de compra real = 1,10 / 1,25 = 0,88 = 88%.', '4. Perda real = 100% - 88% = 12%.'],
      timeSaverTip: 'Dividir por 1,25 é a mesma coisa que multiplicar por 0,8 (4/5). 1,10 × 0,8 = 0,88.',
      trapAlert: 'Subtrair diretamente 25 - 10 = 15% (pegadinha clássica da matemática financeira).'
    }
  },
  {
    id: 'mat-50',
    subject: 'matematica',
    topic: 'Geometria Plana / Semelhança de Triângulos',
    source: 'ENEM 2019',
    difficulty: 1,
    context: 'Uma pessoa de 1,80 m de altura projeta no solo uma sombra de 2,40 m de comprimento. No mesmo instante e local, a sombra projetada por um edifício mede 36 metros.',
    question: 'Qual é a altura desse edifício em metros?',
    options: [
      { letter: 'A', text: '24 metros' },
      { letter: 'B', text: '27 metros' },
      { letter: 'C', text: '30 metros' },
      { letter: 'D', text: '45 metros' },
      { letter: 'E', text: '48 metros' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Razão da pessoa: altura / sombra = 1,80 / 2,40 = 3 / 4 = 0,75. O prédio também terá altura igual a 3/4 da sombra! Altura = (3/4) × 36 = 3 × 9 = 27 metros!',
      stepByStep: ['1. 1,8 / 2,4 = 18 / 24 = 3 / 4.', '2. H_predio = (3/4) × 36 = 27 metros.'],
      timeSaverTip: '36 / 4 = 9 → 9 × 3 = 27. Dá para matar em 8 segundos.',
      trapAlert: 'Multiplicar 36 por 2,4.'
    }
  },
  {
    id: 'mat-51',
    subject: 'matematica',
    topic: 'Análise Combinatória / Permutação Circular',
    source: 'ENEM 2020',
    difficulty: 3,
    context: 'Em uma reunião diplomática, 6 chefes de Estado devem se sentar ao redor de uma mesa redonda circular.',
    question: 'De quantas maneiras distintas esses 6 líderes podem se posicionar ao redor dessa mesa?',
    options: [
      { letter: 'A', text: '24' },
      { letter: 'B', text: '120' },
      { letter: 'C', text: '360' },
      { letter: 'D', text: '720' },
      { letter: 'E', text: '5.040' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: MESA REDONDA = PERMUTAÇÃO CIRCULAR: PC(n) = (n - 1)!. Para 6 pessoas: (6 - 1)! = 5! = 120 maneiras!',
      stepByStep: ['1. Em roda/círculo, girar a mesa não cria uma nova disposição.', '2. Fixa-se uma pessoa e permuta-se o restante: (n - 1)!.', '3. 5! = 5 × 4 × 3 × 2 × 1 = 120.'],
      timeSaverTip: 'Mesa redonda: tire 1 e faça o fatorial (6 vira 5! = 120).',
      trapAlert: 'Fazer 6! = 720 esquecendo que em círculo há simetria de rotação.'
    }
  },
  {
    id: 'mat-52',
    subject: 'matematica',
    topic: 'Função Exponencial / Meia-Vida',
    source: 'ENEM 2018',
    difficulty: 2,
    context: 'Um isótopo radioativo utilizado em medicina nuclear possui meia-vida de 6 horas (a cada 6 horas sua massa residual cai pela metade). Um laboratório recebe uma amostra de 80 mg desse isótopo.',
    question: 'Qual será a massa restante desse isótopo após transcorridas 24 horas do recebimento?',
    options: [
      { letter: 'A', text: '2,5 mg' },
      { letter: 'B', text: '5,0 mg' },
      { letter: 'C', text: '10,0 mg' },
      { letter: 'D', text: '20,0 mg' },
      { letter: 'E', text: '40,0 mg' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 24 horas / 6 horas = 4 meias-vidas! Divida por 2 quatro vezes: 80 → 40 → 20 → 10 → 5,0 mg!',
      stepByStep: ['1. Número de ciclos: 24 / 6 = 4 meias-vidas.', '2. Massa = 80 / 2⁴ = 80 / 16 = 5 mg.'],
      timeSaverTip: 'Corte pela metade 4 vezes de cabeça.',
      trapAlert: 'Dividir 80 por 4 achando que meia-vida é divisão simples.'
    }
  },
  {
    id: 'mat-53',
    subject: 'matematica',
    topic: 'Geometria Plana / Teorema de Tales',
    source: 'ENEM 2019',
    difficulty: 1,
    context: 'Três terrenos vizinhos têm frentes para a Rua A e fundos para a Rua B. As divisas laterais são perpendiculares à Rua A. No loteamento, as frentes dos lotes 1 e 2 medem 20 m e 30 m, respectivamente. No fundo voltado para a Rua B, a divisa do lote 1 mede 26 m.',
    question: 'Qual é a medida da divisa do fundo do lote 2 voltada para a Rua B?',
    options: [
      { letter: 'A', text: '35 m' },
      { letter: 'B', text: '39 m' },
      { letter: 'C', text: '42 m' },
      { letter: 'D', text: '45 m' },
      { letter: 'E', text: '52 m' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Teorema de Tales: 20 / 30 = 26 / x. A razão é 2 / 3 (1,5 vezes maior). 26 × 1,5 = 26 + 13 = 39 metros direto!',
      stepByStep: ['1. Proporção: 20 / 30 = 26 / x.', '2. 2 / 3 = 26 / x.', '3. 2x = 78 → x = 39 metros.'],
      timeSaverTip: 'A frente do lote 2 é 50% maior que a do lote 1 (30 vs 20), então o fundo também será 50% maior (26 + 13 = 39).',
      trapAlert: 'Multiplicar cruzado errado.'
    }
  },
  {
    id: 'mat-54',
    subject: 'matematica',
    topic: 'Probabilidade / Eventos Simultâneos sem Reposição',
    source: 'ENEM 2020',
    difficulty: 2,
    context: 'Em uma caixa com 10 lâmpadas de LED, sabe-se que 3 estão queimadas e 7 estão perfeitas. Um eletricista retira 2 lâmpadas aleatoriamente e simultaneamente.',
    question: 'Qual é a probabilidade de que AMBAS as lâmpadas retiradas estejam PERFEITAS?',
    options: [
      { letter: 'A', text: '21/45 (7/15)' },
      { letter: 'B', text: '49/100' },
      { letter: 'C', text: '7/10' },
      { letter: 'D', text: '1/3' },
      { letter: 'E', text: '14/45' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1ª lâmpada perfeita = 7/10. 2ª lâmpada perfeita = 6/9. Multiplique: (7/10) × (6/9) = (7/10) × (2/3) = 14/30 = 7/15 (21/45)!',
      stepByStep: ['1. P(1ª boa) = 7/10.', '2. P(2ª boa) = 6/9 = 2/3.', '3. P(ambas) = (7/10) × (2/3) = 14 / 30 = 7 / 15.'],
      timeSaverTip: 'Simplifique 6/9 para 2/3 antes de multiplicar.',
      trapAlert: 'Fazer com reposição (7/10 × 7/10 = 49/100).'
    }
  },
  {
    id: 'mat-55',
    subject: 'matematica',
    topic: 'Álgebra / Sistema Linear 3x3 Simples',
    source: 'ENEM 2018',
    difficulty: 3,
    context: 'Em uma lanchonete: 1 suco + 2 salgados + 1 brigadeiro custam R$ 18,00. Já 2 sucos + 1 salgado + 2 brigadeiros custam R$ 21,00.',
    question: 'Quanto custa exatamente o combo de 1 suco + 1 salgado + 1 brigadeiro nessa lanchonete?',
    options: [
      { letter: 'A', text: 'R$ 11,00' },
      { letter: 'B', text: 'R$ 12,00' },
      { letter: 'C', text: 'R$ 13,00' },
      { letter: 'D', text: 'R$ 14,00' },
      { letter: 'E', text: 'R$ 15,00' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO DO ENEM: Some as duas compras! (1S + 2salg + 1B) + (2S + 1salg + 2B) = 3S + 3salg + 3B = 18 + 21 = R$ 39,00. Divida tudo por 3: 1S + 1salg + 1B = 39 / 3 = R$ 13,00!',
      stepByStep: ['1. Linha 1: 1s + 2salg + 1b = 18.', '2. Linha 2: 2s + 1salg + 2b = 21.', '3. Some ambas: 3s + 3salg + 3b = 39.', '4. Divida por 3: s + salg + b = 13.'],
      timeSaverTip: 'Em sistemas desse tipo no ENEM, NUNCA isole x, y e z. Basta somar ou subtrair as equações!',
      trapAlert: 'Gastar 5 minutos tentando descobrir o preço individual de cada salgado.'
    }
  },
  {
    id: 'mat-56',
    subject: 'matematica',
    topic: 'Geometria Espacial / Diagonal do Cubo',
    source: 'ENEM 2019',
    difficulty: 2,
    context: 'Uma haste de ferro deve ser guardada dentro de uma caixa cúbica de aresta medindo 1 metro. A maior haste reta que cabe nessa caixa liga dois vértices opostos através do espaço interior.',
    question: 'Qual é o comprimento máximo dessa haste em metros? (Adote √3 ≈ 1,73)',
    options: [
      { letter: 'A', text: '1,00 m' },
      { letter: 'B', text: '1,41 m' },
      { letter: 'C', text: '1,73 m' },
      { letter: 'D', text: '2,00 m' },
      { letter: 'E', text: '3,00 m' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: DIAGONAL ESPACIAL DO CUBO D = a · √3! Como aresta a = 1m: D = 1 · 1,73 = 1,73 metros!',
      stepByStep: ['1. Diagonal da face: d = a√2.', '2. Diagonal espacial interior: D = √(a² + d²) = a√3.', '3. D = 1 × 1,73 = 1,73 m.'],
      timeSaverTip: 'Diagonal da face é a√2; diagonal espacial que corta o cubo por dentro é a√3.',
      trapAlert: 'Calcular a diagonal da face (1,41m) e esquecer a 3ª dimensão.'
    }
  },
  {
    id: 'mat-57',
    subject: 'matematica',
    topic: 'Aritmética / MDC (Maior Divisor Comum)',
    source: 'ENEM 2020',
    difficulty: 2,
    context: 'Um marceneiro tem três tábuas de madeira de comprimentos 120 cm, 180 cm e 300 cm. Ele deseja cortá-las em pedaços de mesmo comprimento, sendo este o MAIOR POSSÍVEL, sem desperdício de sobras.',
    question: 'Qual deve ser o comprimento de cada pedaço cortado e quantas partes serão obtidas no total?',
    options: [
      { letter: 'A', text: '30 cm e 20 partes' },
      { letter: 'B', text: '60 cm e 10 partes' },
      { letter: 'C', text: '60 cm e 12 partes' },
      { letter: 'D', text: '40 cm e 15 partes' },
      { letter: 'E', text: '10 cm e 60 partes' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Maior tamanho comum = MDC(120, 180, 300) = 60 cm! Quantidade de partes: (120/60 = 2) + (180/60 = 3) + (300/60 = 5) = 2 + 3 + 5 = 10 partes!',
      stepByStep: ['1. MDC de 120, 180 e 300 é 60 cm.', '2. Pedaços: 2 + 3 + 5 = 10 partes totais.'],
      timeSaverTip: '60 divide 120, 180 e 300 perfeitamente.',
      trapAlert: 'Marcar apenas o tamanho do corte 60 e errar a contagem de partes.'
    }
  },
  {
    id: 'mat-58',
    subject: 'matematica',
    topic: 'Estatística / Média Harmônica e Velocidade Média',
    source: 'ENEM 2018',
    difficulty: 3,
    context: 'Um carro percorre a primeira metade de uma viagem a uma velocidade média constante de 60 km/h e a segunda metade da MESMA distância a 40 km/h.',
    question: 'Qual é a velocidade média do veículo durante toda a viagem?',
    options: [
      { letter: 'A', text: '48 km/h' },
      { letter: 'B', text: '50 km/h' },
      { letter: 'C', text: '52 km/h' },
      { letter: 'D', text: '54 km/h' },
      { letter: 'E', text: '55 km/h' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO DO ENEM: Para distâncias iguais com velocidades diferentes, a velocidade média é a MÉDIA HARMÔNICA: Vm = (2 · V₁ · V₂) / (V₁ + V₂) = (2 · 60 · 40) / (60 + 40) = 4.800 / 100 = 48 km/h! NUNCA é a média simples de 50!',
      stepByStep: ['1. Vm = (2 × 60 × 40) / (60 + 40).', '2. Vm = 4800 / 100 = 48 km/h.'],
      timeSaverTip: 'Quando a distância percorrida é igual, a velocidade média SEMPRE pende para o lado da menor velocidade (fica abaixo de 50).',
      trapAlert: 'Fazer média aritmética simples (60 + 40)/2 = 50 km/h (pegadinha clássica!).'
    }
  },
  {
    id: 'mat-59',
    subject: 'matematica',
    topic: 'Trigonometria / Lei dos Cossenos',
    source: 'ENEM 2019',
    difficulty: 3,
    context: 'Em um projeto de antena, dois cabos de sustentação de 5 m e 8 m formam entre si um ângulo de 60°. (Dado: cos 60° = 0,5).',
    question: 'Qual é a distância em linha reta entre os pontos de ancoragem desses dois cabos no solo? (Lei dos Cossenos: a² = b² + c² - 2bc · cos θ)',
    options: [
      { letter: 'A', text: '5 m' },
      { letter: 'B', text: '6 m' },
      { letter: 'C', text: '7 m' },
      { letter: 'D', text: '8 m' },
      { letter: 'E', text: '9 m' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: a² = 5² + 8² - 2 · 5 · 8 · (0,5). Como 2 × 0,5 = 1, o termo final é simplesmente 5 × 8 = 40! Conta: 25 + 64 - 40 = 89 - 40 = 49. Raiz de 49 = 7 metros exatos!',
      stepByStep: ['1. a² = 25 + 64 - 2(5)(8)(0,5).', '2. a² = 89 - 40 = 49.', '3. a = √49 = 7 metros.'],
      timeSaverTip: 'Com cos 60° = 0,5, o "2bc cos 60°" simplifica diretamente para "b × c".',
      trapAlert: 'Esquecer de subtrair o termo do cosseno.'
    }
  },
  {
    id: 'mat-60',
    subject: 'matematica',
    topic: 'Análise Combinatória / Combinação com Repetição Simples',
    source: 'ENEM 2020',
    difficulty: 2,
    context: 'Uma sorveteria oferece 4 sabores de sorvete. Um cliente quer comprar uma taça com exatamente 3 bolas, podendo repetir sabores.',
    question: 'De quantas maneiras diferentes o cliente pode montar sua taça de sorvete?',
    options: [
      { letter: 'A', text: '12' },
      { letter: 'B', text: '16' },
      { letter: 'C', text: '20' },
      { letter: 'D', text: '24' },
      { letter: 'E', text: '64' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Método dos pauzinhos e bolinhas: C(n + p - 1, p) = C(4 + 3 - 1, 3) = C(6, 3) = (6 × 5 × 4) / 6 = 20 maneiras!',
      stepByStep: ['1. Sabores = 4 (são 3 barras divisórias).', '2. Bolas = 3 bolinhas.', '3. C(3+3, 3) = C(6,3) = (6 · 5 · 4) / 6 = 20.'],
      timeSaverTip: 'C(6,3) o 6 cancela com 3×2×1, sobra 5 × 4 = 20.',
      trapAlert: 'Fazer 4³ = 64 (achando que a ordem de colocação na taça importa).'
    }
  }
];
