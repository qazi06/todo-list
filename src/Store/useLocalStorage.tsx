import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  const setValue = (value: T | ((val: T) => T)) => {
    setStoredValue((prevValue) => {
      const newValue = value instanceof Function ? value(prevValue) : value;
      return newValue;
    });
  };

  return [storedValue, setValue] as const;
}
