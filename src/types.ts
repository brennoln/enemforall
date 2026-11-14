export type Subject = 'fisica' | 'quimica' | 'biologia' | 'matematica';

export type DifficultyLevel = 1 | 2 | 3; // 1: Fácil (🌶️), 2: Média (🌶️🌶️), 3: Difícil (🌶️🌶️🌶️)

export interface Question {
  id: string;
  subject: Subject;
  topic: string;
  source: string;
  difficulty: DifficultyLevel; // Nível de dificuldade em pimentinhas
  isSpecial?: boolean;
  specialReason?: string;
  context?: string;
  imageUrl?: string;
  secondaryImageUrl?: string;
  question: string;
  options: {
    letter: 'A' | 'B' | 'C' | 'D' | 'E';
    text: string;
    imageUrl?: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: {
    quickHack: string;
    stepByStep: string[];
    timeSaverTip: string;
    trapAlert?: string;
    deepMemoryFact?: string;
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
  memoryBooster?: string;
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
  advancedTip?: string;
}
