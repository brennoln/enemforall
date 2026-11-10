import React, { useState } from 'react';
import { BizuTopic, Subject } from '../types';
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
  Bookmark
} from 'lucide-react';

export const BizusView: React.FC = () => {
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
      {/* Cabeçalho Acadêmico */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-1.5">
          <Bookmark className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-bold text-slate-900">
            Sínteses Teóricas & Técnicas de Resolução
          </h2>
        </div>
        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
          Macetes consolidados e conceitos de maior recorrência no 2º dia do ENEM para revisão rápida em intervalos.
        </p>
      </div>

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

                  <div className="p-3 bg-slate-100 rounded-lg text-slate-700">
                    <span className="font-semibold text-slate-800">Recorrência no ENEM: </span>
                    <span>{b.classicQuestionType}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
