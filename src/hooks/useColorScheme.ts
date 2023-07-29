import { useState } from 'react';

export default function useColorScheme() {
  const [scheme, setScheme] = useState<'light' | 'dark'>('light');
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleScheme = () => {
    if (isDark) {
      setScheme('light');
      setIsDark(false);
    } else {
      setScheme('dark');
      setIsDark(true);
    }
  };

  return { scheme, toggleScheme, isDark };
}
