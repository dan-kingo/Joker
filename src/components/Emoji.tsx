import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
export const emojiMap: { [key: string]: ImageProps } = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
};
const Emoji = ({ rating }: Props) => {
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
