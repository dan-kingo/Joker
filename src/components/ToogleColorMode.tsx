import { Button, useColorMode } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
const ToogleColorMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? <FiMoon /> : <FiSun />}
    </Button>
  );
};

export default ToogleColorMode;
