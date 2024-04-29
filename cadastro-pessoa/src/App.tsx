import "./App.css";
import { usePessoaData } from "./hooks/usePessoaData";

import ColorModeToggle from "./components/ColorModeToggle";
import { Button, Center, Divider, Heading, IconButton } from "@chakra-ui/react";
import { CreateModal } from "./components/ModalCreate";
import { SimpleTable } from "./components/PessoaTable";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useQueryClient } from "@tanstack/react-query";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage] = useState(8);

  const { data } = usePessoaData(currentPage, itemPerPage);

  function nextPage(page: number) {
    if (data?.totalPaginas && page + 1 >= data.totalPaginas) return page;
    return page + 1;
  }

  function previousPage(page: number) {
    if (page > 0) return page - 1;
    return page;
  }

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["pessoa-paginacao"] });
  }, [currentPage]);

  return (
    <div className="container">
      <div className="up-left">
        <ColorModeToggle />
      </div>
      <div className="header-component">
        <Heading size="lg" colorScheme="purple">
          Listagem de Pessoas
        </Heading>
        <SearchBar />
        <CreateModal />
      </div>

      <Divider />
      <SimpleTable pessoaData={data?.pessoas} />
      <Center>
        <IconButton
          onClick={() => {
            setCurrentPage(previousPage(currentPage));
          }}
          isRound={true}
          variant="solid"
          aria-label="Done"
          fontSize="24px"
          icon={<ChevronLeftIcon />}
        />
        <Button marginLeft="5px" marginRight="5px" colorScheme="blue">
          {currentPage + 1}
        </Button>
        <IconButton
          onClick={() => {
            setCurrentPage(nextPage(currentPage));
          }}
          isRound={true}
          variant="solid"
          aria-label="Done"
          fontSize="24px"
          icon={<ChevronRightIcon />}
        />
      </Center>
    </div>
  );
}

export default App;
