import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

const MetaCritic = ({ score }: Props) => {
  let color = score > 85 ? "green" : score > 75 ? "yellow" : "";
  return (
    <>
      <Badge colorScheme={color} fontSize="xl" paddingX={3} borderRadius={4}>
        {score}
      </Badge>
    </>
  );
};

export default MetaCritic;
