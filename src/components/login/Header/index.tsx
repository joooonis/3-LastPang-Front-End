import Title from './Title';
import Profile from './Profile';
import TabBar from './TabBar';

import { fullWidth } from './style.css';

export default function Header() {
  return (
    <header className={fullWidth}>
      <Title />
      <Profile />
      <TabBar />
    </header>
  );
}
