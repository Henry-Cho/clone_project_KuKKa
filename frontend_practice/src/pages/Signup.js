import React from "react";
import styled from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Text from "../elements/Text";
// import { emailCheck } from "../shared/common";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
const Signup = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");
  const signup = () => {
    if (pwd !== pwd_check) {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }

    if (id === "" || pwd === "" || user_name === "") {
      window.alert("아이디, 비밀번호가 공란입니다.");
      return;
    }
    dispatch(userActions.signupDB(id, pwd, user_name));
  };
  return (
    <SignupFrame>
      <SignupTitle>회원가입</SignupTitle>
      <SignupBox>
        <InputRow>
          <TextBox>아이디</TextBox>
          <Input
            placeholder="예) henry76"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </InputRow>
        <InputRow>
          <TextBox>비밀번호</TextBox>
          <Input
            placeholder="비밀번호를 입력해주세요"
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </InputRow>
        <InputRow>
          <TextBox>비밀번호 확인</TextBox>
          <Input
            placeholder="비밀번호를 한 번 더 입력해주세요"
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </InputRow>
        <InputRow>
          <TextBox>이메일</TextBox>
          <Input
            placeholder="이메일을 입력해주세요."
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </InputRow>
        <Button
          is_header
          text="회원가입"
          width="100%"
          bg="#ECECEC"
          color="#333333"
          _onClick={signup}
        />
        <Text>지금 회원가입 하시면 1,000p 바로 지급!</Text>
      </SignupBox>
    </SignupFrame>
  );
};
// 회원가입 전체적인 윤곽
const SignupFrame = styled.div`
  padding: 0 60px;
  text-align: center;
`;
// 회원가입 타이틑 들어갈 곳
const SignupTitle = styled.h2`
  padding: 40px 0;
  margin: 0;
  font-size: 30px;
  border-bottom: 1px solid #ececec;
`;
// 회원가입 박스
const SignupBox = styled.div`
  height: 624px;
  width: 620px;
  padding: 70px 20px 60px 20px;
  max-width: 620px;
  margin: auto;
`;
const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TextBox = styled.div`
  width: 200px;
  text-align: left;
  display: flex;
  align-items: center;
`;
export default Signup;
