import { createGlobalStyle } from 'styled-components';

export const Colors = createGlobalStyle`
  :root{
    --BackgroundPages: ${(props) => props.theme.colors.BackgroundPages};
    --BackgroundBtn: ${(props) => props.theme.colors.BackgroundBtn};
    --Text: ${(props) => props.theme.colors.Text};

    --Hover: ${(props) => props.theme.colors.Hover};
    --Shadow: ${(props) => props.theme.colors.Shadow};

    --Green: ${(props) => props.theme.colors.Green}; //     rgb(000, 166, 081)
    --Orange: ${(props) => props.theme.colors.Orange}; // rgb(242, 153, 074)
    --Blue: ${(props) => props.theme.colors.Blue}; //     rgb(000, 120, 193)

    --Gray: ${(props) => props.theme.colors.Gray}; //  rgb(051, 051, 051)
    --Stroke: ${(props) => props.theme.colors.Stroke}; // rgb(130, 130, 130)
    --BackgroundComponents: ${(props) => props.theme.colors.BackgroundComponents}; // rgb(255, 255, 255)
  }
`;
