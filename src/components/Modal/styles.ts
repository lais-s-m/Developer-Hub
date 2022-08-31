import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: var(--grey-3);

  margin: auto;
  padding: 0px;

  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  width: 30%;
  min-width: 296px;

  height: 30%;
  min-height: 350px;

  section {
    display: flex;
    flex-direction: column;

    justify-content: center;
    padding: 20px;

    > h2 {
      color: var(--grey-0);
      font-weight: 600;
      font-size: 14px;
      line-height: 28px;
    }

    > p {
      background-color: var(--grey-2);
      color: var(--grey-1);

      width: 100%;
      height: 40px;

      padding: 10px;

      text-align: center;
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12px 20px;
  gap: 10px;

  width: 100%;
  height: 50px;

  background-color: var(--grey-2);
  border-radius: 4px 4px 0px 0px;

  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: var(--grey-0);

  button {
    border: none;
    background-color: var(--grey-2);

    color: var(--grey-1);
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;

    transition: 0.5s;

    &:hover {
      color: var(--pink);
      transition: 0.5s;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    width: 30%;
    margin-right: 20px;
  }
`;
