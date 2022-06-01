import { useCallback, useEffect, useRef, useState } from 'react';

export function useCreateInfinityScroll<T>(
  data: T[],
  options: {
    pageSize: number;
  } = { pageSize: 10 },
) {
  const loaderReference = useRef<HTMLElement>(null);
  const [loadedData, setLoadedData] = useState<T[]>([]);
  const [numberOfItemsPerPages, setNumberOfItemsPerPages] = useState(
    options.pageSize,
  );

  const addMoreItems = useCallback(() => {
    if (data.length > numberOfItemsPerPages) {
      setLoadedData(data.slice(0, numberOfItemsPerPages));
    } else {
      setLoadedData(data);
      if (loaderReference.current) {
        loaderReference.current.hidden = true;
      }
    }
  }, [data, numberOfItemsPerPages, setLoadedData, loaderReference]);

  const isLastPage = data.length < numberOfItemsPerPages;

  useEffect(() => {
    if (isLastPage) return;

    addMoreItems();
  }, [isLastPage, addMoreItems, setNumberOfItemsPerPages]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setNumberOfItemsPerPages((prev) => prev + options.pageSize);
      }
    });

    if (loaderReference.current) {
      intersectionObserver.observe(loaderReference.current);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, [data, loaderReference, options.pageSize, setNumberOfItemsPerPages]);

  useEffect(() => {
    addMoreItems();
  }, [addMoreItems]);

  useEffect(() => {
    if (loadedData.length < options.pageSize && loaderReference.current) {
      loaderReference.current.hidden = true;
    }
    if (data.length > numberOfItemsPerPages && loaderReference.current) {
      loaderReference.current.hidden = false;
    }
  }, [
    loaderReference,
    loadedData,
    options.pageSize,
    data,
    numberOfItemsPerPages,
  ]);

  const resetNumberOfItemsPerPages = useCallback(() => {
    setNumberOfItemsPerPages(options.pageSize);
  }, [options.pageSize]);

  return {
    loadedData,
    setLoadedData,
    loaderReference,
    resetNumberOfItemsPerPages,
  };
}
