import {News} from '../News/News';
import {Slider} from '../Slider/Slider';
import {HomeNews, HomeSlider, HomeWrapper, NewsTitle} from './HomeView.styled';

export const HomeView = () => {
	return (
		<HomeWrapper>
			<HomeSlider>
				<Slider />
			</HomeSlider>
			<HomeNews>
				<NewsTitle>News</NewsTitle>
				<News />
			</HomeNews>
		</HomeWrapper>
	);
};
