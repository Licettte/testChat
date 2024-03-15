import {BACKGROUND_COLOR, DARK_L_COLOR, DARK_M_COLOR} from "../../../styles/colors";
import styled from "styled-components";

import {dekstop} from "../../../styles/variables";
import {FlexStyle} from "../../../styles/Flex";
import {FONT_REGULAR_20} from "../../../styles/fonts";
import {tablet} from "../../../styles/variables"

export const HeaderFlex = styled(FlexStyle)`   
    margin: auto;
    max-width: ${dekstop};
    color: ${BACKGROUND_COLOR};
    ${FONT_REGULAR_20};
    padding: 15px;
`;

export const Button = styled.button`
    @media (max-width: ${tablet}) {
        //max-width: 560px;
        margin: 0 20px;
    }
    color: ${BACKGROUND_COLOR};
  
`;
