"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook for type-safe localStorage with error handling.
 * Automatically handles JSON serialization/deserialization and
 * provides fallback values when data is corrupted.
 */
export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return defaultValue;
    
    try {
      const item = window.localStorage.getItem(key);
      if (item === null) return defaultValue;
      return JSON.parse(item) as T;
    } catch (error) {
      console.warn(
        `[useLocalStorage] Error reading "${key}":`,
        error,
        "Falling back to default value.",
      );
      // Remove corrupted data
      try {
        window.localStorage.removeItem(key);
      } catch {
        // Ignore cleanup errors
      }
      return defaultValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const nextValue = value instanceof Function ? value(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(nextValue));
        } catch (error) {
          console.warn(
            `[useLocalStorage] Error writing "${key}":`,
            error,
          );
        }
        return nextValue;
      });
    },
    [key],
  );

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.warn(
        `[useLocalStorage] Error removing "${key}":`,
        error,
      );
    }
    setStoredValue(defaultValue);
  }, [key, defaultValue]);

  // Sync across tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue) as T);
        } catch {
          // Ignore parse errors from other tabs
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  return [storedValue, setValue, removeValue];
}