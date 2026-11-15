import React, { useState, useEffect, useRef } from 'react';
import { Question, Subject } from '../types';
import { questionsData } from '../data/questions';
import {
  loadUserDailyProgress,
  incrementUserTodayAnswered,
  UserDailyProgress,
  loadSolvedQuestions,
  markQuestionSolved,
  resetSolvedQuestions,
  SolvedMap
} from '../utils/streak';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  ChevronRight,
  Award,
  Zap,
  Clock,
  Calculator,
  Atom,
  TestTube2,
  Dna,
  Shuffle,
  Star,
  Brain,
  Flame,
  FileText,
  ListOrdered,
  ZoomIn,
  X,
  BarChart3,
  RotateCcw,
  SlidersHorizontal,
  Coffee,
  Type
} from 'lucide-react';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const QuizView: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'all'>('all');
  const [filterMode, setFilterMode] = useState<'all' | 'enem2025' | 'express5' | 'specials'>('enem2025');
  const [sequentialOrder, setSequentialOrder] = useState<boolean>(true);
  const [hideSolved, setHideSolved] = useState<boolean>(false);
  const [onlyErrors, setOnlyErrors] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [showPerformance, setShowPerformance] = useState<boolean>(false);
  const [largeText, setLargeText] = useState<boolean>(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | 'all'>('all');
  const [questionsList, setQuestionsList] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | 'E' | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [quizFinished, setQuizFinished] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Progresso do Foguinho (Streak Diário) e Questões Salvas no Aparelho
  const [streakData, setStreakData] = useState<UserDailyProgress>(loadUserDailyProgress());
  const [solvedMap, setSolvedMap] = useState<SolvedMap>(loadSolvedQuestions());
  const [streakCelebration, setStreakCelebration] = useState(false);
  const explanationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setStreakData(loadUserDailyProgress());
    setSolvedMap(loadSolvedQuestions());
  }, []);

  const getFilteredBase = (subjectFilter: Subject | 'all', respectToggles = false) => {
    let filtered = questionsData.filter(
      (q) => subjectFilter === 'all' || q.subject === subjectFilter
    );

    if (filterMode === 'enem2025') {
      filtered = filtered.filter((q) => q.id.startsWith('enem2025-'));
    } else if (filterMode === 'specials') {
      filtered = filtered.filter((q) => q.isSpecial && !q.id.startsWith('enem2025-'));
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter((q) => q.difficulty === selectedDifficulty);
    }

    if (respectToggles) {
      if (onlyErrors) {
        filtered = filtered.filter((q) => solvedMap[q.id] === false);
      } else if (hideSolved) {
        filtered = filtered.filter((q) => solvedMap[q.id] === undefined);
      }
    }

    return filtered;
  };

  useEffect(() => {
    const filtered = getFilteredBase(selectedSubject, true);
    if (filterMode === 'express5') {
      setQuestionsList(shuffleArray(filtered).slice(0, 5));
    } else if (filterMode === 'enem2025' && sequentialOrder && !onlyErrors) {
      setQuestionsList(filtered);
    } else {
      setQuestionsList(shuffleArray(filtered));
    }
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsConfirmed(false);
    setScore({ correct: 0, wrong: 0 });
    setQuizFinished(false);
  }, [selectedSubject, filterMode, sequentialOrder, selectedDifficulty, hideSolved, onlyErrors]);

  const currentQuestion: Question | undefined = questionsList[currentIndex];

  const handleSelectOption = (letter: 'A' | 'B' | 'C' | 'D' | 'E') => {
    if (isConfirmed) return;
    setSelectedOption(letter);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOption || !currentQuestion) return;

    setIsConfirmed(true);
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    const updatedSolved = markQuestionSolved(currentQuestion.id, isCorrect);
    setSolvedMap(updatedSolved);
    const { progress, justUnlockedStreak } = incrementUserTodayAnswered();
    setStreakData(progress);

    if (justUnlockedStreak) {
      setStreakCelebration(true);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#f97316', '#ef4444', '#fbbf24']
      });
      setTimeout(() => setStreakCelebration(false), 5000);
    }

    if (isCorrect) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
      confetti({
        particleCount: 35,
        spread: 45,
        origin: { y: 0.7 }
      });
    } else {
      setScore((prev) => ({ ...prev, wrong: prev.wrong + 1 }));
    }

    setTimeout(() => {
      explanationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questionsList.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsConfirmed(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setQuizFinished(true);
    }
  };

  const handleReshuffleCurrent = () => {
    const filtered = getFilteredBase(selectedSubject, true);
    setSequentialOrder(false);
    setQuestionsList(
      filterMode === 'express5' ? shuffleArray(filtered).slice(0, 5) : shuffleArray(filtered)
    );
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsConfirmed(false);
    setScore({ correct: 0, wrong: 0 });
    setQuizFinished(false);
  };

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

  const totalSolvedCount = Object.keys(solvedMap).length;
  const totalErrorsCount = Object.values(solvedMap).filter((v) => v === false).length;
  const streakAchievedToday = streakData.todayCount >= 10;

  // Diagnóstico por Matéria
  const subjectStats = (['matematica', 'fisica', 'quimica', 'biologia'] as Subject[]).map((subj) => {
    const subjQuestions = questionsData.filter((q) => q.subject === subj);
    let answered = 0;
    let correct = 0;
    for (const q of subjQuestions) {
      if (solvedMap[q.id] !== undefined) {
        answered += 1;
        if (solvedMap[q.id]) correct += 1;
      }
    }
    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : null;
    return {
      subject: subj,
      label: getSubjectBadge(subj).label,
      total: subjQuestions.length,
      answered,
      correct,
      accuracy,
    };
  });

  const weakestSubject = subjectStats
    .filter((s) => s.answered > 0 && s.accuracy !== null)
    .sort((a, b) => (a.accuracy ?? 100) - (b.accuracy ?? 100))[0];

  if (quizFinished) {
    const total = score.correct + score.wrong;
    const percentage = total > 0 ? Math.round((score.correct / total) * 100) : 0;

    return (
      <div className="max-w-xl mx-auto py-8 px-3 text-center">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-200">
            <Award className="w-7 h-7" />
          </div>

          <h2 className="text-xl font-extrabold text-slate-900 mb-1">
            {filterMode === 'express5' ? 'Treino Express Concluído!' : 'Sessão Concluída!'}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mb-5">
            Cada pausa bem aproveitada te aproxima da sua vaga. Continue no seu ritmo!
          </p>

          <div className="grid grid-cols-3 gap-2.5 my-4">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xl font-black text-slate-800">{total}</div>
              <div className="text-[11px] text-slate-500 font-medium">Feitas</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
              <div className="text-xl font-black text-emerald-700">{score.correct}</div>
              <div className="text-[11px] text-emerald-600 font-medium">Acertos</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200">
              <div className="text-xl font-black text-rose-700">{score.wrong}</div>
              <div className="text-[11px] text-rose-600 font-medium">Erros</div>
            </div>
          </div>

          <div className="text-xs font-semibold text-slate-600 mb-5">
            Aproveitamento da rodada: <span className="text-slate-900 font-bold">{percentage}%</span>
          </div>

          <button
            onClick={handleReshuffleCurrent}
            className="w-full py-3.5 px-5 rounded-2xl font-bold bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 transition-colors text-sm shadow-sm"
          >
            <Shuffle className="w-4 h-4" /> Fazer Nova Rodada
          </button>
        </div>
      </div>
    );
  }

  const hasActiveSecondaryFilters =
    selectedSubject !== 'all' || selectedDifficulty !== 'all' || hideSolved;

  return (
    <div className="max-w-3xl mx-auto space-y-3 pb-24 md:pb-10">
      {/* MODAL DE ZOOM PARA IMAGENS */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl p-3 sm:p-5 shadow-2xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-700">
                Visualização Ampliada • {currentQuestion?.source}
              </span>
              <button
                onClick={() => setZoomedImage(null)}
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <img
              src={zoomedImage}
              alt="Imagem ampliada da questão"
              className="w-full h-auto rounded-xl object-contain mx-auto"
            />
          </div>
        </div>
      )}

      {/* 1. BARRA DE FOCO MINIMALISTA (ESTILO DUOLINGO / BRILLIANT) */}
      <div className="bg-white border border-slate-200/90 px-3.5 py-2.5 rounded-2xl shadow-2xs flex items-center justify-between gap-2">
        {/* Foguinho Compacto + Barra Diária */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${
              streakAchievedToday
                ? 'bg-orange-500 text-white shadow-sm shadow-orange-500/30'
                : 'bg-orange-50 text-orange-500 border border-orange-200'
            }`}
          >
            <Flame className={`w-4 h-4 ${streakAchievedToday ? 'fill-white' : 'fill-orange-400'}`} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xs text-slate-900 whitespace-nowrap">
                {streakData.streak}d
              </span>
              <span className="text-[11px] font-mono font-bold text-orange-700">
                {streakData.todayCount}/10 hoje
              </span>
            </div>
            <div className="w-20 sm:w-28 bg-slate-100 h-1.5 rounded-full mt-1 overflow-hidden">
              <div
                className="bg-orange-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, (streakData.todayCount / 10) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Progresso da Sessão + Controles Rápidos */}
        <div className="flex items-center gap-1.5 shrink-0">
          {questionsList.length > 0 && (
            <span className="font-mono text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200/70">
              {currentIndex + 1}/{questionsList.length}
            </span>
          )}

          <button
            onClick={() => setLargeText(!largeText)}
            title="Alternar tamanho da letra"
            className={`p-1.5 rounded-xl border text-xs font-bold transition-all ${
              largeText
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setShowPerformance(!showPerformance)}
            title="Meu Desempenho por Matéria"
            className={`p-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 transition-all ${
              showPerformance
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">{totalSolvedCount}/{questionsData.length}</span>
          </button>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-bold flex items-center gap-1.5 transition-all relative ${
              showFilters
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filtros</span>
            {hasActiveSecondaryFilters && (
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
            )}
          </button>
        </div>
      </div>

      {/* POPUP DE PARABÉNS PELO FOGUINHO */}
      {streakCelebration && (
        <div className="p-3 bg-orange-500 text-white rounded-2xl shadow-lg flex items-center gap-2 animate-in zoom-in-95 duration-200">
          <Flame className="w-5 h-5 fill-white shrink-0" />
          <span className="font-bold text-xs sm:text-sm">
            Meta diária concluída! Foguinho de {streakData.streak} dias garantido! 🔥✨
          </span>
        </div>
      )}

      {/* 2. PÍLULAS RÁPIDAS DE MODO (1 ÚNICA LINHA ROLÁVEL) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
        <button
          onClick={() => {
            setOnlyErrors(false);
            setFilterMode('enem2025');
          }}
          className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold whitespace-nowrap flex items-center gap-1.5 border transition-all ${
            !onlyErrors && filterMode === 'enem2025'
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>ENEM 2025 (90)</span>
        </button>

        <button
          onClick={() => {
            setOnlyErrors(false);
            setFilterMode('express5');
          }}
          className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold whitespace-nowrap flex items-center gap-1.5 border transition-all ${
            !onlyErrors && filterMode === 'express5'
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Coffee className="w-3.5 h-3.5" />
          <span>Treino Express (5)</span>
        </button>

        <button
          onClick={() => {
            setOnlyErrors(false);
            setFilterMode('all');
          }}
          className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap border transition-all ${
            !onlyErrors && filterMode === 'all'
              ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          Todas (245)
        </button>

        <button
          onClick={() => {
            const next = !onlyErrors;
            setOnlyErrors(next);
            if (next) {
              setFilterMode('all');
              setHideSolved(false);
            }
          }}
          className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold whitespace-nowrap flex items-center gap-1 border transition-all ${
            onlyErrors
              ? 'bg-rose-600 text-white border-rose-600 shadow-2xs'
              : 'bg-rose-50/70 text-rose-800 border-rose-200 hover:bg-rose-100'
          }`}
        >
          <RotateCcw className="w-3 h-3" />
          <span>Meus Erros ({totalErrorsCount})</span>
        </button>

        <button
          onClick={() => {
            setOnlyErrors(false);
            setFilterMode('specials');
          }}
          className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap flex items-center gap-1 border transition-all ${
            !onlyErrors && filterMode === 'specials'
              ? 'bg-amber-500 text-white border-amber-500 shadow-2xs'
              : 'bg-amber-50/70 text-amber-900 border-amber-200 hover:bg-amber-100'
          }`}
        >
          <Star className={`w-3 h-3 ${!onlyErrors && filterMode === 'specials' ? 'fill-white' : 'fill-amber-500 text-amber-500'}`} />
          <span>Top 25</span>
        </button>
      </div>

      {/* 3. PAINEL DE DESEMPENHO POR MATÉRIA (BOTTOM SHEET NO CELULAR / CARD NO DESKTOP) */}
      {showPerformance && (
        <>
          <div
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-[1px] z-40 md:hidden"
            onClick={() => setShowPerformance(false)}
          />
          <div className="fixed inset-x-0 bottom-0 z-50 md:static md:z-auto bg-white border border-slate-200 rounded-t-3xl md:rounded-2xl p-4 sm:p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] md:pb-4 shadow-2xl md:shadow-xs max-h-[82dvh] overflow-y-auto space-y-3 animate-in slide-in-from-bottom-4 md:fade-in duration-150">
            <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-1 md:hidden" />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-indigo-600" />
                <span>Diagnóstico Pessoal ({totalSolvedCount} de {questionsData.length} resolvidas)</span>
              </div>
              <div className="flex items-center gap-2">
                {weakestSubject && (
                  <button
                    onClick={() => {
                      setSelectedSubject(weakestSubject.subject);
                      setFilterMode('all');
                      setOnlyErrors(false);
                      setShowPerformance(false);
                    }}
                    className="text-[11px] font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded-lg border border-indigo-200 transition-colors"
                  >
                    💡 Focar em {weakestSubject.label} ({weakestSubject.accuracy}%) →
                  </button>
                )}
                <button
                  onClick={() => setShowPerformance(false)}
                  className="md:hidden p-1.5 rounded-xl bg-slate-100 text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {subjectStats.map((s) => (
                <div key={s.subject} className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-800">{s.label}</span>
                    <span
                      className={`font-mono font-bold ${
                        s.accuracy === null
                          ? 'text-slate-400'
                          : s.accuracy >= 70
                          ? 'text-emerald-700'
                          : s.accuracy >= 50
                          ? 'text-amber-700'
                          : 'text-rose-600'
                      }`}
                    >
                      {s.accuracy === null ? '--' : `${s.accuracy}%`}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200/80 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        s.accuracy === null
                          ? 'bg-slate-300'
                          : s.accuracy >= 70
                          ? 'bg-emerald-500'
                          : s.accuracy >= 50
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                      style={{ width: `${s.accuracy ?? 0}%` }}
                    />
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {s.correct} acertos / {s.answered} feitas
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* 4. GAVETA DE FILTROS AVANÇADOS (BOTTOM SHEET NO CELULAR / PAINEL NO DESKTOP) */}
      {showFilters && (
        <>
          <div
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-[1px] z-40 md:hidden"
            onClick={() => setShowFilters(false)}
          />
          <div className="fixed inset-x-0 bottom-0 z-50 md:static md:z-auto bg-white border border-slate-200 rounded-t-3xl md:rounded-2xl p-4 sm:p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] md:pb-4 shadow-2xl md:shadow-xs max-h-[85dvh] overflow-y-auto space-y-3 animate-in slide-in-from-bottom-4 md:fade-in duration-150">
            <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-1 md:hidden" />
            <div className="flex items-center justify-between md:hidden pb-1">
              <span className="text-sm font-bold text-slate-900">Filtros & Modo de Estudo</span>
              <button
                onClick={() => setShowFilters(false)}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {/* Disciplinas */}
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                Disciplina
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                {[
                  { id: 'all', label: 'Todas', count: getFilteredBase('all').length, icon: Shuffle },
                  { id: 'matematica', label: 'Matemática', count: getFilteredBase('matematica').length, icon: Calculator },
                  { id: 'fisica', label: 'Física', count: getFilteredBase('fisica').length, icon: Atom },
                  { id: 'quimica', label: 'Química', count: getFilteredBase('quimica').length, icon: TestTube2 },
                  { id: 'biologia', label: 'Biologia', count: getFilteredBase('biologia').length, icon: Dna },
                ].map((tab) => {
                  const TabIcon = tab.icon;
                  const isSelected = selectedSubject === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedSubject(tab.id as any)}
                      className={`py-2.5 px-2.5 rounded-xl flex items-center justify-between sm:flex-col sm:justify-center gap-0.5 border transition-all text-left sm:text-center ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <TabIcon className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-xs font-medium">{tab.label}</span>
                      </div>
                      <span className={`text-[10px] ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dificuldade & Controles */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1 flex-wrap">
                {[
                  { id: 'all', label: 'Todas' },
                  { id: 1, label: '🌶️ Fácil' },
                  { id: 2, label: '🌶️🌶️ Média' },
                  { id: 3, label: '🌶️🌶️🌶️ Difícil' },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setSelectedDifficulty(lvl.id as any)}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                      selectedDifficulty === lvl.id
                        ? 'bg-rose-600 text-white font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                {filterMode === 'enem2025' && (
                  <button
                    onClick={() => setSequentialOrder(!sequentialOrder)}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold flex items-center gap-1 border ${
                      sequentialOrder
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    <ListOrdered className="w-3.5 h-3.5" />
                    <span>{sequentialOrder ? 'Q91→Q180' : 'Aleatório'}</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    const next = !hideSolved;
                    setHideSolved(next);
                    if (next) setOnlyErrors(false);
                  }}
                  className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold border ${
                    hideSolved
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {hideSolved ? '✓ Só Inéditas' : 'Pular Resolvidas'}
                </button>

                <button
                  onClick={handleReshuffleCurrent}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                  title="Embaralhar questões"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Ir para questão específica & Zerar */}
            {questionsList.length > 0 && (
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-slate-500">Ir para:</span>
                  <select
                    value={currentIndex}
                    onChange={(e) => {
                      setCurrentIndex(Number(e.target.value));
                      setSelectedOption(null);
                      setIsConfirmed(false);
                      setShowFilters(false);
                    }}
                    className="text-[11px] bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-slate-800 font-medium max-w-[200px] truncate"
                  >
                    {questionsList.map((q, idx) => (
                      <option key={q.id} value={idx}>
                        {idx + 1}. {q.source.replace(' (Caderno 5 Amarelo)', '')}
                      </option>
                    ))}
                  </select>
                </div>

                {totalSolvedCount > 0 && (
                  <button
                    onClick={() => {
                      setOnlyErrors(false);
                      setHideSolved(false);
                      setSolvedMap(resetSolvedQuestions());
                    }}
                    className="text-[11px] text-slate-400 hover:text-rose-600 underline"
                  >
                    Zerar histórico salvo
                  </button>
                )}
              </div>
            )}

            <button
              onClick={() => setShowFilters(false)}
              className="md:hidden w-full py-3 rounded-2xl bg-slate-900 text-white font-bold text-xs"
            >
              Aplicar e Voltar à Questão
            </button>
          </div>
        </>
      )}

      {/* ESTADO VAZIO (QUANDO FILTRO NÃO TEM QUESTÕES) */}
      {!currentQuestion ? (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-xs">
          <p className="text-slate-700 font-semibold text-sm">
            {onlyErrors
              ? '🏆 Parabéns! Você não tem nenhum erro pendente neste filtro!'
              : hideSolved
              ? '🎉 Você já resolveu todas as questões deste filtro!'
              : 'Nenhuma questão encontrada para este filtro selecionado.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(onlyErrors || hideSolved) && (
              <button
                onClick={() => {
                  setOnlyErrors(false);
                  setHideSolved(false);
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold"
              >
                Voltar às Questões Normais
              </button>
            )}
            <button
              onClick={() => {
                setOnlyErrors(false);
                setHideSolved(false);
                setFilterMode('all');
                setSelectedDifficulty('all');
                setSelectedSubject('all');
              }}
              className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold"
            >
              Ver Todas as Questões (245)
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* 5. CARTÃO DA QUESTÃO (DESIGN LIMPO E RESPIRÁVEL) */}
          {(() => {
            const badge = getSubjectBadge(currentQuestion.subject);
            const Icon = badge.icon;

            return (
              <div
                className={`bg-white border rounded-3xl p-4 sm:p-6 md:p-7 shadow-sm transition-all ${
                  currentQuestion.isSpecial ? 'border-amber-300/80 ring-1 ring-amber-200/40' : 'border-slate-200/90'
                }`}
              >
                {/* Tag Especial Amarela */}
                {currentQuestion.isSpecial && (
                  <div className="mb-3.5 px-3 py-2 bg-amber-50/90 border border-amber-200/80 rounded-2xl flex items-center gap-2 text-amber-950 text-xs font-semibold">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-600 shrink-0" />
                    <span>{currentQuestion.specialReason || '⭐ Questão Especial • Alta Recorrência no ENEM'}</span>
                  </div>
                )}

                {/* Metadados + Pular discreto */}
                <div className="flex items-center justify-between gap-2 mb-3.5 pb-3 border-b border-slate-100 flex-wrap">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] font-semibold border ${badge.color}`}>
                      <Icon className="w-3 h-3" />
                      {badge.label} • {currentQuestion.topic}
                    </span>

                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-lg text-[11px] font-bold border ${
                        currentQuestion.difficulty === 1
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : currentQuestion.difficulty === 2
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : 'bg-rose-50 text-rose-800 border-rose-200'
                      }`}
                    >
                      {currentQuestion.difficulty === 1 && '🌶️ Fácil'}
                      {currentQuestion.difficulty === 2 && '🌶️🌶️ Média'}
                      {currentQuestion.difficulty === 3 && '🌶️🌶️🌶️ Difícil'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {solvedMap[currentQuestion.id] !== undefined && (
                      <span
                        className={`px-2 py-0.5 rounded-lg text-[10px] font-bold border ${
                          solvedMap[currentQuestion.id]
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}
                      >
                        {solvedMap[currentQuestion.id] ? '✓ Acertou' : '↺ Revisar'}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200/80 font-mono">
                      {currentQuestion.source.replace(' (Caderno 5 Amarelo)', '')}
                    </span>
                  </div>
                </div>

                {/* Contexto */}
                {currentQuestion.context && (
                  <p
                    className={`text-slate-700 leading-relaxed mb-4 font-serif-academic whitespace-pre-line ${
                      largeText ? 'text-base sm:text-[17px]' : 'text-[14px] sm:text-[15px]'
                    }`}
                  >
                    {currentQuestion.context}
                  </p>
                )}

                {/* Imagem Oficial */}
                {currentQuestion.imageUrl && (
                  <div className="my-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-3 sm:p-4 text-center">
                    <div className="relative inline-block max-w-full">
                      <img
                        src={currentQuestion.imageUrl}
                        alt={`Figura da questão ${currentQuestion.source}`}
                        onClick={() => setZoomedImage(currentQuestion.imageUrl!)}
                        className="max-h-[420px] w-auto mx-auto rounded-xl border border-slate-200 bg-white shadow-2xs cursor-zoom-in transition-transform hover:scale-[1.01]"
                      />
                      <button
                        type="button"
                        onClick={() => setZoomedImage(currentQuestion.imageUrl!)}
                        className="mt-2 inline-flex items-center gap-1 text-[11px] text-indigo-600 hover:text-indigo-800 font-semibold"
                      >
                        <ZoomIn className="w-3.5 h-3.5" /> Tocar para ampliar figura
                      </button>
                    </div>

                    {currentQuestion.secondaryImageUrl && (
                      <div className="mt-3 pt-3 border-t border-slate-200/70">
                        <img
                          src={currentQuestion.secondaryImageUrl}
                          alt={`Segunda figura da questão ${currentQuestion.source}`}
                          onClick={() => setZoomedImage(currentQuestion.secondaryImageUrl!)}
                          className="max-h-[380px] w-auto mx-auto rounded-xl border border-slate-200 bg-white shadow-2xs cursor-zoom-in"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Comando Direto */}
                <h3
                  className={`text-slate-900 font-bold mb-4 leading-snug ${
                    largeText ? 'text-base sm:text-xl' : 'text-[15px] sm:text-lg'
                  }`}
                >
                  {currentQuestion.question}
                </h3>

                {/* Alternativas Táteis */}
                <div className="space-y-2.5 mb-5">
                  {currentQuestion.options.map((opt) => {
                    const isSelected = selectedOption === opt.letter;
                    const isCorrect = currentQuestion.correctAnswer === opt.letter;

                    let buttonStyle =
                      'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 text-slate-800';
                    let circleStyle = 'border-slate-300 text-slate-600 bg-slate-50';

                    if (isSelected && !isConfirmed) {
                      buttonStyle =
                        'bg-indigo-50/80 border-indigo-600 ring-2 ring-indigo-500/15 text-indigo-950 font-medium';
                      circleStyle = 'border-indigo-600 bg-indigo-600 text-white font-bold';
                    }

                    if (isConfirmed) {
                      if (isCorrect) {
                        buttonStyle =
                          'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/15 text-emerald-950 font-medium';
                        circleStyle = 'border-emerald-600 bg-emerald-600 text-white font-bold';
                      } else if (isSelected && !isCorrect) {
                        buttonStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                        circleStyle = 'border-rose-500 bg-rose-500 text-white font-bold';
                      } else {
                        buttonStyle = 'bg-slate-50/40 border-slate-200 opacity-45 text-slate-400';
                      }
                    }

                    return (
                      <button
                        key={opt.letter}
                        onClick={() => handleSelectOption(opt.letter)}
                        disabled={isConfirmed}
                        className={`w-full text-left p-3.5 min-h-[52px] rounded-2xl border transition-all duration-150 flex items-start gap-3 select-none active:scale-[0.99] ${buttonStyle}`}
                      >
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 border transition-colors ${circleStyle}`}
                        >
                          {opt.letter}
                        </span>
                        <div className="flex-1 space-y-2">
                          <span
                            className={`leading-relaxed pt-0.5 block ${
                              largeText ? 'text-sm sm:text-base' : 'text-[13px] sm:text-sm md:text-[15px]'
                            }`}
                          >
                            {opt.text}
                          </span>
                          {opt.imageUrl && (
                            <div className="pt-1">
                              <img
                                src={opt.imageUrl}
                                alt={`Alternativa ${opt.letter}`}
                                className="max-h-44 w-auto rounded-xl border border-slate-200 bg-white p-1"
                              />
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Barra de Ação Inferior (Sticky na Zona do Polegar no Celular!) */}
                <div className="fixed bottom-[56px] left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_16px_rgba(15,23,42,0.06)] md:static md:bg-transparent md:border-0 md:p-0 md:shadow-none flex items-center gap-2">
                  {!isConfirmed ? (
                    <>
                      <button
                        onClick={handleNextQuestion}
                        className="px-4 h-12 rounded-2xl font-semibold text-xs text-slate-600 hover:text-slate-900 bg-slate-100 md:bg-white hover:bg-slate-200 border border-slate-200 transition-colors shrink-0"
                      >
                        Pular
                      </button>
                      <button
                        onClick={handleConfirmAnswer}
                        disabled={!selectedOption}
                        className={`flex-1 h-12 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all text-sm ${
                          selectedOption
                            ? 'bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white shadow-sm cursor-pointer'
                            : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                        }`}
                      >
                        {selectedOption ? `Confirmar Letra ${selectedOption}` : 'Escolha uma alternativa'}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="w-full h-12 rounded-2xl font-bold bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white shadow-sm flex items-center justify-center gap-2 transition-all text-sm"
                    >
                      {currentIndex + 1 < questionsList.length ? (
                        <>
                          Continuar ({currentIndex + 2}/{questionsList.length}) <ChevronRight className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Finalizar Sessão <Award className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })()}

          {/* 6. RESOLUÇÃO & EXPLICAÇÃO */}
          {isConfirmed && (
            <div ref={explanationRef} className="bg-white border border-slate-200/90 rounded-3xl p-4 sm:p-6 shadow-sm space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
                {selectedOption === currentQuestion.correctAnswer ? (
                  <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Mandou bem! Resposta Correta</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-rose-600 font-extrabold text-sm sm:text-base">
                    <XCircle className="w-5 h-5 shrink-0" />
                    <span>Gabarito Oficial: Letra {currentQuestion.correctAnswer}</span>
                  </div>
                )}

                <span className="text-[11px] text-slate-400 font-medium">
                  Sessão: {score.correct}✓ {score.wrong}✗
                </span>
              </div>

              <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-emerald-950 text-xs sm:text-sm">
                <span className="font-bold text-emerald-800 mb-1 text-[11px] uppercase tracking-wider flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" /> Como Matar em Menos de 45s:
                </span>
                <p className="leading-relaxed font-medium whitespace-pre-line">
                  {currentQuestion.explanation.quickHack}
                </p>
              </div>

              <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-2xl text-amber-950 text-xs sm:text-sm flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-800 block mb-0.5 text-[11px] uppercase tracking-wider">
                    Economia de Tempo:
                  </span>
                  <span>{currentQuestion.explanation.timeSaverTip}</span>
                </div>
              </div>

              {currentQuestion.explanation.deepMemoryFact && (
                <div className="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-2xl text-indigo-950 text-xs sm:text-sm flex items-start gap-2">
                  <Brain className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-indigo-900 block mb-0.5 text-[11px] uppercase tracking-wider">
                      🧠 Informação Extra de Alta Retenção:
                    </span>
                    <span className="leading-relaxed">{currentQuestion.explanation.deepMemoryFact}</span>
                  </div>
                </div>
              )}

              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
                  Passo a Passo:
                </span>
                <div className="space-y-1">
                  {currentQuestion.explanation.stepByStep.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-slate-50 rounded-xl text-slate-700 text-[11px] sm:text-xs border border-slate-200/70 font-mono"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {currentQuestion.explanation.trapAlert && (
                <div className="p-3 bg-rose-50/70 border border-rose-200 rounded-2xl text-rose-950 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-rose-800 text-[11px] uppercase tracking-wider">
                      Atenção à Pegadinha:{' '}
                    </span>
                    <span className="text-slate-700">{currentQuestion.explanation.trapAlert}</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
