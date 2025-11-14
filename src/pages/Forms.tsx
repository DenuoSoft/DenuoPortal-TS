import {Tabs} from '../components/Tabs/Tabs';
import Loader from '../components/Loader/Loader';
import Conflict from '../components/Forms/Conflict/Conflict';

export const Forms = () => {
	let isLoading = false;
	let isError = false;
	let conflictFormContent;
	let formOneContent;
	let formTwoContent;

	conflictFormContent = <Conflict />;

	formOneContent = (
		<div>
			<h1>Form 1</h1>
		</div>
	);
	formTwoContent = (
		<div>
			<h1>Form 2</h1>
		</div>
	);

	const content = {
		Conflict: conflictFormContent,
		FormOne: formOneContent,
		FormTwo: formTwoContent,
	};

	const tabs = [{name: 'Conflict'}, {name: 'FormOne'}, {name: 'FormTwo'}];

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
