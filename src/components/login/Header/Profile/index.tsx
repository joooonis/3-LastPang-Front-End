import Avatar from './Avatar';

import { profileContainer } from './profile.css';

export default function Profile() {
  return (
    <div className={profileContainer}>
      <Avatar />
      <Avatar />
      <Avatar />
    </div>
  );
}
