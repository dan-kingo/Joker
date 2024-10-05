import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import GenreSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return null;

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="4px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={6}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button variant="link" fontSize="lg">
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
