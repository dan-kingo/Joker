import {
  Box,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
export const sortOrders = [
  { value: "", label: "Relevence" },
  { value: "-added", label: "Date Added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Date Released" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];
const SortOrder = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By : {currentSortOrder?.label || "Relevence"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => setSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortOrder;
