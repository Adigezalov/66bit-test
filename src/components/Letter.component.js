import React, {useEffect, useState} from 'react';
import {Transition} from 'react-transition-group';

const DURATION = 3000

const defaultStyle = {
  transition: `opacity ${DURATION}ms ease-in-out`,
  opacity: 0,
  color: '#548dd5',
  fontSize: 30,
  textTransform: 'uppercase'
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

const LetterComponent = ({letter}) => {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(Boolean(letter))
  }, [letter])

  return (
      <Transition in={isVisible} timeout={50}>
        {
          state => (
              <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}>{letter}</div>
          )
        }
      </Transition>
  );
};

export default LetterComponent;
