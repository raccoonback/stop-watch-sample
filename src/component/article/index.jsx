import React from 'react';
import List from './list';
import SendBox from './sendbox';
import styled from "styled-components";

const Wrapper = styled.section`
  flex: 1;
`;

const Title = styled.section`
  color: white;
  background: black;
  text-align: center;
  font-size: 6rem;
  font-weight: bold;
`;

function Container() {
    return (
        <Wrapper>
            <Title>Write</Title>
            <List/>
            <SendBox/>
        </Wrapper>
    );
}

export default Container;
