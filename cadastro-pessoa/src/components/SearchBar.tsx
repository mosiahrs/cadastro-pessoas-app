import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export function SearchBar() {
  return (
    <>
      <Flex>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input size="md" type="text" placeholder="Busque por Nome ou CPF" />
        </InputGroup>
      </Flex>
    </>
  );
}
