import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const HeadingText = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms.results.find((p) => p.id === gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading
      as="h1"
      paddingTop={6}
      paddingBottom={4}
      fontSize={{ base: "3xl", lg: "5xl" }}
    >
      {heading}
    </Heading>
  );
};

export default HeadingText;
