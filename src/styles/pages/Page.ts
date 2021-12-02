import styled from 'styled-components';

export const Main = styled.main`
  overflow: hidden;
  z-index: 5;
  padding: 0 10rem 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Home - seções */
  .aboutEdutech {
    display: flex;
    align-items: center;


    img {
      margin-left: 10%
    }
    margin-top: 130px;

    @media screen and (max-width: 1060px) {
      flex-direction: column;
      text-align: center;

      img {
        margin-left: 0;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    @media screen and (max-width: 940px) {
      margin-top: calc(130px + 2rem);
    }
  }
  .trails {
    @media screen and (max-width: 1020px) {
      @media screen and (min-width: 366px) {
        width: calc(100vw - 2rem);
      }
    }
  }
  .alura {
    @media screen and (max-width: 1060px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;

      @media screen and (max-width: 1020px) {
        @media screen and (min-width: 366px) {
          width: calc(100vw - 2rem);
        }
      }
    }
  }

  /* Courses - seções */
  .courses {
    margin-top: 130px;

    > div {
      /* display: flex; */
    }

    @media screen and (max-width: 940px) {
      margin-top: calc(130px + 2rem);
    }
  }

  .line {
    margin: 2rem 0 4rem 0;
    display: flex;
    justify-content: center;
    background-color: rgb(var(--Stroke));

    width: calc(100vw - 50%);
    opacity: .7;
    height: 1px;
  }

  @media screen and (max-width: 365px) {
    padding: 0 .5rem 0 .5rem;

    .aboutEdutech {
      img {
        width: 90%;
      }
    }
    .line {
      width: calc(99%);
    }
  }
`;
