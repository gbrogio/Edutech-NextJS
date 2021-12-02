import styled from 'styled-components';

export const Title = styled.h1`
  z-index: 5;
  display: flex;
  align-items: center;
  font-weight: light;

  opacity: .9;
  font-weight: 500;
  font-size: 2rem;

  ::before {
    content: '';
    background-color: rgb(var(--Blue));

    width: 5px;
    margin-right: .5rem;
    height: 2rem;
  }
`;

export const Paragraph = styled.p`
  z-index: 5;
  margin: 2rem 0;

  > p.title {
    display: flex!important;
    align-items: center;

    p {
      margin-top: 2px .5rem;
    }
    @media screen and (max-width: 937px) {
      display: block!important;

    }
  }
  > p.desc {
    display: block;

    margin: .5rem 0;
  }
`;
export const LinkA = styled.a`
  color: rgb(var(--Blue));
`;
