import Image from 'next/image';

import { profileWrapper, avatar, profileName } from './profile.css';

export default function Avatar() {
  return (
    <div className={profileWrapper}>
      <div className={avatar}>
        <Image
          src="/avatar_default.svg"
          alt="Profile Avatar"
          width={50}
          height={50}
        />
      </div>
      <p className={profileName}>Profile</p>
    </div>
  );
}
