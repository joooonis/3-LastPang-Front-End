import { useEffect } from 'react';

import { useProfileStore } from '@/store/profileStore';

import ProfileAddBtn from './AddBtn';
import Avatar from './Avatar';
import { profileContainer } from './profile.css';

export default function Profile() {
  const profile = useProfileStore((state) => state.profiles);
  const currentProfile = useProfileStore((state) => state.currentProfile);
  const selectProfile = useProfileStore((state) => state.selectProfile);

  const handleProfileClick = (profile: any) => {
    selectProfile(profile);
  };

  useEffect(() => {
    if (profile.length === 0) return;
    selectProfile(profile[profile.length - 1]);
  }, [profile]);

  return (
    <div className={profileContainer}>
      {profile.map((profile, index) => (
        <Avatar
          onClick={() => handleProfileClick(profile)}
          key={profile.nickname}
          featured={profile === currentProfile}
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
