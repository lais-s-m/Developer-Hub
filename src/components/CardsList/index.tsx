import { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { UserContext } from '../../contexts/UserContext';
import { TechsProps } from '../../interfaces/UserProps';
import { Card } from '../Card';

import { Container } from './styles';

export const CardsList = () => {
  const { techList } = useContext(UserContext);

  return (
    <Container>
      <ul>
        {techList.length !== 0 ? (
          techList.map((tech) => {
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
