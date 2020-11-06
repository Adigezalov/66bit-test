import React, {useEffect, useState} from 'react';

const style = {
  marker: {
    width: 30,
    height: 30,
    borderBottom: '3px solid black'
  }
}

const MarkerComponent = () => {
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    setTimeout(onBlinkHandle, 500)
  }, [blink])

  const onBlinkHandle = () => {
    setBlink(!blink)
  }

  return (
      <div style={{...style.marker, opacity: blink ? 1 : 0.1}}/>
  );
};

export default MarkerComponent;
