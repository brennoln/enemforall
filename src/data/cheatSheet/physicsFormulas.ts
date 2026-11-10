import { FormulaCheatSheetItem } from '../../types';

export const physicsFormulaMemory: FormulaCheatSheetItem[] = [
  // --- CINEMÁTICA ---
  {
    id: 'pf-1',
    subject: 'fisica',
    category: 'Cinemática',
    title: 'Função Horária da Posição (MRUV)',
    formulaOrFact: 'S = S₀ + V₀ · t + (a · t²) / 2',
    variables: 'S = posição final (m) | V₀ = velocidade inicial (m/s) | a = aceleração (m/s²) | t = tempo (s)',
    macete: '💡 "Sorvetão": So + Vot + meio de a t quadrado.',
    whenToUse: 'Movimento com aceleração constante quando a questão envolve distância e tempo.'
  },
  {
    id: 'pf-2',
    subject: 'fisica',
    category: 'Cinemática',
    title: 'Equação Horária da Velocidade (MRUV)',
    formulaOrFact: 'V = V₀ + a · t',
    variables: 'V = velocidade final | V₀ = inicial | a = aceleração | t = tempo',
    macete: '💡 "Vi Você Às Tantas" ou "Vi Vovó Atrás do Toco".',
    whenToUse: 'Quando relaciona variação de velocidade com tempo decorrido.'
  },
  {
    id: 'pf-3',
    subject: 'fisica',
    category: 'Cinemática',
    title: 'Equação de Torricelli (Sem Tempo)',
    formulaOrFact: 'V² = V₀² + 2 · a · Δs',
    variables: 'Δs = deslocamento percorrido (m)',
    macete: '💡 "Vovô pegou vovó + 2 amigas num triângulo..." Use SEMPRE que a questão NÃO tiver tempo!',
    whenToUse: 'Frenagens de carro em pista, queda livre com altura dada e sem tempo.'
  },

  // --- DINÂMICA & ENERGIA ---
  {
    id: 'pf-4',
    subject: 'fisica',
    category: 'Dinâmica',
    title: '2ª Lei de Newton (Princípio Fundamental)',
    formulaOrFact: 'F_res = m · a   |   Peso: P = m · g',
    variables: 'F em Newtons (N) | m em kg | a em m/s²',
    macete: '💡 "Física Meu Amor" ou "FAMA". Lembre-se: 1 kg na Terra pesa 10 N (se g=10).',
    whenToUse: 'Blocos puxados por cordas, elevadores e empurrões.'
  },
  {
    id: 'pf-5',
    subject: 'fisica',
    category: 'Energia & Trabalho',
    title: 'Energia Cinética & Potencial Gravitacional',
    formulaOrFact: 'E_cin = (m · v²) / 2   |   E_pot = m · g · h',
    variables: 'E em Joules (J) | v em m/s | h em metros',
    macete: '💡 Cinética tem velocidade ao quadrado sobre 2. Potencial no alto é "mgh" ("Maria Gosta de Homem").',
    whenToUse: 'Montanha-russa (conservação de energia no topo vs embaixo), hidroelétricas.'
  },
  {
    id: 'pf-6',
    subject: 'fisica',
    category: 'Energia & Trabalho',
    title: 'Trabalho Mecânico e Potência',
    formulaOrFact: 'W = F · d · cos θ   |   Pot = W / Δt = F · v',
    variables: 'W em Joules (J) | Pot em Watts (W = J/s)',
    macete: '💡 Se a força for perpendicular ao deslocamento (θ=90°, cos 90°=0), o trabalho é ZERO!',
    whenToUse: 'Motores de veículos, guindastes e carregamento de pesos.'
  },

  // --- ELETRICIDADE (CAMPEÃO DO ENEM) ---
  {
    id: 'pf-7',
    subject: 'fisica',
    category: 'Eletrodinâmica',
    title: '1ª Lei de Ohm',
    formulaOrFact: 'U = R · i',
    variables: 'U = DDP / Tensão em Volts (V) | R = Resistência em Ohms (Ω) | i = Corrente em Amperes (A)',
    macete: '💡 "Quem Vê, Ri!" (V = R · i) ou "Você Ri de mim" (U = R · i).',
    whenToUse: 'Circuitos elétricos, lâmpadas e cálculo de resistência.'
  },
  {
    id: 'pf-8',
    subject: 'fisica',
    category: 'Eletrodinâmica',
    title: 'Potência Elétrica (As 3 Fórmulas)',
    formulaOrFact: 'P = U · i   |   P = R · i²   |   P = U² / R',
    variables: 'P = Potência em Watts (W)',
    macete: '💡 "Piu" (P = i·U), "Prii" (P = R·i² - bom para série), "Puri" (P = U²/R - bom para paralelo/mesma voltagem).',
    whenToUse: 'Chuveiro elétrico (inverno/verão), lâmpadas incandescentes e fusíveis.'
  },
  {
    id: 'pf-9',
    subject: 'fisica',
    category: 'Eletrodinâmica',
    title: 'Consumo de Energia em kWh (Conta de Luz)',
    formulaOrFact: 'E = P (kW) · Δt (horas) = [P (W) / 1000] · Δt (h)',
    variables: 'E em kWh (quilowatt-hora)',
    macete: '💡 Pegue os Watts do aparelho, divida por 1000 (corte 3 casas) e multiplique pelas horas gastas no mês.',
    whenToUse: 'Questões de economia de energia e custo na conta de luz.'
  },
  {
    id: 'pf-10',
    subject: 'fisica',
    category: 'Eletrodinâmica',
    title: 'Associação de Resistores (Série vs Paralelo)',
    formulaOrFact: 'Série: R_eq = R₁ + R₂ + ...   |   Paralelo (2 resistores): R_eq = (R₁ · R₂) / (R₁ + R₂)',
    variables: 'Resistência equivalente do circuito',
    macete: '💡 Em paralelo para 2 resistores: "Produto pela Soma"! Se forem "n" resistores iguais em paralelo: R_eq = R / n.',
    whenToUse: 'Combinação de resistores, instalação residencial.'
  },

  // --- ONDULATÓRIA & ÓPTICA ---
  {
    id: 'pf-11',
    subject: 'fisica',
    category: 'Ondulatória',
    title: 'Equação Fundamental da Ondulatória',
    formulaOrFact: 'v = λ · f   |   Período: T = 1 / f',
    variables: 'v = velocidade (m/s) | λ = comprimento de onda (m) | f = frequência em Hertz (Hz)',
    macete: '💡 "Vem Lamber a Ferida" ou "Você Lambe a Faca". A frequência (f) NUNCA muda na refração!',
    whenToUse: 'Ondas de rádio, luz no vácuo/água, cordas de violão e ultrassom.'
  },
  {
    id: 'pf-12',
    subject: 'fisica',
    category: 'Óptica',
    title: 'Lei de Snell-Descartes (Refração)',
    formulaOrFact: 'n₁ · sen θ₁ = n₂ · sen θ₂   |   n = c / v',
    variables: 'n = índice de refração | c = 3 × 10⁸ m/s | v = velocidade no meio',
    macete: '💡 Ao passar para meio mais refringente (maior n), o raio se APROXIMA da normal e a velocidade diminui.',
    whenToUse: 'Miragens no asfalto, fibra óptica (reflexão total) e lentes.'
  },

  // --- TERMOLOGIA & CALORIMETRIA ---
  {
    id: 'pf-13',
    subject: 'fisica',
    category: 'Termologia',
    title: 'Calor Sensível (Varia Temperatura)',
    formulaOrFact: 'Q = m · c · Δθ',
    variables: 'm em g | c em cal/g°C | Δθ em °C',
    macete: '💡 "Que MaCeTe!" Use quando o corpo esquenta ou esfria SEM mudar de estado físico.',
    whenToUse: 'Aquecimento de água na chaleira, brisa marítima (calor específico da água > areia).'
  },
  {
    id: 'pf-14',
    subject: 'fisica',
    category: 'Termologia',
    title: 'Calor Latente (Muda de Fase)',
    formulaOrFact: 'Q = m · L',
    variables: 'L = calor latente de fusão ou vaporização (cal/g)',
    macete: '💡 "Quem Me Libera!" Use durante a fusão do gelo ou evaporação da água a temperatura fixa.',
    whenToUse: 'Derretimento de gelo, suor evaporando para resfriar a pele humana.'
  },

  // --- HIDROSTÁTICA ---
  {
    id: 'pf-15',
    subject: 'fisica',
    category: 'Hidrostática',
    title: 'Pressão Hidrostática & Empuxo (Arquimedes)',
    formulaOrFact: 'Pressão: P = d · g · h   |   Empuxo: E = d_líquido · V_submerso · g',
    variables: 'd = densidade (kg/m³) | h = profundidade (m) | V_sub = volume mergulhado',
    macete: '💡 Empuxo é o peso do líquido deslocado: "E = D·V·G" ("Devo Ganhar").',
    whenToUse: 'Mergulho submarino, navio flutuando, iceberg com 90% submerso.'
  }
];
