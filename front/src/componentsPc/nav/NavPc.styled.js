import styled from "styled-components";

export const BottomNavBox = styled.div`
  transform: translate(-50%, 0);
  width: 70%;
  height: 60px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #edebeb;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
  left: 50%;
`;

export const BottomNavBtn = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;

  & img {
    height: 60%;
  }
  & .profile_img {
    border-radius: 100%;
    border: 1px solid silver;
  }
  & p {
    margin: 0;
    font-size: 13px;
    color: #737373; // #a6a6a6
  }
`;

export const TopNavBox = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  background-color: white;
  display: flex;
  z-index: 100;
`;
export const TopNavBtn = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 40%;
  }
`;

export const PlanInfoBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const PlanInfoTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

export const PlantInfoDate = styled.p`
  font-size: 10px;
  margin: 0;
`;
