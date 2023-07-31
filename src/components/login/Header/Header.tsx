import Image from 'next/image';
import { preview, header, title, titleWrapper } from './header.css';

export default function Header() {
  return (
    <header className={header}>
      <Image
        src="/wity_color_text_logo.svg"
        alt="Wity Text Logo"
        width={30}
        height={30}
      />
      <div className={titleWrapper}>
        <h1 className={title}>내 프로필 관리</h1>
        <p className={preview}>미리보기</p>
      </div>
    </header>
  );
}
