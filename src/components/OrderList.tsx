import { VStack, Link, Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import { sortOrders } from "./SortOrder";
const OrderList = () => {
  const selectedOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  return (
    <>
      <VStack
        display="flex"
        alignItems="start"
        marginBottom={1}
        cursor="pointer"
        borderRadius={6}
      >
        <Heading fontSize="2xl" paddingY={4}>
          Orders
        </Heading>
        {sortOrders.map((sortOrder) => (
          <Link
            margin={-1}
            onClick={() => setSortOrder(sortOrder.value)}
            width="100%"
            _hover={{ bg: "blackAlpha.500" }}
            variant="link"
            fontSize="lg"
            key={sortOrder.value}
            paddingY={1.5}
            cursor="pointer"
            borderRadius={6}
            color="gray.500"
            fontWeight="bold"
            bg={sortOrder?.value === selectedOrder ? "blackAlpha.800" : ""}
          >
            {sortOrder.label}
          </Link>
        ))}
      </VStack>
      <hr />
    </>
  );
};

export default OrderList;
