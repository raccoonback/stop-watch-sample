import React from 'react';
import Container from '../component/article';
import {UserProvider} from "../context/userContext";
import Timer from '../component/timer';
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`;

function Main() {
    return (
        <UserProvider>
            <Wrapper>
                <Timer/>
                <Container/>
            </Wrapper>
        </UserProvider>
    );
}

export default Main;
