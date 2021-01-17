import React, {useState, useEffect} from 'react';

import { useAuth } from  '../../context/AuthContext';

import { Container, ContentInfo, Title, Img } from './styles';

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

  useEffect(() => {
    api.get(`/emblems`, {headers: {Authorization: `Bearer ${token}`}})
    .then((emblems) => {

      setEmblems(emblems.data)
      // console.log(emblems);
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

    console.log(emblemMapped);
    setEmblemsArray(emblemMapped);
  }, [emblems])

  function nextEmblems () {
    const lastActive = getLastEmblem();
    let totalAlterado = 0;
    const emblemMapped = emblems.map( (emblem, index) => {
      if (emblem.id > lastActive && totalAlterado <= 6) {
        emblem.on = true;
        totalAlterado++;
      }else {
        emblem.on = false;
      }
      return emblem;
    })
    console.log(emblemMapped);
    setEmblemsArray(emblemMapped);
  }

  function getLastEmblem () {
    const actives = emblemsArray.filter(emblem => emblem.on == true);
    return actives[actives.length - 1].id;
  }

  return (
    <>

    <Container>
      <Title>Emblemas</Title>
      <ContentInfo>
      {emblemsArray.map(emblem => (
          emblem.on && <div key={emblem.id}><Img src={emblem.url}/></div>
        ))}
      </ContentInfo>
      <button onClick={() => nextEmblems()}>mais</button>
    </Container>
    
    </>
  );
}

export default Emblems;