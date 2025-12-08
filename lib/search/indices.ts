import { searchClient } from './client';

export interface ConversationContent {
  title: string;
  content?: string;
  timestamp?: string;
  [key: string]: unknown;
}

export const conversationsIndex = searchClient.index<ConversationContent>('conversations');