import styled from 'styled-components';
import { propsBtn } from './ButtonCp';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  flex-direction: column;

  .searchBar {
    width: 100%;
    display: flex;
    align-items: center;
    transform: translateX(12.5px);
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 940px) {
    flex-direction: row;
  }

`;
export const Input = styled.input`
  width: 50vw;
  background-color: rgb(var(--BackgroundComponents));
  border: 1px solid rgb(var(--Stroke));
  box-shadow: 2px 4px 4px var(--Shadow);
  color: var(--Text);

  padding: 1rem;
  min-width: 260px;
  border-radius: 10px;

  @media screen and (max-width: 940px) {
    width: 80vw;
  }
`;
export const Select = styled.select`
  background-color: rgb(var(--BackgroundComponents));
  border: 1px solid rgb(var(--Stroke));
  box-shadow: 2px 4px 4px var(--Shadow);
  color: var(--Text);
  padding: 1rem;
  min-width: 260px;
  border-radius: 10px;
  margin-bottom: 3rem;
`;
