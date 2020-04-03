import React from 'react';
import {useUsers} from '../../context/userContext';
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: lightsteelblue;
`;

const Text = styled.div`
  padding: 1em;
  font: 1em solid;
  left-padding: 1em; 
`;

const list = (users) => {
    return users.map((it, idx) => {
        const {text} = it;
        return <Text key={idx}>{text}</Text>;
    });
};

function List() {
    const {users} = useUsers();
    return (
        <Wrapper>
            {list(users)}
        </Wrapper>
    );
}

export default List;
