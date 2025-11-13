import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGetAnnounceQuery } from '../../Api/apiSlice';
import {
	SliderWrapper,
	SliderBox,
	Slide,
	SlideContent,
	TextBox,
	Text,
	ButtonBox,
	NavButton,
	Button,
	DotsContainer,
	Dot,
} from './Slider.styled';
import { AnnounceResponse, AnnounceResult } from '../../models/slider';



export const Slider = () => {
	const { data: response = {} } = useGetAnnounceQuery(undefined);
	const results = (response as AnnounceResponse).results || [];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const currentResult = results[currentIndex] || {} as AnnounceResult;

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	useEffect(() => {
		resetTimeout();
		if (!isPaused && results.length > 0) {
			timeoutRef.current = setTimeout(() => {
				setCurrentIndex((prev) => (prev === results.length - 1 ? 0 : prev + 1));
			}, 3000);
		}

		return () => {
			resetTimeout();
		};
	}, [currentIndex, isPaused, results.length]);

	const prevSlide = () => {
		if (results.length === 0) return;
		setCurrentIndex((idx) => (idx === 0 ? results.length - 1 : idx - 1));
	};

	const nextSlide = () => {
		if (results.length === 0) return;
		setCurrentIndex((idx) => (idx === results.length - 1 ? 0 : idx + 1));
	};

	if (results.length === 0) {
		return null;
	}

	return (
		<SliderWrapper>
			<SliderBox
				$isPaused={isPaused}
				onMouseEnter={() => setIsPaused(true)}
				onMouseLeave={() => setIsPaused(false)}
			>
				<Slide $isActive={true}>
					<SlideContent $backgroundImage={currentResult.image}>
						<TextBox>
							<Text>
								<h2>{currentResult.title}</h2>
								{currentResult.description && (
									<p>{currentResult.description}</p>
								)}
							</Text>
							<ButtonBox>
								<Link
									to={currentResult.action_link}
									style={{ textDecoration: 'none' }}
								>
									<Button>{currentResult.action}</Button>
								</Link>
							</ButtonBox>
						</TextBox>
					</SlideContent>
				</Slide>

				<NavButton $isPrev={true} $isNext={false} onClick={prevSlide} aria-label="Previous Slide">
					&#10094;
				</NavButton>
				<NavButton $isPrev={false} $isNext={true} onClick={nextSlide} aria-label="Next Slide">
					&#10095;
				</NavButton>
			</SliderBox>

			<DotsContainer>
				{results.map((result, idx) => (
					<Dot
						key={result.id || idx}
						$isActive={idx === currentIndex}
						onClick={() => setCurrentIndex(idx)}
					/>
				))}
			</DotsContainer>
		</SliderWrapper>
	);
};