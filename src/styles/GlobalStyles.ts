import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

        font-family: 'Inter', sans-serif;
        font-style: normal;
    }

    :root {
        --pink: #FF577F;
        --pink-focus: #FF427F;
        --pink-negative: #59323F;

        --grey-4: #121214;
        --grey-3:#212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;

        --success: #3FE864;
        --negative: #E83F5B;
    }

    body {
        display: flex;

        justify-content: center;
        align-items: center;

        margin: 60px 0px 0px 0px;

        background-color: #000000;
        width: 100vw;
        
        overflow-y: auto;

    }

    button {
        cursor: pointer;
        transition: 0.5s;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    h1 {
        display: flex;

        justify-content: center;
        align-items: center;

        color: var(--pink);
        font-size: 2rem;

        margin: 25px 0px 10px 0px;
    }
`;
