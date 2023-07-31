import Image from 'next/image';

import { profileAddBtn } from './profile.css';

export default function AddBtn() {
  return (
    <button className={profileAddBtn}>
      <Image
        src="/profile_add_btn.svg"
        alt="Profile Add Button"
        height={36}
        width={36}
      />
    </button>
  );
}
