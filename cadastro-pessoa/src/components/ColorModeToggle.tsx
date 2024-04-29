import { Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button className="rounded-button" onClick={toggleColorMode}>
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}

export default ColorModeToggle;
