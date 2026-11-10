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

// TOTAL EXPANDIDO:
// Matemática: 15 + 15 + 15 + 15 + 5 = 65 questões
// Física: 10 + 10 + 10 = 30 questões
// Química: 10 + 10 + 10 = 30 questões
// Biologia: 10 + 10 + 10 = 30 questões
// TOTAL GERAL: 155 QUESTÕES RICAS COM BIZUS RELÂMPAGO, PIMENTINHAS E MACETES!
export const questionsData: Question[] = [
  ...mathQuestionsPart1,         // 15 questões (inclui as 10 especiais de matemática)
  ...mathQuestionsPart2,         // 15 questões de matemática
  ...mathQuestionsPart3,         // 15 questões de matemática
  ...mathQuestionsPart4,         // 15 questões de matemática
  ...mathQuestionsPart5,         // 5 questões de matemática (Total Mat: 65)
  ...scienceQuestionsPhysics,    // 10 questões de física (inclui as 5 especiais)
  ...scienceQuestionsPhysicsPart2, // 10 questões de física
  ...scienceQuestionsPhysicsPart3, // 10 questões de física (Total Fís: 30)
  ...scienceQuestionsChemistry,  // 10 questões de química (inclui as 5 especiais)
  ...scienceQuestionsChemistryPart2, // 10 questões de química
  ...scienceQuestionsChemistryPart3, // 10 questões de química (Total Quím: 30)
  ...scienceQuestionsBiology,    // 10 questões de biologia (inclui as 5 especiais)
  ...scienceQuestionsBiologyPart2, // 10 questões de biologia
  ...scienceQuestionsBiologyPart3, // 10 questões de biologia (Total Bio: 30)
];
