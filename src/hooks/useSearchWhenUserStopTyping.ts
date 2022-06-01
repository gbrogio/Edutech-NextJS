import { useEffect, useState } from 'react';

import { searchInData } from '@services/search';
import { invalidCharacterChecker } from '@services/search/invalid-character-checker';

export function useSearchWhenUserStopTyping<T>(
  data: T[] | null | undefined,
  characterChecker?: {
    permitBlankText: boolean;
    permitSpaces: boolean;
    invalidCharacters: string[];
  },
) {
  const [searchError, setSearchError] = useState({
    isInvalid: false,
    type: 'correct',
    invalidCharacters: [] as string[],
  });
  const [searchListener, setSearchListener] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<T[]>([]);
  const [searching, setSearching] = useState(false);

  function onErrorInSearch(error: {
    isInvalid: boolean;
    type: string;
    invalidCharacters: string[];
  }) {
    setSearchError({
      isInvalid: error.isInvalid,
      type: error.type,
      invalidCharacters: error.invalidCharacters,
    });
    setFilteredData([]);
  }
  function resetSearchError() {
    setSearchError({
      isInvalid: false,
      type: 'correct',
      invalidCharacters: [],
    });
  }

  useEffect(() => {
    if (searchListener && data) {
      setSearching(true);
      const { isInvalid, invalidCharacters, type } = invalidCharacterChecker(
        searchListener,
        characterChecker || {
          permitBlankText: false,
          permitSpaces: false,
          invalidCharacters: ['{', '}', '\\', '/', '[', '\\]'],
        },
      );

      if (isInvalid) {
        setSearching(false);
        return onErrorInSearch({ isInvalid, type, invalidCharacters });
      }
      resetSearchError();

      const timer = setTimeout(() => {
        searchInData(data, searchListener)
          .then((resFilteredData) => {
            resetSearchError();
            setFilteredData(resFilteredData);
          })
          .catch((error) => {
            onErrorInSearch(error);
          });
      }, 1500);
      setSearching(false);

      return () => clearTimeout(timer);
    }

    return () => setFilteredData([]);
  }, [searchListener, characterChecker, data]);

  return {
    searching,
    searchError,
    setFilteredData,
    filteredData,
    setSearchListener,
  };
}
