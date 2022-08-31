import { BaseSyntheticEvent, useContext } from 'react';
import { VscTrash } from 'react-icons/vsc';
import { UserContext } from '../../contexts/UserContext';

import { CardContainer } from './style';

interface ICard {
  techTitle: string;
  techStatus: string;
  techId: string;
}

export const Card = ({ techTitle, techStatus, techId }: ICard) => {
  const { deleteTechSubmit } = useContext(UserContext);

  const { setIsNewTech, setIsVisible, setTechTitle } = useContext(UserContext);

  const showModalEditTech = (event: BaseSyntheticEvent) => {
    event.stopPropagation();
    setIsNewTech(false);
    setIsVisible(true);
    setTechTitle(techTitle);
  };

  return (
    <CardContainer onClick={showModalEditTech}>
      <h2>{techTitle}</h2>
      <div>
        <p>{techStatus}</p>
        <VscTrash
          color='white'
          cursor='pointer'
          onClick={(event) => deleteTechSubmit(techId, techTitle, event)}
        />
      </div>
    </CardContainer>
  );
};
