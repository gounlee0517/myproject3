import React, { useState} from 'react';
import Input from '../components/Home/main/Input';
import Letters from '../components/Home/main/Letters';
import Taps from '../components/Home/main/Taps';
import Navbar from '../components/Home/Navbar';
import Header from '../components/Home/Header';
import {useSelector, useDispatch} from "react-redux"
import { setMember } from '../redux/modules/member';
import { addLetter } from '../redux/modules/letters';
import Footer from '../components/Home/Footer';

const Home = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const activeMember = useSelector(state => state.member)
  const activeLetter = useSelector(state => state.letters)
  const dispatch = useDispatch();

  const selectedMember = activeLetter.find((member) => member.writedTo === activeMember);

  const onChangeHandler = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'content') {
      setContent(e.target.value);
    } else if (e.target.name === 'members') {
      dispatch(setMember(e.target.value));
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newLetter = {
      id: String(activeLetter.length + 1),
      avatar: selectedMember ? selectedMember.avatar : '',
      nickname: name,
      content: content,
      writedTo: activeMember,
    };

    if (name === '') {
      alert('닉네임을 입력해주세요');
    } else if (content === '') {
      alert('내용을 입력해주세요');
    } else {
      dispatch(addLetter(newLetter));
    }
    setName('');
    setContent('');
  };

  return (
    <div>
      <Navbar />
      <Header />
      <Taps 
        setMember={dispatch(setMember)}   
      />

      <Input
        name={name}
        setName={setName}
        content={content}
        setContent={setContent}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />

      <Letters />
      <Footer />
    </div>
  );
};

export default Home;
