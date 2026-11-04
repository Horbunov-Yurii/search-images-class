import { Component } from "react";
import style from "./ImageGallery.module.css"
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <>
        <ul className={style.list}>
          {images.map((img) => {
            return (
            <ImageGalleryItem key={img.id} image={img}/>
            );
          })}
        </ul>
      </>
    );
  }
}
export default ImageGallery;
