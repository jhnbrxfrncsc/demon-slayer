import React, { useState } from 'react';

import { Card, MainContainer, Title } from './styled';

import data from './characters.json';
import Header from './components/Header';
import Button from './components/Button';
import Characters from './components/Characters';
import BattleField from './components/BattleField';


function App() {
  const playableCharacters = data.demon_slayer_corps;
  

  return (
    <MainContainer>
      <Header />
      <Card>
        <Title> Choose your Character : </Title>
        <Characters playableCharacters={playableCharacters} />
      </Card>
    </MainContainer>
  );
}

export default App;
