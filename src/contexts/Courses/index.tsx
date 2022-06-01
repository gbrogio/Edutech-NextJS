import type { ICourses } from '@interfaces/i-courses';

import { useRouter } from 'next/router';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { getDataFromApi } from '@services/fetchers/use-cases/get-data-use-case';
import { FetcherSWR } from '@services/fetchers/fetcher-swr';
import { searchInData } from '@services/search';

import { useSearchWhenUserStopTyping } from '@hooks/useSearchWhenUserStopTyping';
import { useCreateInfinityScroll } from '@hooks/useCreateInfinityScroll';

import type { ICoursesContextValue } from './i-courses-context-value';

export const CoursesContext = createContext<ICoursesContextValue>(
  {} as ICoursesContextValue,
);

interface CoursesProviderProps {
  children: React.ReactNode;
}

const fetcher = (url: string): Promise<ICourses[]> => getDataFromApi(url);
export const CoursesProvider = ({ children }: CoursesProviderProps) => {
  // Current query
  const router = useRouter();
  const routerYearCoursesCode = useMemo(() => {
    if (router.query['school-year'] === 'all') return '';
    if (router.query['school-year'] && router.query['school-year'] !== 'all') {
      return router.query['school-year'];
    }
    return '';
  }, [router.query]);

  // Fetch data from API
  const {
    data: dataCourses,
    isLoading: dataCoursesLoading,
    isError: dataCoursesError,
  } = FetcherSWR(`/api/courses/${routerYearCoursesCode}`, fetcher);
  const coursesName = useMemo(
    () => dataCourses?.map((course) => course.name) || [],
    [dataCourses],
  );

  // Hooks
  const {
    filteredData: filteredDataCourses,
    searchError: filteredDataCoursesError,
    searching: filteredDataCoursesLoading,
    setSearchListener: setSearchListenerCourses,
    setFilteredData: setFilteredDataCourses,
  } = useSearchWhenUserStopTyping(dataCourses);
  const {
    loaderReference,
    resetNumberOfItemsPerPages,
    loadedData: loadedDataCourses,
    setLoadedData: setLoadedDataCourses,
  } = useCreateInfinityScroll(filteredDataCourses);

  // States
  const [datasCoursesError, setDatasCoursesError] = useState(false);
  const [datasCoursesLoading, setDatasCoursesLoading] = useState(false);
  const [autoCompleteInputError, setAutoCompleteInputError] = useState(false);

  // utils Callbacks
  const resetLoadedDataCourses = useCallback(() => {
    setLoadedDataCourses([]);
  }, [setLoadedDataCourses]);
  const handleSearch = useCallback(
    async (query: string | null) => {
      setSearchListenerCourses(null);
      if (query && query !== '') {
        setAutoCompleteInputError(false);
        setFilteredDataCourses(await searchInData(dataCourses || [], query));
      } else {
        resetLoadedDataCourses();
      }
    },
    [
      setSearchListenerCourses,
      setAutoCompleteInputError,
      setFilteredDataCourses,
      resetLoadedDataCourses,
      dataCourses,
    ],
  );

  // join values Effects
  useEffect(() => {
    if (dataCoursesLoading || filteredDataCoursesLoading) {
      return setDatasCoursesLoading(true);
    }
    return setDatasCoursesLoading(false);
  }, [dataCoursesLoading, filteredDataCoursesLoading]);
  useEffect(() => {
    if (dataCoursesError || filteredDataCoursesError.isInvalid) {
      return setDatasCoursesError(true);
    }
    return setDatasCoursesError(false);
  }, [dataCoursesError, filteredDataCoursesError]);

  // utils Effects
  useEffect(() => setSearchListenerCourses(''), [setSearchListenerCourses]);
  useEffect(() => {
    if (router.pathname !== '/courses') setLoadedDataCourses([]);
  }, [router.pathname, setLoadedDataCourses]);
  useEffect(
    () => resetNumberOfItemsPerPages(),
    [dataCourses, filteredDataCourses, resetNumberOfItemsPerPages],
  );
  useEffect(() => {
    if (loadedDataCourses.length === 0 && loaderReference.current) {
      loaderReference.current.hidden = true;
    }
  }, [loadedDataCourses, loaderReference, router.pathname]);

  useEffect(
    () =>
      filteredDataCoursesError.isInvalid
        ? setAutoCompleteInputError(true)
        : setAutoCompleteInputError(false),
    [filteredDataCoursesError.isInvalid],
  );

  // Context Values in Memo
  const contextValue = useMemo(
    () => ({
      searchWhenUserStopTypingArgs: {
        setSearchListenerCourses,
        filteredDataCoursesError,
      },
      createInfinityScrollArgs: {
        resetLoadedDataCourses,
        loadedDataCourses,
        loaderReference,
      },
      formArgs: {
        setAutoCompleteInputError,
        autoCompleteInputError,
      },
      coursesName,
      handleSearch,
      dataCoursesError,
      datasCoursesError,
      datasCoursesLoading,
    }),
    [
      coursesName,
      handleSearch,
      loaderReference,
      dataCoursesError,
      datasCoursesError,
      loadedDataCourses,
      datasCoursesLoading,
      autoCompleteInputError,
      resetLoadedDataCourses,
      filteredDataCoursesError,
      setSearchListenerCourses,
      setAutoCompleteInputError,
    ],
  );
  return (
    <CoursesContext.Provider value={contextValue}>
      {children}
    </CoursesContext.Provider>
  );
};
