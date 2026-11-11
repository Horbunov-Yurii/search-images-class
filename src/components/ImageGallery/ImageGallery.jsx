import style from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul className={style.list}>
      {images.map((img) => (
        <ImageGalleryItem onClick={onClick} key={img.id} image={img} />
      ))}
    </ul>
  );
};

export default ImageGallery;
