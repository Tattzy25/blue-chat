import { useEffect } from 'react';

export function useKeyboardShortcut(
  key: string,
  modifiers: { meta?: boolean; ctrl?: boolean; shift?: boolean; alt?: boolean } = {},
  callback: () => void
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { meta = false, ctrl = false, shift = false, alt = false } = modifiers;
      
      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        event.metaKey === meta &&
        event.ctrlKey === ctrl &&
        event.shiftKey === shift &&
        event.altKey === alt
      ) {
        event.preventDefault();
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [key, modifiers, callback]);
}

export function useCommandK(callback: () => void) {
  return useKeyboardShortcut('k', { meta: true, ctrl: true }, callback);
}