import { Component } from "react";
// import style from "./ImageGallery.module.css"
class ImageGalleryItem extends Component {

  handleImageClick = (img) => {
    // console.log(img);
    this.props.onClick(img)
  }

  render() {
    const {image} = this.props
    return (
      <>
        <li>
          <img onClick={() => this.handleImageClick(image.largeImageURL)} src={image.webformatURL} alt={image.tags} />
        </li>
      </>
    );
  }
}
export default ImageGalleryItem;
