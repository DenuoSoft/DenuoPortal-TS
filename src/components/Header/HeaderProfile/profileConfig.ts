// header-profile-config.ts
import { ProfileConfig } from '../../../models/profile';

export interface UserProfileData {
  name?: string;
  shortname?: string;
  email?: string;
}

export const createHeaderProfileConfig = (userInfo?: UserProfileData): ProfileConfig[] => [
  {
    key: 'username',
    label: 'User name:',
    value: userInfo?.name,
    showIfEmpty: false
  },
  {
    key: 'shortname',
    label: 'Short name:',
    value: userInfo?.shortname, 
    showIfEmpty: false
  },
  {
    key: 'email',
    label: 'E-mail:',
    value: userInfo?.email,
    showIfEmpty: false
  },
  {
    key: 'vacation',
    label: 'Vacation days left:',
    value: 16,
    showIfEmpty: true
  }
];