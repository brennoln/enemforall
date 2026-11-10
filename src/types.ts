export type Subject = 'fisica' | 'quimica' | 'biologia' | 'matematica';

export interface Question {
  id: string;
  subject: Subject;
  topic: string;
  source: string;
  isSpecial?: boolean; // Tag especial amarela para os tópicos mais recorrentes do ENEM
  specialReason?: string; // Motivo da recorrência (ex: "Top 1 em Matemática do ENEM")
  context?: string;
  question: string;
  options: {
    letter: 'A' | 'B' | 'C' | 'D' | 'E';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: {
    quickHack: string;
    stepByStep: string[];
    timeSaverTip: string;
    trapAlert?: string;
    deepMemoryFact?: string; // Informação aprofundada para memória fotográfica
  };
}

export interface BizuTopic {
  id: string;
  subject: Subject;
  category: string;
  title: string;
  coreConcept: string;
  mnemonico?: string;
  fastTechnique: string;
  formulas?: string[];
  classicQuestionType: string;
  memoryBooster?: string; // Informações densas extras para estudantes de alta memorização
}

export interface FormulaCheatSheetItem {
  id: string;
  subject: Subject;
  category: string;
  title: string;
  formulaOrFact: string;
  variables?: string;
  macete: string;
  whenToUse: string;
  advancedTip?: string; // Detalhe técnico adicional
}
