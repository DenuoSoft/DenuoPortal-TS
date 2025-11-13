import { Text, TextItem, TitleBox, TitleImage } from './Profile.styled';
import { ProfileProps} from '../../models/profile'; 
import { ProfileConfig } from '../../models/profile';

export const Profile = ({data, 
  fieldsConfig = [],
  children,
  showAvatar = true,
  customTitle,
  onImageClick
}: ProfileProps ) => {
	
	const fullName = data.fullName || `${data.first_name || ''} ${data.last_name || ''}`.trim();

  const renderField = (field: ProfileConfig) => {
    if (!field.showIfEmpty && !field.value) return null;
    
    const displayValue = field.format 
      ? field.format(field.value)
      : field.value || '—';

    return (
      <TextItem key={field.key}>
        <strong>{field.label}</strong>
        {displayValue}
      </TextItem>
    );
  };

	return (
	<div>
      <TitleBox>
        {showAvatar && data.avatar && (
          <TitleImage onClick={onImageClick} $clickable={!!onImageClick}>
            <img src={data.avatar} alt={fullName} />
          </TitleImage>
        )}
        {customTitle || <h2>{fullName}</h2>}
      </TitleBox>

      <Text>
        {fieldsConfig.map(renderField)}
        {children}
      </Text>
    </div>
		
	);
};
