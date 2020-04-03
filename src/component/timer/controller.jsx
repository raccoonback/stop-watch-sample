import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  color: white;
  padding: 3em;
  background: darkcyan;
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px darkslategray;
  color: darkslategray;
  margin: 0 1em;
  padding: 0.25em 1em;
  flex: 1;
  font-size: 2rem;
  background: lightgray;
`;

function Controller({state, dispatch}) {
    const start = () => {
        if (!state.isLive) {
            dispatch({type: 'START', time: state.time});
        }
    };

    const stop = () => {
        dispatch({type: 'STOP', time: state.time})
    };

    const reset = () => {
        dispatch({type: 'RESET'});
    };

    return (
        <div>
            <Section>
                <Button onClick={start}>시작</Button>
                <Button onClick={stop}>중지</Button>
                <Button onClick={reset}>초기화</Button>
            </Section>
        </div>
    );
}

export default Controller;
