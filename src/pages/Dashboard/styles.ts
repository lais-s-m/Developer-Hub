import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 40vw;
    min-width: 320px;
    max-width: 600px;

    margin: 20px 0px 10px 0px;

    hr {
        width: 100vw;
        border: 0.8px solid var(--grey-3);
    }

    h2 {
        color: var(--grey-0);
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
    
        margin: 25px 0px 15px 20px;
    }

    div {
        display: flex;
        flex-direction: column;

        width: 100%;

        >p {
            color: var(--grey-1);
            font-weight: 400;
            font-size: 12px;
            line-height: 22px;

            margin: 0px 0px 28px 20px;
        }

    }

    p {
        color: var(--grey-1);
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        margin-left: 20px;
    }

`