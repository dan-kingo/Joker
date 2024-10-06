import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const HeadingText = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" paddingTop={6} paddingBottom={4} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default HeadingText;
