import {
  Card,
  CardBody,
  Heading,
  Image,
  HStack,
  Tooltip,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";
import MetaCritic from "./MetaCritic";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import Emoji, { emojiMap } from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { alt } = emojiMap[game.rating_top];
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />

      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <MetaCritic score={game.metacritic} />
        </HStack>
        <Tooltip label={alt} placement="top" hasArrow>
          <HStack
            justifyContent="space-between"
            _hover={{
              cursor: "pointer",
              color: "gray.500",
              textDecoration: "underline",
            }}
          >
            <Heading fontSize="2xl">{game.name}</Heading>
            <Emoji rating={game.rating_top} />
          </HStack>
        </Tooltip>
      </CardBody>
    </Card>
  );
};

export default GameCard;
