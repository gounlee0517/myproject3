import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TextSection from "../components/Detail/DetailTxt";
import DetailBtns from "../components/Detail/DetailBtns";
import HomeBtn from "../components/Detail/HomeBtn";
import { useDispatch, useSelector } from "react-redux";
import { editLetter } from "../redux/modules/letters";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";

const Detail = () => {
  const activeLetter = useSelector((state) => state.letters);
  const dispatch = useDispatch();
  const paramId = useParams();
  const [editMode, setEditMode] = useState(false);
  const [editingText, setEditingText] = useState('');

  const onEditHandler = () => {
    setEditMode(true);
  };

  const onEditCompleteHandler = () => {
    setEditMode(false);
    dispatch(editLetter({paramId, editingText}));
  };

  return (
    <>
      <Navbar />
      <Header />
      <DetailPage>
        <TextSection
          activeLetter={activeLetter}
          editMode={editMode}
        />
        <DetailBtns
          editMode={editMode}
          onEditCompleteHandler={onEditCompleteHandler}
          onEditHandler={onEditHandler}
        />
      </DetailPage>
      <HomeBtn />
      <Footer />
    </>
  );
};

const DetailPage = styled.div`
  width: 600px;
  height: 400px;
  margin: 15vh auto 10vh auto;
  background: rgba(255, 255, 255, 0.1);
`;

export default Detail;
