import React, {useState} from 'react';
import styled from 'styled-components';
import {useUsers} from '../../context/userContext';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  background: bisque;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 2em;
  font-size: 1em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  flex: 3;
`;

const Send = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  flex: 1;
`;

function SendBox() {
    const [text, setText] = useState('');
    const {dispatch} = useUsers();

    const onClick = () => {
        dispatch({type: 'CREATE', text});
        setText('');
    };

    const onChange = (event) => {
        setText(event.target.value)
    };

    const onKeyDown = ({keyCode}) => {
        if (keyCode === 13) {
            onClick();
        }
    };

    return (
        <Wrapper>
            <Input value={text} onChange={onChange} onKeyDown={onKeyDown} placeholder='입력'/>
            <Send onClick={onClick}>보내기</Send>
        </Wrapper>
    );
}

export default SendBox;
