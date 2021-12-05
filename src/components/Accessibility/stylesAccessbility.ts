import styled from 'styled-components';

export const Container = styled.section`
  position: fixed;
  cursor: pointer;
  display: flex;
  align-items: center;

  z-index: 900;
  right: 0;
  top: 50%;
  width: 90px;
  height: 90px;
  > div {
    display: flex;
    align-items: center;
    background-color: rgb(var(--Blue));

    padding: .2rem;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    transform: translateX(calc(30% + 40px));
    transition: .2s ease-in-out;
    #ModalAccess {
      transform: translateY(-40%) translateX(-90%);
    }
  }
  :hover {
    #ModalAccess {
      transform: translateY(-40%) translateX(-50%);
    }
    > div {
      transform: translateX(calc(-30% + 40px));
      justify-content: center;
    }
  }
`;
