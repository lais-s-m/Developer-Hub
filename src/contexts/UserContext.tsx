import { BaseSyntheticEvent, createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { ContextsProps } from '../interfaces/ContextsProps';
import { TechsProps, WorksProps } from '../interfaces/UserProps';
import api from '../services/api';

interface IUser {
  avatar_url: string | null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: TechsProps[];
  updated_at: string;
  works: WorksProps[];
}

interface IUserContext {
  userState: IUser | undefined;
  setUserState: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  userToken: string | undefined;
  deleteTechSubmit: (
    techId: string,
    techName: string,
    event: BaseSyntheticEvent
  ) => void;
  techList: TechsProps[];
  setTechList: React.Dispatch<React.SetStateAction<TechsProps[]>>;
  update: () => void;
  isNewTech: boolean;
  setIsNewTech: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  techTitle: string;
  setTechTitle: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: ContextsProps) => {
  const [userState, setUserState] = useState<IUser>();

  const [userToken, setUserToken] = useState<string>();

  const [techList, setTechList] = useState<TechsProps[]>([]);

  const [isVisible, setIsVisible] = useState(false);

  const [isNewTech, setIsNewTech] = useState(false);

  const [techTitle, setTechTitle] = useState('');

  const history = useHistory();

  const JSONtoken = localStorage.getItem('@KenzieHub:token') || '';

  useEffect(() => {
    if (JSONtoken !== '') {
      const token = JSON.parse(JSONtoken);
      setUserToken(token);
      api
        .get('/profile', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setUserState(response.data);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem('@KenzieHub:token');
        });
    } else {
      history.push('/');
    }
  }, []);

  const update = () => {
    api
      .get('/profile', {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => setTechList(res.data.techs));
  };

  const deleteTechSubmit = (
    techId: string,
    techName: string,
    event: BaseSyntheticEvent
  ) => {
    event.stopPropagation();
    const deleteAPI = async () => {
      const response = api.delete(`/users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      const updatedList = techList.filter((tech) => tech.id !== techId);
      setTechList(updatedList);
      return response;
    };

    toast.promise(deleteAPI(), {
      loading: 'Loading',
      success: `${techName} removido com sucesso!`,
      error: `${techName} não pôde ser removido`,
    });
  };

  return (
    <UserContext.Provider
      value={{
        userState,
        setUserState,
        userToken,
        deleteTechSubmit,
        techList,
        setTechList,
        update,
        isNewTech,
        setIsNewTech,
        isVisible,
        setIsVisible,
        techTitle,
        setTechTitle,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
