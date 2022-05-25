export function invalidCharacterChecker(
  text: string,
  options: {
    permitBlankText: boolean;
    permitSpaces: boolean;
    invalidCharacters: string[];
  },
): {
  isInvalid: boolean;
  type: 'invalid-characters' | 'blank-text' | 'spaces' | 'correct';
  invalidCharacters: string[];
} {
  const { permitBlankText, permitSpaces, invalidCharacters } = options;

  const invalidCharactersRegex = new RegExp(
    `[${invalidCharacters.join('')}]`,
    'g',
  );

  const invalidCharactersFound = text.match(invalidCharactersRegex);
  if (invalidCharactersFound) {
    return {
      isInvalid: true,
      type: 'invalid-characters',
      invalidCharacters: invalidCharactersFound,
    };
  }
  if (!permitBlankText && text.length === 0) {
    return {
      isInvalid: true,
      type: 'blank-text',
      invalidCharacters: [],
    };
  }
  if (!permitSpaces && text.match(/\s/g)) {
    return {
      isInvalid: true,
      type: 'spaces',
      invalidCharacters: [],
    };
  }

  return {
    isInvalid: false,
    type: 'correct',
    invalidCharacters: [],
  };
}
