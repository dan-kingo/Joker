import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameContainer = ({ children }: Props) => {
  return (
    <Box width="280px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameContainer;
