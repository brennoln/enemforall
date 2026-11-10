import { Question } from '../../types';

export const scienceQuestionsChemistry: Question[] = [
  // 1 - ESPECIAL QUÍMICA 1 (Top 1 Química: Funções Orgânicas Oxigenadas)
  {
    id: 'qui-01',
    subject: 'quimica',
    topic: 'Química Orgânica / Reconhecimento de Funções',
    source: 'ENEM 2023',
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Top 1 de Química: Funções Orgânicas (Fenol vs Álcool vs Éter)',
    context: 'O eugenol é o óleo essencial do cravo-da-índia com propriedades anestésicas. Em sua molécula há um anel aromático ligado diretamente a uma hidroxila (-OH), a um grupo metoxila (-O-CH₃) e a uma cadeia alifática insaturada (-CH₂-CH=CH₂).',
    question: 'A presença da hidroxila diretamente ligada ao anel benzênico e do oxigênio entre carbonos caracterizam, respectivamente, as funções:',
    options: [
      { letter: 'A', text: 'Álcool e éster.' },
      { letter: 'B', text: 'Fenol e éter.' },
      { letter: 'C', text: 'Fenol e éster.' },
      { letter: 'D', text: 'Álcool e éter.' },
      { letter: 'E', text: 'Enol e cetona.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: -OH colado no anel benzênico = FENOL (NUNCA álcool!). Oxigênio entre carbonos (-O-) = ÉTER. Resposta: Fenol e éter!',
      stepByStep: ['1. Anel aromático com -OH = Fenol.', '2. Oxigênio como heteroátomo entre cadeias carbônicas = Éter.'],
      timeSaverTip: 'Elimine na hora as alternativas com "álcool".',
      trapAlert: 'Confundir fenol com álcool e éter com éster.',
      deepMemoryFact: 'Acidez orgânica: Fenol é mais ácido que Álcool e Água (devido à estabilização do ânion fenóxido por ressonância no anel aromático).'
    }
  },
  // 2 - ESPECIAL QUÍMICA 2 (Top 2 Química: Escala de pH e Logaritmo)
  {
    id: 'qui-02',
    subject: 'quimica',
    topic: 'Soluções e pH',
    source: 'Questão Adaptada ENEM 2022 (Foco em Agilidade)',
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Escala de pH e Equilíbrio Químico (Logarítmica)',
    context: 'Uma solução estomacal tem pH = 2. Após a ingestão de um antiácido, a concentração de íons H⁺ diminuiu em 1.000 vezes.',
    question: 'Qual é o novo pH do suco gástrico após a ação do medicamento?',
    options: [
      { letter: 'A', text: 'pH 3' },
      { letter: 'B', text: 'pH 4' },
      { letter: 'C', text: 'pH 5' },
      { letter: 'D', text: 'pH 7' },
      { letter: 'E', text: 'pH 8' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Diminuir íons H⁺ = menos ácido = pH AUMENTA. Como diminuiu 1.000 vezes (10³ = 3 zeros), o pH sobe exatamente 3 unidades: 2 + 3 = pH 5!',
      stepByStep: ['1. Fator de diluição: 1.000x = 10³.', '2. Cada potência de 10 altera o pH em 1 unidade.', '3. Menos acidez: pH 2 + 3 = pH 5.'],
      timeSaverTip: 'Conte os zeros: 1000 tem 3 zeros → somou 3 no pH.',
      trapAlert: 'Subtrair o pH ou multiplicar 2 × 1000.',
      deepMemoryFact: 'Relação de autoionização da água: Kw = [H⁺][OH⁻] = 10⁻¹⁴ (a 25°C). pH + pOH = 14 sempre.'
    }
  },
  // 3 - ESPECIAL QUÍMICA 3 (Top 3 Química: Eletroquímica e Pilhas)
  {
    id: 'qui-03',
    subject: 'quimica',
    topic: 'Eletroquímica / Pilhas',
    source: 'ENEM 2021',
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Eletroquímica (d.d.p. de Pilha e Regra CRAO)',
    context: 'Em uma pilha padrão formada por eletrodos de zinco (E°_red = -0,76 V) e cobre (E°_red = +0,34 V):',
    question: 'Qual é a diferença de potencial (d.d.p.) dessa pilha e qual metal sofre oxidação?',
    options: [
      { letter: 'A', text: '+1,10 V e o Zinco oxida.' },
      { letter: 'B', text: '+1,10 V e o Cobre oxida.' },
      { letter: 'C', text: '+0,42 V e o Zinco oxida.' },
      { letter: 'D', text: '-1,10 V e o Cobre reduz.' },
      { letter: 'E', text: '+0,42 V e o Cobre reduz.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: d.d.p. = Maior - Menor = +0,34 - (-0,76) = +1,10 V. Quem tem o MENOR potencial de redução sofre OXIDAÇÃO (o Zinco)! CRAO: Cátodo reduz (Cu), Ânodo oxida (Zn).',
      stepByStep: ['1. ΔE° = E°_maior - E°_menor = 0,34 - (-0,76) = +1,10 V.', '2. O Zinco tem potencial menor (-0,76), logo perde elétrons e oxida.'],
      timeSaverTip: 'Toda pilha espontânea tem ddp POSITIVA (+1,10V).',
      trapAlert: 'Fazer conta errando jogo de sinais: 0,34 - 0,76 = -0,42 V.'
    }
  },
  // 4 - ESPECIAL QUÍMICA 4 (Top 4 Química: Interações Intermoleculares e Solubilidade)
  {
    id: 'qui-04',
    subject: 'quimica',
    topic: 'Interações Intermoleculares / Polaridade',
    source: 'ENEM 2023',
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Forças Intermoleculares e Ligações de Hidrogênio',
    context: 'A água (H₂O) e o etanol (CH₃CH₂OH) misturam-se completamente em qualquer proporção, enquanto a gasolina (mistura de hidrocarbonetos como octano C₈H₁₈) não se mistura com a água.',
    question: 'A completa solubilidade mútua entre água e etanol deve-se predominantemente ao estabelecimento de:',
    options: [
      { letter: 'A', text: 'Ligações iônicas intermoleculares.' },
      { letter: 'B', text: 'Ligações de hidrogênio entre as hidroxilas das duas moléculas polares.' },
      { letter: 'C', text: 'Forças de London (dipolo induzido).' },
      { letter: 'D', text: 'Ligações covalentes apolares coordenadas.' },
      { letter: 'E', text: 'Repulsão eletrostática intermolecular.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Tem -OH com água? É LIGAÇÃO DE HIDROGÊNIO! Semelhante dissolve semelhante (ambos são polares com ponte de H).',
      stepByStep: ['1. A molécula de água tem -OH e o etanol tem -OH.', '2. O hidrogênio polarizado interage fortemente com o oxigênio através de pontes de hidrogênio.'],
      timeSaverTip: 'Viu -OH interagindo com água: marque ligação de hidrogênio em 5 segundos.',
      trapAlert: 'Marcar ligação iônica (água e álcool são compostos moleculares, não iônicos).'
    }
  },
  // 5 - ESPECIAL QUÍMICA 5 (Top 5 Química: Corrosão e Metal de Sacrifício)
  {
    id: 'qui-05',
    subject: 'quimica',
    topic: 'Química Ambiental / Corrosão e Metal de Sacrifício',
    source: 'ENEM 2022',
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Metal de Sacrifício e Proteção Catódica',
    context: 'Para proteger cascos de navios de aço (feito predominantemente de ferro, E°_red = -0,44 V) contra a ferrugem em água salgada, placas de zinco (E°_red = -0,76 V) ou magnésio (E°_red = -2,37 V) são parafusadas ao casco.',
    question: 'Essas placas metálicas adicionais protegem o casco de ferro porque:',
    options: [
      { letter: 'A', text: 'Possuem menor potencial de redução que o ferro, oxidando-se preferencialmente no lugar dele.' },
      { letter: 'B', text: 'Formam uma camada insolúvel de cloreto que bloqueia a condutividade da água do mar.' },
      { letter: 'C', text: 'São metais nobres com altíssimo potencial de oxigenação espontânea.' },
      { letter: 'D', text: 'Absorvem elétrons liberados pelo ferro, provocando sua passivação catalítica.' },
      { letter: 'E', text: 'Possuem ponto de fusão inferior ao da liga de aço.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: METAL DE SACRIFÍCIO SE SACRIFICA! Quem tem o potencial de redução MAIS NEGATIVO (menor) oxida no lugar do ferro!',
      stepByStep: ['1. Zinco (-0,76V) e Magnésio (-2,37V) têm potenciais menores que o Ferro (-0,44V).', '2. Por terem maior tendência a perder elétrons, eles sofrem corrosão enquanto o ferro é preservado.'],
      timeSaverTip: 'Metal de sacrifício = oxida preferencialmente porque tem menor potencial de redução.',
      trapAlert: 'Dizer que são metais nobres (metais nobres como ouro e platina têm potenciais positivos altos).'
    }
  },
  // 6 - Sabões e Detergentes
  {
    id: 'qui-06',
    subject: 'quimica',
    topic: 'Sabões e Detergentes / Ação Micelar',
    source: 'Questão Adaptada ENEM 2021 (Foco em Agilidade)',
    context: 'A remoção de resíduos oleosos e graxas de superfícies por sabões convencionais baseia-se na formação de micelas em meio aquoso.',
    question: 'A estrutura molecular dos sabões permite essa limpeza porque suas moléculas são:',
    options: [
      { letter: 'A', text: 'Exclusivamente apolares, atraindo óleo e repelindo completamente a água.' },
      { letter: 'B', text: 'Totalmente iônicas de cadeia curta, que hidrolisam quimicamente os lipídios.' },
      { letter: 'C', text: 'Anfipáticas (anfifílicas), com uma extremidade polar que interage com a água e uma cauda apolar que interage com a gordura.' },
      { letter: 'D', text: 'Compostos ácidos com capacidade de quebrar as ligações peptídicas das gorduras.' },
      { letter: 'E', text: 'Gases condensados por pressão hidrostática.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: SABÃO = ANFIPÁTICO (dupla personalidade!). Cauda apolar abraça o óleo; ponta polar abraça a água!',
      stepByStep: ['1. A cauda carbônica longa é hidrofóbica/apolar e dissolve na gordura.', '2. A cabeça carboxilato (-COO⁻ Na⁺) é polar e interage com a água.'],
      timeSaverTip: 'Viu sabão/detergente: procure "anfipático", "anfifílico" ou "extremidade polar e apolar".',
      trapAlert: 'Dizer que o sabão é 100% polar ou 100% apolar.'
    }
  },
  // 7 - Gases e Equação de Clapeyron
  {
    id: 'qui-07',
    subject: 'quimica',
    topic: 'Gases Perfeitos / Clapeyron',
    source: 'ENEM 2023',
    context: 'Um cilindro com êmbolo móvel contém um gás ideal sob pressão P e volume V a uma temperatura absoluta de 300 K. O gás é aquecido até 600 K mantendo-se a pressão rigorosamente constante.',
    question: 'O novo volume ocupado por esse gás após o aquecimento isobárico será:',
    options: [
      { letter: 'A', text: 'V / 2 (metade do inicial)' },
      { letter: 'B', text: 'V (inalterado)' },
      { letter: 'C', text: '2 V (o dobro do volume inicial)' },
      { letter: 'D', text: '4 V (quatro vezes maior)' },
      { letter: 'E', text: 'V + 300' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Lei de Charles (Pressão constante): V₁/T₁ = V₂/T₂. Dobrou a temperatura absoluta em Kelvin (300K → 600K), o volume DOBRA na hora (2V)!',
      stepByStep: ['1. V₁/T₁ = V₂/T₂.', '2. V / 300 = V₂ / 600.', '3. V₂ = 2 V.'],
      timeSaverTip: 'Em temperatura absoluta (Kelvin), volume e temperatura são diretamente proporcionais.',
      trapAlert: 'Se a temperatura estivesse em Celsius não dobraria direto; mas em Kelvin a proporção é direta!'
    }
  },
  // 8 - Termoquímica e Combustão
  {
    id: 'qui-08',
    subject: 'quimica',
    topic: 'Termoquímica / Reações Exotérmicas',
    source: 'ENEM 2022',
    context: 'A combustão completa do gás metano (CH₄) em fogões domésticos é representada pela equação: CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(g) com ΔH = -890 kJ/mol.',
    question: 'A queima de 1 mol de metano classifica-se termoquimicamente como um processo:',
    options: [
      { letter: 'A', text: 'Endotérmico, com absorção de 890 kJ de calor do ambiente.' },
      { letter: 'B', text: 'Exotérmico, com liberação de 890 kJ de calor para o ambiente.' },
      { letter: 'C', text: 'Aotérmico, com entalpia de ativação estritamente nula.' },
      { letter: 'D', text: 'Isotérmico espontâneo, sem alteração de energia térmica.' },
      { letter: 'E', text: 'Catalítico primário heterogêneo.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: ΔH COM SINAL NEGATIVO (-) = EXOTÉRMICO (LIBERA CALOR)! Queima de combustível sempre esquenta e libera energia!',
      stepByStep: ['1. ΔH = -890 kJ/mol (negativo).', '2. Sinal negativo significa que a entalpia dos produtos é menor que a dos reagentes.', '3. Logo, o sistema libera 890 kJ.'],
      timeSaverTip: 'Combustão é sempre exotérmica (ΔH < 0).',
      trapAlert: 'Confundir sinal negativo com processo endotérmico.'
    }
  },
  // 9 - Separação de Misturas
  {
    id: 'qui-09',
    subject: 'quimica',
    topic: 'Química Geral / Separação de Misturas',
    source: 'ENEM 2021',
    context: 'Em uma refinaria de petróleo, os diferentes derivados (gás GLP, gasolina, querosene, óleo diesel) são separados a partir do óleo cru com base nas suas diferentes faixas de temperatura de ebulição.',
    question: 'O método físico de fracionamento utilizado nessa etapa da refinaria é a:',
    options: [
      { letter: 'A', text: 'Filtração a vácuo.' },
      { letter: 'B', text: 'Decantação gravitacional em funil de bromo.' },
      { letter: 'C', text: 'Destilação fracionada em torre de pratos.' },
      { letter: 'D', text: 'Centrifugação de alta velocidade.' },
      { letter: 'E', text: 'Levigação com bateia.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Mistura homogênea de líquidos com pontos de ebulição diferentes (como petróleo ou água e álcool) = DESTILAÇÃO FRACIONADA!',
      stepByStep: ['1. Petróleo é uma mistura homogênea de dezenas de hidrocarbonetos líquidos.', '2. Como possuem pontos de ebulição distintos, evaporam em alturas diferentes da torre.', '3. O método é a Destilação Fracionada.'],
      timeSaverTip: 'Refino de petróleo = Destilação Fracionada clássica.',
      trapAlert: 'Destilação simples é para sólido dissolvido em líquido (como sal na água).'
    }
  },
  // 10 - Cinética Química e Catalisadores
  {
    id: 'qui-10',
    subject: 'quimica',
    topic: 'Cinética Química / Ação dos Catalisadores',
    source: 'ENEM 2023',
    context: 'Os conversores catalíticos instalados nos escapamentos dos automóveis utilizam metais nobres (platina, paládio e ródio) para acelerar a conversão de gases tóxicos (como monóxido de carbono CO) em gases menos poluentes (como CO₂).',
    question: 'A presença desse catalisador acelera a velocidade da reação química porque:',
    options: [
      { letter: 'A', text: 'Aumenta a variação de entalpia (ΔH) da reação química global.' },
      { letter: 'B', text: 'Diminui a energia de ativação, proporcionando um caminho reacional alternativo.' },
      { letter: 'C', text: 'Eleva a temperatura interna dos gases até o ponto de plasma.' },
      { letter: 'D', text: 'Aumenta a constante de equilíbrio químico a favor dos reagentes.' },
      { letter: 'E', text: 'É consumido como reagente estequiométrico durante a detonação.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: CATALISADOR SÓ FAZ UMA COISA: BAIXA A ENERGIA DE ATIVAÇÃO! Ele não muda o ΔH, não muda o equilíbrio e não é consumido!',
      stepByStep: ['1. O catalisador cria um caminho reacional mais fácil.', '2. Isso reduz a barreira da energia de ativação necessária para o complexo ativado.', '3. Consequentemente, a velocidade da reação aumenta.'],
      timeSaverTip: 'Viu catalisador: procure a alternativa que fala em "diminuir a energia de ativação".',
      trapAlert: 'Achar que o catalisador altera o ΔH (a entalpia inicial e final continuam exatamente iguais).'
    }
  }
];
