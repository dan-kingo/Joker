import {
  Grid,
  GridItem,
  Show,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
          <GridItem paddingX={4} area="side" paddingTop="90px">
            <GenreList
              selectedGenre={selectedGenre}
              onSelect={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>

        <GridItem area="main" paddingTop="90px">
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelect={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Grid>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <GenreList
              selectedGenre={selectedGenre}
              onSelect={(genre) => setSelectedGenre(genre)}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default App;
