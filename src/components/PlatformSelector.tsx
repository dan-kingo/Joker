import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ selectedPlatform, onSelect }: Props) => {
  const { data: platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms.results.map((platform) => (
            <MenuItem key={platform.id} onClick={() => onSelect(platform)}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
