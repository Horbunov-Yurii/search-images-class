import { Component } from "react";
import styles from "./ImageGalleryItem.module.css";
class ImageGalleryItem extends Component {
  handleImageClick = (img) => {
    // console.log(img);
    this.props.onClick(img);
  };

  render() {
    const { image } = this.props;
    return (
      <li>
        <button
          type="button"
          className={styles.imageButton}
          onClick={() => this.props.onClick(image.largeImageURL)}
        >
          <img
            className={styles.image}
            src={image.webformatURL}
            alt={image.tags}
            title={image.tags}
          />
        </button>
      </li>
    );
  }
}
export default ImageGalleryItem;
