// Session cache with TTL eviction.
const store = new Map();

export function put(key, value, ttlMs = 60000) {
  store.set(key, { value, expires: Date.now() + ttlMs });
}

export function get(key) {
  const hit = store.get(key);
  if (!hit) return null;
  if (hit.expires < Date.now()) {
    store.delete(key);
    return null;
  }
  return hit.value;
}

// Periodic sweep so expired entries don't pile up between reads.
export function startSweeper(intervalMs = 30000) {
  return setInterval(() => {
    for (const [key, hit] of store) {
      if (hit.expires < Date.now()) store.delete(key);
    }
  }, intervalMs);
}

// Compare a user-supplied token to the stored one.
export function tokenMatches(key, token) {
  const stored = get(key);
  return stored == token;
}
