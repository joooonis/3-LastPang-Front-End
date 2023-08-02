import Image from 'next/image';
import { useRouter } from 'next/router';

import { profileAddBtn } from './profile.css';

export default function AddBtn() {
  const router = useRouter();
  return (
    <button onClick={() => router.push('/guide')} className={profileAddBtn}>
      <Image
        src="/profile_add_btn.svg"
        alt="Profile Add Button"
        height={36}
        width={36}
      />
    </button>
  );
}
