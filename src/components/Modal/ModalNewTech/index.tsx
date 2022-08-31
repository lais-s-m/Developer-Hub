import { useContext, useEffect, useState } from 'react';

import { toast } from 'react-hot-toast';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import api from '../../../services/api';

import { Modal } from '..';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { UserContext } from '../../../contexts/UserContext';

interface ITechModal {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ITech {
  title?: string;
  status?: string;
}

export const ModalNewTech = ({ isVisible, setIsVisible }: ITechModal) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const { userToken, update } = useContext(UserContext);

  const schema = yup.object().shape({
    title: yup
      .string()
      .min(2, 'Mínimo de 2 dígitos')
      .required('Título obrigatório'),
    status: yup.string().required('Status obrigatório'),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const registerSubmit = (data: ITech) => {
    const postApi = async () => {
      const response = api.post('/users/techs', data, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      update();
      return response;
    };

    toast.promise(postApi(), {
      loading: 'Loading',
      success: `${data.title} registrado com sucesso!`,
      error: `${data.title} não pôde ser registrado pois já existe outra tecnlogia com o mesmo nome`,
    });
  };

  const options = [
    { value: 'Iniciante', text: 'Iniciante' },
    { value: 'Intermediário', text: 'Intermediário' },
    { value: 'Avançado', text: 'Avançado' },
  ];

  useEffect(() => {
    if (isValid) {
      setIsEnabled(true);
    }
  }, [isValid]);

  return (
    <Modal modalTitle='Cadastrar Tecnologia' setIsVisible={setIsVisible}>
      <form onSubmit={handleSubmit(registerSubmit)}>
        <Input
          name='title'
          label='Nome'
          register={register}
          placeholder='Digite o nome da tecnologia'
          error={errors.title?.message}
        />
        <Input
          select
          setValue={setValue}
          optionsList={options}
          name='status'
          label='Selecionar status'
          register={register}
          error={errors.status?.message}
        />
        {isEnabled ? (
          <Button type='submit' bgColor='pink'>
            Cadastrar Tecnologia
          </Button>
        ) : (
          <Button type='submit' bgColor='pink-negative'>
            Cadastrar Tecnologia
          </Button>
        )}
      </form>
    </Modal>
  );
};
