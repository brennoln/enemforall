import { Question } from '../types';
import { mathQuestionsPart1 } from './questions/math1';
import { mathQuestionsPart2 } from './questions/math2';
import { mathQuestionsPart3 } from './questions/math3';
import { mathQuestionsPart4 } from './questions/math4';
import { mathQuestionsPart5 } from './questions/math5';
import { scienceQuestionsPhysics } from './questions/physics';
import { scienceQuestionsPhysicsPart2 } from './questions/physics2';
import { scienceQuestionsPhysicsPart3 } from './questions/physics3';
import { scienceQuestionsChemistry } from './questions/chemistry';
import { scienceQuestionsChemistryPart2 } from './questions/chemistry2';
import { scienceQuestionsChemistryPart3 } from './questions/chemistry3';
import { scienceQuestionsBiology } from './questions/biology';
import { scienceQuestionsBiologyPart2 } from './questions/biology2';
import { scienceQuestionsBiologyPart3 } from './questions/biology3';
import { enem2025NaturezaPart1 } from './questions/enem2025_natureza1';
import { enem2025NaturezaPart2 } from './questions/enem2025_natureza2';
import { enem2025NaturezaPart3 } from './questions/enem2025_natureza3';
import { enem2025MatematicaPart1 } from './questions/enem2025_matematica1';
import { enem2025MatematicaPart2 } from './questions/enem2025_matematica2';
import { enem2025MatematicaPart3 } from './questions/enem2025_matematica3';
import { enem2025MatematicaPart4 } from './questions/enem2025_matematica4';

// PROVA OFICIAL ENEM 2025 COMPLETA (90 QUESTÕES: Q91 A Q180 - CADERNO 5 AMARELO)
export const enem2025Questions: Question[] = [
  ...enem2025NaturezaPart1,    // Q91 a Q112 (22 questões de Ciências da Natureza)
  ...enem2025NaturezaPart2,    // Q113 a Q123 (11 questões de Ciências da Natureza)
  ...enem2025NaturezaPart3,    // Q124 a Q135 (12 questões de Ciências da Natureza)
  ...enem2025MatematicaPart1,  // Q136 a Q146 (11 questões de Matemática)
  ...enem2025MatematicaPart2,  // Q147 a Q156 (10 questões de Matemática)
  ...enem2025MatematicaPart3,  // Q157 a Q166 (10 questões de Matemática)
  ...enem2025MatematicaPart4,  // Q167 a Q180 (14 questões de Matemática)
];

// TOTAL SUPER EXPANDIDO:
// Matemática: 65 (anos anteriores) + 45 (ENEM 2025 completo) = 110 questões
// Física: 30 (anos anteriores) + 15 (ENEM 2025 completo) = 45 questões
// Química: 30 (anos anteriores) + 15 (ENEM 2025 completo) = 45 questões
// Biologia: 30 (anos anteriores) + 15 (ENEM 2025 completo) = 45 questões
// TOTAL GERAL: 245 QUESTÕES RICAS COM IMAGENS OFICIAIS, BIZUS RELÂMPAGO, PIMENTINHAS E MACETES!
export const questionsData: Question[] = [
  ...enem2025Questions,          // 90 questões oficiais do ENEM 2025 (Q91 a Q180 com imagens!)
  ...mathQuestionsPart1,         // 15 questões (inclui as 10 especiais de matemática)
  ...mathQuestionsPart2,         // 15 questões de matemática
  ...mathQuestionsPart3,         // 15 questões de matemática
  ...mathQuestionsPart4,         // 15 questões de matemática
  ...mathQuestionsPart5,         // 5 questões de matemática
  ...scienceQuestionsPhysics,    // 10 questões de física (inclui as 5 especiais)
  ...scienceQuestionsPhysicsPart2, // 10 questões de física
  ...scienceQuestionsPhysicsPart3, // 10 questões de física
  ...scienceQuestionsChemistry,  // 10 questões de química (inclui as 5 especiais)
  ...scienceQuestionsChemistryPart2, // 10 questões de química
  ...scienceQuestionsChemistryPart3, // 10 questões de química
  ...scienceQuestionsBiology,    // 10 questões de biologia (inclui as 5 especiais)
  ...scienceQuestionsBiologyPart2, // 10 questões de biologia
  ...scienceQuestionsBiologyPart3, // 10 questões de biologia
];
