import styled, { css } from 'styled-components';

interface InputProps {
  borderColor?: string;
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-weight: 400;
    font-size: 12px;
    line-height: 0px;
    color: var(--grey-0);

    margin-top: 20px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;

    background-color: var(--grey-2);

    border-radius: 4px;

    padding: 10px;
    height: 40px;

    margin: 13px 0px 5px 0px;

    transition: 0.5s;

    &:hover {
      transition: 0.5s;
    }

    ${(props) => {
      switch (props.borderColor) {
        case 'success':
          return css`
            border: 1.2px solid var(--success);
          `;
        case 'negative':
          return css`
            border: 1.2px solid var(--negative);
          `;
        default:
          return css`
            border: 1.2px solid var(--grey-2);

            &:hover {
              border: 1.2px solid var(--grey-0);
            }
          `;
      }
    }}

    input {
      border: none;
      background-color: var(--grey-2);
      color: var(--grey-0);
    }

    button {
      background: none;
      border: none;

      i {
        cursor: pointer;

        color: var(--grey-1);
        font-size: 0.8rem;

        margin-right: 5px;
      }
    }

    select {
      border: none;
      background-color: var(--grey-2);

      color: var(--grey-1);

      width: 100%;
    }
  }

  > input {
    background-color: var(--grey-2);
    color: var(--grey-0);

    border-radius: 4px;

    padding: 10px;
    height: 40px;

    margin: 13px 0px 5px 0px;

    transition: 0.5s;

    &:hover {
      transition: 0.5s;
    }

    ${(props) => {
      switch (props.borderColor) {
        case 'success':
          return css`
            border: 1.2px solid var(--success);
          `;
        case 'negative':
          return css`
            border: 1.2px solid var(--negative);
          `;
        default:
          return css`
            border: 1.2px solid var(--grey-2);

            &:hover {
              border: 1.2px solid var(--grey-0);
            }
          `;
      }
    }}
  }

  span {
    font-weight: 400;
    font-size: 11px;
    line-height: 0px;
    color: var(--pink);
    margin: 5px 0px 10px 0px;
  }
`;
