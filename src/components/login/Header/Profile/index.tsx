import ProfileAddBtn from './AddBtn';
import Avatar from './Avatar';
import { profileContainer } from './profile.css';

export default function Profile() {
  return (
    <div className={profileContainer}>
      {/* TEST: 더미 데이터 */}
      <Avatar featured name="Profile" />
      <Avatar name="Sue" />
      <Avatar name="Tom" />
      <ProfileAddBtn />
    </div>
  );
}
