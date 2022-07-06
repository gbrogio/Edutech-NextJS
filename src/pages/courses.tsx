import type { GetServerSideProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

import {
  LoadingStatus,
  ErrorStatus,
  ReadyStatus,
} from '@components/FetchStatus';
import { Form } from '@components/Form';

import { setCurrentLocale } from '@services/apis/i18n/set-current-locale';

import { useCoursesContext } from '@contexts/Courses/useLayoutContext';
import { LoadingTextCSS } from '@stylesComponents/TextCSS';

const CourseCard = dynamic(() => import('@components/CourseCard'));

const Courses = () => {
  const { t } = useTranslation();
  const {
    dataCoursesError,
    datasCoursesError,
    datasCoursesLoading,
    createInfinityScrollArgs: { loadedDataCourses, loaderReference },
    searchWhenUserStopTypingArgs: { filteredDataCoursesError },
  } = useCoursesContext();

  return (
    <>
      <Form />
      {filteredDataCoursesError.isInvalid && loadedDataCourses.length === 0 ? (
        <ErrorStatus>{t('fetch-status.no-result')}</ErrorStatus>
      ) : (
        dataCoursesError &&
        loadedDataCourses.length === 0 && (
          <ErrorStatus>{t('fetch-status.error')}</ErrorStatus>
        )
      )}
      {datasCoursesLoading &&
        !datasCoursesError &&
        loadedDataCourses.length === 0 && (
          <LoadingStatus>{t('fetch-status.loading')}</LoadingStatus>
        )}

      {!datasCoursesLoading &&
      !datasCoursesError &&
      loadedDataCourses.length === 0 ? (
        <ReadyStatus>{t('fetch-status.ready')}</ReadyStatus>
      ) : (
        <section className="courses-container">
          <div className="courses-container-wrapper">
            <ul>
              {loadedDataCourses.map((course) => {
                const slugReplaced = course.slug
                  .replace('<span>', '')
                  .replace('</span>', '');

                return (
                  <li key={slugReplaced}>
                    <CourseCard {...course} />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
      <LoadingTextCSS ref={loaderReference}>
        {t('infinity-scroll-loader-text')}
      </LoadingTextCSS>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(setCurrentLocale(ctx.locale!), [
        'common',
      ])),
    },
  };
};
export default Courses;
