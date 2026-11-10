import { FormulaCheatSheetItem } from '../../types';

export const chemistryFormulaMemory: FormulaCheatSheetItem[] = [
  // --- GASES & ESTEQUIOMETRIA ---
  {
    id: 'qf-1',
    subject: 'quimica',
    category: 'Gases Ideais',
    title: 'Equação de Clapeyron',
    formulaOrFact: 'P · V = n · R · T   |   n = m / MM',
    variables: 'P em atm | V em L | n em mols | T SEMPRE em Kelvin (K = °C + 273) | R = 0,082',
    macete: '💡 "Por Você Nunca Rezei Tanto" ou "Puta Velha Não Rejeita Tarado". A temperatura TEM que estar em Kelvin!',
    whenToUse: 'Bexigas, airbags, expansão de cilindros de gás.'
  },
  {
    id: 'qf-2',
    subject: 'quimica',
    category: 'Gases & CNTP',
    title: 'Volume Molar nas CNTP',
    formulaOrFact: '1 mol de qualquer gás nas CNTP (0°C e 1 atm) = 22,4 Litros',
    variables: 'CNTP = Condições Normais de Temperatura e Pressão',
    macete: '💡 Número mágico: 22,4 L/mol. Meio mol = 11,2 L. Dois mols = 44,8 L.',
    whenToUse: 'Cálculos estequiométricos envolvendo gases coletados nas CNTP.'
  },
  {
    id: 'qf-3',
    subject: 'quimica',
    category: 'Constante Fundamental',
    title: 'Constante de Avogadro',
    formulaOrFact: '1 mol = 6,02 × 10²³ entidades (átomos, moléculas ou íons)',
    variables: 'Unidade de contagem microscópica',
    macete: '💡 1 mol de água = 18 gramas = 6 × 10²³ moléculas de H₂O.',
    whenToUse: 'Conversão entre massa e número de átomos ou moléculas.'
  },

  // --- SOLUÇÕES & CONCENTRAÇÃO ---
  {
    id: 'qf-4',
    subject: 'quimica',
    category: 'Soluções',
    title: 'Concentração Molar (Molaridade)',
    formulaOrFact: 'M = n / V = m₁ / (MM · V)',
    variables: 'M em mol/L | m₁ em gramas | MM em g/mol | V em Litros',
    macete: '💡 Molaridade é massa do soluto dividido pela massa molar vezes volume em Litros.',
    whenToUse: 'Preparo de reagentes em laboratório, soro fisiológico, dosagem de remédios.'
  },
  {
    id: 'qf-5',
    subject: 'quimica',
    category: 'Soluções',
    title: 'Diluição de Soluções',
    formulaOrFact: 'C_inicial · V_inicial = C_final · V_final   (C₁ · V₁ = C₂ · V₂)',
    variables: 'Adição de solvente puro (água)',
    macete: '💡 "Civi Civi": A quantidade de soluto não muda, apenas o volume aumenta e a concentração cai!',
    whenToUse: 'Diluir ácido concentrado, adicionar água a suco concentrado.'
  },
  {
    id: 'qf-6',
    subject: 'quimica',
    category: 'Equilíbrio Químico',
    title: 'Cálculo de pH e pOH',
    formulaOrFact: 'pH = -log[H⁺]   |   pOH = -log[OH⁻]   |   pH + pOH = 14 (a 25°C)',
    variables: '[H⁺] = concentração de prótons hidrônio em mol/L',
    macete: '💡 Se [H⁺] = 10⁻⁴ mol/L → pH = 4 direto! De pH 4 para pH 2 são 2 unidades = 10² = 100 vezes mais ácido!',
    whenToUse: 'Chuva ácida, suco gástrico, antiácidos e piscinas.'
  },

  // --- TERMOQUÍMICA & CINÉTICA ---
  {
    id: 'qf-7',
    subject: 'quimica',
    category: 'Termoquímica',
    title: 'Variação de Entalpia (ΔH)',
    formulaOrFact: 'ΔH = H_produtos - H_reagentes   |   ΔH < 0: Exotérmica   |   ΔH > 0: Endotérmica',
    variables: 'ΔH em kJ ou kcal',
    macete: '💡 "EXO sai calor (negativo para o sistema). ENDO entra calor (positivo)." Queima é SEMPRE exotérmica.',
    whenToUse: 'Combustão de carvão, etanol e gasolina, bolsas térmicas instantâneas.'
  },
  {
    id: 'qf-8',
    subject: 'quimica',
    category: 'Termoquímica',
    title: 'Lei de Hess',
    formulaOrFact: 'ΔH_global = ΔH₁ + ΔH₂ + ΔH₃ + ...',
    variables: 'Soma de equações químicas intermediárias',
    macete: '💡 Inverteu a equação? Troca o sinal do ΔH! Multiplicou por 2? Multiplica o ΔH por 2!',
    whenToUse: 'Calcular entalpia de uma reação somando etapas conhecidas.'
  },

  // --- ELETROQUÍMICA (PILHAS & ELETRÓLISE) ---
  {
    id: 'qf-9',
    subject: 'quimica',
    category: 'Eletroquímica',
    title: 'Potencial da Pilha (d.d.p.)',
    formulaOrFact: 'ΔE° = E°_maior - E°_menor   (ΔE° > 0 sempre espontâneo)',
    variables: 'E° em Volts (V)',
    macete: '💡 CRAO: Cátodo Reduz (positivo) | Ânodo Oxida (negativo). Vogal com vogal, consoante com consoante!',
    whenToUse: 'Pilhas alcalinas, bateria de carro, bateria de lítio.'
  },
  {
    id: 'qf-10',
    subject: 'quimica',
    category: 'Eletroquímica',
    title: '1ª Lei de Faraday (Eletrólise)',
    formulaOrFact: 'Q = i · t   |   1 mol de elétrons = 96.500 Coulombs (1 Faraday)',
    variables: 'Q em Coulombs (C) | i em Amperes (A) | t em segundos (s)',
    macete: '💡 "Qu-i-ti": Q = i · t. Converta o tempo sempre para segundos!',
    whenToUse: 'Galvanoplastia (folheamento a ouro), refino de cobre, eletrólise da água.'
  },

  // --- QUÍMICA ORGÂNICA (DECOREBAS FUNDAMENTAIS) ---
  {
    id: 'qf-11',
    subject: 'quimica',
    category: 'Química Orgânica',
    title: 'As Funções Oxigenadas Clássicas',
    formulaOrFact: 'Álcool: R-OH (carbono saturado) | Fenol: Ar-OH (no anel benzênico) | Éter: R-O-R | Aldeído: R-CHO | Cetona: R-CO-R | Ácido Carboxílico: R-COOH | Éster: R-COO-R',
    macete: '💡 C=O entre carbonos = CETONA. C=O na ponta com H = ALDEÍDO. C=O ligado a O e carbono = ÉSTER.',
    whenToUse: 'Reconhecimento de grupos funcionais em remédios e aromatizantes.'
  },
  {
    id: 'qf-12',
    subject: 'quimica',
    category: 'Química Orgânica',
    title: 'Funções Nitrogenadas: Amina vs Amida',
    formulaOrFact: 'Amina: derivada da amônia (R-NH₂) | Amida: Nitrogênio ligado a uma carbonila (R-CO-NH₂)',
    macete: '💡 Se o N estiver colado num C=O, é AMIDA. Se for em carbono comum, é AMINA.',
    whenToUse: 'Proteínas (ligação peptídica é amida!), alcaloides, neurotransmissores.'
  }
];
