import { authModalState } from "@/atoms/authModalAtom";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase/clientApp";
import { firebaseError } from "../../../../firebase/errors";
import { FirebaseError } from "firebase/app";

const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signUpForm, setSignUpForm] = useState({
    //set the default value for inputs
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);
  const onSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (error) {
      setError("");
    }

    if (signUpForm.password !== signUpForm.confirmPassword) {
      //setError
      setError("Passwords do not match!");
      return;
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };
  // get a change event
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //update form state
    //take the prev value of state
    setSignUpForm((prev: any) => ({
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
        <Input
          required
          name="confirmPassword"
          type="password"
          placeholder="confirmPassword"
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
        {/* don't display error if the error dosen't exist */}
        {error ||
          (userError && (
            <Text textAlign="center" color="red" fontSize="10pt">
              {error ||
                firebaseError[userError.message as keyof typeof firebaseError]}
            </Text>
          ))}

        <Button
          width="100%"
          height="36px"
          mt={2}
          mb={2}
          type="submit"
          isLoading={loading}
        >
          Sign Up
        </Button>
        <Flex fontSize="9pt" justifyContent="center">
          <Text mr={1}>Already a redditor? </Text>
          <Text
            color="blue.500"
            fontWeight={700}
            cursor="pointer"
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                view: "login",
              }))
            }
          >
            LOG IN
          </Text>
        </Flex>
      </form>
    </>
  );
};
export default SignUp;
