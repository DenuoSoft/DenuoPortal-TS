export interface AnnounceResult {
    id: number;
    title: string;
    description?: string;
    image: string;
    action_link: string;
    action: string;
}

export interface AnnounceResponse {
    results?: AnnounceResult[];
}