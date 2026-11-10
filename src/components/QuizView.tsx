import React, { useState, useEffect } from 'react';
import { Question, Subject } from '../types';
import { questionsData } from '../data/questions';
import { loadUserDailyProgress, incrementUserTodayAnswered, UserDailyProgress } from '../utils/streak';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  ChevronRight,
  RotateCcw,
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
  Flame
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
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'all'>('matematica');
  const [onlySpecials, setOnlySpecials] = useState<boolean>(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | 'all'>('all');
  const [questionsList, setQuestionsList] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | 'E' | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [quizFinished, setQuizFinished] = useState(false);

  // Progresso do Foguinho (Streak Diário)
  const [streakData, setStreakData] = useState<UserDailyProgress>(loadUserDailyProgress());
  const [streakCelebration, setStreakCelebration] = useState(false);

  // Carrega e atualiza streak ao montar
  useEffect(() => {
    setStreakData(loadUserDailyProgress());
  }, []);

  // Embaralha aleatoriamente as questões sempre que a matéria ou o filtro de especiais ou dificuldade mudar
  useEffect(() => {
    let filtered = questionsData.filter(
      (q) => selectedSubject === 'all' || q.subject === selectedSubject
    );

    if (onlySpecials) {
      filtered = filtered.filter((q) => q.isSpecial);
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter((q) => q.difficulty === selectedDifficulty);
    }

    setQuestionsList(shuffleArray(filtered));
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsConfirmed(false);
    setScore({ correct: 0, wrong: 0 });
    setQuizFinished(false);
  }, [selectedSubject, onlySpecials, selectedDifficulty]);

  const currentQuestion: Question | undefined = questionsList[currentIndex];

  const handleSelectSubject = (subject: Subject | 'all') => {
    setSelectedSubject(subject);
  };

  const handleSelectOption = (letter: 'A' | 'B' | 'C' | 'D' | 'E') => {
    if (isConfirmed) return;
    setSelectedOption(letter);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOption || !currentQuestion) return;

    setIsConfirmed(true);
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    // Incrementa contagem diária do Foguinho
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
    let filtered = questionsData.filter(
      (q) => selectedSubject === 'all' || q.subject === selectedSubject
    );
    if (onlySpecials) {
      filtered = filtered.filter((q) => q.isSpecial);
    }
    setQuestionsList(shuffleArray(filtered));
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

  if (quizFinished) {
    const total = score.correct + score.wrong;
    const percentage = total > 0 ? Math.round((score.correct / total) * 100) : 0;

    return (
      <div className="max-w-xl mx-auto py-6 px-3 text-center">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
            <Award className="w-6 h-6" />
          </div>

          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-1">
            Sessão Concluída!
          </h2>
          <p className="text-slate-500 text-xs mb-5">
            Mais um bloco dominado. Resolver em intervalos curtos é o método mais eficiente!
          </p>

          <div className="grid grid-cols-3 gap-2 my-4">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-lg font-bold text-slate-800">{total}</div>
              <div className="text-[10px] text-slate-500">Feitas</div>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-lg font-bold text-emerald-700">{score.correct}</div>
              <div className="text-[10px] text-emerald-600">Acertos</div>
            </div>
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
              <div className="text-lg font-bold text-rose-700">{score.wrong}</div>
              <div className="text-[10px] text-rose-600">Erros</div>
            </div>
          </div>

          <div className="text-xs font-semibold text-slate-600 mb-5">
            Aproveitamento: <span className="text-slate-900 font-bold">{percentage}%</span>
          </div>

          <button
            onClick={handleReshuffleCurrent}
            className="w-full py-3 px-5 rounded-xl font-semibold bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm shadow-xs"
          >
            <Shuffle className="w-4 h-4" /> Nova Rodada Embaralhada
          </button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
        <p className="text-slate-600 text-sm mb-3">Nenhuma questão encontrada para este filtro selecionado.</p>
        <button
          onClick={() => {
            setOnlySpecials(false);
            setSelectedDifficulty('all');
            setSelectedSubject('matematica');
          }}
          className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold"
        >
          Limpar Filtros e Ver Todas
        </button>
      </div>
    );
  }

  const badge = getSubjectBadge(currentQuestion.subject);
  const Icon = badge.icon;
  const streakAchievedToday = streakData.todayCount >= 10;

  return (
    <div className="max-w-3xl mx-auto space-y-3 pb-8">
      {/* CARD DO FOGUINHO (STREAK DIÁRIO COM META DE 10 QUESTÕES) */}
      <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-rose-50 border border-orange-200 p-3 sm:p-4 rounded-2xl shadow-2xs flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
            streakAchievedToday
              ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 animate-bounce'
              : 'bg-white text-orange-500 border border-orange-200'
          }`}>
            <Flame className={`w-6 h-6 ${streakAchievedToday ? 'fill-white stroke-orange-500' : 'fill-orange-400'}`} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm sm:text-base text-slate-900">
                {streakData.streak} {streakData.streak === 1 ? 'dia de foco' : 'dias de foco'}
              </span>
              {streakAchievedToday && (
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-orange-500 text-white uppercase tracking-wider">
                  Meta Batida! 🔥
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-600">
              {streakAchievedToday
                ? `Sensacional! Você já resolveu ${streakData.todayCount} questões hoje!`
                : `Resolva ${10 - streakData.todayCount} questões hoje para manter seu foguinho ativo!`}
            </p>
          </div>
        </div>

        {/* Barra de Progresso Circular ou Linear Compacta */}
        <div className="text-right shrink-0">
          <span className="font-mono text-xs font-bold text-orange-800">
            {streakData.todayCount}/10
          </span>
          <div className="w-16 sm:w-20 bg-orange-200/80 h-2 rounded-full mt-1 overflow-hidden">
            <div
              className="bg-orange-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, (streakData.todayCount / 10) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* POPUP DE PARABÉNS PELO FOGUINHO QUANDO ATINGE 10 */}
      {streakCelebration && (
        <div className="p-3 bg-orange-500 text-white rounded-2xl shadow-lg flex items-center justify-between animate-in zoom-in-95 duration-200">
          <div className="flex items-center gap-2">
            <Flame className="w-6 h-6 fill-white text-orange-500" />
            <span className="font-bold text-xs sm:text-sm">
              Parabéns! Meta diária concluída! Foguinho de {streakData.streak} dias garantido! 🔥✨
            </span>
          </div>
        </div>
      )}

      {/* SELETOR DE MATÉRIA & FILTRO ESPECIAL */}
      <div className="bg-white border border-slate-200 p-3 sm:p-4 rounded-2xl shadow-2xs space-y-2.5">
        <div className="flex items-center justify-between text-xs text-slate-600 px-0.5 font-medium">
          <span className="text-[11px] sm:text-xs">Disciplina:</span>

          <div className="flex items-center gap-2">
            {/* Toggle de Apenas Especiais (Top Campeãs) */}
            <button
              onClick={() => setOnlySpecials(!onlySpecials)}
              className={`px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 transition-all ${
                onlySpecials
                  ? 'bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <Star className={`w-3 h-3 ${onlySpecials ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span>Apenas Campeãs (Top 25)</span>
            </button>

            <span className="font-mono text-slate-600 text-[11px]">
              {currentIndex + 1}/{questionsList.length}
            </span>
            <button
              onClick={handleReshuffleCurrent}
              title="Embaralhar ordem"
              className="p-1 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <Shuffle className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Botões das matérias com touch target confortável */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
          {[
            { id: 'matematica', label: 'Matemática', count: onlySpecials ? 10 : 65, icon: Calculator },
            { id: 'fisica', label: 'Física', count: onlySpecials ? 5 : 30, icon: Atom },
            { id: 'quimica', label: 'Química', count: onlySpecials ? 5 : 30, icon: TestTube2 },
            { id: 'biologia', label: 'Biologia', count: onlySpecials ? 5 : 30, icon: Dna },
            { id: 'all', label: 'Misto', count: onlySpecials ? 25 : 155, icon: Shuffle },
          ].map((tab) => {
            const TabIcon = tab.icon;
            const isSelected = selectedSubject === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleSelectSubject(tab.id as any)}
                className={`py-2 px-1.5 rounded-xl flex flex-col items-center justify-center gap-0.5 border transition-all text-center select-none active:scale-98 ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs font-semibold'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-1">
                  <TabIcon className="w-3 h-3 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-medium leading-tight truncate">{tab.label}</span>
                </div>
                <span className={`text-[9px] ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                  {tab.count} quest.
                </span>
              </button>
            );
          })}
        </div>

        {/* Filtro por Índice de Dificuldade (Pimentinhas) */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 flex-wrap gap-2">
          <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1">
            Dificuldade:
          </span>
          <div className="flex items-center gap-1">
            {[
              { id: 'all', label: 'Todas' },
              { id: 1, label: '🌶️ Fácil' },
              { id: 2, label: '🌶️🌶️ Média' },
              { id: 3, label: '🌶️🌶️🌶️ Difícil' },
            ].map((lvl) => {
              const isLvlSelected = selectedDifficulty === lvl.id;
              return (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedDifficulty(lvl.id as any)}
                  className={`px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all ${
                    isLvlSelected
                      ? 'bg-rose-600 text-white shadow-2xs font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {lvl.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Placar Acadêmico Rápido */}
        <div className="flex items-center justify-between pt-1.5 border-t border-slate-100 text-[11px] sm:text-xs px-0.5">
          <div className="flex items-center gap-3">
            <span className="text-emerald-700 font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> {score.correct} acertos
            </span>
            <span className="text-rose-600 font-medium flex items-center gap-1">
              <XCircle className="w-3.5 h-3.5" /> {score.wrong} erros
            </span>
          </div>

          <button
            onClick={handleNextQuestion}
            className="text-[11px] text-slate-500 hover:text-slate-800 underline transition-colors"
          >
            Pular questão →
          </button>
        </div>
      </div>

      {/* CARTÃO DA QUESTÃO (COM TAG ESPECIAL AMARELA DESTACADA) */}
      <div className={`bg-white border rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs transition-all ${
        currentQuestion.isSpecial ? 'border-amber-300/80 ring-1 ring-amber-200/50' : 'border-slate-200'
      }`}>
        {/* TAG ESPECIAL AMARELA EM DESTAQUE NO TOPO (QUANDO FOR QUESTÃO TOP CAMPEÃ) */}
        {currentQuestion.isSpecial && (
          <div className="mb-3 p-2 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-2 text-amber-950 text-xs font-semibold animate-in fade-in duration-150">
            <Star className="w-4 h-4 fill-amber-500 text-amber-600 shrink-0" />
            <span>{currentQuestion.specialReason || '⭐ Questão Especial • Tópico de Alta Recorrência no ENEM'}</span>
          </div>
        )}

        {/* Metadados: Disciplina, Dificuldade em Pimentinhas e Fonte */}
        <div className="flex items-center justify-between gap-1.5 mb-3 pb-2.5 border-b border-slate-100 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium border ${badge.color}`}>
              <Icon className="w-3 h-3" />
              {badge.label} • {currentQuestion.topic}
            </span>

            {/* Selo Visual de Dificuldade com Pimentinhas */}
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold border ${
              currentQuestion.difficulty === 1
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : currentQuestion.difficulty === 2
                ? 'bg-amber-50 text-amber-800 border-amber-200'
                : 'bg-rose-50 text-rose-800 border-rose-200'
            }`}>
              {currentQuestion.difficulty === 1 && '🌶️ Fácil'}
              {currentQuestion.difficulty === 2 && '🌶️🌶️ Média'}
              {currentQuestion.difficulty === 3 && '🌶️🌶️🌶️ Difícil'}
            </span>
          </div>

          <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200 font-mono">
            {currentQuestion.source}
          </span>
        </div>

        {/* Contexto Enxuto Acadêmico */}
        {currentQuestion.context && (
          <p className="text-slate-700 text-[13px] sm:text-sm md:text-base leading-relaxed mb-3.5 font-serif-academic text-justify">
            {currentQuestion.context}
          </p>
        )}

        {/* Comando Direto */}
        <h3 className="text-slate-900 font-bold text-sm sm:text-base md:text-lg mb-4 leading-snug">
          {currentQuestion.question}
        </h3>

        {/* Alternativas */}
        <div className="space-y-2 mb-5">
          {currentQuestion.options.map((opt) => {
            const isSelected = selectedOption === opt.letter;
            const isCorrect = currentQuestion.correctAnswer === opt.letter;

            let buttonStyle = 'bg-white border-slate-200 hover:border-slate-300 text-slate-800 active:bg-slate-50';
            let circleStyle = 'border-slate-300 text-slate-500 bg-slate-50';

            if (isSelected && !isConfirmed) {
              buttonStyle = 'bg-indigo-50/70 border-indigo-600 text-indigo-950 font-medium';
              circleStyle = 'border-indigo-600 bg-indigo-600 text-white font-bold';
            }

            if (isConfirmed) {
              if (isCorrect) {
                buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium';
                circleStyle = 'border-emerald-600 bg-emerald-600 text-white font-bold';
              } else if (isSelected && !isCorrect) {
                buttonStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                circleStyle = 'border-rose-500 bg-rose-500 text-white font-bold';
              } else {
                buttonStyle = 'bg-slate-50/40 border-slate-200 opacity-40 text-slate-400';
              }
            }

            return (
              <button
                key={opt.letter}
                onClick={() => handleSelectOption(opt.letter)}
                disabled={isConfirmed}
                className={`w-full text-left p-3 rounded-xl border transition-all duration-150 flex items-start gap-3 select-none active:scale-99 ${buttonStyle}`}
              >
                <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-semibold shrink-0 border transition-colors ${circleStyle}`}>
                  {opt.letter}
                </span>
                <span className="text-[13px] sm:text-sm md:text-base leading-relaxed pt-0.5">
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Botão de Resposta */}
        {!isConfirmed ? (
          <button
            onClick={handleConfirmAnswer}
            disabled={!selectedOption}
            className={`w-full h-12 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all text-sm ${
              selectedOption
                ? 'bg-slate-900 active:bg-slate-800 text-white shadow-sm cursor-pointer'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
            }`}
          >
            Confirmar Resposta
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="w-full h-12 rounded-xl font-semibold bg-indigo-600 active:bg-indigo-700 text-white shadow-sm flex items-center justify-center gap-2 transition-all text-sm"
          >
            {currentIndex + 1 < questionsList.length ? (
              <>
                Próxima ({currentIndex + 2}/{questionsList.length}) <ChevronRight className="w-4 h-4" />
              </>
            ) : (
              <>
                Finalizar Sessão <Award className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>

      {/* RESOLUÇÃO E INFORMAÇÕES DE MEMÓRIA PROFUNDA */}
      {isConfirmed && (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
            {selectedOption === currentQuestion.correctAnswer ? (
              <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-sm sm:text-base">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Resposta Correta!</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-rose-600 font-bold text-sm sm:text-base">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>Gabarito Oficial: Letra {currentQuestion.correctAnswer}</span>
              </div>
            )}
          </div>

          {/* O Bizu Relâmpago */}
          <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-emerald-950 text-xs sm:text-sm">
            <span className="font-bold text-emerald-800 block mb-1 text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-1">
              <Zap className="w-3 h-3 text-emerald-600" /> Como Matar em Menos de 45s:
            </span>
            <p className="leading-relaxed font-medium">{currentQuestion.explanation.quickHack}</p>
          </div>

          {/* Dica de Economia de Tempo */}
          <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-amber-950 text-xs sm:text-sm flex items-start gap-2">
            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-800 block mb-0.5 text-[11px] sm:text-xs uppercase tracking-wider">
                Economia de Tempo:
              </span>
              <span>{currentQuestion.explanation.timeSaverTip}</span>
            </div>
          </div>

          {/* INFORMAÇÃO DENSA ADICIONAL PARA MEMÓRIA FOTOGRÁFICA */}
          {currentQuestion.explanation.deepMemoryFact && (
            <div className="p-3 bg-indigo-50/70 border border-indigo-200 rounded-xl text-indigo-950 text-xs sm:text-sm flex items-start gap-2">
              <Brain className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-indigo-900 block mb-0.5 text-[11px] sm:text-xs uppercase tracking-wider">
                  🧠 Informação Extra de Alta Retenção:
                </span>
                <span className="leading-relaxed">{currentQuestion.explanation.deepMemoryFact}</span>
              </div>
            </div>
          )}

          {/* Demonstração Passo a Passo */}
          <div className="space-y-1 pt-1">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
              Passo a Passo:
            </span>
            <div className="space-y-1">
              {currentQuestion.explanation.stepByStep.map((step, idx) => (
                <div key={idx} className="p-2 bg-slate-50 rounded-lg text-slate-700 text-[11px] sm:text-xs border border-slate-200/60 font-mono">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Pegadinha da Banca */}
          {currentQuestion.explanation.trapAlert && (
            <div className="p-2.5 bg-rose-50/70 border border-rose-200 rounded-xl text-rose-950 text-xs flex items-start gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-rose-800 text-[11px] uppercase tracking-wider">Atenção à Pegadinha: </span>
                <span className="text-slate-700">{currentQuestion.explanation.trapAlert}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
