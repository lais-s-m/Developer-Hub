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
  const {
    setIsNewTech,
    setIsVisible,
    setTechTitle,
    setTechID,
    deleteTechSubmit,
  } = useContext(UserContext);

  const showModalEditTech = (event: BaseSyntheticEvent) => {
    event.stopPropagation();
    setIsNewTech(false);
    setIsVisible(true);
    setTechTitle(techTitle);
    setTechID(techId);
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
