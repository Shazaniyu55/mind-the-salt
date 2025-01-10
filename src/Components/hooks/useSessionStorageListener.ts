import { useEffect, useState } from 'react';

const useSessionStorageListener = (key: string) => {
  const [storedValue, setStoredValue] = useState<string | null>(null);

  useEffect(() => {
    const handleStorageChange = () => {
      const newValue = sessionStorage.getItem(key);
      setStoredValue(newValue);
    };

    // Listen for the custom event
    window.addEventListener('sessionStorageChange', handleStorageChange);

    // Listen for the storage event
    window.addEventListener('storage', handleStorageChange);

    // Initial load
    handleStorageChange();

    return () => {
      window.removeEventListener('sessionStorageChange', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return storedValue;
};

export default useSessionStorageListener;
