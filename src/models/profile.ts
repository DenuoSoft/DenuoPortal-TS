export interface ProfileConfig {
  key: string;
  label: string;
  value: string | number | null | undefined;
  showIfEmpty?: boolean;
  format?: (value: any) => string;
}

export interface ProfileProps {
  data: {
    avatar?: string;
    fullName?: string;
    title?: string;
    [key: string]: any;
  };
  fieldsConfig?: ProfileConfig[];
  children?: React.ReactNode;
  showAvatar?: boolean;
  customTitle?: React.ReactNode;
  onImageClick?: () => void;
}