import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Input = ({
  name,
  content,
  curMembers,
  onChangeHandler,
  onSubmitHandler,
}) => {
  const [lettercards, setLettercards] = useState(null);

  const fetchLetters = async() => {
    const {data} = await axios.get('http://localhost:4000/letters');
    setLettercards(data);
  }

  useEffect(() => {
    fetchLetters();
  }, []);
  
  const submitHandler = async (e) => {
    e.preventDefault();

    const response = axios.post('http://localhost:4000/letters', {
      name,
      content,
      curMembers
    });
    console.log('letter', response);
    fetchLetters();
    alert('새로운 글이 등록되었습니다.')
  }

  return (
    <InputSection onSubmit={submitHandler}> 
      <Input1
        placeholder="최대 20글자까지 작성할 수 있습니다."
        name="name"
        value={name}
        onChange={onChangeHandler}
        maxLength="20"
      />
      <Input2
        placeholder="최대 100자까지만 작성할 수 있습니다."
        name="content"
        value={content}
        onChange={onChangeHandler}
      />
      <div>
        select a member &nbsp;&nbsp;
        <Select onChange={onChangeHandler} value={curMembers} name="members">
          {["YUJIN", "GAEUL", "REI", "WONYOUNG", "LIZ", "LEESEO"].map(
            (member) => (
              <option key={member} value={member}>
                {member}
              </option>
            )
          )}
        </Select>
      </div>
      <Button onClick={onSubmitHandler}>submit</Button>
    </InputSection>
  );
};

const Button = styled.button`
  margin-top: 3vh;
  color: white;
  cursor: pointer;
`;
const InputSection = styled.form`
  width: 600px;
  height: 430px;
  margin: 10vh auto 10vh auto;
  color: white;
  background: rgba(255, 255, 255, 0.1);
`;
const Input1 = styled.input`
  height: 35px;
  margin-top: 5vh;
  background: rgba(255, 255, 255, 0.5);
  border-style: none;
`;
const Input2 = styled.input`
  height: 150px;
  margin: 3vh;
  background: rgba(255, 255, 255, 0.5);
  border-style: none;
`;
const Select = styled.select`
  padding: 5px;
  background: rgba(255, 255, 255, 0.5);
  border-style: none;
  color: white;
`;

export default Input;
