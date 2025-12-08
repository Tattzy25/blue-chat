import { Search } from '@upstash/search';

export const searchClient = new Search({
  url: process.env.NEXT_PUBLIC_UPSTASH_SEARCH_REST_URL || '',
  token: process.env.NEXT_PUBLIC_UPSTASH_SEARCH_REST_TOKEN || '',
});