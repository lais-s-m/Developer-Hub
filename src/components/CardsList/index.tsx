import { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { UserContext } from '../../contexts/UserContext';
import { TechsProps } from '../../interfaces/UserProps';
import { Card } from '../Card';

import { Container } from './styles';

export const CardsList = () => {
  const { techList, update } = useContext(UserContext);
  const [updatedTechList, setUpdatedTechList] = useState<TechsProps[]>();

  useEffect(() => {
    setUpdatedTechList(techList);
  }, [techList]);

  useEffect(() => {
    update();
  }, []);

  return (
    <Container>
      <ul>
        {updatedTechList && updatedTechList.length !== 0 ? (
          updatedTechList.map((tech) => {
            if (tech) {
              return (
                <li key={uuid()}>
                  <Card
                    techStatus={tech.status}
                    techTitle={tech.title}
                    techId={tech.id}
                  />
                </li>
              );
            }
            return false;
          })
        ) : (
          <p>
            Você ainda não tem tecnologias registradas 😢 <br /> Clique no botão
            + para adicionar
          </p>
        )}
      </ul>
    </Container>
  );
};
