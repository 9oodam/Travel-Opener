import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import {
  Input,
  InputBox,
  Label,
  SignupMidBox,
  Text,
  ChkBtn,
  Title,
  TryBtn,
} from "./SignupPc.styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignupMid = ({ page }) => {
  const [user_id, setId] = useState();
  const [user_pw, setPw] = useState();
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();

  const [textId, setTextId] = useState("");
  const [textPw, setTextPw] = useState("");
  const [textEmail, setTextEmail] = useState("");
  const [textNick, setTextNick] = useState("");
  // 회원가입 성공시 로그인으로 이동
  const navigate = useNavigate();
  const [textColor, setTextColor] = useState({
    idColor: "red",
    pwColor: "red",
    emailColor: "red",
    nickColor: "red",
  });

  // 이메일 중복,닉네임 중복,이메일,비밀번호 정규식에 대한 회원가입 가능 여부를 담은 배열,
  const [signUpValidationResult, setSignUpValidationResult] = useState({
    isUserId: false,
    isUserPw: false,
    isNickName: false,
    isEmail: false,
  });

  // 아이디 중복 체크
  const dupChk1 = async () => {
    console.log("아이디 중복 체크", user_id);

    if (user_id == undefined) {
      return;
    } else {
      // useMutation 사용해서 axios post 보내기
      // const data = useMutation();
      const duplicateIdResult = await axios.post("/user/duplicateId", {
        user_id,
      });

      if (duplicateIdResult.data == "already user exist") {
        setTextId("사용이 불가능한 아이디입니다. 다시 입력 부탁드립니다.");
        setTextColor({
          ...textColor,
          idColor: "red",
        });
      } else {
        setTextId("사용 가능한 아이디입니다.");
        setTextColor({
          ...textColor,
          idColor: "#277bc0",
        });
        setSignUpValidationResult({
          ...signUpValidationResult,
          isUserId: true,
        });
      }
    }
  };

  // 아이디 중복 체크 react-query
  const dupChk1Mutation = useMutation(dupChk1);

  // 닉네임 중복 체크
  const dupChk2 = async () => {
    console.log("닉네임 중복 체크", nickname);

    if (nickname === undefined) {
      return;
    } else {
      // useMutation 사용해s서 axios post 보내기

      const duplicateNickNameResult = await axios.post(
        "/user/duplicateNickName",
        {
          nickname,
        }
      );
      if (duplicateNickNameResult.data === "already user exist") {
        setTextNick("사용이 불가능한 닉네임입니다. 다시 입력 부탁드립니다.");
        setTextColor({
          ...textColor,
          nickColor: "red",
        });
      } else {
        setTextNick("사용 가능한 닉네임입니다.");
        setTextColor({
          ...textColor,
          nickColor: "#277bc0",
        });
        setSignUpValidationResult({
          ...signUpValidationResult,
          isNickName: true,
        });
      }
    }
  };

  // 닉네임 중복 체크 react-query
  const dupChk2Mutation = useMutation(dupChk2);
  // 회원가입 axios zerohoney
  const signUp = async () => {
    const signUpResult = await axios.post("/user/signUp", {
      user_id,
      user_pw,
      nickname,
      email,
    });
    if (signUpResult.data === "already user exist") {
      alert("이미 가입된 유저 입니다!");
    } else if (signUpResult.data === "user signUp success") {
      navigate("/login");
    }
  };

  // 닉네임 중복 체크 react-query
  const signUpMutation = useMutation(signUp);

  // 이메일 형식 확인 정규식
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // 비밀번호 형식 확인 정규식 zerohoney
  const pwRegex =
    /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])(?=.*[0-9])(?=.*[a-zA-Z]).{8,12}$/;

  // 최종 회원가입
  const trySignup = () => {
    // 중복 체크 완료, 이메일 형식 체크 된 후 post 날리기
    const isEveryTrue = Object.values(signUpValidationResult).every(
      (value) => value === true
    );

    if (isEveryTrue) {
      console.log("통과");
    } else {
      console.log("중복확인 및 이메일,비밀번호 형식을 확인해 주세요");
    }
  };

  // 로그인 체크
  const tryLogin = () => {
    // 아이디 없을 때
    // 비밀번호 틀렸을 때
  };

  if (page == "회원가입") {
    return (
      <>
        <SignupMidBox>
          <Title>{page}</Title>
          <InputBox>
            <Label>아이디</Label>
            <Input
              onChange={(e) => {
                setSignUpValidationResult({
                  ...signUpValidationResult,
                  isUserId: false,
                });
                setId(e.target.value);
                setTextId("중복확인을 눌러주세요");
                setTextColor({
                  ...textColor,
                  idColor: "red",
                });
              }}
              type="text"
            ></Input>
            <ChkBtn
              onClick={() => {
                dupChk1Mutation.mutate();
              }}
            >
              중복 확인
            </ChkBtn>
            <Text color={textColor.idColor}>{textId}</Text>
          </InputBox>
          <InputBox>
            <Label>비밀번호</Label>
            <Input
              onChange={(e) => {
                // 비밀번호 정규식 설정 zerohoney
                const isValiePw = pwRegex.test(e.target.value);
                if (isValiePw) {
                  setPw(e.target.value);
                  setSignUpValidationResult({
                    ...signUpValidationResult,
                    isUserPw: true,
                  });
                  setTextPw("올바른 형식의 비밀번호 입니다.");
                  setTextColor({
                    ...textColor,
                    pwColor: "#277bc0",
                  });
                } else {
                  setTextPw(
                    "8자 이상, 12자 이하에 특수문자 하나가 들어가햐 합니다."
                  );
                  setTextColor({
                    ...textColor,
                    pwColor: "red",
                  });
                  setSignUpValidationResult({
                    ...signUpValidationResult,
                    isUserPw: false,
                  });
                }
              }}
              type="password"
            ></Input>
            <Text color={textColor.pwColor}>{textPw}</Text>
          </InputBox>
          <InputBox>
            <Label>이메일</Label>
            <Input
              onChange={(e) => {
                let isValidEmail = emailRegex.test(e.target.value);
                if (isValidEmail == false) {
                  setTextEmail("올바른 이메일 형식이 아닙니다.");
                  setTextColor({
                    ...textColor,
                    emailColor: "red",
                  });
                  setSignUpValidationResult({
                    ...signUpValidationResult,
                    isEmail: false,
                  });
                } else if (isValidEmail == true) {
                  setTextEmail("사용 가능한 이메일 형식입니다.");
                  setTextColor({
                    ...textColor,
                    emailColor: "#277bc0",
                  });
                  setEmail(e.target.value);
                  setSignUpValidationResult({
                    ...signUpValidationResult,
                    isEmail: true,
                  });
                }
              }}
              type="email"
            ></Input>
            <Text color={textColor.emailColor}>{textEmail}</Text>
          </InputBox>
          <InputBox>
            <Label>닉네임</Label>
            <Input
              onChange={(e) => {
                setSignUpValidationResult({
                  ...signUpValidationResult,
                  isNickName: false,
                });
                setNickname(e.target.value);
                setTextNick("중복확인을 눌러주세요");
                setTextColor({
                  ...textColor,
                  nickColor: "red",
                });
              }}
              type="text"
            ></Input>
            <ChkBtn
              onClick={() => {
                dupChk2Mutation.mutate();
              }}
            >
              중복 확인
            </ChkBtn>
            <Text color={textColor.nickColor}>{textNick}</Text>

            <TryBtn
              onClick={() => {
                signUpMutation.mutate();
              }}
            >
              {page}
            </TryBtn>
          </InputBox>
        </SignupMidBox>
      </>
    );
  } else if (page == "로그인") {
    return (
      <>
        <SignupMidBox>
          <Title>{page}</Title>
          <InputBox>
            <Label>아이디</Label>
            <Input type="text"></Input>
            <Text color={textColor.idColor}>{textId}</Text>
          </InputBox>
          <InputBox>
            <Label>비밀번호</Label>
            <Input type="password"></Input>
            <Text color={textColor.pwColor}>{textPw}</Text>

            <TryBtn>{page}</TryBtn>
          </InputBox>
        </SignupMidBox>
      </>
    );
  }
};

export default SignupMid;