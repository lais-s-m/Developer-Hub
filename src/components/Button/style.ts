import styled, { css } from 'styled-components';

interface ButtonProps {
    size?: string;
    bgColor: string;
}

export const Button = styled.button<ButtonProps>`
    display: flex;

    justify-content: center;
    align-items: center;

    color: var(--grey-0);

    border-radius: 4px;

    height: 40px;

    padding: 10px;

    margin: 8px 0px 8px 0px;

    ${(props)=>{
        switch(props.size){
            case 'sm':
                return css`
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 26px;

                    width: 30%;
                    
                `
            default:
                return css`
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 21px;

                    width: 100%;
                `
        }
    }}

    ${(props)=>{
        switch(props.bgColor){
            case 'pink':
                return css`
                    background: var(--pink);
                    border: 1.3px solid var(--pink);

                    &:hover{
                        background: var(--pink-focus);
                        border: 1.3px solid var(--pink-focus);
                    }
                `
            case 'pink-negative':
                return css`
                    background: var(--pink-negative);
                    border: 1.3px solid var(--pink-negative);
                    cursor: not-allowed;
                `
            case 'grey':
                return css`
                    background: var(--grey-1);
                    border: 1.3px solid var(--grey-1);

                    &:hover{
                        background: var(--grey-2);
                        border: 1.3px solid var(--grey-2);
                    }
                `
            case 'black':
                return css`
                    background: var(--grey-3);
                    border: 1.3px solid var(--grey-3);

                    &:hover{
                        background: var(--grey-2);
                        border: 1.3px solid var(--grey-2);
                    }
                `
        }
    }}




`