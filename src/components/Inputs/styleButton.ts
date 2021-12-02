import styled from 'styled-components';
import { propsBtn } from './ButtonCp';

export const Container = styled.button`
  display: flex;
  align-items: center;

  background: ${(props: propsBtn) => props.background === 'null' ? 'transparent' : props.background ? props.background : 'var(--BackgroundBtn)'};
  box-shadow: 0px 0px 4px var(--Shadow);
  border-radius: ${(props: propsBtn) => props.typeProps?.borderRadius ? props.typeProps.borderRadius : '10px'};
  max-height: 40px;
  font-size: 1rem;
  opacity: .8;
  color: rgba(var(--Gray), .8);
  cursor: pointer;
  padding: 1rem 1rem;
  border-top: ${(props: propsBtn) => props.typeProps?.outline === 'Top' && '1px solid rgba(var(--Stroke), .25)'};
  border-bottom: ${(props: propsBtn) => props.typeProps?.outline === 'Bottom' && '1px solid rgba(var(--Stroke), .25)'};
  border-left: ${(props: propsBtn) => props.typeProps?.outline === 'Left' && '1px solid rgba(var(--Stroke), .25)'};
  border-right: ${(props: propsBtn) => props.typeProps?.outline === 'Right' && '1px solid rgba(var(--Stroke), .25)'};
  outline: none;
  border: 1px solid rgba(var(--Stroke), .25);
  :active {
    box-shadow: 0px 0px 0px var(--Shadow);
    transform: scale(.99)
  }

  > span {
    width: 1px;
    height: 1.5rem;
    background-color: rgba(var(--Stroke), .25);
    margin: .5rem;
  }

  :hover {
    opacity: 1;
  }
`;
