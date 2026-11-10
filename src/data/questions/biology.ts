import { Question } from '../../types';

export const scienceQuestionsBiology: Question[] = [
  // 1 - ESPECIAL BIOLOGIA 1 (Top 1 Biologia: Ecologia e Biomagnificação)
  {
    id: 'bio-01',
    subject: 'biologia',
    topic: 'Ecologia / Biomagnificação Trófica',
    source: 'ENEM 2023',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Top 1 de Biologia: Ecologia e Bioacumulação Trófica',
    context: 'Em uma área agrícola, o uso excessivo de um defensivo organoclorado não biodegradável contaminou o rio local. A teia alimentar é formada por: microalgas → zooplâncton → lambaris → traíras → lontras.',
    question: 'Qual organismo apresentará a maior concentração desse pesticida em seus tecidos biológicos?',
    options: [
      { letter: 'A', text: 'Microalgas' },
      { letter: 'B', text: 'Zooplâncton' },
      { letter: 'C', text: 'Lambaris' },
      { letter: 'D', text: 'Traíras' },
      { letter: 'E', text: 'Lontras' }
    ],
    correctAnswer: 'E',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Bioacumulação trófica = VÁ DIRETO NO PREDADOR DO TOPO DA CADEIA! As lontras estão no topo, acumulando o veneno ingerido por todos os níveis inferiores.',
      stepByStep: ['1. Compostos não biodegradáveis não são excretados e acumulam nos tecidos.', '2. A cada nível trófico a concentração aumenta exponencialmente.', '3. O topo trófico (lontra) tem a máxima concentração.'],
      timeSaverTip: 'Bateu o olho em "composto não biodegradável/mercúrio", marque o último animal da cadeia.',
      trapAlert: 'Marcar as algas por estarem em contato direto com a água.',
      deepMemoryFact: 'Diferença sutil: Bioacumulação é o acúmulo da substância ao longo da vida de UM único indivíduo. Biomagnificação (magnificação trófica) é a concentração progressivamente maior a cada nível trófico sucessivo na cadeia.'
    }
  },
  // 2 - ESPECIAL BIOLOGIA 2 (Top 2 Biologia: Imunologia Soro vs Vacina)
  {
    id: 'bio-02',
    subject: 'biologia',
    topic: 'Imunologia / Soro vs Vacina',
    source: 'ENEM 2022',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Imunologia (Vacina Ativa vs Soro Passivo)',
    context: 'Uma pessoa foi socorrida após ser picada por uma cascavel (*Crotalus durissus*) em uma fazenda.',
    question: 'O procedimento médico correto e a respectiva justificativa biológica são:',
    options: [
      { letter: 'A', text: 'Aplicar vacina anticrotálica para estimular os linfócitos a produzirem anticorpos de memória.' },
      { letter: 'B', text: 'Aplicar soro anticrotálico, pois introduz anticorpos prontos para ação curativa e neutralizadora imediata.' },
      { letter: 'C', text: 'Aplicar antibióticos para destruir as proteínas da toxina ofídica.' },
      { letter: 'D', text: 'Aplicar vacina atenuada para conferir proteção ativa imediata.' },
      { letter: 'E', text: 'Aplicar anti-histamínicos apenas, aguardando a reação natural do sistema imune.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Emergência com veneno de cobra = SORO (anticorpos prontos). Vacina é prevenção com antígeno para tomar com antecedência!',
      stepByStep: ['1. O veneno age rápido e a pessoa não tem dias para produzir defesas.', '2. O soro fornece anticorpos policlonais prontos para neutralizar o veneno de imediato.'],
      timeSaverTip: 'Animal peçonhento = sempre SORO.',
      trapAlert: 'Marcar vacina achando que serve para socorro imediato.',
      deepMemoryFact: 'Como é produzido o soro: injeta-se doses controladas do veneno em cavalos. O cavalo produz anticorpos em grande escala. O sangue é extraído, filtrado e apenas os anticorpos (imunoglobulinas) purificados compõem o soro.'
    }
  },
  // 3 - ESPECIAL BIOLOGIA 3 (Top 3 Biologia: Ecologia / Eutrofização)
  {
    id: 'bio-04',
    subject: 'biologia',
    topic: 'Ecologia / Eutrofização',
    source: 'ENEM 2023',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Impactos Ambientais: Eutrofização das Águas',
    context: 'O lançamento excessivo de efluentes domésticos ricos em matéria orgânica e detergentes fosfatados em uma lagoa desencadeou um intenso processo de eutrofização cultural.',
    question: 'A mortandade massiva de peixes observada nesse corpo hídrico resulta diretamente de qual fenômeno biológico?',
    options: [
      { letter: 'A', text: 'Aumento da toxicidade por excesso de oxigênio dissolvido nas camadas profundas.' },
      { letter: 'B', text: 'Proliferação de bactérias aeróbias decompositoras, levando à drástica queda do oxigênio dissolvido na água.' },
      { letter: 'C', text: 'Intoxicação aguda provocada pela ingestão de excesso de fósforo inorgânico.' },
      { letter: 'D', text: 'Aumento súbito da temperatura da água devido à respiração celular das algas.' },
      { letter: 'E', text: 'Rompimento osmótico das membranas branquiais pela água destilada.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Eutrofização = bactérias comem a matéria orgânica e consomem TODO O OXIGÊNIO! Os peixes morrem ASFIXIADOS pela falta de O₂!',
      stepByStep: ['1. Esgoto fornece nitrogênio e fósforo → explosão de algas.', '2. As algas morrem e bactérias decompositoras aeróbias multiplicam.', '3. Essas bactérias esgotam o oxigênio da água, sufocando os peixes.'],
      timeSaverTip: 'Eutrofização sempre mata peixe por ASFIXIA (falta de O₂ dissolvido consumido por decompositores).',
      trapAlert: 'Achar que os peixes morrem envenenados pelo adubo em si.',
      deepMemoryFact: 'Parâmetro DBO (Demanda Bioquímica de Oxigênio): quanto mais poluída por esgoto orgânico estiver a água, MAIOR será a DBO (pois os micróbios precisam de mais O₂ para decompor o material).'
    }
  },
  // 4 - ESPECIAL BIOLOGIA 4 (Top 4 Biologia: Relações Ecológicas)
  {
    id: 'bio-05',
    subject: 'biologia',
    topic: 'Ecologia / Relações Ecológicas',
    source: 'Questão Adaptada ENEM 2022 (Foco em Agilidade)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Relações Ecológicas (Mutualismo vs Protocooperação)',
    context: 'Os líquens são organismos formados pela associação íntima entre fungos e algas unicelulares (ou cianobactérias). Nessa associação mútua, a alga produz compostos orgânicos pela fotossíntese e o fungo garante umidade e fixação, sendo incapazes de sobreviver isolados naquele ambiente rochoso.',
    question: 'Essa relação ecológica harmônica interespecífica é classificada como:',
    options: [
      { letter: 'A', text: 'Mutualismo' },
      { letter: 'B', text: 'Protocooperação' },
      { letter: 'C', text: 'Comensalismo' },
      { letter: 'D', text: 'Inquilinismo' },
      { letter: 'E', text: 'Amensalismo' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Se os dois se beneficiam (+/+) e NÃO podem viver separados (obrigatório) = MUTUALISMO! Se pudessem viver separados seria Protocooperação.',
      stepByStep: ['1. Ambas as espécies se beneficiam.', '2. Há dependência mútua de sobrevivência (associação obrigatória).', '3. Logo, classifica-se como Mutualismo.'],
      timeSaverTip: 'Líquen e micorriza = sempre Mutualismo obrigatório.',
      trapAlert: 'Confundir com protocooperação (que é facultativa, como pássaro-palito e jacaré).',
      deepMemoryFact: 'Líquens também são espécies pioneiras clássicas em sucessão ecológica primária e atuam como bioindicadores de poluição atmosférica (especialmente sensíveis ao dióxido de enxofre SO₂).'
    }
  },
  // 5 - ESPECIAL BIOLOGIA 5 (Top 5 Biologia: Genética Mendeliana)
  {
    id: 'bio-03',
    subject: 'biologia',
    topic: 'Genética / 1ª Lei de Mendel',
    source: 'Questão Adaptada ENEM 2021 (Foco em Agilidade)',
    difficulty: 1,
    isSpecial: true,
    specialReason: '⭐ Questão Especial • Genética Mendeliana (Cruzamento Aa × Aa)',
    context: 'O albinismo em humanos é condicionado por um alelo recessivo "a". Um casal, ambos com pigmentação normal da pele mas heterozigotos (Aa), planeja ter um filho.',
    question: 'Qual é a probabilidade desse bebê nascer ALBINO (aa)?',
    options: [
      { letter: 'A', text: '0%' },
      { letter: 'B', text: '25% (1/4)' },
      { letter: 'C', text: '50% (1/2)' },
      { letter: 'D', text: '75% (3/4)' },
      { letter: 'E', text: '100%' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Cruzamento Aa × Aa sempre gera a clássica proporção 3 normais para 1 recessivo (3:1). A chance do recessivo (aa) é 1/4 = 25%!',
      stepByStep: ['1. Gametas de Aa × Aa: AA (25%), Aa (25%), Aa (25%), aa (25%).', '2. Fenótipo albino (aa) = 1 caso em 4 = 25%.'],
      timeSaverTip: 'Aa × Aa = 25% de recessivo na lata.',
      trapAlert: 'Marcar 50% achando que é meio a meio.',
      deepMemoryFact: 'Cruzamento-teste (test-cross): para descobrir se um indivíduo de fenótipo dominante é homozigoto (AA) ou heterozigoto (Aa), cruza-se ele com um homozigoto recessivo (aa).'
    }
  },
  // 6 - Ponto de Compensação Fótica
  {
    id: 'bio-06',
    subject: 'biologia',
    topic: 'Citologia & Bioenergética / Fotossíntese',
    source: 'ENEM 2021',
    difficulty: 1,
    context: 'O ponto de compensação fótica (PCF) de uma planta representa a intensidade luminosa na qual o consumo de matéria orgânica na respiração celular se iguala rigorosamente à produção na fotossíntese.',
    question: 'Para que uma planta consiga crescer, se desenvolver e armazenar substâncias de reserva (como amido), ela deve ser mantida em uma intensidade luminosa:',
    options: [
      { letter: 'A', text: 'Rigorosamente abaixo do seu ponto de compensação fótica.' },
      { letter: 'B', text: 'Exatamente igual ao seu ponto de compensação fótica ao longo de todo o dia.' },
      { letter: 'C', text: 'Superior ao seu ponto de compensação fótica, para que a taxa fotossintética supere a taxa respiratória.' },
      { letter: 'D', text: 'Próxima de zero durante as horas diurnas de sol intenso.' },
      { letter: 'E', text: 'Oscilante entre o infravermelho e as ondas de rádio.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Para CRESCER tem que lucrar! Fotossíntese deve ser MAIOR que a respiração (acima do PCF) para sobrar glicose e formar biomassa!',
      stepByStep: ['1. No PCF: Fotossíntese = Respiração (saldo zero).', '2. Abaixo do PCF: Respiração > Fotossíntese (planta consome reservas e morre).', '3. Acima do PCF: Fotossíntese > Respiração (saldo positivo para crescimento).'],
      timeSaverTip: 'Planta cresce = saldo positivo = acima do ponto de compensação.',
      trapAlert: 'Achar que no PCF a planta já acumula reserva.'
    }
  },
  // 7 - Ciclo do Nitrogênio
  {
    id: 'bio-07',
    subject: 'biologia',
    topic: 'Ecologia / Ciclo do Nitrogênio',
    source: 'ENEM 2023',
    difficulty: 1,
    context: 'A adubação verde com plantas da família das leguminosas (como feijão e soja) enriquece o solo naturalmente com compostos nitrogenados, reduzindo a necessidade de fertilizantes químicos industriais.',
    question: 'Essa fixação biológica do nitrogênio atmosférico (N₂) ocorre graças à simbiose das raízes dessas plantas com bactérias do gênero:',
    options: [
      { letter: 'A', text: 'Nitrosomonas' },
      { letter: 'B', text: 'Nitrobacter' },
      { letter: 'C', text: 'Rhizobium' },
      { letter: 'D', text: 'Pseudomonas' },
      { letter: 'E', text: 'Lactobacillus' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: N₂ do ar fixado na raiz de leguminosa = RHIZOBIUM! Fixam N₂ e transformam em amônia (NH₃) em nódulos radiculares!',
      stepByStep: ['1. Bactérias Rhizobium vivem nos nódulos de raízes de leguminosas.', '2. Elas possuem a enzima nitrogenase capaz de quebrar a tripla ligação de N₂.', '3. Isso enriquece o solo com nitrogênio orgânico.'],
      timeSaverTip: 'Raiz de leguminosa fixando nitrogênio = Rhizobium na lata.',
      trapAlert: 'Confundir com Nitrosomonas e Nitrobacter (que fazem a nitrificação no solo, não a fixação simbiótica).'
    }
  },
  // 8 - Sistema Circulatório e Hematose
  {
    id: 'bio-08',
    subject: 'biologia',
    topic: 'Fisiologia Humana / Sistema Circulatório',
    source: 'ENEM 2022',
    difficulty: 1,
    context: 'Nos alvéolos pulmonares humanos, ocorre a hematose: o sangue que chega rico em gás carbônico (sangue venoso) é oxigenado e se transforma em sangue arterial.',
    question: 'A troca gasosa de oxigênio (O₂) e dióxido de carbono (CO₂) entre o ar alveolar e o sangue capilar ocorre por meio de qual mecanismo de transporte celular?',
    options: [
      { letter: 'A', text: 'Transporte ativo com gasto de ATP pela bomba de sódio-potássio.' },
      { letter: 'B', text: 'Difusão simples a favor do gradiente de pressão parcial dos gases, sem gasto de energia metabólica.' },
      { letter: 'C', text: 'Osmose reversa impulsionada pela pressão hidrostática arterial.' },
      { letter: 'D', text: 'Fagocitose celular realizada por macrófagos alveolares.' },
      { letter: 'E', text: 'Pinocitose endotelial mediada por receptores de membrana.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Gás (O₂ e CO₂) atravessa membrana SEMPRE por DIFUSÃO SIMPLES! Vai do lugar mais concentrado para o menos concentrado, sem gastar energia (ATP)!',
      stepByStep: ['1. O ar alveolar tem mais O₂ que o sangue capilar: O₂ entra no sangue por difusão simples.', '2. O sangue tem mais CO₂ que o ar alveolar: CO₂ sai para os pulmões por difusão simples.', '3. Processo passivo, sem gasto de ATP.'],
      timeSaverTip: 'Troca gasosa respiratória = sempre Difusão Simples.',
      trapAlert: 'Achar que precisa de transporte ativo para os gases circularem.'
    }
  },
  // 9 - Genética / Sistema ABO
  {
    id: 'bio-09',
    subject: 'biologia',
    topic: 'Genética / Sistema Sanguíneo ABO',
    source: 'Questão Adaptada ENEM 2021 (Foco em Agilidade)',
    difficulty: 1,
    context: 'Um indivíduo do grupo sanguíneo O sofreu um acidente e precisa de uma transfusão urgente de hemácias concentradas.',
    question: 'Quais tipos sanguíneos do sistema ABO esse indivíduo pode receber com segurança?',
    options: [
      { letter: 'A', text: 'Exclusivamente sangue do tipo O.' },
      { letter: 'B', text: 'Sangue dos tipos O e AB.' },
      { letter: 'C', text: 'Sangue dos tipos A, B e O.' },
      { letter: 'D', text: 'Qualquer tipo sanguíneo (A, B, AB ou O).' },
      { letter: 'E', text: 'Exclusivamente sangue do tipo AB.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: O sangue tipo O é DOADOR UNIVERSAL, mas SÓ RECEBE DE O! Porque no plasma do sangue O existem anticorpos anti-A e anti-B que destruiriam qualquer outro sangue!',
      stepByStep: ['1. Hemácias do sangue O não possuem aglutinogênios A nem B.', '2. Porém, o plasma do sangue O possui anticorpos anti-A e anti-B.', '3. Logo, ao receber hemácias com A ou B haveria aglutinação fatal.'],
      timeSaverTip: 'Sangue O só recebe de O.',
      trapAlert: 'Confundir ser doador universal com poder receber de todo mundo (quem recebe de todo mundo é o AB!).'
    }
  },
  // 10 - Organelas Celulares
  {
    id: 'bio-10',
    subject: 'biologia',
    topic: 'Citologia / Organelas Celulares',
    source: 'ENEM 2023',
    difficulty: 1,
    context: 'As células do parênquima hepático (hepatócitos do fígado) desempenham papel central na degradação de substâncias tóxicas, como etanol, medicamentos e pesticidas.',
    question: 'Qual organela citoplasmática membranosa é particularmente abundante nos hepatócitos para realizar essa função de desintoxicação celular?',
    options: [
      { letter: 'A', text: 'Complexo Golgiense' },
      { letter: 'B', text: 'Retículo Endoplasmático Liso (Agranular)' },
      { letter: 'C', text: 'Ribossomos Livres' },
      { letter: 'D', text: 'Centríolos Mitóticos' },
      { letter: 'E', text: 'Vacúolo de Suco Celular' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Fígado e desintoxicação de álcool/remédios = RETÍCULO ENDOPLASMÁTICO LISO! Ele também produz lipídios (colesterol/hormônios sexuais).',
      stepByStep: ['1. O Retículo Endoplasmático Liso (REL) não possui ribossomos.', '2. Suas enzimas oxidam e desintoxicam drogas e álcool.', '3. Por isso é hipertrofiado no fígado de pessoas com tolerância alcoólica.'],
      timeSaverTip: 'Desintoxicação + lipídios = Retículo Liso.',
      trapAlert: 'Retículo Rugoso fabrica proteínas; o Liso faz lipídios e desintoxicação!'
    }
  }
];
