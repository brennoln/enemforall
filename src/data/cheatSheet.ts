import { FormulaCheatSheetItem } from '../types';
import { mathFormulaMemory } from './cheatSheet/mathFormulas';
import { physicsFormulaMemory } from './cheatSheet/physicsFormulas';
import { chemistryFormulaMemory } from './cheatSheet/chemistryFormulas';
import { biologyFactsMemory } from './cheatSheet/biologyFacts';

export const allCheatSheetItems: FormulaCheatSheetItem[] = [
  ...mathFormulaMemory,
  ...physicsFormulaMemory,
  ...chemistryFormulaMemory,
  ...biologyFactsMemory
];
