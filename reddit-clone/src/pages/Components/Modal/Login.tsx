import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    //set the default value for inputs
    email: "",
    password: "",
  });

  const onSumbit = () => {};
  // get a change event
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //update form state
    //take the prev value of state
    setLoginForm((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <>
      <form onSubmit={onSumbit}>
        <Input
          required
          type="email"
          name="email"
          placeholder="email"
          mb={2}
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          bg="gray.50"
          onChange={onChange}
        />
        <Input
          required
          name="password"
          type="password"
          placeholder="password"
          onChange={onChange}
          mb={2}
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          bg="gray.50"
        />
        <Button width="100%" height="36px" mt={2} mb={2} type="submit">
          Log In
        </Button>
        <Flex fontSize="9pt" justifyContent="center">
          <Text mr={1}>New here?</Text>
          <Text
            color="blue.500"
            fontWeight={700}
            cursor="pointer"
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                view: "signup",
              }))
            }
          >
            SIGN UP
          </Text>
        </Flex>
      </form>
    </>
  );
};

export default Login;
