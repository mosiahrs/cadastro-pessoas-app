import { EditIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PessoaData } from "../model/PessoaData";
import { usePessoaUpdateMutate } from "../hooks/usePessoaUpdateMutate";

type UpdateModalProps = {
  pessoa?: PessoaData;
};

export function UpdateModal({ pessoa }: UpdateModalProps) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const { mutate, isSuccess } = usePessoaUpdateMutate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const submit = () => {
    if (pessoa) {
      (pessoa.nome = nome), (pessoa.cpf = cpf);
      pessoa.dataNascimento = dataNascimento;

      mutate(pessoa);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
    return;
  }, [isSuccess]);

  useEffect(() => {
    if (isOpen && pessoa) {
      setNome(pessoa.nome);
      setCpf(pessoa.cpf);
      setDataNascimento(pessoa.dataNascimento);
    }
    return;
  }, [isOpen]);

  return (
    <>
      <Tooltip label="Editar Pessoa">
        <IconButton
          onClick={onOpen}
          variant="solid"
          colorScheme="gray"
          aria-label="Editar"
          size="sm"
          icon={<EditIcon color="blue.400" />}
          isRound={true}
        />
      </Tooltip>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Atualizar Pessoa</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl id="nome" isRequired>
              <FormLabel>Nome</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Ex: José da Silva"
                value={nome}
                onChange={(e) => setNome(e.currentTarget.value)}
              />
            </FormControl>

            <FormControl mt={4} id="cpf" isRequired>
              <FormLabel>CPF</FormLabel>
              <Input
                placeholder="Ex: 000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.currentTarget.value)}
              />
            </FormControl>

            <FormControl mt={4} id="dob" isRequired>
              <FormLabel>Data de Nascimento</FormLabel>
              <Input
                type="date"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.currentTarget.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray"
              mr={3}
              onClick={() => {
                submit();
              }}
            >
              Atualizar
            </Button>
            <Button variant="outline" color="" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
