export interface UserDailyProgress {
  streak: number; // Quantidade de dias seguidos atingindo a meta
  todayCount: number; // Quantidade de questões resolvidas hoje (meta: 10)
  lastActiveDate: string; // Data ISO 'YYYY-MM-DD'
  history: string[]; // Lista de datas completadas
}

const STORAGE_KEY = 'enem_turbo_streak_progress';

function getTodayString(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getYesterdayString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function loadUserDailyProgress(): UserDailyProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const today = getTodayString();
    const yesterday = getYesterdayString();

    if (!raw) {
      return {
        streak: 0,
        todayCount: 0,
        lastActiveDate: today,
        history: [],
      };
    }

    const data: UserDailyProgress = JSON.parse(raw);

    // Se mudou de dia
    if (data.lastActiveDate !== today) {
      // Se não respondeu ontem (passou mais de 1 dia), o streak reseta para 0
      const isConsecutive = data.lastActiveDate === yesterday && data.todayCount >= 10;
      return {
        streak: isConsecutive ? data.streak : 0,
        todayCount: 0,
        lastActiveDate: today,
        history: data.history || [],
      };
    }

    return data;
  } catch {
    return {
      streak: 0,
      todayCount: 0,
      lastActiveDate: getTodayString(),
      history: [],
    };
  }
}

export function incrementUserTodayAnswered(): { progress: UserDailyProgress; justUnlockedStreak: boolean } {
  const today = getTodayString();
  const current = loadUserDailyProgress();

  const newTodayCount = current.todayCount + 1;
  let newStreak = current.streak;
  let justUnlocked = false;

  // Se atingiu exatamente 10 questões hoje e ainda não havia pontuado o streak do dia
  if (newTodayCount === 10) {
    newStreak += 1;
    justUnlocked = true;
  }

  const updated: UserDailyProgress = {
    streak: newStreak,
    todayCount: newTodayCount,
    lastActiveDate: today,
    history:
      newTodayCount >= 10 && !current.history.includes(today)
        ? [...current.history, today]
        : current.history,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {}

  return { progress: updated, justUnlockedStreak: justUnlocked };
}
