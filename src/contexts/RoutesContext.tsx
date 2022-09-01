import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { ContextsProps } from '../interfaces/ContextsProps';
import { UserContext } from './UserContext';

interface IRoutesContext {
  redirect: () => false | JSX.Element;
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  handleNavigation: (path: string) => void;
  logout: () => void;
}

export const RoutesContext = createContext<IRoutesContext>(
  {} as IRoutesContext
);

export const RoutesContextProvider = ({ children }: ContextsProps) => {
  const { userState } = useContext(UserContext);

  const [authenticated, setAuthenticated] = useState(false);

  const redirect = () => authenticated && <Redirect to='/dashboard' />;

  const history = useHistory();
  const handleNavigation = (path: string) => history.push(path);

  const logout = () => {
    setAuthenticated(false);
    toast.success(`Deslogado! Até breve, ${userState?.name}`);
    localStorage.clear();
    handleNavigation('/');
  };
  return (
    <RoutesContext.Provider
      value={{
        redirect,
        authenticated,
        setAuthenticated,
        handleNavigation,
        logout,
      }}
    >
      {children}
    </RoutesContext.Provider>
  );
};
