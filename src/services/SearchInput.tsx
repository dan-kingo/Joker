import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSubmit: (searchText: string) => void;
}

const SearchInput = ({ onSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Popover>
      <PopoverTrigger>
        <Button aria-label="Search" paddingX={4}>
          <FaSearch />
        </Button>
      </PopoverTrigger>
      <PopoverContent marginEnd={4}>
        <PopoverArrow />
        <PopoverBody>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (ref.current) onSubmit(ref.current.value);
            }}
          >
            <InputGroup bg="whiteAlpha.50">
              <InputLeftElement>
                <BsSearch />
              </InputLeftElement>
              <Input
                ref={ref}
                placeholder="Search games..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (ref.current) {
                      onSubmit(ref.current.value);
                      ref.current.value = "";
                    }
                  }
                }}
              />
            </InputGroup>
          </form>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default SearchInput;
