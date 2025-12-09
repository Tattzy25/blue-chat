import { searchClient } from './client';
import { CMDKContent, CMDKMetadata } from './types';

// CMDK component catalog index
export const cmdkIndex = searchClient.index<CMDKContent, CMDKMetadata>('CMDK');