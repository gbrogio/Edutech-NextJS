import styled from 'styled-components';
import { ArrowIosDownward } from '@styled-icons/evaicons-solid/ArrowIosDownward';
import { Menu2Outline } from '@styled-icons/evaicons-outline/Menu2Outline';
import { BookInformation } from '@styled-icons/fluentui-system-filled/BookInformation';
import { Trash } from '@styled-icons/boxicons-regular/Trash';
import { LogOut } from '@styled-icons/ionicons-outline/LogOut';
import { Search } from '@styled-icons/material-outlined/Search';
import { Close } from '@styled-icons/evaicons-solid/Close';
import { Accessibility } from '@styled-icons/ionicons-solid/Accessibility';
import { Contrast } from '@styled-icons/foundation/Contrast';
import { ListOutline } from '@styled-icons/evaicons-outline/ListOutline';
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
export const SearchIcon = styled(Search)`
  min-width: 25px;
  max-width: 25px;
  transform: translateX(calc(-25px - 1rem));
  cursor: pointer;
  :hover {
    fill: rgb(var(--Stroke), 1);
  }
`;
export const CloseIcon = styled(Close)`
  width: 45px;
  height: 45px;
  padding: .5rem;
  border-radius: 50%;
  :hover {
    background: rgb(var(--Stroke), .1);
  }
`;
export const InvalidIcon = styled.span`
  display: flex;
  font-size: 4rem;
  justify-content: center;
  align-items: center;
  color: rgb(var(--Orange));
  border: 2px dashed rgb(var(--Orange));
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  ::after {
    content: '!'
  }
`;
export const AccessibilityIcon = styled(Accessibility)`
  fill: var(--BackgroundPages);
  width: 30px;
  height: 30px;
`;
export const ContrastIcon = styled(Contrast)`
  width: 25px;
  height: 25px;
`;
export const ListIcon = styled(ListOutline)`
  width: 30px;
  height: 30px;
  margin-top: -9px;
  margin-right: .5rem;
`;
