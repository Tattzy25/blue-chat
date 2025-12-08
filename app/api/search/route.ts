import { index } from '@/lib/search';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q') || '';
  const limit = parseInt(searchParams.get('limit') || '10');

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const results = await index.search({ query, limit, reranking: true });

  return NextResponse.json({ results });
}
