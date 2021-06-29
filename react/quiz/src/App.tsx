import React, { useState } from 'react'
import styled, { createGlobalStyle } from "styled-components";
import { Button, OutlineButton, ButtonRow } from './components/Buttons';
import terms from './data/terms.json'
import LearnMode from "./components/learnmode/LearnMode";

// https://styled-components.com/docs/api#createglobalstyle
const GlobalStyle = createGlobalStyle`
  body {
    font: Helvetica;
  }
`

const Title = styled.h1`
  font-family: Helvetica;
`

function App() {
  // const [count, setCount] = useState(0)
  const handleClick = () => {
    console.log('click');
  }
  return (
    <div>
      <Title>{`Button Styling`}</Title>
      <ButtonRow>
        <Button onClick={handleClick}>{`Button`}</Button>
        <OutlineButton onClick={handleClick}>{`Button`}</OutlineButton>
        <OutlineButton onClick={handleClick}>{`Button`}</OutlineButton>
        <OutlineButton onClick={handleClick}>{`Button`}</OutlineButton>
      </ButtonRow>
      <div>
        <LearnMode terms={terms} />
      </div>
      <GlobalStyle />
    </div>
  )
}

export default App
