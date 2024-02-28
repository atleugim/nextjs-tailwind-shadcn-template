import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const useQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentSearchParams = useMemo(() => {
    return new URLSearchParams(Array.from(searchParams.entries()));
  }, [searchParams]);

  const params = useMemo(() => {
    const currentParams: Record<string, string> = {};

    currentSearchParams.forEach((value, key) => {
      currentParams[key] = value;
    });

    return currentParams;
  }, [currentSearchParams]);

  const addParam = (key: string, value: any) => {
    currentSearchParams.set(key, value.toString());
    router.push(`${pathname}?${currentSearchParams.toString()}`);
  };

  const addParams = (newParams: Record<string, string>) => {
    Object.entries(newParams).forEach(([key, value]) => {
      currentSearchParams.set(key, value);
    });

    router.push(`${pathname}?${currentSearchParams.toString()}`);
  };

  const removeParam = (key: string) => {
    if (currentSearchParams.has(key)) {
      currentSearchParams.delete(key);
      router.push(`${pathname}?${currentSearchParams.toString()}`);
    }
  };

  const removeParams = (keys: string[]) => {
    keys.forEach((key) => {
      if (currentSearchParams.has(key)) {
        currentSearchParams.delete(key);
      }
    });

    router.push(`${pathname}?${currentSearchParams.toString()}`);
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
