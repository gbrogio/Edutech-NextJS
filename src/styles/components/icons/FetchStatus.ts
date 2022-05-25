import { Error as ErrorBoxIcons } from '@styled-icons/boxicons-regular/Error';
import { Smile } from '@styled-icons/boxicons-regular/Smile';
import { Timer } from '@styled-icons/material-outlined/Timer';

import styled, { css } from 'styled-components';

const sharedStyles = css`
  width: 10rem;
  height: 10rem;
  color: inherit;
`;

export const ErrorIcon = styled(ErrorBoxIcons)`
  ${sharedStyles}
`;
export const LoadingIcon = styled(Timer)`
  ${sharedStyles}
`;
export const SuccessIcon = styled(Smile)`
  ${sharedStyles}
`;
