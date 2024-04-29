import { AddIcon } from "@chakra-ui/icons";
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
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PessoaData } from "../model/PessoaData";
import { usePessoaMutate } from "../hooks/usePessoaMutate";

export function CreateModal() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const { mutate, isSuccess } = usePessoaMutate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const submit = () => {
    const pessoaData: PessoaData = {
      nome,
      cpf,
      dataNascimento,
    };

    mutate(pessoaData);
  };

  const clearState = () => {
    setNome("");
    setCpf("");
    setDataNascimento("");
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
      clearState();
    }
    return;
  }, [isSuccess]);

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<AddIcon />}
        colorScheme="gray"
        size="sm"
      >
        Add nova pessoa
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nova Pessoa</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Pessoa</Tab>
                <Tab>Contato</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
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
                </TabPanel>

                <TabPanel>
                  <FormControl id="nome-contato" isRequired>
                    <FormLabel>Nome Contato</FormLabel>
                    <Input placeholder="Ex: José da Silva" />
                  </FormControl>

                  <FormControl id="email-contato" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      placeholder="Ex: josesilva@yahoo.com.br"
                      type="email"
                    />
                  </FormControl>

                  <FormControl id="telefone-contato" isRequired>
                    <FormLabel>Telefone</FormLabel>
                    <Input placeholder="Ex: (44) 998888-4444" />
                  </FormControl>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray"
              mr={3}
              onClick={() => {
                submit();
              }}
            >
              Salvar
            </Button>
            <Button variant="outline" color="" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
