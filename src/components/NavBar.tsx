import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/joker-high-resolution-logo-white-transparent.png";
const NavBar = () => {
  return (
    <>
      <HStack padding={4}>
        <Image src={logo} width="90px" bg="#1A202C" />
      </HStack>
    </>
  );
};

export default NavBar;
