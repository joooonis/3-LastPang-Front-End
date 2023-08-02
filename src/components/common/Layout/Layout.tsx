import Head from 'next/head';
import { clsx } from 'clsx';

import Header from '@/components/login/Header';
import useColorScheme from '@/hooks/useColorScheme';
import { darkThemeClass, lightThemeClass } from '@/styles/theme.css';

import * as styles from './layout.css';

interface Props {
  isHeader?: boolean;
  children: React.ReactNode;
}

export default function Layout({ isHeader = true, children }: Props) {
  const { scheme } = useColorScheme();
  const schemeClass = scheme === 'dark' ? darkThemeClass : lightThemeClass;

  return (
    <>
      <Head>
        <title>위티 | 대한민국 1등 멀티 프로필링크</title>
        <link rel="icon" href="/wity_color_text_logo.svg" />
        <meta
          name="description"
          content="7만 기업과 크리에이터, 인플루언서가 선택한 멀티 프로필링크. 링크 하나로 나의 비즈니스를 표현하자."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          fontFamily: 'Pretendard, sans-serif',
        }}
        className={clsx(schemeClass, styles.wrapper)}
      >
        {isHeader && <Header />}
        <main className={styles.innerWrapper}>{children}</main>
      </div>
    </>
  );
}
