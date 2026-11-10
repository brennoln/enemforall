import { BizuTopic } from '../types';

export const bizusData: BizuTopic[] = [
  // ==================== MATEMÁTICA (GANHAR TEMPO RECORD) ====================
  {
    id: 'b-mat-1',
    subject: 'matematica',
    category: 'Matemática Básica',
    title: 'Porcentagem de Cabeça em 3 Segundos',
    coreConcept: 'Nunca arme regra de três para porcentagens simples (10%, 1%, 5%, 15%, 20%).',
    mnemonico: '⚡ "10% é só voltar 1 vírgula; 1% é voltar 2 vírgulas."',
    fastTechnique: 'Para 15% de 240: 10% = 24. A metade (5%) = 12. Some: 24 + 12 = 36. Feito em 3 segundos sem rabiscar nada!',
    formulas: ['10% = x / 10', '1% = x / 100', '20% = (10%) × 2'],
    classicQuestionType: 'Aumentos, descontos de lojas e gráficos de faturamento.'
  },
  {
    id: 'b-mat-2',
    subject: 'matematica',
    category: 'Matemática Básica',
    title: 'Escala e Conversão de Unidades sem Sofrimento',
    coreConcept: 'Escala é SEMPRE Distância no Mapa / Distância Real (na mesma unidade!).',
    mnemonico: '⚡ "D-M-R": D = Desenho / Real. 1 m³ = 1.000 Litros | 1 cm³ = 1 mL.',
    fastTechnique: 'Se a escala for 1 : 50.000, 1 cm no mapa = 50.000 cm reais. Para passar para metros, corte 2 zeros (500 m). Para km, corte mais 3 zeros (0,5 km).',
    formulas: ['E = d / D', 'Área: Escala ao quadrado (E²)', 'Volume: Escala ao cubo (E³)'],
    classicQuestionType: 'Mapas, maquetes e plantas de apartamentos.'
  },
  {
    id: 'b-mat-3',
    subject: 'matematica',
    category: 'Estatística',
    title: 'Mediana Vapt-Vupt',
    coreConcept: 'Mediana é o valor central APÓS colocar em ordem crescente (Rol).',
    mnemonico: '⚡ "Se tem 7 números, o do meio é o 4º. Se tem 8, soma o 4º e 5º e divide por 2."',
    fastTechnique: 'Economize tempo: não precisa ordenar a lista toda! Basta ir riscando o menor e o maior das pontas simultaneamente até sobrar o centro.',
    classicQuestionType: 'Tabelas com notas, temperaturas ou produção mensal de fábricas.'
  },
  {
    id: 'b-mat-4',
    subject: 'matematica',
    category: 'Geometria Espacial',
    title: 'O Fantástico Mundo dos Cilindros',
    coreConcept: 'Volume de Cilindro = Área da base circular vezes a altura.',
    mnemonico: '⚡ V = π · r² · h. Cuidado: se a questão der o DIÂMETRO, divida por 2 pra achar o RAIO antes!',
    fastTechnique: 'O ENEM quase sempre manda usar π = 3. Isso simplifica tudo para multiplicação com inteiros.',
    formulas: ['V = π · r² · h', '1 m³ = 1.000 Litros'],
    classicQuestionType: 'Cisternas, latas de refrigerante e caixas d\'água.'
  },
  {
    id: 'b-mat-5',
    subject: 'matematica',
    category: 'Geometria Espacial',
    title: 'Tudo que tem Bico Divide por 3',
    coreConcept: 'Cone e Pirâmide têm volume igual a um terço do prisma correspondente.',
    mnemonico: '⚡ "Tem biquinho fino? Divide por 3!"',
    fastTechnique: 'Calcule a base × altura normalmente e só dê o corte dividindo por 3 no final.',
    formulas: ['V_cone = (π · r² · h) / 3', 'V_pirâmide = (A_base · h) / 3'],
    classicQuestionType: 'Casquinha de sorvete, silos de grãos cônicos e pirâmides.'
  },

  // ==================== QUÍMICA (MUITOS BIZUS RECORRENTES) ====================
  {
    id: 'b-qui-1',
    subject: 'quimica',
    category: 'Química Orgânica',
    title: 'Identificação Relâmpago de Funções',
    coreConcept: 'A pegadinha favorita do ENEM é diferenciar Fenol de Álcool e Amida de Amina.',
    mnemonico: '⚡ -OH em anel benzênico = FENOL. -OH em carbono saturado = ÁLCOOL. N ligado a C=O = AMIDA.',
    fastTechnique: 'Viu o grupo C=O ligado a Nitrogênio? Risque qualquer alternativa que fale "amina". É AMIDA na lata!',
    classicQuestionType: 'Fórmulas estruturais de remédios (aspirina, paracetamol, adrenalina).'
  },
  {
    id: 'b-qui-2',
    subject: 'quimica',
    category: 'Soluções e Meio Ambiente',
    title: 'Escala de pH Sem Calcular Logaritmo',
    coreConcept: 'O expoente da concentração [H⁺] vira o próprio pH.',
    mnemonico: '⚡ Se [H⁺] = 10⁻³ mol/L, então pH = 3. Cada unidade de pH a menos = 10 VEZES mais ácido!',
    fastTechnique: 'De pH 5 para pH 3 não é 2 vezes mais ácido: é 10² = 100 vezes mais concentrado!',
    formulas: ['pH = -log[H⁺]', 'pH + pOH = 14'],
    classicQuestionType: 'Chuva ácida, correção de solo com calcário, acidez estomacal.'
  },
  {
    id: 'b-qui-3',
    subject: 'quimica',
    category: 'Eletroquímica',
    title: 'Pilhas e Reações Espontâneas (CRAO)',
    coreConcept: 'O elétron sempre viaja do Ânodo para o Cátodo. A pilha é um processo espontâneo (ΔE > 0).',
    mnemonico: '⚡ "CRAO": Cátodo Reduz (ganha e-) | Ânodo Oxida (perde e-). Vogal com vogal, consoante com consoante!',
    fastTechnique: 'd.d.p. da pilha: ΔE° = E°_maior - E°_menor. O resultado SEMPRE tem que dar POSITIVO!',
    formulas: ['ΔE° = E°(redução maior) - E°(redução menor)'],
    classicQuestionType: 'Pilhas alcalinas, corrosão de cascos de navio (metal de sacrifício).'
  },
  {
    id: 'b-qui-4',
    subject: 'quimica',
    category: 'Eletroquímica',
    title: 'Metal de Sacrifício e Proteção Contra Corrosão',
    coreConcept: 'O metal de sacrifício deve ter MENOR potencial de redução (maior tendência de oxidar) que o ferro.',
    mnemonico: '⚡ "Quem se sacrifica oxida no lugar do ferro: Zinco (galvanização) e Magnésio."',
    fastTechnique: 'Na questão de corrosão de casco de navio ou cano de ferro enterrado: escolha o metal com potencial de redução mais negativo que o do ferro!',
    classicQuestionType: 'Cascos de embarcações, tubulações subterrâneas e latas de conserva.'
  },
  {
    id: 'b-qui-5',
    subject: 'quimica',
    category: 'Química Orgânica & Propriedades Físicas',
    title: 'Polaridade e Forças Intermoleculares',
    coreConcept: 'Semelhante dissolve semelhante. Hidrocarbonetos são apolares. Moléculas com -OH e -NH fazem Ligação de Hidrogênio.',
    mnemonico: '⚡ "FON": Hidrogênio ligado a Flúor, Oxigênio ou Nitrogênio = Ligação de Hidrogênio (ponto de ebulição alto!).',
    fastTechnique: 'Entre compostos de mesma massa molar: Álcool ferve a temperatura muito mais alta que Éter e Hidrocarboneto por causa da ponte de hidrogênio.',
    classicQuestionType: 'Qual sabão limpa gordura, miscibilidade de etanol em gasolina e água.'
  },
  {
    id: 'b-qui-6',
    subject: 'quimica',
    category: 'Química Ambiental & Sabões',
    title: 'Ação dos Sabões e Detergentes (Micelas)',
    coreConcept: 'Sabão é anfipático/anfifílico: possui cauda apolar hidrofóbica e cabeça polar hidrofílica.',
    mnemonico: '⚡ "A cauda longa de carbono abraça a gordura (apolar); a ponta iônica/polar interage com a água."',
    fastTechnique: 'Viu a palavra "surfactante" ou "micela"? A resposta sempre envolve a interação da parte apolar com o lipídio/óleo e da polar com a água!',
    classicQuestionType: 'Lavagem de tecidos com óleo, remoção de vírus com sabão.'
  },
  {
    id: 'b-qui-7',
    subject: 'quimica',
    category: 'Estequiometria',
    title: 'Estequiometria sem Pânico no ENEM',
    coreConcept: '1 mol de gás nas CNTP ocupa 22,4 L. 1 mol tem 6,02 × 10²³ moléculas.',
    mnemonico: '⚡ 3 passos: 1) Balancear a equação; 2) Ver a proporção molar; 3) Converter para gramas ou litros.',
    fastTechnique: 'Em 90% das questões de combustão do ENEM (ex: queima do metano ou etanol), a proporção de CO₂ gerado é igual ao número de carbonos do combustível!',
    classicQuestionType: 'Cálculo de emissão de CO₂ por quilômetro rodado com gasolina vs etanol.'
  },
  {
    id: 'b-qui-8',
    subject: 'quimica',
    category: 'Termoquímica',
    title: 'Entalpia: Exotérmica vs Endotérmica',
    coreConcept: 'Reação que libera calor = EXOTÉRMICA (ΔH < 0). Reação que absorve calor = ENDOTÉRMICA (ΔH > 0).',
    mnemonico: '⚡ "Queima/Combustão de qualquer coisa SEMPRE é exotérmica (ΔH negativo)."',
    fastTechnique: 'Se o calor está escrito junto com os produtos (+ 890 kJ no lado direito), a reação é exotérmica! Se está nos reagentes, é endotérmica.',
    formulas: ['ΔH = H_produtos - H_reagentes'],
    classicQuestionType: 'Bolsas térmicas instantâneas de gelo ou calor, valor energético de alimentos.'
  },

  // ==================== BIOLOGIA (MUITOS BIZUS RECORRENTES) ====================
  {
    id: 'b-bio-1',
    subject: 'biologia',
    category: 'Ecologia',
    title: 'Biomagnificação Trófica (O Predador de Topo Sofre Mais)',
    coreConcept: 'Substâncias não biodegradáveis (DDT, mercúrio, chumbo) acumulam mais no topo da cadeia alimentar.',
    mnemonico: '⚡ "Quem come todo mundo acumula o veneno de todo mundo."',
    fastTechnique: 'Na questão de mercúrio no rio: procure quem é o predador do topo (ser humano, ave de rapina, tubarão). É SEMPRE a alternativa dele!',
    classicQuestionType: 'Garimpo e mercúrio em rios da Amazônia, agrotóxicos em lagoas.'
  },
  {
    id: 'b-bio-2',
    subject: 'biologia',
    category: 'Fisiologia & Imunologia',
    title: 'Vacina Previne, Soro Salva',
    coreConcept: 'Vacina contém ANTÍGENO (estimula anticorpos e memória). Soro contém ANTICORPOS PRONTOS (ação curativa imediata).',
    mnemonico: '⚡ "Vacina = Ativa e Preventiva. Soro = Passivo e Curativo de Emergência."',
    fastTechnique: 'Picada de cobra/escorpião? NUNCA é vacina, pois o corpo demoraria 2 semanas pra criar defesa. É SORO!',
    classicQuestionType: 'Campanhas de vacinação vs Acidentes com animais peçonhentos.'
  },
  {
    id: 'b-bio-3',
    subject: 'biologia',
    category: 'Ecologia & Meio Ambiente',
    title: 'Eutrofização das Águas em 4 Passos',
    coreConcept: 'Excesso de esgoto/adubo com N e P na água provoca explosão de algas e asfixia dos peixes.',
    mnemonico: '⚡ "Adubo/Esgoto → Algas proliferam → Luz bloqueada → Bactérias consomem todo O₂ → Peixes morrem asfixiados."',
    fastTechnique: 'A morte dos peixes ocorre pela QUEDA DRÁSTICA DE OXIGÊNIO DISSOLVIDO consumido pelos decompositores aeróbios!',
    classicQuestionType: 'Mortandade de peixes em lagoas urbanas após chuvas fortes.'
  },
  {
    id: 'b-bio-4',
    subject: 'biologia',
    category: 'Ecologia & Relações Ecológicas',
    title: 'Relações Ecológicas em 10 Segundos',
    coreConcept: 'Mutualismo (+/+) obrigatório. Protocooperação (+/+) facultativo. Parasitismo (+/-). Predatismo (+/-). Comensalismo (+/0).',
    mnemonico: '⚡ "Líquen e micorriza = Mutualismo (um morre sem o outro). Pássaro-palito e jacaré = Protocooperação (ajuda mas não é obrigatório)."',
    fastTechnique: 'Se ambos se beneficiam e podem viver separados: Protocooperação. Se morrerem separados: Mutualismo!',
    classicQuestionType: 'Insetos polinizadores, orquídeas em troncos de árvores (epifitismo/comensalismo).'
  },
  {
    id: 'b-bio-5',
    subject: 'biologia',
    category: 'Genética & Biotecnologia',
    title: 'Transgênicos vs Clonagem',
    coreConcept: 'Transgênico recebe gene de OUTRA espécie diferente (ex: milho Bt com gene de bactéria). Clone é cópia genética idêntica da mesma espécie.',
    mnemonico: '⚡ "Transgênico = recombinação de DNA de espécies diferentes. Clone = cópia de núcleo celular."',
    fastTechnique: 'Viu "planta resistente a lagarta com toxina de bactéria"? É TRANSGÊNICO / DNA RECOMBINANTE na hora!',
    classicQuestionType: 'Cultivo de soja transgênica, terapia gênica.'
  },
  {
    id: 'b-bio-6',
    subject: 'biologia',
    category: 'Fisiologia Humana',
    title: 'Sistema Circulatório e Hematose',
    coreConcept: 'Artéria sai do coração. Veia chega ao coração. No pulmão: sangue venoso (rico em CO₂) vira sangue arterial (rico em O₂).',
    mnemonico: '⚡ "Artéria AFONTA (sai) do ventrículo; Veia VEM (chega) no átrio."',
    fastTechnique: 'A troca de gases no alvéolo pulmonar ocorre por DIFUSÃO SIMPLES (do mais concentrado para o menos concentrado), sem gasto de ATP!',
    classicQuestionType: 'Intoxicação por monóxido de carbono (CO liga forte na hemoglobina), atletas na altitude.'
  },
  {
    id: 'b-bio-7',
    subject: 'biologia',
    category: 'Genética',
    title: 'Cruzamento Clássico Aa x Aa (3:1)',
    coreConcept: 'Cruzamento entre dois heterozigotos sempre dá 75% fenótipo dominante e 25% recessivo.',
    mnemonico: '⚡ Aa x Aa = 1 AA, 2 Aa, 1 aa (25% recessivo).',
    fastTechnique: 'Dois pais normais têm um filho afetado por anomalia? Conclusão imediata: os pais são Aa e a doença é recessiva (aa)!',
    classicQuestionType: 'Heredogramas de famílias com albinismo, fibrose cística ou daltonismo.'
  },

  // ==================== FÍSICA ====================
  {
    id: 'b-fis-1',
    subject: 'fisica',
    category: 'Eletrodinâmica',
    title: 'Conta de Luz em Minutos (Potência e Consumo)',
    coreConcept: 'O consumo cobrado na conta é sempre em kWh (Quilowatt-hora).',
    mnemonico: '⚡ E (kWh) = (Potência em Watts / 1000) × Horas no mês.',
    fastTechnique: 'Para passar Watts para kW, corte 3 casas. Ex: chuveiro de 6000W = 6 kW. Usou 30h? 6 × 30 = 180 kWh.',
    formulas: ['E = P · Δt', 'P = U · i (Piu)', 'P = R · i² (Prii)', 'P = U² / R (Puri)'],
    classicQuestionType: 'Qual aparelho gasta mais energia na casa do estudante.'
  },
  {
    id: 'b-fis-2',
    subject: 'fisica',
    category: 'Ondulatória',
    title: 'A Regra Sagrada da Refração de Ondas',
    coreConcept: 'Ao mudar de meio, a FREQUÊNCIA (f) NUNCA MUDA. Ela é a identidade da onda.',
    mnemonico: '⚡ "Vem Lamber a Ferida" (v = λ · f). Frequência constante!',
    fastTechnique: 'Se a velocidade cai pela metade ao passar pro vidro, o comprimento de onda λ também cai pela metade na mesma hora.',
    formulas: ['v = λ · f', 'T = 1 / f'],
    classicQuestionType: 'Luz entrando na água, onda na corda mudando de espessura, ultrassom.'
  },
  {
    id: 'b-fis-3',
    subject: 'fisica',
    category: 'Eletrodinâmica',
    title: 'Circuito em Série vs Circuito em Paralelo',
    coreConcept: 'Em paralelo: a d.d.p. (tensão U) é IGUAL em todos os aparelhos (tomadas da casa). Em série: a corrente (i) é igual.',
    mnemonico: '⚡ "Paralelo = mesma Voltagem. Se uma lâmpada queimar, as outras continuam acesas!"',
    fastTechnique: 'Instalação elétrica residencial é SEMPRE em paralelo para garantir 127V ou 220V em todas as tomadas!',
    classicQuestionType: 'Lâmpadas de Natal em série vs lâmpadas da casa em paralelo.'
  }
];
