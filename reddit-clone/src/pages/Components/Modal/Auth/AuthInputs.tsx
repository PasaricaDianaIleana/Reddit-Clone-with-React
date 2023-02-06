import { authModalState } from "@/atoms/authModalAtom";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Login from "../Login";

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(authModalState);

  return (
    <>
      <Flex direction="column" align="center" width="100%" mt={4}>
        {/* if the view is login => show login inputs */}
        {modalState.view === "login" && <Login />}
        {/* {modalState.view === "signup" && <SignUp />} */}
      </Flex>
    </>
  );
};

export default AuthInputs;