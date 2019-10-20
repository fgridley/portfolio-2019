import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    @import url('https://use.typekit.net/ksx8bco.css');

    body {
        font-family: 'basic sans', sans-serif;
        margin: 0;
        font-size: 16px;
    }

    bold {
        font-weight: 600;
    }

    html {
        box-sizing: border-box !important;
    }

    a {
        color: #3F8BFC;
        text-decoration: none;
    }
`