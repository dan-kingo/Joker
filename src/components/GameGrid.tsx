import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameContainer from "./GameContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        spacing={5}
        padding={4}
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
      >
        {isLoading &&
          skeletons.map((Skeleton) => (
            <GameContainer key={Skeleton}>
              <GameCardSkeleton />
            </GameContainer>
          ))}
        {games.map((game) => (
          <GameContainer key={game.id}>
            <GameCard game={game} />
          </GameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
