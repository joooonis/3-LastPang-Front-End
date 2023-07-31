import { featuredTab, tabBarContainer, tabMenu } from './tabBar.css';

const tabs = ['기본정보', '테마', '링크', '분석', '설정'];

export default function TabBar() {
  const tabClass = (tab: string) => {
    // TEST: 테스트용 활성화 탭
    if (tab === '기본정보') return `${tabMenu} ${featuredTab}`;
    return tabMenu;
  };

  return (
    <div className={tabBarContainer}>
      {tabs.map((tab) => (
        <div className={tabClass(tab)} key={tab}>
          {tab}
        </div>
      ))}
    </div>
  );
}
