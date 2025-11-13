import {useMemo, useState} from 'react';
import DOMPurify from 'dompurify';
import {useGetNewsQuery} from '../../Api/apiSlice';
import Loader from '../Loader/Loader';
import {Modal} from '../Modal/Modal';
import {parseDate} from '../../utils/parseDate';
import {formatDate} from '../../utils/formatDate';
import '../../models/news';
import {
	Content,
	ImageBox,
	InfoBox,
	NewsBox,
	NewsItems,
	NewsWrapper,
	Text,
	Title,
} from './News.styled';

export const News = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

	const {
		data: response = {},
		isLoading: isNewsLoading,
		isError: isNewsError,
	} = useGetNewsQuery(undefined);

	const isLoading = isNewsLoading;
	const isError = isNewsError;

	const sortedNews = useMemo(() => {
		const results = (response as NewsResponse).results || [];
		return [...results]
			.sort((a, b) => {
				const dateA = parseDate(a.date);
				const dateB = parseDate(b.date);

				if (dateA && dateB) {
					return dateB.getTime() - dateA.getTime();
				}

				if (!dateA && !dateB) return 0;
				if (!dateA) return 1;
				if (!dateB) return -1;

				return 0;
			})
			.map((item) => ({
				...item,
				formattedDate: formatDate(item.date),
				sanitizedContent: DOMPurify.sanitize(item.content, {
					ALLOWED_TAGS: [
						'h1',
						'h2',
						'h3',
						'p',
						'strong',
						'em',
						'a',
						'ul',
						'ol',
						'li',
					],
					ALLOWED_ATTR: ['href', 'target', 'rel'],
				}),
				sanitizedExcerpt: DOMPurify.sanitize(item.excerpt, {
					ALLOWED_TAGS: [],
					ALLOWED_ATTR: [],
				}),
			}));
	}, [(response as NewsResponse).results]);

	const openModal = (newsItem: NewsItem) => {
		setSelectedNews(newsItem);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedNews(null);
	};

	return (
		<Loader
			isLoading={isLoading}
			isError={isError}
			minDelay={500}
			maxDelay={900}
		>
			<NewsWrapper>
				<NewsBox>
					{sortedNews.length === 0 ? (
						<NewsItems>No any news</NewsItems>
					) : (
						sortedNews.map((item) => (
							<NewsItems key={item.id} onClick={() => openModal(item)}>
								<ImageBox>
									<img src={item.image} alt="news" />
								</ImageBox>
								<InfoBox>
									<Text>
										<span>{item.formattedDate}</span>
										<Title>{item.title}</Title>
									</Text>
									<Content
										dangerouslySetInnerHTML={{
											__html: item.sanitizedExcerpt || '',
										}}
									/>
								</InfoBox>
							</NewsItems>
						))
					)}
				</NewsBox>
				<Modal isOpen={isModalOpen} onClose={closeModal} isVisible={false}>
					{selectedNews && (
						<div
							dangerouslySetInnerHTML={{
								__html: selectedNews.sanitizedContent || '',
							}}
						/>
					)}
				</Modal>
			</NewsWrapper>
		</Loader>
	);
};
