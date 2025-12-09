import { Search } from '@upstash/search';
import { CMDKContent, CMDKMetadata } from './search/types';

const client = new Search({
  url: process.env.NEXT_PUBLIC_UPSTASH_SEARCH_REST_URL || '',
  token: process.env.NEXT_PUBLIC_UPSTASH_SEARCH_REST_TOKEN || '',
});

// CMDK component catalog index
export const index = client.index<CMDKContent, CMDKMetadata>('CMDK');
