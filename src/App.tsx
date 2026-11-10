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
  Brain
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
                <span className="px-1.5 py-0.2 text-[9px] font-semibold bg-slate-100 text-slate-600 rounded border border-slate-200">
                  Turbo
                </span>
              </div>
              <p className="text-[10px] text-slate-500 hidden sm:block">Natureza & Matemática • Fórmulas & Exercícios</p>
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
              Exercícios
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
              className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all ${
                currentTab === 'bizus'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sínteses & Bizus
            </button>
            <button
              onClick={() => setCurrentTab('strategy')}
              className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all ${
                currentTab === 'strategy'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Estratégia TRI
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
            <span className="truncate text-[11px] sm:text-xs">Para sua mente brilhante: leia as fórmulas e arrase no 2º dia! 💖</span>
          </div>
          <span className="text-[10px] font-medium text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200 shrink-0">
            Memória 2.0
          </span>
        </div>

        {/* Abas */}
        {currentTab === 'quiz' && <QuizView />}
        {currentTab === 'formulas' && <MemoryCheatSheetView />}
        {currentTab === 'bizus' && <BizusView />}
        {currentTab === 'strategy' && (
          <div className="space-y-3 pb-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-7 shadow-xs">
              <h2 className="text-base md:text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-600" />
                Como Ganhar Tempo no 2º Dia do ENEM
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4">
                A nota da TRI é alavancada pelo acerto consistente das fáceis. Resolver Matemática com rapidez é o que garante tempo de sobra para ler Natureza com clareza.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 1. Cálculos de Porcentagem Mental
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    Decomponha os valores em 10%, 5% e 1%. Exemplo: 15% de 80 = 8 (10%) + 4 (5%) = 12.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 2. Escalas: O Macete dos 5 Zeros
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    De centímetros para quilômetros reais, corte 5 zeros diretamente. Em áreas, lembre de elevar a escala ao quadrado ($E^2$).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600" /> 3. A Regra dos 2 Minutos
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    Não identificou o caminho em 30 segundos? Pule na hora! Faça uma marcação no caderno e garanta as outras primeiro.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> 4. Eliminação Prévia em Natureza
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    Reconheceu o grupo fenol ou constatou refração (frequência inalterada)? Elimine de imediato as opções contraditórias.
                  </p>
                </div>
              </div>
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
          <span className="text-[10px]">Exercícios</span>
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
            currentTab === 'bizus' ? 'text-slate-950 font-bold' : 'text-slate-400'
          }`}
        >
          <BookOpen className={`w-5 h-5 ${currentTab === 'bizus' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px]">Bizus</span>
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
          <span className="text-[10px]">Estratégia</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
