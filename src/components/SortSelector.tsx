import {
  Box,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortOrders = [
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Date Released" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <Box paddingX={4}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By : Relevance
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem key={order.value} value={order.value}>
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSelector;
