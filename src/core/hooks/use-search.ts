import { parseAsString, useQueryState } from 'nuqs';

const useSearch = () => {
  return useQueryState('search', parseAsString.withDefault(''));
};

export default useSearch;
