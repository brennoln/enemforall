import React, { useState } from 'react';
import { QuizView } from './components/QuizView';
import { BizusView } from './components/BizusView';
import { MemoryCheatSheetView } from './components/MemoryCheatSheetView';
import {
  GraduationCap,
  BookOpen,
  Compass,
  CheckCircle2,
  Clock,
  Heart,
  Brain,
  Target,
  BarChart3,
  Zap
} from 'lucide-react';

export function App() {
  const [currentTab, setCurrentTab] = useState<'quiz' | 'formulas' | 'bizus' | 'strategy'>('quiz');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-slate-900 selection:text-white pb-20 md:pb-6">
      {/* Barra Superior - Compacta e Fixa */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-4xl mx-auto px-3 md:px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-xs shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-xs md:text-sm tracking-tight text-slate-900 flex items-center gap-1.5">
                ENEM • 2º Dia
                <span className="px-1.5 py-0.2 text-[9px] font-semibold bg-indigo-50 text-indigo-700 rounded border border-indigo-200">
                  +Prova 2025 Oficial
                </span>
              </div>
              <p className="text-[10px] text-slate-500 hidden sm:block">245 Questões (90 ENEM 2025 com Imagens) • Fórmulas & Revisão</p>
            </div>
          </div>

          {/* Abas no Desktop */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setCurrentTab('quiz')}
              className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all ${
                currentTab === 'quiz'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Questões (245)
            </button>
            <button
              onClick={() => setCurrentTab('formulas')}
              className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all flex items-center gap-1 ${
                currentTab === 'formulas'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Fórmulas & Memória</span>
            </button>
            <button
              onClick={() => setCurrentTab('bizus')}
              className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all flex items-center gap-1 ${
                currentTab === 'bizus'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Revisão 2025 & Bizus</span>
            </button>
            <button
              onClick={() => setCurrentTab('strategy')}
              className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all flex items-center gap-1 ${
                currentTab === 'strategy'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Estratégia & Chute</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-4 py-3 md:py-5">
        {/* Faixa Motivacional Compacta */}
        <div className="mb-3 p-2.5 bg-white border border-slate-200 rounded-xl flex items-center justify-between gap-2 text-xs shadow-2xs">
          <div className="flex items-center gap-2 text-slate-700 min-w-0">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20 shrink-0" />
            <span className="truncate text-[11px] sm:text-xs">Para sua mente brilhante: Prova ENEM 2025 completa + Fórmulas + Técnicas de Chute! 💖</span>
          </div>
          <span className="text-[10px] font-medium text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200 shrink-0">
            245 Questões
          </span>
        </div>

        {/* Abas */}
        {currentTab === 'quiz' && <QuizView />}
        {currentTab === 'formulas' && <MemoryCheatSheetView />}
        {currentTab === 'bizus' && <BizusView />}
        {currentTab === 'strategy' && (
          <div className="space-y-4 pb-8">
            {/* Guia de Estratégia de Tempo + TRI */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-7 shadow-xs">
              <h2 className="text-base md:text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Compass className="w-5 h-5 text-indigo-600" />
                Estratégia TRI, Gestão de Tempo & Chute Inteligente no 2º Dia
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4">
                No 2º dia você tem <strong>5 horas (300 minutos)</strong> para 90 questões — média de 3 minutos por questão. Quem tenta resolver na ordem de 91 a 180 perde tempo nas pesadas e chuta as fáceis do final (como a Q180 de regra de três!). Siga o protocolo abaixo:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 1. Varredura em 3 Ondas (Fáceis Primeiro!)
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    <strong>1ª Onda (90 min):</strong> Faça todas as questões visuais de gráficos, tabelas, mediana, porcentagem, regra de três e ecologia/saúde.<br />
                    <strong>2ª Onda (120 min):</strong> Geometria, funções, estequiometria, eletrodinâmica e ondulatória.<br />
                    <strong>3ª Onda (60 min):</strong> Questões longas de combinatória, logaritmos e sistemas (ou aplique o chute técnico!).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-600" /> 2. Leitura Reversa (Comando Antes do Texto)
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    Nunca comece pelo texto motivador! Leia primeiro a <strong>frase final antes das alternativas</strong>. Em 60% das questões do ENEM 2025 (como Q101, Q102, Q140, Q180), o primeiro parágrafo era apenas contextualização histórica.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-indigo-600" /> 3. A Regra dos 45 Segundos de Travamento
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    Leu o comando e não viu o caminho em 45 segundos? Circule o número da questão no caderno e pule imediatamente! Seu cérebro continua processando em segundo plano enquanto você garante 3 fáceis no mesmo tempo.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-rose-600" /> 4. Os 5 Atalhos de Chute Técnico (INEP)
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    • <strong>Gêmeos que somam 1:</strong> Em probabilidade, escolha entre as duas opções que somam 100% (ex: Q169: 91/216 e 125/216).<br />
                    • <strong>Dobro/Metade em Círculos:</strong> Fique com a metade se for semicírculo ou se deram diâmetro (ex: Q177: 67,5 vs 135).<br />
                    • <strong>Substituir x=0 no Gráfico:</strong> Em funções (Q147, Q159), jogue um ponto do gráfico nas opções!
                  </p>
                </div>
              </div>

              <button
                onClick={() => setCurrentTab('bizus')}
                className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <BarChart3 className="w-4 h-4" />
                Ver Mapeamento Completo do ENEM 2025 & Todas as Dicas de Chute →
              </button>
            </div>
          </div>
        )}
      </main>

      {/* BARRA INFERIOR DE NAVEGAÇÃO FIXA NO CELULAR (4 ABAS PERFEITAS) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-200 z-50 px-2 py-2 flex items-center justify-around shadow-lg">
        <button
          onClick={() => {
            setCurrentTab('quiz');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-xl transition-all ${
            currentTab === 'quiz' ? 'text-slate-950 font-bold' : 'text-slate-400'
          }`}
        >
          <GraduationCap className={`w-5 h-5 ${currentTab === 'quiz' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px]">Questões</span>
        </button>

        <button
          onClick={() => {
            setCurrentTab('formulas');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-xl transition-all ${
            currentTab === 'formulas' ? 'text-indigo-600 font-bold' : 'text-slate-400'
          }`}
        >
          <Brain className={`w-5 h-5 ${currentTab === 'formulas' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px]">Fórmulas</span>
        </button>

        <button
          onClick={() => {
            setCurrentTab('bizus');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-xl transition-all ${
            currentTab === 'bizus' ? 'text-indigo-600 font-bold' : 'text-slate-400'
          }`}
        >
          <BookOpen className={`w-5 h-5 ${currentTab === 'bizus' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px]">Revisão 2025</span>
        </button>

        <button
          onClick={() => {
            setCurrentTab('strategy');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-xl transition-all ${
            currentTab === 'strategy' ? 'text-slate-950 font-bold' : 'text-slate-400'
          }`}
        >
          <Compass className={`w-5 h-5 ${currentTab === 'strategy' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px]">Chute & TRI</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
