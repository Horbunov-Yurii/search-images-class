import { Component } from "react";
// import style from "./ImageGallery.module.css"
class ImageGalleryItem extends Component {
  render() {
    const {image} = this.props
    return (
      <>
        <li key={image.id}>
          <img src={image.webformatURL} alt={image.tags} />
        </li>
      </>
    );
  }
}
export default ImageGalleryItem;
