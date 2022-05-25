import type { NextApiResponse } from 'next';
import type { ICoursesPtBR } from '@interfaces/i-courses';

import { getDataFromApi } from '@services/fetchers/use-cases/get-data-use-case';

import coursesBySchoolYear from '../../../assets/json/courses-by-school-year.json';

export default async function handle(_: unknown, res: NextApiResponse) {
  try {
    const courses = await getDataFromApi<ICoursesPtBR[]>(
      process.env.HOST_API_URL!,
    ).catch(() => Promise.reject());

    const coursesFiltered = courses.filter((course) =>
      coursesBySchoolYear['second-year-hs'].includes(course.slug),
    );

    res.status(200).json(coursesFiltered);
  } catch (error) {
    res
      .status(500)
      .send(
        `Ops... Api dont's work, or ocurred an error in fetch :(. \n ${error}`,
      );
  }
}
