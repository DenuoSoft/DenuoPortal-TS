import {Tabs} from '../components/Tabs/Tabs';
import {Info} from '../components/HRContent/Info';
import {Policies} from '../components/HRContent/Policies';
import {Procedures} from '../components/HRContent/Procedures';
import Loader from '../components/Loader/Loader';

export const Hr = () => {
	let isLoading = false;
	let isError = false;
	let infoContent;
	let PoliciesContent;
	let ProcedresContent;

	infoContent = <Info />;
	PoliciesContent = <Policies />;
	ProcedresContent = <Procedures />;
	const content = {
		Info: infoContent,
		Policies: PoliciesContent,
		Procedures: ProcedresContent,
	};

	const tabs = [{name: 'Info'}, {name: 'Policies'}, {name: 'Procedures'}];

	return (
		<Loader
			isLoading={isLoading}
			isError={isError}
			minDelay={500}
			maxDelay={900}
		>
			<Tabs tabs={tabs} content={content} />
		</Loader>
	);
};
