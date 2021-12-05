import styled from 'styled-components';

export const Dialog = styled.div`
  z-index: 900;
  width: auto;
  height: auto;
  background: rgba(var(--BackgroundComponents) 0.99);
  box-shadow: 0px 15px 20px 3px var(--Shadow);
  border-radius: 10px;
  position: fixed;
  top: 4rem;

  @media screen and (max-width: 400px) {
    &#ModalUser {
      background: rgba(var(--BackgroundComponents));
      white-space: nowrap;
      transform: translate(-50%, 15%);
      @media screen and (max-width: 300px) {
        transform: translate(-70%, 15%);
        @media screen and (max-width: 260px) {
          transform: translate(-80%, 15%);
          @media screen and (max-width: 240px) {
            transform: translate(-90%, 15%);

          }
        }
      }
    }
  }
`;
