import styled from 'styled-components';

export const Container = styled.section`
  z-index: 900;
  background-color: rgb(var(--Blue));
  position: fixed;
  right: 0;
  padding: .2rem;
  top: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transform: translateX(30%);
  transition: .2s ease-in-out;
  #ModalAccess {
    transform: translate(-120%, -100%);
  }
  :hover {
    #ModalAccess {
      transform: translate(-80%, -100%);
    }
    transform: translateX(-30%);
    justify-content: center;
  }
`;
