import styled from 'styled-components';
import { appearFromLeft } from '../../styles/GlobalStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 22px;

  width: 90vw;

  background-color: var(--grey-3);

  animation: ${appearFromLeft} 1s;

  margin-bottom: 25px;

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey-0);

    margin: 8px 0px 10px 0px;
  }

  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }

  form {
    width: 100%;
  }

  > span {
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    color: var(--grey-1);

    margin: 28px 0px 15px 0px;
  }

  @media (min-width: 768px) {
    width: 350px;
  }
`;
