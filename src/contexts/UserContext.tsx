import { createContext, useState } from 'react';
import { ContextsProps } from '../interfaces/ContextsProps';
import { TechsProps, WorksProps } from '../interfaces/UserProps';

interface IUser {
  avatar_url: string | null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: TechsProps[] | null[];
  updated_at: string;
  works: WorksProps[] | null[];
}

interface IUserContext {
  userState: IUser | undefined;
  setUserState: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: ContextsProps) => {
  const [userState, setUserState] = useState<IUser>();
  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};
