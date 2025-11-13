import { ProfileImage, ProfileImageBox, ProfileText, ProfileWrapper } from './Profile.styled';
import profile from '../../../assets/images/user_photo.jpg';
import { useKeycloak } from '../../auth/keycloak-context';

export const Profile = () => {
	const { authenticated, userInfo } = useKeycloak();
	if (!authenticated) {
		return <ProfileText>You are not autorized</ProfileText>;
	}
	const userName = userInfo?.name 
	return (
		<ProfileWrapper>
			<ProfileText>Welcome, {userName}</ProfileText>
      <ProfileImageBox>
        <ProfileImage src={profile} />
			</ProfileImageBox>
		</ProfileWrapper>
	);
};
