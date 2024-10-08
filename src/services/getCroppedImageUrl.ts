import noImage from "../assets/no-image.jpg";

const getCroppedImageUrl = (url: string) => {
  const target = "media/";

  if (url === null) return noImage;
  const index = url.lastIndexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
