import { Question } from '../types';
import { mathQuestionsPart1 } from './questions/math1';
import { mathQuestionsPart2 } from './questions/math2';
import { mathQuestionsPart3 } from './questions/math3';
import { scienceQuestionsPhysics } from './questions/physics';
import { scienceQuestionsChemistry } from './questions/chemistry';
import { scienceQuestionsBiology } from './questions/biology';

// TOTAL: 45 questões de Matemática + 10 Física + 10 Química + 10 Biologia = 75 QUESTÕES RICAS!
export const questionsData: Question[] = [
  ...mathQuestionsPart1,         // 15 questões (inclui as 10 especiais de matemática)
  ...mathQuestionsPart2,         // 15 questões de matemática
  ...mathQuestionsPart3,         // 15 questões de matemática
  ...scienceQuestionsPhysics,    // 10 questões de física (inclui as 5 especiais)
  ...scienceQuestionsChemistry,  // 10 questões de química (inclui as 5 especiais)
  ...scienceQuestionsBiology,    // 10 questões de biologia (inclui as 5 especiais)
];
