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
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import HeadingText from "./components/HeadingText";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortOrder from "./components/SortOrder";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
              selectedGenreId={gameQuery.genreId}
              onSelect={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
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
                selectedPlatformId={gameQuery.platformId}
                onSelect={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
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
              selectedGenreId={gameQuery.genreId}
              onSelect={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default App;
