import { clsx } from 'clsx';

import useColorScheme from '@/hooks/useColorScheme';
import { darkThemeClass, lightThemeClass } from '@/styles/theme.css';

import * as styles from './layout.css';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { scheme, toggleScheme } = useColorScheme();
  const schemeClass = scheme === 'dark' ? darkThemeClass : lightThemeClass;

  return (
    <div
      style={{
        fontFamily: 'Pretendard, sans-serif',
      }}
      className={clsx(schemeClass, styles.wrapper)}
    >
      <main className={styles.innerWrapper}>{children}</main>
    </div>
  );
}
