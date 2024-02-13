import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const useQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = useMemo(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    const currentParams: Map<string, string> = new Map();

    current.forEach((value, key) => {
      currentParams.set(key, value);
    });

    return currentParams;
  }, [searchParams]);

  const addParam = (key: string, value: any) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    current.set(key, value.toString());
    router.push(`${pathname}?${current.toString()}`);
  };

  const addParams = (params: Map<string, string>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    params.forEach((value, key) => {
      current.set(key, value);
    });

    router.push(`${pathname}?${current.toString()}`);
  };

  const removeParam = (key: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (current.has(key)) {
      current.delete(key);
      router.push(`${pathname}?${current.toString()}`);
    }
  };

  const removeParams = (keys: string[]) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    keys.forEach((key) => {
      if (current.has(key)) {
        current.delete(key);
      }
    });

    router.push(`${pathname}?${current.toString()}`);
  };

  const removeAllParams = () => {
    router.push(pathname);
  };

  return {
    params,
    addParam,
    addParams,
    removeParam,
    removeParams,
    removeAllParams
  };
};

export default useQueryParams;
