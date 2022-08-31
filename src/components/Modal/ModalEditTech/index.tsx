import { useContext, useEffect, useState } from 'react';

import { toast } from 'react-hot-toast';

import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import api from '../../../services/api';

import { Modal } from '..';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { UserContext } from '../../../contexts/UserContext';
import { HorizontalBox } from '../../HorizontalBox/style';

interface ITechModal {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ITech {
  title?: string;
  status?: string;
}

export const ModalEditTech = ({ isVisible, setIsVisible }: ITechModal) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const { userToken, update, techTitle } = useContext(UserContext);

  const schema = yup.object().shape({
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
    <Modal modalTitle='Tecnologia Detalhes' setIsVisible={setIsVisible}>
      <h2>Nome da tecnologia</h2>

      <p>{techTitle}</p>

      <form>
        <Input
          name='status'
          label='Alterar status'
          register={register}
          select
          optionsList={options}
          setValue={setValue}
        />
        <HorizontalBox>
          {isEnabled ? (
            <Button type='submit' bgColor='pink'>
              Salvar alterações
            </Button>
          ) : (
            <Button type='submit' bgColor='pink-negative'>
              Salvar alterações
            </Button>
          )}
          <Button bgColor='grey'>Excluir</Button>
        </HorizontalBox>
      </form>
    </Modal>
  );
};
