import { Question } from '../../types';

export const enem2025MatematicaPart1: Question[] = [
  // QUESTÃO 136 - MATEMÁTICA
  {
    id: 'enem2025-136',
    subject: 'matematica',
    topic: 'Geometria Plana / Comprimento da Circunferência (C = 2·π·R)',
    source: 'ENEM 2025 • Q136 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Questão Clássica de Circunferência + Alcance Bilateral',
    context: 'No entorno de uma lagoa circular, cujo raio mede 1 km (1 000 m), há uma ciclovia. A prefeitura planeja alocar policiais em posições estratégicas para patrulhar essa ciclovia, de forma a torná-la totalmente protegida. Um ponto da ciclovia é considerado protegido se houver pelo menos um policial a, no máximo, 200 m de distância daquele ponto, posicionado sobre a ciclovia. Utilize 3 como aproximação para π.',
    imageUrl: '/enem2025/q136.png',
    question: 'Nessas condições, a quantidade mínima necessária de policiais a serem alocados ao longo dessa ciclovia para torná-la protegida é',
    options: [
      { letter: 'A', text: '4.' },
      { letter: 'B', text: '8.' },
      { letter: 'C', text: '15.' },
      { letter: 'D', text: '30.' },
      { letter: 'E', text: '60.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1) Comprimento total da ciclovia: C = 2 · π · R = 2 × 3 × 1.000 m = 6.000 m! 2) CUIDADO COM A PEGADINHA: Cada policial protege 200 m para a esquerda E 200 m para a direita, cobrindo um arco total de 400 m! 3) Número de policiais = 6.000 / 400 = 15 policiais! Alternativa C!',
      stepByStep: [
        '1. Perímetro da ciclovia circular: C = 2 · π · R = 2 × 3 × 1.000 m = 6.000 m.',
        '2. Cada policial cobre até 200 m para cada lado ao longo da pista, protegendo uma faixa total de 200 + 200 = 400 m.',
        '3. Quantidade mínima de policiais: 6.000 m / 400 m = 15 policiais.'
      ],
      timeSaverTip: 'Sempre que um poste/radar/policial alcança "d" metros em uma linha/ciclovia, a cobertura de cada um é 2·d (para os dois lados)!',
      trapAlert: 'Dividir 6.000 por 200 (esquecendo que ele protege para os dois lados) e marcar 30 (letra D — a pegadinha clássica!).'
    }
  },
  // QUESTÃO 137 - MATEMÁTICA
  {
    id: 'enem2025-137',
    subject: 'matematica',
    topic: 'Porcentagem e Misturas / Regra da Parte Constante',
    source: 'ENEM 2025 • Q137 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • O Paradoxo da Melancia/Solução (99,95% -> 99,90%)',
    context: 'Em um laboratório, um recipiente contém 10 litros de uma solução composta apenas pelas substâncias S₁ e S₂. Dessa solução, 99,95% é de S₁. Uma quantidade de S₁ será retirada dessa solução, mantendo a quantidade inicial de S₂, de modo que 99,90% da nova solução seja de S₁.',
    question: 'Qual é a quantidade de S₁, em litro, que será retirada?',
    options: [
      { letter: 'A', text: '0,0050' },
      { letter: 'B', text: '0,0100' },
      { letter: 'C', text: '0,5000' },
      { letter: 'D', text: '4,9775' },
      { letter: 'E', text: '5,0000' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: NUNCA OLHE PARA QUEM MUDA (S₁), OLHE PARA QUEM FICA CONSTANTE (S₂)! No início, S₂ era 100% - 99,95% = 0,05% da solução. No final, S₂ passou a ser 100% - 99,90% = 0,10% da solução! Ou seja, a porcentagem de S₂ DOBROU (de 0,05% para 0,10%)! Para a concentração de S₂ dobrar sem pôr mais S₂, o volume total da solução tem que CAIR PELA METADE (de 10 L para 5 L)! Logo, foram retirados 10 - 5 = 5,0000 litros de S₁! Feita de cabeça em 10 segundos!',
      stepByStep: [
        '1. Volume inicial de S₂ (constante): 0,05% de 10 L = 0,005 L.',
        '2. Na nova solução de volume V_final, S₂ representa 0,10%: 0,10% de V_final = 0,005 L => V_final = 5 L.',
        '3. Como só saiu S₁, a quantidade retirada de S₁ foi 10 L - 5 L = 5,0000 L.'
      ],
      timeSaverTip: 'Em qualquer questão de evaporação/retirada de solvente: se a % do soluto fixo DOBROU (0,05% -> 0,10%), o volume total CAIU PELA METADE!',
      trapAlert: 'Fazer 99,95% - 99,90% = 0,05% de 10 L e marcar 0,0050 (A) — erro de 90% dos candidatos!'
    }
  },
  // QUESTÃO 138 - MATEMÁTICA
  {
    id: 'enem2025-138',
    subject: 'matematica',
    topic: 'Aritmética / Operações Fundamentais e Interpretação',
    source: 'ENEM 2025 • Q138 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Em qualquer transporte realizado por caminhões-tanque, um mesmo volume de combustível é descartado, pois fica com muitas impurezas. Esse volume descartado independe da quantidade transportada.\nUm posto de combustível encomendou 10 000 litros de gasolina dessa distribuidora, que enviou 10 200 litros, considerando o volume descartado no transporte. Mesmo assim, a quantidade de gasolina entregue ao posto foi de 9 900 litros.\nEm um novo pedido, esse posto solicitou que fosse entregue exatamente o dobro do volume de gasolina encomendado no pedido anterior (ou seja, 20 000 litros).',
    question: 'Utilizando o mesmo caminhão da entrega anterior, qual é o volume mínimo de gasolina, em litro, que a distribuidora deverá enviar para garantir a entrega da quantidade encomendada nesse novo pedido?',
    options: [
      { letter: 'A', text: '20 100' },
      { letter: 'B', text: '20 200' },
      { letter: 'C', text: '20 300' },
      { letter: 'D', text: '20 400' },
      { letter: 'E', text: '20 600' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Na 1ª viagem, a distribuidora mandou 10.200 L e só chegaram 9.900 L limpos! Quanto foi perdido/descartado no fundo do caminhão? 10.200 - 9.900 = 300 litros! Como o descarte é SEMPRE O MESMO (independe da quantidade), para entregar 20.000 L limpos basta enviar 20.000 + 300 = 20.300 litros! Alternativa C!',
      stepByStep: [
        '1. Volume efetivamente descartado no transporte: 10.200 L (enviados) - 9.900 L (entregues) = 300 L.',
        '2. Novo pedido a ser entregue: 2 × 10.000 L = 20.000 L.',
        '3. Como o volume descartado é fixo (300 L), deve-se enviar 20.000 + 300 = 20.300 L.'
      ],
      timeSaverTip: 'Enviou 10.200 e chegou 9.900 -> Perda fixa = 300 L. Novo envio = 20.000 + 300 = 20.300 L.',
      trapAlert: 'Dobrar a perda (marcar 20.600) ou usar o valor que a distribuidora achava que perderia (200 L, marcando 20.200 ou 20.400).'
    }
  },
  // QUESTÃO 139 - MATEMÁTICA
  {
    id: 'enem2025-139',
    subject: 'matematica',
    topic: 'Estatística / Mediana de Conjunto com Número Par de Dados',
    source: 'ENEM 2025 • Q139 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Top 1 de Estatística: Cálculo de Mediana!',
    context: 'Uma empresa de tecnologia vai padronizar a velocidade de conexão de internet que oferece a seus clientes em dez cidades. A direção da empresa decide que seu novo padrão de velocidade de referência será a mediana dos valores das velocidades de referência de conexões nessas dez cidades: 390, 380, 320, 390, 340, 380, 390, 400, 350, 360.',
    imageUrl: '/enem2025/q139.png',
    question: 'A velocidade de referência, em megabyte por segundo, a ser adotada por essa empresa é',
    options: [
      { letter: 'A', text: '360.' },
      { letter: 'B', text: '370.' },
      { letter: 'C', text: '380.' },
      { letter: 'D', text: '390.' },
      { letter: 'E', text: '400.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Mediana de 10 valores = Média do 5º e do 6º valor em ORDEM CRESCENTE! Ordene apenas até o 6º: 1º(320), 2º(340), 3º(350), 4º(360), 5º(380), 6º(380)! Como o 5º e o 6º são ambos 380, a mediana é 380! Nem precisa ordenar o resto!',
      stepByStep: [
        '1. Ordenando os 10 valores em ordem crescente: 320, 340, 350, 360, 380, 380, 390, 390, 390, 400.',
        '2. Os dois termos centrais (5º e 6º) são 380 e 380.',
        '3. Mediana = (380 + 380) / 2 = 380 MB/s.'
      ],
      timeSaverTip: 'Para achar a mediana de 10 itens, basta riscar os 4 menores da tabela (320, 340, 350, 360): os dois próximos menores são o 5º e o 6º (380 e 380)!',
      trapAlert: 'Esquecer de colocar em ordem crescente ou confundir mediana com moda (390) ou média (370).'
    }
  },
  // QUESTÃO 140 - MATEMÁTICA
  {
    id: 'enem2025-140',
    subject: 'matematica',
    topic: 'Aritmética / Multiplicação Simples e Comparação',
    source: 'ENEM 2025 • Q140 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Na cantina de uma escola, há cinco alimentos vendidos em pacotes com diferentes quantidades de porções:\n• Batata chips: 3 porções de 50 g (170 mg de sódio por porção)\n• Palitos salgados: 4 porções de 20 g (501 mg de sódio por porção)\n• Biscoito multigrãos: 8 porções de 25 g (264 mg de sódio por porção)\n• Biscoito de polvilho: 6 porções de 15 g (175 mg de sódio por porção)\n• Biscoito de água e sal: 5 porções de 40 g (166 mg de sódio por porção)\nUma estudante opta sempre pelo alimento com a menor quantidade total de sódio por pacote.',
    imageUrl: '/enem2025/q140.png',
    question: 'Qual desses produtos deve ser o escolhido pela estudante?',
    options: [
      { letter: 'A', text: 'Batata chips.' },
      { letter: 'B', text: 'Palitos salgados.' },
      { letter: 'C', text: 'Biscoito multigrãos.' },
      { letter: 'D', text: 'Biscoito de polvilho.' },
      { letter: 'E', text: 'Biscoito de água e sal.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Ignore os gramas da porção (50 g, 20 g... é distrator!) e multiplique direto: (Nº de porções) × (mg de sódio por porção)! Batata chips = 3 × 170 = 510 mg! Todas as outras passam de 800 mg (5×166=830; 6×175=1050; 4×501=2004; 8×264=2112). Menor de todas: Batata chips (A)!',
      stepByStep: [
        '1. Batata chips: 3 × 170 = 510 mg.',
        '2. Palitos salgados: 4 × 501 = 2.004 mg.',
        '3. Biscoito multigrãos: 8 × 264 = 2.112 mg.',
        '4. Biscoito de polvilho: 6 × 175 = 1.050 mg.',
        '5. Biscoito de água e sal: 5 × 166 = 830 mg. Menor valor: 510 mg (Batata chips).'
      ],
      timeSaverTip: 'Olhe primeiro quem tem menos porções (3 porções) e sódio baixo (170): 3 × 170 = 510 mg. Nem precisa fazer a conta exata dos outros!',
      trapAlert: 'Escolher o Biscoito de água e sal (E) só porque tem o menor sódio por porção (166 mg), esquecendo que ele tem 5 porções no pacote!'
    }
  },
  // QUESTÃO 141 - MATEMÁTICA
  {
    id: 'enem2025-141',
    subject: 'matematica',
    topic: 'Geometria Espacial / Poliedros, Prismas e Troncos de Pirâmide',
    source: 'ENEM 2025 • Q141 (Caderno 5 Amarelo)',
    difficulty: 2,
    context: 'Uma fábrica utilizou uma impressora 3D para produzir o protótipo de uma peça. O protótipo tem forma de um poliedro convexo, obtido pela justaposição de dois sólidos distintos, um com a forma de um prisma hexagonal regular reto e o outro com a forma de um tronco de pirâmide hexagonal reta. A base maior do tronco de pirâmide coincide com uma das bases do prisma.\nO critério definido para realização da pintura considera que faces congruentes entre si devem ser pintadas com uma mesma cor, e faces não congruentes entre si devem apresentar cores distintas.',
    question: 'Qual é a quantidade de cores utilizadas para pintar o protótipo?',
    options: [
      { letter: 'A', text: '9' },
      { letter: 'B', text: '8' },
      { letter: 'C', text: '6' },
      { letter: 'D', text: '4' },
      { letter: 'E', text: '3' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Como a base maior do tronco de pirâmide foi COLADA em uma das bases do prisma, essa face interna desaparece! Quais tipos de faces externas sobram na superfície do sólido? 1) A base inferior do prisma (1 hexágono grande); 2) As 6 faces laterais do prisma (6 retângulos iguais entre si); 3) As 6 faces laterais do tronco (6 trapézios isósceles iguais entre si); 4) A base superior menor do tronco (1 hexágono pequeno)! Total de formatos distintos de faces = 4 cores (Alternativa D)!',
      stepByStep: [
        '1. Cor 1: Base hexagonal do prisma (hexágono regular maior).',
        '2. Cor 2: As 6 faces laterais retangulares do prisma regular (todas congruentes entre si).',
        '3. Cor 3: As 6 faces laterais trapezoidais do tronco de pirâmide regular (todas congruentes entre si).',
        '4. Cor 4: Base menor do tronco de pirâmide (hexágono regular menor, não congruente à base maior).',
        '5. Total = 4 cores distintas.'
      ],
      timeSaverTip: 'Conte os grupos de faces por formato: Hexágono Maior (1) + Retângulos (2) + Trapézios (3) + Hexágono Menor (4) = 4 cores!',
      trapAlert: 'Achar que os dois hexágonos das pontas têm o mesmo tamanho e marcar 3 cores (E) — lembre-se que no tronco de pirâmide a base do topo é menor!'
    }
  },
  // QUESTÃO 142 - MATEMÁTICA
  {
    id: 'enem2025-142',
    subject: 'matematica',
    topic: 'Funções / Interpretação de Gráficos',
    source: 'ENEM 2025 • Q142 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'O gráfico apresenta a relação da frequência respiratória, em incursões de respirações por minuto (rpm), em relação ao tempo, em minuto, de um praticante avançado, em que (f₁) representa a frequência no instante t₁, no qual se inicia a prática meditativa; e (f₂), a frequência no instante t₂, a partir do qual esta se estabiliza durante a meditação.',
    imageUrl: '/enem2025/q142.png',
    question: 'A partir do instante t₁, em que se inicia a prática meditativa, o comportamento da frequência respiratória, em relação ao tempo,',
    options: [
      { letter: 'A', text: 'mantém-se constante.' },
      { letter: 'B', text: 'é diretamente proporcional ao tempo.' },
      { letter: 'C', text: 'é inversamente proporcional ao tempo.' },
      { letter: 'D', text: 'diminui até o instante t₂, a partir do qual se torna constante.' },
      { letter: 'E', text: 'diminui de forma proporcional ao tempo, tanto entre t₁ e t₂ quanto após t₂.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Questão de leitura visual direta para garantir 100% na TRI! Olhe o gráfico a partir de t₁: a curva desce (diminui) até chegar em t₂, e de t₂ em diante vira uma linha reta horizontal (constante)! Alternativa D!',
      stepByStep: [
        '1. Entre t₁ e t₂, a curva é decrescente (a frequência diminui de f₁ até f₂).',
        '2. A partir de t₂, a curva torna-se paralela ao eixo horizontal (mantém-se constante em f₂).'
      ],
      timeSaverTip: 'Questão nível 1 pimentinha: leia com calma e marque a descrição literal do gráfico para blindar sua coerência na TRI!',
      trapAlert: 'Marcar "inversamente proporcional" (C) sem perceber que após t₂ a função é constante.'
    }
  },
  // QUESTÃO 143 - MATEMÁTICA
  {
    id: 'enem2025-143',
    subject: 'matematica',
    topic: 'Aritmética / Subtração de Números Decimais',
    source: 'ENEM 2025 • Q143 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • A Questão Mais Fácil da Prova (Não Pode Errar na TRI!)',
    context: 'No atletismo, um grande desafio da prova de 100 metros rasos é a sua conclusão num tempo abaixo da marca de referência dos 10,00 segundos. Em 2009, o jamaicano Usain Bolt estabeleceu o recorde mundial masculino dessa prova, com o tempo de 9,58 segundos.',
    question: 'Qual é a diferença, em segundo, entre a marca de referência e a marca estabelecida por Usain Bolt em 2009?',
    options: [
      { letter: 'A', text: '0,02' },
      { letter: 'B', text: '0,42' },
      { letter: 'C', text: '0,52' },
      { letter: 'D', text: '1,02' },
      { letter: 'E', text: '1,42' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 10,00 - 9,58 = 0,42 segundo! (Pense em dinheiro: R$ 10,00 menos R$ 9,58 = 42 centavos = 0,42!). Essa é a questão nº 1 da TRI que vale ouro não errar por distração!',
      stepByStep: [
        '1. Marca de referência: 10,00 s.',
        '2. Tempo de Usain Bolt: 9,58 s.',
        '3. Diferença: 10,00 - 9,58 = 0,42 s.'
      ],
      timeSaverTip: 'Para não errar no "empresta 1": de 58 para 100 faltam 42 (58 + 2 = 60; 60 + 40 = 100).',
      trapAlert: 'Errar o "vai um" da subtração decimal e marcar 0,52 (C) ou 1,42 (E) — um erro aqui derruba muito a nota da TRI!'
    }
  },
  // QUESTÃO 144 - MATEMÁTICA
  {
    id: 'enem2025-144',
    subject: 'matematica',
    topic: 'Geometria Espacial / Projeção Ortogonal nos Planos Coordenados 3D',
    source: 'ENEM 2025 • Q144 (Caderno 5 Amarelo)',
    difficulty: 3,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Projeção Ortogonal 3D (Tópico Queridinho do ENEM)',
    context: 'Em um jogo de computador, um cubo se encontra inicialmente posicionado conforme indicado na figura.\nAo se movimentar a partir da posição inicial, esse cubo se aproximou 3 unidades do plano yz, se afastou 5 unidades do plano xz e se aproximou 4 unidades do plano xy.',
    imageUrl: '/enem2025/q144.png',
    question: 'A figura que apresenta as projeções ortogonais desse cubo sobre os três planos coordenados, após efetuar as movimentações descritas, é',
    options: [
      { letter: 'A', text: 'Projeção A', imageUrl: '/enem2025/q144_A.png' },
      { letter: 'B', text: 'Projeção B', imageUrl: '/enem2025/q144_B.png' },
      { letter: 'C', text: 'Projeção C', imageUrl: '/enem2025/q144_C.png' },
      { letter: 'D', text: 'Projeção D', imageUrl: '/enem2025/q144_D.png' },
      { letter: 'E', text: 'Projeção E', imageUrl: '/enem2025/q144_E.png' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Traduza "distância ao plano" para a COORDENADA QUE FALTA no nome do plano! 1) Distância ao plano yz é o X: "aproximou 3 do plano yz" -> X diminui 3 casas (vai para trás, ficando a 1 casa do fundo yz). 2) Distância ao plano xz é o Y: "afastou 5 do plano xz" -> Y aumenta 5 casas (vai para a direita, ficando na penúltima coluna). 3) Distância ao plano xy (chão) é o Z (altura): "aproximou 4 do plano xy" -> Z desce 4 andares (fica a 1 andar do chão)! Olhando quem tem altura 1 andar do chão, 1 casa do fundo e lá na direita: Alternativa E!',
      stepByStep: [
        '1. Posição inicial contando os quadradinhos: x (distância ao plano de fundo yz) = 4; y (distância à parede esquerda xz) = 1; z (altura até o chão xy) = 5.',
        '2. Aproximou 3 de yz => novo x = 4 - 3 = 1.',
        '3. Afastou 5 de xz => novo y = 1 + 5 = 6.',
        '4. Aproximou 4 de xy => novo z = 5 - 4 = 1.',
        '5. A única figura com as sombras vermelhas em x=1, y=6 e altura z=1 é a letra E.'
      ],
      timeSaverTip: 'Olhe primeiro só para a ALTURA (Z): o cubo desceu 4 andares ("aproximou 4 do chão xy"), ficando a apenas 1 quadradinho de altura do chão! Só C, D e E têm altura baixa, e com x=1 e y=6 mata a E na hora!',
      trapAlert: 'Confundir "distância ao plano yz" com y ou z (a distância ao plano yz é medida no eixo perpendicular a ele, que é o eixo X!).'
    }
  },
  // QUESTÃO 145 - MATEMÁTICA
  {
    id: 'enem2025-145',
    subject: 'matematica',
    topic: 'Probabilidade / Multiplicação de Probabilidades e Porcentagem',
    source: 'ENEM 2025 • Q145 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Probabilidade de Interseção ("Porcentagem de Porcentagem")',
    context: 'A reportagem de uma revista abordou o uso de redes sociais pelos internautas brasileiros:\n• 90% dos internautas brasileiros acessam redes sociais;\n• 60% da quantidade de internautas brasileiros que acessam redes sociais são mulheres.',
    imageUrl: '/enem2025/q145.png',
    question: 'Segundo os dados do infográfico, ao se escolher aleatoriamente um internauta brasileiro no período ao qual se refere a reportagem, a probabilidade de ele ser um homem que acessa alguma rede social é',
    options: [
      { letter: 'A', text: '30 / 90' },
      { letter: 'B', text: '36 / 100' },
      { letter: 'C', text: '40 / 100' },
      { letter: 'D', text: '40 / 90' },
      { letter: 'E', text: '46 / 90' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Imagine 100 internautas no total: 90 acessam redes sociais. Desses 90, 60% são mulheres, logo 40% SÃO HOMENS! Quanto é 40% de 90? 4 × 9 = 36 homens! Em um total de 100 internautas, a probabilidade é 36 / 100! Alternativa B!',
      stepByStep: [
        '1. Probabilidade de acessar rede social: P(A) = 90% = 0,90.',
        '2. Dentre os que acessam, 60% são mulheres, logo 100% - 60% = 40% (0,40) são homens.',
        '3. Probabilidade de acessar rede social E ser homem: 0,90 × 0,40 = 0,36 = 36 / 100.'
      ],
      timeSaverTip: 'Sempre suponha um total de 100 pessoas! 90 usam rede -> 40% de 90 = 36 homens -> 36/100.',
      trapAlert: 'Marcar 40/100 (C) esquecendo de multiplicar pelos 90%, ou colocar 90 no denominador (D).'
    }
  },
  // QUESTÃO 146 - MATEMÁTICA
  {
    id: 'enem2025-146',
    subject: 'matematica',
    topic: 'Aritmética e Razão / Consumo Semanal e Arredondamento para Cima',
    source: 'ENEM 2025 • Q146 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Uma pessoa pretende instalar um kit de gás natural veicular (GNV) em seu carro. Havia cinco modelos de cilindro cujas capacidades, em m³, eram: 10, 14, 17, 21 e 25. O preço do cilindro é proporcional à sua capacidade. Esse carro rodará 30 km diariamente, 7 dias por semana, e o consumo do GNV é de 1 m³ a cada 13 km rodados. A pessoa escolherá o modelo de cilindro de menor preço e que garanta apenas um abastecimento semanal.',
    question: 'Nessas condições, qual será a capacidade, em metro cúbico, do cilindro escolhido por essa pessoa?',
    options: [
      { letter: 'A', text: '10' },
      { letter: 'B', text: '14' },
      { letter: 'C', text: '17' },
      { letter: 'D', text: '21' },
      { letter: 'E', text: '25' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1) Km na semana: 30 km/dia × 7 dias = 210 km! 2) Gás necessário: 210 / 13 = 16,15 m³! Como o cilindro de 14 m³ não aguenta a semana toda, o menor modelo que comporta 16,15 m³ é o de 17 m³! Alternativa C!',
      stepByStep: [
        '1. Distância semanal: 30 km × 7 = 210 km.',
        '2. Volume de GNV consumido na semana: 210 / 13 ≈ 16,15 m³.',
        '3. Dentre as opções (10, 14, 17, 21, 25), o menor cilindro com capacidade >= 16,15 m³ é o de 17 m³.'
      ],
      timeSaverTip: 'Em vez de dividir 210 por 13, multiplique as opções por 13: 14 × 13 = 182 km (falta!); 17 × 13 = 221 km (passou de 210 km, deu!).',
      trapAlert: 'Calcular apenas para 5 dias úteis (150 / 13 = 11,5 -> marcando 14).'
    }
  }
];
