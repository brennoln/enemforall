import React, { useState } from 'react';
import { FormulaCheatSheetItem, Subject } from '../types';
import { allCheatSheetItems } from '../data/cheatSheet';
import {
  Brain,
  Search,
  Calculator,
  Atom,
  TestTube2,
  Dna,
  Lightbulb,
  Sparkles,
  BookOpen,
  Copy,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const MemoryCheatSheetView: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'all'>('matematica');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredItems = allCheatSheetItems.filter((item) => {
    const matchesSubject = selectedSubject === 'all' || item.subject === selectedSubject;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.formulaOrFact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.macete.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
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

  return (
    <div className="space-y-4 max-w-4xl mx-auto pb-10">
      {/* Banner Acadêmico de Memória & Fórmulas */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-xs">
        <div className="flex items-center gap-2.5 mb-1.5">
          <div className="p-2 rounded-xl bg-slate-100 text-slate-800">
            <Brain className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
              Guia Completo de Fórmulas & Decorebas do 2º Dia
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500">
              Todas as equações de Matemática, Física, Química e os conceitos memorizáveis de Biologia
            </p>
          </div>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 font-serif-academic">
          Projetado para leitura contínua, revisão mental e fixação instantânea. Cada item contém a fórmula exata, o mnemônico para gravar e a situação exata de prova.
        </p>
      </div>

      {/* Busca e Filtros Rápidos */}
      <div className="flex flex-col sm:flex-row gap-2.5">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por fórmula (ex: Cilindro, Torricelli, Clapeyron, Nitrogênio)..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 text-xs sm:text-sm shadow-2xs"
          />
        </div>

        {/* Abas das 4 Matérias com contagem */}
        <div className="flex gap-1 overflow-x-auto pb-1">
          {[
            { id: 'matematica', label: 'Matemática', count: 19 },
            { id: 'fisica', label: 'Física', count: 15 },
            { id: 'quimica', label: 'Química', count: 12 },
            { id: 'biologia', label: 'Biologia', count: 12 },
            { id: 'all', label: 'Todas', count: 58 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedSubject(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedSubject === tab.id
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {tab.label} <span className="opacity-70 text-[10px]">({tab.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Fórmulas em Cartões Acadêmicos */}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          const badge = getSubjectBadge(item.subject);
          const Icon = badge.icon;
          const isCopied = copiedId === item.id;
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2.5 transition-all hover:border-slate-300"
            >
              {/* Topo do Card */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-medium border ${badge.color}`}>
                    <Icon className="w-3 h-3" />
                    {badge.label} • {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCopy(item.id, item.formulaOrFact)}
                    title="Copiar fórmula"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>

                  {item.advancedTip && (
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      title="Ver detalhes de aprofundamento"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </div>

              {/* Bloco de Fórmula / Conceito em Destaque Central */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 font-mono text-slate-900 text-xs sm:text-sm font-semibold tracking-wide overflow-x-auto">
                {item.formulaOrFact}
              </div>

              {/* Variáveis / Legenda */}
              {item.variables && (
                <div className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-500">Onde: </span>
                  <span className="font-mono">{item.variables}</span>
                </div>
              )}

              {/* Macete / Mnemônico para Memorizar */}
              <div className="p-2.5 bg-amber-50/70 border border-amber-200 rounded-xl text-amber-950 text-xs leading-relaxed flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{item.macete}</span>
              </div>

              {/* Detalhe Avançado para Memória Fotográfica (Expandível ou sempre visível se aberto) */}
              {item.advancedTip && isExpanded && (
                <div className="p-2.5 bg-indigo-50/70 border border-indigo-200 rounded-xl text-indigo-950 text-xs leading-relaxed flex items-start gap-2 animate-in fade-in duration-150">
                  <Brain className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-indigo-900 block mb-0.5">🧠 Aprofundamento Teórico:</span>
                    <span>{item.advancedTip}</span>
                  </div>
                </div>
              )}

              {/* Quando usar na prova */}
              <div className="text-[11px] sm:text-xs text-slate-500 pt-1 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-700">Quando usar:</span>
                  <span>{item.whenToUse}</span>
                </div>

                {item.advancedTip && !isExpanded && (
                  <button
                    onClick={() => setExpandedId(item.id)}
                    className="text-[10px] text-indigo-600 hover:underline font-semibold"
                  >
                    + Teoria Avançada
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-500 text-xs">Nenhuma fórmula encontrada para esse termo.</p>
        </div>
      )}
    </div>
  );
};
