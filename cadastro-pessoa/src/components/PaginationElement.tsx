import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";
import { useState } from "react";

type PaginationProps = {
  totalItems?: number;
  totalPaginas?: number;
  paginaAtual?: number;
};

export function PaginationElement(props: PaginationProps) {
  const [page, setPage] = useState(0);

  function nextPage(page: number) {
    if (props.totalPaginas && page == props.totalPaginas) return page;
    return page + 1;
  }

  function previousPage(page: number) {
    if (page > 0) return page - 1;
    return page;
  }

  return (
    <>
      <IconButton
        onClick={() => {
          setPage(previousPage(page));
        }}
        isRound={true}
        variant="solid"
        aria-label="Done"
        fontSize="24px"
        icon={<ChevronLeftIcon />}
      />
      <Button colorScheme="blue">{page + 1}</Button>
      <IconButton
        onClick={() => {
          setPage(nextPage(page));
        }}
        isRound={true}
        variant="solid"
        aria-label="Done"
        fontSize="24px"
        icon={<ChevronRightIcon />}
      />
    </>
  );
}
