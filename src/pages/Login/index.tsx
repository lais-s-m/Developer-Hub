import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { toast } from 'react-hot-toast';
import { useContext, useEffect } from 'react';

import { Button } from '../../components/Button';
import { Container } from '../../components/Container/style';
import { Input } from '../../components/Input';
import api from '../../services/api';

import { RoutesContext } from '../../contexts/RoutesContext';
import { UserContext } from '../../contexts/UserContext';
import { TechsProps, WorksProps } from '../../interfaces/UserProps';

interface ILoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    created_at: string;
    updated_at: string;
    techs: TechsProps[];
    works: WorksProps[];
    avatar_url: string | null;
  };
  token: string;
}

export const Login = () => {
  const { redirect, authenticated, setAuthenticated, handleNavigation } =
    useContext(RoutesContext);

  const { userState, setUserState } = useContext(UserContext);

  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup
      .string()
      .min(6, 'Senha com mínimo de 6 digítos')
      .required('Senha obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (loginData: FieldValues) => {
    const postAPI = async () => {
      const response = api
        .post<ILoginResponse>('/sessions', loginData)
        .then((res) => {
          const { token, user } = res.data;
          setUserState(user);
          localStorage.setItem('@KenzieHub:token', JSON.stringify(token));
          setAuthenticated(true);
        });
      return response;
    };
    toast.promise(postAPI(), {
      loading: 'Loading',
      success: `Bem vind@!`,
      error: `Infelizmente, não conseguimos te logar. Verifique se email e senha estão corretos`,
    });
  };

  if (authenticated) {
    handleNavigation('/dashboard');
  }

  return (
    <>
      <h1>Kenzie Hub</h1>
      <Container>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label='Email'
            placeholder='Digite seu email'
            register={register}
            name='email'
            error={errors.email?.message}
          />
          <Input
            label='Senha'
            placeholder='Digite sua senha'
            register={register}
            name='password'
            error={errors.password?.message}
            password
          />
          <Button bgColor='pink' type='submit'>
            Entrar
          </Button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <Button bgColor='grey' onClick={() => handleNavigation('/register')}>
          Cadastre-se
        </Button>
      </Container>
    </>
  );
};
