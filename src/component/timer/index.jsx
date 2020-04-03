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
    const {start, end, isLive} = state;
    const {type} = action;
    const now = new Date();
    switch (type) {
        case 'LOOP':
            return {start: start, end: now, isLive: isLive, isReset: false};
        case 'START':
            return {start: now, end: now, isLive: true, isReset: false};
        case 'STOP':
            return {start: start, end: now, isLive: false, isReset: false};
        case 'RESET':
            return {start: now, end: now, isLive: isLive, isReset: true};
    }
};

const getTime = (start, end) => {
    const time = end - start;
    const miliSecond = Math.floor((time % 1000) / 10);
    const second = Math.floor(time / 1000) % 60;
    const minute = Math.floor(Math.floor(time / 1000) / 60) % 60;
    const hour = Math.floor(Math.floor(Math.floor(time / 1000) / 60) / 60) % 24;
    return `${hour} : ${minute} : ${second} : ${miliSecond}`;
};

function Index() {
    const [state, dispatch] = useReducer(reducer, {start: new Date(), end: new Date(), isLive: false});
    useEffect(() => {
        (function () {
            const {isLive, isReset} = state;
            if (isLive && !isReset) {
                setTimeout(() => {
                    dispatch({...state, type: 'LOOP'});
                }, 50);
            }
        })();
    }, [state]);

    return (
        <Wrapper>
            <Title>STOP WATCH</Title>
            <Section>{getTime(state.start, state.end)}</Section>
            <Controller state={state} dispatch={dispatch}/>
        </Wrapper>
    );
}

export default Index;
