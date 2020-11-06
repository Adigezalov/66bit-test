import React, {useCallback, useEffect, useState} from "react";
import LetterComponent from "../components/Letter.component";

const VALIDATE = /[A-Za-zА-Яа-я]/

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

function App() {
  const [word, setWord] = useState('')
  const [pressKey, setPressKey] = useState('')

  useEffect(() => {
    document.addEventListener("keypress", onPressKeyHandler);
    return () => {
      window.removeEventListener('keydown', onPressKeyHandler);
    };
  }, [])

  useEffect(() => {
    setWord(`${word}${pressKey}`)
  }, [pressKey])

  const onPressKeyHandler = useCallback((event) => {
    const { key, keyCode } = event;

    if (VALIDATE.test(key) && keyCode !== 13) {
      setPressKey(key)
    }
  }, [])

  const onRenderWord = () => {
    return word.split('').map((letter, i) => (
        <div key={i}>
          <LetterComponent letter={letter}/>
        </div>
    ))
  }

  return (
    <div style={appStyle}>
      {onRenderWord()}
    </div>
  );
}

export default App;
