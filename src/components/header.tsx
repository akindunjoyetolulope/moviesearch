import React from "react";
import styled from "@emotion/styled";
import bg from "../assets/bg.png";
import media from "../styles/media";

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

  ${media.tablet} {
    display: flex;
    justify-content: center;
    padding: 40px 0px 40px 0px;
    h1 {
      text-align: center;
    }
  }

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
  background: url(${bg}) no-repeat;
  border: 1px solid black;

  div {
    height: 282px;
    width: 490px;
    /* border: 1px solid red; */

    h1 {
      color: white;
      font-size: 72px;
    }
  }

  ${media.tablet} {
    display: flex;
    justify-content: center;
    padding: 109px 0px 159px 0px;
    h1 {
      text-align: center;
    }
  }

  ${media.mobile} {
    height: 257px;
    div {
      width: 100%;

      h1 {
        font-size: 32px;
      }
    }
  }
`;
