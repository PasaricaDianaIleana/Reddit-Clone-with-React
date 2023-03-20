import { auth } from "@/firebase/clientApp";
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./RightContent/RightContent";
import SearchComponent from "./SearchComponent";

const Navbar: React.FC = () => {
  const [user, loading, erros] = useAuthState(auth);
  return (
    //div with css flexbox
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" height="30px" />
        <Image
          src="/images/redditText.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchComponent />
      <RightContent user={user} />
      {/* <Directory/>
           <SearchInput/>
           
    */}
    </Flex>
  );
};
export default Navbar;
