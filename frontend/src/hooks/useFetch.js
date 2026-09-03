import { useCallback, useEffect, useState } from "react";
import { USE_DB } from "../config.js";

/**
 * Wraps an api.* call with loading / error / data state and a refetch handle.
 *
 * options.enabled — override network fetch. Defaults to VITE_USE_DB.
 *   Public Home: omit (follows env). Admin: pass { enabled: true }.
 *
 * When disabled, returns `fallback` immediately (static mode).
 * When enabled and the request fails, still falls back so the UI keeps rendering.
 */
export function useFetch(fetcher, fallback = null, deps = [], options = {}) {
  const enabled = options.enabled ?? USE_DB;
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    if (!enabled) {
      setData(fallback);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const result = await fetcher();
      setData(result ?? fallback);
    } catch (err) {
      setError(err.message);
      setData(fallback);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    load();
  }, [load]);

  return { data, loading, error, refetch: load, useDb: enabled };
}
