const STORAGE_TOTAL = "pds_visit_total_v1";
const STORAGE_SEED = "pds_visit_seed_v1";
const SESSION_KEY = "pds_visit_recorded";

function readInt(key: string, fallback: number): number {
  if (typeof localStorage === "undefined") return fallback;
  try {
    const s = localStorage.getItem(key);
    const n = s != null ? parseInt(s, 10) : NaN;
    return Number.isFinite(n) ? n : fallback;
  } catch {
    return fallback;
  }
}

function writeInt(key: string, n: number) {
  try {
    localStorage.setItem(key, String(n));
  } catch {
    /* ignore */
  }
}

function ensureSeed(): number {
  let s = readInt(STORAGE_SEED, 0);
  if (s <= 0) {
    s = 10000 + Math.floor(Math.random() * 5000);
    writeInt(STORAGE_SEED, s);
  }
  return s;
}

export function getVisitorTotal(): number {
  if (typeof window === "undefined") return 0;
  return ensureSeed() + readInt(STORAGE_TOTAL, 0);
}

/** One increment per browser session (tab), stored locally only. */
export function tickVisitorIfNewSession(): number {
  if (typeof window === "undefined") return 0;
  let recorded = false;
  try {
    recorded = !!sessionStorage.getItem(SESSION_KEY);
  } catch {
    /* ignore */
  }
  if (recorded) return getVisitorTotal();
  const t = readInt(STORAGE_TOTAL, 0) + 1;
  writeInt(STORAGE_TOTAL, t);
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* ignore */
  }
  return ensureSeed() + t;
}
