import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
// import InfiniteScroll from "react-infinite-scroller";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameContainer from "./GameContainer";

const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,

    hasNextPage,
    fetchNextPage,
  } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const fetchGameCount =
    games?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
  return (
    <Box padding={4}>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={fetchGameCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
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
