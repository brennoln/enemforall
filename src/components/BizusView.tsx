import React, { useState, useEffect } from 'react';
import { Subject } from '../types';
import { bizusData } from '../data/bizus';
import { studyTrailsData } from '../data/studyTrails';
import { videoLessonsData } from '../data/videoLessons';
import { TrailVisual } from './TrailVisual';
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
  AlertTriangle,
  Layers,
  Copy,
  Check,
  Map,
  BookOpen,
  Lightbulb,
  Play,
  Video,
  ExternalLink
} from 'lucide-react';

const TRAIL_STORAGE_KEY = 'enem_para_todos_trail_done_v1';

export const BizusView: React.FC = () => {
  const [mainMode, setMainMode] = useState<'trilha' | 'aulas' | 'revisao'>('trilha');
  const [trailSubject, setTrailSubject] = useState<Subject>('matematica');
  const [aulasSubject, setAulasSubject] = useState<'all' | Subject>('matematica');
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const [expandedStepId, setExpandedStepId] = useState<string | null>('trail-mat-1');
  const [miniQuizAnswers, setMiniQuizAnswers] = useState<Record<string, number>>({});

  const [activeSubTab, setActiveSubTab] = useState<'revisao' | 'mapeamento' | 'chute' | 'bizus'>('revisao');
  const [megaAreaFilter, setMegaAreaFilter] = useState<'all' | 'biologia' | 'quimica' | 'fisica' | 'geometria'>('all');
  const [copiedArea, setCopiedArea] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(TRAIL_STORAGE_KEY);
      if (raw) setCompletedSteps(JSON.parse(raw));
    } catch {}
  }, []);

  const toggleStepCompleted = (stepId: string) => {
    setCompletedSteps((prev) => {
      const next = { ...prev, [stepId]: !prev[stepId] };
      try {
        localStorage.setItem(TRAIL_STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleCopyArea = (areaId: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedArea(areaId);
    setTimeout(() => setCopiedArea(null), 2000);
  };

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

  const activeTrail = studyTrailsData.find((t) => t.subject === trailSubject) || studyTrailsData[0];
  const activeTrailDone = activeTrail.steps.filter((s) => completedSteps[s.id]).length;

  return (
    <div className="space-y-4 max-w-4xl mx-auto pb-12">
      {/* Cabeçalho de Estudos com Seletor Principal: Trilha de Estudos vs Revisão */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Bookmark className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Central de Estudos
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Escolha entre aprender passo a passo na <strong>Trilha de Estudos</strong>, assistir <strong>Aulas no YouTube</strong> por matéria ou revisar rápido em <strong>Revisão</strong>.
            </p>
          </div>
        </div>

        {/* Seletor Principal: Trilha de Estudos vs Aulas vs Revisão */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
          <button
            onClick={() => setMainMode('trilha')}
            className={`py-2.5 px-2 sm:px-3 rounded-xl font-bold text-[11px] sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${
              mainMode === 'trilha'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Map className="w-4 h-4 shrink-0" />
            <span className="truncate">Trilha</span>
          </button>

          <button
            onClick={() => setMainMode('aulas')}
            className={`py-2.5 px-2 sm:px-3 rounded-xl font-bold text-[11px] sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${
              mainMode === 'aulas'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Video className="w-4 h-4 shrink-0" />
            <span className="truncate">Aulas</span>
          </button>

          <button
            onClick={() => setMainMode('revisao')}
            className={`py-2.5 px-2 sm:px-3 rounded-xl font-bold text-[11px] sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${
              mainMode === 'revisao'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            <span className="truncate">Revisão</span>
          </button>
        </div>

        {/* Sub-navegação rápida da aba REVISÃO */}
        {mainMode === 'revisao' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <button
              onClick={() => setActiveSubTab('revisao')}
              className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 border transition-all ${
                activeSubTab === 'revisao'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-emerald-50/70 text-emerald-900 border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>📚 Mega Revisão</span>
            </button>

            <button
              onClick={() => setActiveSubTab('mapeamento')}
              className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 border transition-all ${
                activeSubTab === 'mapeamento'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <BarChart3 className="w-4 h-4 shrink-0" />
              <span>📊 Raio-X 2025</span>
            </button>

            <button
              onClick={() => setActiveSubTab('chute')}
              className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 border transition-all ${
                activeSubTab === 'chute'
                  ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                  : 'bg-amber-50/70 text-amber-900 border-amber-200 hover:bg-amber-100'
              }`}
            >
              <Target className="w-4 h-4 shrink-0" />
              <span>🎯 Chute & TRI</span>
            </button>

            <button
              onClick={() => setActiveSubTab('bizus')}
              className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 border transition-all ${
                activeSubTab === 'bizus'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Zap className="w-4 h-4 shrink-0" />
              <span>⚡ Bizus ({bizusData.length})</span>
            </button>
          </div>
        )}
      </div>

      {/* ==================== MODO 1: TRILHA DE ESTUDOS POR MATÉRIA ==================== */}
      {mainMode === 'trilha' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          {/* Seletor das 4 Matérias */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {studyTrailsData.map((trail) => {
              const badge = getSubjectBadge(trail.subject);
              const Icon = badge.icon;
              const doneCount = trail.steps.filter((s) => completedSteps[s.id]).length;
              const isSelected = trailSubject === trail.subject;

              return (
                <button
                  key={trail.subject}
                  onClick={() => {
                    setTrailSubject(trail.subject);
                    setExpandedStepId(trail.steps[0]?.id ?? null);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm">
                      <Icon className="w-4 h-4 shrink-0" />
                      {trail.label}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md ${
                      isSelected ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {doneCount}/{trail.steps.length}
                    </span>
                  </div>
                  <div className={`w-full h-1.5 rounded-full overflow-hidden ${isSelected ? 'bg-white/20' : 'bg-slate-100'}`}>
                    <div
                      className={`h-full rounded-full transition-all ${isSelected ? 'bg-emerald-400' : 'bg-emerald-500'}`}
                      style={{ width: `${(doneCount / trail.steps.length) * 100}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Cabeçalho da Trilha Selecionada + CTA Principal (Duolingo Playbook) */}
          {(() => {
            const nextStep = activeTrail.steps.find((s) => !completedSteps[s.id]);
            return (
              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                      Trilha de {activeTrail.label}
                    </h3>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-lg">
                      {activeTrailDone}/{activeTrail.steps.length}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{activeTrail.tagline}</p>
                </div>

                {nextStep ? (
                  <button
                    onClick={() => setExpandedStepId(nextStep.id)}
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all shrink-0"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Continuar Etapa {nextStep.stepNumber}</span>
                  </button>
                ) : (
                  <span className="px-3 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs text-center shrink-0">
                    🏆 Trilha Concluída!
                  </span>
                )}
              </div>
            );
          })()}

          {/* Etapas da Trilha (Timeline Vertical Conectada + Ilustração + Teste Rápido) */}
          <div className="relative space-y-3">
            {(() => {
              const firstPendingId = activeTrail.steps.find((s) => !completedSteps[s.id])?.id;

              return activeTrail.steps.map((step, idx) => {
                const isDone = !!completedSteps[step.id];
                const isNext = !isDone && step.id === firstPendingId;
                const isExpanded = expandedStepId === step.id;
                const isLast = idx === activeTrail.steps.length - 1;
                const selectedQuizOpt = miniQuizAnswers[step.id];
                const quizAnswered = selectedQuizOpt !== undefined;
                const quizCorrect = selectedQuizOpt === step.miniQuiz.correctIndex;

                return (
                  <div key={step.id} className="relative flex gap-3 sm:gap-4">
                    {/* Linha vertical conectora (Timeline) */}
                    <div className="flex flex-col items-center shrink-0">
                      <button
                        type="button"
                        onClick={() => toggleStepCompleted(step.id)}
                        title={isDone ? 'Marcar como pendente' : 'Marcar etapa como estudada'}
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-xs border-2 transition-all z-10 mt-3.5 ${
                          isDone
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                            : isNext
                            ? 'bg-indigo-600 text-white border-indigo-600 ring-4 ring-indigo-500/20 shadow-sm'
                            : 'bg-white text-slate-600 border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : step.stepNumber}
                      </button>

                      {!isLast && (
                        <div
                          className={`w-0.5 flex-1 my-1 rounded-full ${
                            isDone ? 'bg-emerald-400' : 'bg-slate-200'
                          }`}
                        />
                      )}
                    </div>

                    {/* Card da Etapa */}
                    <div
                      className={`flex-1 bg-white border rounded-2xl transition-all shadow-2xs overflow-hidden mb-1 ${
                        isDone
                          ? 'border-emerald-300/80'
                          : isNext
                          ? 'border-indigo-400 ring-1 ring-indigo-200/60'
                          : 'border-slate-200'
                      }`}
                    >
                      <div
                        onClick={() => setExpandedStepId(isExpanded ? null : step.id)}
                        className="p-4 sm:p-5 cursor-pointer flex items-start justify-between gap-3 select-none hover:bg-slate-50/50"
                      >
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                              Etapa {step.stepNumber}
                            </span>
                            {isNext && (
                              <span className="text-[10px] font-extrabold text-white bg-indigo-600 px-2 py-0.5 rounded-full">
                                PRÓXIMA
                              </span>
                            )}
                            {isDone && (
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                                ✓ Estudada
                              </span>
                            )}
                          </div>
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">
                            {step.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5">{step.subtitle}</p>
                        </div>

                        <button className="p-1 text-slate-400 hover:text-slate-600 shrink-0">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>

                      {isExpanded && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-3 border-t border-slate-100 bg-slate-50/40 space-y-3 text-xs sm:text-sm">
                          {/* Ilustração Educativa Visual */}
                          <TrailVisual stepId={step.id} />

                          <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 space-y-1">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                              📖 Base Simples (1 minuto de leitura)
                            </div>
                            <p className="text-slate-700 leading-relaxed">{step.summary}</p>
                          </div>

                          <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-amber-950 flex items-start gap-2">
                            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-amber-900 text-[11px] uppercase tracking-wider block mb-0.5">
                                O que guardar na cabeça:
                              </span>
                              <span className="leading-relaxed text-xs sm:text-sm">{step.keyIdea}</span>
                            </div>
                          </div>

                          {/* Mini Teste Rápido Interativo (Brilliant Playbook) */}
                          <div className="p-3.5 bg-indigo-50/60 border border-indigo-200/80 rounded-xl space-y-2">
                            <div className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-900">
                              ⚡ Teste Rápido (Fixação em 10s):
                            </div>
                            <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                              {step.miniQuiz.prompt}
                            </p>
                            <div className="grid grid-cols-1 gap-1.5">
                              {step.miniQuiz.options.map((opt, oIdx) => {
                                const isOptSelected = selectedQuizOpt === oIdx;
                                const isOptCorrect = oIdx === step.miniQuiz.correctIndex;
                                let style = 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50';
                                if (quizAnswered) {
                                  if (isOptCorrect) {
                                    style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                                  } else if (isOptSelected && !isOptCorrect) {
                                    style = 'bg-rose-50 border-rose-400 text-rose-900';
                                  } else {
                                    style = 'bg-white/60 border-slate-200 opacity-50';
                                  }
                                }
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    onClick={() => {
                                      setMiniQuizAnswers((prev) => ({ ...prev, [step.id]: oIdx }));
                                      if (oIdx === step.miniQuiz.correctIndex && !completedSteps[step.id]) {
                                        toggleStepCompleted(step.id);
                                      }
                                    }}
                                    className={`w-full text-left px-3 py-2.5 rounded-xl border text-xs transition-all ${style}`}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>
                            {quizAnswered && (
                              <p
                                className={`text-xs font-semibold pt-1 ${
                                  quizCorrect ? 'text-emerald-700' : 'text-rose-700'
                                }`}
                              >
                                {quizCorrect ? '✅ ' : '💡 '}
                                {step.miniQuiz.feedback}
                              </p>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                            <span className="text-[11px] text-slate-600">
                              <strong>Como cai no ENEM:</strong> {step.enemExample}
                            </span>

                            <button
                              onClick={() => toggleStepCompleted(step.id)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                                isDone
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                  : 'bg-slate-900 text-white hover:bg-slate-800'
                              }`}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>{isDone ? 'Etapa Concluída ✓' : 'Marcar como Estudada'}</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      )}

      {/* ==================== MODO 2: AULAS NO YOUTUBE POR MATÉRIA ==================== */}
      {mainMode === 'aulas' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          {/* Aviso explicativo */}
          <div className="bg-rose-50/80 border border-rose-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-rose-600 text-white shrink-0">
              <Video className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-rose-950 text-sm sm:text-base">
                Onde assistir aulas gratuitas por assunto
              </h3>
              <p className="text-xs sm:text-sm text-rose-900/80 leading-relaxed">
                Selecionamos professores referência do YouTube com playlists completas e gratuitas para cada matéria do ENEM. Toque em <strong>Assistir no YouTube</strong> para abrir direto no conteúdo.
              </p>
            </div>
          </div>

          {/* Filtro por Matéria */}
          <div className="flex flex-wrap gap-1.5 bg-white border border-slate-200 p-2 rounded-2xl shadow-2xs">
            {[
              { id: 'matematica', label: '📐 Matemática', activeClass: 'bg-blue-600 text-white shadow-xs' },
              { id: 'biologia', label: '🧬 Biologia', activeClass: 'bg-teal-600 text-white shadow-xs' },
              { id: 'quimica', label: '⚗️ Química', activeClass: 'bg-emerald-600 text-white shadow-xs' },
              { id: 'fisica', label: '⚡ Física', activeClass: 'bg-violet-600 text-white shadow-xs' },
              { id: 'all', label: '📚 Todas', activeClass: 'bg-slate-900 text-white shadow-xs' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setAulasSubject(item.id as 'all' | Subject)}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  aulasSubject === item.id
                    ? item.activeClass
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Lista de Cards de Aulas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {videoLessonsData
              .filter((lesson) => aulasSubject === 'all' || lesson.subject === aulasSubject)
              .map((lesson) => {
                const subjectBadge =
                  lesson.subject === 'matematica'
                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                    : lesson.subject === 'biologia'
                    ? 'bg-teal-50 text-teal-700 border-teal-200'
                    : lesson.subject === 'quimica'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-violet-50 text-violet-700 border-violet-200';

                const subjectLabel =
                  lesson.subject === 'matematica'
                    ? 'Matemática'
                    : lesson.subject === 'biologia'
                    ? 'Biologia'
                    : lesson.subject === 'quimica'
                    ? 'Química'
                    : 'Física';

                const levelColor =
                  lesson.level === 'Base'
                    ? 'bg-amber-50 text-amber-800 border-amber-200'
                    : lesson.level === 'Essencial'
                    ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                    : 'bg-slate-100 text-slate-700 border-slate-200';

                return (
                  <div
                    key={lesson.id}
                    className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs flex flex-col justify-between gap-4 hover:border-slate-300 transition-colors"
                  >
                    <div className="space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${subjectBadge}`}>
                          {subjectLabel} • {lesson.topic}
                        </span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${levelColor}`}>
                          {lesson.level}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                          {lesson.title}
                        </h4>
                        <p className="text-xs font-semibold text-rose-700 mt-1">
                          {lesson.teacher} • {lesson.channelName}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {lesson.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {lesson.durationHint}
                      </span>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <a
                          href={lesson.channelUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 sm:flex-initial text-center px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          Canal
                        </a>
                        <a
                          href={lesson.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold bg-rose-600 text-white hover:bg-rose-700 transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{lesson.isDirectPlaylist ? 'Abrir Playlist' : 'Ver Aulas'}</span>
                          <ExternalLink className="w-3 h-3 opacity-80" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Créditos e Agradecimento aos Professores */}
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Créditos e Gratidão</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Todo o mérito e os créditos das videoaulas pertencem integralmente aos <strong>professores e criadores de conteúdo</strong> (como Prof. Ferretto, Sandro Curió, Paulo Pereira, Samuel Cunha, Guilherme Goulart, Gabriel Cabral, Paulo Valim, Marcelo Boaro, Mestres do ENEM e tantos outros educadores) que dedicam seu tempo para disponibilizar aulas completas e gratuitas na internet.
            </p>
            <p className="text-xs sm:text-sm text-amber-200/95 font-medium leading-relaxed">
              Nosso singelo obrigado por democratizarem a educação e transformarem o futuro de quem estuda por conta própria e corre atrás dos seus sonhos! Ao abrir um vídeo, deixe seu like e inscreva-se no canal do professor para apoiar o trabalho deles. ❤️
            </p>
          </div>
        </div>
      )}

      {/* ==================== MODO 3: REVISÃO (MEGA REVISÃO, RAIO-X, CHUTE & BIZUS) ==================== */}
      {mainMode === 'revisao' && (
        <>
      {/* ==================== ABA 0: MEGA REVISÃO POR ÁREA ==================== */}
      {activeSubTab === 'revisao' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          {/* Filtro por Área */}
          <div className="flex flex-wrap gap-1.5 bg-white border border-slate-200 p-2.5 rounded-2xl shadow-2xs">
            {[
              { id: 'all', label: '📚 Todas as Áreas' },
              { id: 'biologia', label: '🧬 Biologia' },
              { id: 'quimica', label: '⚗️ Química' },
              { id: 'fisica', label: '⚡ Física' },
              { id: 'geometria', label: '📐 Geometria Espacial' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setMegaAreaFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  megaAreaFilter === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 1. BIOLOGIA */}
          {(megaAreaFilter === 'all' || megaAreaFilter === 'biologia') && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-teal-50 text-teal-700 border border-teal-200">
                    <Dna className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      🧬 Biologia — Mega Revisão (40% da prova é Ecologia + Saúde)
                    </h3>
                    <p className="text-xs text-slate-500">Ecologia, Imunologia, Parasitologia, Citologia e Genética</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleCopyArea(
                      'biologia',
                      `🧬 BIOLOGIA — MEGA REVISÃO ENEM\n• Espécie Exótica Invasora: sem predador natural, compete com nativas e reduz biodiversidade.\n• Eutrofização: esgoto/adubo (N e P) -> algas bloqueiam luz -> bactérias consomem O2 -> peixes morrem asfixiados.\n• Magnificação Trófica: mercúrio/DDT acumula mais no predador de topo.\n• Caatinga: espinhos, cutícula grossa e estômatos que fecham de dia.\n• Ciclo do Nitrogênio: Rhizobium fixa N2; Nitrosomonas/Nitrobacter formam nitrato (NO3-).\n• Vacina = antígeno + memória (ativa/preventiva). Soro = anticorpos prontos (passiva/curativa).\n• Esquistossomose: caramujo Biomphalaria + cercária pela pele (prevenção: saneamento).\n• Lisossomo: digestão celular/autofagia | Mitocôndria: ATP | Ribossomo: proteínas | Golgi: secreção/acrossomo.\n• Fotossíntese: O2 vem da H2O! Codominância: expressa os dois alelos (ex: AB).`
                    )
                  }
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 shrink-0"
                >
                  {copiedArea === 'biologia' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedArea === 'biologia' ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-teal-50/50 border border-teal-200/70 space-y-2">
                  <div className="font-bold text-teal-950 text-xs sm:text-sm">🌿 Ecologia & Meio Ambiente</div>
                  <ul className="space-y-1.5 text-slate-700 leading-relaxed">
                    <li><strong>• Espécie Invasora:</strong> sem predador natural, vence a nativa por competição (Exclusão de Gause) e reduz a biodiversidade.</li>
                    <li><strong>• Eutrofização:</strong> esgoto/adubo (N e P) ➔ explosão de algas ➔ bloqueia luz ➔ bactérias decompositoras consomem TODO o O₂ ➔ peixes morrem asfixiados.</li>
                    <li><strong>• Magnificação Trófica:</strong> metal pesado (mercúrio/DDT) não é degradado e acumula mais no <strong>predador de topo</strong>.</li>
                    <li><strong>• Caatinga (Xerófitas):</strong> folhas viram espinhos, cutícula grossa (cera) e estômatos fecham de dia.</li>
                    <li><strong>• Ciclo do Nitrogênio:</strong> <em>Rhizobium</em> (leguminosas) fixa N₂; <em>Nitrosomonas/Nitrobacter</em> fazem nitrificação (geram NO₃⁻).</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">💉 Imunologia & Parasitologia</div>
                  <ul className="space-y-1.5 text-slate-700 leading-relaxed">
                    <li><strong>• Vacina:</strong> contém <strong>ANTÍGENO</strong> ➔ estimula anticorpos + <strong>memória imunológica</strong> (Ativa e Preventiva).</li>
                    <li><strong>• Soro:</strong> contém <strong>ANTICORPOS PRONTOS</strong> ➔ ação imediata em picada de cobra/escorpião (Passiva e Curativa).</li>
                    <li><strong>• Esquistossomose:</strong> caramujo <em>Biomphalaria</em> na lagoa + larva cercária entra pela pele. Prevenção: saneamento básico!</li>
                    <li><strong>• Vetores Clássicos:</strong> Dengue/Zika (<em>Aedes</em>) • Chagas (<em>Barbeiro</em> - fezes) • Malária (<em>Anopheles</em>) • Leishmaniose (<em>Mosquito-palha</em>).</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">🔬 Citologia, Genética & Vitaminas</div>
                  <ul className="space-y-1.5 text-slate-700 leading-relaxed">
                    <li><strong>• Organelas:</strong> Lisossomo (digestão/autofagia), Mitocôndria (ATP), Ribossomo (proteínas), Golgi (secreção e acrossomo).</li>
                    <li><strong>• Fotossíntese:</strong> O O₂ vem da quebra da <strong>ÁGUA (H₂O)</strong>! (Sulfobactérias usam H₂S e liberam Enxofre).</li>
                    <li><strong>• Codominância:</strong> heterozigoto expressa os DOIS alelos juntos (ex: sangue AB).</li>
                    <li><strong>• Transgênico vs. Clone:</strong> Transgênico recebe gene de outra espécie; Clone é cópia idêntica.</li>
                    <li><strong>• Vitaminas:</strong> A (visão, lipossolúvel) • C (antioxidante/escorbuto, hidrossolúvel) • D (fixa cálcio com Sol).</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 2. QUÍMICA */}
          {(megaAreaFilter === 'all' || megaAreaFilter === 'quimica') && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <TestTube2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      ⚗️ Química — Mega Revisão (80% é Físico-Química + Orgânica)
                    </h3>
                    <p className="text-xs text-slate-500">Polaridade, Funções Orgânicas, Pilhas (CRAO), Gases, pH e Tratamento de Água</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleCopyArea(
                      'quimica',
                      `⚗️ QUÍMICA — MEGA REVISÃO ENEM\n• Polaridade: mais -OH e cadeia curta = solúvel em água. Cauda longa de carbono = apolar (gordura).\n• Funções: -OH no anel benzênico = FENOL (ácido); -OH em C saturado = ÁLCOOL; N ligado a C=O = AMIDA; N sem C=O = AMINA (básica).\n• Descarboxilação (-COOH): libera CO2.\n• Pilhas (CRAO): Cátodo Reduz (maior E°); Ânodo Oxida (menor E°). ddp = E°maior - E°menor > 0.\n• Gases em água: dissolvem mais em água FRIA e ALTA pressão.\n• pH = -log[H+]: 10^-3 -> pH 3. Cada -1 no pH = 10x mais ácido.\n• Le Chatelier: +Pressão vai pro menor nº de mols gasosos; +Temp favorece endotérmica (ΔH > 0).\n• Queima/combustão: sempre exotérmica (ΔH < 0). Gases: PV=nRT (K = °C + 273).`
                    )
                  }
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 shrink-0"
                >
                  {copiedArea === 'quimica' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedArea === 'quimica' ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200/70 space-y-2">
                  <div className="font-bold text-emerald-950 text-xs sm:text-sm">🧪 Orgânica & Polaridade</div>
                  <ul className="space-y-1.5 text-slate-700 leading-relaxed">
                    <li><strong>• Semelhante dissolve semelhante:</strong> mais <strong>-OH</strong> e cadeia curta = solúvel em água; cauda longa de C = apolar (gordura/óleo).</li>
                    <li><strong>• Sabões/Surfactantes:</strong> formam <strong>micelas</strong> (cauda apolar na gordura; cabeça polar na água).</li>
                    <li><strong>• Funções Clássicas:</strong> -OH no benzeno = <strong>FENOL</strong> • -OH em C saturado = <strong>ÁLCOOL</strong> • N com C=O = <strong>AMIDA</strong> • N sem C=O = <strong>AMINA</strong> (básica — cheiro de peixe sai com limão!).</li>
                    <li><strong>• Descarboxilação:</strong> perdeu grupo -COOH? Liberou gás <strong>CO₂</strong>!</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">🔋 Eletroquímica (CRAO)</div>
                  <ul className="space-y-1.5 text-slate-700 leading-relaxed">
                    <li><strong>• CRAO:</strong> <strong>C</strong>átodo <strong>R</strong>eduz (ganha e⁻, maior E°) | <strong>Â</strong>nodo <strong>O</strong>xida (perde e⁻, menor E°).</li>
                    <li><strong>• Fluxo de elétrons:</strong> sempre do <strong>Ânodo ➔ Cátodo</strong>.</li>
                    <li><strong>• ddp da pilha:</strong> <code className="font-mono font-bold">ΔE° = E°(maior) - E°(menor)</code> (sempre positivo na pilha!).</li>
                    <li><strong>• Metal de sacrifício:</strong> menor E° que o ferro (Zinco/Magnésio) — oxida no lugar do ferro para proteger cascos e canos.</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">⚖️ Físico-Química & Água</div>
                  <ul className="space-y-1.5 text-slate-700 leading-relaxed">
                    <li><strong>• Gases em líquidos:</strong> gás dissolve mais em água <strong>FRIA</strong> e sob <strong>ALTA pressão</strong>.</li>
                    <li><strong>• pH sem log:</strong> [H⁺] = 10⁻³ ➔ pH = 3. Cada 1 unidade a menos = <strong>10× mais ácido</strong>.</li>
                    <li><strong>• Meia-vida:</strong> cai pela metade a cada período (100% ➔ 50% ➔ 25% ➔ 12,5%).</li>
                    <li><strong>• Le Chatelier:</strong> +Pressão ➔ menor nº de mols gasosos; +Temp ➔ endotérmica (ΔH &gt; 0). Combustão é sempre exotérmica (ΔH &lt; 0).</li>
                    <li><strong>• Gases & Água:</strong> <code className="font-mono font-bold">P·V = n·R·T</code> (K = °C + 273). Tratamento: Floculação ➔ Decantação ➔ Filtração (carvão = adsorção) ➔ Cloração. Água destilada não conduz corrente!</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 3. FÍSICA */}
          {(megaAreaFilter === 'all' || megaAreaFilter === 'fisica') && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                    <Atom className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      ⚡ Física — Mega Revisão (Elétrica + Ondas + Mecânica = 80%)
                    </h3>
                    <p className="text-xs text-slate-500">Eletrodinâmica, Ondulatória, Acústica, Cinemática, Plano Inclinado e Calorimetria</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleCopyArea(
                      'fisica',
                      `⚡ FÍSICA — MEGA REVISÃO ENEM\n• Elétrica: U = R·i | P = U·i = R·i² = U²/R | Consumo (kWh) = (P_W / 1000) × horas.\n• Tomadas da casa = PARALELO (mesma voltagem U; se 1 queima, outras ficam acesas; i_total = P_total / U).\n• Gerador: U = E - r·i | Indução de Faraday: precisa de VARIAÇÃO do fluxo magnético.\n• Ondas: v = λ·f e f = 1/T. Na refração, a FREQUÊNCIA (f) NUNCA MUDA!\n• Decibel: +10 dB = 10x na intensidade (+20 dB = 100x).\n• Torricelli: v² = v0² + 2·a·ΔS | Rampa/Atrito: massa NÃO altera aceleração (a = g(senθ - μ·cosθ)).\n• Pressão: P = F/A | P = d·g·h.\n• Calor: Q = m·c·ΔT (sensível) | Q = m·L (latente). Irradiação é a única no VÁCUO (espelho reflete, preto absorve).`
                    )
                  }
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 shrink-0"
                >
                  {copiedArea === 'fisica' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedArea === 'fisica' ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/70 space-y-2">
                  <div className="font-bold text-amber-950 text-xs sm:text-sm">🔌 Eletrodinâmica & Magnetismo</div>
                  <ul className="space-y-1.5 text-slate-700 leading-relaxed">
                    <li><strong>• Fórmulas de Ouro:</strong> <code className="font-mono font-bold">U = R·i</code> | <code className="font-mono font-bold">P = U·i</code> | <code className="font-mono font-bold">P = R·i²</code> | <code className="font-mono font-bold">P = U²/R</code>.</li>
                    <li><strong>• Conta de luz (kWh):</strong> <code className="font-mono font-bold">E = (P_Watts / 1000) × horas</code>.</li>
                    <li><strong>• Paralelo (Casa):</strong> mesma tensão U em tudo; corrente total é <code className="font-mono font-bold">i = P_total / U</code>; se 1 queima, outras seguem acesas.</li>
                    <li><strong>• Série:</strong> mesma corrente i; se 1 queima, apaga tudo!</li>
                    <li><strong>• Geradores & Faraday:</strong> <code className="font-mono font-bold">U = E - r·i</code>. Indução só ocorre com <strong>variação do fluxo magnético</strong>.</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">🌊 Ondulatória & Acústica</div>
                  <ul className="space-y-1.5 text-slate-700 leading-relaxed">
                    <li><strong>• Equação da Onda:</strong> <code className="font-mono font-bold">v = λ · f</code> e <code className="font-mono font-bold">f = 1 / T</code>.</li>
                    <li><strong>• Regra da Refração:</strong> mudou de meio? A <strong>FREQUÊNCIA (f) NUNCA MUDA!</strong> Se <em>v</em> cai, <em>λ</em> cai junto.</li>
                    <li><strong>• Escala Decibel (dB):</strong> somar <strong>+10 dB</strong> multiplica a intensidade sonora por <strong>10×</strong> (+20 dB = 100×; +30 dB = 1.000×).</li>
                    <li><strong>• Ressonância:</strong> frequência externa iguala a frequência natural de oscilação do objeto.</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">🚀 Mecânica & Termologia</div>
                  <ul className="space-y-1.5 text-slate-700 leading-relaxed">
                    <li><strong>• Cinemática:</strong> <code className="font-mono font-bold">v² = v₀² + 2·a·ΔS</code> (Torricelli). Eco: divida o tempo por 2!</li>
                    <li><strong>• Rampa/Atrito:</strong> a massa NÃO altera a aceleração (<code className="font-mono font-bold">a = g(sen θ - μ·cos θ)</code>).</li>
                    <li><strong>• Pressão:</strong> <code className="font-mono font-bold">P = F / A</code> | Hidrostática: <code className="font-mono font-bold">P = d·g·h</code>.</li>
                    <li><strong>• Calorimetria:</strong> <code className="font-mono font-bold">Q = m·c·ΔT</code> (mudou temp) | <code className="font-mono font-bold">Q = m·L</code> (mudou estado).</li>
                    <li><strong>• Propagação:</strong> Condução (sólidos), Convecção (fluidos), <strong>Irradiação</strong> (única no vácuo — espelho reflete, preto absorve).</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 4. GEOMETRIA ESPACIAL (MATEMÁTICA) */}
          {(megaAreaFilter === 'all' || megaAreaFilter === 'geometria') && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      📐 Matemática • Resumão Completo de Geometria Espacial
                    </h3>
                    <p className="text-xs text-slate-500">Volumes, Áreas, Cilindro, Cone, Esfera, Poliedros (Euler) e Conversões</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleCopyArea(
                      'geometria',
                      `📐 GEOMETRIA ESPACIAL — RESUMÃO ENEM\n• Regra de Ouro: Retos (Prisma, Cubo, Cilindro) -> V = Ab · h | Com Bico (Pirâmide, Cone) -> V = (Ab · h) / 3.\n• Paralelepípedo: V = a·b·c | At = 2(ab+ac+bc) | D = √(a²+b²+c²).\n• Cubo: V = a³ | At = 6a² | d_face = a√2 | D_cubo = a√3.\n• Cilindro: V = π·R²·h | Al = 2·π·R·h | At = 2πR² + 2πRh (Atenção: se der Diâmetro, R = D/2! Semicilindro divide por 2).\n• Cone: V = π·R²·h / 3 | Al = π·R·g | g² = R² + h². Tronco: V_grande - V_pequeno.\n• Esfera: V = (4/3)·π·R³ | A = 4·π·R².\n• Euler: V - A + F = 2 (2A = soma dos lados das faces ou graus dos vértices).\n• Conversões: 1 m³ = 1.000 L | 1 dm³ = 1 L | 1 cm³ = 1 mL | Escala: Área E², Volume E³.`
                    )
                  }
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 shrink-0"
                >
                  {copiedArea === 'geometria' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedArea === 'geometria' ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>

              {/* Regra de Ouro */}
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <strong>🔑 Regra de Ouro dos Volumes:</strong> Sólidos retos (Prisma, Cubo, Cilindro) = <code className="font-mono font-bold">V = Ab · h</code>
                </div>
                <div>
                  Com bico (Pirâmide, Cone) = <code className="font-mono font-bold">V = (Ab · h) / 3</code>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900">📦 Prismas, Cubo & Caixa</div>
                  <p className="text-slate-700"><strong>Paralelepípedo:</strong> <code className="font-mono">V = a·b·c</code> | <code className="font-mono">At = 2(ab+ac+bc)</code> | <code className="font-mono">D = √(a²+b²+c²)</code></p>
                  <p className="text-slate-700"><strong>Cubo:</strong> <code className="font-mono">V = a³</code> | <code className="font-mono">At = 6a²</code> | <code className="font-mono">d_face = a√2</code> | <code className="font-mono">D = a√3</code></p>
                  <p className="text-slate-700"><strong>Prisma Hexagonal:</strong> Base = 6 triângulos equiláteros (<code className="font-mono">Ab = 6 · L²√3 / 4</code>).</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900">🥫 Cilindro (Campeão do ENEM)</div>
                  <p className="text-slate-700"><strong>Volume:</strong> <code className="font-mono">V = π·R²·h</code> | <strong>Base:</strong> <code className="font-mono">π·R²</code></p>
                  <p className="text-slate-700"><strong>Área Lateral:</strong> <code className="font-mono">Al = 2·π·R·h</code> | <strong>Total:</strong> <code className="font-mono">2πR² + 2πRh</code></p>
                  <p className="text-slate-700"><strong>Equilátero:</strong> <code className="font-mono">h = 2R</code> | <strong>Semicilindro:</strong> divide por 2.</p>
                  <p className="text-rose-700 font-semibold">⚠️ Deu Diâmetro (D)? Faça R = D/2 antes!</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900">🍦 Cone, Pirâmide & Tronco</div>
                  <p className="text-slate-700"><strong>Cone:</strong> <code className="font-mono">V = π·R²·h / 3</code> | <code className="font-mono">Al = π·R·g</code> | <code className="font-mono">g² = R² + h²</code></p>
                  <p className="text-slate-700"><strong>Pirâmide:</strong> <code className="font-mono">V = Ab·h / 3</code> | <code className="font-mono">ap_lat² = ap_base² + h²</code></p>
                  <p className="text-slate-700"><strong>Tronco:</strong> <code className="font-mono">V_grande - V_pequeno</code>. Corte na metade (k=1/2): pontinha = 1/8, tronco = 7/8.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900">⚽ Esfera</div>
                  <p className="text-slate-700"><strong>Volume:</strong> <code className="font-mono font-bold">V = (4/3)·π·R³</code></p>
                  <p className="text-slate-700"><strong>Área da Superfície:</strong> <code className="font-mono font-bold">A = 4·π·R²</code> (4 círculos)</p>
                  <p className="text-slate-700"><strong>Cunha/Fuso:</strong> regra de 3 simples com 360°.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900">💎 Poliedros (Euler)</div>
                  <p className="text-slate-700"><strong>Fórmula:</strong> <code className="font-mono font-bold">V - A + F = 2</code> (<em>"Vamos Fazer Amor a 2"</em>)</p>
                  <p className="text-slate-700"><strong>Arestas (A):</strong> <code className="font-mono">2A = 3·F₃ + 4·F₄ + 5·F₅...</code> ou soma dos graus dos vértices ÷ 2.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900">💧 Conversões & Escala</div>
                  <p className="text-slate-700"><strong>Litros:</strong> <code className="font-mono font-bold">1 m³ = 1.000 L</code> | <code className="font-mono font-bold">1 dm³ = 1 L</code> | <code className="font-mono font-bold">1 cm³ = 1 mL</code></p>
                  <p className="text-slate-700"><strong>Escala:</strong> Comp. <code className="font-mono">E</code> | Área <code className="font-mono">E²</code> | Volume <code className="font-mono">E³</code></p>
                  <p className="text-slate-700"><strong>Embalagem c/ folga f:</strong> Lado = <code className="font-mono">2R + 2f</code>.</p>
                </div>
              </div>
            </div>
          )}

          {/* 5. RESUMO RÁPIDO DE CHUTE EM NATUREZA */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm space-y-2">
            <div className="font-bold text-amber-950 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-amber-600" /> 🎯 4 Regras de Ouro na Hora da Prova (Natureza)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-amber-950/90 text-xs">
              <div><strong>1. Leia primeiro o comando final</strong> antes das alternativas — o textão inicial muitas vezes é só contextualização.</div>
              <div><strong>2. Bússola Ambiental:</strong> elimine opções que defendam "erradicar predadores", "espécie exótica" ou "antibiótico contra vírus".</div>
              <div><strong>3. Desconfie de extremos:</strong> palavras como <em>"SEMPRE"</em>, <em>"NUNCA"</em> e <em>"EXCLUSIVAMENTE"</em> quase sempre indicam distrator.</div>
              <div><strong>4. Confira as unidades:</strong> antes de marcar, veja se o comando pediu <em>Watts ou kW</em>, <em>m ou cm</em>, <em>L ou mL</em>.</div>
            </div>
          </div>
        </div>
      )}

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
        </>
      )}
    </div>
  );
};
