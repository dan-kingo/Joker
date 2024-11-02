import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import HeadingText from "./components/HeadingText";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortOrder from "./components/SortOrder";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: `"nav nav"
                        "side main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
        gap={2}
      >
        <GridItem
          area="nav"
          bg="blackAlpha.900"
          position="fixed"
          top={0}
          width="100%"
          zIndex={10}
        >
          <NavBar onOpen={onOpen} />
        </GridItem>
        <Show above="lg">
          <GridItem
            paddingX={4}
            area="side"
            position="fixed"
            top="90px"
            overflowY="auto"
            height="100vh"
          >
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main" paddingTop="90px" paddingLeft={8}>
          <Box paddingX={4}>
            <HeadingText />
            <Flex
              width="100%"
              wrap="wrap"
              paddingBottom={4}
              paddingTop={2}
              gap={3}
            >
              <PlatformSelector />
              <SortOrder />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <GenreList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default App;
