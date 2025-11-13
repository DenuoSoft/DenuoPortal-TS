interface NewsItem {
  id: number;
  date: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  formattedDate?: string;
  sanitizedContent?: string;
  sanitizedExcerpt?: string;
}

interface NewsResponse {
  results?: NewsItem[];
}