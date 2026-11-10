import { FormulaCheatSheetItem } from '../../types';

export const biologyFactsMemory: FormulaCheatSheetItem[] = [
  // --- ECOLOGIA (TOP 1 ENEM) ---
  {
    id: 'bf-1',
    subject: 'biologia',
    category: 'Ecologia',
    title: 'Ciclo do Nitrogênio (As 4 Bactérias)',
    formulaOrFact: '1. Fixação: N₂ → NH₃ (Rhizobium em leguminosas) | 2. Nitrosação: NH₃ → NO₂⁻ (Nitrosomonas) | 3. Nitratação: NO₂⁻ → NO₃⁻ (Nitrobacter) | 4. Desnitrificação: NO₃⁻ → N₂ (Pseudomonas)',
    macete: '💡 "Fixa amônia, faz nitrito, vira nitrato que nutre o palmito, e desnitrifica pro ar infinito."',
    whenToUse: 'Rotação de culturas com soja/feijão (adubação verde), ciclo biogeoquímico.'
  },
  {
    id: 'bf-2',
    subject: 'biologia',
    category: 'Ecologia',
    title: 'Bioacumulação & Biomagnificação',
    formulaOrFact: 'Poluente lipossolúvel não biodegradável (DDT, Mercúrio, Microplásticos) acumula com concentração MÁXIMA no PREDADOR DO TOPO DA CADEIA.',
    macete: '💡 "O predador de topo come todo mundo e guarda o veneno de todo mundo."',
    whenToUse: 'Contaminação de rios por garimpo, agrotóxicos em lagoas.'
  },
  {
    id: 'bf-3',
    subject: 'biologia',
    category: 'Ecologia',
    title: 'Relações Ecológicas Harmônicas e Desarmônicas',
    formulaOrFact: 'Mutualismo (+/+ obrigatório) | Protocooperação (+/+ facultativo) | Comensalismo (+/0 alimento) | Inquilinismo/Epifitismo (+/0 moradia) | Predatismo (+/- mata presa) | Parasitismo (+/- não mata de imediato) | Amensalismo/Antibiose (-/0)',
    macete: '💡 Líquen/Micorriza = Mutualismo. Jacaré e pássaro-palito = Protocooperação. Rêmora e tubarão = Comensalismo.',
    whenToUse: 'Classificação de interações biológicas.'
  },
  {
    id: 'bf-4',
    subject: 'biologia',
    category: 'Ecologia',
    title: 'Pirâmides Ecológicas',
    formulaOrFact: 'Pirâmide de ENERGIA é a ÚNICA que NUNCA É INVERTIDA (a energia sempre diminui a cada nível trófico: regra dos 10%). Pirâmides de número e biomassa podem ser invertidas.',
    macete: '💡 Energia flui de forma unidirecional e decrescente.',
    whenToUse: 'Interpretação de gráficos de fluxo de energia no ecossistema.'
  },

  // --- GENÉTICA & BIOTECNOLOGIA ---
  {
    id: 'bf-5',
    subject: 'biologia',
    category: 'Genética',
    title: '1ª Lei de Mendel & Proporções Clássicas',
    formulaOrFact: 'Cruzamento Aa × Aa: Fenótipo = 3 Dominantes : 1 Recessivo (75% : 25%). Genótipo = 1 AA : 2 Aa : 1 aa (25% : 50% : 25%).',
    macete: '💡 Dois pais normais com filho albino/afetado? Conclusão imediata: os pais são HETEROZIGOTOS (Aa) e a doença é recessiva!',
    whenToUse: 'Heredogramas, albinismo, fibrose cística.'
  },
  {
    id: 'bf-6',
    subject: 'biologia',
    category: 'Genética',
    title: 'Sistema ABO de Grupos Sanguíneos',
    formulaOrFact: 'Sangue A: Aglutinogênio A / Aglutinina anti-B | Sangue B: Aglutinogênio B / Aglutinina anti-A | Sangue AB: Aglutinogênios A e B / Nenhuma aglutinina (Receptor Universal) | Sangue O: Nenhum aglutinogênio / Anti-A e Anti-B (Doador Universal).',
    macete: '💡 O sangue "O" doa para todos porque não tem antígeno nas hemácias. O "AB" recebe de todos porque não tem anticorpos no plasma.',
    whenToUse: 'Testes de transfusão sanguínea e eritroblastose fetal (mãe Rh- e bebê Rh+).'
  },
  {
    id: 'bf-7',
    subject: 'biologia',
    category: 'Biotecnologia',
    title: 'Transgênicos vs Clonagem',
    formulaOrFact: 'Transgênico = organismo com gene inserido de OUTRA espécie (tecnologia do DNA recombinante, enzimas de restrição cortam e ligase une). Clonagem = cópia genética idêntica por transferência nuclear.',
    macete: '💡 Milho Bt e soja transgênica têm genes de bactérias do solo para produzir toxina contra lagartas.',
    whenToUse: 'Biotecnologia na agricultura e terapia gênica.'
  },

  // --- FISIOLOGIA & IMUNOLOGIA ---
  {
    id: 'bf-8',
    subject: 'biologia',
    category: 'Imunologia',
    title: 'Vacina vs Soro (A Diferença Decisiva)',
    formulaOrFact: 'Vacina: Imunização ATIVA, PREVENTIVA. Contém ANTÍGENO atenuado/morto estimulando a produção de anticorpos e células de memória duradouras. Soro: Imunização PASSIVA, CURATIVA de emergência. Contém ANTICORPOS PRONTOS com ação imediata sem criar memória.',
    macete: '💡 "Vacina previne com antígeno. Soro salva na hora com anticorpo pronto."',
    whenToUse: 'Picada de cobra/escorpião = SORO! Gripe/COVID/Tétano preventivo = VACINA!'
  },
  {
    id: 'bf-9',
    subject: 'biologia',
    category: 'Fisiologia',
    title: 'Controle Glicêmico: Insulina vs Glucagon',
    formulaOrFact: 'Insulina (células beta do pâncreas): DIMINUI a glicose no sangue (armazena glicogênio no fígado). Glucagon (células alfa do pâncreas): AUMENTA a glicose no sangue (quebra glicogênio em jejum).',
    macete: '💡 "Insulina faz a glicose ENTRAR na célula (tira do sangue). Glucagon bota a glicose no sangue (Glicose Gone/Lá fora)."',
    whenToUse: 'Diabetes mellitus (tipo 1: autoimune sem insulina; tipo 2: resistência insulínica).'
  },

  // --- CITOLOGIA & BIOENERGÉTICA ---
  {
    id: 'bf-10',
    subject: 'biologia',
    category: 'Citologia',
    title: 'As Organelas Celulares e Suas Funções',
    formulaOrFact: 'Mitocôndria = Respiração celular e síntese de ATP (DNA próprio materno). Cloroplasto = Fotossíntese (DNA próprio). Ribossomo = Síntese de proteínas. Retículo Endoplasmático Rugoso = Proteínas de exportação. Retículo Liso = Síntese de lipídios e desintoxicação. Complexo de Golgi = Secreção, empacotamento e formação do acrossomo do espermatozoide. Lisossomo = Digestão intracelular (autofagia/autólise). Peroxissomo = Degrada H₂O₂ (catalase).',
    macete: '💡 Fígado tem muito Retículo Liso (desintoxica álcool). Músculo tem muita Mitocôndria (muito ATP).',
    whenToUse: 'Associação de função celular com tecidos corporais.'
  },
  {
    id: 'bf-11',
    subject: 'biologia',
    category: 'Bioenergética',
    title: 'Fotossíntese vs Respiração Celular',
    formulaOrFact: 'Fotossíntese: 6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂ (O oxigênio liberado vem da FOTÓLISE DA ÁGUA, e não do CO₂!). Respiração: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ~30-32 ATP.',
    macete: '💡 O oxigênio que respiramos foi produzido a partir da ÁGUA (H₂O) quebrada na fase clara da fotossíntese!',
    whenToUse: 'Experimentos com isótopos marcados (O¹⁸) na água vs gás carbônico.'
  },
  {
    id: 'bf-12',
    subject: 'biologia',
    category: 'Citologia',
    title: 'Bases Nitrogenadas do DNA e RNA',
    formulaOrFact: 'DNA: A pareia com T (2 pontes de H) | C pareia com G (3 pontes de H). Relação de Chargaff: %A = %T e %C = %G. RNA: Uracila (U) no lugar de Timina (A pareia com U).',
    macete: '💡 "Agnaldo Timóteo (A-T) e Gal Costa (G-C)."',
    whenToUse: 'Se uma fita de DNA tem 30% de Adenina, ela tem 30% de Timina e sobram 40% divididos: 20% Citosina e 20% Guanina.'
  }
];
