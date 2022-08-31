import { useContext, useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { CardsList } from '../../components/CardsList';
import { HorizontalBox } from '../../components/HorizontalBox/style';
import { ModalEditTech } from '../../components/Modal/ModalEditTech';
import { ModalNewTech } from '../../components/Modal/ModalNewTech';
import { RoutesContext } from '../../contexts/RoutesContext';
import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';
import { Header, Main } from './styles';

interface IStorage {
  getItem(key: string): string | null;
}
export const Dashboard = () => {
  const { handleNavigation, setAuthenticated, logout } =
    useContext(RoutesContext);

  const { userState, isNewTech, setIsNewTech, isVisible, setIsVisible } =
    useContext(UserContext);

  const showModalNewTech = () => {
    setIsNewTech(true);
    setIsVisible(true);
  };

  const conditionalRender = () => {
    if (isNewTech) {
      return <ModalNewTech isVisible={isVisible} setIsVisible={setIsVisible} />;
    }
    return <ModalEditTech isVisible={isVisible} setIsVisible={setIsVisible} />;
  };

  return (
    <>
      <HorizontalBox>
        <h1>Kenzie Hub</h1>
        <Button bgColor='black' size='sm' onClick={logout}>
          Sair
        </Button>
      </HorizontalBox>
      <Header>
        <hr />
        <div>
          <h2>Olá, {userState?.name} 💕</h2>
          <p>{userState?.course_module}</p>
        </div>
        <hr />
      </Header>
      <Main>
        <section>
          <HorizontalBox>
            <h2>Tecnologias</h2>
            <Button bgColor='black' size='sm+' onClick={showModalNewTech}>
              +
            </Button>
          </HorizontalBox>
          <CardsList />
          {isVisible && conditionalRender()}
        </section>
      </Main>
    </>
  );
};
