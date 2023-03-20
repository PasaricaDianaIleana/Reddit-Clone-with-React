import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { auth } from "../../../firebase/clientApp";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { firebaseError } from "../../../firebase/errors";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    //set the default value for inputs
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // get a change event
  const onSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };
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
        <Text textAlign="center" color="red" fontSize="10pt">
          {firebaseError[error?.message as keyof typeof firebaseError]}
        </Text>
        <Button
          isLoading={loading}
          width="100%"
          height="36px"
          mt={2}
          mb={2}
          type="submit"
        >
          Log In
        </Button>
        <Flex justifyContent="center" mb={2}>
          <Text fontSize="9pt" mr={1}>
            Forgot your password?
          </Text>
          <Text
            fontSize="9pt"
            color="blue.500"
            cursor="pointer"
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                view: "resetPassword",
              }))
            }
          >
            Reset
          </Text>
        </Flex>
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
