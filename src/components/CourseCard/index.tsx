import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { usePalette } from 'react-palette';

import { useTheme } from 'styled-components';

import { ContainerCSS } from './styles';

interface props {
  name: string;
  estimatedTime: string;
  slug: string;
}

const CourseCard = ({ estimatedTime, name, slug }: props) => {
  const { t } = useTranslation();
  const { name: currentTheme } = useTheme();
  const color =
    currentTheme === 'contrast'
      ? 'rgb(var(--color-secondary))'
      : 'var(--color-text)';

  const imageUrl = `https://www.alura.com.br/assets/api/cursos/${slug}.svg`;

  const {
    data: { lightVibrant },
    loading,
    error,
  } = usePalette(imageUrl);

  return (
    <ContainerCSS
      backgroundColor={!error || !loading ? lightVibrant : undefined}
      isLoading={loading}
      title={name}
      role="link"
      tabIndex={0}
      onClick={() => {
        window.open(`https://www.alura.com.br/curso-online-${slug}`, '_blank');
      }}
    >
      <div className="course-text-wrapper">
        <p>
          <strong style={{ color }}>{t('course-card.name')}:</strong>
          <span lang="pt-br">{name}</span>
        </p>
        <p>
          <strong style={{ color }}>{t('course-card.estimated-time')}:</strong>
          <span lang="pt-br">{estimatedTime}h</span>
        </p>
      </div>
      {!loading && (
        <div className="course-image-wrapper">
          <Image
            src={imageUrl}
            alt=""
            width={16 * 4}
            height={16 * 4}
            className="course-image"
          />
        </div>
      )}
    </ContainerCSS>
  );
};

export default CourseCard;
