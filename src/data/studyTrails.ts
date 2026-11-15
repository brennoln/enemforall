import { Subject } from '../types';

export interface TrailMiniQuiz {
  prompt: string;
  options: string[];
  correctIndex: number;
  feedback: string;
}

export interface TrailStep {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  summary: string;
  keyIdea: string;
  enemExample: string;
  miniQuiz: TrailMiniQuiz;
}

export interface SubjectTrail {
  subject: Subject;
  label: string;
  tagline: string;
  steps: TrailStep[];
}

export const studyTrailsData: SubjectTrail[] = [
  {
    subject: 'matematica',
    label: 'Matemática',
    tagline: 'Do básico do dia a dia até os 70% que mais caem no ENEM',
    steps: [
      {
        id: 'trail-mat-1',
        stepNumber: 1,
        title: 'Contas Rápidas, Porcentagem & Regra de Três',
        subtitle: 'A base absoluta para não travar em nenhuma questão',
        summary:
          'Regra de três serve para comparar duas grandezas proporcionais (ex: se 2 kg custam R$ 10, 5 kg custam R$ 25). Já a porcentagem é uma fração sobre 100: 10% é dividir por 10 (voltar 1 vírgula) e 1% é dividir por 100.',
        keyIdea: 'Calcule 15% de cabeça somando 10% + metade (5%). Para descontos/aumentos seguidos, multiplique os fatores (ex: -20% = × 0,80).',
        enemExample: 'Descontos sucessivos em loja (Q166 ENEM 2025) e proporção de tempo/distância (Q180).',
        miniQuiz: {
          prompt: 'Quanto é 15% de R$ 200 de cabeça?',
          options: ['R$ 15', 'R$ 30', 'R$ 45'],
          correctIndex: 1,
          feedback: 'Isso! 10% de 200 = 20, metade (5%) = 10. Somando: 20 + 10 = R$ 30!'
        }
      },
      {
        id: 'trail-mat-2',
        stepNumber: 2,
        title: 'Escalas & Conversão de Unidades',
        subtitle: 'Transformar cm, m, km e litros sem errar zeros',
        summary:
          'Escala compara o tamanho no desenho/mapa com o tamanho real, sempre na mesma unidade (E = desenho / real). Em volumes, 1 m³ equivale a uma caixa d’água de 1.000 Litros, e 1 dm³ equivale a exatos 1 Litro.',
        keyIdea: 'De cm para km: corte 5 zeros. Se a escala for de ÁREA, eleve ao quadrado (E²); se for de VOLUME, eleve ao cubo (E³).',
        enemExample: 'Maquetes (Q136), mapas com área (Q165) e caixa de descarga em decímetros (Q174).',
        miniQuiz: {
          prompt: 'Uma caixa tem volume de 2,5 m³. Quantos litros de água cabem nela?',
          options: ['250 litros', '2.500 litros', '25.000 litros'],
          correctIndex: 1,
          feedback: 'Perfeito! Como 1 m³ = 1.000 L, basta fazer 2,5 × 1.000 = 2.500 litros.'
        }
      },
      {
        id: 'trail-mat-3',
        stepNumber: 3,
        title: 'Estatística Básica: Leitura de Gráficos & Tabelas',
        subtitle: 'Média, Mediana e Moda — pontos fáceis garantidos na TRI',
        summary:
          'Média é somar tudo e dividir pela quantidade. Moda é o valor que mais se repete. Mediana é o valor exatamente do MEIO depois de colocar os números em ordem crescente.',
        keyIdea: 'Nunca calcule a mediana sem ordenar os números primeiro! Se houver quantidade par de dados, faça a média dos 2 do meio.',
        enemExample: 'Tabelas de acidentes (Q148), notas/pontos (Q142) e gráficos de barras (Q155).',
        miniQuiz: {
          prompt: 'Qual é a mediana dos números: 30, 10, 20?',
          options: ['10 (o do meio sem ordenar)', '20 (o do meio após ordenar)', '25'],
          correctIndex: 1,
          feedback: 'Exato! Ordenando fica 10, 20, 30 — o valor central é 20.'
        }
      },
      {
        id: 'trail-mat-4',
        stepNumber: 4,
        title: 'Geometria do Dia a Dia: Áreas & Volumes',
        subtitle: 'Retângulo, círculo, caixa e cilindro sem mistério',
        summary:
          'Área mede a superfície (base × altura no retângulo; π·R² no círculo). Volume mede o espaço interno: em sólidos retos (caixa, prisma, cilindro) é Área da Base × Altura; em sólidos com ponta (cone, pirâmide) divide por 3.',
        keyIdea: 'Se a questão der o DIÂMETRO, divida por 2 antes de usar a fórmula do raio (R = D/2)!',
        enemExample: 'Túnel semicilíndrico (Q177), caixa de torta com folga (Q175) e blocos (Q160).',
        miniQuiz: {
          prompt: 'Uma lata cilíndrica tem DIÂMETRO 10 cm. Qual raio usar na fórmula V = π·R²·h?',
          options: ['R = 10 cm', 'R = 5 cm', 'R = 20 cm'],
          correctIndex: 1,
          feedback: 'Mandou bem! O raio é sempre metade do diâmetro: 10 ÷ 2 = 5 cm.'
        }
      },
      {
        id: 'trail-mat-5',
        stepNumber: 5,
        title: 'Funções & Probabilidade Essencial',
        subtitle: 'Entender gráficos e calcular chances de um evento',
        summary:
          'Uma função do 1º grau (y = ax + b) forma uma reta: "b" é onde começa (quando x = 0) e "a" é quanto sobe ou desce a cada passo. Probabilidade é sempre dividir os casos que você quer pelo total de casos possíveis.',
        keyIdea: 'Se o gráfico já está desenhado e as opções são fórmulas, substitua x = 0 e outro ponto fácil para eliminar 4 opções sem conta!',
        enemExample: 'Escolha de plano/tarifa no gráfico (Q147) e probabilidade em dados/sorteios (Q169).',
        miniQuiz: {
          prompt: 'Num dado comum de 6 lados, qual a chance de tirar um número maior que 4 (5 ou 6)?',
          options: ['2/6 (ou 1/3)', '4/6', '1/6'],
          correctIndex: 0,
          feedback: 'Correto! São 2 casos favoráveis (5 e 6) num total de 6 lados: 2/6 = 1/3.'
        }
      }
    ]
  },
  {
    subject: 'biologia',
    label: 'Biologia',
    tagline: 'Entenda como a vida funciona e garanta Ecologia e Saúde',
    steps: [
      {
        id: 'trail-bio-1',
        stepNumber: 1,
        title: 'A Célula e Suas Organelas',
        subtitle: 'Os "órgãos" microscópicos dentro de cada célula',
        summary:
          'Toda célula viva tem membrana, citoplasma e material genético. Dentro das células mais complexas (eucariontes), cada estrutura tem uma função: Mitocôndria produz energia (ATP), Ribossomo fabrica proteínas, Lisossomo faz a digestão/limpeza e Complexo de Golgi empacota e secreta.',
        keyIdea: 'Associe rápido: Mitocôndria = Usina de Energia | Ribossomo = Fábrica de Proteína | Lisossomo = Lixeiro/Digestão.',
        enemExample: 'Digestão de lipídios pelos lisossomos (Q99 ENEM 2025).',
        miniQuiz: {
          prompt: 'Qual organela faz a digestão de partículas e limpeza dentro da célula?',
          options: ['Mitocôndria', 'Lisossomo', 'Ribossomo'],
          correctIndex: 1,
          feedback: 'Acertou! O Lisossomo é responsável pela digestão intracelular.'
        }
      },
      {
        id: 'trail-bio-2',
        stepNumber: 2,
        title: 'Fotossíntese & Respiração Celular',
        subtitle: 'Como plantas produzem energia e renovam o oxigênio',
        summary:
          'Na fotossíntese, a planta usa luz solar, gás carbônico (CO₂) e água (H₂O) para fabricar glicose (alimento) e liberar oxigênio (O₂). Na respiração celular, plantas e animais quebram a glicose usando O₂ para gerar energia (ATP).',
        keyIdea: 'Pegadinha clássica: o O₂ liberado pela planta na fotossíntese vem da quebra da ÁGUA (H₂O), e não do CO₂!',
        enemExample: 'Fotossíntese bacteriana usando H₂S no lugar de H₂O (Q102 ENEM 2025).',
        miniQuiz: {
          prompt: 'De qual molécula vem o oxigênio (O₂) liberado pelas plantas na fotossíntese?',
          options: ['Do gás carbônico (CO₂)', 'Da água (H₂O)', 'Do nitrogênio do solo'],
          correctIndex: 1,
          feedback: 'Exato! O O₂ liberado vem da fotólise (quebra) da água (H₂O).'
        }
      },
      {
        id: 'trail-bio-3',
        stepNumber: 3,
        title: 'Ecologia & Meio Ambiente (O Campeão do ENEM)',
        subtitle: 'Cadeias alimentares, biomas e impactos ambientais',
        summary:
          'Produtores (plantas/algas) fazem a base da cadeia alimentar. Quando esgoto/adubo cai na água (eutrofização), algas se multiplicam, bloqueiam a luz e bactérias consomem todo o oxigênio, matando os peixes. Já espécies invasoras competem sem predadores e reduzem espécies nativas.',
        keyIdea: 'Em questões ambientais do ENEM, a resposta certa sempre defende preservação nativa, saneamento e controle biológico.',
        enemExample: 'Espécies invasoras (Q92), Caatinga (Q94), Ciclo do Carbono (Q95) e Biodigestores (Q100).',
        miniQuiz: {
          prompt: 'Na eutrofização de uma lagoa, por que os peixes acabam morrendo?',
          options: ['Falta de oxigênio dissolvido na água', 'Excesso de oxigênio', 'Falta de água'],
          correctIndex: 0,
          feedback: 'Isso! As bactérias decompositoras consomem todo o O₂ da água e os peixes morrem asfixiados.'
        }
      },
      {
        id: 'trail-bio-4',
        stepNumber: 4,
        title: 'Imunologia, Vacinas & Doenças Brasileiras',
        subtitle: 'Como o corpo se defende e como evitar parasitas',
        summary:
          'Vacina contém o antígeno (vírus/bactéria enfraquecido ou parte dele) para ensinar o corpo a criar anticorpos e memória (prevenção). Soro já traz anticorpos prontos para emergências (picada de cobra). Doenças como Esquistossomose dependem de caramujo em água contaminada.',
        keyIdea: 'Vacina = Previne (ativa memória). Soro = Cura na hora (anticorpo pronto).',
        enemExample: 'Mecanismo das vacinas (Q93) e ciclo da esquistossomose (Q98 ENEM 2025).',
        miniQuiz: {
          prompt: 'Uma pessoa foi picada por uma cobra venenosa. O que ela precisa receber na emergência?',
          options: ['Vacina', 'Soro antiofídico', 'Antibiótico'],
          correctIndex: 1,
          feedback: 'Correto! O soro traz anticorpos prontos para neutralizar o veneno imediatamente.'
        }
      },
      {
        id: 'trail-bio-5',
        stepNumber: 5,
        title: 'Genética Básica & Biotecnologia',
        subtitle: 'Herança dos pais, codominância e transgênicos',
        summary:
          'Genes carregam instruções em pares de alelos. Quando um alelo domina o outro, basta 1 cópia para aparecer; na codominância, os dois aparecem juntos (como sangue tipo AB). Transgênico é um organismo que recebeu um gene de outra espécie.',
        keyIdea: 'Pais normais com filho afetado = doença recessiva (pais são heterozigotos Aa).',
        enemExample: 'Codominância (Q121) e plantas transgênicas na biorremediação (Q133).',
        miniQuiz: {
          prompt: 'Quando uma planta recebe um gene de bactéria para resistir a pragas, ela é chamada de:',
          options: ['Clone', 'Transgênica', 'Híbrida natural'],
          correctIndex: 1,
          feedback: 'Perfeito! Receber gene de outra espécie diferente define um organismo transgênico.'
        }
      }
    ]
  },
  {
    subject: 'quimica',
    label: 'Química',
    tagline: 'Da polaridade do dia a dia até pilhas e estequiometria',
    steps: [
      {
        id: 'trail-qui-1',
        stepNumber: 1,
        title: 'Ligações Químicas & Polaridade (Água vs. Óleo)',
        subtitle: 'Por que algumas coisas misturam e outras não',
        summary:
          'Substâncias polares (como a água) dissolvem outras polares; apolares (como óleo e gasolina) dissolvem apolares. Moléculas com vários grupos -OH fazem ligações de hidrogênio e adoram água; cadeias longas só de carbono e hidrogênio preferem gordura.',
        keyIdea: 'Sabão tem os dois lados: uma ponta apolar que abraça a sujeira/óleo e uma cabeça polar que vai embora com a água.',
        enemExample: 'Solubilidade por grupos -OH (Q106) e ação de biossurfactantes (Q109 ENEM 2025).',
        miniQuiz: {
          prompt: 'Entre duas moléculas orgânicas de tamanho parecido, qual dissolve MELHOR em água?',
          options: ['A que tem 3 grupos -OH', 'A que só tem carbonos e hidrogênios'],
          correctIndex: 0,
          feedback: 'Isso! Grupos -OH fazem ligação de hidrogênio com a água, aumentando muito a solubilidade.'
        }
      },
      {
        id: 'trail-qui-2',
        stepNumber: 2,
        title: 'Ácidos, Bases & Escala de pH',
        subtitle: 'Entender acidez no estômago, solo e chuva ácida',
        summary:
          'A escala de pH vai de 0 a 14: abaixo de 7 é ácido (limão, vinagre), 7 é neutro (água pura) e acima de 7 é básico/alcalino (soda, calcário). Ácido neutraliza base formando sal e água.',
        keyIdea: 'Cada 1 ponto a menos no pH deixa a solução 10 vezes mais ácida! (De pH 5 para pH 3 = 100× mais ácida).',
        enemExample: 'Aminas básicas no cheiro de peixe neutralizadas com ácido do limão (Q117).',
        miniQuiz: {
          prompt: 'Uma solução de pH 4 é quantas vezes mais ácida que outra de pH 6?',
          options: ['2 vezes', '20 vezes', '100 vezes'],
          correctIndex: 2,
          feedback: 'Acertou! De 6 para 4 são 2 unidades: 10 × 10 = 100 vezes mais ácida.'
        }
      },
      {
        id: 'trail-qui-3',
        stepNumber: 3,
        title: 'Química Orgânica do Cotidiano',
        subtitle: 'Reconhecer Álcool, Fenol, Amida, Amina e Ácidos',
        summary:
          'Química orgânica estuda moléculas feitas principalmente de Carbono e Hidrogênio. O ENEM mostra desenhos de remédios ou aromas e pede para identificar os grupos: -OH em carbono comum é Álcool; -OH no anel benzênico é Fenol; -COOH é Ácido Carboxílico.',
        keyIdea: 'Nitrogênio ligado direto a C=O é AMIDA; Nitrogênio sem C=O é AMINA (tem caráter básico!).',
        enemExample: 'Descarboxilação liberando CO₂ (Q116) e fórmula molecular de aromas (Q119).',
        miniQuiz: {
          prompt: 'Quando o grupo -OH está ligado diretamente a um anel benzênico, a função é:',
          options: ['Álcool', 'Fenol', 'Éter'],
          correctIndex: 1,
          feedback: 'Exato! -OH direto no anel benzênico (aromático) é sempre FENOL.'
        }
      },
      {
        id: 'trail-qui-4',
        stepNumber: 4,
        title: 'Mol, Estequiometria & Gases',
        subtitle: 'A "receita de bolo" das reações químicas',
        summary:
          'Mol é apenas uma unidade de contagem gigante (6 × 10²³ partículas), como uma "dúzia" da química. Na estequiometria, usamos regra de três com a equação balanceada para saber quanto de produto é formado a partir dos reagentes.',
        keyIdea: 'Em gases (PV = nRT), a temperatura deve SEMPRE estar em Kelvin: basta somar 273 aos graus Celsius!',
        enemExample: 'Reagente em excesso (Q107) e equação dos gases ideais (Q110 ENEM 2025).',
        miniQuiz: {
          prompt: 'Na fórmula PV = nRT, qual temperatura usar se o termômetro marca 27 °C?',
          options: ['27', '300 K (27 + 273)', '246'],
          correctIndex: 1,
          feedback: 'Perfeito! Temperatura em gases sempre em Kelvin: 27 + 273 = 300 K.'
        }
      },
      {
        id: 'trail-qui-5',
        stepNumber: 5,
        title: 'Pilhas (Eletroquímica) & Calor das Reações',
        subtitle: 'Como baterias funcionam e por que reações esquentam',
        summary:
          'Reações que liberam calor (como qualquer queima/combustão) são Exotérmicas (ΔH < 0); as que absorvem calor são Endotérmicas (ΔH > 0). Na pilha, um material perde elétrons (oxida no Ânodo) e o outro ganha elétrons (reduz no Cátodo).',
        keyIdea: 'Macete CRAO: Cátodo Reduz (maior potencial E°) | Ânodo Oxida (menor potencial E°). ddp = E°maior - E°menor.',
        enemExample: 'Funcionamento da bateria de íon-lítio de celular (Q123 ENEM 2025).',
        miniQuiz: {
          prompt: 'Na pilha (macete CRAO), o que acontece no CÁTODO?',
          options: ['Redução (ganha elétrons)', 'Oxidação (perde elétrons)'],
          correctIndex: 0,
          feedback: 'CRAO na veia: Cátodo Reduz (consoante com consoante) e Ânodo Oxida!'
        }
      }
    ]
  },
  {
    subject: 'fisica',
    label: 'Física',
    tagline: 'Da velocidade no trânsito até a conta de luz da casa',
    steps: [
      {
        id: 'trail-fis-1',
        stepNumber: 1,
        title: 'Movimento & Velocidade (Cinemática)',
        subtitle: 'Distância, tempo, aceleração e conversão km/h ↔ m/s',
        summary:
          'Velocidade média é a distância dividida pelo tempo (v = ΔS / Δt). Quando a velocidade muda aos poucos, existe aceleração. Se a questão não der o tempo, usamos Torricelli (v² = v₀² + 2·a·ΔS).',
        keyIdea: 'Para passar de km/h para m/s, divida por 3,6 (ex: 72 km/h = 20 m/s). De m/s para km/h, multiplique por 3,6.',
        enemExample: 'Gráficos de velocidade por tempo (Q124) e frenagem (Q118 ENEM 2025).',
        miniQuiz: {
          prompt: 'Um carro está a 36 km/h. Qual é essa velocidade em m/s?',
          options: ['10 m/s', '36 m/s', '129,6 m/s'],
          correctIndex: 0,
          feedback: 'Correto! 36 ÷ 3,6 = 10 m/s.'
        }
      },
      {
        id: 'trail-fis-2',
        stepNumber: 2,
        title: 'Forças, Atrito & Pressão',
        subtitle: 'Por que objetos aceleram, freiam ou afundam',
        summary:
          'Força Resultante = massa × aceleração (F = m·a). Peso é a força da gravidade (P = m·g). Pressão é força dividida pela área (P = F/A): quanto menor a ponta de contato (como uma agulha ou salto fino), maior a pressão.',
        keyIdea: 'Em descida/frenagem em rampa sem motor, a massa se cancela: objetos leves e pesados sofrem a mesma aceleração!',
        enemExample: 'Rampa de escape para caminhão (Q118) e pressão em contato (Q128 ENEM 2025).',
        miniQuiz: {
          prompt: 'Por que uma faca afiada corta mais fácil que uma cega usando a mesma força?',
          options: ['Porque diminui a área de contato, aumentando a pressão', 'Porque diminui a força'],
          correctIndex: 0,
          feedback: 'Exato! P = F / Área: quanto menor a área do fio da faca, maior a pressão!'
        }
      },
      {
        id: 'trail-fis-3',
        stepNumber: 3,
        title: 'Calor, Temperatura & Propagação Térmica',
        subtitle: 'Condução, convecção, irradiação e calorimetria',
        summary:
          'Calor sempre flui do mais quente para o mais frio por 3 caminhos: Condução (em sólidos como metal), Convecção (ar ou água circulando) e Irradiação (única que atravessa o vácuo, como a luz do Sol).',
        keyIdea: 'Mudou temperatura? Q = m·c·ΔT ("Que Macete"). Mudou estado físico (derreteu/ferveu)? Q = m·L ("Que Moleza").',
        enemExample: 'Aquecimento solar no vácuo por irradiação (Q91) e sensibilidade térmica (Q97).',
        miniQuiz: {
          prompt: 'Por qual processo o calor do Sol chega até a Terra atravessando o vácuo espacial?',
          options: ['Condução', 'Convecção', 'Irradiação'],
          correctIndex: 2,
          feedback: 'Isso! Apenas a irradiação (ondas eletromagnéticas) se propaga no vácuo.'
        }
      },
      {
        id: 'trail-fis-4',
        stepNumber: 4,
        title: 'Ondas, Som & Luz',
        subtitle: 'Frequência, comprimento de onda, refração e decibéis',
        summary:
          'Toda onda transporta energia (sem levar matéria) e obedece à equação v = λ·f (velocidade = comprimento de onda × frequência). O volume do som é medido em decibéis (dB).',
        keyIdea: 'Ao mudar de meio (ex: ar para água), a FREQUÊNCIA (f) NUNCA MUDA! E em decibéis, +10 dB = 10× mais intenso.',
        enemExample: 'Tela do micro-ondas (Q105), batimentos cardíacos (Q101) e nível sonoro dB (Q115).',
        miniQuiz: {
          prompt: 'Quando a luz passa do ar para a água (refração), o que NÃO muda nunca?',
          options: ['A velocidade', 'A frequência (f)', 'O comprimento de onda (λ)'],
          correctIndex: 1,
          feedback: 'Mandou bem! A frequência é a identidade da onda e nunca muda na refração.'
        }
      },
      {
        id: 'trail-fis-5',
        stepNumber: 5,
        title: 'Eletricidade da Casa (Eletrodinâmica)',
        subtitle: 'Tensão, corrente, resistência, disjuntor e conta de luz',
        summary:
          'Nas tomadas da casa tudo fica em PARALELO (mesma voltagem 127V/220V, e se uma lâmpada queimar as outras continuam acesas). A corrente puxada por um aparelho é i = Potência / Tensão, e o gasto na conta de luz é em kWh.',
        keyIdea: 'Três fórmulas que resolvem 90% da elétrica: U = R·i, P = U·i e Consumo (kWh) = (Watts / 1000) × horas.',
        enemExample: 'Dimensionamento de fusível/disjuntor (Q135) e choque elétrico (Q120 ENEM 2025).',
        miniQuiz: {
          prompt: 'Se você desliga a TV da tomada, as lâmpadas da casa continuam acesas porque estão ligadas em:',
          options: ['Série', 'Paralelo'],
          correctIndex: 1,
          feedback: 'Perfeito! Em paralelo cada aparelho tem caminho próprio e recebe a mesma voltagem.'
        }
      }
    ]
  }
];
