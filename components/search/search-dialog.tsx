"use client";

import { SearchBar } from "@upstash/search-ui";
import "@upstash/search-ui/dist/index.css";
import { Search } from "@upstash/search";
import { FileText } from "lucide-react";

const client = new Search({
  url: process.env.NEXT_PUBLIC_UPSTASH_SEARCH_REST_URL!,
  token: process.env.NEXT_PUBLIC_UPSTASH_SEARCH_REST_TOKEN!,
});

// CMDK component catalog index - typed for content fields
type CMDKContent = {
  Name: string;
  Category: string;
  [key: string]: unknown;
};

const index = client.index<CMDKContent>("CMDK");

interface SearchDialogProps {
  className?: string;
}

export function SearchDialog({ className = "" }: SearchDialogProps) {
  return (
    <div className={className}>
      <SearchBar.Dialog>
        <SearchBar.DialogTrigger placeholder="Search components..." />

        <SearchBar.DialogContent>
          <SearchBar.Input 
            className="focus:ring-blue-500"
            placeholder="Type to search components..." 
          />
          <SearchBar.Results
            searchFn={(query) => {
              return index.search({ query, limit: 10, reranking: true });
            }}
          >
            {(result) => (
              <SearchBar.Result 
                value={result.id} 
                key={result.id}
              >
                <SearchBar.ResultIcon>
                  <FileText className="text-gray-600" />
                </SearchBar.ResultIcon>

                <SearchBar.ResultContent>
                  <SearchBar.ResultTitle
                    className="font-medium text-gray-900"
                    highlightClassName="decoration-blue-500 text-blue-500"
                  >
                    {result.content.Name}
                  </SearchBar.ResultTitle>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {result.content.Category}
                  </p>
                </SearchBar.ResultContent>
              </SearchBar.Result>
            )}
          </SearchBar.Results>
        </SearchBar.DialogContent>
      </SearchBar.Dialog>
    </div>
  );
}