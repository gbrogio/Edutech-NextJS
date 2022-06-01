import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useCoursesContext } from '@contexts/Courses/useLayoutContext';

import { AutoCompleteInput } from './AutoCompleteInput';
import { Select } from './Select';

import { FormCSS } from './styles';

export const Form = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const {
    formArgs,
    coursesName,
    handleSearch,
    createInfinityScrollArgs,
    searchWhenUserStopTypingArgs,
  } = useCoursesContext();

  const [schoolYear, setSchoolYear] = useState('all');

  useEffect(() => {
    if (router.query['school-year']) {
      setSchoolYear(router.query['school-year'] as string);
    }
  }, [router.query]);

  return (
    <FormCSS>
      <div className="wrapper">
        <Select
          label={t('form.select.label')}
          value={schoolYear}
          options={[
            {
              label: t('form.select.options.all'),
              value: 'all',
            },
            {
              label: t('form.select.options.first-year-hs'),
              value: 'first-year-hs',
            },
            {
              label: t('form.select.options.second-year-hs'),
              value: 'second-year-hs',
            },
            {
              label: t('form.select.options.third-year-hs'),
              value: 'third-year-hs',
            },
          ]}
          onChange={(event) => {
            setSchoolYear(event.target.value);
            router.push(`/courses?school-year=${event.target.value}`);
          }}
        />
        <AutoCompleteInput
          id="search-courses"
          label={t('form.auto-complete-input.label')}
          placeholder={t('form.auto-complete-input.placeholder')}
          dataItemsName={coursesName}
          error={formArgs.autoCompleteInputError}
          onInput={(event) => {
            const { value } = event.target;
            searchWhenUserStopTypingArgs.setSearchListenerCourses(value);
          }}
          onChange={(event) => {
            const { textContent } = event.currentTarget;
            handleSearch(textContent!);
          }}
          onKeyUp={(event) => {
            const { key } = event;
            if (key === 'Enter') {
              const { value } = event.target as HTMLInputElement;
              handleSearch(value);
            }
          }}
          onBlur={(event) => {
            const { value } = event.target;
            if (!value || value.length === 0) {
              formArgs.setAutoCompleteInputError(false);
              searchWhenUserStopTypingArgs.setSearchListenerCourses(null);
              createInfinityScrollArgs.resetLoadedDataCourses();
            }
          }}
        />
      </div>
    </FormCSS>
  );
};
