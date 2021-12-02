import styled from 'styled-components';

export const Container = styled.a`
  padding: 1.5rem;
  position: relative;
  cursor: pointer;
  opacity: .7;
  transition: .1s ease-in-out;

  :hover{
    opacity: .9;
    background-color: var(--Hover);
  }

  &#noUnder{
    ::after{
      display: none;
    }
  }
  &[data-lid="courses"] {
    ::after {
      transform: translate(-85.5%, -1px)!important;
    }
  }
  &.activeLink {
    opacity: .8;
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      background: rgb(var(--Green));
      border-radius: 3px 3px 0px 0px;
      width: 100%;
      height: 4px;
      transform: translate(calc(-50% - 1.5rem + 4px), -1px);
    }
    &.linkLeft {
      ::after {
        display: none;
      }
    }
    :hover{
      opacity: .9;
      background: rgb(var(--Green), .2);
    }
  }
`;
