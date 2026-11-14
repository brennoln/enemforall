import React, { useState } from 'react';
import { Subject } from '../types';
import { bizusData } from '../data/bizus';
import {
  Zap,
  Search,
  Clock,
  Atom,
  TestTube2,
  Dna,
  Calculator,
  ChevronDown,
  ChevronUp,
  Bookmark,
  BarChart3,
  Target,
  Crosshair,
  Sparkles,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export const BizusView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'mapeamento' | 'chute' | 'bizus'>('mapeamento');
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredBizus = bizusData.filter((b) => {
    const matchesSubject = selectedSubject === 'all' || b.subject === selectedSubject;
    const matchesSearch =
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.coreConcept.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.fastTechnique.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const getSubjectBadge = (subject: Subject) => {
    switch (subject) {
      case 'matematica':
        return { label: 'Matemática', color: 'bg-blue-50 text-blue-700 border-blue-200', icon: Calculator };
      case 'fisica':
        return { label: 'Física', color: 'bg-amber-50 text-amber-700 border-amber-200', icon: Atom };
      case 'quimica':
        return { label: 'Química', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: TestTube2 };
      case 'biologia':
        return { label: 'Biologia', color: 'bg-teal-50 text-teal-700 border-teal-200', icon: Dna };
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto pb-12">
      {/* Cabeçalho Acadêmico com Sub-Abas de Revisão */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Bookmark className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Central de Revisão: Raio-X ENEM 2025, Técnicas de Chute & Bizus
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Mapeamento completo do que caiu nas 90 questões da última prova (Caderno 5 Amarelo), engenharia reversa para chutar com alta probabilidade e macetes de resolução em 45 segundos.
          </p>
        </div>

        {/* Sub-navegação rápida */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
          <button
            onClick={() => setActiveSubTab('mapeamento')}
            className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition-all ${
              activeSubTab === 'mapeamento'
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <BarChart3 className="w-4 h-4 shrink-0" />
            <span>📊 O Que Mais Caiu (2025)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('chute')}
            className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition-all ${
              activeSubTab === 'chute'
                ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                : 'bg-amber-50/70 text-amber-900 border-amber-200 hover:bg-amber-100'
            }`}
          >
            <Target className="w-4 h-4 shrink-0" />
            <span>🎯 Dicas de Chute & TRI</span>
          </button>

          <button
            onClick={() => setActiveSubTab('bizus')}
            className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition-all ${
              activeSubTab === 'bizus'
                ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Zap className="w-4 h-4 shrink-0" />
            <span>⚡ Cards de Bizus ({bizusData.length})</span>
          </button>
        </div>
      </div>

      {/* ==================== ABA 1: MAPEAMENTO COMPLETO DO ENEM 2025 ==================== */}
      {activeSubTab === 'mapeamento' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          {/* Resumo Executivo */}
          <div className="bg-gradient-to-r from-indigo-950 to-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-xs">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" /> Diagnóstico Oficial • 90 Questões Mapeadas (Q91 a Q180)
            </div>
            <h3 className="text-base sm:text-lg font-extrabold mb-2">
              A Regra 70/30 do ENEM 2025: Onde Estão os Pontos Mais Fáceis?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Mais de <strong className="text-white">68% da prova de Matemática</strong> (31 de 45 questões) exigiu apenas <strong className="text-amber-300">Proporção, Porcentagem, Escalas, Estatística de Tabelas/Gráficos e Geometria Básica</strong>. Já em <strong className="text-white">Ciências da Natureza</strong>, Ecologia, Eletrodinâmica, Ondulatória, Polaridade Orgânica e Estequiometria/Eletroquímica dominaram mais de 70% das questões!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                <div className="text-lg font-black text-blue-300">45 quest.</div>
                <div className="text-[11px] text-slate-300">Matemática (Q136–Q180)</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                <div className="text-lg font-black text-amber-300">15 quest.</div>
                <div className="text-[11px] text-slate-300">Física (Natureza)</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                <div className="text-lg font-black text-emerald-300">15 quest.</div>
                <div className="text-[11px] text-slate-300">Química (Natureza)</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                <div className="text-lg font-black text-teal-300">15 quest.</div>
                <div className="text-[11px] text-slate-300">Biologia (Natureza)</div>
              </div>
            </div>
          </div>

          {/* 1. MATEMÁTICA (45 QUESTÕES) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Matemática e suas Tecnologias (45 Questões: Q136 a Q180)
                  </h3>
                  <p className="text-xs text-slate-500">Ordem de prioridade absoluta para garantir 800+ na TRI</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">
                100% Mapeado
              </span>
            </div>

            <div className="space-y-3.5">
              {[
                {
                  topic: '1. Razão, Proporção, Porcentagem, Escalas e Aritmética Prática',
                  count: '15 questões (33,3%)',
                  percent: 33,
                  priority: '🔥 PRIORIDADE MÁXIMA (Garante a base da TRI)',
                  questions: 'Q137, Q138, Q140, Q143, Q146, Q149, Q150, Q152, Q153, Q161, Q163, Q165, Q166, Q170, Q180',
                  details: 'Regra de três e conversão de moedas (Q140), descontos sucessivos (Q166), imposto por faixas (Q150), escala de área 1:10.000 (Q165), índice de leitura (Q146), velocidade média no futebol (Q180) e lógica de calendário/fuso (Q138, Q153).'
                },
                {
                  topic: '2. Geometria Espacial e Plana (Volumes, Áreas, Poliedros e Vistas)',
                  count: '9 questões (20,0%)',
                  percent: 20,
                  priority: '⭐ ALTA RECORRÊNCIA',
                  questions: 'Q136, Q141, Q144, Q151, Q160, Q168, Q174, Q175, Q177',
                  details: 'Relação de Euler V - A + F = 2 (Q141), projeção ortogonal 3D (Q144), volume de cilindro e paralelepípedo (Q160, Q174), área de semicírculo (Q177), caixa quadrada com folga (Q175) e caminhos mínimos em malha (Q168).'
                },
                {
                  topic: '3. Funções, Álgebra, Logaritmo, Trigonometria e Geometria Analítica',
                  count: '9 questões (20,0%)',
                  percent: 20,
                  priority: '⚡ MÉDIA / DIFÍCIL (Use substituição de pontos!)',
                  questions: 'Q147, Q156, Q159, Q164, Q171, Q172, Q173, Q176, Q178',
                  details: 'Gráfico de função por partes e periódica (Q147, Q159), equação da circunferência (Q171), função quadrática + logaritmo (Q176), lei dos cossenos (Q156) e teste de alternativas em equação (Q178).'
                },
                {
                  topic: '4. Estatística, Leitura de Gráficos e Tabelas (Média, Mediana, Desvio)',
                  count: '7 questões (15,6%)',
                  percent: 16,
                  priority: '🔥 PONTOS FÁCEIS GARANTIDOS',
                  questions: 'Q139, Q142, Q148, Q155, Q157, Q158, Q167',
                  details: 'Mediana em tabela 3x4 (Q148) e em gráfico (Q155), média aritmética e ponderada (Q142, Q157), regularidade = menor desvio padrão (Q158) e fluxograma/pictograma (Q139, Q167).'
                },
                {
                  topic: '5. Análise Combinatória e Probabilidade',
                  count: '5 questões (11,1%)',
                  percent: 11,
                  priority: '🎯 ATENÇÃO ÀS PEGADINHAS',
                  questions: 'Q145, Q154, Q162, Q169, Q179',
                  details: 'Probabilidade complementar no lançamento de 3 dados (Q169), probabilidade condicional na tabela (Q162), combinação simples com restrição C_n,p (Q179) e código de placas/algarismos (Q145).'
                }
              ].map((item, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">{item.topic}</span>
                    <span className="text-xs font-extrabold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">
                      {item.count}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: `${item.percent * 2.5}%` }} />
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{item.details}</p>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[10px] sm:text-[11px]">
                    <span className="font-mono text-slate-500">Questões: <strong>{item.questions}</strong></span>
                    <span className="font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">{item.priority}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. CIÊNCIAS DA NATUREZA (FÍSICA, QUÍMICA E BIOLOGIA - 45 QUESTÕES) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* BIOLOGIA */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <div className="p-1.5 rounded-lg bg-teal-50 text-teal-700 border border-teal-200">
                  <Dna className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Biologia (15 quest.)</h4>
                  <span className="text-[10px] text-teal-700 font-semibold">Ecologia + Saúde = 67% da prova!</span>
                </div>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-teal-50/50 border border-teal-200/70">
                  <div className="font-bold text-teal-950">1. Ecologia e Sustentabilidade (40% • 6q)</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Espécies invasoras (Q92), Caatinga/xerófitas (Q94), Ciclo do Carbono (Q95), Biodigestor/Eutrofização (Q100), Endemismo (Q111) e Cadeia alimentar (Q122).
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">2. Imunologia, Parasitologia e Saúde (27% • 4q)</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Mecanismo das Vacinas (Q93), Esquistossomose/Caramujo (Q98), Toxinas proteicas (Q112) e Vitaminas A vs C (Q131).
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">3. Citologia, Genética e Fisiologia (33% • 5q)</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Lisossomos (Q99), Fotossíntese bacteriana H₂S (Q102), Codominância (Q121), Transgênicos (Q133) e Glândula uropigial das aves (Q134).
                  </p>
                </div>
              </div>
            </div>

            {/* QUÍMICA */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <TestTube2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Química (15 quest.)</h4>
                  <span className="text-[10px] text-emerald-700 font-semibold">Físico-Química + Orgânica = 80%!</span>
                </div>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200/70">
                  <div className="font-bold text-emerald-950">1. Físico-Química (46,7% • 7q)</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Estequiometria + Excesso (Q107), Gases Ideais PV=nRT (Q110), Meia-vida (Q114), Pilhas de Lítio (Q123), Enzimas pH/T (Q126), Equilíbrio de Le Chatelier (Q127) e Solubilidade de O₂ na água (Q129).
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">2. Orgânica e Polaridade (33,3% • 5q)</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Pontes de hidrogênio/-OH (Q106), Biossurfactantes/Micelas (Q109), Descarboxilação/CO₂ (Q116), Basicidade das Aminas no peixe (Q117) e Fórmula Molecular C₁₀H₁₈O (Q119).
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">3. Geral e Tratamento de Água (20% • 3q)</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Condutividade da água destilada (Q96), Adsorção no carvão ativado (Q108) e Nomenclatura de Sais/Ácidos (Q132).
                  </p>
                </div>
              </div>
            </div>

            {/* FÍSICA */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <div className="p-1.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-200">
                  <Atom className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Física (15 quest.)</h4>
                  <span className="text-[10px] text-amber-700 font-semibold">Elétrica + Ondas + Mecânica = 80%!</span>
                </div>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-amber-50/50 border border-amber-200/70">
                  <div className="font-bold text-amber-950">1. Eletrodinâmica e Magnetismo (33,3% • 5q)</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Geradores U = E - r·i (Q104), Indução de Faraday (Q113), Lei de Ohm e Choque (Q120), Força Elétrica (Q125) e Fusível/Potência P = U·i (Q135).
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">2. Mecânica e Hidrostática (26,7% • 4q)</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Balística/Vetores (Q103), Rampa de escape com atrito (Q118), Gráficos de MU/MUV (Q124) e Pressão P = F/A (Q128).
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">3. Ondulatória, Termologia e Óptica (40% • 6q)</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Cardiograma f=1/T (Q101), Micro-ondas v=λf (Q105), Decibéis dB (Q115), Irradiação Solar (Q91), Calor/Pele (Q97) e Visão/Sombra (Q130).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== ABA 2: MANUAL DE CHUTE INTELIGENTE & ENGENHARIA REVERSA ==================== */}
      {activeSubTab === 'chute' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-5 sm:p-6 shadow-xs">
            <div className="flex items-center gap-2 text-amber-100 text-xs font-bold uppercase tracking-wider mb-1">
              <Crosshair className="w-4 h-4" /> Engenharia Reversa das Alternativas do INEP
            </div>
            <h3 className="text-base sm:text-lg font-extrabold mb-1.5">
              Como Chutar com 50% a 75% de Chance de Acerto Quando o Tempo Acabar
            </h3>
            <p className="text-amber-50 text-xs sm:text-sm leading-relaxed">
              O elaborador do ENEM segue regras rígidas para criar os <strong>distratores</strong> (alternativas erradas que parecem certas). Conhecer a anatomia dos distratores permite eliminar 3 opções em 10 segundos sem fazer a conta inteira!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Técnica 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center font-black">1</span>
                <span>Técnica dos "Gêmeos Complementares" (Soma 1 ou 100%)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Em questões de <strong>Probabilidade ou Porcentagem</strong>, o elaborador SEMPRE coloca como distrator o valor complementar (o que falta para 100% ou para 1). Se duas alternativas somam 1 (ou 100%), <strong>a resposta certa é quase certamente uma das duas!</strong>
              </p>
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-950">
                <strong>Exemplo Real no ENEM 2025 (Q169):</strong> As opções tinham <code className="font-bold">91/216</code> (C) e <code className="font-bold">125/216</code> (D). Note que 91 + 125 = 216 (somam 1!). Como a questão pedia a probabilidade de ganhar, bastava ver qual era o complementar (91/216)!
              </div>
            </div>

            {/* Técnica 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-lg bg-indigo-100 border border-indigo-300 flex items-center justify-center font-black">2</span>
                <span>Técnica do Dobro / Metade em Geometria (Raio vs Diâmetro)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Em toda questão de círculo, cilindro ou semicírculo, o elaborador coloca a resposta certa e o <strong>dobro (ou quádruplo)</strong> para pegar quem esqueceu de dividir o diâmetro por 2 ou a área do semicírculo por 2.
              </p>
              <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-[11px] text-indigo-950">
                <strong>Exemplo Real no ENEM 2025 (Q177):</strong> Opção A: <code className="font-bold">Projeto 1 (67,5 m²)</code> e Opção C: <code className="font-bold">Projeto 1 (135 m²)</code>. Como 67,5 é a metade exata de 135 (porque o túnel é um <em>semicírculo</em>), a resposta certa é a metade: <strong>67,5 m² (A)</strong>!
              </div>
            </div>

            {/* Técnica 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center font-black">3</span>
                <span>Clonagem de Elementos nas Alternativas Algébricas</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quando as alternativas são expressões algébricas ou potências, a resposta correta compartilha seus blocos com a maioria das outras opções. Elimine as opções "isoladas".
              </p>
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-950">
                <strong>Exemplo Real no ENEM 2025 (Q176 - a mais difícil!):</strong> As opções C e D eram <code className="font-bold">10^(2,5) / 84</code> e <code className="font-bold">10^(2,5) / 99</code>. Só de ver o <code className="font-bold">10^(2,5)</code> repetido em fração, você já descartava A, B e E na hora e ficava com 50% de chance!
              </div>
            </div>

            {/* Técnica 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-lg bg-rose-100 border border-rose-300 flex items-center justify-center font-black">4</span>
                <span>A Pista Oculta no Parêntese Final do Enunciado</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                O ENEM <strong>nunca dá um dado numérico de aproximação à toa</strong> (exceto quando dá uma tabela inteira). Se o final do texto diz "Considere cos 50° = 0,64", esse número obrigatoriamente entra na última conta!
              </p>
              <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-[11px] text-rose-950">
                <strong>Exemplo Real no ENEM 2025 (Q156):</strong> O enunciado deu <code className="font-bold">cos 50° = 0,64</code>. Isso já revelava sem desenhar nada que o ângulo entre os ponteiros era 130° (suplementar de 50°) e que a resposta tinha raiz quadrada envolvendo 0,64!
              </div>
            </div>

            {/* Técnica 5 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-teal-700 font-bold text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-lg bg-teal-100 border border-teal-300 flex items-center justify-center font-black">5</span>
                <span>Bússola Ecológica & Cidadã em Biologia e Química</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nas questões ambientais e de saúde do ENEM, a alternativa correta SEMPRE defende: <strong>preservação de espécies nativas, controle biológico, saneamento básico, vacinação, reciclagem/biodigestores e desenvolvimento sustentável</strong>.
              </p>
              <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-[11px] text-teal-950">
                <strong>Elimine na hora alternativas que digam:</strong> "erradicar predadores", "introduzir espécie exótica", "drenar rios", "usar antibiótico contra vírus" ou "queimar resíduos a céu aberto".
              </div>
            </div>

            {/* Técnica 6 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-lg bg-blue-100 border border-blue-300 flex items-center justify-center font-black">6</span>
                <span>Engenharia Reversa: Testar as Alternativas em Vez de Resolver</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quando a pergunta pede "Qual a quantidade n?" ou "Qual a função f(x)?", não monte equações de 2º grau! Pegue a alternativa do meio (C ou B) e veja se bate com a história do texto!
              </p>
              <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[11px] text-blue-950">
                <strong>Exemplo Real no ENEM 2025 (Q178):</strong> Carro de R$ 60.000 em <code className="font-bold">n</code> parcelas. Olhando as opções (18, 24, 30, 42, 48), os divisores redondos de 60.000 que diferem em 6 unidades são <strong>24 e 30</strong> (R$ 2.500 e R$ 2.000). Marca <strong>24 (B)</strong> em 10 segundos!
              </div>
            </div>
          </div>

          {/* Alerta de Ouro da TRI */}
          <div className="bg-white border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-xs flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm">
              <h4 className="font-extrabold text-slate-900">
                Regra de Ouro da TRI: Nunca Deixe uma Fácil em Branco Para Fazer uma Difícil!
              </h4>
              <p className="text-slate-600 leading-relaxed">
                A Teoria de Resposta ao Item (TRI) penaliza severamente a <strong>incoerência pedagógica</strong> (acertar a Q176 de logaritmo com parábola e errar a Q180 de regra de três por falta de tempo). Garanta 100% de atenção nas 25 questões fáceis de leitura de gráfico, razão e geometria visual; nas 5 mais pesadas da prova, aplique as técnicas de chute acima em 20 segundos e siga em frente!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ==================== ABA 3: CARDS DE BIZUS E SÍNTESES ==================== */}
      {activeSubTab === 'bizus' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          {/* Busca e Filtros */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por conceito, assunto ou fórmula..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 text-xs md:text-sm transition-all shadow-xs"
              />
            </div>

            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'matematica', label: 'Matemática' },
                { id: 'fisica', label: 'Física' },
                { id: 'quimica', label: 'Química' },
                { id: 'biologia', label: 'Biologia' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedSubject(tab.id as any)}
                  className={`px-3 py-1.5 rounded-xl font-medium text-xs whitespace-nowrap transition-all ${
                    selectedSubject === tab.id
                      ? 'bg-slate-900 text-white shadow-xs font-semibold'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Lista de Sínteses */}
          <div className="space-y-3">
            {filteredBizus.map((b) => {
              const badge = getSubjectBadge(b.subject);
              const Icon = badge.icon;
              const isExpanded = expandedId === b.id;

              return (
                <div
                  key={b.id}
                  className="bg-white border border-slate-200 rounded-xl transition-all shadow-xs overflow-hidden"
                >
                  <div
                    onClick={() => toggleExpand(b.id)}
                    className="p-4 md:p-5 cursor-pointer flex items-start justify-between gap-3 select-none hover:bg-slate-50/50"
                  >
                    <div className="space-y-1">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium border ${badge.color}`}>
                        <Icon className="w-3 h-3" />
                        {badge.label} • {b.category}
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        {b.title}
                      </h3>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        {b.coreConcept}
                      </p>
                    </div>

                    <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {b.mnemonico && (
                    <div className="px-4 pb-3 md:px-5">
                      <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium flex items-center gap-2">
                        <span className="font-semibold text-amber-800">Mnemônico:</span>
                        <span>{b.mnemonico}</span>
                      </div>
                    </div>
                  )}

                  {isExpanded && (
                    <div className="px-4 pb-5 md:px-5 pt-3 border-t border-slate-100 space-y-3 bg-slate-50/50 text-xs md:text-sm">
                      <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg text-emerald-950">
                        <div className="font-semibold flex items-center gap-1.5 text-emerald-800 mb-1 text-xs uppercase tracking-wider">
                          <Clock className="w-3.5 h-3.5" /> Como Resolver com Agilidade:
                        </div>
                        <p className="leading-relaxed text-slate-700">{b.fastTechnique}</p>
                      </div>

                      {b.formulas && b.formulas.length > 0 && (
                        <div className="p-3 bg-white rounded-lg border border-slate-200">
                          <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1.5">
                            Equações de Referência:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {b.formulas.map((f, i) => (
                              <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-800 font-mono rounded text-xs border border-slate-200 font-medium">
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="p-3 bg-slate-100 rounded-lg text-slate-700 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div>
                          <span className="font-semibold text-slate-800">Recorrência no ENEM: </span>
                          <span>{b.classicQuestionType}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
