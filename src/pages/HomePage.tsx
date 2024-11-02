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
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import HeadingText from "../components/HeadingText";
import PlatformSelector from "../components/PlatformSelector";
import SortOrder from "../components/SortOrder";

const HomePage = () => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <>
      <div>
        <Grid
          templateAreas={{
            base: ' "main"',
            lg: `
                        "side main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr",
          }}
          gap={2}
        >
          <Show above="lg">
            <GridItem paddingX={4} area="side" paddingTop="90px">
              <GenreList />
            </GridItem>
          </Show>

          <GridItem area="main" paddingTop="90px">
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
    </>
  );
};

export default HomePage;
