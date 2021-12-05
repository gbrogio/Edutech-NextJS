import styled from 'styled-components';

export const Title = styled.h1`
  z-index: 5;
  display: flex;
  align-items: center;
  font-weight: light;

  opacity: .9;
  font-weight: 500;
  font-size: 2rem;

  &.titleLight {
    font-weight: 400;
  }

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
  margin: 1rem 0;

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

export const Bash = styled.pre`
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  margin: 0 .5rem 1rem .5rem;
  background-color: rgb(var(--BackgroundComponents));
  border-radius: 10px;
  filter: drop-shadow(0px 4px 5px var(--Shadow));
`;
