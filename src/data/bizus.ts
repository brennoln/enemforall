import { BizuTopic } from '../types';

export const bizusData: BizuTopic[] = [
  // ==================== MATEMÁTICA (GANHAR TEMPO RECORD + ENEM 2025) ====================
  {
    id: 'b-mat-1',
    subject: 'matematica',
    category: 'Matemática Básica',
    title: 'Porcentagem de Cabeça em 3 Segundos',
    coreConcept: 'Nunca arme regra de três para porcentagens simples (10%, 1%, 5%, 15%, 20%).',
    mnemonico: '⚡ "10% é só voltar 1 vírgula; 1% é voltar 2 vírgulas."',
    fastTechnique: 'Para 15% de 240: 10% = 24. A metade (5%) = 12. Some: 24 + 12 = 36. Na Q166 do ENEM 2025 (desconto de 80% seguido de 10%): multiplique 0,20 × 0,90 = 0,18 (paga 18%, desconto real de 82%)!',
    formulas: ['10% = x / 10', '1% = x / 100', 'Fator acumulado = f₁ × f₂'],
    classicQuestionType: 'Aumentos, descontos sucessivos (Q166 ENEM 2025) e imposto progressivo (Q150 ENEM 2025).'
  },
  {
    id: 'b-mat-2',
    subject: 'matematica',
    category: 'Matemática Básica',
    title: 'Escala e Conversão de Unidades sem Sofrimento',
    coreConcept: 'Escala é SEMPRE Distância no Mapa / Distância Real (na mesma unidade!).',
    mnemonico: '⚡ "De cm para km: corte 5 zeros!" | 1 m³ = 1.000 Litros | 1 dm³ = 1 Litro | 1 cm³ = 1 mL.',
    fastTechnique: 'Caiu 3 vezes no ENEM 2025 (Q136, Q165, Q174)! Na Q165 (escala de área 1 : 10.000): tire a raiz quadrada primeiro -> escala linear é 1 : 100! Na Q174 (caixa de descarga em dm): 1 dm³ já é 1 Litro direto!',
    formulas: ['E_linear = d / D', 'E_área = (E_linear)²', 'E_volume = (E_linear)³'],
    classicQuestionType: 'Maquetes (Q136), mapas com área (Q165) e reservatórios em decímetros (Q174).'
  },
  {
    id: 'b-mat-3',
    subject: 'matematica',
    category: 'Estatística',
    title: 'Mediana Vapt-Vupt & Média Ponderada',
    coreConcept: 'Mediana é o termo central APÓS colocar em ordem crescente (Rol). Se N é par, é a média dos dois centrais.',
    mnemonico: '⚡ "Risca o menor e o maior das pontas até sobrar o meio! Nunca pegue o meio sem ordenar!"',
    fastTechnique: 'Na Q148 do ENEM 2025 (12 dados na tabela 3x4): nem ordene os 12! Risque os 5 menores de cabeça (15, 19, 20, 21, 21) -> os 2 seguintes são o 6º e 7º termos (22 e 24) -> média = 23!',
    classicQuestionType: 'Tabelas de basquete (Q142), acidentes em rodovia (Q148) e gráficos de barras (Q155).'
  },
  {
    id: 'b-mat-4',
    subject: 'matematica',
    category: 'Geometria Espacial',
    title: 'Cilindros, Semicírculos e Caixas com Folga',
    coreConcept: 'Volume de Cilindro = π · R² · h. Embalagem quadrada com folga f = Diâmetro (2R) + 2f.',
    mnemonico: '⚡ "Deu DIÂMETRO? Divida por 2 ANTES de tudo! É semicírculo? Divida a área por 2!"',
    fastTechnique: 'Na Q177 do ENEM 2025 (túnel semicilíndrico): dividiu o diâmetro por 2 para achar o raio E dividiu a área por 2 porque é meio círculo! Na Q175 (caixa de torta): Lado = 2R + folga esquerda + folga direita!',
    formulas: ['V_cil = π · R² · h', 'A_semicírculo = (π · R²) / 2', 'L_caixa = 2R + 2·folga'],
    classicQuestionType: 'Túneis (Q177), caixas de confeitaria (Q175) e blocos cerâmicos (Q160).'
  },
  {
    id: 'b-mat-5',
    subject: 'matematica',
    category: 'Geometria Espacial',
    title: 'Relação de Euler nos Poliedros (V - A + F = 2)',
    coreConcept: 'Em todo poliedro convexo: Vértices - Arestas + Faces = 2. Cada aresta une 2 faces; cada vértice de grau k recebe k arestas.',
    mnemonico: '⚡ "Vamos Fazer Amor a 2" -> V + F = A + 2. E Arestas = (Soma dos lados ou graus dos vértices) / 2!',
    fastTechnique: 'Na Q141 do ENEM 2025: deu F = 20 faces e 12 vértices onde convergem 4 arestas -> A = (12 × 4)/2 = 24 arestas -> V + 20 = 24 + 2 => V = 6 vértices (Octaedro)!',
    formulas: ['V - A + F = 2', '2A = n₃·3 + n₄·4 + ...'],
    classicQuestionType: 'Poliedros estrelados, bolas de futebol e cristais (Q141 ENEM 2025).'
  },
  {
    id: 'b-mat-6',
    subject: 'matematica',
    category: 'Funções e Gráficos',
    title: 'Matar Funções Substituindo Pontos do Gráfico (Sem Álgebra!)',
    coreConcept: 'Quando a questão dá o gráfico e 5 fórmulas nas alternativas, NUNCA monte sistema linear: substitua (x, y) do gráfico!',
    mnemonico: '⚡ "Comece sempre testando x = 0 (onde corta o eixo y) e depois a raiz (onde y = 0)!"',
    fastTechnique: 'Na Q147 e Q159 do ENEM 2025: substituir um único ponto do gráfico eliminava 4 alternativas em 10 segundos! Na Q178 (parcelas do carro de 60 mil): testar n = 24 nas opções evitava Bhaskara!',
    formulas: ['f(0) = termo independente b', 'Coef. angular a = Δy / Δx'],
    classicQuestionType: 'Funções definidas por partes (Q147), funções periódicas (Q159) e equações (Q178).'
  },

  // ==================== FÍSICA (ALTA RECORRÊNCIA + ENEM 2025) ====================
  {
    id: 'b-fis-1',
    subject: 'fisica',
    category: 'Eletrodinâmica',
    title: 'Dimensionamento de Fusível/Disjuntor e Potência (i = P / U)',
    coreConcept: 'Aparelhos da casa ficam em PARALELO (mesma tensão U). A corrente total é a soma das correntes ou P_total / U.',
    mnemonico: '⚡ "Quem faz PIU é pinto: P = i · U => i = P / U!"',
    fastTechnique: 'Na Q135 do ENEM 2025: somou as potências dos aparelhos ligados juntos (2.310 W) e dividiu pela tensão da tomada (110 V) -> i = 21 A! Com a folga de 20% (+4,2 A) = 25,2 A -> fusível de 30 A!',
    formulas: ['P = U · i', 'U = R · i', 'R = ρ · L / A'],
    classicQuestionType: 'Disjuntores residenciais (Q135), choque elétrico (Q120) e geradores (Q104).'
  },
  {
    id: 'b-fis-2',
    subject: 'fisica',
    category: 'Ondulatória e Acústica',
    title: 'Equação Fundamental da Onda (v = λ · f) e Nível Sonoro (dB)',
    coreConcept: 'No mesmo meio a velocidade é constante (maior f = menor λ). Na escala decibel, somar +10 dB multiplica a intensidade por 10.',
    mnemonico: '⚡ "Vem Lamber a Ferida (v = λ · f)". Em dB: cada +10 dB = ×10 na intensidade I!',
    fastTechnique: 'Na Q105 do ENEM 2025: converteu f = 2,45 GHz = 2,45 × 10⁹ Hz e achou λ = v / f = 12,2 cm -> como o furo da tela (1,4 mm) é muito menor que 12,2 cm, a micro-onda não passa! Na Q115: de 10⁻¹² para 10⁻⁶ W/m² subiu 6 potências de 10 -> 60 dB!',
    formulas: ['v = λ · f', 'β = 10 · log(I / I₀)'],
    classicQuestionType: 'Tela do micro-ondas (Q105), batimentos de baleia (Q101) e decibéis (Q115).'
  },
  {
    id: 'b-fis-3',
    subject: 'fisica',
    category: 'Mecânica & Dinâmica',
    title: 'Plano Inclinado e Frenagem por Atrito',
    coreConcept: 'Em rampa sem motor: aceleração só depende de g, θ e μ (a MASSA CORTA!). Em pista horizontal: ΔS = v₀² / (2·μ·g).',
    mnemonico: '⚡ "Na rampa de Galileu e no escorregador, gordo e magro descem com a MESMA aceleração: a = g(sen θ - μ·cos θ)!"',
    fastTechnique: 'Na Q118 do ENEM 2025 (caminhão de 30 toneladas na rampa): a massa de 30.000 kg era DISTRATOR! Como cos θ = 0,8 -> sen θ = 0,6 (triângulo 3-4-5!), bastava fazer a = g(sen θ - μ·cos θ) e Torricelli!',
    formulas: ['P_x = m·g·sen θ', 'P_y = m·g·cos θ', 'v² = v₀² + 2·a·ΔS'],
    classicQuestionType: 'Caixa de brita para caminhões sem freio (Q118) e lançamento de projéteis (Q103).'
  },
  {
    id: 'b-fis-4',
    subject: 'fisica',
    category: 'Termologia e Óptica',
    title: 'Irradiação Térmica (Infravermelho) e Cores',
    coreConcept: 'No vácuo o calor SÓ viaja por IRRADIAÇÃO (ondas eletromagnéticas infravermelhas). Superfícies claras refletem; escuras absorvem.',
    mnemonico: '⚡ "Tem vácuo ou Sol? É IRRADIAÇÃO! Superfície espelhada/branca reflete radiação!"',
    fastTechnique: 'Na Q91 do ENEM 2025: o Sol aquece a Terra através do vácuo espacial por IRRADIAÇÃO (nunca condução!). Na Q97: a dor do calor ocorre quando a pele passa de 42 °C, seja por condução (tocar) ou irradiação (chegar perto)!',
    formulas: ['Q = m · c · ΔT', 'Q = m · L'],
    classicQuestionType: 'Aquecimento solar (Q91), garrafa térmica e sensação térmica (Q97).'
  },

  // ==================== QUÍMICA (MUITOS BIZUS RECORRENTES + ENEM 2025) ====================
  {
    id: 'b-qui-1',
    subject: 'quimica',
    category: 'Química Orgânica & Interações',
    title: 'Solubilidade em Água, Vitaminas e Surfactantes',
    coreConcept: 'Água é polar (faz ligação de hidrogênio). Quanto mais grupos -OH (hidroxila) e menor a cadeia carbônica, mais solúvel em água!',
    mnemonico: '⚡ "Mais -OH = Mais Amigo da Água (Hidrofilia)! Cauda longa de carbono = Amiga da Gordura (Lipofilia)!"',
    fastTechnique: 'Caiu em 2 questões seguidas no ENEM 2025! Na Q106: a substância mais solúvel em água é a que tem TRÊS grupos -OH! Na Q109: o melhor surfactante de limpeza de óleo é o que tem a MAIOR cadeia carbônica apolar!',
    classicQuestionType: 'Solubilidade de compostos fenólicos (Q106), biossurfactantes (Q109) e vitaminas C vs A (Q131).'
  },
  {
    id: 'b-qui-2',
    subject: 'quimica',
    category: 'Química Orgânica',
    title: 'Caráter Ácido-Base Orgânico e Descarboxilação',
    coreConcept: 'AMINAS (-NH₂) são BASES orgânicas! Ácidos carboxílicos (-COOH) são ácidos e podem perder CO₂ (descarboxilação).',
    mnemonico: '⚡ "Amina tem N de Amônia = BASE (reage com ácido!). Perdeu grupo -COOH = liberou gás CO₂!"',
    fastTechnique: 'Na Q117 do ENEM 2025: o cheiro de peixe vem de AMINAS voláteis (básicas) -> passa limão (ácido cítrico) para neutralizar! Na Q116: composto perdeu duas carboxilas (-COOH) -> o gás liberado na reação é o CO₂!',
    classicQuestionType: 'Limão no peixe / aminas (Q117) e degradação de ácidos orgânicos (Q116).'
  },
  {
    id: 'b-qui-3',
    subject: 'quimica',
    category: 'Eletroquímica',
    title: 'Pilhas e Reações Espontâneas (CRAO)',
    coreConcept: 'O elétron sempre viaja do Ânodo para o Cátodo. Quem tem MAIOR potencial de redução reduz; quem tem MENOR inverte e oxida.',
    mnemonico: '⚡ "CRAO": Cátodo Reduz (ganha e⁻) | Ânodo Oxida (perde e⁻). ΔE° = E°_maior - E°_menor > 0!',
    fastTechnique: 'Na Q123 do ENEM 2025 (bateria de íon-lítio): o Lítio tem o menor potencial (-3,0 V), logo na descarga ele OXIDA no ânodo (Li -> Li⁺ + e⁻) e o Cobalto (+1,0 V) REDUZ no cátodo! DDP = +1,0 - (-3,0) = 4,0 V!',
    formulas: ['ΔE° = E°(maior) - E°(menor)'],
    classicQuestionType: 'Baterias de celular de íon-lítio (Q123) e metal de sacrifício.'
  },
  {
    id: 'b-qui-4',
    subject: 'quimica',
    category: 'Físico-Química & Meio Ambiente',
    title: 'Solubilidade de Gases em Líquidos (Lei de Henry & Temperatura)',
    coreConcept: 'Gases são MAIS solúveis em água FRIA e sob ALTA pressão. Aquecer a água expulsa o gás dissolvido!',
    mnemonico: '⚡ "Pense no refrigerante: gelado e fechado segura o gás; quente e aberto perde todo o gás!"',
    fastTechnique: 'Caiu na Q129 do ENEM 2025! O gráfico da solubilidade do O₂ na água em função da temperatura é uma curva DECRESCENTE (quanto maior a temperatura da água, menor a concentração de O₂ dissolvido)!',
    classicQuestionType: 'Gráfico de O₂ dissolvido em lagos (Q129) e poluição térmica de usinas.'
  },
  {
    id: 'b-qui-5',
    subject: 'quimica',
    category: 'Físico-Química',
    title: 'Meia-Vida e Cinética Enzimática',
    coreConcept: 'A cada meia-vida (t₁/₂), a massa/concentração cai pela metade: m = m₀ / 2ⁿ. Enzimas têm temperatura e pH ótimos!',
    mnemonico: '⚡ "1 meia-vida = 50%; 2 meias-vidas = 25%; 3 meias-vidas = 12,5%!"',
    fastTechnique: 'Na Q114 do ENEM 2025 (agrotóxico com meia-vida de 10 dias): para cair de 80% para 20%, dividiu por 2 duas vezes (80% -> 40% -> 20%) = 2 meias-vidas = 20 dias! Na Q126: cruzou a faixa das enzimas e achou pH 7 e 40 °C!',
    formulas: ['m = m₀ / 2ⁿ', 'Tempo total = n × t₁/₂'],
    classicQuestionType: 'Degradação de pesticidas (Q114), radioatividade e enzimas (Q126).'
  },

  // ==================== BIOLOGIA (MUITOS BIZUS RECORRENTES + ENEM 2025) ====================
  {
    id: 'b-bio-1',
    subject: 'biologia',
    category: 'Ecologia & Conservação',
    title: 'Espécies Invasoras, Endemismo e Biomas Brasileiros',
    coreConcept: 'Espécie exótica invasora sem predador natural vence a nativa por competição (exclusão de Gause). Caatinga = plantas xerófilas.',
    mnemonico: '⚡ "Invasora reduz biodiversidade por competição! Caatinga = espinhos, cutícula grossa e perda de folhas na seca!"',
    fastTechnique: 'Caiu em 4 questões do ENEM 2025! Q92 (javali/coral-sol invasor compete com nativas), Q94 (Caatinga e adaptação à seca), Q111 (espécies endêmicas exclusivas) e Q122 (consumidor primário come planta)!',
    classicQuestionType: 'Espécies exóticas (Q92), Caatinga (Q94), Cerrado e cadeia alimentar (Q122).'
  },
  {
    id: 'b-bio-2',
    subject: 'biologia',
    category: 'Fisiologia & Imunologia',
    title: 'Vacina (Antígeno + Memória) vs Soro (Anticorpo Pronto)',
    coreConcept: 'Vacina contém o ANTÍGENO atenuado/inativado ou mRNA para induzir células de memória. Soro entrega anticorpos prontos.',
    mnemonico: '⚡ "Vacina ensina o corpo (Imunidade Ativa). Soro já vem pronto para salvar na hora (Imunidade Passiva)."',
    fastTechnique: 'Na Q93 do ENEM 2025 (diagrama da vacina de DNA/vetor viral): o passo final obrigatório de qualquer vacina é ativar a resposta imune adaptativa gerando anticorpos específicos e MEMÓRIA IMUNOLÓGICA!',
    classicQuestionType: 'Mecanismo de vacinas modernas (Q93) vs Soro antiofídico.'
  },
  {
    id: 'b-bio-3',
    subject: 'biologia',
    category: 'Parasitologia & Saúde Pública',
    title: 'Doenças Parasitárias e Seus Vetores/Hospedeiros Clássicos',
    coreConcept: 'Esquistossomose = caramujo Biomphalaria na lagoa. Dengue = Aedes. Chagas = Barbeiro. Malária = Anopheles.',
    mnemonico: '⚡ "Lagoa com caramujo + penetração ativa da cercária pela pele = ESQUISTOSSOMOSE (Barriga-d\'água)!"',
    fastTechnique: 'Caiu na Q98 do ENEM 2025! Viu no ciclo da doença um CARAMUJO aquático liberando larvas que entram pela pele dos pés na água doce? É Esquistossomose -> medida preventiva: saneamento básico!',
    classicQuestionType: 'Ciclo da esquistossomose com caramujo (Q98), dengue e malária.'
  },
  {
    id: 'b-bio-4',
    subject: 'biologia',
    category: 'Citologia & Bioenergética',
    title: 'Organelas Celulares e Fotossíntese (De Onde Vem o O₂?)',
    coreConcept: 'Lisossomo faz digestão intracelular/autofagia (regressão da cauda do girino). Na fotossíntese, o O₂ vem da quebra da ÁGUA (H₂O)!',
    mnemonico: '⚡ "Lisossomo = Lixeiro/Digestor! Na fotossíntese: usa H₂O -> libera O₂; bactéria usa H₂S -> libera Enxofre (S)!"',
    fastTechnique: 'Caiu em dose dupla no ENEM 2025! Na Q99: organela que digere lipídios na célula = LISOSSOMO! Na Q102: sulfo-bactéria usa H₂S no lugar de H₂O na fotossíntese -> em vez de liberar O₂, deposita grânulos de ENXOFRE (S)!',
    classicQuestionType: 'Função dos lisossomos (Q99) e fotossíntese bacteriana/vegetal (Q102).'
  },
  {
    id: 'b-bio-5',
    subject: 'biologia',
    category: 'Genética & Biotecnologia',
    title: 'Codominância (Fenótipo Misto) e Transgênicos',
    coreConcept: 'Na codominância, o heterozigoto expressa AMBOS os alelos simultaneamente (ex: sangue AB, pelagem malhada).',
    mnemonico: '⚡ "Intermediário mistura (vermelho + branco = rosa); Codominância mostra os DOIS juntos (vermelho E branco)!"',
    fastTechnique: 'Na Q121 do ENEM 2025: se os dois alelos produzem proteínas ativas simultaneamente no heterozigoto, é CODOMINÂNCIA! Na Q133: inserir gene de outra espécie para degradar poluente = Transgênico + Biorremediação!',
    classicQuestionType: 'Herança sem dominância/codominância (Q121) e transgênicos (Q133).'
  }
];
