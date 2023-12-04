import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const TextSection = ({editMode}) => {
  const activeLetter = useSelector((state) => state.letters);
  const {id} = useParams();
  const detailLetter = activeLetter.find((item) => item.id === id);
  const [editingContent, setEditingContent] = useState(detailLetter.content);

  return (
    <TextSectionStyle>
      <img src={detailLetter.avatar} alt="memberImg" />
      <h3>{detailLetter.nickname}</h3>
      {editMode ? (
        <InputStyle
          type="textarea"
          value={editingContent}
          onChange={(e) => setEditingContent(e.target.value)}
        />
      ) : (
        detailLetter.content
      )}
    </TextSectionStyle>
  );
};

const TextSectionStyle = styled.div`
  transform: translateY(20px);
`;
const InputStyle = styled.input`
  height: 10vh;
  color: #fd8acb;
  background: rgba(255, 255, 255, 0.5);
  border-style: none;
`

export default TextSection;
