import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import GenreSkeleton from "./GenreListSkeleton";

interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenreId?: number;
}
const GenreList = ({ selectedGenreId, onSelect }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

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
                onClick={() => onSelect(genre)}
                whiteSpace="wrap"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
