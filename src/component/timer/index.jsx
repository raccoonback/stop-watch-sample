import React, {useEffect, useReducer} from 'react';
import styled from 'styled-components';
import Controller from "./controller";

const Wrapper = styled.section`
  flex: 1;
`;

const Title = styled.section`
  color: white;
  background: crimson;
  text-align: center;
  font-size: 6rem;
  font-weight: bold;
`;

const Section = styled.section`
  color: white;
  padding: 3em;
  background: cornflowerblue;
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
`;

const reducer = (state, action) => {
    const {time, isLive} = state;
    const {type} = action;
    switch (type) {
        case 'LOOP':
            return {time: time + 1, isLive: isLive, isReset: false};
        case 'START':
            return {time: time + 1, isLive: true, isReset: false};
        case 'STOP':
            return {time: time, isLive: false, isReset: false};
        case 'RESET':
            return {time: 0, isLive: isLive, isReset: true};
    }
};

function Index() {
    const [state, dispatch] = useReducer(reducer, {time: 0, isLive: false});
    useEffect(() => {
        (function () {
            const {isLive, isReset} = state;
            if (isLive && !isReset) {
                setTimeout(() => {
                    dispatch({type: 'LOOP', time: state.time, isLive: state.isLive});
                }, 1000);
            }
        })();
    }, [state]);

    return (
        <Wrapper>
            <Title>STOP WATCH</Title>
            <Section>{state.time}</Section>
            <Controller state={state} dispatch={dispatch}/>
        </Wrapper>
    );
}

export default Index;
