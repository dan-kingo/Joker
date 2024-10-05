import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import GenreSkeleton from "./GenreListSkeleton";

interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelect }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return null;

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      <List>
        {genres.map((genre) => (
          <ListItem
            _hover={{ bg: "blackAlpha.500" }}
            key={genre.id}
            paddingY="4px"
            paddingX="2"
            bg={genre.id === selectedGenre?.id ? "blackAlpha.800" : ""}
            borderRadius={8}
          >
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={6}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => onSelect(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
