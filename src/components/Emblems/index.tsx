import React, {useState, useEffect} from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { useAuth } from  '../../context/AuthContext';

import { Container, ContentInfo, Title, Img, ControlsButtons } from './styles';

import api from '../../services/api';

interface EmblemInterface {
  id: number,
  title: string,
  image: string,
  score: number,
  url: string,
  on: boolean,
}



const Emblems: React.FC = () => {
  const { user, token } = useAuth();

  const [on, setOn] = useState<boolean>(true);
  const [emblems, setEmblems] = useState<EmblemInterface[]>([]);
  const [emblemsArray, setEmblemsArray] = useState<EmblemInterface[]>([]);
  const [firstEmblemIndex, setFirstEmblemIndex] = useState<number>(0);

  useEffect(() => {
    api.get(`/emblems`, {headers: {Authorization: `Bearer ${token}`}})
    .then((emblems) => {
      setEmblems(emblems.data)
    })
    .catch(err => {})

  }, []);

  useEffect(() => {
    const emblemMapped = emblems.map( (emblem, index) => {
      if (index > 5) {
        emblem.on = false;
      }else {
        emblem.on = true;
      }
      return emblem;
    })
    setEmblemsArray(emblemMapped);
  }, [emblems])

  function nextEmblems () {
    if (firstEmblemIndex + 6 > emblems.length) {
      return false;
    }

    const emblemMapped = emblems.map( (emblem, index) => {
      if (index >= (firstEmblemIndex + 6) && index < (firstEmblemIndex + 12)) {
        emblem.on = true;
      }else {
        emblem.on = false;
      }
      return emblem;
    })

    setFirstEmblemIndex(firstEmblemIndex + 6);
    setEmblemsArray(emblemMapped);
  }

  function previousEmblems () {
    console.log(firstEmblemIndex - 6);
    if (firstEmblemIndex - 6 < 0) {
      return false;
    }

    const emblemMapped = emblems.map( (emblem, index) => {
      if (index < firstEmblemIndex && index >= (firstEmblemIndex - 6)) {
        emblem.on = true;
      }else {
        emblem.on = false;
      }
      return emblem;
    })

    setFirstEmblemIndex(firstEmblemIndex - 6);
    setEmblemsArray(emblemMapped);
  }

  return (
    <>
    <Container>
      <Title>Emblemas</Title>
      <ContentInfo>
      {emblemsArray.map(emblem => (
          emblem.on && <div key={emblem.id}>
                        <Img src={emblem.url}/>
                        <span>{emblem.score}</span>
                      </div>
        ))}
      </ContentInfo>
      <ControlsButtons>
        <button onClick={() => previousEmblems()}>
          <FaAngleLeft size={20}/>
        </button>
        <button onClick={() => nextEmblems()}>
          <FaAngleRight size={20}/>
        </button>
      </ControlsButtons>

    </Container>
    </>
  );
}

export default Emblems;