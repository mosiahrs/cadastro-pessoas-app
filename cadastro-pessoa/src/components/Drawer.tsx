import { SmallAddIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Grid,
  Button,
  Tooltip,
  IconButton,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";

type Props = {
  title?: string;
  children: string | JSX.Element | JSX.Element[];
};

export function DrawerContatos({ children, title }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    onOpen();
  };

  return (
    <>
      <Tooltip label="Lista de Contatos">
        <IconButton
          onClick={() => handleClick()}
          m={4}
          variant="solid"
          colorScheme="gray"
          aria-label="Contatos"
          size="sm"
          icon={<i className="bi bi-person-lines-fill"></i>}
          isRound={true}
        />
      </Tooltip>

      <Drawer onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex justify="space-around">{title} - Contatos </Flex>
          </DrawerHeader>
          <Flex justify="center" align="center">
            <Button
              onClick={onOpen}
              leftIcon={<SmallAddIcon />}
              colorScheme="green"
              size="sm"
            >
              Novo Contato
            </Button>
          </Flex>

          <DrawerBody>
            <Grid templateColumns="repeat(1, 1fr)" gap={2}>
              {children}
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
