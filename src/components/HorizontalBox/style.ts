import styled from 'styled-components';
import { appearFromLeft } from '../../styles/GlobalStyles';

export const HorizontalBox = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  align-items: center;

  animation: ${appearFromLeft} 1s;

  margin: 20px 10px 25px 10px;
`;
