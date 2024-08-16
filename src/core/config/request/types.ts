import type { KyRequest } from 'ky';

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export type Params = Record<string, any>;

export interface RequestProps {
  method?: HTTPMethod;
  path: string;
  baseUrl?: string;
  data?: any;
  headers?: Record<string, string>;
  params?: Params;
  cache?: boolean;
}

export interface RetryRequest extends KyRequest {
  _retry?: boolean;
}
