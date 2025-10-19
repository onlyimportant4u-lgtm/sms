import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface UseFetchOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export function useFetch<T>(
  fetchFunction: () => Promise<T>,
  deps: any[] = [],
  options?: UseFetchOptions
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { toast } = useToast();

  const refetch = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchFunction();
      setData(result);
      options?.onSuccess?.(result);
    } catch (err) {
      const error = err as Error;
      setError(error);
      options?.onError?.(error);
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, deps);

  return { data, loading, error, refetch };
}
