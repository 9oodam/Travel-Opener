import React, { useState } from "react";

import {
  MainTopBox,
  LogoBox,
  TextBox,
  InputBox,
  DateBoxWrap,
  DateBox,
} from "./MainPc.styled";

import logo2 from "../../img/icons/logo2.png";
import mainText from "../../img/icons/mainText.png";
import search from "../../img/icons/search.png";

// 로고 & 여행지 검색
const MainTopPc = ({ locationSearched }) => {
  const [location, setLocation] = useState();

  // 엔터를 입력시 감지하도록 함 zerohoney추가
  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      locationSearched(location);
    }
  };
  return (
    <>
      <MainTopBox>
        <LogoBox>
          <img src={logo2}></img>
        </LogoBox>
        <TextBox>
          <img src={mainText}></img>
        </TextBox>
        <InputBox>
          <img
            onClick={() => {
              locationSearched(location);
            }}
            src={search}
          ></img>
          <input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            onKeyDown={handleEnterKey}
            type="text"
            placeholder="어디로 떠나시나요?"
          ></input>
        </InputBox>
      </MainTopBox>
    </>
  );
};

export default MainTopPc;
