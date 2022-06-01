import { ICourses } from '@interfaces/i-courses';

export interface ICoursesContextValue {
  searchWhenUserStopTypingArgs: {
    setSearchListenerCourses: (searchListener: string | null) => void;
    filteredDataCoursesError: {
      isInvalid: boolean;
      type: string;
      invalidCharacters: string[];
    };
  };
  createInfinityScrollArgs: {
    resetLoadedDataCourses: () => void;
    loadedDataCourses: ICourses[];
    loaderReference: React.RefObject<HTMLElement>;
  };
  formArgs: {
    setAutoCompleteInputError: (error: boolean) => void;
    autoCompleteInputError: boolean;
  };
  handleSearch: (searchListener: string) => void;
  coursesName: string[];
  datasCoursesError: boolean;
  datasCoursesLoading: boolean;
  dataCoursesError: boolean;
}
