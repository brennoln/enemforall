const fs = require('fs');
const path = require('path');

const files = ['math1.ts', 'math2.ts', 'math3.ts', 'physics.ts', 'chemistry.ts', 'biology.ts'];

files.forEach(file => {
  const filePath = path.join(__dirname, '..', 'src', 'data', 'questions', file);
  let content = fs.readFileSync(filePath, 'utf8');

  const lines = content.split('\n');
  const newLines = [];
  let inQuestion = false;
  let hasDifficulty = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newLines.push(line);

    if (line.includes("id: '")) {
      inQuestion = true;
      hasDifficulty = false;
    }

    if (inQuestion && line.includes("difficulty:")) {
      hasDifficulty = true;
    }

    if (inQuestion && line.includes("source:") && !hasDifficulty) {
      let alreadyHas = false;
      for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
        if (lines[j].includes('difficulty:')) {
          alreadyHas = true;
          break;
        }
      }
      if (!alreadyHas) {
        // Vary difficulty: 1, 2, 3
        const diff = ((newLines.length % 3) + 1);
        newLines.push(`    difficulty: ${diff},`);
        hasDifficulty = true;
      }
    }
  }

  fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
  console.log(`Updated ${file}`);
});
