import {useState, useEffect} from 'react';
import { Spinner } from '../shared/spinner/Spinner';
import '../../models/spinnerModel'
import { SpinnerProps } from '../../models/spinnerModel';
const Loader = ({
	isLoading,
	isError,
	minDelay,
	maxDelay,
	children,
}: SpinnerProps) => {
	const [isDelay, setIsDelay] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsDelay(false);
		}, minDelay + Math.random() * (maxDelay - minDelay));

		return () => clearTimeout(timer);
	}, [minDelay, maxDelay]);

	if (isLoading || isDelay) {
		return <Spinner />;
	}

	if (isError) {
		return <div className="loading-error">Error loading</div>;
	}

	return children;
};


export default Loader;
