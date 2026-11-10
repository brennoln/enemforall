import { Question } from '../../types';

export const scienceQuestionsChemistryPart2: Question[] = [
  // 11 - Química Geral / Tabela Periódica e Raio Atômico
  {
    id: 'qui-11',
    subject: 'quimica',
    topic: 'Tabela Periódica / Propriedades Periódicas',
    source: 'ENEM 2021',
    difficulty: 2,
    context: 'Ao longo do mesmo período da Tabela Periódica, os elementos químicos apresentam variações sistemáticas no raio atômico e na eletronegatividade.',
    question: 'Ao caminhar da ESQUERDA para a DIREITA no mesmo período, o raio atômico e a eletronegatividade, respectivamente:',
    options: [
      { letter: 'A', text: 'Aumenta e diminui.' },
      { letter: 'B', text: 'Diminui e aumenta.' },
      { letter: 'C', text: 'Aumenta e aumenta.' },
      { letter: 'D', text: 'Diminui e diminui.' },
      { letter: 'E', text: 'Permanece constante e aumenta.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: MACETE DA NEVE: Raio cresce para Baixo e para a Esquerda! Logo, para a direita o raio DIMINUI (maior atração nuclear pelos elétrons da mesma camada) e a eletronegatividade AUMENTA (F-O-N-Cl-Br-I-S-C-P-H)!',
      stepByStep: ['1. Mesma camada eletrônica: mais prótons puxam a eletrosfera com mais força -> raio diminui.', '2. Atraindo mais os elétrons, a eletronegatividade sobe.'],
      timeSaverTip: 'Eletronegatividade aponta para o Flúor (canto superior direito). O raio aponta para o Frâncio (canto inferior esquerdo).',
      trapAlert: 'Achar que ter mais prótons e elétrons sempre faz o átomo ficar maior.'
    }
  },
  // 12 - Termoquímica / Lei de Hess
  {
    id: 'qui-12',
    subject: 'quimica',
    topic: 'Termoquímica / Entalpia de Reação',
    source: 'ENEM 2022',
    difficulty: 2,
    context: 'A combustão completa de 1 mol de gás metano (CH4) libera 890 kJ de calor para o meio ambiente, sob condições padrão (25 °C e 1 atm).',
    question: 'A reação de combustão do metano é classificada termodinamicamente como:',
    options: [
      { letter: 'A', text: 'Endotérmica com ΔH = +890 kJ/mol.' },
      { letter: 'B', text: 'Endotérmica com ΔH = -890 kJ/mol.' },
      { letter: 'C', text: 'Exotérmica com ΔH = -890 kJ/mol.' },
      { letter: 'D', text: 'Exotérmica com ΔH = +890 kJ/mol.' },
      { letter: 'E', text: 'Isotérmica com ΔH = 0 kJ/mol.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: TODA COMBUSTÃO LIBERA CALOR! Libera calor = EXOTÉRMICA = ΔH NEGATIVO (sai energia do sistema). Logo ΔH = -890 kJ/mol.',
      stepByStep: ['1. "Libera calor" = processo exotérmico.', '2. Por convenção IUPAC, energia liberada tem sinal negativo (ΔH < 0).'],
      timeSaverTip: 'Viu "combustão" ou "queima"? É SEMPRE exotérmica e ΔH < 0.',
      trapAlert: 'Confundir a palavra "libera" com valor positivo de ΔH.'
    }
  },
  // 13 - Soluções / Diluição
  {
    id: 'qui-13',
    subject: 'quimica',
    topic: 'Soluções / Diluição de Soluções',
    source: 'ENEM 2020',
    difficulty: 1,
    context: 'Um técnico de laboratório dispõe de 100 mL de uma solução aquosa de ácido clorídrico (HCl) de concentração 2,0 mol/L e precisa diluí-la adicionando água até atingir o volume final de 500 mL.',
    question: 'Qual é a nova concentração molar (mol/L) da solução diluída obtida?',
    options: [
      { letter: 'A', text: '0,2 mol/L' },
      { letter: 'B', text: '0,4 mol/L' },
      { letter: 'C', text: '0,5 mol/L' },
      { letter: 'D', text: '0,8 mol/L' },
      { letter: 'E', text: '1,0 mol/L' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: C1 · V1 = C2 · V2! De 100 mL para 500 mL o volume aumentou 5 VEZES. Se o volume quintuplicou, a concentração DIVIDE por 5: 2,0 / 5 = 0,4 mol/L!',
      stepByStep: ['1. C1 · V1 = C2 · V2 => 2,0 × 100 = C2 × 500.', '2. C2 = 200 / 500 = 2 / 5 = 0,4 mol/L.'],
      timeSaverTip: 'Na diluição, a concentração cai na mesma proporção em que o volume cresce.',
      trapAlert: 'Usar o volume de água adicionada (400 mL) no lugar do volume final V2 (500 mL).'
    }
  },
  // 14 - Química Orgânica / Isomeria Geométrica (Cis-Trans)
  {
    id: 'qui-14',
    subject: 'quimica',
    topic: 'Química Orgânica / Isomeria Espacial',
    source: 'ENEM 2019',
    difficulty: 3,
    context: 'Gorduras trans são associadas a riscos cardiovasculares aumentados. A isomeria geométrica cis-trans exige condições estruturais bem definidas na cadeia carbônica.',
    question: 'Para que um alceno apresente isomeria geométrica (cis-trans), é indispensável que:',
    options: [
      { letter: 'A', text: 'Possua apenas ligações simples entre os átomos de carbono.' },
      { letter: 'B', text: 'Cada carbono da dupla ligação possua dois ligantes diferentes entre si.' },
      { letter: 'C', text: 'Os quatro ligantes da molécula sejam absolutamente idênticos.' },
      { letter: 'D', text: 'A molécula tenha um anel benzênico aromático.' },
      { letter: 'E', text: 'Apresente carbono quiral assimétrico com quatro ligantes distintos.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: REGRA DE OURO DA CIS-TRANS: 1) Ter dupla ligação (ou ciclo) impedindo rotação livre; 2) R1 ≠ R2 no primeiro carbono e R3 ≠ R4 no segundo carbono da dupla!',
      stepByStep: ['1. A ligação dupla impede rotação.', '2. Se um carbono da dupla tiver dois ligantes iguais (ex: dois H), girar a molécula dá no mesmo composto (sem isomeria cis-trans).', '3. Logo: em cada carbono da dupla, ligantes diferentes.'],
      timeSaverTip: 'Carbono da ponta com =CH2 NUNCA tem isomeria cis-trans (tem 2 H iguais).',
      trapAlert: 'Confundir isomeria geométrica (cis-trans) com isomeria óptica (carbono quiral).'
    }
  },
  // 15 - Cinética Química / Fatores que alteram a velocidade
  {
    id: 'qui-15',
    subject: 'quimica',
    topic: 'Cinética Química / Fatores Cinéticos',
    source: 'ENEM 2023',
    difficulty: 1,
    context: 'Um comprimido efervescente colocado em um copo com água fria reage lentamente. Quando o mesmo comprimido é triturado em pó e colocado em água morna, a efervescência é quase instantânea.',
    question: 'O aumento drástico da velocidade da reação ao triturar o comprimido e aquecer a água deve-se, respectivamente, ao aumento de:',
    options: [
      { letter: 'A', text: 'Superfície de contato e energia de ativação.' },
      { letter: 'B', text: 'Superfície de contato e energia cinética média das moléculas.' },
      { letter: 'C', text: 'Volume do sistema e entalpia da reação.' },
      { letter: 'D', text: 'Pressão hidrostática e frequência de choques ineficazes.' },
      { letter: 'E', text: 'Catalisador natural e redução da temperatura.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: EM PÓ = MAIOR SUPERFÍCIE DE CONTATO (mais choques por segundo)! MAIOR TEMPERATURA = MAIOR ENERGIA CINÉTICA (choques mais velozes e energéticos)! Matou!',
      stepByStep: ['1. Triturar o sólido expõe mais átomos para reagir = aumenta a superfície de contato.', '2. Aquecer aumenta a agitação térmica / energia cinética média das partículas.'],
      timeSaverTip: 'Lembre-se: catalisador DIMINUI a energia de ativação; temperatura NÃO altera a energia de ativação, só a energia das partículas.',
      trapAlert: 'Achar que aumentar a temperatura aumenta a energia de ativação (aumenta a energia das moléculas para superar a barreira).'
    }
  },
  // 16 - Radioatividade / Meia-Vida
  {
    id: 'qui-16',
    subject: 'quimica',
    topic: 'Físico-Química / Radioatividade e Decaimento',
    source: 'ENEM 2020',
    difficulty: 2,
    context: 'O Iodo-131, amplamente utilizado no diagnóstico e tratamento de distúrbios da tireoide, possui tempo de meia-vida de 8 dias. Uma amostra recém-preparada contém 80 mg desse isótopo.',
    question: 'Qual será a massa de Iodo-131 restante nessa amostra após transcorridos 24 dias?',
    options: [
      { letter: 'A', text: '40 mg' },
      { letter: 'B', text: '20 mg' },
      { letter: 'C', text: '10 mg' },
      { letter: 'D', text: '5 mg' },
      { letter: 'E', text: '2,5 mg' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: MEIA-VIDA = DIVIDE POR 2! 24 dias / 8 dias = 3 meias-vidas. 80 -> (8d) 40 -> (16d) 20 -> (24d) 10 mg! Feito de cabeça em 10 segundos!',
      stepByStep: ['1. Número de meias-vidas: n = 24 / 8 = 3 meias-vidas.', '2. 1ª meia-vida: 80 / 2 = 40 mg.', '3. 2ª meia-vida: 40 / 2 = 20 mg.', '4. 3ª meia-vida: 20 / 2 = 10 mg.'],
      timeSaverTip: '3 meias-vidas significa dividir por 2³ = 8. 80 / 8 = 10 mg.',
      trapAlert: 'Multiplicar 80 por frações incorretas ou subtrair a metade apenas uma vez.'
    }
  },
  // 17 - Equilíbrio Químico / Deslocamento de Le Chatelier
  {
    id: 'qui-17',
    subject: 'quimica',
    topic: 'Equilíbrio Químico / Princípio de Le Chatelier',
    source: 'ENEM 2022',
    difficulty: 2,
    context: 'Considere a síntese industrial da amônia pelo processo Haber-Bosch: N2(g) + 3 H2(g) ⇌ 2 NH3(g) (ΔH < 0, reação exotérmica).',
    question: 'Para DESLOCAR o equilíbrio no sentido de aumentar a produção de amônia (NH3), deve-se:',
    options: [
      { letter: 'A', text: 'Aumentar a temperatura e diminuir a pressão.' },
      { letter: 'B', text: 'Diminuir a temperatura e aumentar a pressão.' },
      { letter: 'C', text: 'Remover reagentes (N2 e H2) do reator.' },
      { letter: 'D', text: 'Adicionar gás inerte mantendo volume constante.' },
      { letter: 'E', text: 'Aumentar a temperatura e manter a pressão constante.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: LE CHATELIER: 1) Reação direta é EXO (ΔH < 0), logo ESFRIAR desloca para o lado exotérmico (produz NH3); 2) Reagentes: 1+3=4 mols gasosos; Produtos: 2 mols gasosos. AUMENTAR PRESSÃO desloca para o menor volume (lado do NH3)!',
      stepByStep: ['1. Aumentar pressão = favorece menor número de mols gasosos (4 mols -> 2 mols).', '2. Diminuir temperatura = favorece sentido exotérmico (direto).'],
      timeSaverTip: 'Alta pressão espreme os gases rumo ao menor volume.',
      trapAlert: 'Achar que aquecer favorece reação exotérmica.'
    }
  },
  // 18 - Ligações Químicas / Forças Intermoleculares
  {
    id: 'qui-18',
    subject: 'quimica',
    topic: 'Química Geral / Forças Intermoleculares',
    source: 'ENEM 2021',
    difficulty: 1,
    context: 'A água (H2O, massa molar 18 g/mol) ferve a 100 °C à pressão atmosférica padrão, enquanto o metano (CH4, massa molar 16 g/mol) ferve a cerca de -161 °C.',
    question: 'Essa grande disparidade nos pontos de ebulição deve-se fundamentalmente à presença de:',
    options: [
      { letter: 'A', text: 'Ligações covalentes apolares intramoleculares no CH4.' },
      { letter: 'B', text: 'Ligações iônicas entre os átomos de hidrogênio e oxigênio.' },
      { letter: 'C', text: 'Ligações de hidrogênio (pontes de hidrogênio) entre as moléculas de água.' },
      { letter: 'D', text: 'Interações dipolo induzido mais fortes na água do que no metano.' },
      { letter: 'E', text: 'Diferença substancial na massa molar das duas substâncias.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: H LIGADO A F-O-N = LIGAÇÃO DE HIDROGÊNIO! É a interação intermolecular mais forte, exigindo muito mais calor para ferver a água!',
      stepByStep: ['1. Metano é apolar -> forças de London (dipolo induzido fraco, PE muito baixo).', '2. Água tem H ligado a O -> ligações de hidrogênio muito fortes, elevando o ponto de ebulição.'],
      timeSaverTip: 'Ponto de ebulição alto de compostos leves (água, etanol) = Ligação de Hidrogênio.',
      trapAlert: 'Confundir ligação intermolecular (entre moléculas) com ligação covalente (dentro da molécula).'
    }
  },
  // 19 - Química Ambiental / Chuva Ácida
  {
    id: 'qui-19',
    subject: 'quimica',
    topic: 'Química Ambiental / Poluição e Óxidos Ácidos',
    source: 'ENEM 2023',
    difficulty: 2,
    context: 'A queima de combustíveis fósseis contendo impurezas de enxofre em usinas termelétricas e veículos pesados lança dióxido de enxofre (SO2) na atmosfera, que se oxida a trióxido de enxofre (SO3).',
    question: 'Ao reagir com o vapor de água nas nuvens, o SO3 forma o ácido responsável pela chuva ácida corrosiva:',
    options: [
      { letter: 'A', text: 'Ácido sulfúrico (H2SO4).' },
      { letter: 'B', text: 'Ácido clorídrico (HCl).' },
      { letter: 'C', text: 'Ácido nítrico (HNO3).' },
      { letter: 'D', text: 'Ácido fosfórico (H3PO4).' },
      { letter: 'E', text: 'Ácido acético (CH3COOH).' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: ÓXIDO ÁCIDO + ÁGUA = ÁCIDO! SO3 + H2O -> H2SO4 (Ácido Sulfúrico, o grande vilão da chuva ácida industrial)!',
      stepByStep: ['1. Enxofre: S + O2 -> SO2; 2SO2 + O2 -> 2SO3.', '2. Hidratação: SO3 + H2O -> H2SO4 (ácido sulfúrico).'],
      timeSaverTip: 'Enxofre (S) gera sulfúrico (H2SO4); Nitrogênio (N) gera nítrico (HNO3).',
      trapAlert: 'Marcar ácido clorídrico (HCl) que não contém enxofre.'
    }
  },
  // 20 - Eletroquímica / Eletrólise Aquosa
  {
    id: 'qui-20',
    subject: 'quimica',
    topic: 'Eletroquímica / Eletrólise e Espontaneidade',
    source: 'ENEM 2020',
    difficulty: 3,
    context: 'Diferentemente das pilhas galvânicas que produzem energia espontaneamente a partir de reações químicas, a eletrólise é um processo não espontâneo.',
    question: 'Em qualquer célula de eletrólise ou pilha galvânica, a OXIDAÇÃO ocorre sempre no:',
    options: [
      { letter: 'A', text: 'Cátodo, que é sempre o polo positivo.' },
      { letter: 'B', text: 'Ânodo, independentemente do tipo de célula eletroquímica.' },
      { letter: 'C', text: 'Cátodo, onde os elétrons são liberados para a solução.' },
      { letter: 'D', text: 'Ânodo nas pilhas e Cátodo na eletrólise.' },
      { letter: 'E', text: 'Eletrólito neutro sem participação dos eletrodos.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: REGRA DAS VOGAIS E CONSOANTES: Vogal com Vogal, Consoante com Consoante! Ânodo = Oxidação (A-O: vogais). Cátodo = Redução (C-R: consoantes). Vale SEMPRE para pilhas E eletrólises!',
      stepByStep: ['1. Ânodo (vogal) = Oxidação (vogal). Perde elétrons.', '2. Cátodo (consoante) = Redução (consoante). Ganha elétrons.', '3. O que inverte os sinais (+ e -) é a fonte de energia, mas Ânodo oxida sempre.'],
      timeSaverTip: 'Memorize "Vogal com Vogal (Ânodo/Oxidação), Consoante com Consoante (Cátodo/Redução)". Nunca mais erra.',
      trapAlert: 'Achar que a oxidação muda de polo entre pilha e eletrólise.'
    }
  }
];
