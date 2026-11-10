import { Question } from '../../types';

export const mathQuestionsPart5: Question[] = [
  {
    id: 'mat-61',
    subject: 'matematica',
    topic: 'Álgebra / Equação Exponencial Simples',
    source: 'ENEM 2019',
    difficulty: 1,
    context: 'Uma colônia de bactérias dobra de tamanho a cada 3 horas. Inicialmente havia 500 bactérias.',
    question: 'Quantas horas serão necessárias para a população atingir 32.000 bactérias?',
    options: [
      { letter: 'A', text: '12 horas' },
      { letter: 'B', text: '15 horas' },
      { letter: 'C', text: '18 horas' },
      { letter: 'D', text: '21 horas' },
      { letter: 'E', text: '24 horas' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: 32.000 / 500 = 64 vezes maior. Como é dobra (potência de 2): 64 = 2⁶ (são 6 ciclos de duplicação!). Cada ciclo dura 3h: 6 × 3 = 18 horas!',
      stepByStep: ['1. Fator de crescimento: 32.000 / 500 = 64.', '2. 2^n = 64 → n = 6 ciclos.', '3. Tempo = 6 ciclos × 3 horas = 18 horas.'],
      timeSaverTip: 'Memorize as potências de 2: 2⁵ = 32, 2⁶ = 64.',
      trapAlert: 'Multiplicar 64 por 3.'
    }
  },
  {
    id: 'mat-62',
    subject: 'matematica',
    topic: 'Geometria Plana / Polígonos Regulares e Ângulo Interno',
    source: 'ENEM 2020',
    difficulty: 2,
    context: 'Um arquiteto projeta um piso decorativo formado por ladrilhos cerâmicos no formato de hexágonos regulares.',
    question: 'Qual é a medida do ÂNGULO INTERNO de cada um desses hexágonos regulares?',
    options: [
      { letter: 'A', text: '108°' },
      { letter: 'B', text: '120°' },
      { letter: 'C', text: '135°' },
      { letter: 'D', text: '144°' },
      { letter: 'E', text: '150°' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Calcule sempre o ÂNGULO EXTERNO primeiro! Ângulo externo = 360° / n = 360° / 6 = 60°. O interno é o que falta para 180°: 180° - 60° = 120°! Feito em 3 segundos!',
      stepByStep: ['1. Ângulo externo de polígono regular: θ_ext = 360° / n = 360 / 6 = 60°.', '2. Ângulo interno + Ângulo externo = 180°.', '3. θ_int = 180° - 60° = 120°.'],
      timeSaverTip: 'Calcular pelo ângulo externo (360/n) é 5x mais rápido do que fazer (n-2)·180/n.',
      trapAlert: 'Confundir hexágono (120°) com pentágono (108°) ou octógono (135°).'
    }
  },
  {
    id: 'mat-63',
    subject: 'matematica',
    topic: 'Aritmética / MMC (Mínimo Múltiplo Comum)',
    source: 'ENEM 2018',
    difficulty: 1,
    context: 'Três linhas de ônibus partem juntas de um terminal às 6h da manhã. O ônibus A parte a cada 12 minutos, o ônibus B a cada 15 minutos e o ônibus C a cada 20 minutos.',
    question: 'A que horas os três ônibus partirão juntos novamente pela primeira vez?',
    options: [
      { letter: 'A', text: '6h45' },
      { letter: 'B', text: '7h00' },
      { letter: 'C', text: '7h15' },
      { letter: 'D', text: '7h30' },
      { letter: 'E', text: '8h00' }
    ],
    correctAnswer: 'B',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Encontro simultâneo = MMC(12, 15, 20) = 60 minutos (1 hora exata!). Se partiram às 6h00, o próximo encontro será às 7h00!',
      stepByStep: ['1. MMC de 12, 15 e 20 é 60 minutos.', '2. 60 minutos = 1 hora.', '3. 6h00 + 1h = 7h00.'],
      timeSaverTip: '20 × 3 = 60, que divide 15 (4) e 12 (5). Dá pra ver o 60 de cabeça.',
      trapAlert: 'Somar os tempos (12 + 15 + 20 = 47).'
    }
  },
  {
    id: 'mat-64',
    subject: 'matematica',
    topic: 'Geometria Espacial / Projeção Ortogonal',
    source: 'ENEM 2019',
    difficulty: 2,
    context: 'Um helicóptero sobrevoa um campo de futebol plano ao meio-dia (com o Sol a pino, raios solares perfeitamente verticais), realizando uma trajetória helicoidal ascendente em torno de um mastro central.',
    question: 'A projeção ortogonal da sombra da trajetória do helicóptero sobre o solo do campo de futebol descreve:',
    options: [
      { letter: 'A', text: 'Uma reta oblíqua ascendente.' },
      { letter: 'B', text: 'Uma parábola com vértice no mastro.' },
      { letter: 'C', text: 'Uma circunferência centrada na base do mastro.' },
      { letter: 'D', text: 'Uma elipse descentralizada.' },
      { letter: 'E', text: 'Um único ponto estático.' }
    ],
    correctAnswer: 'C',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Projeção com sol a pino achata a altura Z (ignora o subir). Vista de cima, uma espiral/hélice ao redor de um mastro é um CÍRCULO perfeito (circunferência)!',
      stepByStep: ['1. A hélice tem coordenadas (R cos t, R sen t, h·t).', '2. A projeção vertical no plano do solo descarta a altura z.', '3. Sobram apenas as coordenadas circulares (R cos t, R sen t), que formam uma circunferência.'],
      timeSaverTip: 'Projeção ortogonal no chão é olhar o objeto de cima para baixo.',
      trapAlert: 'Achar que a sombra sobe (o chão é plano).'
    }
  },
  {
    id: 'mat-65',
    subject: 'matematica',
    topic: 'Estatística / Média com Adição de Novos Valores',
    source: 'ENEM 2020',
    difficulty: 2,
    context: 'Em uma sala com 9 alunos, a média das notas em um simulado foi de 7,0. Um décimo aluno fez a prova em segunda chamada e, com a inclusão de sua nota, a nova média da turma de 10 alunos subiu para 7,2.',
    question: 'Qual foi a nota obtida por esse décimo aluno?',
    options: [
      { letter: 'A', text: '7,2' },
      { letter: 'B', text: '8,0' },
      { letter: 'C', text: '8,5' },
      { letter: 'D', text: '9,0' },
      { letter: 'E', text: '10,0' }
    ],
    correctAnswer: 'D',
    explanation: {
      quickHack: '⚡ BIZU RELÂMPAGO: Soma antiga dos 9 alunos = 9 × 7 = 63. Nova soma dos 10 alunos = 10 × 7,2 = 72. A nota do aluno novo é a diferença: 72 - 63 = 9,0!',
      stepByStep: ['1. Soma antiga: 9 × 7,0 = 63 pontos.', '2. Soma nova: 10 × 7,2 = 72 pontos.', '3. Nota do novo aluno: 72 - 63 = 9,0.'],
      timeSaverTip: 'Multiplique as médias pelas quantidades e subtraia os totais.',
      trapAlert: 'Achar que o aluno tirou 7,4 (apenas somando a diferença).'
    }
  }
];
