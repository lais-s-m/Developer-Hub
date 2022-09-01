import { useContext, useEffect, useState } from 'react';

import { toast } from 'react-hot-toast';

import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Modal } from '..';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { UserContext } from '../../../contexts/UserContext';
import { ButtonsContainer } from '../styles';

interface ITechModal {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

interface ITech {
  title?: string;
  status?: string;
}

export const ModalEditTech = ({ isVisible, setIsVisible }: ITechModal) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const { editTechSubmit, deleteTechSubmit, techTitle, techID } =
    useContext(UserContext);

  const schema = yup.object().shape({
    status: yup.string().required('Status obrigatório'),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

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

      <form onSubmit={handleSubmit(editTechSubmit)}>
        <Input
          name='status'
          label='Alterar status'
          register={register}
          select
          optionsList={options}
          setValue={setValue}
          error={errors.status?.message}
        />
        <ButtonsContainer>
          {isEnabled ? (
            <Button type='submit' size='sm' bgColor='pink'>
              Salvar alterações
            </Button>
          ) : (
            <Button type='submit' size='sm' bgColor='pink-negative'>
              Salvar alterações
            </Button>
          )}
          <Button
            size='sm'
            bgColor='grey'
            onClick={(event) => deleteTechSubmit(techID, techTitle, event)}
          >
            Excluir
          </Button>
        </ButtonsContainer>
      </form>
    </Modal>
  );
};
