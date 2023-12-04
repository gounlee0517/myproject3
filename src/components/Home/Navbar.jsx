import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setIsLogined } from "../../redux/modules/isLogined";

function Navbar() {
  const navigate = useNavigate();
  const isLogined = useSelector((state) => state.isloginedSlice.isLogined);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(setIsLogined(false))
  }

  return (
    <NavbarSt>
      <NavbarDiv>
        <Logo onClick={() => navigate("/")}>IVE</Logo>
        <Ul>
          <Li onClick={logoutHandler}>logout</Li>
          <Li onClick={() => navigate("/profile")}>mypage</Li>
        </Ul>
      </NavbarDiv>
    </NavbarSt>
  );
}

const NavbarSt = styled.div`
  position: sticky;
  top: 0;
`;
const NavbarDiv = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.h3`
  cursor: pointer;
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
`;
const Li = styled.li`
  margin-left: 20px;
  cursor: pointer;
`;

export default Navbar;
