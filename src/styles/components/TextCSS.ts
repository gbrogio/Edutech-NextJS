import styled from 'styled-components';

export const TitleCSS = styled.h1`
  display: flex;
  align-items: center;
  position: relative;

  opacity: 0.9;
  font-size: 2rem;
  font-weight: 700;
  margin-left: 1rem;

  ::before {
    content: '';
    position: absolute;

    width: 5px;
    height: 100%;
    left: 0;
    transform: translateX(-1rem);

    background-color: rgb(var(--color-secondary));
  }
`;

export const SubTitleCSS = styled.h2`
  display: flex;
  align-items: center;

  opacity: 1;
  font-size: 1.5rem;
  font-weight: 800;
  margin-left: 0;
`;

export const DescriptionCSS = styled.p`
  margin: 1rem 0;
  margin-bottom: 0;
`;

export const SmallTextCSS = styled.p`
  display: contents;

  margin-top: 2px;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const LoadingTextCSS = styled.span`
  text-align: center;
  
  margin: 2rem;
  opacity: 0.7;
`;
