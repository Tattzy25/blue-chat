"use client";

import { SearchDialog } from "@/components/search";
import { SearchResult } from "@/lib/search/types";

export function StickySearchBar() {
  const handleSelect = (result: SearchResult) => {
    console.log('Selected conversation:', result);
    // Navigate to conversation or perform action
  };

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <SearchDialog onSelect={handleSelect} />
      </div>
    </div>
  );
}
