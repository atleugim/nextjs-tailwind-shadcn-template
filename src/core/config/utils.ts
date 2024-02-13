import { clsx, type ClassValue } from 'clsx';
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatDate = (date: string): string | undefined => {
  if (!date) return undefined;
  return format(new Date(date), 'dd MMM yyyy - hh:mm:ss a');
};

const isValidString = (str: string): boolean => {
  if (
    str === null ||
    str === undefined ||
    str === 'null' ||
    str === 'undefined' ||
    str === ''
  ) {
    return false;
  }

  return true;
};

export const removeParamsIfNull = (str: string): string => {
  const hasQueryParams = str.includes('?');

  if (!hasQueryParams) {
    return str;
  }

  const pathWithoutQueryParams = str.split('?')[0];

  const queryParamsString = str.split('?')[1];
  const queryParams = queryParamsString.split('&');

  const newQueryParams = queryParams.filter((param) => {
    const paramValue = param.split('=')[1];
    return isValidString(paramValue);
  });

  if (newQueryParams.length == 0) {
    return pathWithoutQueryParams;
  }

  return `${pathWithoutQueryParams}?${newQueryParams.join('&')}`;
};
