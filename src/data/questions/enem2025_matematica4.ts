import { Question } from '../../types';

export const enem2025MatematicaPart4: Question[] = [
  // QUESTÃO 167 - MATEMÁTICA
  {
    id: 'enem2025-167',
    subject: 'matematica',
    topic: 'Estatística e Gráficos / Transposição de Tabela para Gráfico de Linhas',
    source: 'ENEM 2025 • Q167 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Conversão de Sacas de 50 kg para Toneladas!',
    context: 'A produtividade de soja em uma área cultivada é a média da quantidade de sacas de 50 quilogramas que são produzidas por hectare. O quadro apresenta a área cultivada e a produtividade ao longo de cinco safras:\n• 11-12: 200 ha | 40 sacas/ha\n• 12-13: 220 ha | 30 sacas/ha\n• 13-14: 250 ha | 45 sacas/ha\n• 14-15: 250 ha | 45 sacas/ha\n• 15-16: 200 ha | 50 sacas/ha',
    imageUrl: '/enem2025/q167.png',
    question: 'O gráfico de linhas que representa a produção de soja dessa propriedade, em tonelada, nessas cinco safras é',
    options: [
      { letter: 'A', text: 'Gráfico A (400; 330; 562,5; 562,5; 500)', imageUrl: '/enem2025/q167_A.png' },
      { letter: 'B', text: 'Gráfico B (40; 30; 45; 45; 50)', imageUrl: '/enem2025/q167_B.png' },
      { letter: 'C', text: 'Gráfico C (200; 220; 250; 250; 200)', imageUrl: '/enem2025/q167_C.png' },
      { letter: 'D', text: 'Gráfico D (240; 250; 295; 295; 250)', imageUrl: '/enem2025/q167_D.png' },
      { letter: 'E', text: 'Gráfico E (8; 6,6; 11,25; 11,25; 10)', imageUrl: '/enem2025/q167_E.png' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Calcule APENAS O PRIMEIRO PONTO (Safra 11-12): cada saca tem 50 kg = 0,05 tonelada (ou seja, 20 sacas = 1 tonelada!). Na safra 11-12: 40 sacas/ha = 2 toneladas por hectare! Em 200 hectares: 200 × 2 = 400 toneladas! Qual é o ÚNICO gráfico que começa em 400? Gráfico A! Resolvida em 5 segundos sem calcular as outras 4 safras!',
      stepByStep: [
        '1. Como 1 saca = 50 kg = 0,05 t, a produção em toneladas é: Área × Produtividade × 0,05.',
        '2. Safra 11-12: 200 × 40 × 0,05 = 400 toneladas.',
        '3. Apenas o Gráfico A inicia em 400 toneladas (e segue com 330; 562,5; 562,5; 500).'
      ],
      timeSaverTip: 'Em questões de gráficos no ENEM, calcule SEMPRE só o 1º ponto e olhe as opções antes de calcular o resto! Aqui o 1º ponto (400) já era único!',
      trapAlert: 'Esquecer de multiplicar pelos 50 kg da saca e marcar o Gráfico E (que só dividiu por 1.000).'
    }
  },
  // QUESTÃO 168 - MATEMÁTICA
  {
    id: 'enem2025-168',
    subject: 'matematica',
    topic: 'Geometria Espacial / Volume de Cilindro e Prisma (Quadrado Inscrito)',
    source: 'ENEM 2025 • Q168 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Área de Quadrado Inscrito pela Diagonal (d² / 2)!',
    context: 'A figura ilustra o projeto visual para confecção de uma medalha comemorativa, com a forma de um cilindro circular reto, de diâmetro 6 cm e espessura 3 mm (0,3 cm).\nA figura ABCD tem a forma de um quadrado e é a base de um prisma que atravessa toda a medalha. A região da medalha externa a esse prisma será cunhada em ouro. Pretende-se cunhar 100 dessas medalhas. Considere π = 3,1.',
    imageUrl: '/enem2025/q168.png',
    question: 'Qual é o volume de ouro, em centímetro cúbico, necessário para a confecção dessas medalhas?',
    options: [
      { letter: 'A', text: '288' },
      { letter: 'B', text: '297' },
      { letter: 'C', text: '567' },
      { letter: 'D', text: '990' },
      { letter: 'E', text: '1 134' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1) Diâmetro = 6 cm => Raio R = 3 cm! Área do círculo: π · R² = 3,1 × 3² = 3,1 × 9 = 27,9 cm²! 2) A diagonal do quadrado inscrito é o próprio diâmetro (d = 6 cm)! Área do quadrado pela diagonal: d² / 2 = 6² / 2 = 36 / 2 = 18 cm²! 3) Área de ouro em 1 medalha: 27,9 - 18 = 9,9 cm²! 4) Multiplicando pela espessura (3 mm = 0,3 cm) e por 100 medalhas (0,3 × 100 = 30): Volume = 9,9 × 30 = 297 cm³! Alternativa B!',
      stepByStep: [
        '1. Raio do cilindro: R = 6 / 2 = 3 cm. Área da base circular: A_circ = 3,1 × 3² = 27,9 cm².',
        '2. Quadrado inscrito tem diagonal d = 6 cm. Área do quadrado: A_quad = d² / 2 = 36 / 2 = 18 cm².',
        '3. Área da seção de ouro: 27,9 - 18 = 9,9 cm².',
        '4. Espessura h = 3 mm = 0,3 cm. Para 100 medalhas: V = 100 × 9,9 × 0,3 = 9,9 × 30 = 297 cm³.'
      ],
      timeSaverTip: 'Fórmula de ouro para quadrado inscrito no círculo: Área = (Diâmetro)² / 2! Economiza achar o lado com √2!',
      trapAlert: 'Esquecer de converter 3 mm para 0,3 cm (mas repare que 990 está na letra D para quem esqueceu de multiplicar por 0,3!).'
    }
  },
  // QUESTÃO 169 - MATEMÁTICA
  {
    id: 'enem2025-169',
    subject: 'matematica',
    topic: 'Probabilidade / Lançamento de Dados e Eventos Complementares',
    source: 'ENEM 2025 • Q169 (Caderno 5 Amarelo)',
    difficulty: 3,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Questão Difícil de Probabilidade com 3 Dados (216 casos)',
    context: 'Três dados cúbicos (1 a 6) foram utilizados em um jogo. Artur escolheu dois dados, e João ficou com o terceiro. Ambos lançam seus dados e comparam o MAIOR número obtido por Artur com o número obtido por João. Vence quem obtiver o maior número. Em caso de empate, a vitória é de João.',
    question: 'O jogador que tem a maior probabilidade de vitória é',
    options: [
      { letter: 'A', text: 'Artur, com probabilidade de 2 / 3' },
      { letter: 'B', text: 'João, com probabilidade de 4 / 9' },
      { letter: 'C', text: 'Artur, com probabilidade de 91 / 216' },
      { letter: 'D', text: 'João, com probabilidade de 91 / 216' },
      { letter: 'E', text: 'Artur, com probabilidade de 125 / 216' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO (MÉTODO DE CHUTE + CONTA RÁPIDA): 1) Olhe as opções C, D e E: 91/216 e 125/216 somam 216/216 (são complementares!). Como Artur joga 2 dados e João só 1, quem tem mais chance óbvia de vencer (> 50%, ou seja, > 108/216)? ARTUR com 125/216 (Alternativa E)! \n2) Conta exata: João vence se o dado dele (k) for MAIOR OU IGUAL aos dois dados de Artur (ou seja, cada dado de Artur pode dar de 1 até k, tendo k×k = k² casos!). Somando k² de 1 a 6: 1² + 2² + 3² + 4² + 5² + 6² = 1 + 4 + 9 + 16 + 25 + 36 = 91 casos para João! Logo, Artur vence nos outros 216 - 91 = 125 casos! P(Artur) = 125 / 216!',
      stepByStep: [
        '1. Espaço amostral de 3 dados: 6 × 6 × 6 = 216 resultados equiprováveis.',
        '2. João vence (ou empata) quando seu dado tira k (de 1 a 6) e AMBOS os dados de Artur tiram valores <= k (k² possibilidades para cada k).',
        '3. Casos favoráveis a João: 1² + 2² + 3² + 4² + 5² + 6² = 1 + 4 + 9 + 16 + 25 + 36 = 91.',
        '4. Casos favoráveis a Artur: 216 - 91 = 125. Como 125 > 91, Artur tem a maior probabilidade de vitória: 125 / 216.'
      ],
      timeSaverTip: 'DICA SUPREMA DE CHUTE: A questão pede "quem tem a MAIOR probabilidade de vitória". É impossível o vencedor ter probabilidade menor que a metade (91/216 < 50% e 4/9 < 50%)! Isso elimina B, C e D instantaneamente! E como são 3 dados (denominador 6³ = 216), a resposta tinha que ser 125/216 (E)!',
      trapAlert: 'Calcular os 91 casos de João e marcar C ou D esquecendo que 91/216 é menor que 50% (quem tem maior chance é o complementar 125/216!).'
    }
  },
  // QUESTÃO 170 - MATEMÁTICA / FÍSICA
  {
    id: 'enem2025-170',
    subject: 'matematica',
    topic: 'Análise Dimensional e Razão / Unidades de Medida',
    source: 'ENEM 2025 • Q170 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Questão de 5 Segundos (Garantia Total na TRI!)',
    context: 'A luminância de um objeto é a grandeza que descreve a quantidade de luz produzida ou refletida por sua superfície. Ela está definida como a razão entre a intensidade luminosa, medida em candela (cd), e o quadrado da distância do objeto até o foco de luz, medida em metro (m).',
    question: 'A unidade de medida da luminância de um objeto é',
    options: [
      { letter: 'A', text: 'cd / m²' },
      { letter: 'B', text: 'm² / cd' },
      { letter: 'C', text: 'cd / m' },
      { letter: 'D', text: 'm / cd' },
      { letter: 'E', text: 'm / cd²' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: "Razão entre A e B" = A / B! Numerador: intensidade luminosa em candela (cd). Denominador: quadrado da distância em metro (m²). Logo: cd / m²! Alternativa A em 3 segundos!',
      stepByStep: [
        '1. Razão = divisão (numerador / denominador).',
        '2. Numerador: candela (cd).',
        '3. Denominador: quadrado de metro (m²). Resultado: cd / m².'
      ],
      timeSaverTip: 'Sempre que o texto disser "razão entre X e o quadrado de Y", monte a fração X / Y² imediatamente.',
      trapAlert: 'Esquecer a palavra "quadrado" e marcar cd / m (C).'
    }
  },
  // QUESTÃO 171 - MATEMÁTICA
  {
    id: 'enem2025-171',
    subject: 'matematica',
    topic: 'Progressão Aritmética e Álgebra / Expressão Algébrica de Rodadas',
    source: 'ENEM 2025 • Q171 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Quatro amigos, cada um com 100 moedas, criaram um jogo. Em cada rodada:\n• o jogador na posição 1 transfere 1 moeda para o jogador 2;\n• o jogador 2 transfere 2 moedas para o jogador 3;\n• o jogador 3 transfere 3 moedas para o jogador 4;\n• o jogador 4 transfere 4 moedas para o jogador 1, completando a rodada.',
    imageUrl: '/enem2025/q171.png',
    question: 'Ao final da rodada n, qual é a expressão algébrica que representa o número de moedas do jogador na posição 1?',
    options: [
      { letter: 'A', text: '103 + 4n' },
      { letter: 'B', text: '103 + 3n' },
      { letter: 'C', text: '100 + 4n' },
      { letter: 'D', text: '100 + 3n' },
      { letter: 'E', text: '99 + 4n' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Olhe APENAS para o jogador 1 em cada rodada: ele DÁ 1 moeda (-1) e RECEBE 4 moedas (+4)! Saldo líquido por rodada = +4 - 1 = +3 moedas por rodada! Como ele começou com 100 moedas, após n rodadas ele terá: 100 + 3n! Alternativa D!',
      stepByStep: [
        '1. Quantidade inicial do jogador 1: 100 moedas.',
        '2. Em cada rodada, o jogador 1 perde 1 moeda (para o 2) e ganha 4 moedas (do 4): saldo = +3 moedas/rodada.',
        '3. Após n rodadas: 100 + 3n.'
      ],
      timeSaverTip: 'Ou teste n = 1 (final da 1ª rodada): ele tinha 100, deu 1 e ganhou 4 -> ficou com 103. Qual opção dá 103 para n=1 e 106 para n=2? Apenas 100 + 3n (D)!',
      trapAlert: 'Somar os +3 já no termo inicial e marcar 103 + 3n (B).'
    }
  },
  // QUESTÃO 172 - MATEMÁTICA
  {
    id: 'enem2025-172',
    subject: 'matematica',
    topic: 'Funções e Gráficos / Leitura de Gráficos e Consumo de Combustível',
    source: 'ENEM 2025 • Q172 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Uma pessoa tem um carro bicombustível (GNV e gasolina). Durante um feriado, realizou uma viagem de 240 km mantendo velocidade constante de 60 km/h. Durante metade do caminho (120 km), utilizou apenas GNV e, na outra metade (120 km), apenas gasolina. O metro cúbico de GNV custou R$ 2,00 e o litro de gasolina custou R$ 3,00.',
    imageUrl: '/enem2025/q172.png',
    question: 'Qual foi a diferença, em real, entre os gastos totais com gasolina e com GNV?',
    options: [
      { letter: 'A', text: '4' },
      { letter: 'B', text: '8' },
      { letter: 'C', text: '14' },
      { letter: 'D', text: '21' },
      { letter: 'E', text: '30' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1) Olhe nos dois gráficos o rendimento na velocidade de 60 km/h: no GNV (esquerda), 60 km/h bate em 10 km/m³! Na Gasolina (direita), 60 km/h bate em 8 km/L! \n2) Metade de 240 km = 120 km para cada um!\n• Gasto com GNV: (120 km / 10 km/m³) = 12 m³ × R$ 2,00 = R$ 24,00!\n• Gasto com Gasolina: (120 km / 8 km/L) = 15 L × R$ 3,00 = R$ 45,00!\n3) Diferença: 45 - 24 = R$ 21,00! Alternativa D!',
      stepByStep: [
        '1. Distância em cada combustível: 240 / 2 = 120 km.',
        '2. A 60 km/h, o gráfico do GNV indica rendimento de 10 km/m³ => consumo = 120 / 10 = 12 m³. Custo GNV = 12 × 2 = R$ 24,00.',
        '3. A 60 km/h, o gráfico da gasolina indica rendimento de 8 km/L => consumo = 120 / 8 = 15 L. Custo Gasolina = 15 × 3 = R$ 45,00.',
        '4. Diferença: 45 - 24 = R$ 21,00.'
      ],
      timeSaverTip: 'Localize 60 no eixo X dos dois gráficos antes de fazer qualquer conta: (60, 10) no GNV e (60, 8) na gasolina.',
      trapAlert: 'Pegar o pico máximo dos gráficos (12 e 11) em vez do valor na velocidade de 60 km/h.'
    }
  },
  // QUESTÃO 173 - MATEMÁTICA
  {
    id: 'enem2025-173',
    subject: 'matematica',
    topic: 'Aritmética e Tabelas / Tomada de Decisão pelo Menor Custo Total',
    source: 'ENEM 2025 • Q173 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Clássico de Tabela de Orçamento (Cai Todo Ano!)',
    context: 'Para obtenção da carteira de motorista é necessária a contratação de:\n• pacote com 20 aulas teóricas;\n• pacote com 10 aulas práticas;\n• aluguel do veículo.\nValores nas três autoescolas (Aula teórica | Aula prática | Aluguel):\n• I: R$ 10 | R$ 80 | R$ 400\n• II: R$ 30 | R$ 50 | R$ 200\n• III: R$ 20 | R$ 40 | R$ 400',
    imageUrl: '/enem2025/q173.png',
    question: 'A autoescola que será contratada (menor custo total) é a',
    options: [
      { letter: 'A', text: 'I, com o custo total de R$ 1 400,00.' },
      { letter: 'B', text: 'II, com o custo total de R$ 280,00.' },
      { letter: 'C', text: 'II, com o custo total de R$ 1 300,00.' },
      { letter: 'D', text: 'III, com o custo total de R$ 460,00.' },
      { letter: 'E', text: 'III, com o custo total de R$ 1 200,00.' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Multiplique a 1ª coluna por 20, a 2ª coluna por 10 e some com a 3ª:\n• I: 20(10) + 10(80) + 400 = 200 + 800 + 400 = R$ 1.400\n• II: 20(30) + 10(50) + 200 = 600 + 500 + 200 = R$ 1.300\n• III: 20(20) + 10(40) + 400 = 400 + 400 + 400 = R$ 1.200 (MENOR CUSTO!)\nLogo: Autoescola III, com R$ 1.200,00 (Alternativa E)!',
      stepByStep: [
        '1. Autoescola I: 20 × 10 + 10 × 80 + 400 = 200 + 800 + 400 = R$ 1.400,00.',
        '2. Autoescola II: 20 × 30 + 10 × 50 + 200 = 600 + 500 + 200 = R$ 1.300,00.',
        '3. Autoescola III: 20 × 20 + 10 × 40 + 400 = 400 + 400 + 400 = R$ 1.200,00.'
      ],
      timeSaverTip: 'Olhe as próprias alternativas A, C e E: elas já calcularam os totais de I (1.400), II (1.300) e III (1.200) para você! Bastava ver que B e D esqueceram de multiplicar pelas aulas, e entre 1.400, 1.300 e 1.200 o menor é 1.200 (E)!',
      trapAlert: 'Somar os valores unitários sem multiplicar por 20 e por 10 (marcando B = 280).'
    }
  },
  // QUESTÃO 174 - MATEMÁTICA
  {
    id: 'enem2025-174',
    subject: 'matematica',
    topic: 'Geometria Espacial / Volume de Paralelepípedo e Princípio de Arquimedes (1 dm³ = 1 L)',
    source: 'ENEM 2025 • Q174 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Volume Deslocado na Caixa de Descarga (1 dm³ = 1 L)',
    context: 'Uma caixa de descarga tem a forma de paralelepípedo reto retângulo cujas dimensões internas da base são 2,5 dm e 1,5 dm, e a altura da coluna de água atinge 2 dm. Para reduzir o volume de água despejado, uma pessoa colocará no interior da caixa garrafas de 300 mL (0,3 L), cheias de areia e submersas. Para garantir o funcionamento eficiente, o mínimo de água despejada a cada acionamento deve ser de 5 L.',
    imageUrl: '/enem2025/q174.png',
    question: 'A quantidade máxima de garrafas que serão colocadas nessa caixa, garantindo um funcionamento eficiente, é igual a',
    options: [
      { letter: 'A', text: '10.' },
      { letter: 'B', text: '8.' },
      { letter: 'C', text: '4.' },
      { letter: 'D', text: '3.' },
      { letter: 'E', text: '2.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1) Como 1 dm³ = 1 Litro, o volume total até a boia é V = 2,5 × 1,5 × 2 = 2,5 × 3 = 7,5 Litros! 2) Como precisam sobrar no mínimo 5 Litros de água, podemos deslocar no máximo 7,5 - 5,0 = 2,5 Litros (2.500 mL) com garrafas! 3) Quantas garrafas de 300 mL cabem em 2.500 mL? 2.500 / 300 = 8,33 -> No máximo 8 garrafas (8 × 300 = 2.400 mL)! Alternativa B!',
      stepByStep: [
        '1. Volume total de água sem garrafas (até 2 dm de altura): V = 2,5 dm × 1,5 dm × 2 dm = 7,5 dm³ = 7,5 L.',
        '2. Volume máximo que pode ser ocupado pelas garrafas: 7,5 L - 5,0 L = 2,5 L = 2.500 mL.',
        '3. Número de garrafas de 300 mL: 2.500 / 300 = 8,33... Como deve ser inteiro sem ultrapassar 2,5 L, são no máximo 8 garrafas.'
      ],
      timeSaverTip: 'Multiplique primeiro 1,5 × 2 = 3; depois 3 × 2,5 = 7,5 L. Tira 5 L = 2,5 L (2.500 mL). 8 × 300 = 2.400 mL!',
      trapAlert: 'Arredondar 8,33 para cima ou usar a altura de 1,5 dm da primeira figura (que era só antes de colocar as garrafas? Não, na 1ª figura estava enchendo em 1,5 dm, mas o enunciado diz que a boia trava em 2 dm!).'
    }
  },
  // QUESTÃO 175 - MATEMÁTICA
  {
    id: 'enem2025-175',
    subject: 'matematica',
    topic: 'Geometria Espacial e Plana / Círculo Inscrito em Quadrado com Folga',
    source: 'ENEM 2025 • Q175 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Pegadinha Clássica de Embalagem: Raio vs. Diâmetro + Folga nos 2 Lados!',
    context: 'Um confeiteiro produz tortas cilíndricas com raio da base variando entre 12 cm e 16 cm e altura de 6 cm. Elas deverão ser embaladas em caixas com formato de prisma reto de base quadrada, restando pelo menos 1 cm de distância entre a torta e as superfícies internas da caixa, lateral e superior. As caixas originais têm 14 cm de lado da base e 7 cm de altura. Ele comprará novas caixas adequadas para embalar todos os tipos de torta que produz.',
    question: 'A aresta da base das novas caixas deve ser, no mínimo, quantos centímetros maior do que a das caixas originais?',
    options: [
      { letter: 'A', text: '4' },
      { letter: 'B', text: '12' },
      { letter: 'C', text: '16' },
      { letter: 'D', text: '18' },
      { letter: 'E', text: '20' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO (CUIDADO COM DUAS PEGADINHAS!): 1) Para caber TODAS as tortas, pegamos a MAIOR torta (raio R = 16 cm -> DIÂMETRO = 2 × 16 = 32 cm!). 2) A folga de 1 cm na lateral vale para a ESQUERDA (+1 cm) e para a DIREITA (+1 cm)! Logo, o lado da nova caixa deve ser: 32 cm + 1 cm + 1 cm = 34 cm! 3) Como a caixa original tinha 14 cm de lado, o aumento é: 34 - 14 = 20 cm! Alternativa E!',
      stepByStep: [
        '1. A maior torta tem raio R = 16 cm, logo seu diâmetro mede D = 2 × 16 = 32 cm.',
        '2. Para restar 1 cm de folga em relação às paredes laterais opostas da caixa quadrada, a aresta da base deve medir: 32 + 1 + 1 = 34 cm.',
        '3. Diferença em relação à aresta da caixa original (14 cm): 34 - 14 = 20 cm.'
      ],
      timeSaverTip: 'Em toda questão de caixa/embalagem no ENEM: Lado da Caixa = Diâmetro (2R) + 2 × Folga! (32 + 2 = 34 cm; e 34 - 14 = 20 cm).',
      trapAlert: 'Somar a folga de 1 cm apenas uma vez (33 - 14 = 19) ou usar o raio 16 como se fosse diâmetro (16 + 2 - 14 = 4, caindo na letra A!).'
    }
  },
  // QUESTÃO 176 - MATEMÁTICA
  {
    id: 'enem2025-176',
    subject: 'matematica',
    topic: 'Funções / Logaritmos e Máximo de Função Quadrática (Vértice da Parábola)',
    source: 'ENEM 2025 • Q176 (Caderno 5 Amarelo)',
    difficulty: 3,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Questão Mais Difícil da Prova: Logaritmo + Vértice da Parábola!',
    context: 'A pressão interna P, em atmosfera, depende do tempo contínuo de utilização t, em hora, e de um parâmetro positivo K, segundo a expressão:\nP = 4 · log[−K · (t + 1) · (t − 19)]\nO fabricante recomenda que a pressão interna não ultrapasse 10 atmosferas durante seu funcionamento. As máquinas deverão funcionar diariamente por um período contínuo de 10 horas (0 <= t <= 10). O empresário escolherá o maior valor possível do parâmetro K.',
    question: 'O maior valor a ser escolhido para K é',
    options: [
      { letter: 'A', text: '10^(0,5)' },
      { letter: 'B', text: '10^8' },
      { letter: 'C', text: '10^(2,5) / 84' },
      { letter: 'D', text: '10^(2,5) / 99' },
      { letter: 'E', text: '25 × 10^(−2)' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1) P <= 10 => 4 · log[...] <= 10 => log[...] <= 10 / 4 = 2,5! Pela definição de log na base 10, o que está dentro do colchete deve ser <= 10^(2,5)! (Isso já deixa só C e D na disputa!). \n2) Dentro do colchete temos a parábola -(t + 1)(t - 19), cujas raízes são t = -1 e t = 19. O pico máximo (vértice) ocorre exatamente na média das raízes: t_v = (-1 + 19)/2 = 9 horas (que está dentro das 10 horas de funcionamento!) — ou em t = 10 h? Opa! Para t = 9 h: -(9+1)(9-19) = 10 × 10 = 100. E para t = 10 h (no final das 10 horas): -(10 + 1)(10 - 19) = -(11)(-9) = 99! Como nas alternativas aparece o 99 no denominador: K = 10^(2,5) / 99 (Alternativa D)!',
      stepByStep: [
        '1. Igualando P = 10: 4 · log[−K · (t + 1) · (t − 19)] = 10 => log[−K · (t + 1) · (t − 19)] = 2,5.',
        '2. Passando para a forma exponencial (base 10): −K · (t + 1) · (t − 19) = 10^(2,5).',
        '3. Substituindo o período contínuo de t = 10 horas: −K · (10 + 1) · (10 − 19) = −K · (11) · (−9) = 99·K.',
        '4. Logo, 99·K = 10^(2,5) => K = 10^(2,5) / 99.'
      ],
      timeSaverTip: 'Viu P = 4 · log[...] = 10? Passe o 4 dividindo (10/4 = 2,5) -> aparece 10^(2,5) no numerador! Depois substitua t = 10 do enunciado: (10+1)(19-10) = 11 × 9 = 99 no denominador! D!',
      trapAlert: 'Errar o sinal de (10 - 19) ou substituir t = 5 dando (6)(14) = 84 (letra C).'
    }
  },
  // QUESTÃO 177 - MATEMÁTICA
  {
    id: 'enem2025-177',
    subject: 'matematica',
    topic: 'Geometria Plana / Área de Semicírculo (π · R² / 2)',
    source: 'ENEM 2025 • Q177 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Área do Semicírculo (Cuidado: Figura Dá o Diâmetro e Pede Semicírculo!)',
    context: 'Dois projetos de túneis em formato de semicilindro reto foram elaborados:\n• Projeto 1: Dois túneis separados, um com diâmetro de 12 m (automóveis) e outro com diâmetro de 6 m (bicicletas).\n• Projeto 2: Um único túnel com diâmetro total de 3 + 6 + 6 + 3 = 18 m.\nO projeto a ser aprovado será aquele que apresentar a MENOR área da seção transversal. Considere π = 3.',
    imageUrl: '/enem2025/q177.png',
    question: 'O projeto a ser aprovado é',
    options: [
      { letter: 'A', text: 'o 1, pois apresenta área de seção transversal medindo 67,5 m².' },
      { letter: 'B', text: 'o 2, pois apresenta área de seção transversal medindo 121,5 m².' },
      { letter: 'C', text: 'o 1, pois apresenta área de seção transversal medindo 135 m².' },
      { letter: 'D', text: 'o 2, pois apresenta área de seção transversal medindo 243 m².' },
      { letter: 'E', text: 'qualquer um dos dois, pois apresentam áreas de suas seções transversais com medidas iguais.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: ATENÇÃO DUPLA: 1) A medida na base é o DIÂMETRO (divida por 2 para achar o RAIO!); 2) O túnel é um SEMICÍRCULO (metade do círculo: Área = π · R² / 2)!\n• Projeto 1: Raios R₁ = 12/2 = 6 m e R₂ = 6/2 = 3 m. Área = (3 × 6²)/2 + (3 × 3²)/2 = (108 + 27)/2 = 135 / 2 = 67,5 m²!\n• Projeto 2: Diâmetro = 18 m -> Raio R = 9 m. Área = (3 × 9²)/2 = 243 / 2 = 121,5 m².\nMenor área: Projeto 1 com 67,5 m² (Alternativa A)!',
      stepByStep: [
        '1. Área de um semicírculo: A = (π · R²) / 2 = 1,5 · R² (para π = 3).',
        '2. Projeto 1: túnel maior tem diâmetro 12 m (R = 6 m) e túnel menor tem diâmetro 6 m (R = 3 m).',
        '3. Área do Projeto 1 = 1,5 × (6² + 3²) = 1,5 × (36 + 9) = 1,5 × 45 = 67,5 m².',
        '4. Projeto 2: diâmetro 18 m (R = 9 m) => Área = 1,5 × 9² = 121,5 m². O menor é o Projeto 1 (67,5 m²).'
      ],
      timeSaverTip: 'Sabe por que o Projeto 1 sempre ganha? Porque (a + b)² > a² + b²! E para não cair na letra C (135 m²), lembre-se de dividir por 2 porque é MEIO círculo!',
      trapAlert: 'Esquecer de dividir a área do círculo por 2 (semicírculo!) e marcar 135 m² (letra C!).'
    }
  },
  // QUESTÃO 178 - MATEMÁTICA
  {
    id: 'enem2025-178',
    subject: 'matematica',
    topic: 'Álgebra / Equação Fracionária e Teste das Alternativas',
    source: 'ENEM 2025 • Q178 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Macete de Testar as Alternativas em Vez de Fazer Bhaskara!',
    context: 'Um carro que custa 60 mil reais é comercializado com duas opções sem juros:\n• opção 1: pagamento em n parcelas iguais;\n• opção 2: pagamento em (n + 6) parcelas, onde cada parcela fica R$ 500,00 menor do que na opção 1.',
    question: 'Qual é a quantidade n de parcelas contidas na opção 1 de pagamento?',
    options: [
      { letter: 'A', text: '18' },
      { letter: 'B', text: '24' },
      { letter: 'C', text: '30' },
      { letter: 'D', text: '42' },
      { letter: 'E', text: '48' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO (PROIBIDO USAR BHASKARA AQUI!): Teste as alternativas dividindo R$ 60.000 por n!\n• Se n = 24 (letra B): Na opção 1, a parcela é 60.000 / 24 = R$ 2.500,00. Na opção 2, com +6 parcelas (24 + 6 = 30 parcelas), a parcela é 60.000 / 30 = R$ 2.000,00! Diferença: 2.500 - 2.000 = R$ 500,00 EXATOS! Matou a questão em 10 segundos na letra B!',
      stepByStep: [
        '1. Equação: (60.000 / n) - [60.000 / (n + 6)] = 500.',
        '2. Testando n = 24: 60.000 / 24 = 2.500.',
        '3. Com n + 6 = 30 parcelas: 60.000 / 30 = 2.000.',
        '4. Como 2.500 - 2.000 = 500, n = 24 é a resposta exata.'
      ],
      timeSaverTip: 'Tanto n quanto (n + 6) precisam dividir 60.000 de forma bonita: 24 e 30 dividem 60.000 perfeitamente (dando 2.500 e 2.000)!',
      trapAlert: 'Marcar n + 6 = 30 (letra C), que é o número de parcelas da opção 2, quando a pergunta pediu a opção 1 (24)!'
    }
  },
  // QUESTÃO 179 - MATEMÁTICA
  {
    id: 'enem2025-179',
    subject: 'matematica',
    topic: 'Análise Combinatória / Combinação Simples (C_n,p)',
    source: 'ENEM 2025 • Q179 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Combinatória com Restrição ("Um ou Outro, Mas Não Ambos")',
    context: 'Um pai comprou 8 presentes diferentes (dentre os quais, uma bicicleta e um celular) para dar a seus três filhos. O filho mais velho e o mais novo receberão 3 presentes cada um, e o do meio receberá os 2 presentes restantes. O mais velho ganhará, entre seus presentes, ou uma bicicleta ou um celular, mas não ambos.',
    question: 'De quantas maneiras distintas a distribuição dos presentes pode ser feita?',
    options: [
      { letter: 'A', text: '36' },
      { letter: 'B', text: '53' },
      { letter: 'C', text: '300' },
      { letter: 'D', text: '360' },
      { letter: 'E', text: '560' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Separe os 8 presentes em: 2 especiais (Bicicleta e Celular) + 6 comuns! \n1) Filho mais velho (leva 3): escolhe 1 dos 2 especiais (2 opções) E escolhe 2 dos 6 comuns: C(6,2) = (6 × 5)/2 = 15 opções! Total pro mais velho = 2 × 15 = 30 maneiras!\n2) Agora sobraram 5 presentes quaisquer (1 especial + 4 comuns). Escolha 3 desses 5 para o filho mais novo: C(5,3) = C(5,2) = (5 × 4)/2 = 10 maneiras!\n3) Os 2 últimos vão para o filho do meio (1 maneira).\nMultiplicando tudo: 30 × 10 × 1 = 300! Alternativa C!',
      stepByStep: [
        '1. Para o filho mais velho (3 presentes, sendo exatamente 1 entre bicicleta e celular): 2 opções (bicicleta OU celular) × C(6, 2) para os outros 2 presentes = 2 × 15 = 30 modos.',
        '2. Restam 8 - 3 = 5 presentes disponíveis sem nenhuma restrição para os outros dois filhos.',
        '3. Para o filho mais novo (3 presentes dentre os 5 restantes): C(5, 3) = (5 × 4) / 2 = 10 modos.',
        '4. Para o filho do meio (2 presentes dentre os 2 restantes): C(2, 2) = 1 modo.',
        '5. Total pelo Princípio Multiplicativo: 30 × 10 × 1 = 300 maneiras (Alternativa C).'
      ],
      timeSaverTip: 'Sempre comece pela pessoa que tem a RESTRIÇÃO (o filho mais velho): 2 × C(6,2) = 30. Depois distribua o resto normalmente: C(5,3) = 10 -> 30 × 10 = 300!',
      trapAlert: 'Esquecer de dividir por 2! na combinação C(6,2) e achar 360.'
    }
  },
  // QUESTÃO 180 - MATEMÁTICA
  {
    id: 'enem2025-180',
    subject: 'matematica',
    topic: 'Razão e Proporção / Velocidade Média e Regra de Três Simples',
    source: 'ENEM 2025 • Q180 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Questão de Fechamento Rápido: Proporção de Tempo Jogado!',
    context: 'A final de um campeonato de futebol foi disputada em 2 tempos regulamentares, de 45 minutos cada, sem acréscimos, com uma prorrogação de 30 minutos. Um jogador entrou no início do segundo tempo. Ao final do segundo tempo regulamentar (45 min), esse jogador havia percorrido 4,5 km. Ele manteve na prorrogação (30 min) a mesma velocidade média.',
    question: 'A distância percorrida por esse jogador durante sua participação na partida, em quilômetro, foi',
    options: [
      { letter: 'A', text: '4,5.' },
      { letter: 'B', text: '6,0.' },
      { letter: 'C', text: '7,5.' },
      { letter: 'D', text: '9,0.' },
      { letter: 'E', text: '12,0.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Olhe os números redondinhos: no 2º tempo ele jogou 45 minutos e correu 4,5 km — ou seja, ele corre exatos 0,1 km a cada 1 minuto (1 km a cada 10 minutos)! Na prorrogação de 30 minutos, ele correu mais 3,0 km! Total na partida = 4,5 km + 3,0 km = 7,5 km! Alternativa C em 5 segundos!',
      stepByStep: [
        '1. No 2º tempo (45 minutos), percorreu 4,5 km => ritmo de 0,1 km/min (ou 1 km a cada 10 min).',
        '2. Na prorrogação (30 minutos), mantendo o mesmo ritmo, percorreu 30 × 0,1 = 3,0 km.',
        '3. Distância total percorrida pelo jogador: 4,5 + 3,0 = 7,5 km.'
      ],
      timeSaverTip: '45 min = 4,5 km -> basta andar a vírgula uma casa para a esquerda! Logo, 30 min = 3,0 km. Soma: 4,5 + 3,0 = 7,5 km!',
      trapAlert: 'Somar o 1º tempo regulamentar (em que ele estava no banco e ainda não tinha entrado!) e marcar 12,0 km (E).'
    }
  }
];
