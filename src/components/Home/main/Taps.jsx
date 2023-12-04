import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setMember } from '../../../redux/modules/member';

const Taps = () => {
  const activeMember = useSelector(state => state.member)
  const dispatch = useDispatch();

  return (
    <TapStyle>
      {["YUJIN", "GAEUL", "REI", "WONYOUNG", "LIZ", "LEESEO"].map((activeMember) => (
        <Button
          key={activeMember}
          onClick={() => {
            // setCurMembers(member);
            dispatch(setMember(activeMember));
          }}
        >
          {activeMember}
        </Button>
      ))}
    </TapStyle>
  );
};

const TapStyle = styled.div`
  width: 800px;
  margin: 0 auto 10vh auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
`;

const Button = styled.button`
  margin-top: 3vh;
  color: white;
  cursor: pointer;
`;

export default Taps;