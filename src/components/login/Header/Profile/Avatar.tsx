import Image from 'next/image';

import {
  avatar,
  featuredAvatar,
  featuredName,
  profileName,
  profileWrapper,
} from './profile.css';

interface Props {
  featured?: boolean;
  name: string;
  src?: string;
}

export default function Avatar({ featured, name, src }: Props) {
  const avatarClass = `${avatar} ${featured && featuredAvatar}`;
  const nameClass = `${profileName} ${featured && featuredName}`;

  return (
    <div className={profileWrapper}>
      <div className={avatarClass}>
        <Image
          style={{
            objectFit: `cover`,
          }}
          src={src || '/avatar_default.svg'}
          alt="Profile Avatar"
          fill
        />
      </div>
      <p className={nameClass}>{name}</p>
    </div>
  );
}
