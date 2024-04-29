import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { PessoaData } from "../model/PessoaData";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { DrawerContatos } from "./Drawer";
import { CardsContato } from "./CardContato";
import { UpdateModal } from "./ModalUpdate";
import { usePessoaDeleteMutate } from "../hooks/usePessoaDataDeleteMutate";
import { useState } from "react";

type TableProps = {
  pessoaData?: PessoaData[];
};

export function SimpleTable({ pessoaData }: TableProps) {
  const { mutate } = usePessoaDeleteMutate();
  const [pessoaId, setPessoaId] = useState(0);

  const submitDelete = (id: number) => {
    if (id) mutate(id);
  };

  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="gray" size="sm">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>NOME</Th>
              <Th>CPF</Th>
              <Th>DATA NASCIMENTO</Th>
              <Th>AÇÕES</Th>
            </Tr>
          </Thead>
          <Tbody>
            {pessoaData?.map((pessoa) => (
              <Tr key={pessoa.id}>
                <Td> {pessoa.id} </Td>
                <Td> {pessoa.nome} </Td>
                <Td> {pessoa.cpf} </Td>
                <Td> {pessoa.dataNascimento}</Td>
                <Td>
                  <DrawerContatos title={pessoa.nome}>
                    <CardsContato contatos={pessoa.listaContatos} />
                  </DrawerContatos>
                  <UpdateModal pessoa={pessoa} />
                  <Tooltip label="Excluir Pessoa">
                    <IconButton
                      marginLeft="15px"
                      variant="solid"
                      colorScheme="gray"
                      aria-label="excluir"
                      size="sm"
                      icon={<DeleteIcon color="red.400" />}
                      isRound={true}
                      onClick={() => {
                        setPessoaId(pessoa.id ? pessoa.id : 0);
                        submitDelete(pessoaId);
                      }}
                    />
                  </Tooltip>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
