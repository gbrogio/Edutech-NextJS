export async function searchInData<T>(data: T[], searchKey: string) {
  const searchKeyLowerCase = searchKey.toLowerCase();
  const filteredData = data
    .filter((item) => {
      const itemStringLowerCase = JSON.stringify(item).toLowerCase();
      return itemStringLowerCase.includes(searchKeyLowerCase);
    })
    .map((item) => {
      const itemString = JSON.stringify(item);
      const itemStringLowerCase = itemString.toLowerCase();
      const itemSplitted = itemString.split('');
      const itemKeyIndexOf = itemStringLowerCase.indexOf(searchKeyLowerCase);
      const searchKeyNumberOfCharacters = searchKeyLowerCase.split('').length;

      itemSplitted[itemKeyIndexOf] = `<span>${itemSplitted[itemKeyIndexOf]}`;
      itemSplitted[itemKeyIndexOf + searchKeyNumberOfCharacters - 1] = `${
        itemSplitted[itemKeyIndexOf + searchKeyNumberOfCharacters - 1]
      }</span>`;

      const finallyData = itemSplitted.join('');
      return JSON.parse(finallyData);
    });

  if (filteredData.length === 0) {
    const noResultsError = {
      isInvalid: true,
      type: 'no-result',
      invalidCharacters: [],
    };

    throw noResultsError;
  }
  return filteredData;
}
