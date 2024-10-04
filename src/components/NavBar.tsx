import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/joker-high-resolution-logo-white-transparent.png";
import ToogleColorMode from "./ToogleColorMode";
const NavBar = () => {
  return (
    <>
      <HStack padding={4} justifyContent="space-between">
        <Image src={logo} width="90px" bg="#1A202C" />
        <ToogleColorMode />
      </HStack>
    </>
  );
};

export default NavBar;
