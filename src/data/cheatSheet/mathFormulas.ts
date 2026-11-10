import { FormulaCheatSheetItem } from '../../types';

export const mathFormulaMemory: FormulaCheatSheetItem[] = [
  // --- GEOMETRIA ESPACIAL ---
  {
    id: 'mf-1',
    subject: 'matematica',
    category: 'Geometria Espacial (Volumes)',
    title: 'Volume do Cilindro',
    formulaOrFact: 'V = π · r² · h',
    variables: 'r = raio da base | h = altura | π ≈ 3 ou 3,14',
    macete: '💡 Área da base circular vezes a altura. Quase toda prova do ENEM tem questão de lata ou cisterna.',
    whenToUse: 'Sempre que a questão falar de caixa d\'água cilíndrica, latas, poços e tubulações.',
    advancedTip: 'Se o raio dobrar e a altura for mantida, o volume QUADRUPLICA (pois r² = 2² = 4). Se a altura dobrar e o raio for mantido, o volume apenas dobra.'
  },
  {
    id: 'mf-2',
    subject: 'matematica',
    category: 'Geometria Espacial (Volumes)',
    title: 'Volume do Cone',
    formulaOrFact: 'V = (1/3) · π · r² · h',
    variables: 'r = raio da base | h = altura do cone',
    macete: '💡 "Tem biquinho fino? Divide por 3!" Se o ENEM der π=3, o 3 corta direto com a fórmula!',
    whenToUse: 'Casquinhas de sorvete, silos de grãos cônicos e funis.',
    advancedTip: 'Relação de semelhança de cones (Tronco de cone): a razão entre as alturas (h/H) ao cubo é igual à razão entre os volumes: (h/H)³ = v/V.'
  },
  {
    id: 'mf-3',
    subject: 'matematica',
    category: 'Geometria Espacial (Volumes)',
    title: 'Volume e Área da Esfera',
    formulaOrFact: 'Volume: V = (4/3) · π · r³   |   Área: A = 4 · π · r²',
    variables: 'r = raio da esfera',
    macete: '💡 Volume é ao CUBO (r³) com 4/3. Área é ao QUADRADO (r²) com 4. Se π=3, o volume vira apenas 4·r³!',
    whenToUse: 'Bolas de futebol, gotas esféricas e tanques esféricos de gás.',
    advancedTip: 'Derivada geométrica: a derivada do volume da esfera em relação a r é exatamente a sua área superficial: d/dr [(4/3)πr³] = 4πr².'
  },
  {
    id: 'mf-4',
    subject: 'matematica',
    category: 'Geometria Espacial (Volumes)',
    title: 'Volume do Paralelepípedo e do Cubo',
    formulaOrFact: 'V_bloco = a · b · c   |   V_cubo = a³   |   Diagonal: D = a√3',
    variables: 'a, b, c = comprimento, largura e altura',
    macete: '💡 1 m³ = 1.000 Litros  |  1 dm³ = 1 Litro  |  1 cm³ = 1 mL.',
    whenToUse: 'Piscinas, caixas de papelão, tijolos e contêineres marítimos.',
    advancedTip: 'Diagonal do paralelepípedo de lados a, b, c: D = √(a² + b² + c²). Área total = 2(ab + ac + bc).'
  },
  {
    id: 'mf-5',
    subject: 'matematica',
    category: 'Geometria Espacial (Volumes)',
    title: 'Volume da Pirâmide',
    formulaOrFact: 'V = (1/3) · A_base · h',
    variables: 'A_base = área da base (quadrada, triangular ou hexagonal) | h = altura',
    macete: '💡 Tem bico? Divide por 3! Se a base for quadrada: V = (L² · h) / 3.',
    whenToUse: 'Tendas piramidais, monumentos e coberturas.',
    advancedTip: 'Se a base for um hexágono regular de lado L: A_base = 6 × [(L²√3)/4] = (3L²√3)/2.'
  },

  // --- GEOMETRIA PLANA ---
  {
    id: 'mf-6',
    subject: 'matematica',
    category: 'Geometria Plana (Áreas)',
    title: 'Área do Triângulo (Equilátero & Qualquer)',
    formulaOrFact: 'Geral: A = (b · h) / 2   |   Equilátero: A = (L² · √3) / 4   |   Altura Equilátero: h = (L · √3) / 2',
    variables: 'b = base | h = altura | L = lado',
    macete: '💡 Para o triângulo equilátero, eleve o lado ao quadrado, multiplique por √3 (≈ 1,7) e divida por 4.',
    whenToUse: 'Ladrilhos triangulares, placas de trânsito e terrenos.',
    advancedTip: 'Fórmula trigonométrica da área de qualquer triângulo: A = (a · b · sen θ) / 2, onde θ é o ângulo formado entre os lados a e b.'
  },
  {
    id: 'mf-7',
    subject: 'matematica',
    category: 'Geometria Plana (Áreas)',
    title: 'Área do Trapézio',
    formulaOrFact: 'A = [(B + b) · h] / 2',
    variables: 'B = base maior | b = base menor | h = altura',
    macete: '💡 "Soma das bases, multiplica pela altura e divide por 2."',
    whenToUse: 'Lotes de esquina, telhados e rampas.',
    advancedTip: 'Base média do trapézio: B_media = (B + b) / 2. Logo, a área do trapézio é simplesmente a Base Média multiplicada pela altura.'
  },
  {
    id: 'mf-8',
    subject: 'matematica',
    category: 'Geometria Plana (Áreas)',
    title: 'Área e Comprimento do Círculo',
    formulaOrFact: 'Área: A = π · r²   |   Comprimento: C = 2 · π · r',
    variables: 'r = raio (lembre-se: diâmetro = 2r)',
    macete: '💡 "Comprimento: 2 Pi Raio (Dois Pi-Rralhos). Área: Pi Raio ao quadrado."',
    whenToUse: 'Pistas circulares, voltas de roda de bicicleta, canteiros de praças.',
    advancedTip: 'Setor circular de ângulo α em graus: Área_setor = (π · r² · α) / 360°. Comprimento do arco: L = (2 · π · r · α) / 360°.'
  },
  {
    id: 'mf-9',
    subject: 'matematica',
    category: 'Geometria Plana (Áreas)',
    title: 'Área do Losango',
    formulaOrFact: 'A = (D · d) / 2',
    variables: 'D = diagonal maior | d = diagonal menor',
    macete: '💡 Multiplica as diagonais e divide por 2. (Metade do retângulo circunscrito).',
    whenToUse: 'Pipas, losangos da bandeira do Brasil e pisos decorados.',
    advancedTip: 'As diagonais de qualquer losango se cruzam perpendicularmente (90°) e no ponto médio exato de cada uma.'
  },

  // --- TRIGONOMETRIA ---
  {
    id: 'mf-10',
    subject: 'matematica',
    category: 'Trigonometria',
    title: 'Seno, Cosseno e Tangente no Triângulo Retângulo',
    formulaOrFact: 'sen θ = CO / H   |   cos θ = CA / H   |   tg θ = CO / CA',
    variables: 'CO = Cateto Oposto | CA = Cateto Adjacente | H = Hipotenusa',
    macete: '💡 Mnemônico mundial: "SOH - CAH - TOA" (Seno=O/H, Cosseno=A/H, Tangente=O/A).',
    whenToUse: 'Sombras de postes, torres de transmissão e rampas de inclinação.',
    advancedTip: 'Relação Fundamental da Trigonometria: sen²(θ) + cos²(θ) = 1. Tangente: tg(θ) = sen(θ) / cos(θ).'
  },
  {
    id: 'mf-11',
    subject: 'matematica',
    category: 'Trigonometria',
    title: 'Valores Notáveis (30°, 45°, 60°)',
    formulaOrFact: 'sen: 1/2, √2/2, √3/2  |  cos: √3/2, √2/2, 1/2  |  tg: √3/3, 1, √3',
    variables: 'Ângulos fundamentais de 30°, 45° e 60°',
    macete: '💡 Cantiga: "1, 2, 3... 3, 2, 1... tudo sobre 2, raiz em cada um. A tangente é diferente: √3 sobre 3, 1, √3."',
    whenToUse: 'Cálculo de altura sem teodolito em questões com ângulos de 30°, 45° ou 60°.',
    advancedTip: 'Aproximações frequentes que o ENEM adota: √2 ≈ 1,41 | √3 ≈ 1,73 | sen 30° = cos 60° = 0,5.'
  },

  // --- FUNÇÕES E ÁLGEBRA ---
  {
    id: 'mf-12',
    subject: 'matematica',
    category: 'Função do 2º Grau',
    title: 'Vértice da Parábola (Máximo e Mínimo)',
    formulaOrFact: 'X_v = -b / (2a)   |   Y_v = -Δ / (4a)   (onde Δ = b² - 4ac)',
    variables: 'X_v = ponto onde ocorre o ápice | Y_v = valor máximo/mínimo atingido',
    macete: '💡 "Quantas peças produzir para lucro máximo?" → X_v. "Qual é o valor em R$ do lucro máximo?" → Y_v.',
    whenToUse: 'Lucro máximo, custo mínimo, altura máxima de projétil.',
    advancedTip: 'O eixo de simetria da parábola é a reta x = X_v. O X_v é sempre a média aritmética das raízes: X_v = (x₁ + x₂) / 2.'
  },
  {
    id: 'mf-13',
    subject: 'matematica',
    category: 'Função do 1º Grau',
    title: 'Equação da Reta e Taxa de Variação',
    formulaOrFact: 'y = a · x + b   |   a = (y₂ - y₁) / (x₂ - x₁)',
    variables: 'a = coeficiente angular (taxa por unidade) | b = coeficiente linear (valor fixo inicial)',
    macete: '💡 b é onde a reta corta o eixo Y (x=0, ex: taxa de bandeirada do táxi). a é o valor por km.',
    whenToUse: 'Corridas de aplicativo, planos de celular e contas de água com taxa fixa.',
    advancedTip: 'Se a > 0 a função é estritamente crescente; se a < 0 a função é decrescente. A raiz da função (onde corta o eixo X) é x = -b/a.'
  },

  // --- PROGRESSÕES (PA & PG) ---
  {
    id: 'mf-14',
    subject: 'matematica',
    category: 'Progressões',
    title: 'Progressão Aritmética (PA)',
    formulaOrFact: 'Termo Geral: a_n = a₁ + (n - 1) · r   |   Soma: S_n = [(a₁ + a_n) · n] / 2',
    variables: 'a₁ = 1º termo | r = razão | n = quantidade de termos',
    macete: '💡 Soma de PA: "Primeiro mais o último, vezes n sobre 2" (fórmula do pequeno Gauss).',
    whenToUse: 'Sequências que aumentam somando valor constante (ex: fileiras de cinema, poupança periódica).',
    advancedTip: 'Propriedade da média aritmética: em qualquer PA de 3 termos (a, b, c), o termo do meio é b = (a + c) / 2.'
  },
  {
    id: 'mf-15',
    subject: 'matematica',
    category: 'Progressões',
    title: 'Progressão Geométrica (PG)',
    formulaOrFact: 'Termo Geral: a_n = a₁ · q^(n - 1)   |   Soma Infinita (|q|<1): S_inf = a₁ / (1 - q)',
    variables: 'q = razão multiplicativa | a₁ = 1º termo',
    macete: '💡 Multiplicou de termo em termo (dobrou, triplicou)? É PG! Soma infinita é simplesmente a₁ sobre (1-q).',
    whenToUse: 'Reprodução de bactérias, contaminações virais, fracionamento sucessivo de substâncias.',
    advancedTip: 'Se q > 1 a PG é crescente; se 0 < q < 1 a PG é decrescente e converge para 0 no infinito.'
  },

  // --- ANÁLISE COMBINATÓRIA & PROBABILIDADE ---
  {
    id: 'mf-16',
    subject: 'matematica',
    category: 'Combinatória',
    title: 'Arranjo vs Combinação',
    formulaOrFact: 'Combinação: C(n,p) = n! / [p! · (n-p)!]   |   Arranjo: A(n,p) = n! / (n-p)!',
    variables: 'n = total de elementos | p = tamanho do grupo escolhido',
    macete: '💡 "A ordem importa? Aham! → Arranjo (senhas, pódios). Não importa? → Combina! (comissões, saladas de frutas)."',
    whenToUse: 'Sorteios, formação de grupos de trabalho, senhas.',
    advancedTip: 'Permutação com repetição: P_n^(a,b) = n! / (a! · b!). Muito comum em anagramas de palavras como MATEMATICA ou ARARA.'
  },
  {
    id: 'mf-17',
    subject: 'matematica',
    category: 'Probabilidade',
    title: 'Probabilidade Simples e Independente',
    formulaOrFact: 'P = Casos Favoráveis / Casos Possíveis   |   Regra do E: P(A e B) = P(A) · P(B)',
    variables: 'P varia de 0 (0%) a 1 (100%)',
    macete: '💡 "E" = Multiplica (x) frações. "OU" = Soma (+) frações.',
    whenToUse: 'Lançamento de dados, sorteio de bolas em urnas, baralhos.',
    advancedTip: 'Probabilidade condicional: P(A|B) = P(A ∩ B) / P(B) — probabilidade de A ocorrer sabendo que B já ocorreu previamente.'
  },

  // --- MATEMÁTICA FINANCEIRA & ESCALAS ---
  {
    id: 'mf-18',
    subject: 'matematica',
    category: 'Matemática Financeira',
    title: 'Juros Simples e Compostos',
    formulaOrFact: 'Simples: J = C · i · t   (M = C + J)   |   Compostos: M = C · (1 + i)^t',
    variables: 'C = Capital inicial | i = taxa | t = tempo | M = Montante final',
    macete: '💡 Juros Simples: "J = C · i · t" (Juro Cita). Juros Compostos: juros sobre juros (exponencial).',
    whenToUse: 'Financiamentos, empréstimos bancários e investimentos.',
    advancedTip: 'A taxa (i) e o tempo (t) DEVEM estar na mesma unidade de tempo (ex: se a taxa é ao mês, o tempo tem que ser em meses).'
  },
  {
    id: 'mf-19',
    subject: 'matematica',
    category: 'Escalas',
    title: 'Escala Linear, de Área e de Volume',
    formulaOrFact: 'Comprimento: E = d / D   |   Área: E² = a / A   |   Volume: E³ = v / V',
    variables: 'd, a, v = medidas no mapa/maquete | D, A, V = medidas reais',
    macete: '💡 Se a escala é 1:100, na área é (1/100)² = 1/10.000. No volume é (1/100)³ = 1/1.000.000.',
    whenToUse: 'Mapas, maquetes, plantas arquitetônicas e miniaturas.',
    advancedTip: 'Macete rápido dos zeros em escala 1:X de cm para km: basta cortar 5 zeros. Se a escala é 1:500.000, 1 cm no mapa = 5 km na realidade.'
  }
];
