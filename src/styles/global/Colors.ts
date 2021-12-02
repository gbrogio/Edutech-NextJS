import { createGlobalStyle } from 'styled-components';

export const Colors = createGlobalStyle`
  :root{
    --BackgroundPages: #F7F7F7;
    --BackgroundBtn: #F2F2F2;
    --Text: #212121;

    --Hover: rgba(0, 0, 0, 0.04);
    --Shadow: rgb(0, 0, 0, .2);

    --Green: 0, 166, 81; //     rgb(000, 166, 081)
    --Primary: 155, 81, 224; // rgb(155, 081, 224)
    --Pink: 187, 107, 217; //   rgb(187, 107, 217)
    --Orange: 242, 153, 074; // rgb(242, 153, 074)
    --Blue: 0, 120, 193; //     rgb(000, 120, 193)

    --Gray: 051, 051, 051; //  rgb(051, 051, 051)
    --Stroke: 130, 130, 130; // rgb(130, 130, 130)
    --BackgroundComponents: 255, 255, 255; // rgb(255, 255, 255)
  }
`;
