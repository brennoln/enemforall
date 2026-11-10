import { Question } from '../../types';

export const scienceQuestionsPhysicsPart2: Question[] = [
  {
    id: 'fis-11',
    subject: 'fisica',
    topic: 'Ondulatória / Efeito Doppler',
    source: 'ENEM 2020',
    difficulty: 2,
    context: 'Uma ambulância com a sirene ligada em frequência constante de 800 Hz trafega em alta velocidade por uma avenida retilínea.',
    question: 'Para um pedestre parado na calçada, o que ocorre com a frequência sonora percebida durante a APROXIMAÇÃO e durante o AFASTAMENTO da ambulância?',
    options: [
      { letter: 'A', text: 'Percebe som mais agudo (frequência maior) na aproximação e mais grave (frequência menor) no afastamento.' },
      { letter: 'B', text: 'Percebe som mais grave na aproximação e mais agudo no afastamento.' },
      { letter: 'C', text: 'A frequência percebida é rigorosamente constante em 800 Hz em ambos os momentos.' },
      { letter: 'D', text: 'A amplitude diminui na aproximação devido à interferência destrutiva.' },
      { letter: 'E', text: 'O som se torna inaudível no instante exato da aproximação.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: EFEITO DOPPLER: APROXIMA = AGUDO (frequência aparente maior). AFASTA = GRAVE (frequência aparente menor)!',
      stepByStep: ['1. Na aproximação, as frentes de onda são comprimidas, encurtando o comprimento de onda percebido.', '2. Menor comprimento de onda = maior frequência aparente (som mais agudo).', '3. No afastamento ocorre o inverso (som mais grave).'],
      timeSaverTip: 'Aproximação = Agudo (AAA: Aproxima, Aperta, Agudo).',
      trapAlert: 'Achar que o som fica mais rápido (a velocidade do som no ar é a mesma).'
    }
  },
  {
    id: 'fis-12',
    subject: 'fisica',
    topic: 'Termodinâmica / Máquinas Térmicas e Carnot',
    source: 'ENEM 2019',
    difficulty: 3,
    context: 'Uma máquina térmica teórica opera segundo o Ciclo de Carnot entre uma fonte quente a 600 K e uma fonte fria a 300 K.',
    question: 'Qual é o rendimento MÁXIMO TEÓRICO possível dessa máquina de Carnot?',
    options: [
      { letter: 'A', text: '25%' },
      { letter: 'B', text: '33%' },
      { letter: 'C', text: '50%' },
      { letter: 'D', text: '75%' },
      { letter: 'E', text: '100%' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Rendimento de Carnot: η = 1 - (T_fria / T_quente) = 1 - (300 / 600) = 1 - 0,5 = 0,50 = 50%!',
      stepByStep: ['1. η = 1 - (T_fria / T_quente).', '2. η = 1 - (300 / 600) = 1 - 1/2 = 0,5 = 50%.'],
      timeSaverTip: 'Carnot é sempre 1 menos a razão das temperaturas em Kelvin.',
      trapAlert: 'Nenhuma máquina térmica pode ter rendimento de 100% (2ª Lei da Termodinâmica).'
    }
  },
  {
    id: 'fis-13',
    subject: 'fisica',
    topic: 'Magnetismo / Força Magnética (Lorentz)',
    source: 'ENEM 2018',
    difficulty: 2,
    context: 'Uma partícula carregada positivamente penetra com velocidade v perpendicularmente às linhas de indução de um campo magnético uniforme B.',
    question: 'Qual é a trajetória descrita por essa partícula dentro da região do campo magnético?',
    options: [
      { letter: 'A', text: 'Movimento retilíneo uniformemente acelerado.' },
      { letter: 'B', text: 'Movimento circular uniforme (MCU), pois a força magnética atua como força centrípeta.' },
      { letter: 'C', text: 'Parábola aberta no sentido do campo elétrico residual.' },
      { letter: 'D', text: 'Repouso imediato por frenagem magnética.' },
      { letter: 'E', text: 'Movimento harmônico simples unidimensional.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Carga lançada a 90° com campo magnético faz CÍRCULO (MCU)! A força magnética (Fm = q·v·B) é sempre perpendicular à velocidade, funcionando como força centrípeta!',
      stepByStep: ['1. Fm = q · v · B · sen(90°) = q·v·B.', '2. Como Fm é perpendicular a v, ela altera apenas a direção, não o módulo da velocidade.', '3. A trajetória resultante é um Movimento Circular Uniforme.'],
      timeSaverTip: 'Ângulo de 90° com campo B = trajetória circular; paralelo (0°) = retilíneo.',
      trapAlert: 'Achar que a velocidade aumenta (campo magnético não realiza trabalho).'
    }
  },
  {
    id: 'fis-14',
    subject: 'fisica',
    topic: 'Eletrostática / Lei de Coulomb',
    source: 'ENEM 2020',
    difficulty: 1,
    context: 'Duas cargas elétricas puntiformes fixas no vácuo se repelem com uma força eletrostática de intensidade F quando separadas por uma distância d.',
    question: 'Se a distância entre essas cargas for REDUZIDA PELA METADE (d/2), qual será a nova intensidade da força de repulsão entre elas?',
    options: [
      { letter: 'A', text: 'F / 4' },
      { letter: 'B', text: 'F / 2' },
      { letter: 'C', text: '2 F' },
      { letter: 'D', text: '4 F' },
      { letter: 'E', text: '8 F' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Lei de Coulomb é o inverso do quadrado da distância (F ∝ 1/d²)! Metade da distância (1/2)² = 1/4 no denominador, o que QUADRUPLICA a força: 4F!',
      stepByStep: ['1. F = k · |q1 · q2| / d².', '2. F_novo = k · |q1 · q2| / (d/2)² = 4 · F.'],
      timeSaverTip: 'Aproximou pela metade? A força fica 4 vezes mais forte.',
      trapAlert: 'Achar que a força apenas dobra (2F).'
    }
  },
  {
    id: 'fis-15',
    subject: 'fisica',
    topic: 'Óptica / Miopia e Hipermetropia',
    source: 'ENEM 2019',
    difficulty: 1,
    context: 'Um estudante tem dificuldade para enxergar objetos distantes (quadro da sala de aula), pois as imagens dos objetos distantes se formam ANTES da retina do seu olho.',
    question: 'Qual é o vício de refração desse estudante e qual tipo de lente oftálmica deve ser receitada para corrigir sua visão?',
    options: [
      { letter: 'A', text: 'Hipermetropia, corrigida com lentes convergentes.' },
      { letter: 'B', text: 'Miopia, corrigida com lentes divergentes.' },
      { letter: 'C', text: 'Presbiopia, corrigida com lentes cilíndricas.' },
      { letter: 'D', text: 'Astigmatismo, corrigido com prismas esféricos.' },
      { letter: 'E', text: 'Miopia, corrigida com lentes biconvexas convergentes.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: MIOPIA = Imagem antes da retina (olho longo). Precisa espalhar a luz para trás → LENTE DIVERGENTE! Hipermetropia = imagem atrás da retina → lente convergente.',
      stepByStep: ['1. Dificuldade de longe + imagem antes da retina = Miopia.', '2. A lente divergente abre os raios para focar perfeitamente sobre a retina.'],
      timeSaverTip: 'Miopia usa Divergente (Mi-Di). Hipermetropia usa Convergente.',
      trapAlert: 'Confundir lente divergente com convergente.'
    }
  },
  {
    id: 'fis-16',
    subject: 'fisica',
    topic: 'Gravitação Universal / Leis de Kepler',
    source: 'ENEM 2020',
    difficulty: 2,
    context: 'De acordo com a 2ª Lei de Kepler (Lei das Áreas), a linha imaginária que liga o centro do Sol ao centro de um planeta varre áreas iguais em intervalos de tempo iguais.',
    question: 'Em decorrência dessa lei, quando um planeta em órbita elíptica se move do Afélio (ponto mais distante do Sol) para o Periélio (ponto mais próximo do Sol):',
    options: [
      { letter: 'A', text: 'Sua velocidade orbital escalar aumenta gradativamente, atingindo o valor máximo no Periélio.' },
      { letter: 'B', text: 'Sua velocidade escalar permanece rigorosamente uniforme e inalterada.' },
      { letter: 'C', text: 'Sua aceleração gravitacional se anula.' },
      { letter: 'D', text: 'Seu período de translação é reduzido à metade.' },
      { letter: 'E', text: 'Sua energia mecânica total dissipa-se na forma de calor estelar.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: "PERIÉLIO = PERTO = RÁPIDO (velocidade máxima)! AFÉLIO = AFASTADO = LENTO (velocidade mínima)."',
      stepByStep: ['1. Pela conservação do momento angular, a velocidade aumenta na aproximação.', '2. No Periélio o planeta viaja mais rápido para varrer a mesma área.'],
      timeSaverTip: 'Perto do Sol = máxima velocidade.',
      trapAlert: 'Achar que a velocidade de translação de um planeta é constante ao longo do ano.'
    }
  },
  {
    id: 'fis-17',
    subject: 'fisica',
    topic: 'Ondulatória / Fenômenos de Polarização',
    source: 'ENEM 2018',
    difficulty: 2,
    context: 'Óculos com lentes polarizadas são amplamente utilizados por motoristas e pescadores para eliminar o brilho excessivo da luz refletida na água ou no asfalto.',
    question: 'A polarização é um fenômeno ondulatório que pode ocorrer EXCLUSIVAMENTE em:',
    options: [
      { letter: 'A', text: 'Ondas longitudinais, como as ondas sonoras no ar.' },
      { letter: 'B', text: 'Ondas transversais, como as ondas eletromagnéticas da luz.' },
      { letter: 'C', text: 'Ondas mecânicas de ultrassom marinho.' },
      { letter: 'D', text: 'Qualquer tipo de perturbação periódica estacionária.' },
      { letter: 'E', text: 'Ondas gravitacionais de baixa amplitude apenas.' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: POLARIZAÇÃO SÓ ACONTECE COM ONDA TRANSVERSAL (LUZ)! Som é longitudinal e NUNCA pode ser polarizado!',
      stepByStep: ['1. Polarizar é filtrar uma direção de oscilação.', '2. Apenas ondas que vibram perpendicularmente à propagação (transversais) podem ser polarizadas.', '3. O som (longitudinal) vibra na mesma direção e não polariza.'],
      timeSaverTip: 'Som NUNCA polariza. Apenas ondas transversais polarizam.',
      trapAlert: 'Dizer que o som pode ser polarizado.'
    }
  },
  {
    id: 'fis-18',
    subject: 'fisica',
    topic: 'Dinâmica / Trabalho e Força Resultante',
    source: 'ENEM 2019',
    difficulty: 1,
    context: 'Um guindaste ergue verticalmente com velocidade constante de 2 m/s um contêiner de massa 2.000 kg até uma altura de 10 metros. Considere g = 10 m/s².',
    question: 'Qual é o trabalho realizado pela força do cabo de aço do guindaste nessa elevação?',
    options: [
      { letter: 'A', text: '20.000 J' },
      { letter: 'B', text: '40.000 J' },
      { letter: 'C', text: '100.000 J' },
      { letter: 'D', text: '200.000 J' },
      { letter: 'E', text: '400.000 J' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Trabalho contra a gravidade = variação da energia potencial: W = m · g · h = 2.000 × 10 × 10 = 200.000 Joules (200 kJ)!',
      stepByStep: ['1. Como a velocidade é constante, a força aplicada é igual ao peso: F = P = m·g = 20.000 N.', '2. Trabalho = F · d = 20.000 N × 10 m = 200.000 J.'],
      timeSaverTip: 'A velocidade de 2 m/s é distrator (não entra no cálculo de trabalho).',
      trapAlert: 'Tentar usar a velocidade de 2 m/s no meio da conta.'
    }
  },
  {
    id: 'fis-19',
    subject: 'fisica',
    topic: 'Eletromagnetismo / Indução de Faraday',
    source: 'ENEM 2020',
    difficulty: 3,
    context: 'As usinas hidrelétricas e eólicas geram energia elétrica em larga escala a partir do movimento rotatório de ímãs e bobinas.',
    question: 'O princípio físico que fundamenta a geração de corrente elétrica por meio do movimento de um ímã próximo a um condutor é a:',
    options: [
      { letter: 'A', text: 'Lei da Indução Eletromagnética de Faraday-Lenz.' },
      { letter: 'B', text: 'Lei de Coulomb da atração de cargas estáticas.' },
      { letter: 'C', text: 'Efeito Joule de aquecimento resistivo.' },
      { letter: 'D', text: 'Lei da gravitação newtoniana universal.' },
      { letter: 'E', text: 'Força de empuxo de Torricelli.' }
    ],
    correctAnswer: 'A',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Gerador, usina e ímã girando = LEI DA INDUÇÃO DE FARADAY! Variação do fluxo magnético no tempo induz corrente elétrica na espira!',
      stepByStep: ['1. A rotação do rotor altera o fluxo de campo magnético através das bobinas.', '2. Pela Lei de Faraday, essa variação induz uma força eletromotriz (fem).', '3. A Lei de Lenz determina que a corrente induzida se opõe à variação do fluxo.'],
      timeSaverTip: 'Usina hidrelétrica / transformador = Lei da Indução de Faraday.',
      trapAlert: 'Confundir com efeito Joule (que é perda em calor).'
    }
  },
  {
    id: 'fis-20',
    subject: 'fisica',
    topic: 'Termologia / Dilatação Térmica Linear',
    source: 'ENEM 2018',
    difficulty: 2,
    context: 'Trilhos de trem de aço de 20 metros de comprimento foram assentados a uma temperatura de 15°C. O coeficiente de dilatação linear do aço é α = 1,2 × 10⁻⁵ °C⁻¹.',
    question: 'Em um dia quente de verão em que a temperatura atinge 45°C, qual é a dilatação linear (aumento de comprimento) sofrida por cada barra de trilho?',
    options: [
      { letter: 'A', text: '0,36 mm' },
      { letter: 'B', text: '3,6 mm' },
      { letter: 'C', text: '7,2 mm' },
      { letter: 'D', text: '72 mm' },
      { letter: 'E', text: '144 mm' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: ΔL = L₀ · α · ΔT. Variação de temperatura: 45 - 15 = 30°C. ΔL = 20 × (1,2 × 10⁻⁵) × 30 = 600 × 1,2 × 10⁻⁵ = 720 × 10⁻⁵ m = 7,2 × 10⁻³ m = 7,2 mm!',
      stepByStep: ['1. ΔT = 45 - 15 = 30°C.', '2. ΔL = 20 · (1,2 · 10⁻⁵) · 30 = 7,2 · 10⁻³ metros.', '3. 7,2 × 10⁻³ m = 7,2 milímetros.'],
      timeSaverTip: 'Multiplique 20 × 30 = 600 primeiro. 600 × 1,2 = 720. 720 com 5 casas dá 7,2 mm.',
      trapAlert: 'Errar a conversão de metros para milímetros.'
    }
  }
];
