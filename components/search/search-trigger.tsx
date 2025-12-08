import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";

interface SearchTriggerProps {
  placeholder?: string;
  onClick?: () => void;
}

export function SearchTrigger({ 
  placeholder = "Search conversations...", 
  onClick 
}: SearchTriggerProps) {
  return (
    <div className="w-full max-w-xs mx-auto cursor-pointer" onClick={onClick}>
      <InputGroup>
        <InputGroupInput 
          placeholder={placeholder} 
          className="cursor-pointer" 
          readOnly 
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}