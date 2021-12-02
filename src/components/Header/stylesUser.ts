import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  cursor: pointer;

  .userInfo {
    width: 11.6rem;
    height: 100%;
    margin-top: .5rem;
    white-space: nowrap;
    text-align: right;

    > p.userName {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    > p.userDomain {
      opacity: .7;
    }
  }

  .userPhoto {
    display: inherit;
    align-items: center;
    
    > img {
      width: 50px;
      height: 50px;
      margin-left: 1rem;
      border-radius: 50%;
    }
  }
`;
