import styled from 'styled-components';

export const Container = styled.header`
  z-index: 900;
  position: fixed;
  background-color: rgb(var(--BackgroundComponents));

  top: 0;
  box-shadow: 0px 0px 20px 5px var(--Shadow);
  height: 65px;
  width: 100vw;

  > div.group {
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 100%;
    padding: 0 calc(1rem + 2px) 0 0;
    nav.linkContainer {
      position: relative;
      right: -28.17px;
    }
  }

  div.bottomHeader {
    display: flex;
    justify-content: center;

    transform: translateY(-4px);
  }

  section.navLeftContainer {
    input#menuBtn {
      display: none;

      :checked ~ section.menuLeft {
        opacity: 1;
        transform: translateX(0)!important;
      }
    }
    section.menuLeft {
      position: fixed;
      flex-direction: column;
      overflow: scroll;
      display: flex;
      overflow-x: hidden;
      overflow-y: scroll;
      background: rgb(var(--BackgroundComponents), .9);

      z-index: 900;
      transition: opacity .5s 0s, transform 1s 0s;
      top: 0rem;
      left: 0rem;
      width: 20rem;
      height: 100vh;
      opacity: 0;

      transform: translateX(-100%)!important;
      box-shadow: 0px 15px 20px 3px var(--Shadow);
      border-radius: 0px 0px 5px 0px;

      span.closeNav {
        z-index: 900;
        position: absolute;
        right: 1rem;
        top: 0;
        cursor: pointer;
        @media screen and (max-width: 320px) {
          left: 70vw;
        }
      }

      .Line {
        position: absolute;
        background: rgb(var(--Stroke),.7);

        width: 100%;
        height: 1.5px;
        top: 6.5rem;
      }

      div {
        display: flex;
        flex-direction: column;

        margin: 1rem 0;

        p {
          cursor: default;

          margin: .5rem 0 1rem 1rem;
          opacity: .8;
        }
      }
    }

    div.overlay {
      position: fixed;

      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }

    > div {
      display: flex;

      transform: translateX(-.5rem);

      section.Edutech {
        white-space: nowrap;
        text-overflow: ellipsis;

        margin-left: 1rem;
        margin-top: .5rem;
        line-height: 1.2rem;
      }
    }
  }

  div.userZone{
    position: relative;
    @media screen and (max-width: 500px) {
      .userInfo {
        width: 8rem;
        @media screen and (max-width: 430px) {
          width: 6rem;
        }
      }
    }
  }

  @media screen and (max-width: 940px) {
    height: 130px;

    > div.group {
      align-items: start;

      padding: .6rem calc(1rem + 2px) 0 .6rem;
    }

    > div.bottomHeader {
      margin-top: -3.9rem;
    }
  }
  @media screen and (max-width: 450px) {
    div.signZone {
      margin-left: 1rem;
    }
    div.group {
      display: flex;
      justify-content: flex-start;
    }

    nav.linkContainer, div.group {
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
    }
  }

`;
