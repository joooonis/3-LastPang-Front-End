import Link from 'next/link';
import { featuredTab, tabBarContainer, tabMenu } from './tabBar.css';

const tabs = [
  { menu: '기본정보', url: '/' },
  { menu: '테마', url: '/' },
  { menu: '링크', url: '/' },
  { menu: '분석', url: '/' },
  { menu: '설정', url: '/' },
];

export default function TabBar() {
  const tabClass = (tab: string) => {
    // TEST: 테스트용 활성화 탭
    if (tab === '기본정보') return `${tabMenu} ${featuredTab}`;
    return tabMenu;
  };

  return (
    <nav className={tabBarContainer}>
      {tabs.map((tab) => (
        <div className={tabClass(tab.menu)} key={tab.menu}>
          {tab.menu}
        </div>
      ))}
    </nav>
  );
}
