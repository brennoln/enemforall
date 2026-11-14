import { Question } from '../../types';

export const enem2025MatematicaPart3: Question[] = [
  // QUESTÃO 157 - MATEMÁTICA
  {
    id: 'enem2025-157',
    subject: 'matematica',
    topic: 'Estatística / Desvio Padrão e Homogeneidade de Dados',
    source: 'ENEM 2025 • Q157 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Campeão de Estatística: Menor Desvio Padrão = Dados Próximos da Média!',
    context: 'Em um estudo clínico, 55 mulheres foram distribuídas em 5 grupos de 11 pessoas. Será escolhido um grupo no qual a maioria das mulheres tenham idades entre 20 e 30 anos. O quadro informa:\n• Grupo 1: Média = 25 | Desvio padrão = 10\n• Grupo 2: Mediana = 25 | Desvio padrão = 9\n• Grupo 3: Moda = 25\n• Grupo 4: Média = 25 | Desvio padrão = 1\n• Grupo 5: Menor idade = 20 | Maior idade = 35',
    imageUrl: '/enem2025/q157.png',
    question: 'O grupo escolhido foi o',
    options: [
      { letter: 'A', text: '1.' },
      { letter: 'B', text: '2.' },
      { letter: 'C', text: '3.' },
      { letter: 'D', text: '4.' },
      { letter: 'E', text: '5.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: DESVIO PADRÃO MÍNIMO = DADOS COLADOS NA MÉDIA! O Grupo 4 tem Média = 25 anos (bem no meio de 20 e 30!) e Desvio Padrão = 1 (baixíssimo!). Isso garante que praticamente todas as 11 mulheres têm idades coladas em 25 anos (entre 20 e 30 anos)! Alternativa D em 3 segundos!',
      stepByStep: [
        '1. O critério exige que a maioria tenha idades entre 20 e 30 anos (intervalo centrado em 25 anos).',
        '2. O Grupo 4 possui média 25 e desvio padrão igual a 1 (dispersão mínima ao redor de 25).',
        '3. Com desvio padrão 1, é impossível que a maioria esteja fora do intervalo [20, 30] (pois um único valor fora de [20, 30] já geraria desvio quadrático >= 25, elevando o desvio padrão para > 1,5).'
      ],
      timeSaverTip: 'Caiu tabela com "Desvio Padrão" no ENEM? 99% das vezes a resposta certa é a linha que tem o MENOR Desvio Padrão (Grupo 4)!',
      trapAlert: 'Marcar o Grupo 5 (que vai de 20 a 35, podendo ter 10 mulheres com 35 anos e apenas 1 com 20!).'
    }
  },
  // QUESTÃO 158 - MATEMÁTICA
  {
    id: 'enem2025-158',
    subject: 'matematica',
    topic: 'Estatística e Aritmética / Média Aritmética (Pace de Corrida)',
    source: 'ENEM 2025 • Q158 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Pace representa o tempo médio, em segundo, que um corredor leva para percorrer 1 km. O esquema mostra os tempos nos 4 primeiros quilômetros de uma corrida de 5 km: 1º km = 272 s; 2º km = 284 s; 3º km = 288 s; 4º km = 288 s (acumulado até 4 km = 1 132 s).\nO melhor pace que esse corredor alcançou em corridas de 5 km foi 281 s/km.',
    imageUrl: '/enem2025/q158.png',
    question: 'Para que consiga repetir nessa corrida seu melhor pace em corridas de 5 km, seu tempo, no 5º trecho, deve ser quantos segundos menor do que o que ele gastou para percorrer o 4º trecho?',
    options: [
      { letter: 'A', text: '1' },
      { letter: 'B', text: '2' },
      { letter: 'C', text: '8' },
      { letter: 'D', text: '9' },
      { letter: 'E', text: '15' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1) Para ter média de 281 s/km em 5 km, o tempo total dos 5 km deve ser 5 × 281 = 1.405 s! 2) A imagem já deu a soma dos 4 primeiros km lá em cima: 1.132 s! 3) Logo, no 5º trecho ele precisa fazer 1.405 - 1.132 = 273 s! 4) Como no 4º trecho ele fez 288 s, a redução é 288 - 273 = 15 segundos! Alternativa E!',
      stepByStep: [
        '1. Tempo total necessário para 5 km com pace 281 s/km: 5 × 281 = 1.405 s.',
        '2. Tempo gasto até o km 4 (dado na figura): 1.132 s.',
        '3. Tempo necessário no 5º trecho: 1.405 - 1.132 = 273 s.',
        '4. Diferença em relação ao 4º trecho (288 s): 288 - 273 = 15 s.'
      ],
      timeSaverTip: 'Macete dos desvios em relação a 281: 1º(-9), 2º(+3), 3º(+7), 4º(+7). Soma dos desvios = -9 + 3 + 7 + 7 = +8. Logo o 5º trecho precisa ser 281 - 8 = 273 s! E 288 - 273 = 15 s!',
      trapAlert: 'Subtrair do pace médio (288 - 281 = 7 ou 8) em vez de calcular o tempo necessário no 5º trecho para compensar os anteriores.'
    }
  },
  // QUESTÃO 159 - MATEMÁTICA
  {
    id: 'enem2025-159',
    subject: 'matematica',
    topic: 'Funções Trigonométricas / Gráfico da Função Tangente e Assíntotas',
    source: 'ENEM 2025 • Q159 (Caderno 5 Amarelo)',
    difficulty: 3,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Macete de Testar o Ponto (T = 2,5 ; D = 30) nas Alternativas!',
    context: 'Ao ser enchido de água, a distância D da lâmina de água ao tampo da mesa aumenta em relação ao tempo T de acordo com uma função do tipo D = k + tg[p(T + m)], conforme ilustrado na figura, com ponto (2,5 ; 30) e assíntotas verticais em (5 - 2π)/2 e (5 + 2π)/2.',
    imageUrl: '/enem2025/q159.png',
    question: 'A expressão algébrica que representa a relação entre D e T é',
    options: [
      { letter: 'A', text: 'D = 2,5 + tg[30(T − (5 − 2π)/2)]' },
      { letter: 'B', text: 'D = 4 + tg[30(T + 5/2)]' },
      { letter: 'C', text: 'D = 4 + tg[2,5(T + (5 + 2π)/2)]' },
      { letter: 'D', text: 'D = 30 + tg[(1/2)(T − 5)]' },
      { letter: 'E', text: 'D = 30 + tg[(1/2)(T − 5/2)]' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO (MATA EM 5 SEGUNDOS SEM SABER TRIGONOMETRIA!): Olhe o gráfico: quando T = 2,5 (que é 5/2!), o valor de D é 30! Substitua T = 2,5 (ou 5/2) na alternativa E: D = 30 + tg[(1/2)(5/2 - 5/2)] = 30 + tg(0) = 30 + 0 = 30! É a ÚNICA alternativa que dá D = 30 quando T = 2,5! Alternativa E!',
      stepByStep: [
        '1. Pelo gráfico, o ponto de inflexão central da tangente (onde tg(0) = 0) é (T = 2,5 ; D = 30).',
        '2. Logo, o deslocamento vertical é k = 30 (elimina A, B e C na hora!) e o argumento da tangente deve zerar em T = 2,5 = 5/2.',
        '3. Na letra D, para T = 5/2 o argumento não zera (zera em T = 5). Na letra E, T - 5/2 zera exatamente em T = 2,5!',
        '4. Conferindo o período pelas assíntotas: (5 + 2π)/2 - (5 - 2π)/2 = 2π. Como o período da tangente é π / p = 2π => p = 1/2. Confere 100% com a E!'
      ],
      timeSaverTip: 'Viu função trigonométrica assustadora no ENEM? NUNCA monte do zero: pegue um ponto claro do gráfico — aqui (2,5 ; 30) — e substitua nas opções!',
      trapAlert: 'Distrair-se com o fator 1/2 fora dos parênteses e marcar a D achando que (1/2)(T - 5) zeraria em 2,5!'
    }
  },
  // QUESTÃO 160 - MATEMÁTICA
  {
    id: 'enem2025-160',
    subject: 'matematica',
    topic: 'Geometria e Orientação Espacial / Rosa dos Ventos e Deslocamento em Malha',
    source: 'ENEM 2025 • Q160 (Caderno 5 Amarelo)',
    difficulty: 2,
    context: 'O quadrado pequeno (A), pintado em preto e localizado no canto superior esquerdo de um quadrado maior, indica a casa do amigo de João. João também mora em uma casa de esquina, mas na extremidade nordeste de um quarteirão. Para chegar à casa de seu amigo, ao sair de casa, João deve caminhar pelo quarteirão onde mora na direção oeste, dobrar à direita, caminhar por três quarteirões na direção norte e dobrar à esquerda. A casa de seu amigo fica no segundo quarteirão a oeste.',
    imageUrl: '/enem2025/q160.png',
    question: 'O quarteirão onde se encontra a casa de João é representado pelo quadrado com a letra',
    options: [
      { letter: 'A', text: 'P.' },
      { letter: 'B', text: 'Q.' },
      { letter: 'C', text: 'R.' },
      { letter: 'D', text: 'S.' },
      { letter: 'E', text: 'T.' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Faça o CAMINHO INVERSO a partir de A (ou teste T): Se João mora na esquina NORDESTE (canto superior direito) do quarteirão T (última coluna, última linha):\n1) Camina pelo seu quarteirão T para OESTE (vai da esquina nordeste até a esquina noroeste de T);\n2) Dobra à direita (para o NORTE) e caminha por 3 quarteirões para o Norte (passa por T, pelo 4º e pelo 3º andar, chegando na rua acima do 3º andar, onde fica S);\n3) Dobra à esquerda (para OESTE): passa pelo 1º quarteirão a oeste (S) e chega na esquina superior esquerda do 2º quarteirão a oeste, onde está A! Logo, João mora no quarteirão T (Alternativa E)!',
      stepByStep: [
        '1. A está no quarteirão da 3ª linha (de cima para baixo) e 3ª coluna (da esquerda para a direita).',
        '2. No final, A fica no "segundo quarteirão a oeste" após a curva à esquerda. Logo, antes de virar para oeste, João subiu pela rua vertical entre a 4ª e a 5ª coluna.',
        '3. Como ele iniciou caminhando para oeste pela face norte do seu próprio quarteirão (saindo da esquina nordeste até a noroeste) antes de virar ao norte nessa rua entre a 4ª e 5ª coluna, o quarteirão dele está na 5ª coluna (última coluna à direita).',
        '4. Descendo 3 quarteirões para o sul, chegamos na última linha da 5ª coluna: quarteirão T.'
      ],
      timeSaverTip: 'Olhe as opções na parte de baixo (R, P, T): como ele caminha para OESTE até chegar em A (que está no meio), ele OBRIGATORIAMENTE saiu de um quarteirão mais a LESTE (direita) que A (elimina R!). E como "A fica no 2º quarteirão a oeste", saindo da esquina nordeste de T ele passa por 1 quarteirão (coluna 5) + mais 2 quarteirões (coluna 4 e coluna 3 onde está A)!',
      trapAlert: 'Esquecer que ao sair da esquina NORDESTE e caminhar pelo seu quarteirão para oeste ele já atravessa a largura do próprio quarteirão T (marcando P por engano).'
    }
  },
  // QUESTÃO 161 - MATEMÁTICA
  {
    id: 'enem2025-161',
    subject: 'matematica',
    topic: 'Álgebra e Porcentagem / Equação do 1º Grau e Redução de Custos',
    source: 'ENEM 2025 • Q161 (Caderno 5 Amarelo)',
    difficulty: 2,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Otimização de Custo com Porcentagem',
    context: 'Uma empresa produziu, em um determinado mês, 110 toneladas de plástico a partir de derivados de petróleo e 80 toneladas a partir de plásticos reciclados (total = 190 toneladas). O custo para reciclar 1 tonelada é de R$ 500,00, que equivale a 5% do custo para produzir 1 tonelada a partir do petróleo. Para o mês seguinte, a meta é produzir a mesma quantidade total (190 t), mas com redução de, pelo menos, 50% no custo de produção.',
    question: 'Para que no mês seguinte a empresa atinja a meta, a quantidade mínima de toneladas de plástico que devem ser produzidas a partir de reciclagem deverá ser',
    options: [
      { letter: 'A', text: '135.' },
      { letter: 'B', text: '140.' },
      { letter: 'C', text: '155.' },
      { letter: 'D', text: '160.' },
      { letter: 'E', text: '175.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: NUNCA use o R$ 500,00! Use "unidades de custo": se reciclar custa 1 ficha (5%), fazer do petróleo custa 20 fichas (100%)! \n1) Custo atual: 110 × 20 + 80 × 1 = 2.200 + 80 = 2.280 fichas.\n2) Meta (reduzir 50%): metade de 2.280 = 1.140 fichas!\n3) Teste x = 140 recicladas (e 190 - 140 = 50 de petróleo): 50 × 20 + 140 × 1 = 1.000 + 140 = 1.140 fichas! BATEU EXATO! Alternativa B (140)!',
      stepByStep: [
        '1. Como o custo reciclado é 5% (1/20) do custo do petróleo, chame C_rec = 1 e C_pet = 20.',
        '2. Custo do 1º mês (110 pet + 80 rec, total 190 t): C₁ = 110 × 20 + 80 × 1 = 2.280.',
        '3. Custo máximo do 2º mês (50% de C₁): C₂ = 2.280 / 2 = 1.140.',
        '4. Sendo x a quantidade reciclada e (190 - x) a de petróleo: 20(190 - x) + 1·x <= 1.140 => 3.800 - 19x <= 1.140 => 19x >= 2.660 => x >= 140 toneladas.'
      ],
      timeSaverTip: 'Trocar "R$ 500 e R$ 10.000" por "1 e 20" corta todos os zeros inúteis da conta!',
      trapAlert: 'Achar que basta reduzir pela metade as 110 t de petróleo (passando para 55 t de petróleo e 135 t recicladas — letra A!).'
    }
  },
  // QUESTÃO 162 - MATEMÁTICA
  {
    id: 'enem2025-162',
    subject: 'matematica',
    topic: 'Análise Combinatória / Princípio Fundamental da Contagem (PFC)',
    source: 'ENEM 2025 • Q162 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Combinatória Clássica: Escolha de Casais Sem Repetir Casal!',
    context: 'Dez casais fundaram um grupo de dança e decidiram constituir uma diretoria com três cargos: presidente, secretário e tesoureiro. Para maior representatividade, decidiu-se que no máximo uma pessoa por casal poderá ocupar um cargo nessa diretoria.',
    question: 'Quantas diretorias diferentes podem ser constituídas por esses 10 casais?',
    options: [
      { letter: 'A', text: '10 × 9 × 8' },
      { letter: 'B', text: '20 × 18 × 16' },
      { letter: 'C', text: '20 × 19 × 18' },
      { letter: 'D', text: '10 × 9 × 8 × 2' },
      { letter: 'E', text: '20 × 18 × 16 × 2' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 10 casais = 20 pessoas! \n• Para Presidente: qualquer uma das 20 pessoas (20 opções).\n• Para Secretário: saem a pessoa escolhida E o seu cônjuge (saem 2 pessoas!), sobrando 18 opções!\n• Para Tesoureiro: saem mais 2 pessoas (o secretário e seu cônjuge), sobrando 16 opções!\nTotal = 20 × 18 × 16! Alternativa B em 5 segundos!',
      stepByStep: [
        '1. Total de pessoas disponíveis inicialmente: 10 casais × 2 = 20 pessoas.',
        '2. Escolha do Presidente: 20 possibilidades.',
        '3. Escolha do Secretário: não pode ser o presidente nem seu par (20 - 2 = 18 possibilidades).',
        '4. Escolha do Tesoureiro: não pode ser nenhum dos dois anteriores nem seus pares (18 - 2 = 16 possibilidades).',
        '5. Pelo PFC: 20 × 18 × 16.'
      ],
      timeSaverTip: 'Restrição "no máximo 1 por casal": a cada escolha você elimina 2 pessoas (o escolhido + o cônjuge): 20 -> 18 -> 16!',
      trapAlert: 'Marcar 20 × 19 × 18 (C) esquecendo de excluir o cônjuge, ou 10 × 9 × 8 (A) esquecendo que cada casal tem 2 pessoas.'
    }
  },
  // QUESTÃO 163 - MATEMÁTICA
  {
    id: 'enem2025-163',
    subject: 'matematica',
    topic: 'Razão e Proporção / Escala Linear e Conversão de Unidades (cm para m)',
    source: 'ENEM 2025 • Q163 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • 2ª Questão de Escala na Mesma Prova (Cai Demais!)',
    context: 'Um artista pediu a um banhista que fizesse um pequeno desenho (20 cm por 20 cm), que serviria de esboço para uma grande obra de arte a ser feita na areia. Após a conclusão, a obra de arte obtida manteve as mesmas proporções do desenho, sendo que as medidas indicadas na figura (20 cm) foram ampliadas para 30 m.',
    imageUrl: '/enem2025/q163.png',
    question: 'Em qual escala esse desenho representa a obra de arte?',
    options: [
      { letter: 'A', text: '1 : 1,5' },
      { letter: 'B', text: '1 : 2,25' },
      { letter: 'C', text: '1 : 10' },
      { letter: 'D', text: '1 : 100' },
      { letter: 'E', text: '1 : 150' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Escala = Desenho / Real (NA MESMA UNIDADE)! Passe 30 metros para centímetros (acrescente 2 zeros): 30 m = 3.000 cm! Agora divida: 20 cm / 3.000 cm = 2 / 300 = 1 / 150 (1 : 150)! Alternativa E!',
      stepByStep: [
        '1. Medida no desenho: d = 20 cm.',
        '2. Medida real na mesma unidade: D = 30 m = 3.000 cm.',
        '3. Escala = d / D = 20 / 3.000 = 1 / 150 (1 : 150).'
      ],
      timeSaverTip: 'De metros para centímetros: coloque 2 zeros (30 m -> 3.000 cm) e simplifique 20 : 3.000 = 1 : 150!',
      trapAlert: 'Esquecer de converter metros para centímetros (20 : 30 = 1 : 1,5 -> caindo na letra A!).'
    }
  },
  // QUESTÃO 164 - MATEMÁTICA
  {
    id: 'enem2025-164',
    subject: 'matematica',
    topic: 'Álgebra / Tradução de Linguagem Verbal para Algébrica (Razão)',
    source: 'ENEM 2025 • Q164 (Caderno 5 Amarelo)',
    difficulty: 1,
    context: 'Em um estudo desenvolvido com enfermeiros, foi verificado que a concentração de cortisol salivar em um dia de trabalho, denotada por T, era, em média, 1,59 vezes a concentração de cortisol salivar em um dia de folga, denotada por F.',
    question: 'Nesse estudo, a relação obtida entre T e F foi',
    options: [
      { letter: 'A', text: 'T = 1,59 + F' },
      { letter: 'B', text: 'F = 1,59 + T' },
      { letter: 'C', text: 'T / F = 1,59' },
      { letter: 'D', text: 'F / T = 1,59' },
      { letter: 'E', text: 'F · T = 1,59' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Traduza literalmente: "T era 1,59 vezes F" => T = 1,59 · F! Passando o F dividindo para a esquerda: T / F = 1,59! Alternativa C! Questão super fácil para garantir pontos preciosos na TRI!',
      stepByStep: [
        '1. Equação direta do texto: T = 1,59 × F.',
        '2. Dividindo ambos os lados por F: T / F = 1,59.'
      ],
      timeSaverTip: 'T é maior que F (1,59 vezes F), então na divisão que dá 1,59 (> 1), o maior (T) tem que ficar em cima no numerador: T / F = 1,59!',
      trapAlert: 'Passar dividindo invertido e marcar F / T = 1,59 (D).'
    }
  },
  // QUESTÃO 165 - MATEMÁTICA
  {
    id: 'enem2025-165',
    subject: 'matematica',
    topic: 'Matemática Financeira e Aritmética / Receita, Despesa, Lucro e Porcentagem',
    source: 'ENEM 2025 • Q165 (Caderno 5 Amarelo)',
    difficulty: 2,
    context: 'Um estacionamento possui 120 vagas ocupadas. As despesas mensais são: R$ 14 240,00 com manutenção mais R$ 36,00 de seguro por veículo. A partir do mês seguinte, o valor do seguro por veículo aumentará em 20%, e as despesas com manutenção permanecerão sem alterações. O dono reajustará as mensalidades para obter um lucro mensal de R$ 10 000,00.',
    question: 'O valor, em real, da mensalidade reajustada será',
    options: [
      { letter: 'A', text: '185,60.' },
      { letter: 'B', text: '226,09.' },
      { letter: 'C', text: '245,20.' },
      { letter: 'D', text: '268,93.' },
      { letter: 'E', text: '285,60.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1) Novo seguro por veículo: R$ 36,00 + 20% (R$ 7,20) = R$ 43,20 por veículo! 2) Em vez de multiplicar 43,20 por 120 para depois dividir por 120 de novo, seja esperto: divida apenas a manutenção + lucro pelos 120 veículos e some R$ 43,20 no final! (14.240 + 10.000) / 120 = 24.240 / 120 = R$ 202,00 por veículo! Somando o seguro de R$ 43,20: 202,00 + 43,20 = R$ 245,20! Alternativa C sem conta gigante!',
      stepByStep: [
        '1. Seguro reajustado (+20%): 36 × 1,20 = R$ 43,20 por vaga.',
        '2. Custo fixo + Lucro por vaga: (14.240 + 10.000) / 120 = 24.240 / 120 = R$ 202,00 por vaga.',
        '3. Mensalidade por vaga = 202,00 + 43,20 = R$ 245,20.'
      ],
      timeSaverTip: 'SUPER ATALHO: Como o seguro já é dado "por veículo" (R$ 43,20), NÃO multiplique por 120! Divida só (14.240 + 10.000) por 120 (= 202) e some 43,20 = 245,20!',
      trapAlert: 'Multiplicar 43,20 × 120, errar a conta e perder 3 minutos preciosos.'
    }
  },
  // QUESTÃO 166 - MATEMÁTICA
  {
    id: 'enem2025-166',
    subject: 'matematica',
    topic: 'Sistemas de Medidas / Conversão de Volume (cm³ para mL)',
    source: 'ENEM 2025 • Q166 (Caderno 5 Amarelo)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ ENEM 2025 Oficial • Conversão Sagrada: 1 cm³ = 1 mL!',
    context: 'O dono de uma sorveteria armazena sorvete em potes de 20 000 cm³. Ele serve o sorvete em taças, em porções de 250 mL.',
    question: 'A quantidade de taças que ele consegue servir a partir de um pote cheio de sorvete é',
    options: [
      { letter: 'A', text: '5.' },
      { letter: 'B', text: '8.' },
      { letter: 'C', text: '50.' },
      { letter: 'D', text: '80.' },
      { letter: 'E', text: '800.' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 1 cm³ É EXATAMENTE IGUAL A 1 mL! Logo, 20.000 cm³ = 20.000 mL! Dividindo por 250 mL: como cada 1.000 mL dá 4 taças de 250 mL, 20 litros dão 20 × 4 = 80 taças! Alternativa D em 5 segundos!',
      stepByStep: [
        '1. Equivalência fundamental de volume: 1 cm³ = 1 mL.',
        '2. Volume do pote = 20.000 mL (ou 20 litros).',
        '3. Número de taças = 20.000 / 250 = 80 taças.'
      ],
      timeSaverTip: 'Decorou "1 cm³ = 1 mL" e "1 dm³ = 1 L"? Dividir por 250 mL é só multiplicar os litros (20 L) por 4 = 80!',
      trapAlert: 'Errar o número de zeros na conversão e marcar 8 (B) ou 800 (E).'
    }
  }
];
