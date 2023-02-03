import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import React from 'react'
import {CheckIcon, PhoneIcon, SearchIcon} from "@chakra-ui/icons"

type SearchInputProps = {

   // user:
};

export default function SearchComponent() {
  return (
    //flexGrow => take up the remaining width of the parent container
    <Flex flexGrow={1} mr={2} align="center">
      <InputGroup>
          <InputLeftElement  pointerEvents='none'
           children={<SearchIcon color='gray.400' mb={1} /> } />

          <Input placeholder='Search Reddit' fontSize="10px" 
           _placeholder={{color:"gray.500"}}
           _hover = {{
            bg:"white",
            border:"1px solid" ,
            borderColor: "blue.500"
           }}
           _focus ={{
            outline:"none",
            border:"1px solid",
            borderColor:"blue.500"
           }}
           height = "34px"
           bg = "gray.50"
            />
             
      </InputGroup>
    </Flex>
  )
}