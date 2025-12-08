"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSearch, useCommandK } from "@/hooks/search";
import { SearchResult } from "@/lib/search/types";
import { SearchTrigger } from "./search-trigger";
import { SearchDialogContent } from "./search-dialog-content";

interface SearchDialogProps {
  onSelect?: (result: SearchResult) => void;
  placeholder?: string;
  className?: string;
}

export function SearchDialog({ 
  onSelect, 
  placeholder = "Search conversations...",
  className = ""
}: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const { results, search } = useSearch();

  useCommandK(() => setOpen(prev => !prev));

  const handleSearch = async (query: string) => {
    await search({ query });
  };

  const handleSelect = (result: SearchResult) => {
    onSelect?.(result);
    setOpen(false);
  };

  return (
    <div className={className}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <SearchTrigger 
            placeholder={placeholder}
            onClick={() => setOpen(true)}
          />
        </DialogTrigger>

        <DialogContent className="p-0">
          <SearchDialogContent
            results={results}
            onSearch={handleSearch}
            onSelect={handleSelect}
            placeholder={placeholder}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}