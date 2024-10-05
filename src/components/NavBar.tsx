import { HStack, Image, Button } from "@chakra-ui/react";
import logo from "../assets/joker-high-resolution-logo-white-transparent.png";
import ToogleColorMode from "./ToogleColorMode";
import { FaBars } from "react-icons/fa";

interface Props {
  onOpen: () => void;
}
const NavBar = ({ onOpen }: Props) => {
  return (
    <HStack padding={4} justifyContent="space-between">
      <Image src={logo} width="90px" />
      <HStack>
        <ToogleColorMode />
        <Button
          aria-label="Open Menu"
          onClick={onOpen}
          display={{ base: "block", lg: "none" }}
        >
          {<FaBars />}
        </Button>
      </HStack>
    </HStack>
  );
};

export default NavBar;
