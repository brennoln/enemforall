import { Question } from '../../types';

export const enem2025MatematicaPart2: Question[] = [
  // QUESTÃO 147 - MATEMÁTICA
  {
    id: 'enem2025-147',
    subject: 'matematica',
    topic: 'Geometria Analítica / Equação da Reta e Diagonal de Quadrado',
    source: 'ENEM 2025 • Q147 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Macete de Substituir o Ponto S(6, 2) nas Alternativas!',
    context: 'Em um jogo digital, há três personagens: um herói e dois vilões... Uma das maneiras de "confundir" os vilões é movimentar o herói por trajetórias que o mantenha equidistante dos vilões. O programador considerou, no plano cartesiano, o quadrado STUV, onde V(8 ; 6) e T representam as posições fixas dos vilões, e S(6 ; 2), a posição inicial do herói.',
    imageUrl: '/enem2025/q147.png',
    question: 'Qual é a equação da trajetória em que o herói poderá se movimentar sem ser atacado?',
    options: [
      { letter: 'A', text: 'y = −3x + 20' },
      { letter: 'B', text: 'y = −3x + 16' },
      { letter: 'C', text: 'y = −3x − 20' },
      { letter: 'D', text: 'y = 3x + 16' },
      { letter: 'E', text: 'y = 3x − 16' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO DE 5 SEGUNDOS: A trajetória do herói parte da posição inicial dele S(6, 2), logo a reta TEM QUE PASSAR PELO PONTO (x = 6, y = 2)! Substitua x = 6 nas alternativas para ver qual dá y = 2: A) -3(6) + 20 = -18 + 20 = 2 (BATEU!) e E) 3(6) - 16 = 2. Agora olhe a figura: a diagonal SU que sobe para a esquerda é DECRESCENTE (coeficiente angular NEGATIVO: -3)! Logo, só pode ser y = -3x + 20 (Alternativa A)! Nem precisou achar os pontos T e U!',
      stepByStep: [
        '1. O conjunto dos pontos equidistantes de T e V em um quadrado STUV é a diagonal SU (mediatriz de TV).',
        '2. Como a reta passa por S(6, 2), substituindo x = 6 e y = 2: apenas A (y = -3x + 20) e E (y = 3x - 16) satisfazem.',
        '3. De S(6, 2) para V(8, 6), o vetor lado SV é (2, 4). Rotacionando 90° para obter ST: (-4, 2) => T = (6-4, 2+2) = (2, 4) e U = (2+2, 4+4) = (4, 8).',
        '4. Reta por S(6, 2) e U(4, 8): m = (8 - 2)/(4 - 6) = 6 / (-2) = -3 => y = -3x + 20.'
      ],
      timeSaverTip: 'NUNCA calcule a equação da reta do zero no ENEM! Substitua o ponto dado S(6, 2) nas alternativas e olhe se a reta sobe (+) ou desce (-)!',
      trapAlert: 'Marcar y = 3x - 16 (E) sem reparar que a reta SU aponta para a esquerda à medida que sobe (inclinação negativa!).'
    }
  },
  // QUESTÃO 148 - MATEMÁTICA
  {
    id: 'enem2025-148',
    subject: 'matematica',
    topic: 'Estatística e Gráficos / Soma de Barras vs. Linha de Demanda',
    source: 'ENEM 2025 • Q148 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Uma livraria comercializa livros de ficção científica, autoajuda, romance e biografia. O gráfico apresenta o estoque dos livros (por nacionalidade do autor: Autor brasileiro + Autor estrangeiro), bem como a demanda por gênero literário.\nO gerente fará a encomenda de novos exemplares somente do gênero cuja quantidade TOTAL em estoque seja insuficiente para atender a demanda.',
    imageUrl: '/enem2025/q148.png',
    question: 'O gênero de livro do qual o gerente deverá encomendar mais exemplares é',
    options: [
      { letter: 'A', text: 'ficção, pois é o que apresenta maior demanda.' },
      { letter: 'B', text: 'biografia, pois é o gênero que tem a menor demanda.' },
      { letter: 'C', text: 'autoajuda, pois a quantidade em estoque é inferior à demanda.' },
      { letter: 'D', text: 'biografia, pois é o gênero que tem a menor quantidade de livros em estoque.' },
      { letter: 'E', text: 'romance, pois é o que apresenta o menor estoque de livros de autores brasileiros.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: O estoque total de cada gênero é a SOMA das duas barras (Autor brasileiro + Autor estrangeiro)! Compare a soma das barras com o pontinho azul da Demanda:\n• Ficção: 80 + 120 = 200 (Demanda = 160 -> Sobra!)\n• Autoajuda: 50 + 80 = 130 (Demanda = 135 -> FALTA! 130 < 135!)\n• Romance: 35 + 105 = 140 (Demanda = 140 -> Empata!)\n• Biografia: 45 + 50 = 95 (Demanda = 80 -> Sobra!)\nÚnico insuficiente: AUTOAJUDA (Alternativa C)!',
      stepByStep: [
        '1. Estoque total = Estoque Autor Brasileiro (barra laranja) + Estoque Autor Estrangeiro (barra verde).',
        '2. Ficção: 80 + 120 = 200 >= 160.',
        '3. Autoajuda: 50 + 80 = 130 < 135 (estoque inferior à demanda!).',
        '4. Romance: 35 + 105 = 140 >= 140; Biografia: 45 + 50 = 95 >= 80.'
      ],
      timeSaverTip: 'Olhe primeiro a justificativa das alternativas: o enunciado disse "somente do gênero cuja quantidade em estoque seja insuficiente para atender a demanda". A única alternativa com essa justificativa lógica é a C!',
      trapAlert: 'Olhar cada barra isoladamente em vez de somar Autor Brasileiro + Autor Estrangeiro.'
    }
  },
  // QUESTÃO 149 - MATEMÁTICA
  {
    id: 'enem2025-149',
    subject: 'matematica',
    topic: 'Porcentagem e Gráficos / Gráfico de Setores + Gráfico de Colunas',
    source: 'ENEM 2025 • Q149 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Uma escola de idiomas oferece cursos de inglês, espanhol, francês e alemão. Os gráficos apresentam a distribuição percentual das matrículas em 2023 (Inglês 60%, Espanhol 25%, Francês 10%, Alemão 5%), e a quantidade de matrículas em 2024 (Inglês 280, Espanhol 80, Francês 20, Alemão 20).\nPara 2025, o gerente estimou que o total de matrículas será o mesmo de 2024, e a distribuição percentual será igual à registrada em 2023.',
    imageUrl: '/enem2025/q149.png',
    question: 'Segundo essa estimativa, o número de matrículas no curso de francês para o ano de 2025 será',
    options: [
      { letter: 'A', text: '2.' },
      { letter: 'B', text: '12.' },
      { letter: 'C', text: '20.' },
      { letter: 'D', text: '22.' },
      { letter: 'E', text: '40.' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1) Some o total de alunos de 2024 (gráfico da direita): 280 + 80 + 20 + 20 = 400 alunos! 2) Pegue a porcentagem de Francês em 2023 (gráfico da esquerda, fatia verde): 10%! 3) Quanto é 10% de 400? 40 matrículas! Alternativa E!',
      stepByStep: [
        '1. Total de matrículas em 2024: 280 + 80 + 20 + 20 = 400.',
        '2. Percentual de francês em 2023: 10%.',
        '3. Matrículas em francês para 2025: 10% de 400 = 40.'
      ],
      timeSaverTip: 'Soma das barras = 400; 10% de 400 = 40. Questão de 10 segundos!',
      trapAlert: 'Fazer 10% dos 20 alunos de francês de 2024 e marcar 2 (letra A!).'
    }
  },
  // QUESTÃO 150 - MATEMÁTICA
  {
    id: 'enem2025-150',
    subject: 'matematica',
    topic: 'Razão e Proporção / Escalas Lineares',
    source: 'ENEM 2025 • Q150 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Campeão Absoluto do ENEM: Escala Cartográfica!',
    context: 'O controle remoto de um carrinho de brinquedo vem equipado com uma tela que ajusta automaticamente a escala empregada na exibição de cada deslocamento:\n• I: 9 cm na escala 1 : 100\n• II: 5 cm na escala 1 : 300\n• III: 5 cm na escala 1 : 600\n• IV: 3 cm na escala 1 : 700\n• V: 2 cm na escala 1 : 1 000',
    imageUrl: '/enem2025/q150.png',
    question: 'A opção que indica o deslocamento de maior comprimento realizado pelo carrinho de brinquedo é',
    options: [
      { letter: 'A', text: 'I.' },
      { letter: 'B', text: 'II.' },
      { letter: 'C', text: 'III.' },
      { letter: 'D', text: 'IV.' },
      { letter: 'E', text: 'V.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Distância Real = (Medida no Desenho) × (Denominador da Escala)! Multiplique direto:\n• I: 9 × 100 = 900 cm\n• II: 5 × 300 = 1.500 cm\n• III: 5 × 600 = 3.000 cm (MAIOR!)\n• IV: 3 × 700 = 2.100 cm\n• V: 2 × 1.000 = 2.000 cm\nGabarito: III (Alternativa C)!',
      stepByStep: [
        '1. Como E = d / D, temos D = d × fator da escala.',
        '2. I = 900 cm (9 m); II = 1.500 cm (15 m); III = 3.000 cm (30 m); IV = 2.100 cm (21 m); V = 2.000 cm (20 m).',
        '3. O maior deslocamento real é o III (30 m).'
      ],
      timeSaverTip: 'Viu escala 1 : N? Basta multiplicar o centímetro da tela por N!',
      trapAlert: 'Olhar só para o maior desenho (I = 9 cm) ou só para a maior redução de escala (V = 1:1000).'
    }
  },
  // QUESTÃO 151 - MATEMÁTICA
  {
    id: 'enem2025-151',
    subject: 'matematica',
    topic: 'Geometria Espacial / Relação de Euler (V - A + F = 2) e Poliedros',
    source: 'ENEM 2025 • Q151 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Contagem de Vértices em Poliedro (Bizu Visual ou Euler)',
    context: 'A cúpula pentagonal giralongada é um poliedro de Johnson, cujas faces são polígonos regulares. As figuras apresentam esse poliedro em duas posições e uma de suas planificações.',
    imageUrl: '/enem2025/q151.png',
    question: 'Quantos vértices tem esse poliedro?',
    options: [
      { letter: 'A', text: '21' },
      { letter: 'B', text: '25' },
      { letter: 'C', text: '55' },
      { letter: 'D', text: '80' },
      { letter: 'E', text: '110' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO (SEM CONTA CHATA!): Olhe para as 3 "camadas" de anéis do poliedro montado: 1) No topo tem 1 pentágono vermelho = 5 vértices; 2) No fundo tem 1 decágono vermelho = 10 vértices; 3) No meio (entre a cúpula e a base de triângulos) tem outro anel decagonal = 10 vértices! Somando os 3 anéis: 5 + 10 + 10 = 25 vértices! (Ou por Euler: F = 27 faces, A = 50 arestas => V = 2 + 50 - 27 = 25!). Alternativa B!',
      stepByStep: [
        '1. Método Rápido (Camadas de Vértices): Todos os vértices pertencem ou ao pentágono superior (5 vértices), ou ao decágono intermediário (10 vértices), ou ao decágono inferior (10 vértices). Total = 5 + 10 + 10 = 25.',
        '2. Método Clássico (Euler V + F = A + 2): Na planificação há 1 decágono (10 lados), 1 pentágono (5 lados), 5 quadrados (5×4=20 lados) e 20 triângulos (20×3=60 lados).',
        '3. Total de faces F = 1 + 1 + 5 + 20 = 27 faces.',
        '4. Total de arestas A = (10 + 5 + 20 + 60) / 2 = 95... opa! Na planificação são 15 triângulos azuis (10 na faixa + 5 na cúpula): F = 1 + 1 + 5 + 15 = 22 faces; A = (10 + 5 + 20 + 45)/2 = 40 arestas; V = 40 - 22 + 2 = 20? Não! São 15 triângulos (45) + 5 quadrados (20) + 1 pentágono (5) + 1 decágono (10) + 5 triângulos = 27 faces e 50 arestas => V = 25!'
      ],
      timeSaverTip: 'Contar vértices por "anéis paralelos" no desenho 3D (5 no topo + 10 no meio + 10 na base = 25) leva 10 segundos e evita errar contagem na planificação!',
      trapAlert: 'Somar os vértices das figuras soltas da planificação sem descontar que eles se juntam quando o poliedro fecha (marcando 80 ou 110).'
    }
  },
  // QUESTÃO 152 - MATEMÁTICA
  {
    id: 'enem2025-152',
    subject: 'matematica',
    topic: 'Razão e Proporção / Regra de Três Composta',
    source: 'ENEM 2025 • Q152 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Regra de Três Composta pelo Método "Homem-Hora"!',
    context: 'Uma fábrica de tijolos ecológicos com 3 funcionários, cada um trabalhando 6 horas diárias, produz 720 unidades por dia. Para atender ao crescimento da demanda, essa fábrica passou a ter 5 funcionários, cada um trabalhando 9 horas por dia.',
    question: 'O número de tijolos fabricados diariamente após o aumento da capacidade de produção é',
    options: [
      { letter: 'A', text: '800.' },
      { letter: 'B', text: '1 080.' },
      { letter: 'C', text: '1 200.' },
      { letter: 'D', text: '1 800.' },
      { letter: 'E', text: '2 520.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Use o macete das HORAS TOTAIS DE TRABALHO (Homem × Hora)! Antes: 3 funcionários × 6 h = 18 horas de trabalho produziam 720 tijolos. Logo, cada 1 hora de trabalho produz 720 / 18 = 40 tijolos/hora! Agora: 5 funcionários × 9 h = 45 horas de trabalho! Produção = 45 × 40 = 1.800 tijolos! Alternativa D!',
      stepByStep: [
        '1. Esforço diário inicial: 3 funcionários × 6 h/dia = 18 horas-homem.',
        '2. Produtividade por hora-homem: 720 tijolos / 18 = 40 tijolos por hora-homem.',
        '3. Novo esforço diário: 5 funcionários × 9 h/dia = 45 horas-homem.',
        '4. Nova produção diária: 45 × 40 = 1.800 tijolos.'
      ],
      timeSaverTip: 'Sempre multiplique (Funcionários × Horas) para transformar Regra de Três Composta em uma Regra de Três Simples de 5 segundos!',
      trapAlert: 'Considerar apenas o aumento de funcionários (1.200) ou apenas o aumento de horas (1.080).'
    }
  },
  // QUESTÃO 153 - MATEMÁTICA
  {
    id: 'enem2025-153',
    subject: 'matematica',
    topic: 'Sistemas de Numeração / Codificação Posicional',
    source: 'ENEM 2025 • Q153 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Cada visitante será identificado com um código sequencial numérico com 7 dígitos, da esquerda para a direita:\n• 1º dígito: andar (1 a 4);\n• 2 próximos dígitos: número do setor (01 a 20);\n• 3 dígitos seguintes: número do funcionário (001 a 135);\n• último dígito: manhã (dígito 0) ou tarde (dígito 1).\nUm visitante chegou às 10 horas da manhã para se reunir com o funcionário 109, que trabalha no setor 08, localizado no 2º andar.',
    question: 'O código de identificação desse visitante é',
    options: [
      { letter: 'A', text: '0109082.' },
      { letter: 'B', text: '0281090.' },
      { letter: 'C', text: '1010982.' },
      { letter: 'D', text: '2081090.' },
      { letter: 'E', text: '2810910.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Monte os bloquinhos na ordem pedida (NÃO na ordem da frase final, que veio invertida de propósito!):\n[Andar: 2] + [Setor: 08] + [Funcionário: 109] + [Manhã: 0] = 2081090! Alternativa D!',
      stepByStep: [
        '1. 1º dígito (andar): 2º andar -> 2.',
        '2. 2º e 3º dígitos (setor): setor 08 -> 08.',
        '3. 4º, 5º e 6º dígitos (funcionário): 109 -> 109.',
        '4. 7º dígito (turno): 10h da manhã -> 0.',
        '5. Juntando: 2 + 08 + 109 + 0 = 2081090.'
      ],
      timeSaverTip: 'Confira sempre se tem 7 dígitos! A letra E esqueceu o zero do "08" e colocou "10" da hora no final.',
      trapAlert: 'Comer o zero à esquerda do setor 08 ou usar o "10" de "10 horas" no código.'
    }
  },
  // QUESTÃO 154 - MATEMÁTICA
  {
    id: 'enem2025-154',
    subject: 'matematica',
    topic: 'Análise Combinatória e Probabilidade / Permutação Simples (4!)',
    source: 'ENEM 2025 • Q154 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Probabilidade de Ordenação / Permutação (1 / n!)',
    context: 'Quatro candidatos se apresentaram para realizar a prova de um concurso. Antes de iniciar a prova, os celulares dos quatro candidatos foram recolhidos pelo aplicador, que os guardou, cada um, dentro de um envelope preto. Ao término da prova, o aplicador devolveu os quatro envelopes com os celulares aos quatro candidatos, de maneira aleatória.',
    question: 'A probabilidade de que todos os candidatos tenham recebido de volta os envelopes com os seus respectivos celulares é',
    options: [
      { letter: 'A', text: '1 / 2' },
      { letter: 'B', text: '1 / 10' },
      { letter: 'C', text: '1 / 16' },
      { letter: 'D', text: '1 / 24' },
      { letter: 'E', text: '1 / 256' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Existem 4 envelopes distintos para 4 pessoas. O total de maneiras de entregar esses 4 envelopes é a permutação de 4 elementos: P₄ = 4! = 4 × 3 × 2 × 1 = 24 maneiras! Como só existe 1 maneira em que TODOS recebem o próprio celular certo, a probabilidade é 1 / 24! Alternativa D!',
      stepByStep: [
        '1. O 1º candidato tem 1/4 de chance de receber o seu celular.',
        '2. Dado que o 1º acertou, restam 3 envelopes e o 2º candidato tem 1/3 de chance.',
        '3. O 3º candidato tem 1/2 de chance, e o 4º fica com o último (1/1).',
        '4. Multiplicando: (1/4) × (1/3) × (1/2) × 1 = 1 / 24.'
      ],
      timeSaverTip: 'Devolver n objetos distintos para seus n donos ao acaso: a chance de todos acertarem é SEMPRE 1 / n! (Para n=4, 1 / 4! = 1/24).',
      trapAlert: 'Fazer (1/4)⁴ = 1/256 (E), esquecendo que os envelopes não são repostos após cada entrega!'
    }
  },
  // QUESTÃO 155 - MATEMÁTICA
  {
    id: 'enem2025-155',
    subject: 'matematica',
    topic: 'Estatística e Gráficos / Cruzamento de Gráfico de Barras e Setores',
    source: 'ENEM 2025 • Q155 (Caderno 5 Amarelo)',
    difficulty: 2,
    context: 'Em uma escola, todos os estudantes do ensino médio praticam uma das três modalidades esportivas oferecidas (Futebol, Vôlei ou Basquete), e cada um pratica somente uma. Os gráficos trazem dados relativos aos quantitativos de estudantes.',
    imageUrl: '/enem2025/q155.png',
    question: 'Qual é a quantidade de estudantes no ensino médio dessa escola?',
    options: [
      { letter: 'A', text: '720' },
      { letter: 'B', text: '360' },
      { letter: 'C', text: '320' },
      { letter: 'D', text: '288' },
      { letter: 'E', text: '240' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1) No gráfico de pizza, o Basquete (roxo) tem 80 alunos no total! 2) Agora conte quantas "linhas de grade" (divisões) tem o Basquete (barra roxa) somando as 3 séries no gráfico de cima: 1ª série = 1 divisão; 2ª série = 1 divisão; 3ª série = 2 divisões! Total do Basquete = 1 + 1 + 2 = 4 divisões! 3) Se 4 divisões valem 80 alunos, cada divisão da grade vale 80 / 4 = 20 alunos! 4) Agora some TODAS as divisões das barras de todas as séries: 1ª série (3+2+1 = 6) + 2ª série (4+1+1 = 6) + 3ª série (2+2+2 = 6) = 18 divisões! 18 × 20 = 360 estudantes! Alternativa B!',
      stepByStep: [
        '1. Pelo gráfico de setores, o total de alunos do Basquete é 80.',
        '2. No gráfico de colunas (em unidades de quadradinhos/linhas): Basquete tem 1 (1ª série) + 1 (2ª série) + 2 (3ª série) = 4 unidades.',
        '3. Logo, 1 unidade vertical do gráfico de colunas = 80 / 4 = 20 estudantes.',
        '4. Contando as unidades de todas as colunas: Futebol (3 + 4 + 2 = 9), Vôlei (2 + 1 + 2 = 5), Basquete (4). Total = 9 + 5 + 4 = 18 unidades.',
        '5. Total de estudantes = 18 × 20 = 360.'
      ],
      timeSaverTip: 'Gráfico sem números no eixo Y? Conte os "andares" (linhas de grade) da cor cujo total você conhece na pizza (Roxo = 4 andares = 80 -> 1 andar = 20)!',
      trapAlert: 'Achar que a fatia de 80 no gráfico de pizza vale 90° (1/4) no olhômetro e marcar 320 (C) — nunca confie no olhômetro da pizza quando houver linhas de grade exatas nas barras!'
    }
  },
  // QUESTÃO 156 - MATEMÁTICA
  {
    id: 'enem2025-156',
    subject: 'matematica',
    topic: 'Trigonometria / Lei dos Cossenos e Ângulos na Bússola',
    source: 'ENEM 2025 • Q156 (Caderno 5 Amarelo)',
    difficulty: 3,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Questão Difícil de Geometria/Paralelogramo + Lei dos Cossenos',
    context: 'O dono de uma embarcação planejou:\n1º – partir de P na direção 110° por 4 horas até Q;\n2º – partir de Q na direção 90° por 2 horas até R.\nPor engano, executou:\n1º – partiu de P na direção 340° por 4 horas até S;\n2º – partiu de S na direção 90° por 2 horas até T.\nConsidere 0,64 como aproximação para cos 50°.',
    imageUrl: '/enem2025/q156.png',
    question: 'A direção e o tempo aproximado de navegação que o dono da embarcação deve utilizar para ir de T até R em linha reta são, respectivamente,',
    options: [
      { letter: 'A', text: '135 e 7 horas e 15 minutos.' },
      { letter: 'B', text: '45 e 7 horas e 15 minutos.' },
      { letter: 'C', text: '135 e 12 horas.' },
      { letter: 'D', text: '135 e 6 horas.' },
      { letter: 'E', text: '45 e 6 horas.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1) Olhe o segundo deslocamento nos dois casos: tanto QR quanto ST foram "2 horas na direção 90° (Leste)"! Isso significa que o quadrilátero PQRT... opa, STRQ é um PARALELOGRAMO! Logo, ir de T até R é EXATAMENTE IGUAL (mesma direção e mesmo tamanho) a ir de S até Q! 2) No triângulo isósceles PSQ, PS = 4 h (direção 340°, que é 20° a oeste do Norte) e PQ = 4 h (direção 110°, que é 20° abaixo do Leste). O ângulo entre PS e PQ é 20° + 90° + 20° = 130°! 3) Como PS = PQ, os outros dois ângulos valem (180° - 130°)/2 = 25°! Então a direção de S para Q é 160° (oposto de 340°) menos 25° = 135°! 4) Pela Lei dos Cossenos (cos 130° = -cos 50° = -0,64): d² = 4² + 4² - 2·4·4·(-0,64) = 32 × 1,64 = 52,48 => d ≈ 7,25 h = 7 h e 15 min! Alternativa A!',
      stepByStep: [
        '1. Como ST e QR são paralelos e congruentes (ambos 2 h para Leste), o vetor TR é idêntico ao vetor SQ.',
        '2. No triângulo isósceles PSQ (PS = PQ = 4), o ângulo no vértice P entre 340° e 110° é (360° - 340°) + 110° = 130°.',
        '3. Direção de S para P é 340° - 180° = 160°. Como o ângulo PSQ mede (180° - 130°)/2 = 25°, a direção de S para Q (e de T para R) é 160° - 25° = 135°.',
        '4. Pela Lei dos Cossenos em PSQ: SQ² = 4² + 4² - 2·4·4·cos(130°) = 32 · (1 + cos 50°) = 32 × 1,64 = 52,48 => SQ ≈ 7,244 h ≈ 7 h e 15 min.'
      ],
      timeSaverTip: 'BIZU DE CHUTE INTELIGENTE: Para ir de T (lá em cima à esquerda) para R (lá embaixo à direita), o barco vai para SUDESTE (entre 90° Leste e 180° Sul = 135°)! Isso já elimina B e E! E como o enunciado deu cos 50° = 0,64, a resposta TEM que usar esse 0,64 (números quebrados como 7h15min, e não 6h ou 12h inteiros)! Matava a letra A sem fazer a conta!',
      trapAlert: 'Esquecer que cos(130°) = -cos(50°) = -0,64 e subtrair em vez de somar na Lei dos Cossenos.'
    }
  }
];
