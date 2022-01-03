import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

import { Theme } from "./Theme";
import { transition } from "../../constants/styleVariables";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    ${reset}
    
    html{
        font-size: 10px;
    }
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    #root{
        margin:0 auto;
    }

    body{
        transition: ${transition};
        background-color: ${(props) => props.theme.main};
        color: ${(props) => props.theme.text}
    }
 `;
