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
  Flex,
  Box,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortOrder from "./components/SortOrder";
import HeadingText from "./components/HeadingText";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          lg: "200px 1fr",
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
          <NavBar
            onOpen={onOpen}
            onSubmit={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem paddingX={4} area="side" paddingTop="90px">
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem area="main" paddingTop="90px">
          <Box paddingX={4}>
            <HeadingText gameQuery={gameQuery} />
            <Flex
              width="100%"
              wrap="wrap"
              paddingBottom={4}
              paddingTop={2}
              gap={3}
            >
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelect={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortOrder
                sortOrder={gameQuery.sortOrder}
                onSelect={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default App;
