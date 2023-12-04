import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {initialData} from "../../../redux/modules/initialData";

const Letters = () => {
  const activeMember = useSelector(state => state.member)
  const activeLetter = useSelector(state => state.letters)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <LetterSection className="letter-section">
      {activeLetter
        ?.filter((value) => {
          return value.writedTo === activeMember;
        })
        .map((item) => {
          return (
            <Letter
              key={item.id}
              onClick={() => {
                navigate(`Detail/${item.id}`);
              }}
            >
              <img src={item.avatar}></img>
              <div>
                <h4>{item.nickname}</h4>
                <p>{item.content}</p>
              </div>
            </Letter>
          );
        })}
    </LetterSection>
  );
};

const LetterSection = styled.div`
  width: 600px;
  height: 200px;
  margin: 0 auto 15vh auto;
  text-align: left;
  color: white;
`;
const Letter = styled.div`
  display: flex;
  padding: 10px;
`;

export default Letters;
