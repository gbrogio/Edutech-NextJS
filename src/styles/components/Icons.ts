import styled from 'styled-components';
import { ArrowIosDownward } from '@styled-icons/evaicons-solid/ArrowIosDownward';
import { Menu2Outline } from '@styled-icons/evaicons-outline/Menu2Outline';
import { BookInformation } from '@styled-icons/fluentui-system-filled/BookInformation';
import { Trash } from '@styled-icons/boxicons-regular/Trash'
import { LogOut } from '@styled-icons/ionicons-outline/LogOut'
import Google from '../../assets/svg/google.svg';

export const ArrowDown = styled(ArrowIosDownward)`
  width: 25px;
  height: 25px;
`;
export const Hamburger = styled(Menu2Outline)`
  width: 45px;
  height: 45px;
  padding: .5rem;
  border-radius: 50%;
  :hover {
    background: rgb(var(--Stroke), .1);
  }
`;
export const GoogleIcon = styled(Google)`
`;
export const BookInfo = styled(BookInformation)`
  width: 25px;
  height: 25px;
`;
export const TrashIcon = styled(Trash)`
  width: 25px;
  height: 25px;
`;
export const Out = styled(LogOut)`
width: 25px;
height: 25px;
`;
