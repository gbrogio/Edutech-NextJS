export async function searchInData<T>(data: T[], searchKey: string) {
  const searchKeyLowerCase = searchKey.toLowerCase();
  const filteredData = data.filter((item) => {
    const itemString = JSON.stringify(item).toLowerCase();
    return itemString.includes(searchKeyLowerCase);
  });

  if (filteredData.length === 0) {
    const noResultsError = {
      isInvalid: true,
      type: 'no-result',
      invalidCharacters: []
    };

    throw noResultsError;
  }
  return filteredData;
}
