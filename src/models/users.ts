export interface UsersList {
	id: number;
	first_name: string;
	last_name: string;
	position: {
		id: number;
		name: string;
	};
	ext_phone: string;
	location: string;
	mobile_phone: string;
	assistant: string;
	assistant_ext: string;
	avatar: string;
}

export interface UsersResponse {
	results?: UsersList[];
}

export interface ProfileProps {
  modalData: UsersList;
}
