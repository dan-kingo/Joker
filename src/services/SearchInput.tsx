import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSubmit: (searchText: string) => void;
}
const SearchInput = ({ onSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          onSubmit(ref.current.value);
          ref.current.value = "";
        }
      }}
    >
      <InputGroup bg="whiteAlpha.50">
        <InputLeftElement>{<BsSearch />}</InputLeftElement>
        <Input ref={ref} borderRadius={20} placeholder="Search games..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
