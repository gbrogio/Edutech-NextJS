import { SubLineCSS } from '@stylesComponents/SeparatorsCSS';
import {
  DescriptionCSS,
  SmallTextCSS,
  SubTitleCSS
} from '@stylesComponents/TextCSS';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { ContainerCSS } from './styles';

export interface EdutechStudiedPathProps {
  title: string;
  schoolYear: string;
  children: string;
  hasLine?: boolean;
}

export const EdutechStudiedPath = ({
  title,
  schoolYear,
  children,
  hasLine = true
}: EdutechStudiedPathProps) => {
  const { t } = useTranslation();

  return (
    <ContainerCSS className="edutech-studied-path">
      <SubTitleCSS>
        {title}
        <SmallTextCSS>{schoolYear}</SmallTextCSS>
      </SubTitleCSS>
      <DescriptionCSS>{children}</DescriptionCSS>
      <Link
        href="https://www.educacao.pr.gov.br/programacao"
        target="_blank"
      >
        <a>
          {t('home.read-more-text')}
        </a>
      </Link>
      {hasLine && <SubLineCSS />}
    </ContainerCSS>
  );
};
