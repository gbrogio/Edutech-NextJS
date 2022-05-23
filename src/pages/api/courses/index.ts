import type { ICourses, ICoursesPtBR } from '@interfaces/i-courses';
import { getDataFromApi } from '@services/fetchers/use-cases/get-data-use-case';
import type { NextApiResponse } from 'next';

export default async function handle(_: unknown, res: NextApiResponse) {
  try {
    const courses = await getDataFromApi<ICoursesPtBR[]>(
      process.env.ALURA_API_URL!,
    ).catch(() => Promise.reject());

    const coursesKeyChanged: ICourses[] = [] as ICourses[];
    for (let i = 0; i < courses.length; i++) {
      const coursesKeyChangedItem = {
        name: courses[i].nome,
        slug: courses[i].slug,
        estimatedTime: courses[i].tempo_estimado,
      };
      coursesKeyChanged.push(coursesKeyChangedItem);
    }

    res.status(200).json(coursesKeyChanged);
  } catch {
    res
      .status(500)
      .send(
        `Ops... Api dont's work, or ocurred an error in fetch for ${process.env.ALURA_API_URL} :(`,
      );
  }
}
