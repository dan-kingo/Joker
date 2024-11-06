import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  List,
  ListItem,
} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { iconMap } from "./PlatformIcon";
import useGameQueryStore from "../store";
const PlatformList = () => {
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const { data: platforms, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  if (error) return;
  return (
    <Box paddingBottom={24}>
      <Heading fontSize="2xl" paddingY={4}>
        Platforms
      </Heading>
      <List>
        {platforms.results.map((platform) => (
          <ListItem
            marginBottom={1}
            bg={platform.id === selectedPlatformId ? "blackAlpha.800" : ""}
            key={platform.id}
            paddingY={1.5}
            cursor="pointer"
            _hover={{ bg: "blackAlpha.500" }}
            borderRadius={6}
          >
            <HStack display="flex" alignItems="center" gap={2}>
              <Icon
                key={platform.id}
                as={iconMap[platform.slug]}
                color="gray.500"
                boxSize={6}
              />
              <Button
                variant="link"
                fontSize="lg"
                whiteSpace="wrap"
                textAlign="left"
                onClick={() => setSelectedPlatformId(platform.id)}
              >
                {platform.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PlatformList;
