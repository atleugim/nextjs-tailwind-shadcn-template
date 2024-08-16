import { parseAsString, useQueryState } from 'nuqs';

const useSearch = () => {
  return useQueryState('search', parseAsString);
};

export default useSearch;
