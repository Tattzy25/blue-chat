import { Search } from '@upstash/search';

const client = new Search({
  url: process.env.NEXT_PUBLIC_UPSTASH_SEARCH_REST_URL || '',
  token: process.env.NEXT_PUBLIC_UPSTASH_SEARCH_REST_TOKEN || '',
});

// Chat conversation search index
export const index = client.index<{ title: string; content?: string; timestamp?: string }>('conversations');
