// HeaderProfile.tsx
import {
  ProfileImage,
  ProfileImageBox,
  ProfileText,
  ProfileWrapper,
} from './HeaderProfile.styled';
import profile from '../../../assets/images/user_photo.jpg';
import { useKeycloak } from '../../auth/keycloak-context';
import { useState } from 'react';
import { Modal } from '../../Modal/Modal';
import { Profile } from '../../Profile/Profile';
import { createHeaderProfileConfig } from './profileConfig'; // или getHeaderProfileConfig

export const HeaderProfile = () => {
  const { authenticated, userInfo } = useKeycloak();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!authenticated) {
    return <ProfileText>You are not autorized</ProfileText>;
  }

  const headerProfileConfig = createHeaderProfileConfig(userInfo);

	const profileData = {
    fullName: userInfo?.name,
    avatar: profile 
  };

  return (
    <ProfileWrapper onClick={() => setIsModalOpen(true)}>
      <ProfileText>Welcome, {userInfo?.name}</ProfileText>
      <ProfileImageBox>
        <ProfileImage src={profile} />
      </ProfileImageBox>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isVisible={false}>
        <Profile 
          data={profileData}
          fieldsConfig={headerProfileConfig}
          showAvatar={false}
        />
      </Modal>
    </ProfileWrapper>
  );
};