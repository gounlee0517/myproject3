import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteLetter } from "../../redux/modules/letters";
import { useNavigate, useParams } from "react-router-dom";


const DetailBtns = ({ editMode, onEditCompleteHandler, onEditHandler }) => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    alert("정말로 삭제하시겠습니까?");
    dispatch(deleteLetter(id));
    navigate("/");
  };
  
  return (
    <DetailBtnsStyle>
      {editMode ? (
        <button onClick={onEditCompleteHandler}>complete</button>
      ) : (
        <button onClick={onEditHandler}>edit</button>
      )}
      <button onClick={onDeleteHandler}>delete</button>
    </DetailBtnsStyle>
  );
};

const DetailBtnsStyle = styled.div`
  margin-top: 80px;
  transform: translateX(31%);
  display: grid;
  grid-template-columns: 120px 120px;
`;

export default DetailBtns;
