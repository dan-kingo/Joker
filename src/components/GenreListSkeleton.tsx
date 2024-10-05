import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <List paddingY={1}>
      <ListItem>
        <Skeleton height="35px"></Skeleton>
        <SkeletonText></SkeletonText>
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;
