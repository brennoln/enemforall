import { Subject } from '../types';

export interface VideoLesson {
  id: string;
  subject: Subject;
  topic: string;
  title: string;
  teacher: string;
  channelName: string;
  description: string;
  durationHint: string;
  level: 'Base' | 'Essencial' | 'Aprofundamento';
  url: string;
  channelUrl: string;
  isDirectPlaylist?: boolean;
}

export const videoLessonsData: VideoLesson[] = [
  // ===================== MATEMÁTICA =====================
  {
    id: 'mat-vid-1',
    subject: 'matematica',
    topic: 'Matemática Básica & Porcentagem',
    title: 'Razão, Proporção, Regra de 3 e Porcentagem para o ENEM',
    teacher: 'Prof. Ferretto',
    channelName: 'Professor Ferretto',
    description:
      'A base que resolve mais de 40% da prova de Matemática. Aprenda a armar regra de três, calcular aumentos/descontos sucessivos e ler gráficos sem errar conta básica.',
    durationHint: 'Playlist do zero',
    level: 'Base',
    url: 'https://www.youtube.com/results?search_query=Professor+Ferretto+Matematica+Basica+Porcentagem+ENEM+playlist',
    channelUrl: 'https://www.youtube.com/@professorferretto/playlists',
  },
  {
    id: 'mat-vid-2',
    subject: 'matematica',
    topic: 'Geometria Plana & Espacial',
    title: 'Áreas, Volumes (Prisma, Cilindro, Cone) e Teorema de Pitágoras',
    teacher: 'Prof. Sandro Curió',
    channelName: 'Dicasdemat Sandro Curió',
    description:
      'Explicação direta ao ponto com macetes visuais para nunca mais confundir área com volume nem esquecer conversão de litros para m³.',
    durationHint: 'Aulas curtas + macetes',
    level: 'Essencial',
    url: 'https://www.youtube.com/results?search_query=Sandro+Curio+Geometria+Plana+Espacial+ENEM+playlist',
    channelUrl: 'https://www.youtube.com/@SandroCurio/playlists',
  },
  {
    id: 'mat-vid-3',
    subject: 'matematica',
    topic: 'Funções (1º e 2º Grau)',
    title: 'Função Afim, Função Quadrática, Vértice e Leitura de Gráficos',
    teacher: 'Prof. Paulo Pereira',
    channelName: 'Equaciona com Paulo Pereira',
    description:
      'Passo a passo completo de como transformar problemas de texto em função do 1º grau e achar máximo/mínimo na parábola.',
    durationHint: 'Curso em módulos',
    level: 'Essencial',
    url: 'https://www.youtube.com/results?search_query=Equaciona+Paulo+Pereira+Funcao+1+e+2+grau+ENEM+playlist',
    channelUrl: 'https://www.youtube.com/@EquacionacomPauloPereira/playlists',
  },
  {
    id: 'mat-vid-4',
    subject: 'matematica',
    topic: 'Estatística & Probabilidade',
    title: 'Média, Mediana, Moda, Desvio e Probabilidade no ENEM',
    teacher: 'Prof. Sandro Curió',
    channelName: 'Dicasdemat Sandro Curió',
    description:
      'Domine as questões garantidas da prova: como ordenar dados para mediana, interpretar tabelas e calcular probabilidade simples e condicional.',
    durationHint: 'Foco em revisão rápida',
    level: 'Base',
    url: 'https://www.youtube.com/results?search_query=Sandro+Curio+Estatistica+Probabilidade+ENEM+playlist',
    channelUrl: 'https://www.youtube.com/@SandroCurio/playlists',
  },
  {
    id: 'mat-vid-5',
    subject: 'matematica',
    topic: 'Análise Combinatória',
    title: 'Princípio Fundamental da Contagem, Permutação, Arranjo e Combinação',
    teacher: 'Prof. Paulo Pereira',
    channelName: 'Equaciona com Paulo Pereira',
    description:
      'Aprenda de vez quando a ordem importa ou não e resolva problemas de senhas, filas e comissões sem ficar travado em fórmulas.',
    durationHint: 'Playlist em sequência',
    level: 'Aprofundamento',
    url: 'https://www.youtube.com/results?search_query=Equaciona+Paulo+Pereira+Analise+Combinatoria+playlist',
    channelUrl: 'https://www.youtube.com/@EquacionacomPauloPereira/playlists',
  },
  {
    id: 'mat-vid-6',
    subject: 'matematica',
    topic: 'Trigonometria & Triângulo Retângulo',
    title: 'Teorema de Pitágoras, Seno, Cosseno, Tangente e Ângulos Notáveis',
    teacher: 'Prof. Ferretto',
    channelName: 'Professor Ferretto',
    description:
      'Explicação completa para calcular alturas, rampas e distâncias no triângulo retângulo usando SOH CAH TOA e a tabelinha 30°, 45°, 60°.',
    durationHint: 'Teoria + exercícios',
    level: 'Essencial',
    url: 'https://www.youtube.com/results?search_query=Professor+Ferretto+Trigonometria+Triangulo+Retangulo+playlist',
    channelUrl: 'https://www.youtube.com/@professorferretto/playlists',
  },
  {
    id: 'mat-vid-7',
    subject: 'matematica',
    topic: 'Matemática Financeira',
    title: 'Juros Simples, Juros Compostos, Montante e Financiamentos no ENEM',
    teacher: 'Prof. Sandro Curió',
    channelName: 'Dicasdemat Sandro Curió',
    description:
      'Entenda como os juros compostos funcionam na prática e resolva questões de empréstimos, parcelas e descontos comerciais.',
    durationHint: 'Aulas diretas',
    level: 'Base',
    url: 'https://www.youtube.com/results?search_query=Sandro+Curio+Matematica+Financeira+Juros+ENEM+playlist',
    channelUrl: 'https://www.youtube.com/@SandroCurio/playlists',
  },

  // ===================== BIOLOGIA =====================
  {
    id: 'bio-vid-1',
    subject: 'biologia',
    topic: 'Ecologia & Meio Ambiente',
    title: 'Cadeias Alimentares, Ciclos Biogeoquímicos e Impactos Ambientais',
    teacher: 'Prof. Samuel Cunha',
    channelName: 'Biologia com Samuel Cunha',
    description:
      'O assunto número 1 de Biologia no ENEM. Veja efeito estufa, chuva ácida, eutrofização e relações ecológicas com linguagem simples e mapas mentais.',
    durationHint: 'Playlist completa',
    level: 'Base',
    url: 'https://www.youtube.com/results?search_query=Biologia+com+Samuel+Cunha+Ecologia+ENEM+playlist',
    channelUrl: 'https://www.youtube.com/@BiologiacomSamuelCunha',
  },
  {
    id: 'bio-vid-2',
    subject: 'biologia',
    topic: 'Citologia & Metabolismo',
    title: 'Organelas Celulares, Membrana Plasmática, Respiração e Fotossíntese',
    teacher: 'Prof. Guilherme Goulart',
    channelName: 'Prof. Guilherme Goulart - Biologia',
    description:
      'Módulo super organizado explicando osmose, transporte ativo/passivo, papel de cada organela e como a célula produz energia (ATP).',
    durationHint: 'Módulo estruturado',
    level: 'Essencial',
    url: 'https://www.youtube.com/results?search_query=Prof+Guilherme+Goulart+Citologia+Biologia+Celular+playlist',
    channelUrl: 'https://www.youtube.com/@ProfGuiGoulart',
  },
  {
    id: 'bio-vid-3',
    subject: 'biologia',
    topic: 'Genética & Biotecnologia',
    title: '1ª Lei de Mendel, Heredogramas, Sistema ABO, Transgênicos e PCR',
    teacher: 'Prof. Guilherme Goulart',
    channelName: 'Prof. Guilherme Goulart - Biologia',
    description:
      'Aprenda a resolver cruzamentos genéticos sem decorar e entenda terapia gênica, clonagem e vacinas de DNA/RNA.',
    durationHint: 'Teoria + questões',
    level: 'Aprofundamento',
    url: 'https://www.youtube.com/results?search_query=Prof+Guilherme+Goulart+Genetica+Biotecnologia+ENEM+playlist',
    channelUrl: 'https://www.youtube.com/@ProfGuiGoulart',
  },
  {
    id: 'bio-vid-4',
    subject: 'biologia',
    topic: 'Imunologia & Saúde Pública',
    title: 'Vacinas x Soros, Virose, Bacteriose e Parasitoses Brasileiras',
    teacher: 'Prof. Samuel Cunha',
    channelName: 'Biologia com Samuel Cunha',
    description:
      'Diferença entre imunização ativa e passiva, além das doenças que mais aparecem no ENEM (dengue, malária, esquistossomose, doença de Chagas).',
    durationHint: 'Direto ao ponto',
    level: 'Base',
    url: 'https://www.youtube.com/results?search_query=Biologia+com+Samuel+Cunha+Imunologia+Vacina+Soro+Doencas+playlist',
    channelUrl: 'https://www.youtube.com/@BiologiacomSamuelCunha',
  },
  {
    id: 'bio-vid-5',
    subject: 'biologia',
    topic: 'Evolução & Seleção Natural',
    title: 'Darwin, Lamarck, Especiação e Resistência Bacteriana',
    teacher: 'Prof. Samuel Cunha',
    channelName: 'Biologia com Samuel Cunha',
    description:
      'Nunca mais caia em pegadinhas entre Darwin e Lamarck. Veja como o ambiente seleciona características adaptativas.',
    durationHint: 'Playlist completa',
    level: 'Essencial',
    url: 'https://www.youtube.com/results?search_query=Biologia+com+Samuel+Cunha+Evolucao+ENEM+playlist',
    channelUrl: 'https://www.youtube.com/@BiologiacomSamuelCunha',
  },
  {
    id: 'bio-vid-6',
    subject: 'biologia',
    topic: 'Fisiologia Humana & Botânica',
    title: 'Digestão, Sistema Circulatório, Hormônios e Fisiologia Vegetal',
    teacher: 'Prof. Guilherme Goulart',
    channelName: 'Prof. Guilherme Goulart - Biologia',
    description:
      'Aulas aprofundadas e visuais sobre funcionamento dos órgãos humanos, insulina/glucagon, xilema, floema e estômatos.',
    durationHint: 'Módulo estruturado',
    level: 'Aprofundamento',
    url: 'https://www.youtube.com/results?search_query=Prof+Guilherme+Goulart+Fisiologia+Humana+Botanica+playlist',
    channelUrl: 'https://www.youtube.com/@ProfGuiGoulart',
  },

  // ===================== QUÍMICA =====================
  {
    id: 'qui-vid-1',
    subject: 'quimica',
    topic: 'Estequiometria & Eletroquímica',
    title: 'Mol, Cálculos Estequiométricos, Pilhas e Eletrólise',
    teacher: 'Prof. Gabriel Cabral',
    channelName: 'Professor Gabriel Cabral',
    description:
      'Playlist direta com a didática leve do Prof. Cabral para perder o medo de massa molar, rendimento, pureza e funcionamento de pilhas.',
    durationHint: 'Playlist no YouTube',
    level: 'Essencial',
    url: 'https://www.youtube.com/playlist?list=PLrnzSMo6XkAhFjjNjnmRg2nEQR7A6JywH',
    channelUrl: 'https://www.youtube.com/@ProfessorGabrielCabral/playlists',
    isDirectPlaylist: true,
  },
  {
    id: 'qui-vid-2',
    subject: 'quimica',
    topic: 'Química Orgânica',
    title: 'Cadeias Carbônicas, Funções Orgânicas, Isomeria e Reações',
    teacher: 'Prof. Gabriel Cabral',
    channelName: 'Professor Gabriel Cabral',
    description:
      'Aprenda a bater o olho na molécula e identificar álcool, ácido carboxílico, éster, amina, amida e reações do cotidiano (saponificação e esterificação).',
    durationHint: 'Módulo completo',
    level: 'Essencial',
    url: 'https://www.youtube.com/results?search_query=Professor+Gabriel+Cabral+Quimica+Organica+ENEM+playlist',
    channelUrl: 'https://www.youtube.com/@ProfessorGabrielCabral/playlists',
  },
  {
    id: 'qui-vid-3',
    subject: 'quimica',
    topic: 'Soluções, pH & Equilíbrio',
    title: 'Concentração Comum, Molaridade, Diluição e Escala de pH',
    teacher: 'Prof. Paulo Valim',
    channelName: 'Química em Ação - Paulo Valim',
    description:
      'Entenda como calcular concentração em g/L e mol/L, além de neutralização ácido-base e chuva ácida cobrados no ENEM.',
    durationHint: 'Playlists por assunto',
    level: 'Essencial',
    url: 'https://www.youtube.com/@paulovalim/playlists',
    channelUrl: 'https://www.youtube.com/@paulovalim/playlists',
  },
  {
    id: 'qui-vid-4',
    subject: 'quimica',
    topic: 'Curso Completo de Química',
    title: 'Revisão Geral de Química para o ENEM (do Básico ao Avançado)',
    teacher: 'Mestres do ENEM',
    channelName: 'Mestres do ENEM',
    description:
      'Playlist completa reunindo ligações químicas, interações intermoleculares, termoquímica e revisão intensiva para a prova.',
    durationHint: 'Playlist completa',
    level: 'Base',
    url: 'https://www.youtube.com/playlist?list=PL8Sb1J47vKz7VYQxr3IoEsi6sF7eudvc3',
    channelUrl: 'https://www.youtube.com/playlist?list=PL8Sb1J47vKz7VYQxr3IoEsi6sF7eudvc3',
    isDirectPlaylist: true,
  },
  {
    id: 'qui-vid-5',
    subject: 'quimica',
    topic: 'Separação de Misturas & Petróleo',
    title: 'Filtração, Decantação, Destilação Fracionada e Tratamento de Água',
    teacher: 'Prof. Gabriel Cabral',
    channelName: 'Professor Gabriel Cabral',
    description:
      'Tudo sobre como separar misturas homogêneas e heterogêneas, além do refino do petróleo e etapas da Estação de Tratamento de Água.',
    durationHint: 'Aulas objetivas',
    level: 'Base',
    url: 'https://www.youtube.com/results?search_query=Professor+Gabriel+Cabral+Separacao+de+Misturas+ENEM+playlist',
    channelUrl: 'https://www.youtube.com/@ProfessorGabrielCabral/playlists',
  },
  {
    id: 'qui-vid-6',
    subject: 'quimica',
    topic: 'Cinética, Equilíbrio & Ambiental',
    title: 'Velocidade das Reações, Catalisador, Le Chatelier, Polímeros e Chuva Ácida',
    teacher: 'Prof. Paulo Valim',
    channelName: 'Química em Ação - Paulo Valim',
    description:
      'Entenda o que acelera uma reação, deslocamento de equilíbrio químico e os principais temas ambientais do ENEM.',
    durationHint: 'Playlists por assunto',
    level: 'Aprofundamento',
    url: 'https://www.youtube.com/results?search_query=Paulo+Valim+Cinetica+Quimica+Equilibrio+ENEM+playlist',
    channelUrl: 'https://www.youtube.com/@paulovalim/playlists',
  },

  // ===================== FÍSICA =====================
  {
    id: 'fis-vid-1',
    subject: 'fisica',
    topic: 'Cinemática & Mecânica',
    title: 'Velocidade Média, MRU, MRUV, Gráficos e Queda Livre',
    teacher: 'Prof. Marcelo Boaro',
    channelName: 'Professor Boaro',
    description:
      'Playlist clássica de Cinemática com teoria detalhada e exercícios resolvidos passo a passo para construir uma base sólida em Mecânica.',
    durationHint: 'Playlist completa',
    level: 'Base',
    url: 'https://www.youtube.com/playlist?list=PLzjR7HXQnrcf1rHb6E33Rbo5xP7ZbMM6s',
    channelUrl: 'https://www.youtube.com/@professorboaro/playlists',
    isDirectPlaylist: true,
  },
  {
    id: 'fis-vid-2',
    subject: 'fisica',
    topic: 'Eletrodinâmica & Circuitos',
    title: 'Corrente, Tensão, Leis de Ohm, Potência Elétrica e Consumo (kWh)',
    teacher: 'Prof. Marcelo Boaro',
    channelName: 'Professor Boaro',
    description:
      'Domine o tema mais cobrado de Física no ENEM: associação de resistores em série/paralelo, disjuntores e cálculo da conta de luz.',
    durationHint: 'Playlist completa',
    level: 'Essencial',
    url: 'https://www.youtube.com/playlist?list=PLzjR7HXQnrceLqL1w8r2wzJ5fFf9tWz-e',
    channelUrl: 'https://www.youtube.com/@professorboaro/playlists',
    isDirectPlaylist: true,
  },
  {
    id: 'fis-vid-3',
    subject: 'fisica',
    topic: 'Ondulatória & Acústica',
    title: 'Equação Fundamental (v = λ·f), Fenômenos Ondulatórios e Som',
    teacher: 'Prof. Marcelo Boaro',
    channelName: 'Professor Boaro',
    description:
      'Reflexão, refração, difração, interferência, ressonância e efeito Doppler explicados com exemplos reais do ENEM.',
    durationHint: 'Playlist completa',
    level: 'Essencial',
    url: 'https://www.youtube.com/playlist?list=PLzjR7HXQnrcdajHidI1DNX4xZkengbH1f',
    channelUrl: 'https://www.youtube.com/@professorboaro/playlists',
    isDirectPlaylist: true,
  },
  {
    id: 'fis-vid-4',
    subject: 'fisica',
    topic: 'Termologia & Calorimetria',
    title: 'Calor Sensível, Calor Latente, Trocas de Calor e Propagação',
    teacher: 'Prof. Marcelo Boaro',
    channelName: 'Professor Boaro',
    description:
      'Curso completo de Física do ENEM cobrindo escalas termométricas, condução/convecção/irradiação e máquinas térmicas.',
    durationHint: 'Playlist completa',
    level: 'Base',
    url: 'https://www.youtube.com/playlist?list=PLzjR7HXQnrccNvQPKqmf5DIgHIB2gEtv8',
    channelUrl: 'https://www.youtube.com/@professorboaro/playlists',
    isDirectPlaylist: true,
  },
  {
    id: 'fis-vid-5',
    subject: 'fisica',
    topic: 'Dinâmica & Energia Mecânica',
    title: 'Leis de Newton, Força de Atrito, Trabalho e Conservação de Energia',
    teacher: 'Prof. Marcelo Boaro',
    channelName: 'Professor Boaro',
    description:
      'Entenda inércia, F = m·a, ação e reação, energia cinética/potencial e como aplicar tudo isso em problemas reais de carros, rampas e quedas.',
    durationHint: 'Playlist completa',
    level: 'Essencial',
    url: 'https://www.youtube.com/results?search_query=Professor+Boaro+Leis+de+Newton+Energia+Mecanica+playlist',
    channelUrl: 'https://www.youtube.com/@professorboaro/playlists',
  },
  {
    id: 'fis-vid-6',
    subject: 'fisica',
    topic: 'Óptica & Hidrostática',
    title: 'Espelhos, Lentes (Miopia/Hipermetropia), Pressão e Empuxo',
    teacher: 'Prof. Marcelo Boaro',
    channelName: 'Professor Boaro',
    description:
      'Veja por que os objetos têm cor, qual lente corrige cada problema de visão e por que um navio pesado flutua usando o Princípio de Arquimedes.',
    durationHint: 'Playlist completa',
    level: 'Aprofundamento',
    url: 'https://www.youtube.com/results?search_query=Professor+Boaro+Optica+Hidrostatica+ENEM+playlist',
    channelUrl: 'https://www.youtube.com/@professorboaro/playlists',
  },
];
