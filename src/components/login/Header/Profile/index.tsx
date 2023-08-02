import { useProfileStore } from '@/components/store/profileStore';

import ProfileAddBtn from './AddBtn';
import Avatar from './Avatar';
import { profileContainer } from './profile.css';

export default function Profile() {
  const profile = useProfileStore((state) => state.profiles);

  return (
    <div className={profileContainer}>
      {/* TEST: 더미 데이터 */}
      {profile.map((profile) => (
        <Avatar
          key={profile.nickname}
          name={profile.nickname || 'profile'}
          src={
            (profile.profile &&
              URL.createObjectURL(profile.profile[0] as any)) ||
            '/profile_default.svg'
          }
        />
      ))}

      <ProfileAddBtn />
    </div>
  );
}
