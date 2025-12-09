"use client";

import { SearchDialog } from "@/components/search";

export function StickySearchBar() {
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <SearchDialog />
      </div>
    </div>
  );
}
