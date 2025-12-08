import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SearchResult } from "@/lib/search/types";

interface SearchDialogContentProps {
  results: SearchResult[];
  onSearch: (query: string) => void;
  onSelect: (result: SearchResult) => void;
  placeholder?: string;
  emptyMessage?: string;
  groupHeading?: string;
}

export function SearchDialogContent({
  results,
  onSearch,
  onSelect,
  placeholder = "Search conversations...",
  emptyMessage = "No results found.",
  groupHeading = "Conversations"
}: SearchDialogContentProps) {
  return (
    <Command>
      <CommandInput 
        placeholder={placeholder} 
        onValueChange={onSearch}
      />
      <CommandList>
        <CommandEmpty>{emptyMessage}</CommandEmpty>
        <CommandGroup heading={groupHeading}>
          {results.map((result) => (
            <CommandItem 
              key={result.id}
              onSelect={() => onSelect(result)}
            >
              <div className="flex flex-col">
                <span className="font-medium">{result.content.title}</span>
                {result.content.content && (
                  <span className="text-xs text-muted-foreground">
                    {result.content.content}
                  </span>
                )}
                {result.content.timestamp && (
                  <span className="text-xs text-muted-foreground">
                    {result.content.timestamp}
                  </span>
                )}
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}