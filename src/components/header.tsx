import React from "react";
import styled from "@emotion/styled";
// import bg from "../assets/bg.png";

const Header = () => {
  return (
    <>
      <NavBar>
        <h2>My Test App</h2>
      </NavBar>
      <HeaderEl className="main-image ">
        <div>
          <h1>Watch something incredible.</h1>
        </div>
      </HeaderEl>
    </>
  );
};

export default Header;

const NavBar = styled.div`
  height: 140px;
  background: #292929;
  padding: 40px 0px 40px 77px;

  h2 {
    width: 193px;
    height: 60px;
    padding: 17px;
    border: 1px solid white;
    color: white;
  }
`;

const HeaderEl = styled.div`
  height: 550px;
  padding: 109px 0px 159px 77px;
  /* background: url("../images/bg.png") no-repeat; */
  border: 1px solid black;

  div {
    height: 282px;
    width: 490px;
    /* border: 1px solid red; */

    h1 {
      font-size: 62px;
    }
  }

  @media (max-width: 500px) {
    height: 257px;
    div {
      width: 100%;
      /* border: 1px solid red; */

      h1 {
        font-size: 32px;
      }
    }
  }
`;
