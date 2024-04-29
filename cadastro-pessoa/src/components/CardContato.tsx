import {
  Card,
  CardBody,
  Flex,
  IconButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ContatoData } from "../model/ContatoData";
import { DeleteIcon } from "@chakra-ui/icons";
import { useContatoDeleteMutate } from "../hooks/useContatoDeleteMutate";
import { useState } from "react";

type CardProps = {
  contatos?: ContatoData[];
};

export function CardsContato({ contatos }: CardProps) {
  const { mutate } = useContatoDeleteMutate();
  const [contatoId, setContatoId] = useState(0);

  const submitDelete = (id: number) => {
    if (id) mutate(id);
  };

  return (
    <>
      {contatos?.map(({ id, nome, telefone, email }) => (
        <Card variant="outline" size="sm" width="auto" key={id}>
          <CardBody>
            <Flex justifyContent="space-between">
              <Flex direction="column">
                <Text fontWeight="bold">{nome}</Text>
                <Text fontSize="sm">Telefone: {telefone}</Text>
                <Text fontSize="sm">Email: {email}</Text>
              </Flex>
              <Flex align="center" justify="flex-end">
                <Tooltip label="Remover Contato">
                  <IconButton
                    marginLeft="15px"
                    variant="ghost"
                    aria-label="excluir-contato"
                    size="sm"
                    icon={<DeleteIcon color="red.400" />}
                    isRound={true}
                    onClick={() => {
                      setContatoId(id ? id : 0);
                      submitDelete(contatoId);
                    }}
                  />
                </Tooltip>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
