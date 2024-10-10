import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameContainer from "./GameContainer";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,

    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box padding={4}>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        pageStart={0}
        hasMore={hasNextPage}
        loadMore={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          spacing={5}
          marginBottom={2}
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

          {games?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameContainer key={game.id}>
                  <GameCard game={game} />
                </GameContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
