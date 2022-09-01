/* eslint-disable camelcase */
import { useContext, useEffect, useState } from 'react';

import { toast } from 'react-hot-toast';

import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/Button';
import { Container } from '../../components/Container/style';
import { HorizontalBox } from '../../components/HorizontalBox/style';
import { Input } from '../../components/Input';
import { RoutesContext } from '../../contexts/RoutesContext';
import api from '../../services/api';

interface ISignInResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

interface IErrorResponse {
  message: string;
  status: string;
}

export const Register = () => {
  const { handleNavigation, setAuthenticated } = useContext(RoutesContext);

  const [isEnabled, setIsEnabled] = useState(false);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Nome obrigatório')
      .min(2, 'Mínimo de 2 dígitos'),
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup
      .string()
      .min(6, 'Mínimo de 6 dígitos')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.'
      )
      .required('Senha obrigatória'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas não são iguais')
      .required('Confirmação de senha obrigatória'),
    bio: yup.string().required('Bio obrigatória').min(5, 'Mínimo de 5 dígitos'),
    contact: yup
      .string()
      .required('Contato obrigatório')
      .min(5, 'Mínimo de 5 dígitos'),
    course_module: yup
      .string()
      .required('Módulo do curso obrigatório')
      .min(2, 'Módulo do curso obrigatório'),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmitFunction = (signInData: FieldValues) => {
    const { name, email, password, bio, contact, course_module } = signInData;
    const user = { name, email, password, bio, contact, course_module };

    const postAPI = async () => {
      const response = api.post<ISignInResponse>('/users', user);
      return response;
    };

    toast.promise(postAPI(), {
      loading: 'Loading',
      success: `Conta criada com sucesso, ${user.name}!`,
      error: `Infelizmente, não conseguimos criar sua conta, ${user.name}. Utilize outro email`,
    });
    handleNavigation('/');
  };

  useEffect(() => {
    if (isValid) {
      setIsEnabled(true);
    }
  }, [isValid]);

  const options = [
    {
      value: 'Primeiro módulo (Introdução ao Frontend)',
      text: 'Primeiro Módulo',
    },
    { value: 'Segundo módulo (Frontend Avançado)', text: 'Segundo Módulo' },
    {
      value: 'Terceiro módulo (Introdução ao Backend)',
      text: 'Terceiro Módulo',
    },
    { value: 'Quarto módulo (Backend Avançado)', text: 'Quarto Módulo' },
  ];

  return (
    <>
      <HorizontalBox>
        <h1>Kenzie Hub</h1>
        <Button bgColor='black' size='sm' onClick={() => handleNavigation('/')}>
          Voltar
        </Button>
      </HorizontalBox>
      <Container>
        <h2>Crie sua conta</h2>
        <span>Rápido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            name='name'
            label='Nome'
            placeholder='Digite aqui seu nome'
            register={register}
            error={errors.name?.message}
          />
          <Input
            name='email'
            label='Email'
            placeholder='Digite aqui seu email'
            register={register}
            error={errors.email?.message}
          />
          <Input
            name='password'
            label='Senha'
            placeholder='Digite aqui uma senha'
            password
            register={register}
            error={errors.password?.message}
          />
          <Input
            name='passwordConfirm'
            label='Confirmar senha'
            placeholder='Digite novamente'
            password
            register={register}
            error={errors.passwordConfirm?.message}
          />
          <Input
            name='bio'
            label='Bio'
            placeholder='Fale sobre você'
            register={register}
            error={errors.bio?.message}
          />
          <Input
            name='contact'
            label='Contato'
            placeholder='Opção de contato'
            register={register}
            error={errors.contact?.message}
          />
          <Input
            name='course_module'
            setValue={setValue}
            label='Selecionar módulo'
            select
            optionsList={options}
            register={register}
            error={errors.course_module?.message}
          />
          {isEnabled ? (
            <Button bgColor='pink' type='submit'>
              Cadastrar
            </Button>
          ) : (
            <Button bgColor='pink-negative' type='submit'>
              Cadastrar
            </Button>
          )}
        </form>
      </Container>
    </>
  );
};
