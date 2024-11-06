import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import useGameQueryStore from "../store";
import GenreSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return null;

  return (
    <Box>
      {isLoading &&
        skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      <Heading fontSize="2xl" paddingY={4}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => (
          <ListItem
            _hover={{ bg: "blackAlpha.500" }}
            key={genre.id}
            paddingY="4px"
            bg={genre.id === selectedGenreId ? "blackAlpha.800" : ""}
            borderRadius={8}
          >
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={6}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => setSelectedGenreId(genre.id)}
                whiteSpace="wrap"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
      <hr />
    </Box>
  );
};

export default GenreList;
