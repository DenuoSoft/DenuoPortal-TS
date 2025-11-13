import {useMemo, useState} from 'react';
import {
	AlphabetBlock,
	AlphabetList,
	SearchWrap,
	TableContainer,
	TableHeader,
	TableCell,
	TableBody,
	TableRow,
	NotFound,
	MainWrap,
	AlphabetHeader,
} from './PeopleList.styled';
import {useGetUsersQuery} from '../../Api/apiSlice';
import '../../models/users';
import {UsersResponse} from '../../models/users';
import Loader from '../Loader/Loader';
import {useAutoAuth} from '../../hooks/useAuthInit';
import {Input} from '../Input/Input';
import {Modal} from '../Modal/Modal';
import {Profile} from '../Profile/Profile';
import { employeeProfileConfig } from './peopleConfig';

export const PeopleList = () => {
	useAutoAuth();
	const [selectedLetter, setSelectedLetter] = useState('ALL');
	const [searchTerm, setSearchTerm] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalData, setModalData] = useState<any>(null);

	const {
		data: response = {results: []},
		isLoading,
		isError,
	} = useGetUsersQuery(undefined);

	const openModal = (contact: any) => {
		setModalData(contact);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setModalData(null);
	};

	const alphabet = useMemo(
		() => Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i)),
		[]
	);

	const users = (response as UsersResponse)?.results || [];
	const peopeleProfileConfig = employeeProfileConfig(modalData);
	
	const getProfileData = (userData: any) => {
		return {
			first_name: userData.first_name,
			last_name: userData.last_name,
			avatar: userData.avatar,
			position: userData.position,
			ext_phone: userData.ext_phone,
			mobile_phone: userData.mobile_phone,
			location: userData.location,
			assistant: userData.assistant,
			assistant_ext: userData.assistant_ext,

			fullName: `${userData.first_name || ''} ${
				userData.last_name || ''
			}`.trim(),
		};
	};

	const filteredUsers = useMemo(() => {
		return users.filter((user) => {
			const firstLetter = user.last_name?.charAt(0)?.toUpperCase();
			const letterMatch =
				selectedLetter === 'ALL' || firstLetter === selectedLetter;

			const searchMatch =
				searchTerm === '' ||
				user.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.position?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.location?.toLowerCase().includes(searchTerm.toLowerCase());

			return letterMatch && searchMatch;
		});
	}, [users, selectedLetter, searchTerm]);

	const handleLetterClick = (letter: string) => {
		setSelectedLetter(letter);
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const columns = [
		'Name',
		'Job position',
		'Extension',
		'Mobile phone',
		'Office',
	];

	return (
		<Loader
			isLoading={isLoading}
			isError={isError}
			minDelay={500}
			maxDelay={900}
		>
			<SearchWrap>
				<Input
					value={searchTerm}
					onChange={handleSearchChange}
					placeholder="Search users..."
				/>
			</SearchWrap>
			<MainWrap>
				<AlphabetBlock>
					<AlphabetHeader
						key="ALL"
						onClick={() => handleLetterClick('ALL')}
						$isActive={selectedLetter === 'ALL'}
					>
						All
					</AlphabetHeader>
					{alphabet.map((letter) => (
						<AlphabetList
							key={letter}
							onClick={() => handleLetterClick(letter)}
							$isActive={selectedLetter === letter}
						>
							{letter}
						</AlphabetList>
					))}
				</AlphabetBlock>
				<TableContainer>
					<TableHeader>
						{columns.map((col) => (
							<TableCell key={col}>{col}</TableCell>
						))}
					</TableHeader>
					<TableBody>
						{filteredUsers.length > 0 ? (
							filteredUsers.map((user) => {
								const fullName = `${user.first_name || ''} ${
									user.last_name || ''
								}`.trim();

								return (
									<TableRow key={user.id}>
										<TableCell
											style={{cursor: 'pointer'}}
											onClick={() => openModal(user)}
										>
											{fullName}
										</TableCell>
										<TableCell>{user.position?.name || ''}</TableCell>
										<TableCell>{user.ext_phone || ''}</TableCell>
										<TableCell>{user.mobile_phone || ''}</TableCell>
										<TableCell>{user.location || ''}</TableCell>
									</TableRow>
								);
							})
						) : (
							<NotFound>
								{isLoading
									? 'Loading users...'
									: 'No users found matching your criteria'}
							</NotFound>
						)}
					</TableBody>
				</TableContainer>

				<Modal isOpen={isModalOpen} onClose={closeModal} isVisible={false}>
					{modalData && (
						<Profile
							data={getProfileData(modalData)}
							fieldsConfig={peopeleProfileConfig}
							showAvatar={true}
						/>
					)}
				</Modal>
			</MainWrap>
		</Loader>
	);
};
