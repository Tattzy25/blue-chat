'use client';

import { SearchIcon } from 'lucide-react';
import { useSyncExternalStore } from 'react';
import { Kbd } from '@/components/ui/kbd';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';

const emptySubscribe = () => () => {};
const getIsMac = () => typeof navigator !== 'undefined' && navigator.platform.toUpperCase().indexOf("MAC") >= 0;
const getServerSnapshot = () => false;

interface SearchTriggerProps {
  onClick: () => void;
  className?: string;
}

export function SearchTrigger({ onClick, className }: SearchTriggerProps) {
  const isMac = useSyncExternalStore(emptySubscribe, getIsMac, getServerSnapshot);

  return (
    <div className={className} onClick={onClick}>
      <InputGroup className="cursor-pointer hover:border-ring transition-colors">
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." readOnly className="cursor-pointer" />
        <InputGroupAddon align="inline-end">
          <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
