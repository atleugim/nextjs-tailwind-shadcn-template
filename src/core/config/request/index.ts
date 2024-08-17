import ky from 'ky';
import { env } from 'src/env';

import { getParams } from './params';
import { RequestProps } from './types';

const _instance = ky.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Developed-By': 'Miguel Vega'
  }
});

/**
 * Makes an HTTP request using the specified parameters.
 *
 * @param path - The path of the API endpoint (must not start with `/`).
 * @param method - The HTTP method (e.g., `GET`, `POST`, `PUT`, `DELETE`).
 * @param baseUrl - The base URL of the API. (optional) (default: `API_URL`)
 * @param data - The data to send with the request. (optional)
 * @param params - The query parameters to include in the request URL. (optional)
 * @returns A Promise that resolves to the response data.
 * @throws If an error occurs during the request.
 */
export const request = async <T>({
  path,
  method = 'GET',
  baseUrl = env.NEXT_PUBLIC_API_URL,
  data,
  headers,
  params
}: RequestProps): Promise<T> => {
  const withFiles = data instanceof FormData;
  const queryParams = getParams(params);

  const response = await _instance(`${path}/${queryParams}`, {
    method,
    prefixUrl: baseUrl,
    json: withFiles ? undefined : data,
    body: withFiles ? data : undefined,
    headers: {
      ...(data && !withFiles ? { 'Content-Type': 'application/json' } : {}),
      ...(headers || {})
    },
    searchParams: params
  }).json<T>();

  return response;
};
