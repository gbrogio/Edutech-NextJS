import styled from 'styled-components';

export const BottomContentCSS = styled.div.attrs({
  className: 'bottom-content content',
})`
  display: none;

  > .middle-content {
    flex: 1;
    justify-content: center;
  }
`;
