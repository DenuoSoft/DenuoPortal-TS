import { Text, TextItem, TitleBox, TitleImage } from './Profile.styled';
import { ProfileProps} from '../../models/users'; 

export const Profile = ({ modalData }: ProfileProps ) => {
	const fullName = `${modalData.first_name || ''} ${modalData.last_name || ''}`.trim();
	const positionName = modalData.position?.name || '';
	const extPhone = modalData.ext_phone || '';
	const mobilePhone = modalData.mobile_phone || '';
	const office = modalData.location || '';
	const assistant = modalData.assistant || '';
	const assistantExt = modalData.assistant_ext || '';

	return (
		<div>
			<TitleBox>
				<TitleImage>
					<img src={modalData.avatar || ''} alt={fullName} />
				</TitleImage>
				<h2>{fullName}</h2>
			</TitleBox>

			<Text>
				<TextItem>
					<strong>Job Position:</strong>
					{positionName}
				</TextItem>
				<TextItem>
					<strong>Extension:</strong>
					{extPhone}
				</TextItem>
				<TextItem>
					<strong>Mobile Phone:</strong> {mobilePhone}
				</TextItem>
				
				<TextItem>
					<strong>Office:</strong> {office}
				</TextItem>
				<TextItem>
					<strong>Assistant:</strong> {assistant}
				</TextItem>
				<TextItem>
					<strong>Assistant extension:</strong> {assistantExt}
				</TextItem>
			</Text>
		</div>
	);
};
