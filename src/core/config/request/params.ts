import { isValidString } from '../utils';
import { Params } from './types';

/**
 * Get the queries that have valid values
 * @param params - The params object
 * @returns The query string
 * @example
 * getParams({ page: 1, limit: 10, search: undefined });
 * @returns: '?page=1&limit=10'
 */
export const getParams = (params?: Params): string => {
  if (!params) return '';
  // from the params object remove any invalid value
  const validParams = Object.entries(params).filter(([, value]) =>
    isValidString(value?.toString())
  );

  // create a query string from the valid params
  const queryString = validParams
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return queryString ? `?${queryString}` : '';
};
