import { useContext, useEffect } from 'react';
import { Button } from '../../components/Button';
import { HorizontalBox } from '../../components/HorizontalBox/style';
import { RoutesContext } from '../../contexts/RoutesContext';
import { UserContext } from '../../contexts/UserContext';
import { Header } from './styles';

interface IStorage {
  getItem(key: string): string | null;
}
export const Dashboard = () => {
  const { handleNavigation, setAuthenticated, logout } =
    useContext(RoutesContext);

  const { userState } = useContext(UserContext);

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
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </Header>
    </>
  );
};
