import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 15px;

  height: 48px;
  width: 100%;

  border-radius: 4px;

  margin-bottom: 12px;

  background-color: var(--grey-4);

  transition: 0.5s;

  &:hover {
    background-color: var(--grey-2);
    transition: 0.5s;
    cursor: pointer;
  }

  h2 {
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: var(--grey-0);
  }

  div {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    align-items: center;

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: var(--grey-1);

      margin-right: 15px;
    }
  }
`;
